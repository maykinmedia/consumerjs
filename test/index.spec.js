import Consumer, {
    Consumer as Consumer2,
    ConsumerObject,
    CrudConsumer,
    CrudConsumerObject,
    AbstractList,
    AbstractPageNumberList,
    PageNumberList,
    utils,
} from '../src/index';


describe('Module', function() {
    it('should export Consumer as default', function() {
        expect(Consumer.toString()).toContain('Consumer');
    });

    it('should export Consumer', function() {
        expect(Consumer2.toString()).toContain('Consumer');
    });

    it('should export ConsumerObject', function() {
        expect(ConsumerObject.toString()).toContain('ConsumerObject');
    });

    it('should export CrudConsumer', function() {
        expect(CrudConsumer.toString()).toContain('CrudConsumer');
    });

    it('should export CrudConsumerObject', function() {
        expect(CrudConsumerObject.toString()).toContain('CrudConsumerObject');
    });

    it('should export AbstractList', function() {
        expect(AbstractList.toString()).toContain('AbstractList');
    });

    it('should export AbstractPageNumberList', function() {
        expect(AbstractPageNumberList.toString()).toContain('AbstractPageNumberList');
    });

    it('should export PageNumberList', function() {
        expect(PageNumberList.toString()).toContain('PageNumberList');
    });

    it('should export utils', function() {
        expect(utils.diff.toString()).toContain('diff');
        expect(utils.excludeUnserializableFields.toString()).toContain('excludeUnserializableFields');
        expect(utils.isObject.toString()).toContain('isObject');
    });
});
