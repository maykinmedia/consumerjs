import Consumer, { Consumer as Consumer2 } from 'consumer';


describe('Module', function() {
    it('should have a default', function() {
        expect(Consumer).toBeTruthy();
    });

    it('should have a non default', function() {
        expect(Consumer2).toBeTruthy();
    });
});
