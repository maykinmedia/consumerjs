<a name="module_utils"></a>

## utils

* [utils](#module_utils)
    * [.diff(objOld, objNew)](#module_utils.diff) ⇒ <code>Object</code>
    * [.excludeUnserializableFields(object, [unserializableFields])](#module_utils.excludeUnserializableFields) ⇒ <code>Object</code>
    * [.isObject(object)](#module_utils.isObject) ⇒ <code>boolean</code>

<a name="module_utils.diff"></a>

### utils.diff(objOld, objNew) ⇒ <code>Object</code>
Returns a new object describing the changed field in objNew.
Each field is compared against objOld:
- Only changed fields are included.
- Arrays are considered as a single entity (if one items differs, the entire array is considered changed).
- Objects are checked recusively.
- Primitives are checked by value.

**Kind**: static method of [<code>utils</code>](#module_utils)  

| Param | Type |
| --- | --- |
| objOld | <code>Object</code> | 
| objNew | <code>Object</code> | 

<a name="module_utils.excludeUnserializableFields"></a>

### utils.excludeUnserializableFields(object, [unserializableFields]) ⇒ <code>Object</code>
Returns object without keys listed in object.unserializableFields.

**Kind**: static method of [<code>utils</code>](#module_utils)  

| Param | Type | Default |
| --- | --- | --- |
| object | <code>Object</code> |  | 
| [unserializableFields] | <code>Array.&lt;string&gt;</code> | <code>object.\_\_consumer\_\_.unserializableFields</code> | 

<a name="module_utils.isObject"></a>

### utils.isObject(object) ⇒ <code>boolean</code>
Returns whether object is an object.

**Kind**: static method of [<code>utils</code>](#module_utils)  

| Param | Type |
| --- | --- |
| object | <code>\*</code> | 

