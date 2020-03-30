<a name="module_abstract-http-client"></a>

## abstract-http-client

* [abstract-http-client](#module_abstract-http-client)
    * *[.AbstractHTTPClient](#module_abstract-http-client.AbstractHTTPClient)*
        * *[new exports.AbstractHTTPClient(consumer)](#new_module_abstract-http-client.AbstractHTTPClient_new)*
        * *[.consumer](#module_abstract-http-client.AbstractHTTPClient+consumer)*
        * *[.baseURL](#module_abstract-http-client.AbstractHTTPClient+baseURL) : <code>string</code>*
        * *[.headers](#module_abstract-http-client.AbstractHTTPClient+headers) : <code>Object</code>*
        * *[.arrayFormat](#module_abstract-http-client.AbstractHTTPClient+arrayFormat) : <code>string</code>*
        * *[.setBaseURL(baseURL)](#module_abstract-http-client.AbstractHTTPClient+setBaseURL)*
        * *[.addHeader(name, value)](#module_abstract-http-client.AbstractHTTPClient+addHeader)*
        * *[.delete([path], [data])](#module_abstract-http-client.AbstractHTTPClient+delete) ⇒ <code>Promise</code>*
        * *[.get([path], [data])](#module_abstract-http-client.AbstractHTTPClient+get) ⇒ <code>Promise</code>*
        * *[.patch([path], [data])](#module_abstract-http-client.AbstractHTTPClient+patch) ⇒ <code>Promise</code>*
        * *[.post([path], [data])](#module_abstract-http-client.AbstractHTTPClient+post) ⇒ <code>Promise</code>*
        * *[.put([path], [data])](#module_abstract-http-client.AbstractHTTPClient+put) ⇒ <code>Promise</code>*
        * *[.getURL(path)](#module_abstract-http-client.AbstractHTTPClient+getURL) ⇒ <code>string</code>*

<a name="module_abstract-http-client.AbstractHTTPClient"></a>

### *abstract-http-client.AbstractHTTPClient*
Abstract base class for http clients.

**Kind**: static abstract class of [<code>abstract-http-client</code>](#module_abstract-http-client)  

* *[.AbstractHTTPClient](#module_abstract-http-client.AbstractHTTPClient)*
    * *[new exports.AbstractHTTPClient(consumer)](#new_module_abstract-http-client.AbstractHTTPClient_new)*
    * *[.consumer](#module_abstract-http-client.AbstractHTTPClient+consumer)*
    * *[.baseURL](#module_abstract-http-client.AbstractHTTPClient+baseURL) : <code>string</code>*
    * *[.headers](#module_abstract-http-client.AbstractHTTPClient+headers) : <code>Object</code>*
    * *[.arrayFormat](#module_abstract-http-client.AbstractHTTPClient+arrayFormat) : <code>string</code>*
    * *[.setBaseURL(baseURL)](#module_abstract-http-client.AbstractHTTPClient+setBaseURL)*
    * *[.addHeader(name, value)](#module_abstract-http-client.AbstractHTTPClient+addHeader)*
    * *[.delete([path], [data])](#module_abstract-http-client.AbstractHTTPClient+delete) ⇒ <code>Promise</code>*
    * *[.get([path], [data])](#module_abstract-http-client.AbstractHTTPClient+get) ⇒ <code>Promise</code>*
    * *[.patch([path], [data])](#module_abstract-http-client.AbstractHTTPClient+patch) ⇒ <code>Promise</code>*
    * *[.post([path], [data])](#module_abstract-http-client.AbstractHTTPClient+post) ⇒ <code>Promise</code>*
    * *[.put([path], [data])](#module_abstract-http-client.AbstractHTTPClient+put) ⇒ <code>Promise</code>*
    * *[.getURL(path)](#module_abstract-http-client.AbstractHTTPClient+getURL) ⇒ <code>string</code>*

<a name="new_module_abstract-http-client.AbstractHTTPClient_new"></a>

#### *new exports.AbstractHTTPClient(consumer)*
Configures HTTPClient instance.


| Param | Type | Description |
| --- | --- | --- |
| consumer | <code>AbstractConsumer</code> | Reference to consumer instantiating this object. |

<a name="module_abstract-http-client.AbstractHTTPClient+consumer"></a>

#### *abstractHTTPClient.consumer*
{AbstractConsumer} Reference to consumer instantiating this object.

**Kind**: instance property of [<code>AbstractHTTPClient</code>](#module_abstract-http-client.AbstractHTTPClient)  
<a name="module_abstract-http-client.AbstractHTTPClient+baseURL"></a>

#### *abstractHTTPClient.baseURL : <code>string</code>*
Base URL for all requests, gets concatenated with path passed to request methods.

**Kind**: instance property of [<code>AbstractHTTPClient</code>](#module_abstract-http-client.AbstractHTTPClient)  
<a name="module_abstract-http-client.AbstractHTTPClient+headers"></a>

#### *abstractHTTPClient.headers : <code>Object</code>*
An optional object holding key value pairs of additional headers.

**Kind**: instance property of [<code>AbstractHTTPClient</code>](#module_abstract-http-client.AbstractHTTPClient)  
<a name="module_abstract-http-client.AbstractHTTPClient+arrayFormat"></a>

#### *abstractHTTPClient.arrayFormat : <code>string</code>*
- How to shape array query parameters: "repeat" or "brackets".

**Kind**: instance property of [<code>AbstractHTTPClient</code>](#module_abstract-http-client.AbstractHTTPClient)  
<a name="module_abstract-http-client.AbstractHTTPClient+setBaseURL"></a>

#### *abstractHTTPClient.setBaseURL(baseURL)*
Sets the base url for all requests.

**Kind**: instance method of [<code>AbstractHTTPClient</code>](#module_abstract-http-client.AbstractHTTPClient)  

| Param |
| --- |
| baseURL | 

<a name="module_abstract-http-client.AbstractHTTPClient+addHeader"></a>

#### *abstractHTTPClient.addHeader(name, value)*
Adds header to all requests.

**Kind**: instance method of [<code>AbstractHTTPClient</code>](#module_abstract-http-client.AbstractHTTPClient)  

| Param | Type |
| --- | --- |
| name | <code>string</code> | 
| value | <code>string</code> | 

<a name="module_abstract-http-client.AbstractHTTPClient+delete"></a>

#### *abstractHTTPClient.delete([path], [data]) ⇒ <code>Promise</code>*
Performs a DELETE request.

**Kind**: instance method of [<code>AbstractHTTPClient</code>](#module_abstract-http-client.AbstractHTTPClient)  

| Param | Type | Description |
| --- | --- | --- |
| [path] | <code>string</code> | Path on the endpoint. |
| [data] | <code>Object</code> | Data payload. |

<a name="module_abstract-http-client.AbstractHTTPClient+get"></a>

#### *abstractHTTPClient.get([path], [data]) ⇒ <code>Promise</code>*
Performs a GET request.

**Kind**: instance method of [<code>AbstractHTTPClient</code>](#module_abstract-http-client.AbstractHTTPClient)  

| Param | Type | Description |
| --- | --- | --- |
| [path] | <code>string</code> | Path on the endpoint. |
| [data] | <code>Object</code> | Data payload. |

<a name="module_abstract-http-client.AbstractHTTPClient+patch"></a>

#### *abstractHTTPClient.patch([path], [data]) ⇒ <code>Promise</code>*
Performs a PATCH request.

**Kind**: instance method of [<code>AbstractHTTPClient</code>](#module_abstract-http-client.AbstractHTTPClient)  

| Param | Type | Description |
| --- | --- | --- |
| [path] | <code>string</code> | Path on the endpoint. |
| [data] | <code>Object</code> | Data payload. |

<a name="module_abstract-http-client.AbstractHTTPClient+post"></a>

#### *abstractHTTPClient.post([path], [data]) ⇒ <code>Promise</code>*
Performs a POST request.

**Kind**: instance method of [<code>AbstractHTTPClient</code>](#module_abstract-http-client.AbstractHTTPClient)  

| Param | Type | Description |
| --- | --- | --- |
| [path] | <code>string</code> | Path on the endpoint. |
| [data] | <code>Object</code> | Data payload. |

<a name="module_abstract-http-client.AbstractHTTPClient+put"></a>

#### *abstractHTTPClient.put([path], [data]) ⇒ <code>Promise</code>*
Performs a PUT request.

**Kind**: instance method of [<code>AbstractHTTPClient</code>](#module_abstract-http-client.AbstractHTTPClient)  

| Param | Type | Description |
| --- | --- | --- |
| [path] | <code>string</code> | Path on the endpoint. |
| [data] | <code>Object</code> | Data payload. |

<a name="module_abstract-http-client.AbstractHTTPClient+getURL"></a>

#### *abstractHTTPClient.getURL(path) ⇒ <code>string</code>*
Returns the full path based this.baseURL and path.

**Kind**: instance method of [<code>AbstractHTTPClient</code>](#module_abstract-http-client.AbstractHTTPClient)  

| Param | Type |
| --- | --- |
| path | <code>string</code> | 

