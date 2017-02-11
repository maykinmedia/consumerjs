## Classes

<dl>
<dt><a href="#AbstractConsumer">AbstractConsumer</a></dt>
<dd><p>Abstract base class for all consumers</p>
</dd>
<dt><a href="#AbstractConsumer">AbstractConsumer</a></dt>
<dd></dd>
</dl>

<a name="AbstractConsumer"></a>

## *AbstractConsumer*
Abstract base class for all consumers

**Kind**: global abstract class  

* *[AbstractConsumer](#AbstractConsumer)*
    * *[new AbstractConsumer(endpoint, objectClass, [options])](#new_AbstractConsumer_new)*
    * *[.client](#AbstractConsumer+client)*
    * *[.contentType](#AbstractConsumer+contentType)*
    * *[.csrfCookie](#AbstractConsumer+csrfCookie)*
    * *[.csrfHeader](#AbstractConsumer+csrfHeader)*
    * *[.defaultHeaders](#AbstractConsumer+defaultHeaders)*
    * *[.defaultParameters](#AbstractConsumer+defaultParameters)*
    * *[.endpoint](#AbstractConsumer+endpoint)*
    * *[.objectClass](#AbstractConsumer+objectClass)*
    * *[.parserDataPath](#AbstractConsumer+parserDataPath)*
    * *[.unserializableFields](#AbstractConsumer+unserializableFields)*
    * *[.delete(path, query)](#AbstractConsumer+delete) ⇒ <code>Promise</code>*
    * *[.get(path, query)](#AbstractConsumer+get) ⇒ <code>Promise</code>*
    * *[.patch(path, data)](#AbstractConsumer+patch) ⇒ <code>Promise</code>*
    * *[.post(path, data)](#AbstractConsumer+post) ⇒ <code>Promise</code>*
    * *[.put(path, data)](#AbstractConsumer+put) ⇒ <code>Promise</code>*
    * *[.request(method, path, data)](#AbstractConsumer+request) ⇒ <code>Promise</code>*
    * *[.isSafeMethod()](#AbstractConsumer+isSafeMethod) ⇒ <code>boolean</code>*
    * *[.addCsrfToken()](#AbstractConsumer+addCsrfToken)*
    * *[.getCookie(name)](#AbstractConsumer+getCookie) ⇒ <code>string</code>*
    * *[.addHeader(name, value)](#AbstractConsumer+addHeader)*
    * *[.serialize(data)](#AbstractConsumer+serialize) ⇒ <code>\*</code>*
    * *[.requestSuccess(data)](#AbstractConsumer+requestSuccess) ⇒ <code>AbstractConsumerObject</code> &#124; <code>Array.&lt;AbstractConsumerObject&gt;</code>*
    * *[.parse(data)](#AbstractConsumer+parse) ⇒ <code>AbstractConsumerObject</code> &#124; <code>Array.&lt;AbstractConsumerObject&gt;</code> &#124; <code>undefined</code>*
    * *[.parseList(array)](#AbstractConsumer+parseList) ⇒ <code>Array.&lt;AbstractConsumerObject&gt;</code>*
    * *[.parseScalar(object)](#AbstractConsumer+parseScalar) ⇒ <code>AbstractConsumerObject</code>*
    * *[.parseEntity(object)](#AbstractConsumer+parseEntity) ⇒ <code>AbstractConsumerObject</code>*
    * *[.requestFailed(data)](#AbstractConsumer+requestFailed) ⇒ <code>HttpResponseMessage</code>*

<a name="new_AbstractConsumer_new"></a>

### *new AbstractConsumer(endpoint, objectClass, [options])*
Configures Consumer instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| endpoint | <code>string</code> |  | Base endpoint for this API |
| objectClass | <code>AbstractConsumerObject</code> |  | Class to cast results to |
| [options] | <code>Object</code> | <code></code> | Additional configuration |

<a name="AbstractConsumer+client"></a>

### *abstractConsumer.client*
The Aurelia HttpClient instance to work with

**Kind**: instance property of <code>[AbstractConsumer](#AbstractConsumer)</code>  
<a name="AbstractConsumer+contentType"></a>

### *abstractConsumer.contentType*
The value of the Content-Type header

**Kind**: instance property of <code>[AbstractConsumer](#AbstractConsumer)</code>  
<a name="AbstractConsumer+csrfCookie"></a>

### *abstractConsumer.csrfCookie*
The name for the CSRF cookie

**Kind**: instance property of <code>[AbstractConsumer](#AbstractConsumer)</code>  
<a name="AbstractConsumer+csrfHeader"></a>

### *abstractConsumer.csrfHeader*
The name for the CSRF header

**Kind**: instance property of <code>[AbstractConsumer](#AbstractConsumer)</code>  
<a name="AbstractConsumer+defaultHeaders"></a>

### *abstractConsumer.defaultHeaders*
An optional object holding key value pairs of additional headers

**Kind**: instance property of <code>[AbstractConsumer](#AbstractConsumer)</code>  
<a name="AbstractConsumer+defaultParameters"></a>

### *abstractConsumer.defaultParameters*
An optional object holding key value pairs of additional query parameters

**Kind**: instance property of <code>[AbstractConsumer](#AbstractConsumer)</code>  
<a name="AbstractConsumer+endpoint"></a>

### *abstractConsumer.endpoint*
The base API endpoint prefixed for all requests

**Kind**: instance property of <code>[AbstractConsumer](#AbstractConsumer)</code>  
<a name="AbstractConsumer+objectClass"></a>

### *abstractConsumer.objectClass*
The class to casts objects to

**Kind**: instance property of <code>[AbstractConsumer](#AbstractConsumer)</code>  
<a name="AbstractConsumer+parserDataPath"></a>

### *abstractConsumer.parserDataPath*
An optional dot separated path to the received objectClass' data

**Kind**: instance property of <code>[AbstractConsumer](#AbstractConsumer)</code>  
<a name="AbstractConsumer+unserializableFields"></a>

### *abstractConsumer.unserializableFields*
Keys on this.objectClass that should not be passed to the API

**Kind**: instance property of <code>[AbstractConsumer](#AbstractConsumer)</code>  
<a name="AbstractConsumer+delete"></a>

### *abstractConsumer.delete(path, query) ⇒ <code>Promise</code>*
Performs a DELETE request

**Kind**: instance method of <code>[AbstractConsumer](#AbstractConsumer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | Path on the endpoint |
| query | <code>Object</code> | Query parameters |

<a name="AbstractConsumer+get"></a>

### *abstractConsumer.get(path, query) ⇒ <code>Promise</code>*
Performs a GET request

**Kind**: instance method of <code>[AbstractConsumer](#AbstractConsumer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | Path on the endpoint |
| query | <code>Object</code> | Query parameters |

<a name="AbstractConsumer+patch"></a>

### *abstractConsumer.patch(path, data) ⇒ <code>Promise</code>*
Performs a PATCH request

**Kind**: instance method of <code>[AbstractConsumer](#AbstractConsumer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | Path on the endpoint |
| data | <code>Object</code> | Data payload |

<a name="AbstractConsumer+post"></a>

### *abstractConsumer.post(path, data) ⇒ <code>Promise</code>*
Performs a POST request

**Kind**: instance method of <code>[AbstractConsumer](#AbstractConsumer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | Path on the endpoint |
| data | <code>Object</code> | Data payload |

<a name="AbstractConsumer+put"></a>

### *abstractConsumer.put(path, data) ⇒ <code>Promise</code>*
Performs a PUT request

**Kind**: instance method of <code>[AbstractConsumer](#AbstractConsumer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | Path on the endpoint |
| data | <code>Object</code> | Data payload |

<a name="AbstractConsumer+request"></a>

### *abstractConsumer.request(method, path, data) ⇒ <code>Promise</code>*
Performs a request

**Kind**: instance method of <code>[AbstractConsumer](#AbstractConsumer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| method | <code>string</code> | The method to use |
| path | <code>string</code> | Path on the endpoint |
| data | <code>Object</code> | Data payload |

<a name="AbstractConsumer+isSafeMethod"></a>

### *abstractConsumer.isSafeMethod() ⇒ <code>boolean</code>*
Returns whether the request is safe (should not mutate any data)

**Kind**: instance method of <code>[AbstractConsumer](#AbstractConsumer)</code>  
<a name="AbstractConsumer+addCsrfToken"></a>

### *abstractConsumer.addCsrfToken()*
Looks for cookie this.csrfCookie and passes it's value to this.csrfHeader

**Kind**: instance method of <code>[AbstractConsumer](#AbstractConsumer)</code>  
<a name="AbstractConsumer+getCookie"></a>

### *abstractConsumer.getCookie(name) ⇒ <code>string</code>*
Wrapper for Cookie.get

**Kind**: instance method of <code>[AbstractConsumer](#AbstractConsumer)</code>  

| Param | Type |
| --- | --- |
| name | <code>string</code> | 

<a name="AbstractConsumer+addHeader"></a>

### *abstractConsumer.addHeader(name, value)*
Adds a header to all future request

**Kind**: instance method of <code>[AbstractConsumer](#AbstractConsumer)</code>  

| Param | Type |
| --- | --- |
| name | <code>string</code> | 
| value | <code>string</code> | 

<a name="AbstractConsumer+serialize"></a>

### *abstractConsumer.serialize(data) ⇒ <code>\*</code>*
Serializes data
Returns data if data is not an object
Excludes fields marked in this.unserializableFields

**Kind**: instance method of <code>[AbstractConsumer](#AbstractConsumer)</code>  

| Param | Type |
| --- | --- |
| data | <code>AbstractConsumerObject</code> &#124; <code>\*</code> | 

<a name="AbstractConsumer+requestSuccess"></a>

### *abstractConsumer.requestSuccess(data) ⇒ <code>AbstractConsumerObject</code> &#124; <code>Array.&lt;AbstractConsumerObject&gt;</code>*
Callback for request
Gets called if request resolve successfully

**Kind**: instance method of <code>[AbstractConsumer](#AbstractConsumer)</code>  

| Param | Type |
| --- | --- |
| data | <code>HttpResponseMessage</code> | 

<a name="AbstractConsumer+parse"></a>

### *abstractConsumer.parse(data) ⇒ <code>AbstractConsumerObject</code> &#124; <code>Array.&lt;AbstractConsumerObject&gt;</code> &#124; <code>undefined</code>*
Parses JSON string to a single or list of AbstractConsumerObject instance(s)

**Kind**: instance method of <code>[AbstractConsumer](#AbstractConsumer)</code>  

| Param | Type |
| --- | --- |
| data | <code>string</code> | 

<a name="AbstractConsumer+parseList"></a>

### *abstractConsumer.parseList(array) ⇒ <code>Array.&lt;AbstractConsumerObject&gt;</code>*
Parses anonymous objects to a list of AbstractConsumerObjects
Gets called when result JSON.parse is an array

**Kind**: instance method of <code>[AbstractConsumer](#AbstractConsumer)</code>  

| Param | Type |
| --- | --- |
| array | <code>Array.&lt;Object&gt;</code> | 

<a name="AbstractConsumer+parseScalar"></a>

### *abstractConsumer.parseScalar(object) ⇒ <code>AbstractConsumerObject</code>*
Parses anonymous object to a single AbstractConsumerObject
Gets called when result JSON.parse is not an array

**Kind**: instance method of <code>[AbstractConsumer](#AbstractConsumer)</code>  

| Param | Type |
| --- | --- |
| object | <code>Object</code> | 

<a name="AbstractConsumer+parseEntity"></a>

### *abstractConsumer.parseEntity(object) ⇒ <code>AbstractConsumerObject</code>*
Parses anonymous object to a single AbstractConsumerObject

**Kind**: instance method of <code>[AbstractConsumer](#AbstractConsumer)</code>  

| Param | Type |
| --- | --- |
| object | <code>Object</code> | 

<a name="AbstractConsumer+requestFailed"></a>

### *abstractConsumer.requestFailed(data) ⇒ <code>HttpResponseMessage</code>*
Callback for request
Gets called if request doesnt resolve successfully

**Kind**: instance method of <code>[AbstractConsumer](#AbstractConsumer)</code>  
**Returns**: <code>HttpResponseMessage</code> - data  

| Param | Type |
| --- | --- |
| data | <code>HttpResponseMessage</code> | 

<a name="AbstractConsumer"></a>

## AbstractConsumer
**Kind**: global class  

* [AbstractConsumer](#AbstractConsumer)
    * *[new AbstractConsumer(endpoint, objectClass, [options])](#new_AbstractConsumer_new)*
    * *[.client](#AbstractConsumer+client)*
    * *[.contentType](#AbstractConsumer+contentType)*
    * *[.csrfCookie](#AbstractConsumer+csrfCookie)*
    * *[.csrfHeader](#AbstractConsumer+csrfHeader)*
    * *[.defaultHeaders](#AbstractConsumer+defaultHeaders)*
    * *[.defaultParameters](#AbstractConsumer+defaultParameters)*
    * *[.endpoint](#AbstractConsumer+endpoint)*
    * *[.objectClass](#AbstractConsumer+objectClass)*
    * *[.parserDataPath](#AbstractConsumer+parserDataPath)*
    * *[.unserializableFields](#AbstractConsumer+unserializableFields)*
    * *[.delete(path, query)](#AbstractConsumer+delete) ⇒ <code>Promise</code>*
    * *[.get(path, query)](#AbstractConsumer+get) ⇒ <code>Promise</code>*
    * *[.patch(path, data)](#AbstractConsumer+patch) ⇒ <code>Promise</code>*
    * *[.post(path, data)](#AbstractConsumer+post) ⇒ <code>Promise</code>*
    * *[.put(path, data)](#AbstractConsumer+put) ⇒ <code>Promise</code>*
    * *[.request(method, path, data)](#AbstractConsumer+request) ⇒ <code>Promise</code>*
    * *[.isSafeMethod()](#AbstractConsumer+isSafeMethod) ⇒ <code>boolean</code>*
    * *[.addCsrfToken()](#AbstractConsumer+addCsrfToken)*
    * *[.getCookie(name)](#AbstractConsumer+getCookie) ⇒ <code>string</code>*
    * *[.addHeader(name, value)](#AbstractConsumer+addHeader)*
    * *[.serialize(data)](#AbstractConsumer+serialize) ⇒ <code>\*</code>*
    * *[.requestSuccess(data)](#AbstractConsumer+requestSuccess) ⇒ <code>AbstractConsumerObject</code> &#124; <code>Array.&lt;AbstractConsumerObject&gt;</code>*
    * *[.parse(data)](#AbstractConsumer+parse) ⇒ <code>AbstractConsumerObject</code> &#124; <code>Array.&lt;AbstractConsumerObject&gt;</code> &#124; <code>undefined</code>*
    * *[.parseList(array)](#AbstractConsumer+parseList) ⇒ <code>Array.&lt;AbstractConsumerObject&gt;</code>*
    * *[.parseScalar(object)](#AbstractConsumer+parseScalar) ⇒ <code>AbstractConsumerObject</code>*
    * *[.parseEntity(object)](#AbstractConsumer+parseEntity) ⇒ <code>AbstractConsumerObject</code>*
    * *[.requestFailed(data)](#AbstractConsumer+requestFailed) ⇒ <code>HttpResponseMessage</code>*

<a name="new_AbstractConsumer_new"></a>

### *new AbstractConsumer(endpoint, objectClass, [options])*
Configures Consumer instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| endpoint | <code>string</code> |  | Base endpoint for this API |
| objectClass | <code>AbstractConsumerObject</code> |  | Class to cast results to |
| [options] | <code>Object</code> | <code></code> | Additional configuration |

<a name="AbstractConsumer+client"></a>

### *abstractConsumer.client*
The Aurelia HttpClient instance to work with

**Kind**: instance property of <code>[AbstractConsumer](#AbstractConsumer)</code>  
<a name="AbstractConsumer+contentType"></a>

### *abstractConsumer.contentType*
The value of the Content-Type header

**Kind**: instance property of <code>[AbstractConsumer](#AbstractConsumer)</code>  
<a name="AbstractConsumer+csrfCookie"></a>

### *abstractConsumer.csrfCookie*
The name for the CSRF cookie

**Kind**: instance property of <code>[AbstractConsumer](#AbstractConsumer)</code>  
<a name="AbstractConsumer+csrfHeader"></a>

### *abstractConsumer.csrfHeader*
The name for the CSRF header

**Kind**: instance property of <code>[AbstractConsumer](#AbstractConsumer)</code>  
<a name="AbstractConsumer+defaultHeaders"></a>

### *abstractConsumer.defaultHeaders*
An optional object holding key value pairs of additional headers

**Kind**: instance property of <code>[AbstractConsumer](#AbstractConsumer)</code>  
<a name="AbstractConsumer+defaultParameters"></a>

### *abstractConsumer.defaultParameters*
An optional object holding key value pairs of additional query parameters

**Kind**: instance property of <code>[AbstractConsumer](#AbstractConsumer)</code>  
<a name="AbstractConsumer+endpoint"></a>

### *abstractConsumer.endpoint*
The base API endpoint prefixed for all requests

**Kind**: instance property of <code>[AbstractConsumer](#AbstractConsumer)</code>  
<a name="AbstractConsumer+objectClass"></a>

### *abstractConsumer.objectClass*
The class to casts objects to

**Kind**: instance property of <code>[AbstractConsumer](#AbstractConsumer)</code>  
<a name="AbstractConsumer+parserDataPath"></a>

### *abstractConsumer.parserDataPath*
An optional dot separated path to the received objectClass' data

**Kind**: instance property of <code>[AbstractConsumer](#AbstractConsumer)</code>  
<a name="AbstractConsumer+unserializableFields"></a>

### *abstractConsumer.unserializableFields*
Keys on this.objectClass that should not be passed to the API

**Kind**: instance property of <code>[AbstractConsumer](#AbstractConsumer)</code>  
<a name="AbstractConsumer+delete"></a>

### *abstractConsumer.delete(path, query) ⇒ <code>Promise</code>*
Performs a DELETE request

**Kind**: instance method of <code>[AbstractConsumer](#AbstractConsumer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | Path on the endpoint |
| query | <code>Object</code> | Query parameters |

<a name="AbstractConsumer+get"></a>

### *abstractConsumer.get(path, query) ⇒ <code>Promise</code>*
Performs a GET request

**Kind**: instance method of <code>[AbstractConsumer](#AbstractConsumer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | Path on the endpoint |
| query | <code>Object</code> | Query parameters |

<a name="AbstractConsumer+patch"></a>

### *abstractConsumer.patch(path, data) ⇒ <code>Promise</code>*
Performs a PATCH request

**Kind**: instance method of <code>[AbstractConsumer](#AbstractConsumer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | Path on the endpoint |
| data | <code>Object</code> | Data payload |

<a name="AbstractConsumer+post"></a>

### *abstractConsumer.post(path, data) ⇒ <code>Promise</code>*
Performs a POST request

**Kind**: instance method of <code>[AbstractConsumer](#AbstractConsumer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | Path on the endpoint |
| data | <code>Object</code> | Data payload |

<a name="AbstractConsumer+put"></a>

### *abstractConsumer.put(path, data) ⇒ <code>Promise</code>*
Performs a PUT request

**Kind**: instance method of <code>[AbstractConsumer](#AbstractConsumer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | Path on the endpoint |
| data | <code>Object</code> | Data payload |

<a name="AbstractConsumer+request"></a>

### *abstractConsumer.request(method, path, data) ⇒ <code>Promise</code>*
Performs a request

**Kind**: instance method of <code>[AbstractConsumer](#AbstractConsumer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| method | <code>string</code> | The method to use |
| path | <code>string</code> | Path on the endpoint |
| data | <code>Object</code> | Data payload |

<a name="AbstractConsumer+isSafeMethod"></a>

### *abstractConsumer.isSafeMethod() ⇒ <code>boolean</code>*
Returns whether the request is safe (should not mutate any data)

**Kind**: instance method of <code>[AbstractConsumer](#AbstractConsumer)</code>  
<a name="AbstractConsumer+addCsrfToken"></a>

### *abstractConsumer.addCsrfToken()*
Looks for cookie this.csrfCookie and passes it's value to this.csrfHeader

**Kind**: instance method of <code>[AbstractConsumer](#AbstractConsumer)</code>  
<a name="AbstractConsumer+getCookie"></a>

### *abstractConsumer.getCookie(name) ⇒ <code>string</code>*
Wrapper for Cookie.get

**Kind**: instance method of <code>[AbstractConsumer](#AbstractConsumer)</code>  

| Param | Type |
| --- | --- |
| name | <code>string</code> | 

<a name="AbstractConsumer+addHeader"></a>

### *abstractConsumer.addHeader(name, value)*
Adds a header to all future request

**Kind**: instance method of <code>[AbstractConsumer](#AbstractConsumer)</code>  

| Param | Type |
| --- | --- |
| name | <code>string</code> | 
| value | <code>string</code> | 

<a name="AbstractConsumer+serialize"></a>

### *abstractConsumer.serialize(data) ⇒ <code>\*</code>*
Serializes data
Returns data if data is not an object
Excludes fields marked in this.unserializableFields

**Kind**: instance method of <code>[AbstractConsumer](#AbstractConsumer)</code>  

| Param | Type |
| --- | --- |
| data | <code>AbstractConsumerObject</code> &#124; <code>\*</code> | 

<a name="AbstractConsumer+requestSuccess"></a>

### *abstractConsumer.requestSuccess(data) ⇒ <code>AbstractConsumerObject</code> &#124; <code>Array.&lt;AbstractConsumerObject&gt;</code>*
Callback for request
Gets called if request resolve successfully

**Kind**: instance method of <code>[AbstractConsumer](#AbstractConsumer)</code>  

| Param | Type |
| --- | --- |
| data | <code>HttpResponseMessage</code> | 

<a name="AbstractConsumer+parse"></a>

### *abstractConsumer.parse(data) ⇒ <code>AbstractConsumerObject</code> &#124; <code>Array.&lt;AbstractConsumerObject&gt;</code> &#124; <code>undefined</code>*
Parses JSON string to a single or list of AbstractConsumerObject instance(s)

**Kind**: instance method of <code>[AbstractConsumer](#AbstractConsumer)</code>  

| Param | Type |
| --- | --- |
| data | <code>string</code> | 

<a name="AbstractConsumer+parseList"></a>

### *abstractConsumer.parseList(array) ⇒ <code>Array.&lt;AbstractConsumerObject&gt;</code>*
Parses anonymous objects to a list of AbstractConsumerObjects
Gets called when result JSON.parse is an array

**Kind**: instance method of <code>[AbstractConsumer](#AbstractConsumer)</code>  

| Param | Type |
| --- | --- |
| array | <code>Array.&lt;Object&gt;</code> | 

<a name="AbstractConsumer+parseScalar"></a>

### *abstractConsumer.parseScalar(object) ⇒ <code>AbstractConsumerObject</code>*
Parses anonymous object to a single AbstractConsumerObject
Gets called when result JSON.parse is not an array

**Kind**: instance method of <code>[AbstractConsumer](#AbstractConsumer)</code>  

| Param | Type |
| --- | --- |
| object | <code>Object</code> | 

<a name="AbstractConsumer+parseEntity"></a>

### *abstractConsumer.parseEntity(object) ⇒ <code>AbstractConsumerObject</code>*
Parses anonymous object to a single AbstractConsumerObject

**Kind**: instance method of <code>[AbstractConsumer](#AbstractConsumer)</code>  

| Param | Type |
| --- | --- |
| object | <code>Object</code> | 

<a name="AbstractConsumer+requestFailed"></a>

### *abstractConsumer.requestFailed(data) ⇒ <code>HttpResponseMessage</code>*
Callback for request
Gets called if request doesnt resolve successfully

**Kind**: instance method of <code>[AbstractConsumer](#AbstractConsumer)</code>  
**Returns**: <code>HttpResponseMessage</code> - data  

| Param | Type |
| --- | --- |
| data | <code>HttpResponseMessage</code> | 

