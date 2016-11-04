import { AbstractConsumer } from 'abstract-consumer';


/**
 * Extend, instantiate and configure to request API endpoints
 * Contains various methods for common CRUD tasks
 * @abstract
 */
class RestConsumer extends AbstractConsumer {
    create(object) {
        return super.post('', object);
    }

    read(id) {
        return super.get(id)
    }
}


// Export
export { Consumer };
export default Consumer;
