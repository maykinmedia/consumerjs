import { AureliaCookie } from 'aurelia-cookie';
import URI from 'urijs';

import { AxiosHTTPClient } from './axios-http-client';
import { List } from './list';
import { excludeUnserializableFields, isObject } from './utils';


/**
 * Abstract base class for all consumers.
 * @abstract
 */
export class AbstractConsumer {
    /**
     * Configures Consumer instance.
     * @param {string} endpoint Base endpoint for this API.
     * @param {AbstractConsumerObject} objectClass Class to cast results to.
     * @param {Object} [options] Additional configuration.
     */
    constructor(endpoint, objectClass, options=null) {
        /** {string} The value of the Content-Type header. */
        this.contentType = 'application/json';

        /** {string} The name for the CSRF cookie. */
        this.csrfCookie = 'csrftoken';

        /** {string} The name for the CSRF header. */
        this.csrfHeader = 'X-CSRFToken';

        /** {Object} An optional object holding key value pairs of additional headers. */
        this.defaultHeaders = {
            'Accept': 'application/json',
        };

        /** {Object} An optional object holding key value pairs of additional query parameters.*/
        this.defaultParameters = {};

        /** {string} The base API endpoint prefixed for all requests. */
        this.endpoint = endpoint;

        /** {Function} The class to casts objects to. */
        this.objectClass = objectClass;

        /** {Function} The class to use for lists. */
        this.listClass = List;

        /** {string} An optional dot separated path to the received objectClass' data. */
        this.parserDataPath = '';  // TODO: Specify for both list and object.

        /** {string[]} Keys on this.objectClass that should not be passed to the API. */
        this.unserializableFields = ['__consumer__'];

        /** {AbstractHTTPClient} The HttpClient instance to work with. */
        this.client = new AxiosHTTPClient({baseURL: endpoint, headers: this.defaultHeaders});

        if (options) {
            Object.assign(this, options);
        }
    }

    /**
     * Performs a DELETE request.
     * @param {string} path Path on the endpoint.
     * @param {Object} query Query parameters.
     * @returns {Promise}
     */
    delete(path = '', query = {}) {
        let uri = URI.build({'path': path, 'query': URI.buildQuery(query)});
        return this.request('delete', uri, {});
    }

    /**
     * Performs a GET request.
     * @param {string} path Path on the endpoint.
     * @param {Object} query Query parameters.
     * @returns {Promise}
     */
    get(path = '', query = {}) {
        let uri = URI.build({'path': path + '', 'query': URI.buildQuery(query)});
        return this.request('get', uri, {});
    }

    /**
     * Performs a PATCH request.
     * @param {string} path Path on the endpoint.
     * @param {Object} data Data payload.
     * @returns {Promise}
     */
    patch(path = '', data = {}, query = {}) {
        let uri = URI.build({'path': path, 'query': URI.buildQuery(query)});
        return this.request('patch', uri, data);
    }

    /**
     * Performs a POST request.
     * @param {string} path Path on the endpoint.
     * @param {Object} data Data payload.
     * @returns {Promise}
     */
    post(path = '', data = {}, query = {}) {
        let uri = URI.build({'path': path, 'query': URI.buildQuery(query)});
        return this.request('post', uri, data);
    }

    /**
     * Performs a PUT request.
     * @param {string} path Path on the endpoint.
     * @param {Object} data Data payload.
     * @returns {Promise}
     */
    put(path = '', data = {}, query = {}) {
        let uri = URI.build({'path': path, 'query': URI.buildQuery(query)});
        return this.request('put', uri, data);
    }

    /**
     * Performs a request.
     * @param {string} method The method to use.
     * @param {string} [path] Path on the endpoint, may contain query parameters for backwards compatibility.
     * @param {Object} [data] Data payload.
     * @returns {Promise}
     */
    request(method, path='', data={}) {
        let clientPromise;
        let consumerPromise;

        // Set base url
        this.client.setBaseURL(this.endpoint);

        // Set content type
        this.addHeader('Content-Type', this.contentType);

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

        // Return cancellable promise
        clientPromise = this.client[method](uri.toString(), data);
        consumerPromise = clientPromise
                .then(response => this.requestSuccess(response, method, uri.toString(), data))
                .catch(this.requestFailed.bind(this));

        consumerPromise.abort = clientPromise.abort;
        consumerPromise.cancel = clientPromise.cancel;
        return consumerPromise;
    }

    /**
     * Returns whether the request is safe (should not mutate any data).
     * @param {string} method The method type (GET, POST etc.).
     * @returns {boolean}
     */
    isSafeMethod(method) {
        let saveMethods = ['GET', 'HEAD', 'OPTIONS', 'TRACE'];
        return saveMethods.indexOf(method.toUpperCase()) > -1;
    }

    /**
     * Looks for cookie this.csrfCookie and passes it's value to this.csrfHeader.
     */
    addCsrfToken() {
        let csrfToken = this.getCookie(this.csrfCookie);
        this.defaultHeaders[this.csrfHeader] = csrfToken;
        this.addHeader(this.csrfHeader, csrfToken);
    }

    /**
     * Wrapper for Cookie.get.
     * @param {string} name
     * @returns {string}
     */
    getCookie(name) {
        return AureliaCookie.get(name);
    }

    /**
     * Adds a header to all future request.
     * @param {string} name
     * @param {string} value
     */
    addHeader(name, value) {
        this.client.addHeader(name, value);
    }

    /**
     * Serializes data.
     * Returns data if data is not an object.
     * Excludes fields marked in this.unserializableFields.
     * @param {(AbstractConsumerObject|*)} data
     * @returns {*}
     */
    serialize(data) {
        // Returns data if data is not an object
        if (!isObject(data)) {
            return data;
        }

        // Excludes fields marked in this.unserializableFields
        return excludeUnserializableFields(data, this.unserializableFields);
    }

    /**
     * Callback for request.
     * Gets called if request resolve successfully.
     * @param {HttpResponseMessage} response
     * @param {string} method The request method.
     * @param {string} path The request path.
     * @param {Object} data The request data payload.
     * @returns {(AbstractConsumerObject|AbstractList)}
     */
    requestSuccess(response, method, path, data) {
        let result = this.parse(response.response, method, path, data);
        return Promise.resolve(result);
    }

    /**
     * Parses JSON string to a single or list of AbstractConsumerObject instance(s).
     * @param {string} json The response json.
     * @param {string} method The request method.
     * @param {string} path The request path.
     * @param {Object} data The request data payload.
     * @returns {(AbstractConsumerObject|AbstractList|undefined)}
     */
    parse(json, method, path, data) {
        if (!json) {
            return;
        }

        // Convert json to object.
        let object = json;
        if (typeof json === 'string') {
            object = JSON.parse(json);
        }

        // Extract the relevant data.
        let parserObject = JSON.parse(JSON.stringify(object)); // Clone.
        if (this.parserDataPath) {
            let parts = this.parserDataPath.split('.');
            parts.forEach(part => {
                parserObject = parserObject[part]
            });
        }

        // Parse as list if response is a array.
        if (Array.isArray(parserObject)) {
            return this.parseList(parserObject, object, method, path, data);
        }

        // Parse as single item otherwise.
        return this.parseScalar(parserObject, object, method, path, data);
    }

    /**
     * Parses anonymous objects to a list of AbstractConsumerObjects.
     * Gets called when result JSON.parse is an array.
     * @param {Object[]} array
     * @param {Object} responseData The response data as Object.
     * @param {string} method The request method.
     * @param {string} path The request path.
     * @param {Object} data The request data payload.
     * TODO: Cleanup
     * @returns {AbstractList}
     */
    parseList(array, responseData, method, path, data) {
        let consumerObjects = array.map(object => this.parseEntity(object, responseData, method, path, data));
        return new this.listClass(consumerObjects, this, responseData, method, path, data);
    }

    /**
     * Parses anonymous object to a single AbstractConsumerObject.
     * Gets called when result JSON.parse is not an array.
     * @param {Object} object
     * @param {Object} responseData The response data as Object.
     * @param {string} method The request method.
     * @param {string} path The request path.
     * @param {Object} data The request data payload.
     * TODO: Cleanup, rename
     * @returns {AbstractConsumerObject}
     */
    parseScalar(object, responseData, method, path, data) {
        return this.parseEntity(object, responseData, method, path, data);
    }

    /**
     * Parses anonymous object to a single AbstractConsumerObject.
     * @param {Object} object
     * @param {Object} responseData The response data as Object.
     * @param {string} method The request method.
     * @param {string} path The request path.
     * @param {Object} data The request data payload.
     * @returns {AbstractConsumerObject}
     */
    parseEntity(object, responseData, method, path, data) {  // jshint ignore:line
        return new this.objectClass(object, this);
    }

    /**
     * Callback for request.
     * Gets called if request doesnt resolve successfully.
     * @param {HttpResponseMessage} data
     * @returns {HttpResponseMessage} data
     */
    requestFailed(data) {
        return Promise.reject(data);
    }
}
