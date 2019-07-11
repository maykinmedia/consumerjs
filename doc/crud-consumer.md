<a name="module_crud-consumer"></a>

## crud-consumer

* [crud-consumer](#module_crud-consumer)
    * *[.CrudConsumer](#module_crud-consumer.CrudConsumer)*
        * *[new exports.CrudConsumer(endpoint, [objectClass], [options])](#new_module_crud-consumer.CrudConsumer_new)*
        * *[.create(object)](#module_crud-consumer.CrudConsumer+create) ⇒ <code>Promise</code>*
        * *[.read(id)](#module_crud-consumer.CrudConsumer+read) ⇒ <code>Promise</code>*

<a name="module_crud-consumer.CrudConsumer"></a>

### *crud-consumer.CrudConsumer*
Extend, instantiate and configure to request API endpoints.
Contains various methods for common CRUD tasks.

**Kind**: static abstract class of [<code>crud-consumer</code>](#module_crud-consumer)  
**See**: [abstract-consumer.md](abstract-consumer.md) for inherited API.  

* *[.CrudConsumer](#module_crud-consumer.CrudConsumer)*
    * *[new exports.CrudConsumer(endpoint, [objectClass], [options])](#new_module_crud-consumer.CrudConsumer_new)*
    * *[.create(object)](#module_crud-consumer.CrudConsumer+create) ⇒ <code>Promise</code>*
    * *[.read(id)](#module_crud-consumer.CrudConsumer+read) ⇒ <code>Promise</code>*

<a name="new_module_crud-consumer.CrudConsumer_new"></a>

#### *new exports.CrudConsumer(endpoint, [objectClass], [options])*
Configures CrudConsumer instance.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| endpoint | <code>string</code> |  | Base endpoint for this API. |
| [objectClass] | <code>CrudConsumerObject</code> | <code>CrudConsumerObject</code> | Class to cast results to. |
| [options] | <code>Object</code> | <code></code> | Additional configuration. |

<a name="module_crud-consumer.CrudConsumer+create"></a>

#### *crudConsumer.create(object) ⇒ <code>Promise</code>*
Creates an object by performing a POST request.

**Kind**: instance method of [<code>CrudConsumer</code>](#module_crud-consumer.CrudConsumer)  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | Object to create. |

<a name="module_crud-consumer.CrudConsumer+read"></a>

#### *crudConsumer.read(id) ⇒ <code>Promise</code>*
Retrieves an object by performing a GET request.

**Kind**: instance method of [<code>CrudConsumer</code>](#module_crud-consumer.CrudConsumer)  

| Param | Type |
| --- | --- |
| id | <code>number</code> \| <code>string</code> | 

