/**
 * Base class for object derived from Consumer
 * @abstract
 */
export class ConsumerObject {
    /**
     * Creates a new object
     * @param {Object} data Data to parse
     * @param {Consumer} consumer Consumer instance for this object
     */
    constructor(data, consumer) {
        this.createFromObject(data);
        this.__consumer__ = consumer;
    }

    /**
     * Populates object with data consumed in data
     * @param {Object} data Data to parse
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
}