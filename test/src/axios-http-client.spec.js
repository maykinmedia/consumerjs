import {Consumer} from '../../src';


describe('AxiosHTTPClient', function () {
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
});
