<a name="module_abstract-consumer-object"></a>

## abstract-consumer-object

* [abstract-consumer-object](#module_abstract-consumer-object)
    * *[.AbstractConsumerObject](#module_abstract-consumer-object.AbstractConsumerObject)*
        * *[new exports.AbstractConsumerObject(data, consumer)](#new_module_abstract-consumer-object.AbstractConsumerObject_new)*
        * *[.__consumer__](#module_abstract-consumer-object.AbstractConsumerObject+__consumer__)*
        * *[.createFromObject(data)](#module_abstract-consumer-object.AbstractConsumerObject+createFromObject)*

<a name="module_abstract-consumer-object.AbstractConsumerObject"></a>

### *abstract-consumer-object.AbstractConsumerObject*
Abstract base class for object derived from Consumer

**Kind**: static abstract class of [<code>abstract-consumer-object</code>](#module_abstract-consumer-object)  

* *[.AbstractConsumerObject](#module_abstract-consumer-object.AbstractConsumerObject)*
    * *[new exports.AbstractConsumerObject(data, consumer)](#new_module_abstract-consumer-object.AbstractConsumerObject_new)*
    * *[.__consumer__](#module_abstract-consumer-object.AbstractConsumerObject+__consumer__)*
    * *[.createFromObject(data)](#module_abstract-consumer-object.AbstractConsumerObject+createFromObject)*

<a name="new_module_abstract-consumer-object.AbstractConsumerObject_new"></a>

#### *new exports.AbstractConsumerObject(data, consumer)*
Creates a new object.


| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Data to parse. |
| consumer | <code>Consumer</code> | Consumer instance for this object. |

<a name="module_abstract-consumer-object.AbstractConsumerObject+__consumer__"></a>

#### *abstractConsumerObject.\_\_consumer\_\_*
{AbstractConsumer} Reference to consumer instantiating this object.

**Kind**: instance property of [<code>AbstractConsumerObject</code>](#module_abstract-consumer-object.AbstractConsumerObject)  
<a name="module_abstract-consumer-object.AbstractConsumerObject+createFromObject"></a>

#### *abstractConsumerObject.createFromObject(data)*
Populates object with data consumed in data.

**Kind**: instance method of [<code>AbstractConsumerObject</code>](#module_abstract-consumer-object.AbstractConsumerObject)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Data to parse. |

