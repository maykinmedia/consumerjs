import { HttpClient } from 'aurelia/http-client';
import { initialize } from 'aurelia/pal-browser';
import Cookies from 'js-cookie/js-cookie';
import URI from "uri";


/**
 * Instantiate to request API endpoints
 * @class
 */
export class Consumer {
    /**
     * Constructor
     * Sets this.endpoint to endpoint
     * Sets this.objectClass to objectClass
     * Sets this.client to new configured HttpClient
     * Assigns options to this
     * Initializes Aurelia browser abstraction
     * @param {String} endpoint Base endpoint for this API
     * @param {ConsumerObject} objectClass Class to cast results to
     * @param {Object} [options] Additional configuration
     */
    constructor(endpoint, objectClass, options=null) {
        this.csrfCookie = 'csrftoken';
        this.csrfHeader = 'X-CSRFToken';
        this.defaultHeaders = {};
        this.defaultParameters = {};
        this.endpoint = endpoint;
        this.objectClass = objectClass;
        this.unserializableFields = ['__consumer__'];

        this.client = new HttpClient().configure(x => {
            x.withBaseUrl(this.endpoint);
        });

        if (options) {
            Object.assign(this, options);
        }

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
        let uri = URI.build({'path': path, 'query': URI.buildQuery(query)});
        return this.request('get', uri, {});
    }

    /**
     * Performs a PATCH request
     * @param {String} path Path on the endpoint
     * @param {Object} data Data payload
     * @returns {Promise}
     */
    patch(path = '', data = {}, query = {}) {
        let uri = URI.build({'path': path, 'query': URI.buildQuery(query)});
        return this.request('patch', uri, data);
    }

    /**
     * Performs a POST request
     * @param {String} path Path on the endpoint
     * @param {Object} data Data payload
     * @returns {Promise}
     */
    post(path = '', data = {}, query = {}) {
        let uri = URI.build({'path': path, 'query': URI.buildQuery(query)});
        return this.request('post', uri, data);
    }

    /**
     * Performs a PUT request
     * @param {String} path Path on the endpoint
     * @param {Object} data Data payload
     * @returns {Promise}
     */
    put(path = '', data = {}, query = {}) {
        let uri = URI.build({'path': path, 'query': URI.buildQuery(query)});
        return this.request('put', uri, data);
    }

    /**
     * Performs a request
     * @param {String} method The method to use
     * @param {String} path Path on the endpoint
     * @param {Object} data Data payload
     */
    request(method, path, data) {
        // Set csrf token if needed
        if (!this.isSafeMethod(method) && this.csrfCookie && this.csrfHeader) {
            this.addCsrfToken();
        }

        // Set default headers
        for (let header of Object.keys(this.defaultHeaders)) {
            this.addHeader(header, this.defaultHeaders[header]);
        }

        // Build query
        let uri = URI(path);
        uri.addQuery(this.defaultParameters);

        // Serialize data
        data = this.serialize(data);

        // Return promise
        return this.client[method](uri.toString(), data)
            .then(this.requestSuccess.bind(this))
            .catch(this.requestFailed.bind(this));
    }

    /**
     * Returns whether the request is safe (should not mutate any data)
     * @returns {Boolean}
     */
    isSafeMethod(method) {
        let saveMethods = ['GET', 'HEAD', 'OPTIONS', 'TRACE'];
        return saveMethods.includes(method.toUpperCase());
    }

    /**
     * Looks for cookie this.csrfCookie and passes it's value to this.csrfHeader
     */
    addCsrfToken() {
        let csrfToken = this.getCookie(this.csrfCookie);
        this.defaultHeaders[this.csrfHeader] = csrfToken;
        this.addHeader(this.csrfHeader, csrfToken);
    }

    /**
     * Wrapper for Cookies.get
     * @param {String} name
     * @returns {String}
     */
    getCookie(name) {
        return Cookies.get(name);
    }

    /**
     * Adds a header to all future request
     * @param {String} name
     * @param {String} value
     */
    addHeader(name, value) {
        this.client.configure(x => {
            x.withHeader(name, value);
        });
    }

    /**
     * Serializes data
     * Excludes fields marked in this.unserializableFields
     * @param {ConsumerObject|Object} data
     * @returns {Object}
     */
    serialize(data) {
        let object = {};

        for (let key of Object.keys(data)) {
            if (!this.unserializableFields.includes(key)) {
                object[key] = data[key];
            }
        }
        return object;
    }

    /**
     * Callback for request
     * Gets called if request resolve successfully
     * @param {HttpResponseMessage} data
     * @returns {ConsumerObject|ConsumerObject[]}
     */
    requestSuccess(data) {
        let result = this.parse(data.response);
        return Promise.resolve(result);
    }

    /**
     * Parses JSON string to a single or list of ConsumerObject instance(s)
     * @param {String} data
     * @returns {ConsumerObject|ConsumerObject[]}
     */
    parse(json) {
        let object = JSON.parse(json);

        if (Array.isArray(object)) {
            return this.parseList(object);
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
            list.push(new this.objectClass(object, this));
        }
        return list;
    }

    /**
     * Parses anonymous object to a single ConsumerObject
     * @param {Object} object
     * @returns {ConsumerObject}
     */
    parseScalar(object) {
        return new this.objectClass(object, this);
    }

    /**
     * Callback for request
     * Gets called if request doesnt resolve successfully
     * @param {HttpResponseMessage} data
     * @returns {HttpResponseMessage} data
     */
    requestFailed(data) {
        return Promise.reject(data);
    }
}