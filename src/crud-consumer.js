import { AbstractConsumer } from 'abstract-consumer';

/**
 * Extend, instantiate and configure to request API endpoints
 * Contains various methods for common CRUD tasks
 * @abstract
 */
class CrudConsumer extends AbstractConsumer {
    /**
     * Configures CrudConsumer instance
     * @param {String} endpoint Base endpoint for this API
     * @param {ConsumerObject} objectClass Class to cast results to
     * @param {Object} [options] Additional configuration
     */
    constructor(endpoint, objectClass, options=null) {
        super(endpoint, objectClass, options);

        /** The class to casts objects to */
        this.objectClass = objectClass;
    }

    // TODO
    create(object) {
        return super.post('', object);
    }

    // TODO
    read(id) {
        return super.get(id);
    }
}


// Export
export { CrudConsumer };
export default CrudConsumer;
