/**
 * Base class for object derived from Consumer
 * @abstract
 */
export class ConsumerObject {
  /**
   * Creates a new object
   * @param {Object} [data] Data to parse
   * @param {Consumer} [consumer] Consumer instance for this object
   */
  constructor(data,  consumer) {
    if (typeof data !== 'undefined') {
      this.createFromObject(data);
    }

    if (typeof consumer !== 'undefined') {
      this.consumer = consumer;
    }
  }

  /**
   * Populates object with data consumed in data
   * @param {Object} data Data to parse
   */
  createFromObject(data) {
    let keys = Object.keys(data);

    for (let i in keys) {
      let key = keys[i];
      this[key] = data[key];
    }
  }
}