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

    it('should export PageNumberList', function() {
        expect(PageNumberList).toBeTruthy();
    });

    it('should export utils', function() {
        expect(utils.diff).toBeTruthy();
        expect(utils.excludeUnserializableFields).toBeTruthy();
        expect(utils.isObject).toBeTruthy();
    });
});
