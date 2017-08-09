import { CrudConsumer } from '../src/crud-consumer';
import { CrudConsumerObject } from '../src/crud-consumer-object';
import { PageNumberList } from '../src/page-number-list';


describe('PageNumberList', function() {
    beforeEach(function() {
        let p1 = JSON.stringify({
            page: 1,
            count: 5,

            results: [
                { title: 'Foo 1'},
                { title: 'Foo 2'},
                { title: 'Foo 3'},

            ]
        });

        let p2 = JSON.stringify({
            page: 2,
            count: 5,

            results: [
                { title: 'Foo 4'},
                { title: 'Foo 5'},
                { title: 'Foo 6'},

            ]
        });

        let p3 = JSON.stringify({
            page: 3,
            count: 5,

            results: [
                { title: 'Foo 7'},
                { title: 'Foo 8'},
                { title: 'Foo 9'},

            ]
        });

        let p4 = JSON.stringify({
            page: 4,
            count: 5,

            results: [
                { title: 'Foo 10'},
                { title: 'Foo 11'},
                { title: 'Foo 12'},

            ]
        });

        let p5 = JSON.stringify({
            page: 5,
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
            listClass: PageNumberList
        });
    });

    afterEach(function() {
        jasmine.Ajax.uninstall();
    });

    it('should behave like an Array like object', function(done) {
        this.consumer.get('posts/', { page: 1 })
            .then(list => {
                expect(list.length).toBe(3);
                expect(list[0].title).toBe('Foo 1');
                expect(list[1].title).toBe('Foo 2');
                expect(list[2].title).toBe('Foo 3');
                done();
            });
    });

    it('should be able to get the pagination statistics', function(done) {
        this.consumer.get('posts/', { page: 1 })
            .then(list => {
                expect(list.page).toBe(1);
                expect(list.pageCount).toBe(5);
                expect(list.pageSize).toBe(3);
                done();
            });
    });

    it('should be able to navigate to the first page', function(done) {
        this.consumer.get('posts/', { page: 3 })
            .then(list => list.first())
            .then(list => {
                expect(list.page).toBe(1);
                expect(list.length).toBe(3);
                expect(list[0].title).toBe('Foo 1');
                expect(list[1].title).toBe('Foo 2');
                expect(list[2].title).toBe('Foo 3');
                done();
            });
    });

    it('should be able to navigate to the last page', function(done) {
        this.consumer.get('posts/', { page: 3 })
            .then(list => list.last())
            .then(list => {
                expect(list.page).toBe(5);
                expect(list.length).toBe(3);
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
                expect(list.page).toBe(2);
                expect(list.length).toBe(3);
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
                expect(list.page).toBe(1);
                expect(list.length).toBe(3);
                expect(list[0].title).toBe('Foo 1');
                expect(list[1].title).toBe('Foo 2');
                expect(list[2].title).toBe('Foo 3');
                done();
            });
    });

    fit('should be able to navigate back and forth', function(done) {
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
                expect(list.page).toBe(1);
                expect(list.length).toBe(3);
                expect(list[0].title).toBe('Foo 1');
                expect(list[1].title).toBe('Foo 2');
                expect(list[2].title).toBe('Foo 3');
                done();
            })
            .catch(e => console.log(e.message, e.stack));
    });



});
