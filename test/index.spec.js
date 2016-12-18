import Consumer, {
    Consumer as Consumer2,
    ConsumerObject,
    CrudConsumer,
    CrudConsumerObject,
} from '../src/index';


fdescribe('Module', function() {
    it('should export Consumer as default', function() {
        expect(Consumer.name).toBe('Consumer')
    });

    it('should export Consumer', function() {
        expect(Consumer2.name).toBe('Consumer')
    });

    it('should export ConsumerObject', function() {
        expect(ConsumerObject.name).toBe('ConsumerObject')
    });

    it('should export CrudConsumer', function() {
        expect(CrudConsumer.name).toBe('CrudConsumer')
    });

    it('should export CrudConsumerObject', function() {
        expect(CrudConsumerObject.name).toBe('CrudConsumerObject')
    });
});
