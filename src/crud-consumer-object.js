import { AbstractConsumerObject } from './abstract-consumer-object';
import { diff, excludeUnserializableFields } from './utils';


/**
 * Base class for object derived from Consumer
 * Contains various methods for common CRUD tasks
 * Should be extended to provide methods for objects
 * @abstract
 */
export class CrudConsumerObject extends AbstractConsumerObject {
    /**
     * Creates a new object
     * @param {Object} data Data to parse
     * @param {CrudConsumer} consumer Consumer instance for this object
     */
    constructor(data, consumer) {
        super(data, consumer);
        this.__initial_state__ = JSON.parse(JSON.stringify(data));  // Create a rough clone
    }

    /**
     * Partially Updates the object by performing a PATCH request
     * Only sends the changed fields as data
     * If no fields have changed, request is omitted and a resolving Promise is returned
     * After the requests resolves the initial state is updated (to allow future change detections)
     * @returns {Promise}
     */
    update() {
        let path = this.getPath(),
            newState = excludeUnserializableFields(this),
            changedState = this.getChangedFields();


        if (!path) {
            throw new Error('Can\'t determine path, please set pk or id or define getPath()');
        }

        // If no fields have changed, request is omitted and a resolving Promise is returned
        if (Object.keys(changedState).length === 0) {
            return Promise.resolve(this);
        }

        // Only sends the changed fields as data
        return this.__consumer__.patch(path, changedState)
            .then(() => {
                // After the requests resolves the initial state is updated (to allow future change detections)
                this.__initial_state__= newState;
                return Promise.resolve(this);
            });
    }

    /**
     * Fully Updates the object by performing a PUT request
     * Sends all fields as data
     * After the requests resolves the initial state is updated (to allow future change detections)
     * @returns {Promise}
     */
    save() {
        let path = this.getPath(),
            newState = excludeUnserializableFields(this);

        if (!path) {
            throw new Error('Can\'t determine path, please set pk or id or define getPath()');
        }

        // Sends all fields as data
        return this.__consumer__.put(path, this)
            .then(() => {
                // After the requests resolves the initial state is updated (to allow future change detections)
                this.__initial_state__= newState;
                return Promise.resolve(this);
            });
    }

    /**
     * Removes this object
     * @returns {Promise}
     */
    delete() {
        let path = this.getPath();

        if (!path) {
            throw new Error('Can\'t determine path, please set pk or id or define getPath()');
        }

        return this.__consumer__.delete(path);
    }

    /**
     * Returns the path for this object
     * Path is assumed to be the primary key
     * If no key is found, false is returned
     * @returns {string|false}
     */
    getPath() {
        let pk =  this.getPK();

        if (pk) {
            return pk + '';
        }
        return false;
    }

    /**
     * Tries to return the primary key of this object
     * First tries this.pk, this.id otherwise
     * Result is cast to sting
     * If this.pk and this.id are both empty, an empty string is returned
     * @returns {*|false} Value of pk/id or false
     */
    getPK() {
        return (this.pk || this.id || false);
    }

    /**
     * Returns an object containing the changed properties of this object
     * Property names in this.__consumer__.unserializableFields are ignored
     * Properties are compared against this.__initial_state__
     * @returns {Object}
     */
    getChangedFields() {
        let data = {};
        for (let [key, value] of Object.entries(this)) {
            // Property names in this.__consumer__.unserializableFields are ignored
            if (this.__consumer__.unserializableFields.indexOf(key) > -1) {
                continue;
            }

            data[key] = value;
        }

        return diff(this.__initial_state__, excludeUnserializableFields(this));
    }
}
