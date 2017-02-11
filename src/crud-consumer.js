import { AbstractConsumer } from './abstract-consumer';
import { CrudConsumerObject } from './crud-consumer-object';


/**
 * Extend, instantiate and configure to request API endpoints
 * Contains various methods for common CRUD tasks
 * @see {@link abstract-consumer.md} for inherited API
 * @abstract
 */
export class CrudConsumer extends AbstractConsumer {
    /**
     * Configures CrudConsumer instance
     * @param {string} endpoint Base endpoint for this API
     * @param {CrudConsumerObject} [objectClass=CrudConsumerObject] Class to cast results to
     * @param {Object} [options] Additional configuration
     */
    constructor(endpoint, objectClass=CrudConsumerObject, options=null) {
        super(endpoint, objectClass, options);

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
     * @param {(number|string)} id
     * @returns {Promise}
     */
    read(id) {
        return super.get(id);
    }
}
