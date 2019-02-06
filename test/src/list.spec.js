import {CrudConsumer} from '../../src/crud-consumer';
import {CrudConsumerObject} from '../../src/crud-consumer-object';
import {List} from '../../src/list';


describe('List', function () {
    beforeEach(function () {
        this.p1 = JSON.stringify({
            page: 1,
            count: 5,

            results: [
                {title: 'Foo 1'},
                {title: 'Foo 2'},
                {title: 'Foo 3'},

            ]
        });

        jasmine.Ajax.install();

        jasmine.Ajax
            .stubRequest('http://example.com/api/posts/?page=1')
            .andReturn({status: 200, responseText: this.p1});


        this.consumer = new CrudConsumer('http://example.com/api/', CrudConsumerObject, {
            parserDataPath: 'results',
            listClass: List
        });
    });

    afterEach(function () {
        jasmine.Ajax.uninstall();
    });

    it('should work with Array.filter', function (done) {
        this.consumer.get('posts/', {page: 1})
            .then(list => {
                expect(list.filter(item => item.title)[0].title).toBe('Foo 1');
                expect(list.filter(item => item.title)[1].title).toBe('Foo 2');
                expect(list.filter(item => item.title)[2].title).toBe('Foo 3');
                done();
            });
    });

    it('should work with Array.find', function (done) {
        this.consumer.get('posts/', {page: 1})
            .then(list => {
                expect(list.find(item => item.title === 'Foo 1').title).toBe('Foo 1');
                expect(list.find(item => item.title === 'Foo 2').title).toBe('Foo 2');
                expect(list.find(item => item.title === 'Foo 3').title).toBe('Foo 3');
                done();
            });
    });

    it('should work with Array.findIndex', function (done) {
        this.consumer.get('posts/', {page: 1})
            .then(list => {
                expect(list.findIndex(item => item.title === 'Foo 1')).toBe(0);
                expect(list.findIndex(item => item.title === 'Foo 2')).toBe(1);
                expect(list.findIndex(item => item.title === 'Foo 3')).toBe(2);
                done();
            });
    });

    it('should work with Array.forEach', function (done) {
        this.consumer.get('posts/', {page: 1})
            .then(list => {
                let array = [];
                list.forEach(item => array.push(item.title));
                expect(array).toEqual(['Foo 1', 'Foo 2', 'Foo 3']);
                done();
            });
    });

    it('should work with Array.map', function (done) {
        this.consumer.get('posts/', {page: 1})
            .then(list => {
                expect(list.map(item => item.title)[0]).toBe('Foo 1');
                expect(list.map(item => item.title)[1]).toBe('Foo 2');
                expect(list.map(item => item.title)[2]).toBe('Foo 3');
                done();
            })
            .catch(e => {
                console.log(e.message);
                expect(e).toBeFalsy();
                done();
            })
    });

    it('should work with Array.pop', function (done) {
        this.consumer.get('posts/', {page: 1})
            .then(list => {
                expect(list.pop().title).toBe('Foo 3');
                expect(list.map(item => item.title)[0]).toBe('Foo 1');
                expect(list.map(item => item.title)[1]).toBe('Foo 2');
                done();
            });
    });

    it('should work with Array.reduce', function (done) {
        this.consumer.get('posts/', {page: 1})
            .then(list => {
                let titles = list.reduce((acc, val) => {
                    return acc + ' ' + val.title;
                }, '');
                expect(titles.trim()).toBe('Foo 1 Foo 2 Foo 3');
                done();
            });
    });

    it('should work with Array.reduceRight', function (done) {
        this.consumer.get('posts/', {page: 1})
            .then(list => {
                let titles = list.reduceRight((acc, val) => {
                    return acc + ' ' + val.title;
                }, '');
                expect(titles.trim()).toBe('Foo 3 Foo 2 Foo 1');
                done();
            });
    });

    it('should work with Array.reverse', function (done) {
        this.consumer.get('posts/', {page: 1})
            .then(list => {
                expect(list.reverse()[0].title).toBe('Foo 3');
                expect(list.reverse()[1].title).toBe('Foo 2');
                expect(list.reverse()[2].title).toBe('Foo 1');
                done();
            });
    });

    it('should work with Array.shift', function (done) {
        this.consumer.get('posts/', {page: 1})
            .then(list => {
                expect(list.shift().title).toBe('Foo 1');
                expect(list.map(item => item.title)[0]).toBe('Foo 2');
                expect(list.map(item => item.title)[1]).toBe('Foo 3');
                done();
            });
    });

    it('should work with Array.unshift', function (done) {
        this.consumer.get('posts/', {page: 1})
            .then(list => {
                expect(list.unshift({title: 'Foo 0'})).toBe(4);
                expect(list[0].title).toBe('Foo 0');
                done();
            });
    });

    it('should work with Array.values', function (done) {
        this.consumer.get('posts/', {page: 1})
            .then(list => {
                let iterator = list.values();
                let i = 0;

                for (let value of iterator) {
                    i++;
                }

                expect(i).toBe(3);
                done();
            });
    });
});
