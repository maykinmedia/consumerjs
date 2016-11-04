import { CrudConsumer } from 'crud-consumer';
import { CrudConsumerObject } from 'crud-consumer-object';


describe('CrudConsumer', function() {
    beforeEach(function() {
        jasmine.Ajax.install();

        jasmine.Ajax
          .stubRequest('http://example.com/api/posts/')
          .andReturn({ status: 201 });
        jasmine.Ajax
          .stubRequest('http://example.com/api/posts/1')
          .andReturn({ status: 200 });;
    });

    afterEach(function() {
        jasmine.Ajax.uninstall();
    });

    it('should support create', function(done) {
        class Post extends CrudConsumerObject {}
        class PostConsumer extends CrudConsumer {}

        let consumer = new PostConsumer();
        consumer.endpoint = 'http://example.com/api/posts/';

        consumer.create({ title: 'foo', body: 'bar' })
            .then(() => {
                let request = jasmine.Ajax.requests.mostRecent();
                expect(request.url).toBe('http://example.com/api/posts/');
                expect(request.status).toBe(201);

                done()
            });
    });

    it('should support read', function(done) {
        class Post extends CrudConsumerObject {}
        class PostConsumer extends CrudConsumer {}

        let consumer = new PostConsumer();
        consumer.endpoint = 'http://example.com/api/posts/';

        consumer.read(1)
            .then((post) => {
                let request = jasmine.Ajax.requests.mostRecent();
                expect(request.url).toBe('http://example.com/api/posts/1');
                expect(request.status).toBe(200);

                done()
            });
    });
});
