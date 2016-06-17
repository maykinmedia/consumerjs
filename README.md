# ConsumerJS

A REST API consumer (data store) built on top of [aurelia-http-client](https://github.com/aurelia/http-client) with built-in (Django) csrf support.

ConsumerJS is build to provide a better developer experience while object-orientated programming with remote objects. ConsumerJS fetches data and casts these to named objects so they can have properties and methods.

## Installation

`npm install maykinmedia/consumerjs`

## Usage

This example shows how to use ConsumerJS. All requests return promises for Post instances.

```javascript
import Consumer, { ConsumerObject } from 'consumerjs';


/**
 * Represents a retrieved post
 * @class
 */
class Post extends ConsumerObject {
    /**
     * Sets last modified date for post
     * @param {Number|String} The id of the post
     * @param {String} date
     * @returns {Promise}
     */
    setLastModified(date) {
        return this.__consumer__.setLastModified(this.id, date);
    }
}


/**
 * Handles post related communication with API
 * Casts results to Post instances
 * @class
 */
export class PostConsumer extends Consumer {
    /**
     * Configures this consumer
     */
    constructor() {
        super();
        this.endpoint = '/api/v1/posts';
        this.objectClass = Post;
    }

    /**
     * Create new empty post
     * @param {Number} categoryId
     * @param {Number} card
     * @param {String} channel
     * @returns {Promise}
     */
    create(categoryId) {
        return this.post('/', { category: categoryId });
    }

    /**
     * Fetches post
     * @param {Number|String} postId
     * @returns {Promise}
     */
    fetch(postId) {
        return this.get(`/${postId}/`);
    }

    /**
     * Fetches all posts for a category
     * @param {Number|String} postId
     * @returns {Promise}
     */
    getAllForCategory(categoryId) {
        return this.get(`/`, { category: categoryId });
    }

    /**
     * Sets last modified date for post
     * @param {Number|String} The id of the post
     * @param {String} date
     * @returns {Promise}
     */
    setLastModified(postId, date) {
        return this.patch(`/${postId}/`, { last_modified: date });
    }
}
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

The MIT License (MIT)

Copyright (c) 2015 Maykin Media

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
