/** @module */

import { excludeUnserializableFields } from "./utils";

/**
 * Abstract base class for object derived from Consumer
 * @abstract
 */
export class AbstractConsumerObject {
    /**
     * Creates a new object.
     * @param {Object} data Data to parse.
     * @param {Consumer} consumer Consumer instance for this object.
     */
    constructor(data, consumer) {
        this.createFromObject(data);

        /** {AbstractConsumer} Reference to consumer instantiating this object. */
        this.__consumer__ = consumer;
    }

    /**
     * Populates object with data consumed in data.
     * @param {Object} data Data to parse.
     */
    createFromObject(data) {
        let keys = Object.keys(data);

        for (let i in keys) {
            if (keys.hasOwnProperty(i)) {
                let key = keys[i];
                this[key] = data[key];
            }
        }
    }

    /**
     * Serialize consumer object as JSON excluding this.unserializableFields
     */
    asJSON() {
        return JSON.stringify(excludeUnserializableFields(this));
    }
}
