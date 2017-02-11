# ConsumerJS

ConsumerJS is a [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) client/object mapper that aims to make using RESTful JSON API's simple and [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself). It converts JSON responses to object allowing [CRUD] operations on remote resources. ConsumerJS automatically adds a [CSRF](https://en.wikipedia.org/wiki/Cross-site_request_forgery) header (if the CSRF cookie is present).

## Install

Install with [npm](https://www.npmjs.com/).

```sh
$ npm i consumerjs --save
```

## Usage

*This library can be used in the browser only.*
*See [doc](doc/) for full API documentation.*

**Example:**

*data/post.js*
```js
import { CrudConsumer, CrudConsumerObject } from 'consumerjs';


class Post extends CrudConsumerObject {}


class PostConsumer extends CrudConsumer {
    constructor(endpoint='http://example.com/api/v1/posts/', objectClass=Post) {
        super(endpoint, objectClass);
    }
;}


export default PostConsumer;
```


**examples/crud-consumer.js**
```js
import PostConsumer from '../data/post.js';


let postConsumer = new PostConsumer();
postConsumer.create()
    .then(someFunction)  // When promise resolves, call someFunction with new Post object
    .catch(errorFunction);  // When promise rejects, call errorFunction
    
    
postConsumer.read()
    .then(someFunction)  // When promise resolves, call someFunction with all resolved Post objects
    .catch(errorFunction);  // When promise rejects, call errorFunction
    
    
let id = 1;
postConsumer.read(id)
    .then(someFunction)  // When promise resolves, call someFunction with resolved Post (with id 1)
    .catch(errorFunction);  // When promise rejects, call errorFunction
```


**examples/crud-consumer-object.js**
```js
// Internally, id is resolved using either "pk" or "id" field

post.title = 'some new title';
post.update()  // Saves changed fields to API using partial PATCH request
post.save()  // Save all fields to API using full PUT request
post.delete()  // Deletes this post using DELETE request
```

ConsumerJS defines a few built-in classes, all of those should be extended by a custom class:

- Consumer
- CrudConsumer
- ConsumerObject
- CrudConsumerObject

**Consumers (Consumer, CrudConsumer):**

"Consumers" are classes that define how to perform operations on the remote API. It converts the results to a "Consumer object" which contains a statefull representation of the API result.

*Consumers should be extended, configured and optionally methods can obe overwritten to change default behaviour. Configuration should be done in de constructor method:**


```js
/**
 * Configures Consumer instance
 * @param {string} endpoint Base endpoint for this API
 * @param {AbstractConsumerObject} objectClass Class to cast results to
 * @param {Object} [options] Additional configuration
 */
constructor(endpoint='http://example.com/api/v1/posts/', objectClass=Post, options=null) {
    super(endpoint, objectClass);
}
```

- Consumer: Simple "bare" consumer intended for use with custom methods.
- CrudConsumer: "Consumer with base methods for common CRUD operations.
    - `create([object])`, creates objecs.
    - `read([id])`, fetches all objects or a single object by id.

**Consumer objects (ConsumerObject, CrudConsumerObject):**

"Consumer objects" are classes that define how to perform object specific operations on the remote API.

*Consumer objects should be extended, configured and optionally methods can obe overwritten to change default behaviour.
*A reference to the consumer is kept using the __consumer__ property, (custom) methods can use this to communicate with the API.

```js
customMethod(data) {
    return this.__consumer.__.post('/path/', data);  // CrudConsumerObject instances can use this.getPath() as path.
}
```

- ConsumerObject: Simple "bare" consumer object intended for use with custom methods.
- CrudConsumerObject: "Consumer object with base methods for common CRUD operations.
    - `update()`, persists changes made to object.
    - `save()`, fully saves object.
    - `delete()`, deletes this object.
