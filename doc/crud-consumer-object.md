## Classes

<dl>
<dt><a href="#CrudConsumerObject">CrudConsumerObject</a></dt>
<dd><p>Base class for object derived from Consumer
Contains various methods for common CRUD tasks
Should be extended to provide methods for objects</p>
</dd>
<dt><a href="#CrudConsumerObject">CrudConsumerObject</a></dt>
<dd></dd>
</dl>

<a name="CrudConsumerObject"></a>

## *CrudConsumerObject*
Base class for object derived from Consumer
Contains various methods for common CRUD tasks
Should be extended to provide methods for objects

**Kind**: global abstract class  
**See**: [abstract-consumer-object.js.md](abstract-consumer-object.js.md) for inherited API  

* *[CrudConsumerObject](#CrudConsumerObject)*
    * *[new CrudConsumerObject(data, consumer)](#new_CrudConsumerObject_new)*
    * *[.update()](#CrudConsumerObject+update) ⇒ <code>Promise</code>*
    * *[.save()](#CrudConsumerObject+save) ⇒ <code>Promise</code>*
    * *[.delete()](#CrudConsumerObject+delete) ⇒ <code>Promise</code>*
    * *[.getPath()](#CrudConsumerObject+getPath) ⇒ <code>string</code> &#124; <code>false</code>*
    * *[.getPK()](#CrudConsumerObject+getPK) ⇒ <code>\*</code> &#124; <code>false</code>*
    * *[.getChangedFields()](#CrudConsumerObject+getChangedFields) ⇒ <code>Object</code>*

<a name="new_CrudConsumerObject_new"></a>

### *new CrudConsumerObject(data, consumer)*
Creates a new object


| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Data to parse |
| consumer | <code>CrudConsumer</code> | Consumer instance for this object |

<a name="CrudConsumerObject+update"></a>

### *crudConsumerObject.update() ⇒ <code>Promise</code>*
Partially Updates the object by performing a PATCH request
Only sends the changed fields as data
If no fields have changed, request is omitted and a resolving Promise is returned
After the requests resolves the initial state is updated (to allow future change detections)

**Kind**: instance method of <code>[CrudConsumerObject](#CrudConsumerObject)</code>  
<a name="CrudConsumerObject+save"></a>

### *crudConsumerObject.save() ⇒ <code>Promise</code>*
Fully Updates the object by performing a PUT request
Sends all fields as data
After the requests resolves the initial state is updated (to allow future change detections)

**Kind**: instance method of <code>[CrudConsumerObject](#CrudConsumerObject)</code>  
<a name="CrudConsumerObject+delete"></a>

### *crudConsumerObject.delete() ⇒ <code>Promise</code>*
Removes this object

**Kind**: instance method of <code>[CrudConsumerObject](#CrudConsumerObject)</code>  
<a name="CrudConsumerObject+getPath"></a>

### *crudConsumerObject.getPath() ⇒ <code>string</code> &#124; <code>false</code>*
Returns the path for this object
Path is assumed to be the primary key
If no key is found, false is returned

**Kind**: instance method of <code>[CrudConsumerObject](#CrudConsumerObject)</code>  
<a name="CrudConsumerObject+getPK"></a>

### *crudConsumerObject.getPK() ⇒ <code>\*</code> &#124; <code>false</code>*
Tries to return the primary key of this object
First tries this.pk, this.id otherwise
Result is cast to sting
If this.pk and this.id are both empty, an empty string is returned

**Kind**: instance method of <code>[CrudConsumerObject](#CrudConsumerObject)</code>  
**Returns**: <code>\*</code> &#124; <code>false</code> - Value of pk/id or false  
<a name="CrudConsumerObject+getChangedFields"></a>

### *crudConsumerObject.getChangedFields() ⇒ <code>Object</code>*
Returns an object containing the changed properties of this object
Property names in this.__consumer__.unserializableFields are ignored
Properties are compared against this.__initial_state__

**Kind**: instance method of <code>[CrudConsumerObject](#CrudConsumerObject)</code>  
<a name="CrudConsumerObject"></a>

## CrudConsumerObject
**Kind**: global class  

* [CrudConsumerObject](#CrudConsumerObject)
    * *[new CrudConsumerObject(data, consumer)](#new_CrudConsumerObject_new)*
    * *[.update()](#CrudConsumerObject+update) ⇒ <code>Promise</code>*
    * *[.save()](#CrudConsumerObject+save) ⇒ <code>Promise</code>*
    * *[.delete()](#CrudConsumerObject+delete) ⇒ <code>Promise</code>*
    * *[.getPath()](#CrudConsumerObject+getPath) ⇒ <code>string</code> &#124; <code>false</code>*
    * *[.getPK()](#CrudConsumerObject+getPK) ⇒ <code>\*</code> &#124; <code>false</code>*
    * *[.getChangedFields()](#CrudConsumerObject+getChangedFields) ⇒ <code>Object</code>*

<a name="new_CrudConsumerObject_new"></a>

### *new CrudConsumerObject(data, consumer)*
Creates a new object


| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Data to parse |
| consumer | <code>CrudConsumer</code> | Consumer instance for this object |

<a name="CrudConsumerObject+update"></a>

### *crudConsumerObject.update() ⇒ <code>Promise</code>*
Partially Updates the object by performing a PATCH request
Only sends the changed fields as data
If no fields have changed, request is omitted and a resolving Promise is returned
After the requests resolves the initial state is updated (to allow future change detections)

**Kind**: instance method of <code>[CrudConsumerObject](#CrudConsumerObject)</code>  
<a name="CrudConsumerObject+save"></a>

### *crudConsumerObject.save() ⇒ <code>Promise</code>*
Fully Updates the object by performing a PUT request
Sends all fields as data
After the requests resolves the initial state is updated (to allow future change detections)

**Kind**: instance method of <code>[CrudConsumerObject](#CrudConsumerObject)</code>  
<a name="CrudConsumerObject+delete"></a>

### *crudConsumerObject.delete() ⇒ <code>Promise</code>*
Removes this object

**Kind**: instance method of <code>[CrudConsumerObject](#CrudConsumerObject)</code>  
<a name="CrudConsumerObject+getPath"></a>

### *crudConsumerObject.getPath() ⇒ <code>string</code> &#124; <code>false</code>*
Returns the path for this object
Path is assumed to be the primary key
If no key is found, false is returned

**Kind**: instance method of <code>[CrudConsumerObject](#CrudConsumerObject)</code>  
<a name="CrudConsumerObject+getPK"></a>

### *crudConsumerObject.getPK() ⇒ <code>\*</code> &#124; <code>false</code>*
Tries to return the primary key of this object
First tries this.pk, this.id otherwise
Result is cast to sting
If this.pk and this.id are both empty, an empty string is returned

**Kind**: instance method of <code>[CrudConsumerObject](#CrudConsumerObject)</code>  
**Returns**: <code>\*</code> &#124; <code>false</code> - Value of pk/id or false  
<a name="CrudConsumerObject+getChangedFields"></a>

### *crudConsumerObject.getChangedFields() ⇒ <code>Object</code>*
Returns an object containing the changed properties of this object
Property names in this.__consumer__.unserializableFields are ignored
Properties are compared against this.__initial_state__

**Kind**: instance method of <code>[CrudConsumerObject](#CrudConsumerObject)</code>  
