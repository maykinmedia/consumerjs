import { AbstractConsumer } from './abstract-consumer';


/**
 * Extend, instantiate and configure to request API endpoints
 * Contains various methods for common CRUD tasks
 * @abstract
 */
export class CrudConsumer extends AbstractConsumer {
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

        // Add __initial_state__ to unserializableFields
        this.unserializableFields.push('__initial_state__');
    }

    /**
     * Creates an object by performing a POST request
     * @param {Object} object Object to create
     * @returns {Promise}
     */
    create(object) {
        return super.post('', object);
    }

    /**
     * Retrieves an object by performing a GET request
     * @param {Number|String} id
     * @returns {Promise}
     */
    read(id) {
        return super.get(id);
    }
}
