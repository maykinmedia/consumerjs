<a name="module_abstract-list"></a>

## abstract-list

* [abstract-list](#module_abstract-list)
    * *[.AbstractList](#module_abstract-list.AbstractList)*
        * *[new exports.AbstractList(objects, consumer, responseData)](#new_module_abstract-list.AbstractList_new)*
        * *[.responseData](#module_abstract-list.AbstractList+responseData)*
        * *[.__consumer__](#module_abstract-list.AbstractList+__consumer__)*

<a name="module_abstract-list.AbstractList"></a>

### *abstract-list.AbstractList*
Abstract base class for list of consumer objects.

**Kind**: static abstract class of [<code>abstract-list</code>](#module_abstract-list)  

* *[.AbstractList](#module_abstract-list.AbstractList)*
    * *[new exports.AbstractList(objects, consumer, responseData)](#new_module_abstract-list.AbstractList_new)*
    * *[.responseData](#module_abstract-list.AbstractList+responseData)*
    * *[.__consumer__](#module_abstract-list.AbstractList+__consumer__)*

<a name="new_module_abstract-list.AbstractList_new"></a>

#### *new exports.AbstractList(objects, consumer, responseData)*
Creates a new object.


| Param | Type | Description |
| --- | --- | --- |
| objects | <code>Array.&lt;AbstractConsumerObject&gt;</code> | Items to populate list with. |
| consumer | <code>Consumer</code> | Consumer instance for this object. |
| responseData | <code>Object</code> | The response data as Object. |

<a name="module_abstract-list.AbstractList+responseData"></a>

#### *abstractList.responseData*
{Object} The response data as Object.

**Kind**: instance property of [<code>AbstractList</code>](#module_abstract-list.AbstractList)  
<a name="module_abstract-list.AbstractList+__consumer__"></a>

#### *abstractList.\_\_consumer\_\_*
{AbstractConsumer} Reference to consumer instantiating this object.

**Kind**: instance property of [<code>AbstractList</code>](#module_abstract-list.AbstractList)  
