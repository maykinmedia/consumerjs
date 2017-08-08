import { AbstractList } from './abstract-list';


/**
 * Abstract base class for paginated lists.
 * @see {@link abstract-list.md} for inherited API.
 * @abstract
 */
export class AbstractPaginatedList extends AbstractList {
    /**
     * @param {AbstractConsumerObject[]} objects Items to populate list with.
     * @param {Consumer} consumer Consumer instance for this object.
     * @param {Object} raw The raw result as Object.
     * @param {string} [method='get'] The request method.
     * @param {string} [path=''] The request path.
     * @param {Object} [data={}] The request data payload.
    */
    constructor(objects, consumer, raw, method='get', path='', data={}) {
        super(objects, consumer, raw, method, path, data);

        /** {string} The method of the request. */
        this.currentMethod = method;

        /** {string} The path of the request. */
        this.currentPath = path;

        /** {string} The payload of the request. */
        this.currentData = data;
    }

    /**
     * Placeholder implementation for method.
     * @throws {Error}
     */
    first() {
        throw new Error('List does not implement first()!');
    }

    /**
     * Placeholder implementation for method.
     * @throws {Error}
     */
    last() {
        throw new Error('List does not implement last()!');
    }

    /**
     * Placeholder implementation for method.
     * @throws {Error}
     */
    previous() {
        throw new Error('List does not implement previous()!');
    }

    /**
     * Placeholder implementation for method.
     * @throws {Error}
     */
    next() {
        throw new Error('List does not implement next()!');
    }

    /**
     * Navigates to page.
     * Only replays method and payload when forceGet=false.
     * @param {number} page
     * @param {boolean} [forceGet=true]
     * @throws {Error}
     */
    goToPage(page, forceGet=true) {
        let method = (forceGet) ? 'get' : this.currentMethod;
        let data =  (forceGet) ? {} : this.currentData;

        return this.requestPage(page, method, data);
    }

    /**
     * Placeholder implementation for method.
     * @throws {Error}
     */
    requestPage(page, method,data) {
        throw new Error('List does not implement requestPage()!');
    }
}
