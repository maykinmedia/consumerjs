## Functions

<dl>
<dt><a href="#diff">diff(objOld, objNew)</a> ⇒ <code>Object</code></dt>
<dd><p>Returns a new object describing the changed field in objNew.
Each field is compared against objOld:</p>
<ul>
<li>Only changed fields are included.</li>
<li>Arrays are considered as a single entity (if one items differs, the entire array is considered changed).</li>
<li>Objects are checked recusively.</li>
<li>Primitives are checked by value.</li>
</ul>
</dd>
<dt><a href="#excludeUnserializableFields">excludeUnserializableFields(object, [unserializableFields])</a> ⇒ <code>Object</code></dt>
<dd><p>Returns object without keys listed in object.unserializableFields.</p>
</dd>
<dt><a href="#isObject">isObject(object)</a> ⇒ <code>boolean</code></dt>
<dd><p>Returns whether object is an object.</p>
</dd>
</dl>

<a name="diff"></a>

## diff(objOld, objNew) ⇒ <code>Object</code>
Returns a new object describing the changed field in objNew.
Each field is compared against objOld:
- Only changed fields are included.
- Arrays are considered as a single entity (if one items differs, the entire array is considered changed).
- Objects are checked recusively.
- Primitives are checked by value.

**Kind**: global function  

| Param | Type |
| --- | --- |
| objOld | <code>Object</code> | 
| objNew | <code>Object</code> | 

<a name="excludeUnserializableFields"></a>

## excludeUnserializableFields(object, [unserializableFields]) ⇒ <code>Object</code>
Returns object without keys listed in object.unserializableFields.

**Kind**: global function  

| Param | Type | Default |
| --- | --- | --- |
| object | <code>Object</code> |  | 
| [unserializableFields] | <code>Array.&lt;string&gt;</code> | <code>object.\_\_consumer\_\_.unserializableFields</code> | 

<a name="isObject"></a>

## isObject(object) ⇒ <code>boolean</code>
Returns whether object is an object.

**Kind**: global function  

| Param | Type |
| --- | --- |
| object | <code>\*</code> | 

