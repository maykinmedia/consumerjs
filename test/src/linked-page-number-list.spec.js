import { CrudConsumer } from '../../src/crud-consumer';
import { CrudConsumerObject } from '../../src/crud-consumer-object';
import { LinkedPageNumberList } from '../../src/linked-page-number-list';


describe('LinkedPageNumberList', function() {
    beforeEach(function() {
        let p1 = JSON.stringify({
            previous: null,
            next: 'http://example.com/api/posts/?page=2',
            count: 5,

            results: [
                { title: 'Foo 1'},
                { title: 'Foo 2'},
                { title: 'Foo 3'},

            ]
        });

        let p2 = JSON.stringify({
            previous: 'http://example.com/api/posts/?page=1',
            next: 'http://example.com/api/posts/?page=3',
            count: 5,

            results: [
                { title: 'Foo 4'},
                { title: 'Foo 5'},
                { title: 'Foo 6'},

            ]
        });

        let p3 = JSON.stringify({
            previous: 'http://example.com/api/posts/?page=2',
            next: 'http://example.com/api/posts/?page=4',
            count: 5,

            results: [
                { title: 'Foo 7'},
                { title: 'Foo 8'},
                { title: 'Foo 9'},

            ]
        });

        let p4 = JSON.stringify({
            previous: 'http://example.com/api/posts/?page=3',
            next: 'http://example.com/api/posts/?page=5',
            count: 5,

            results: [
                { title: 'Foo 10'},
                { title: 'Foo 11'},
                { title: 'Foo 12'},

            ]
        });

        let p5 = JSON.stringify({
            previous: 'http://example.com/api/posts/?page=4',
            next: null,
            count: 5,

            results: [
                { title: 'Foo 13'},
                { title: 'Foo 14'},
                { title: 'Foo 15'},

            ]
        });

        jasmine.Ajax.install();

        jasmine.Ajax
          .stubRequest('http://example.com/api/posts/?page=1')
          .andReturn({ status: 200, responseText: p1 });

        jasmine.Ajax
          .stubRequest('http://example.com/api/posts/?page=2')
          .andReturn({ status: 200, responseText: p2 });

        jasmine.Ajax
          .stubRequest('http://example.com/api/posts/?page=3')
          .andReturn({ status: 200, responseText: p3 });

        jasmine.Ajax
          .stubRequest('http://example.com/api/posts/?page=4')
          .andReturn({ status: 200, responseText: p4 });

        jasmine.Ajax
          .stubRequest('http://example.com/api/posts/?page=5')
          .andReturn({ status: 200, responseText: p5 });


        this.consumer = new CrudConsumer('http://example.com/api/', CrudConsumerObject, {
            parserDataPath: 'results',
            listClass: LinkedPageNumberList
        });
    });

    afterEach(function() {
        jasmine.Ajax.uninstall();
    });

    it('should behave like an Array like object', function(done) {
        this.consumer.get('posts/', { page: 1 })
            .then(list => {
                expect(list.pageSize).toBe(3);
                expect(list[0].title).toBe('Foo 1');
                expect(list[1].title).toBe('Foo 2');
                expect(list[2].title).toBe('Foo 3');
                done();
            });
    });

    it('should be able to get the pagination statistics', function(done) {
        this.consumer.get('posts/', { page: 2 })
            .then(list => {
                expect(list.responseData.previous).toBe('http://example.com/api/posts/?page=1');
                expect(list.responseData.next).toBe('http://example.com/api/posts/?page=3');
                expect(list.pageCount).toBe(5);
                expect(list.pageSize).toBe(3);
                done();
            });
    });

    it('should be able to navigate to the first page', function(done) {
        this.consumer.get('posts/', { page: 1 })
            .then(list => list.first())
            .then(list => {
                expect(list.responseData.previous).toBe(null);
                expect(list.responseData.next).toBe('http://example.com/api/posts/?page=2');
                expect(list.pageSize).toBe(3);
                expect(list[0].title).toBe('Foo 1');
                expect(list[1].title).toBe('Foo 2');
                expect(list[2].title).toBe('Foo 3');
                done();
            });
    });

    it('should be able to navigate to the last page', function(done) {
        this.consumer.get('posts/', { page: 1 })
            .then(list => list.last())
            .then(list => {
                expect(list.responseData.previous).toBe('http://example.com/api/posts/?page=4');
                expect(list.responseData.next).toBe(null);
                expect(list.pageSize).toBe(3);
                expect(list[0].title).toBe('Foo 13');
                expect(list[1].title).toBe('Foo 14');
                expect(list[2].title).toBe('Foo 15');
                done();
            });
    });

    it('should be able to navigate to the next page', function(done) {
        this.consumer.get('posts/', { page: 1 })
            .then(list => list.next())
            .then(list => {
                expect(list.responseData.previous).toBe('http://example.com/api/posts/?page=1');
                expect(list.responseData.next).toBe('http://example.com/api/posts/?page=3');
                expect(list.pageSize).toBe(3);
                expect(list[0].title).toBe('Foo 4');
                expect(list[1].title).toBe('Foo 5');
                expect(list[2].title).toBe('Foo 6');
                done();
            });
    });

    it('should be able to navigate to the previous page', function(done) {
        this.consumer.get('posts/', { page: 2 })
            .then(list => list.previous())
            .then(list => {
                expect(list.responseData.previous).toBe(null);
                expect(list.responseData.next).toBe('http://example.com/api/posts/?page=2');
                expect(list.pageSize).toBe(3);
                expect(list[0].title).toBe('Foo 1');
                expect(list[1].title).toBe('Foo 2');
                expect(list[2].title).toBe('Foo 3');
                done();
            });
    });

    it('should be able to navigate back and forth', function(done) {
        this.consumer.get('posts/', { page: 1 })
            .then(list => list.next())
            .then(list => list.next())
            .then(list => list.next())
            .then(list => list.next())
            .then(list => list.previous())
            .then(list => list.previous())
            .then(list => list.previous())
            .then(list => list.previous())
            .then(list => {
                expect(list.responseData.previous).toBe(null);
                expect(list.responseData.next).toBe('http://example.com/api/posts/?page=2');
                expect(list.pageSize).toBe(3);
                expect(list[0].title).toBe('Foo 1');
                expect(list[1].title).toBe('Foo 2');
                expect(list[2].title).toBe('Foo 3');
                done();
            });
    });

    it('should resolve Promise with current instance if no previous link is available', function(done) {
        this.consumer.get('posts/', { page: 1 })
            .then(list => {
                expect(list.responseData.previous).toBe(null);
                return list.previous();
            })
            .then(list => {
                expect(list.responseData.previous).toBe(null);
                expect(list.responseData.next).toBe('http://example.com/api/posts/?page=2');
                expect(list.pageSize).toBe(3);
                expect(list[0].title).toBe('Foo 1');
                expect(list[1].title).toBe('Foo 2');
                expect(list[2].title).toBe('Foo 3');
                done();
            });
    });

    it('should resolve Promise with current instance if no next link is available', function(done) {
        this.consumer.get('posts/', { page: 5 })
            .then(list => {
                expect(list.responseData.next).toBe(null);
                return list.next();
            })
            .then(list => {
                expect(list.responseData.previous).toBe('http://example.com/api/posts/?page=4');
                expect(list.responseData.next).toBe(null);
                expect(list.pageSize).toBe(3);
                expect(list[0].title).toBe('Foo 13');
                expect(list[1].title).toBe('Foo 14');
                expect(list[2].title).toBe('Foo 15');
                done();
            });
    });
});
