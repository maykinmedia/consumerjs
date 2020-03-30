import {AxiosHTTPClient, Consumer, ConsumerObject} from '../../src';


describe('AxiosHTTPClient', function () {

    beforeEach(function () {
        jasmine.Ajax.install();

        jasmine.Ajax
            .stubRequest('http://example.com/api/posts?id=1&id=2&id=3')
            .andReturn({status: 200, responseText: '[{"title":"FooBar"}, {"title":"FooBaz"}]'});
        jasmine.Ajax
            .stubRequest('http://example.com/api/posts?id[]=1&id[]=2&id[]=3')
            .andReturn({status: 200, responseText: '[{"title":"FooBar"}, {"title":"FooBaz"}]'});
    });

    afterEach(function () {
        jasmine.Ajax.uninstall();
    });

    it('should respect non-trailing slash base url in combination with empty path(issue #31)', () => {
        class PostConsumer extends Consumer {
            constructor(endpoint = 'http://example.com/api') {
                super(endpoint);
            }
        }

        const consumer = new PostConsumer();
        expect(consumer.client.baseURL).toBe(consumer.endpoint);

        const url = consumer.client.getURL('');
        expect(url).toBe('http://example.com/api');
    });

    it('should use repeat array mode by default', function (done) {
        class Post extends ConsumerObject {
        }

        class PostConsumer extends Consumer {
            constructor() {
                super('http://example.com/api', Post);
                this.client = new AxiosHTTPClient(this);
            }
        }

        let consumer = new PostConsumer();

        consumer.get('/posts', {'id': [1, 2, 3]})
            .then(() => {
                let request = jasmine.Ajax.requests.mostRecent();
                expect(request.url).toBe('http://example.com/api/posts?id=1&id=2&id=3')
                done();
            })
            .catch(() => {
                let request = jasmine.Ajax.requests.mostRecent();
                expect(request.url).toBe('http://example.com/api/posts?id=1&id=2&id=3')
                done();
            })
        ;
    });

    it('should use brackets array mode if specified', function (done) {
        class Post extends ConsumerObject {
        }

        class PostConsumer extends Consumer {
            constructor() {
                super('http://example.com/api', Post);
                this.client = new AxiosHTTPClient(this, {arrayFormat: "brackets"});
            }
        }

        let consumer = new PostConsumer();

        consumer.get('/posts', {'id': [1, 2, 3]})
            .then(() => {
                let request = jasmine.Ajax.requests.mostRecent();
                expect(request.url).toBe('http://example.com/api/posts?id[]=1&id[]=2&id[]=3')
                done();
            })
            .catch(() => {
                let request = jasmine.Ajax.requests.mostRecent();
                expect(request.url).toBe('http://example.com/api/posts?id[]=1&id[]=2&id[]=3')
                done();
            })
        ;
    });
})
;
