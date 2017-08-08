import URI from 'urijs';

import { AbstractPaginatedList } from './abstract-paginated-list';


/**
 * A list with page number pagination.
 * @see {@link abstract-paginated-list.md} for inherited API.
 * @class
 */
export class PageNumberList extends AbstractPaginatedList {
    constructor(...args) {
        super(...args);

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
