import { HttpClient } from 'aurelia/http-client';
import { initialize } from 'aurelia/pal-browser';


/**
 * Instantiate to request API endpoints
 * @class
 */
export class Consumer {
    /** Base API endpoint */
    endpoint = '';

    /** Class to instantiate data to */
    objectClass = {};

    /** HttpClient instance */
    client = new HttpClient().configure(x => {
        x.withBaseUrl(this.endpoint);
    });

    /**
     * Constructor
     * Sets endpoint to retrieve data from and class to cast result to
     * Initializes Aurelia/pal-browser
     * @param {String} endpoint Base endpoint for this API
     * @param {ConsumerObject} objectClass Class to cast results to
     */
    constructor(endpoint, objectClass) {
        this.endpoint = endpoint;
        this.objectClass = objectClass;

        initialize();
    }

    /**
     * Performs a DELETE request
     * @param {String} path Path on the endpoint
     * @returns {Promise}
     */
    delete(path = '') {
        return this.request('delete', path, {});
    }

    /**
     * Performs a GET request
     * @param {String} path Path on the endpoint
     * @param {Object} query Query parameters
     * @returns {Promise}
     */
    get(path = '', query = {}) {
        return this.request('get', path, query);
    }

    /**
     * Performs a PATCH request
     * @param {String} path Path on the endpoint
     * @param {Object} data Data payload
     * @returns {Promise}
     */
    patch(path = '', data = {}) {
        return this.request('patch', path, data);
    }

    /**
     * Performs a POST request
     * @param {String} path Path on the endpoint
     * @param {Object} data Data payload
     * @returns {Promise}
     */
    post(path = '', data = {}) {
        return this.request('post', path, data);
    }

    /**
     * Performs a PUT request
     * @param {String} path Path on the endpoint
     * @param {Object} data Data payload
     * @returns {Promise}
     */
    put(path = '', data = {}) {
        return this.request('put', path, data);
    }

    /**
     * Performs a request
     * @param {String} method The method to use
     * @param {String} path Path on the endpoint
     * @param {Object} data Data payload
     */
    request(method, path, data) {
        let url = this.endpoint + path;
        return this.client[method](url, data)
            .then(this.requestSuccess.bind(this))
            .catch(this.requestFailed.bind(this));
    }

    /**
     * Callback for request
     * Gets called if request resolve successfully
     * @param {HttpResponseMessage} data
     * @returns {ConsumerObject|ConsumerObject[]}
     */
    requestSuccess(data) {
        return this.parse(data.response);
    }

    /**
     * Parses JSON string to a single or list of ConsumerObject instance(s)
     * @param {String} data
     * @returns {ConsumerObject|ConsumerObject[]}
     */
    parse(json) {
        let object = JSON.parse(json);

        if (Array.isArray(object)) {
            return this.parseList(object)
        }
        return this.parseScalar(object);
    }

    /**
     * Parses anonymous objects to a list of ConsumerObjects
     * @param {Object[]} array
     * @returns {ConsumerObject[]}
     */
    parseList(array) {
        let list = [];

        for (let object of array) {
            list.push(new this.objectClass(object));
        }
        return list;
    }

    /**
     * Parses anonymous object to a single ConsumerObject
     * @param {Object} object
     * @returns {ConsumerObject}
     */
    parseScalar(object) {
        return new this.objectClass(object);
    }

    /**
     * Callback for request
     * Gets called if request doesnt resolve successfully
     * @param {HttpResponseMessage} data
     * @returns {HttpResponseMessage} data
     */
    requestFailed(data) {
        return data;
    }
}