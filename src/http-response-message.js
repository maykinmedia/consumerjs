/**
 * Response object modeled after aurelia-http-client HTTPResponseMessage.
 * @class
 */
export class HttpResponseMessage {
    /**
     * Creates HttpResponseMessage.
     * @param {Object} response
     */
    constructor(response) {
        /** @type {Object} */
        this.headers = {};

        /** @type {Object} */
        this.response = {};

        /** @type {Object} */
        this.responseType = 'text/json';

        /** @type {Object} */
        this.statusCode = 0;

        /** @type {Object} */
        this.statusText = '';

        if (response) {
            Object.assign(this, response);
        }
    }

    /**
     * Creates a string representation for this HttpResponseMessage.
     * @returns {string}
     */
    toString() {
        return `${this.statusCode} ${this.statusText}`.trim();
    }
}
