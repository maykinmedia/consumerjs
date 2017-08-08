/**
 * Abstract base class for list of consumer objects.
 * @abstract
 */
export class AbstractList extends Array {
    /**
     * Creates a new object.
     * @param {AbstractConsumerObject[]} objects Items to populate list with.
     * @param {Consumer} consumer Consumer instance for this object.
     * @param {Object} responseData The response data as Object.
     */
    constructor(objects, consumer, responseData) {
        super(...objects)

        /** {Object} The response data as Object. */
        this.responseData = {};

        let keys = Object.keys(responseData);

        for (let i in keys) {
            if (keys.hasOwnProperty(i)) {
                let key = keys[i];
                this.responseData[key] = responseData[key];
            }
        }

        /** {AbstractConsumer} Reference to consumer instantiating this object. */
        this.__consumer__ = consumer;
    }
}
