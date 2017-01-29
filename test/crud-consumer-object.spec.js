import { CrudConsumer } from '../src/crud-consumer';
import { CrudConsumerObject } from '../src/crud-consumer-object';


describe('CrudConsumerObject', function() {
    beforeEach(function() {
        jasmine.Ajax.install();

        jasmine.Ajax
          .stubRequest('http://example.com/api/posts/')
          .andReturn({ status: 201 });
        jasmine.Ajax
          .stubRequest('http://example.com/api/posts/1')
          .andReturn({ status: 200 });
    });

    afterEach(function() {
        jasmine.Ajax.uninstall();
    });

    it('should support a partial update using update', function(done) {
        class Post extends CrudConsumerObject {}
        class PostConsumer extends CrudConsumer {}

        let post = new Post({ id: 1, foo: 'bar', bar: { foo: 'bar', bar: 'baz' }, baz: ['foo', 'bar'], fooBar: 'foobar', fooBaz: { foo: 'foo', bar: 'bar' } }, new PostConsumer('http://example.com/api/posts'));

        post.foo = 'baz';
        post.bar.foo = 'baz';
        post.baz = ['foo', 'baz'];
        delete post.fooBar;
        delete post.fooBaz.bar;

        expect(post.getChangedFields()).toEqual({ foo: 'baz', bar: { foo: 'baz' }, baz: [ 'foo', 'baz' ], fooBaz: { bar: null }, fooBar: null });

        post.update()
            .then(() => {
                let request = jasmine.Ajax.requests.mostRecent();
                expect(request.method).toBe('PATCH');
                expect(request.params).toBe('{"foo":"baz","bar":{"foo":"baz"},"baz":["foo","baz"],"fooBaz":{"bar":null},"fooBar":null}');
                expect(request.url).toBe('http://example.com/api/posts/1');
                expect(post.__initial_state__.foo).toBe('baz');
                expect(post.__initial_state__.bar).toEqual({ foo: 'baz', bar: 'baz' });
                expect(post.__initial_state__.baz).toEqual(['foo', 'baz']);
                expect(post.__initial_state__.fooBar).toBeUndefined();
                expect(post.__initial_state__.fooBaz.bar).toBeUndefined();
                expect(post.getChangedFields()).toEqual({});
                done();
            });
    });

    it('should not trigger a request if state has not changed', function(done) {
        class Post extends CrudConsumerObject {}
        class PostConsumer extends CrudConsumer {}

        let post = new Post({ id: 1, foo: 'foo', bar: 'bar', baz: 'baz' }, new PostConsumer('http://example.com/api/posts'));

        spyOn(post.__consumer__, 'patch').and.callThrough();

        post.update()
            .then(() => {
                expect(post.__consumer__.patch).not.toHaveBeenCalled();
                done();
            });
    });

    it('should support a full update using save', function(done) {
        class Post extends CrudConsumerObject {}
        class PostConsumer extends CrudConsumer {}

        let post = new Post({ id: 1, foo: 'foo', bar: 'bar', baz: 'baz' }, new PostConsumer('http://example.com/api/posts'));
        post.foo = 'bar';

        post.save()
            .then(() => {
                let request = jasmine.Ajax.requests.mostRecent();
                expect(request.method).toBe('PUT');
                expect(request.params).toBe('{"id":1,"foo":"bar","bar":"bar","baz":"baz"}');
                expect(request.url).toBe('http://example.com/api/posts/1');
                expect(post.__initial_state__.foo).toBe('bar');
                expect(post.getChangedFields()).toEqual({});
                done();
            });
    });

    it('should support a delete using delete', function(done) {
        class Post extends CrudConsumerObject {}
        class PostConsumer extends CrudConsumer {}

        let post = new Post({ id: 1, foo: 'foo', bar: 'bar', baz: 'baz' }, new PostConsumer('http://example.com/api/posts'));

        post.delete()
            .then(() => {
                let request = jasmine.Ajax.requests.mostRecent();
                expect(request.method).toBe('DELETE');
                expect(request.url).toBe('http://example.com/api/posts/1');
                done();
            });
    });

    it('should throw an exception if it cannot determine the path', function() {
        class Post extends CrudConsumerObject {}
        class PostConsumer extends CrudConsumer {}

        let post = new Post({ foo: 'foo', bar: 'bar', baz: 'baz' }, new PostConsumer('http://example.com/api/posts'));

        expect(function() { post.update(); }).toThrow(new Error('Can\'t determine path, please set pk or id or define getPath()'));
        expect(function() { post.save(); }).toThrow(new Error('Can\'t determine path, please set pk or id or define getPath()'));
        expect(function() { post.delete(); }).toThrow(new Error('Can\'t determine path, please set pk or id or define getPath()'));
    });
});
