import axios, {CancelToken} from 'axios';
import URI from 'urijs';

import {AbstractHTTPClient} from './abstract-http-client';
import {HttpResponseMessage} from './http-response-message';

/**
 * HTTP client based on Axios.
 * (Response) interface is modeled after aurelia-http-client.
 * @class
 */
export class AxiosHTTPClient extends AbstractHTTPClient {
    /**
     * Configures AxiosHTTPClient instance.
     * @param {Object} [options] Additional configuration.
     */
    constructor(options) {
        super(options);

        /** @type {Object} */
        this.cancelSource = CancelToken.source();
    }

    /**
     * Returns the configuration for axios based on this.headers and query.
     * Makes sure the response schema closely matches former versions using aurelia-http-client.
     * @param {Object} [data] Data payload.
     * @param {Object} [query] Query parameters.
     * @returns {Object}
     */
    getConfiguration(data, query) {
        // Makes sure the response schema closely matches former versions using aurelia-http-client.
        if (!axios.configured) {
            axios.interceptors.response.use(this.createResponse.bind(this), this.createError.bind(this));
            axios.configured = true;
        }

        // Returns the configuration for axios based on this.headers and query.
        return {
            cancelToken: this.cancelSource.token,
            headers: this.headers,
            params: query,
            transformResponse: json => json,  // Use Consumer instance for parsing.
            data: JSON.stringify(data),  // Bypass Axios serializer for data.
            withCredentials: true,
        };
    }

    /**
     * Converts Axios response to HttpResponseMessage.
     * @param {Object} response
     * @returns {HttpResponseMessage}
     */
    createResponse(response) {
        return new HttpResponseMessage({
            headers: response.headers,
            requestMessage: response.request,
            response: response.data,
            responseType: 'text/json',
            statusCode: response.status,
            statusText: response.statusText
        });
    }

    /**
     * Converts Axios error to HttpResponseMessage.
     * @param error
     * @returns {Promise<never>}
     */
    createError(error) {
        let statusCode;

        try {
            if (typeof error === 'string') {
                statusCode = parseInt(error.match(/\d+/)[0]);
            } else {
                statusCode = error.response.status;
            }
        } catch (e) {
            statusCode = 0;
        }

        return Promise.reject(new HttpResponseMessage({
            statusCode: statusCode,
            statusText: error,
            __CANCEL__: Boolean(error.__CANCEL__),
        }));
    }

    /**
     * Adds/implements abort (and cancel) methods to Axios provided promise.
     * @param {Promise} axiosPromise
     * @returns {Promise}
     */
    withAbort(axiosPromise) {
        let promise = axiosPromise
            .catch(thrown => {
                if (axios.isCancel(thrown)) {
                    return Promise.reject(new HttpResponseMessage({
                        response: thrown,
                        responseType: 'abort',
                        statusCode: 0,
                        statusText: '',
                    }));
                } else {
                    return Promise.reject(thrown);
                }
            });

        promise.abort = this.cancelSource.cancel;
        promise.cancel = this.cancelSource.cancel;
        return promise;
    }

    /**
     * Performs a DELETE request.
     * @param {string} [path] Path on the endpoint.
     * @param {Object} [data] Data payload.
     * @returns {Promise}
     */
    delete(path = '', data = {}) {
        return this.request('delete', path, data);
    }

    /**
     * Performs a GET request.
     * @param {string} [path] Path on the endpoint.
     * @param {Object} [data] Data payload.
     * @returns {Promise}
     */
    get(path = '', data = {}) {
        return this.request('get', path, data);
    }

    /**
     * Performs a PATCH request.
     * @param {string} [path] Path on the endpoint.
     * @param {Object} [data] Data payload.
     * @returns {Promise}
     */
    patch(path = '', data = {}) {
        return this.request('patch', path, data);
    }

    /**
     * Performs a POST request.
     * @param {string} [path] Path on the endpoint.
     * @param {Object} [data] Data payload.
     * @returns {Promise}
     */
    post(path = '', data = {}) {
        return this.request('post', path, data);
    }

    /**
     * Performs a PUT request.
     * @param {string} [path] Path on the endpoint.
     * @param {Object} [data] Data payload.
     * @returns {Promise}
     */
    put(path = '', data = {}) {
        return this.request('put', path, data);
    }

    /**
     * Performs the Axios request.
     * @param {string} method The method to use.
     * @param {string} [path] Path on the endpoint.
     * @param {Object} [data] Data payload.
     * @returns {Promise}
     */
    request(method, path = '', data = {}) {
        let uri = URI(path);
        let query = uri.query(true);
        uri.query(false);
        path = uri.toString();

        method = method.toLowerCase();
        let promise;

        if (method === 'get' || method === 'delete') {
            promise = axios[method](this.getURL(path), this.getConfiguration(data, query));
        } else {
            promise = axios[method](this.getURL(path), data, this.getConfiguration(data, query));
        }
        return this.withAbort(promise);
    }
}
