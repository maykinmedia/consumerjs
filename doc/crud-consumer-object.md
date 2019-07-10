<a name="module_crud-consumer-object"></a>

## crud-consumer-object

* [crud-consumer-object](#module_crud-consumer-object)
    * *[.CrudConsumerObject](#module_crud-consumer-object.CrudConsumerObject)*
        * *[new exports.CrudConsumerObject(data, consumer)](#new_module_crud-consumer-object.CrudConsumerObject_new)*
        * *[.__initial_state__](#module_crud-consumer-object.CrudConsumerObject+__initial_state__)*
        * *[.update()](#module_crud-consumer-object.CrudConsumerObject+update) ⇒ <code>Promise</code>*
        * *[.save()](#module_crud-consumer-object.CrudConsumerObject+save) ⇒ <code>Promise</code>*
        * *[.delete()](#module_crud-consumer-object.CrudConsumerObject+delete) ⇒ <code>Promise</code>*
        * *[.getPath()](#module_crud-consumer-object.CrudConsumerObject+getPath) ⇒ <code>string</code> \| <code>false</code>*
        * *[.getPK()](#module_crud-consumer-object.CrudConsumerObject+getPK) ⇒ <code>\*</code> \| <code>false</code>*
        * *[.getChangedFields()](#module_crud-consumer-object.CrudConsumerObject+getChangedFields) ⇒ <code>Object</code>*

<a name="module_crud-consumer-object.CrudConsumerObject"></a>

### *crud-consumer-object.CrudConsumerObject*
Base class for object derived from Consumer.
Contains various methods for common CRUD tasks.
Should be extended to provide methods for objects.

**Kind**: static abstract class of [<code>crud-consumer-object</code>](#module_crud-consumer-object)  
**See**: [abstract-consumer-object.md](abstract-consumer-object.md) for inherited API.  

* *[.CrudConsumerObject](#module_crud-consumer-object.CrudConsumerObject)*
    * *[new exports.CrudConsumerObject(data, consumer)](#new_module_crud-consumer-object.CrudConsumerObject_new)*
    * *[.__initial_state__](#module_crud-consumer-object.CrudConsumerObject+__initial_state__)*
    * *[.update()](#module_crud-consumer-object.CrudConsumerObject+update) ⇒ <code>Promise</code>*
    * *[.save()](#module_crud-consumer-object.CrudConsumerObject+save) ⇒ <code>Promise</code>*
    * *[.delete()](#module_crud-consumer-object.CrudConsumerObject+delete) ⇒ <code>Promise</code>*
    * *[.getPath()](#module_crud-consumer-object.CrudConsumerObject+getPath) ⇒ <code>string</code> \| <code>false</code>*
    * *[.getPK()](#module_crud-consumer-object.CrudConsumerObject+getPK) ⇒ <code>\*</code> \| <code>false</code>*
    * *[.getChangedFields()](#module_crud-consumer-object.CrudConsumerObject+getChangedFields) ⇒ <code>Object</code>*

<a name="new_module_crud-consumer-object.CrudConsumerObject_new"></a>

#### *new exports.CrudConsumerObject(data, consumer)*
Creates a new object.


| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Data to parse. |
| consumer | <code>CrudConsumer</code> | Consumer instance for this object. |

<a name="module_crud-consumer-object.CrudConsumerObject+__initial_state__"></a>

#### *crudConsumerObject.\_\_initial\_state\_\_*
{Object} A clone of the initial state before any modifications were made.

**Kind**: instance property of [<code>CrudConsumerObject</code>](#module_crud-consumer-object.CrudConsumerObject)  
<a name="module_crud-consumer-object.CrudConsumerObject+update"></a>

#### *crudConsumerObject.update() ⇒ <code>Promise</code>*
Partially Updates the object by performing a PATCH request.
Only sends the changed fields as data.
If no fields have changed, request is omitted and a resolving Promise is returned.
After the requests resolves the initial state is updated (to allow future change detections).

**Kind**: instance method of [<code>CrudConsumerObject</code>](#module_crud-consumer-object.CrudConsumerObject)  
<a name="module_crud-consumer-object.CrudConsumerObject+save"></a>

#### *crudConsumerObject.save() ⇒ <code>Promise</code>*
Fully Updates the object by performing a PUT request.
Sends all fields as data.
After the requests resolves the initial state is updated (to allow future change detections).

**Kind**: instance method of [<code>CrudConsumerObject</code>](#module_crud-consumer-object.CrudConsumerObject)  
<a name="module_crud-consumer-object.CrudConsumerObject+delete"></a>

#### *crudConsumerObject.delete() ⇒ <code>Promise</code>*
Removes this object.

**Kind**: instance method of [<code>CrudConsumerObject</code>](#module_crud-consumer-object.CrudConsumerObject)  
<a name="module_crud-consumer-object.CrudConsumerObject+getPath"></a>

#### *crudConsumerObject.getPath() ⇒ <code>string</code> \| <code>false</code>*
Returns the path for this object.
Path is assumed to be the primary key.
If no key is found, false is returned.

**Kind**: instance method of [<code>CrudConsumerObject</code>](#module_crud-consumer-object.CrudConsumerObject)  
<a name="module_crud-consumer-object.CrudConsumerObject+getPK"></a>

#### *crudConsumerObject.getPK() ⇒ <code>\*</code> \| <code>false</code>*
Tries to return the primary key of this object.
First tries this.pk, this.id otherwise.
If this.pk and this.id are both empty, false is returned.

**Kind**: instance method of [<code>CrudConsumerObject</code>](#module_crud-consumer-object.CrudConsumerObject)  
**Returns**: <code>\*</code> \| <code>false</code> - Value of pk/id or false.  
<a name="module_crud-consumer-object.CrudConsumerObject+getChangedFields"></a>

#### *crudConsumerObject.getChangedFields() ⇒ <code>Object</code>*
Returns an object containing the changed properties of this object.
Property names in this.\_\_consumer\_\_.unserializableFields are ignored.
Properties are compared against this.\_\_initial_state\_\_.

**Kind**: instance method of [<code>CrudConsumerObject</code>](#module_crud-consumer-object.CrudConsumerObject)  
