## Classes

<dl>
<dt><a href="#CrudConsumer">CrudConsumer</a></dt>
<dd><p>Extend, instantiate and configure to request API endpoints.
Contains various methods for common CRUD tasks.</p>
</dd>
<dt><a href="#CrudConsumer">CrudConsumer</a></dt>
<dd></dd>
</dl>

<a name="CrudConsumer"></a>

## *CrudConsumer*
Extend, instantiate and configure to request API endpoints.
Contains various methods for common CRUD tasks.

**Kind**: global abstract class  
**See**: [abstract-consumer.md](abstract-consumer.md) for inherited API.  

* *[CrudConsumer](#CrudConsumer)*
    * *[new CrudConsumer(endpoint, [objectClass], [options])](#new_CrudConsumer_new)*
    * *[.create(object)](#CrudConsumer+create) ⇒ <code>Promise</code>*
    * *[.read(id)](#CrudConsumer+read) ⇒ <code>Promise</code>*

<a name="new_CrudConsumer_new"></a>

### *new CrudConsumer(endpoint, [objectClass], [options])*
Configures CrudConsumer instance.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| endpoint | <code>string</code> |  | Base endpoint for this API. |
| [objectClass] | <code>CrudConsumerObject</code> | <code>CrudConsumerObject</code> | Class to cast results to. |
| [options] | <code>Object</code> | <code></code> | Additional configuration. |

<a name="CrudConsumer+create"></a>

### *crudConsumer.create(object) ⇒ <code>Promise</code>*
Creates an object by performing a POST request.

**Kind**: instance method of <code>[CrudConsumer](#CrudConsumer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | Object to create. |

<a name="CrudConsumer+read"></a>

### *crudConsumer.read(id) ⇒ <code>Promise</code>*
Retrieves an object by performing a GET request.

**Kind**: instance method of <code>[CrudConsumer](#CrudConsumer)</code>  

| Param | Type |
| --- | --- |
| id | <code>number</code> &#124; <code>string</code> | 

<a name="CrudConsumer"></a>

## CrudConsumer
**Kind**: global class  

* [CrudConsumer](#CrudConsumer)
    * *[new CrudConsumer(endpoint, [objectClass], [options])](#new_CrudConsumer_new)*
    * *[.create(object)](#CrudConsumer+create) ⇒ <code>Promise</code>*
    * *[.read(id)](#CrudConsumer+read) ⇒ <code>Promise</code>*

<a name="new_CrudConsumer_new"></a>

### *new CrudConsumer(endpoint, [objectClass], [options])*
Configures CrudConsumer instance.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| endpoint | <code>string</code> |  | Base endpoint for this API. |
| [objectClass] | <code>CrudConsumerObject</code> | <code>CrudConsumerObject</code> | Class to cast results to. |
| [options] | <code>Object</code> | <code></code> | Additional configuration. |

<a name="CrudConsumer+create"></a>

### *crudConsumer.create(object) ⇒ <code>Promise</code>*
Creates an object by performing a POST request.

**Kind**: instance method of <code>[CrudConsumer](#CrudConsumer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | Object to create. |

<a name="CrudConsumer+read"></a>

### *crudConsumer.read(id) ⇒ <code>Promise</code>*
Retrieves an object by performing a GET request.

**Kind**: instance method of <code>[CrudConsumer](#CrudConsumer)</code>  

| Param | Type |
| --- | --- |
| id | <code>number</code> &#124; <code>string</code> | 

