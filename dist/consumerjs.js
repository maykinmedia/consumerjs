'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Base class for object derived from Consumer
 * @abstract
 */

var ConsumerObject = exports.ConsumerObject = function () {
  /**
   * Creates a new object
   * @param {Object} [data] Data to parse
   * @param {Consumer} [consumer] Consumer instance for this object
   */

  function ConsumerObject(data, consumer) {
    _classCallCheck(this, ConsumerObject);

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


  _createClass(ConsumerObject, [{
    key: 'createFromObject',
    value: function createFromObject(data) {
      var keys = Object.keys(data);

      for (var i in keys) {
        var key = keys[i];
        this[key] = data[key];
      }
    }
  }]);

  return ConsumerObject;
}();
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Consumer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _httpClient = require('aurelia/http-client');

var _palBrowser = require('aurelia/pal-browser');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Instantiate to request API endpoints
 * @class
 */

var Consumer = exports.Consumer = function () {

    /**
     * Constructor
     * Sets endpoint to retrieve data from and class to cast result to
     * Initializes Aurelia/pal-browser
     * @param {String} endpoint Base endpoint for this API
     * @param {ConsumerObject} objectClass Class to cast results to
     */


    /** Class to instantiate data to */

    function Consumer(endpoint, objectClass) {
        var _this = this;

        _classCallCheck(this, Consumer);

        this.endpoint = '';
        this.objectClass = {};
        this.client = new _httpClient.HttpClient().configure(function (x) {
            x.withBaseUrl(_this.endpoint);
        });

        this.endpoint = endpoint;
        this.objectClass = objectClass;

        (0, _palBrowser.initialize)();
    }

    /**
     * Performs a DELETE request
     * @param {String} path Path on the endpoint
     * @returns {Promise}
     */


    /** HttpClient instance */

    /** Base API endpoint */


    _createClass(Consumer, [{
        key: 'delete',
        value: function _delete() {
            var path = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

            return this.request('delete', path, {});
        }

        /**
         * Performs a GET request
         * @param {String} path Path on the endpoint
         * @param {Object} query Query parameters
         * @returns {Promise}
         */

    }, {
        key: 'get',
        value: function get() {
            var path = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
            var query = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

            return this.request('get', path, query);
        }

        /**
         * Performs a PATCH request
         * @param {String} path Path on the endpoint
         * @param {Object} data Data payload
         * @returns {Promise}
         */

    }, {
        key: 'patch',
        value: function patch() {
            var path = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
            var data = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

            return this.request('patch', path, data);
        }

        /**
         * Performs a POST request
         * @param {String} path Path on the endpoint
         * @param {Object} data Data payload
         * @returns {Promise}
         */

    }, {
        key: 'post',
        value: function post() {
            var path = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
            var data = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

            return this.request('post', path, data);
        }

        /**
         * Performs a PUT request
         * @param {String} path Path on the endpoint
         * @param {Object} data Data payload
         * @returns {Promise}
         */

    }, {
        key: 'put',
        value: function put() {
            var path = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
            var data = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

            return this.request('put', path, data);
        }

        /**
         * Performs a request
         * @param {String} method The method to use
         * @param {String} path Path on the endpoint
         * @param {Object} data Data payload
         */

    }, {
        key: 'request',
        value: function request(method, path, data) {
            var url = this.endpoint + path;
            return this.client[method](url, data).then(this.requestSuccess.bind(this)).catch(this.requestFailed.bind(this));
        }

        /**
         * Callback for request
         * Gets called if request resolve successfully
         * @param {HttpResponseMessage} data
         * @returns {ConsumerObject|ConsumerObject[]}
         */

    }, {
        key: 'requestSuccess',
        value: function requestSuccess(data) {
            return this.parse(data.response);
        }

        /**
         * Parses JSON string to a single or list of ConsumerObject instance(s)
         * @param {String} data
         * @returns {ConsumerObject|ConsumerObject[]}
         */

    }, {
        key: 'parse',
        value: function parse(json) {
            var object = JSON.parse(json);

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

    }, {
        key: 'parseList',
        value: function parseList(array) {
            var list = [];

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var object = _step.value;

                    list.push(new this.objectClass(object));
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return list;
        }

        /**
         * Parses anonymous object to a single ConsumerObject
         * @param {Object} object
         * @returns {ConsumerObject}
         */

    }, {
        key: 'parseScalar',
        value: function parseScalar(object) {
            return new this.objectClass(object);
        }

        /**
         * Callback for request
         * Gets called if request doesnt resolve successfully
         * @param {HttpResponseMessage} data
         * @returns {HttpResponseMessage} data
         */

    }, {
        key: 'requestFailed',
        value: function requestFailed(data) {
            return data;
        }
    }]);

    return Consumer;
}();
//# sourceMappingURL=consumerjs.js.map
