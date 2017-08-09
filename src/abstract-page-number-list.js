import URI from 'urijs';
import { AbstractList } from './abstract-list';


/**
 * Abstract base class for paginated lists.
 * @see {@link abstract-list.md} for inherited API.
 * @abstract
 */
export class AbstractPageNumberList extends AbstractList {
    /**
     * @param {AbstractConsumerObject[]} objects Items to populate list with.
     * @param {Consumer} consumer Consumer instance for this object.
     * @param {Object} responseData The responseData result as Object.
     * @param {string} [method='get'] The request method.
     * @param {string} [path=''] The request path.
     * @param {Object} [data={}] The request data payload.
    */
    constructor(objects, consumer, responseData, method='get', path='', data={}) {
        super(objects, consumer, responseData, method, path, data);

        /** {string} The method of the request. */
        this.currentMethod = method;

        /** {string} The path of the request. */
        this.currentPath = path;

        /** {string} The payload of the request. */
        this.currentData = data;

        /** {string} The field to recover the page from. */
        this.pageField = 'page';

        /** {string} The parameter to indicate the request page with. */
        this.pageQueryParam = 'page';

        /** {number} The current page. */
        this.page = parseInt(this.responseData[this.pageField]);

        /** {string} The field to recover the amount of page from. */
        this.pageCountField = 'count';

        /** {number} The amount of pages. */
        this.pageCount = parseInt(this.responseData[this.pageCountField]);

        /** {number} The amount of objects on a page. */
        this.pageSize = this.length;
    }

    /**
     * Requests the first page.
     * @returns {Promise}
     */
    first() {
        return this.goToPage(1);
    }

    /**
     * Requests the last page.
     * @returns {Promise}
     */
    last() {
        return this.goToPage(this.pageCount);
    }

    /**
     * Requests the previous page.
     * @returns {Promise}
     */
    previous() {
        return this.goToPage(Math.max(this.page - 1, 1));
    }

    /**
     * Requests the next page.
     * @returns {Promise}
     */
    next() {
        return this.goToPage(Math.min(this.page + 1, this.pageCount));
    }

    /**
     * Navigates to page.
     * Only replays method and payload when forceGet=false.
     * @param {number} page
     * @param {boolean} [forceGet=true]
     */
    goToPage(page, forceGet=true) {
        let method = (forceGet) ? 'get' : this.currentMethod;
        let data =  (forceGet) ? {} : this.currentData;
        return this.requestPage(page, method, data);
    }

    /**
     * Requests a page
     * @param {number} page
     * @param {string} method
     * @param {Object} data
     * @returns {Promise}
     */
    requestPage(page, method, data) {
        let uri = URI(this.currentPath)
            .removeSearch(this.pageQueryParam)
            .addSearch(this.pageQueryParam, page);

        return this.__consumer__.request(method, uri, data);
    }
}
