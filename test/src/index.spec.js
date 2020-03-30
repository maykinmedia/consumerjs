import Consumer, {
    Consumer as Consumer2,
    ConsumerObject,
    CrudConsumer,
    CrudConsumerObject,
    AbstractList,
    AbstractPageNumberList,
    PageNumberList,
    utils,
} from '../../src/index';
import {AbstractHTTPClient, AxiosHTTPClient, LinkedPageNumberList, List} from '../../src';


describe('Module', function() {
    it('should export Consumer as default', function() {
        expect(Consumer).toBeTruthy();
    });

    it('should export Consumer', function() {
        expect(Consumer2).toBeTruthy();
    });

    it('should export ConsumerObject', function() {
        expect(ConsumerObject).toBeTruthy();
    });

    it('should export CrudConsumer', function() {
        expect(CrudConsumer).toBeTruthy();
    });

    it('should export CrudConsumerObject', function() {
        expect(CrudConsumerObject).toBeTruthy();
    });

    it('should export AbstractList', function() {
        expect(AbstractList).toBeTruthy();
    });

    it('should export AbstractPageNumberList', function() {
        expect(AbstractPageNumberList).toBeTruthy();
    });

    it('should export List', function() {
        expect(List).toBeTruthy();
    });

    it('should export PageNumberList', function() {
        expect(PageNumberList).toBeTruthy();
    });

    it('should export LinkedPageNumberList', function() {
        expect(LinkedPageNumberList).toBeTruthy();
    });

    it('should export AbstractHTTPClient', function() {
        expect(AbstractHTTPClient).toBeTruthy();
    });

    it('should export AxiosHTTPClient', function() {
        expect(AxiosHTTPClient).toBeTruthy();
    });

    it('should export utils', function() {
        expect(utils.diff).toBeTruthy();
        expect(utils.excludeUnserializableFields).toBeTruthy();
        expect(utils.isObject).toBeTruthy();
    });
});
