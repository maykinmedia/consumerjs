import { Consumer } from 'consumer';
import { ConsumerObject } from 'consumer-object';


describe('Consumer', function() {
    beforeEach(function() {
        jasmine.Ajax.install();

        jasmine.Ajax
          .stubRequest('http://example.com/api/posts/200')
          .andReturn({ status: 200, responseText: '{"title":"FooBar"}' });
        jasmine.Ajax
          .stubRequest('http://example.com/api/posts/201')
          .andReturn({ status: 200, responseText: '[{"title":"FooBar"}, {"title":"FooBaz"}]' });
        jasmine.Ajax
          .stubRequest('http://example.com/api/posts/202?foo=bar')
          .andReturn({ status: 200, responseText: '[{"title":"FooBar"}, {"title":"FooBaz"}]' });
        jasmine.Ajax
          .stubRequest('http://example.com/api/posts/203?api_key=ABC')
          .andReturn({ status: 200, responseText: '[{"title":"FooBar"}, {"title":"FooBaz"}]' });
        jasmine.Ajax
          .stubRequest('http://example.com/api/posts/204')
          .andReturn({ status: 200 });
        jasmine.Ajax
          .stubRequest('http://example.com/api/posts/205?format=json&api_key=ABC')
          .andReturn({ status: 200, responseText: '[{"title":"FooBar"}, {"title":"FooBaz"}]' });
        jasmine.Ajax
          .stubRequest('http://example.com/api/posts/206')
          .andReturn({ status: 200, responseText: '{"path":{"to":{"data":[{"title":"FooBar"}]}}}' });
        jasmine.Ajax
          .stubRequest('http://example.com/api/posts/207')
          .andReturn({ status: 200, responseText: '{"data":{"title":"FooBar"}}' });
        jasmine.Ajax
          .stubRequest('http://example.com/api/posts/404')
          .andReturn({ status: 404 });
    });

    afterEach(function() {
        jasmine.Ajax.uninstall();
    });

    it('should instantiate', function(done) {
        class Post extends ConsumerObject {}

        let consumer = new Consumer('http://example.com/api', Post);
        expect(consumer.constructor.name).toBe('Consumer');
        expect(consumer.endpoint).toBe('http://example.com/api');
        expect(consumer.objectClass.name).toBe('Post');

        consumer.get('/posts/200')
            .then(data => {
                expect(data.constructor.name).toBe('Post');
                done();
            });
    });

    it('should extend', function(done) {
        class Post extends ConsumerObject {}
        class PostConsumer extends Consumer {
            constructor() {
                super();
                this.endpoint = 'http://example.com/api';
                this.objectClass = Post;
            }
        }

        let consumer = new PostConsumer();
        expect(consumer.constructor.name).toContain('Consumer');
        expect(consumer.endpoint).toBe('http://example.com/api');
        expect(consumer.objectClass.name).toBe('Post');

        consumer.get('/posts/200')
            .then(data => {
                expect(data.constructor.name).toBe('Post');
                done();
            });
    });

    it('should resolve with a single ConsumerObject', function(done) {
        class Post extends ConsumerObject {}

        let consumer = new Consumer('http://example.com/api', Post);
        consumer.get('/posts/200')
            .then(data => {
                expect(data.constructor.name).toBe('Post');
                expect(data.__consumer__.constructor.name).toBe('Consumer');
                expect(data.title).toBe('FooBar');
                done();
            });
    });

    it('should resolve with a range of ConsumerObjects', function(done) {
        class Post extends ConsumerObject {}

        let consumer = new Consumer('http://example.com/api', Post);
        consumer.get('/posts/201')
            .then(data => {
                expect(Array.isArray(data)).toBeTruthy();

                expect(data[0].constructor.name).toBe('Post');
                expect(data[0].__consumer__.constructor.name).toBe('Consumer');
                expect(data[0].title).toBe('FooBar');

                expect(data[1].constructor.name).toBe('Post');
                expect(data[1].__consumer__.constructor.name).toBe('Consumer');
                expect(data[1].title).toBe('FooBaz');
                done();
            });
    });

    it('should reject with a HttpResponseMessage', function(done) {
        class Post extends ConsumerObject {}

        let consumer = new Consumer('http://example.com/api', Post);
        consumer.get('/posts/404')
            .catch(data => {
                expect(data.constructor.name).toBe('HttpResponseMessage');
                done();
            });
    });

    it('should support DELETE', function(done) {
        class Post extends ConsumerObject {}

        let consumer = new Consumer('http://example.com/api', Post);
        consumer.delete('/posts/202', {foo: 'bar'})
            .then(() => {
                let request = jasmine.Ajax.requests.mostRecent();
                expect(request.method).toBe('DELETE');
                expect(request.url).toBe('http://example.com/api/posts/202?foo=bar');
                done();
            });
    });

    it('should support GET', function(done) {
        class Post extends ConsumerObject {}

        let consumer = new Consumer('http://example.com/api', Post);
        consumer.get('/posts/202', {foo: 'bar'})
            .then(() => {
                let request = jasmine.Ajax.requests.mostRecent();
                expect(request.method).toBe('GET');
                expect(request.url).toBe('http://example.com/api/posts/202?foo=bar');
                done();
            });
    });

    it('should support PATCH', function(done) {
        class Post extends ConsumerObject {}

        let consumer = new Consumer('http://example.com/api', Post);
        consumer.patch('/posts/202', {foo: 'baz'}, {foo: 'bar'})
            .then(() => {
                let request = jasmine.Ajax.requests.mostRecent();
                expect(request.method).toBe('PATCH');
                expect(request.params).toBe('{"foo":"baz"}');
                expect(request.url).toBe('http://example.com/api/posts/202?foo=bar');
                done();
            });
    });

    it('should support POST', function(done) {
        class Post extends ConsumerObject {}

        let consumer = new Consumer('http://example.com/api', Post);
        consumer.post('/posts/202', {foo: 'baz'}, {foo: 'bar'})
            .then(() => {
                let request = jasmine.Ajax.requests.mostRecent();
                expect(request.method).toBe('POST');
                expect(request.params).toBe('{"foo":"baz"}');
                expect(request.url).toBe('http://example.com/api/posts/202?foo=bar');
                done();
            });
    });

    it('should support PUT', function(done) {
        class Post extends ConsumerObject {}

        let consumer = new Consumer('http://example.com/api', Post);
        consumer.put('/posts/202', {foo: 'baz'}, {foo: 'bar'})
            .then(() => {
                let request = jasmine.Ajax.requests.mostRecent();
                expect(request.method).toBe('PUT');
                expect(request.params).toBe('{"foo":"baz"}');
                expect(request.url).toBe('http://example.com/api/posts/202?foo=bar');
                done();
            });
    });

    it('should support default properties', function(done) {
        class Post extends ConsumerObject {}

        let options = {
                defaultParameters: {
                    'api_key': 'ABC',
                }
            },
            consumer = new Consumer('http://example.com/api', Post, options);

        consumer.get('/posts/203')
            .then(() => {
                let request = jasmine.Ajax.requests.mostRecent();
                expect(request.method).toBe('GET');
                expect(request.url).toBe('http://example.com/api/posts/203?api_key=ABC');
                done();
            });
    });

    it('should support default properties combined with parameters', function(done) {
        class Post extends ConsumerObject {}

        let options = {
                defaultParameters: {
                    'api_key': 'ABC',
                }
            },
            consumer = new Consumer('http://example.com/api', Post, options);

        consumer.get('/posts/205', { format: 'json' })
            .then(() => {
                let request = jasmine.Ajax.requests.mostRecent();
                expect(request.method).toBe('GET');
                expect(request.url).toBe('http://example.com/api/posts/205?format=json&api_key=ABC');
                done();
            });
    });

    it('should support csrf', function(done) {
        class Post extends ConsumerObject {}

        let consumer = new Consumer('http://example.com/api', Post);

        spyOn(consumer, 'getCookie').and.returnValue('ABC');

        consumer.post('/posts/200')
            .then(() => {
                let request = jasmine.Ajax.requests.mostRecent();
                expect(request.requestHeaders[consumer.csrfHeader]).toBe('ABC');
                expect(request.method).toBe('POST');
                expect(request.url).toBe('http://example.com/api/posts/200');
                done();
            });
    });

    it('should ignore csrf on safe requests', function(done) {
        class Post extends ConsumerObject {}

        let consumer = new Consumer('http://example.com/api', Post);

        spyOn(consumer, 'getCookie').and.returnValue('ABC');

        consumer.get('/posts/200')
            .then(() => {
                let request = jasmine.Ajax.requests.mostRecent();
                expect(request.requestHeaders[consumer.csrfHeader]).toBeUndefined();
                expect(request.method).toBe('GET');
                expect(request.url).toBe('http://example.com/api/posts/200');
                done();
            });
    });

    it('should support custom headers', function(done) {
        class Post extends ConsumerObject {}

        let consumer = new Consumer('http://example.com/api', Post);
        consumer.addHeader('X-Requested-With', 'Commodore 64');

        consumer.get('/posts/200')
            .then(() => {
                let request = jasmine.Ajax.requests.mostRecent();
                expect(request.requestHeaders['X-Requested-With']).toBe('Commodore 64');
                expect(request.method).toBe('GET');
                expect(request.url).toBe('http://example.com/api/posts/200');
                done();
            });
    });

    it('should support default headers', function(done) {
        class Post extends ConsumerObject {}

        let options = {
                defaultHeaders: {
                    'api_key': 'ABC',
                },
                defaultParameters: {
                    'foo': 'bar',
                }
            },
            consumer = new Consumer('http://example.com/api', Post, options);

        consumer.get('/posts/202')
            .then(() => {
                let request = jasmine.Ajax.requests.mostRecent();
                expect(request.requestHeaders.api_key).toBe('ABC');
                expect(request.method).toBe('GET');
                expect(request.url).toBe('http://example.com/api/posts/202?foo=bar');
                done();
            });
    });

    it('should allow submitting ConsumerObject instances', function(done) {
        class Post extends ConsumerObject {}

        let consumer = new Consumer('http://example.com/api', Post);
        consumer.get('/posts/200')
            .then(data => {
                expect(data.constructor.name).toBe('Post');
                expect(data.__consumer__.constructor.name).toBe('Consumer');
                expect(data.title).toBe('FooBar');

                consumer.post('/posts/200', data)
                    .then(() => {
                        done();
                    });
            });
    });

    it('should support a single parser method for both list and scalar', function(done) {
        class Post extends ConsumerObject {}
        class PostConsumer extends Consumer {
            constructor() {
                super();
                this.endpoint = 'http://example.com/api';
                this.objectClass = Post;
            }

            parseEntity(data) {
                let object = new this.objectClass(data, this);
                object.fruit = 'banana';
                return object;
            }
        }

        let consumer = new PostConsumer();
        consumer.get('/posts/200')
            .then(data => {
                expect(data.fruit).toBe('banana');
                done();
            });

        consumer.get('/posts/201')
        .then(data => {
            expect(data[0].fruit).toBe('banana');
            done();
        });
    });

    it('should return undefined when response is empty (issue #2)', function(done) {
        class Post extends ConsumerObject {}

        let consumer = new Consumer('http://example.com/api', Post);
        consumer.delete('/posts/204')
            .then(data => {
                let request = jasmine.Ajax.requests.mostRecent();
                expect(request.method).toBe('DELETE');
                expect(data).toBeUndefined();
                done();
            });
    });

    it('should be able to abort or cancel requests (issue #3)', function(done) {
        class Post extends ConsumerObject {}

        let consumer = new Consumer('http://example.com/api', Post),
            promise1 = {},
            promise2 = {};

        // Abort
        promise1 = consumer.get('/posts/200');
        promise1.abort();
        promise1
            .catch(response => {
                expect(response.responseType).toBe('abort');
                done();
            });

        // Cancel
        promise2 = consumer.get('/posts/200');
        promise2.cancel();
        promise2
            .catch(response => {
                expect(response.responseType).toBe('abort');
                done();
            });
    });

    it('should be able to set the content type (issue #10)', function(done) {
        class Post extends ConsumerObject {}
        class PostConsumer extends Consumer {
            constructor() {
                super();
                this.endpoint = 'http://example.com/api';
                this.objectClass = Post;
            }
        }

        let consumer = new PostConsumer();

        consumer.get('/posts/200')
            .then(() => {
                let request = jasmine.Ajax.requests.mostRecent();
                expect(request.requestHeaders['Content-Type']).toBe('application/json');

                consumer.contentType = 'application/vnd.api+json';

                consumer.get('/posts/200')
                    .then(() => {
                        let request = jasmine.Ajax.requests.mostRecent();
                        expect(request.requestHeaders['Content-Type']).toBe('application/vnd.api+json');
                        done();
                    });
        });
    });

    it('should be able to set a custom path to data (issue #11)', function(done) {
        class Post extends ConsumerObject {}
        class PostConsumer extends Consumer {
            constructor() {
                super();
                this.endpoint = 'http://example.com/api';
                this.objectClass = Post;
                this.parserDataPath = 'path.to.data';
            }
        }

        let consumer = new PostConsumer();

        consumer.get('/posts/206')
            .then(data => {
                expect(data[0].title).toEqual('FooBar');

                consumer.parserDataPath = 'data';

                consumer.get('/posts/207')
                    .then(data2 => {
                        expect(data2.title).toEqual('FooBar');
                        done();
                    });
            });
    });

    it('should be able to serialize an array (issue #15)', function() {
        let consumer = new Consumer,
            serializedObject = {};

        serializedObject = consumer.serialize(['foo', 'bar']);
        expect(serializedObject).toEqual(['foo', 'bar']);
    });
});
