/** @module */
import { AbstractConsumer } from "./abstract-consumer";

/* jshint unused: false */

/**
 * Abstract base class for http clients.
 * @abstract
 */
export class AbstractHTTPClient {
    /**
     * Configures HTTPClient instance.
     * @param {AbstractConsumer} consumer Reference to consumer instantiating this object.
     */
    constructor(consumer) {
        /** {AbstractConsumer} Reference to consumer instantiating this object. */
        this.consumer = consumer;

        /** @type {string} Base URL for all requests, gets concatenated with path passed to request methods. */
        this.baseURL = this.consumer.endpoint;

        /** @type {Object} An optional object holding key value pairs of additional headers. */
        this.headers = this.consumer.defaultHeaders;
    }

    /**
     * Sets the base url for all requests.
     * @param baseURL
     */
    setBaseURL(baseURL) {
        this.baseURL = baseURL;
    }

    /**
     * Adds header to all requests.
     * @param {string} name
     * @param {string} value
     */
    addHeader(name, value) {
        this.headers[name] = value;
    }

    /**
     * Performs a DELETE request.
     * @param {string} [path] Path on the endpoint.
     * @param {Object} [data] Data payload.
     * @returns {Promise}
     */
    delete(path = '', data = {}) {
        return Promise.reject('Not implemented!');
    }

    /**
     * Performs a GET request.
     * @param {string} [path] Path on the endpoint.
     * @param {Object} [data] Data payload.
     * @returns {Promise}
     */
    get(path = '', data = {}) {
        return Promise.reject('Not implemented!');
    }

    /**
     * Performs a PATCH request.
     * @param {string} [path] Path on the endpoint.
     * @param {Object} [data] Data payload.
     * @returns {Promise}
     */
    patch(path = '', data = {}) {
        return Promise.reject('Not implemented!');
    }

    /**
     * Performs a POST request.
     * @param {string} [path] Path on the endpoint.
     * @param {Object} [data] Data payload.
     * @returns {Promise}
     */
    post(path = '', data = {}) {
        return Promise.reject('Not implemented!');
    }

    /**
     * Performs a PUT request.
     * @param {string} [path] Path on the endpoint.
     * @param {Object} [data] Data payload.
     * @returns {Promise}
     */
    put(path = '', data = {}) {
        return Promise.reject('Not implemented!');
    }

    /**
     * Returns the full path based this.baseURL and path.
     * @param {string} path
     * @returns {string}
     */
    getURL(path) {
        path = path + '';

        if (path.match('://')) {
            return path;
        } else {
            let concatenatedURL = this.baseURL + '/' + path;
            return concatenatedURL.replace(/([^:])\/\/+/g, '$1/');  // Removes double slashes (//) in path.
        }
    }
}
