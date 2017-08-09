import URI from 'urijs';

import { AbstractPageNumberList } from './abstract-page-number-list';


/**
 * A list with linked page number pagination.
 * @see {@link abstract-page-number-list.md} for inherited API.
 * @class
 */
export class LinkedPageNumberList extends AbstractPageNumberList {
    /**
     * Requests the previous page.
     * @returns {Promise}
     */
    previous() {
        if (typeof this.responseData.previous !== 'string') {
            return Promise.resolve(this);
        }

        let path = this.responseData.previous.replace(this.__consumer__.endpoint, '');
        return this.__consumer__.get(path);
    }

    /**
     * Requests the next page.
     * @returns {Promise}
     */
    next() {
        if (typeof this.responseData.next !== 'string') {
            return Promise.resolve(this);
        }

        let path = this.responseData.next.replace(this.__consumer__.endpoint, '');
        return this.__consumer__.get(path);
    }
}
