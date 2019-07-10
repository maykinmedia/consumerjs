<a name="module_abstract-consumer"></a>

## abstract-consumer

* [abstract-consumer](#module_abstract-consumer)
    * *[.AbstractConsumer](#module_abstract-consumer.AbstractConsumer)*
        * *[new exports.AbstractConsumer(endpoint, objectClass, [options])](#new_module_abstract-consumer.AbstractConsumer_new)*
        * *[.contentType](#module_abstract-consumer.AbstractConsumer+contentType)*
        * *[.csrfProtection](#module_abstract-consumer.AbstractConsumer+csrfProtection)*
        * *[.csrfCookie](#module_abstract-consumer.AbstractConsumer+csrfCookie)*
        * *[.csrfHeader](#module_abstract-consumer.AbstractConsumer+csrfHeader)*
        * *[.defaultHeaders](#module_abstract-consumer.AbstractConsumer+defaultHeaders)*
        * *[.defaultParameters](#module_abstract-consumer.AbstractConsumer+defaultParameters)*
        * *[.endpoint](#module_abstract-consumer.AbstractConsumer+endpoint)*
        * *[.objectClass](#module_abstract-consumer.AbstractConsumer+objectClass)*
        * *[.listClass](#module_abstract-consumer.AbstractConsumer+listClass)*
        * *[.parserDataPath](#module_abstract-consumer.AbstractConsumer+parserDataPath)*
        * *[.unserializableFields](#module_abstract-consumer.AbstractConsumer+unserializableFields)*
        * *[.client](#module_abstract-consumer.AbstractConsumer+client)*
        * *[.delete(path, query)](#module_abstract-consumer.AbstractConsumer+delete) ⇒ <code>Promise</code>*
        * *[.get(path, query)](#module_abstract-consumer.AbstractConsumer+get) ⇒ <code>Promise</code>*
        * *[.patch(path, data)](#module_abstract-consumer.AbstractConsumer+patch) ⇒ <code>Promise</code>*
        * *[.post(path, data)](#module_abstract-consumer.AbstractConsumer+post) ⇒ <code>Promise</code>*
        * *[.put(path, data)](#module_abstract-consumer.AbstractConsumer+put) ⇒ <code>Promise</code>*
        * *[.request(method, [path], [data])](#module_abstract-consumer.AbstractConsumer+request) ⇒ <code>Promise</code>*
        * *[.getCookie(name)](#module_abstract-consumer.AbstractConsumer+getCookie) ⇒ <code>string</code>*
        * *[.addHeader(name, value)](#module_abstract-consumer.AbstractConsumer+addHeader)*
        * *[.serialize(data)](#module_abstract-consumer.AbstractConsumer+serialize) ⇒ <code>\*</code>*
        * *[.requestSuccess(response, method, path, data)](#module_abstract-consumer.AbstractConsumer+requestSuccess) ⇒ <code>AbstractConsumerObject</code> \| <code>AbstractList</code>*
        * *[.parse(json, method, path, data)](#module_abstract-consumer.AbstractConsumer+parse) ⇒ <code>AbstractConsumerObject</code> \| <code>AbstractList</code> \| <code>undefined</code>*
        * *[.parseList(array, responseData, method, path, data)](#module_abstract-consumer.AbstractConsumer+parseList) ⇒ <code>AbstractList</code>*
        * *[.parseScalar(object, responseData, method, path, data)](#module_abstract-consumer.AbstractConsumer+parseScalar) ⇒ <code>AbstractConsumerObject</code>*
        * *[.parseEntity(object, responseData, method, path, data)](#module_abstract-consumer.AbstractConsumer+parseEntity) ⇒ <code>AbstractConsumerObject</code>*
        * *[.requestFailed(data)](#module_abstract-consumer.AbstractConsumer+requestFailed) ⇒ <code>HttpResponseMessage</code>*

<a name="module_abstract-consumer.AbstractConsumer"></a>

### *abstract-consumer.AbstractConsumer*
Abstract base class for all consumers.

**Kind**: static abstract class of [<code>abstract-consumer</code>](#module_abstract-consumer)  

* *[.AbstractConsumer](#module_abstract-consumer.AbstractConsumer)*
    * *[new exports.AbstractConsumer(endpoint, objectClass, [options])](#new_module_abstract-consumer.AbstractConsumer_new)*
    * *[.contentType](#module_abstract-consumer.AbstractConsumer+contentType)*
    * *[.csrfProtection](#module_abstract-consumer.AbstractConsumer+csrfProtection)*
    * *[.csrfCookie](#module_abstract-consumer.AbstractConsumer+csrfCookie)*
    * *[.csrfHeader](#module_abstract-consumer.AbstractConsumer+csrfHeader)*
    * *[.defaultHeaders](#module_abstract-consumer.AbstractConsumer+defaultHeaders)*
    * *[.defaultParameters](#module_abstract-consumer.AbstractConsumer+defaultParameters)*
    * *[.endpoint](#module_abstract-consumer.AbstractConsumer+endpoint)*
    * *[.objectClass](#module_abstract-consumer.AbstractConsumer+objectClass)*
    * *[.listClass](#module_abstract-consumer.AbstractConsumer+listClass)*
    * *[.parserDataPath](#module_abstract-consumer.AbstractConsumer+parserDataPath)*
    * *[.unserializableFields](#module_abstract-consumer.AbstractConsumer+unserializableFields)*
    * *[.client](#module_abstract-consumer.AbstractConsumer+client)*
    * *[.delete(path, query)](#module_abstract-consumer.AbstractConsumer+delete) ⇒ <code>Promise</code>*
    * *[.get(path, query)](#module_abstract-consumer.AbstractConsumer+get) ⇒ <code>Promise</code>*
    * *[.patch(path, data)](#module_abstract-consumer.AbstractConsumer+patch) ⇒ <code>Promise</code>*
    * *[.post(path, data)](#module_abstract-consumer.AbstractConsumer+post) ⇒ <code>Promise</code>*
    * *[.put(path, data)](#module_abstract-consumer.AbstractConsumer+put) ⇒ <code>Promise</code>*
    * *[.request(method, [path], [data])](#module_abstract-consumer.AbstractConsumer+request) ⇒ <code>Promise</code>*
    * *[.getCookie(name)](#module_abstract-consumer.AbstractConsumer+getCookie) ⇒ <code>string</code>*
    * *[.addHeader(name, value)](#module_abstract-consumer.AbstractConsumer+addHeader)*
    * *[.serialize(data)](#module_abstract-consumer.AbstractConsumer+serialize) ⇒ <code>\*</code>*
    * *[.requestSuccess(response, method, path, data)](#module_abstract-consumer.AbstractConsumer+requestSuccess) ⇒ <code>AbstractConsumerObject</code> \| <code>AbstractList</code>*
    * *[.parse(json, method, path, data)](#module_abstract-consumer.AbstractConsumer+parse) ⇒ <code>AbstractConsumerObject</code> \| <code>AbstractList</code> \| <code>undefined</code>*
    * *[.parseList(array, responseData, method, path, data)](#module_abstract-consumer.AbstractConsumer+parseList) ⇒ <code>AbstractList</code>*
    * *[.parseScalar(object, responseData, method, path, data)](#module_abstract-consumer.AbstractConsumer+parseScalar) ⇒ <code>AbstractConsumerObject</code>*
    * *[.parseEntity(object, responseData, method, path, data)](#module_abstract-consumer.AbstractConsumer+parseEntity) ⇒ <code>AbstractConsumerObject</code>*
    * *[.requestFailed(data)](#module_abstract-consumer.AbstractConsumer+requestFailed) ⇒ <code>HttpResponseMessage</code>*

<a name="new_module_abstract-consumer.AbstractConsumer_new"></a>

#### *new exports.AbstractConsumer(endpoint, objectClass, [options])*
Configures Consumer instance.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| endpoint | <code>string</code> |  | Base endpoint for this API. |
| objectClass | <code>AbstractConsumerObject</code> |  | Class to cast results to. |
| [options] | <code>Object</code> | <code></code> | Additional configuration. |

<a name="module_abstract-consumer.AbstractConsumer+contentType"></a>

#### *abstractConsumer.contentType*
{string} The value of the Content-Type header.

**Kind**: instance property of [<code>AbstractConsumer</code>](#module_abstract-consumer.AbstractConsumer)  
<a name="module_abstract-consumer.AbstractConsumer+csrfProtection"></a>

#### *abstractConsumer.csrfProtection*
{boolean} Wheter CSRF prtection is active.

**Kind**: instance property of [<code>AbstractConsumer</code>](#module_abstract-consumer.AbstractConsumer)  
<a name="module_abstract-consumer.AbstractConsumer+csrfCookie"></a>

#### *abstractConsumer.csrfCookie*
{string} The name for the CSRF cookie.

**Kind**: instance property of [<code>AbstractConsumer</code>](#module_abstract-consumer.AbstractConsumer)  
<a name="module_abstract-consumer.AbstractConsumer+csrfHeader"></a>

#### *abstractConsumer.csrfHeader*
{string} The name for the CSRF header.

**Kind**: instance property of [<code>AbstractConsumer</code>](#module_abstract-consumer.AbstractConsumer)  
<a name="module_abstract-consumer.AbstractConsumer+defaultHeaders"></a>

#### *abstractConsumer.defaultHeaders*
{Object} An optional object holding key value pairs of additional headers.

**Kind**: instance property of [<code>AbstractConsumer</code>](#module_abstract-consumer.AbstractConsumer)  
<a name="module_abstract-consumer.AbstractConsumer+defaultParameters"></a>

#### *abstractConsumer.defaultParameters*
{Object} An optional object holding key value pairs of additional query parameters.

**Kind**: instance property of [<code>AbstractConsumer</code>](#module_abstract-consumer.AbstractConsumer)  
<a name="module_abstract-consumer.AbstractConsumer+endpoint"></a>

#### *abstractConsumer.endpoint*
{string} The base API endpoint prefixed for all requests.

**Kind**: instance property of [<code>AbstractConsumer</code>](#module_abstract-consumer.AbstractConsumer)  
<a name="module_abstract-consumer.AbstractConsumer+objectClass"></a>

#### *abstractConsumer.objectClass*
{Function} The class to casts objects to.

**Kind**: instance property of [<code>AbstractConsumer</code>](#module_abstract-consumer.AbstractConsumer)  
<a name="module_abstract-consumer.AbstractConsumer+listClass"></a>

#### *abstractConsumer.listClass*
{Function} The class to use for lists.

**Kind**: instance property of [<code>AbstractConsumer</code>](#module_abstract-consumer.AbstractConsumer)  
<a name="module_abstract-consumer.AbstractConsumer+parserDataPath"></a>

#### *abstractConsumer.parserDataPath*
{string} An optional dot separated path to the received objectClass' data.

**Kind**: instance property of [<code>AbstractConsumer</code>](#module_abstract-consumer.AbstractConsumer)  
<a name="module_abstract-consumer.AbstractConsumer+unserializableFields"></a>

#### *abstractConsumer.unserializableFields*
{string[]} Keys on this.objectClass that should not be passed to the API.

**Kind**: instance property of [<code>AbstractConsumer</code>](#module_abstract-consumer.AbstractConsumer)  
<a name="module_abstract-consumer.AbstractConsumer+client"></a>

#### *abstractConsumer.client*
{AbstractHTTPClient} The HttpClient instance to work with.

**Kind**: instance property of [<code>AbstractConsumer</code>](#module_abstract-consumer.AbstractConsumer)  
<a name="module_abstract-consumer.AbstractConsumer+delete"></a>

#### *abstractConsumer.delete(path, query) ⇒ <code>Promise</code>*
Performs a DELETE request.

**Kind**: instance method of [<code>AbstractConsumer</code>](#module_abstract-consumer.AbstractConsumer)  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | Path on the endpoint. |
| query | <code>Object</code> | Query parameters. |

<a name="module_abstract-consumer.AbstractConsumer+get"></a>

#### *abstractConsumer.get(path, query) ⇒ <code>Promise</code>*
Performs a GET request.

**Kind**: instance method of [<code>AbstractConsumer</code>](#module_abstract-consumer.AbstractConsumer)  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | Path on the endpoint. |
| query | <code>Object</code> | Query parameters. |

<a name="module_abstract-consumer.AbstractConsumer+patch"></a>

#### *abstractConsumer.patch(path, data) ⇒ <code>Promise</code>*
Performs a PATCH request.

**Kind**: instance method of [<code>AbstractConsumer</code>](#module_abstract-consumer.AbstractConsumer)  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | Path on the endpoint. |
| data | <code>Object</code> | Data payload. |

<a name="module_abstract-consumer.AbstractConsumer+post"></a>

#### *abstractConsumer.post(path, data) ⇒ <code>Promise</code>*
Performs a POST request.

**Kind**: instance method of [<code>AbstractConsumer</code>](#module_abstract-consumer.AbstractConsumer)  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | Path on the endpoint. |
| data | <code>Object</code> | Data payload. |

<a name="module_abstract-consumer.AbstractConsumer+put"></a>

#### *abstractConsumer.put(path, data) ⇒ <code>Promise</code>*
Performs a PUT request.

**Kind**: instance method of [<code>AbstractConsumer</code>](#module_abstract-consumer.AbstractConsumer)  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | Path on the endpoint. |
| data | <code>Object</code> | Data payload. |

<a name="module_abstract-consumer.AbstractConsumer+request"></a>

#### *abstractConsumer.request(method, [path], [data]) ⇒ <code>Promise</code>*
Performs a request.

**Kind**: instance method of [<code>AbstractConsumer</code>](#module_abstract-consumer.AbstractConsumer)  

| Param | Type | Description |
| --- | --- | --- |
| method | <code>string</code> | The method to use. |
| [path] | <code>string</code> | Path on the endpoint, may contain query parameters for backwards compatibility. |
| [data] | <code>Object</code> | Data payload. |

<a name="module_abstract-consumer.AbstractConsumer+getCookie"></a>

#### *abstractConsumer.getCookie(name) ⇒ <code>string</code>*
Wrapper for Cookie.get.

**Kind**: instance method of [<code>AbstractConsumer</code>](#module_abstract-consumer.AbstractConsumer)  

| Param | Type |
| --- | --- |
| name | <code>string</code> | 

<a name="module_abstract-consumer.AbstractConsumer+addHeader"></a>

#### *abstractConsumer.addHeader(name, value)*
Adds a header to all future request.

**Kind**: instance method of [<code>AbstractConsumer</code>](#module_abstract-consumer.AbstractConsumer)  

| Param | Type |
| --- | --- |
| name | <code>string</code> | 
| value | <code>string</code> | 

<a name="module_abstract-consumer.AbstractConsumer+serialize"></a>

#### *abstractConsumer.serialize(data) ⇒ <code>\*</code>*
Serializes data.
Returns data if data is not an object.
Excludes fields marked in this.unserializableFields.

**Kind**: instance method of [<code>AbstractConsumer</code>](#module_abstract-consumer.AbstractConsumer)  

| Param | Type |
| --- | --- |
| data | <code>AbstractConsumerObject</code> \| <code>\*</code> | 

<a name="module_abstract-consumer.AbstractConsumer+requestSuccess"></a>

#### *abstractConsumer.requestSuccess(response, method, path, data) ⇒ <code>AbstractConsumerObject</code> \| <code>AbstractList</code>*
Callback for request.
Gets called if request resolve successfully.

**Kind**: instance method of [<code>AbstractConsumer</code>](#module_abstract-consumer.AbstractConsumer)  

| Param | Type | Description |
| --- | --- | --- |
| response | <code>HttpResponseMessage</code> |  |
| method | <code>string</code> | The request method. |
| path | <code>string</code> | The request path. |
| data | <code>Object</code> | The request data payload. |

<a name="module_abstract-consumer.AbstractConsumer+parse"></a>

#### *abstractConsumer.parse(json, method, path, data) ⇒ <code>AbstractConsumerObject</code> \| <code>AbstractList</code> \| <code>undefined</code>*
Parses JSON string to a single or list of AbstractConsumerObject instance(s).

**Kind**: instance method of [<code>AbstractConsumer</code>](#module_abstract-consumer.AbstractConsumer)  

| Param | Type | Description |
| --- | --- | --- |
| json | <code>string</code> | The response json. |
| method | <code>string</code> | The request method. |
| path | <code>string</code> | The request path. |
| data | <code>Object</code> | The request data payload. |

<a name="module_abstract-consumer.AbstractConsumer+parseList"></a>

#### *abstractConsumer.parseList(array, responseData, method, path, data) ⇒ <code>AbstractList</code>*
Parses anonymous objects to a list of AbstractConsumerObjects.
Gets called when result JSON.parse is an array.

**Kind**: instance method of [<code>AbstractConsumer</code>](#module_abstract-consumer.AbstractConsumer)  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array.&lt;Object&gt;</code> |  |
| responseData | <code>Object</code> | The response data as Object. |
| method | <code>string</code> | The request method. |
| path | <code>string</code> | The request path. |
| data | <code>Object</code> | The request data payload. TODO: Cleanup |

<a name="module_abstract-consumer.AbstractConsumer+parseScalar"></a>

#### *abstractConsumer.parseScalar(object, responseData, method, path, data) ⇒ <code>AbstractConsumerObject</code>*
Parses anonymous object to a single AbstractConsumerObject.
Gets called when result JSON.parse is not an array.

**Kind**: instance method of [<code>AbstractConsumer</code>](#module_abstract-consumer.AbstractConsumer)  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> |  |
| responseData | <code>Object</code> | The response data as Object. |
| method | <code>string</code> | The request method. |
| path | <code>string</code> | The request path. |
| data | <code>Object</code> | The request data payload. TODO: Cleanup, rename |

<a name="module_abstract-consumer.AbstractConsumer+parseEntity"></a>

#### *abstractConsumer.parseEntity(object, responseData, method, path, data) ⇒ <code>AbstractConsumerObject</code>*
Parses anonymous object to a single AbstractConsumerObject.

**Kind**: instance method of [<code>AbstractConsumer</code>](#module_abstract-consumer.AbstractConsumer)  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> |  |
| responseData | <code>Object</code> | The response data as Object. |
| method | <code>string</code> | The request method. |
| path | <code>string</code> | The request path. |
| data | <code>Object</code> | The request data payload. |

<a name="module_abstract-consumer.AbstractConsumer+requestFailed"></a>

#### *abstractConsumer.requestFailed(data) ⇒ <code>HttpResponseMessage</code>*
Callback for request.
Gets called if request doesnt resolve successfully.

**Kind**: instance method of [<code>AbstractConsumer</code>](#module_abstract-consumer.AbstractConsumer)  
**Returns**: <code>HttpResponseMessage</code> - data  

| Param | Type |
| --- | --- |
| data | <code>HttpResponseMessage</code> | 

