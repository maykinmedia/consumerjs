import { CrudConsumer } from '../src/crud-consumer';
import { CrudConsumerObject } from '../src/crud-consumer-object';
import { AbstractPaginatedList } from '../src/abstract-paginated-list';


describe('AbstractPaginatedList', function() {
    beforeEach(function() {
        this.p3 = JSON.stringify({
            page: 3,
            count: 5,

            results: [
                { title: 'Foo 7'},
                { title: 'Foo 8'},
                { title: 'Foo 9'},

            ]
        });

        jasmine.Ajax.install();

        jasmine.Ajax
          .stubRequest('http://example.com/api/posts/?page=3')
          .andReturn({ status: 200, responseText: this.p3 });

        this.consumer = new CrudConsumer('http://example.com/api/', CrudConsumerObject, {
            parserDataPath: 'results',
            listClass: AbstractPaginatedList
        });
    });

    afterEach(function() {
        jasmine.Ajax.uninstall();
    });

    it('should behave like an Array like object', function(done) {
        this.consumer.get('posts/', { page: 3 })
            .then(list => {
                expect(list.length).toBe(3);
                expect(list[0].title).toBe('Foo 7');
                expect(list[1].title).toBe('Foo 8');
                expect(list[2].title).toBe('Foo 9');
                done();
            });
    });

    it('should receive the method, the path, and data from the request', function(done) {
        this.consumer.post('posts/', { foo: 'bar' }, { page: 3 })
            .then(list => {
                expect(list.currentMethod).toBe('post');
                expect(list.currentPath).toBe('posts/?page=3');
                expect(list.currentData).toEqual({ foo: 'bar' });
                done();
            });
    });

    it('should throw an error indicating the lack of implementation whe calling first()', function(done) {
        this.consumer.post('posts/', { foo: 'bar' }, { page: 3 })
            .then(list => list.first())
            .catch (e => {
                expect(e.message).toBe('List does not implement first()!');
                done();
            });
    });

    it('should throw an error indicating the lack of implementation whe calling last()', function(done) {
        this.consumer.post('posts/', { foo: 'bar' }, { page: 3 })
            .then(list => list.last())
            .catch (e => {
                expect(e.message).toBe('List does not implement last()!');
                done();
            });
    });

    it('should throw an error indicating the lack of implementation whe calling previous()', function(done) {
        this.consumer.post('posts/', { foo: 'bar' }, { page: 3 })
            .then(list => list.previous())
            .catch (e => {
                expect(e.message).toBe('List does not implement previous()!');
                done();
            });
    });

    it('should throw an error indicating the lack of implementation whe calling next()', function(done) {
        this.consumer.post('posts/', { foo: 'bar' }, { page: 3 })
            .then(list => list.next())
            .catch (e => {
                expect(e.message).toBe('List does not implement next()!');
                done();
            });
    });

    it('should throw an error indicating the lack of implementation whe calling requestPage()', function(done) {
        this.consumer.post('posts/', { foo: 'bar' }, { page: 3 })
            .then(list => list.requestPage())
            .catch (e => {
                expect(e.message).toBe('List does not implement requestPage()!');
                done();
            });
    });

    it('should call requestPage() with get and without data when goToPage() is called with forceGet=true', function() {
        let responseData = JSON.parse(this.p3);
        let list = new AbstractPaginatedList(responseData.results, new CrudConsumer(), responseData, 'post', 'posts/?page=3', { foo: 'bar' });
        let spy = spyOn(list, 'requestPage');


        try {
            list.goToPage(3);
        } catch(e) {
            expect(e.message).toBe('List does not implement requestPage()!');
        }
        expect(spy).toHaveBeenCalledWith(3, 'get', {});
    });

    it('should call requestPage() with method and with data when goToPage() is called with forceGet=false', function() {
        let responseData = JSON.parse(this.p3);
        let list = new AbstractPaginatedList(responseData.results, new CrudConsumer(), responseData, 'post', 'posts/?page=3', { foo: 'bar' });
        let spy = spyOn(list, 'requestPage');


        try {
            list.goToPage(3, false);
        } catch(e) {
            expect(e.message).toBe('List does not implement requestPage()!');
        }
        expect(spy).toHaveBeenCalledWith(3, 'post', { foo: 'bar' });
    });
});
