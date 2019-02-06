## Classes

<dl>
<dt><a href="#AbstractHTTPClient">AbstractHTTPClient</a></dt>
<dd><p>Abstract base class for http clients.</p>
</dd>
<dt><a href="#AbstractHTTPClient">AbstractHTTPClient</a></dt>
<dd></dd>
</dl>

<a name="AbstractHTTPClient"></a>

## *AbstractHTTPClient*
Abstract base class for http clients.

**Kind**: global abstract class  

* *[AbstractHTTPClient](#AbstractHTTPClient)*
    * *[new AbstractHTTPClient([options])](#new_AbstractHTTPClient_new)*
    * *[.baseURL](#AbstractHTTPClient+baseURL) : <code>string</code>*
    * *[.headers](#AbstractHTTPClient+headers) : <code>Object</code>*
    * *[.setBaseURL(baseURL)](#AbstractHTTPClient+setBaseURL)*
    * *[.addHeader(name, value)](#AbstractHTTPClient+addHeader)*
    * *[.delete([path], [data])](#AbstractHTTPClient+delete) ⇒ <code>Promise</code>*
    * *[.get([path], [data])](#AbstractHTTPClient+get) ⇒ <code>Promise</code>*
    * *[.patch([path], [data])](#AbstractHTTPClient+patch) ⇒ <code>Promise</code>*
    * *[.post([path], [data])](#AbstractHTTPClient+post) ⇒ <code>Promise</code>*
    * *[.put([path], [data])](#AbstractHTTPClient+put) ⇒ <code>Promise</code>*
    * *[.getURL(path)](#AbstractHTTPClient+getURL) ⇒ <code>string</code>*

<a name="new_AbstractHTTPClient_new"></a>

### *new AbstractHTTPClient([options])*
Configures HTTPClient instance.


| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | Additional configuration. |

<a name="AbstractHTTPClient+baseURL"></a>

### *abstractHTTPClient.baseURL : <code>string</code>*
Base URL for all requests, gets concatenated with path passed to request methods.

**Kind**: instance property of <code>[AbstractHTTPClient](#AbstractHTTPClient)</code>  
<a name="AbstractHTTPClient+headers"></a>

### *abstractHTTPClient.headers : <code>Object</code>*
An optional object holding key value pairs of additional headers.

**Kind**: instance property of <code>[AbstractHTTPClient](#AbstractHTTPClient)</code>  
<a name="AbstractHTTPClient+setBaseURL"></a>

### *abstractHTTPClient.setBaseURL(baseURL)*
Sets the base url for all requests.

**Kind**: instance method of <code>[AbstractHTTPClient](#AbstractHTTPClient)</code>  

| Param |
| --- |
| baseURL | 

<a name="AbstractHTTPClient+addHeader"></a>

### *abstractHTTPClient.addHeader(name, value)*
Adds header to all requests.

**Kind**: instance method of <code>[AbstractHTTPClient](#AbstractHTTPClient)</code>  

| Param | Type |
| --- | --- |
| name | <code>string</code> | 
| value | <code>string</code> | 

<a name="AbstractHTTPClient+delete"></a>

### *abstractHTTPClient.delete([path], [data]) ⇒ <code>Promise</code>*
Performs a DELETE request.

**Kind**: instance method of <code>[AbstractHTTPClient](#AbstractHTTPClient)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [path] | <code>string</code> | Path on the endpoint. |
| [data] | <code>Object</code> | Data payload. |

<a name="AbstractHTTPClient+get"></a>

### *abstractHTTPClient.get([path], [data]) ⇒ <code>Promise</code>*
Performs a GET request.

**Kind**: instance method of <code>[AbstractHTTPClient](#AbstractHTTPClient)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [path] | <code>string</code> | Path on the endpoint. |
| [data] | <code>Object</code> | Data payload. |

<a name="AbstractHTTPClient+patch"></a>

### *abstractHTTPClient.patch([path], [data]) ⇒ <code>Promise</code>*
Performs a PATCH request.

**Kind**: instance method of <code>[AbstractHTTPClient](#AbstractHTTPClient)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [path] | <code>string</code> | Path on the endpoint. |
| [data] | <code>Object</code> | Data payload. |

<a name="AbstractHTTPClient+post"></a>

### *abstractHTTPClient.post([path], [data]) ⇒ <code>Promise</code>*
Performs a POST request.

**Kind**: instance method of <code>[AbstractHTTPClient](#AbstractHTTPClient)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [path] | <code>string</code> | Path on the endpoint. |
| [data] | <code>Object</code> | Data payload. |

<a name="AbstractHTTPClient+put"></a>

### *abstractHTTPClient.put([path], [data]) ⇒ <code>Promise</code>*
Performs a PUT request.

**Kind**: instance method of <code>[AbstractHTTPClient](#AbstractHTTPClient)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [path] | <code>string</code> | Path on the endpoint. |
| [data] | <code>Object</code> | Data payload. |

<a name="AbstractHTTPClient+getURL"></a>

### *abstractHTTPClient.getURL(path) ⇒ <code>string</code>*
Returns the full path based this.baseURL and path.

**Kind**: instance method of <code>[AbstractHTTPClient](#AbstractHTTPClient)</code>  

| Param | Type |
| --- | --- |
| path | <code>string</code> | 

<a name="AbstractHTTPClient"></a>

## AbstractHTTPClient
**Kind**: global class  

* [AbstractHTTPClient](#AbstractHTTPClient)
    * *[new AbstractHTTPClient([options])](#new_AbstractHTTPClient_new)*
    * *[.baseURL](#AbstractHTTPClient+baseURL) : <code>string</code>*
    * *[.headers](#AbstractHTTPClient+headers) : <code>Object</code>*
    * *[.setBaseURL(baseURL)](#AbstractHTTPClient+setBaseURL)*
    * *[.addHeader(name, value)](#AbstractHTTPClient+addHeader)*
    * *[.delete([path], [data])](#AbstractHTTPClient+delete) ⇒ <code>Promise</code>*
    * *[.get([path], [data])](#AbstractHTTPClient+get) ⇒ <code>Promise</code>*
    * *[.patch([path], [data])](#AbstractHTTPClient+patch) ⇒ <code>Promise</code>*
    * *[.post([path], [data])](#AbstractHTTPClient+post) ⇒ <code>Promise</code>*
    * *[.put([path], [data])](#AbstractHTTPClient+put) ⇒ <code>Promise</code>*
    * *[.getURL(path)](#AbstractHTTPClient+getURL) ⇒ <code>string</code>*

<a name="new_AbstractHTTPClient_new"></a>

### *new AbstractHTTPClient([options])*
Configures HTTPClient instance.


| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | Additional configuration. |

<a name="AbstractHTTPClient+baseURL"></a>

### *abstractHTTPClient.baseURL : <code>string</code>*
Base URL for all requests, gets concatenated with path passed to request methods.

**Kind**: instance property of <code>[AbstractHTTPClient](#AbstractHTTPClient)</code>  
<a name="AbstractHTTPClient+headers"></a>

### *abstractHTTPClient.headers : <code>Object</code>*
An optional object holding key value pairs of additional headers.

**Kind**: instance property of <code>[AbstractHTTPClient](#AbstractHTTPClient)</code>  
<a name="AbstractHTTPClient+setBaseURL"></a>

### *abstractHTTPClient.setBaseURL(baseURL)*
Sets the base url for all requests.

**Kind**: instance method of <code>[AbstractHTTPClient](#AbstractHTTPClient)</code>  

| Param |
| --- |
| baseURL | 

<a name="AbstractHTTPClient+addHeader"></a>

### *abstractHTTPClient.addHeader(name, value)*
Adds header to all requests.

**Kind**: instance method of <code>[AbstractHTTPClient](#AbstractHTTPClient)</code>  

| Param | Type |
| --- | --- |
| name | <code>string</code> | 
| value | <code>string</code> | 

<a name="AbstractHTTPClient+delete"></a>

### *abstractHTTPClient.delete([path], [data]) ⇒ <code>Promise</code>*
Performs a DELETE request.

**Kind**: instance method of <code>[AbstractHTTPClient](#AbstractHTTPClient)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [path] | <code>string</code> | Path on the endpoint. |
| [data] | <code>Object</code> | Data payload. |

<a name="AbstractHTTPClient+get"></a>

### *abstractHTTPClient.get([path], [data]) ⇒ <code>Promise</code>*
Performs a GET request.

**Kind**: instance method of <code>[AbstractHTTPClient](#AbstractHTTPClient)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [path] | <code>string</code> | Path on the endpoint. |
| [data] | <code>Object</code> | Data payload. |

<a name="AbstractHTTPClient+patch"></a>

### *abstractHTTPClient.patch([path], [data]) ⇒ <code>Promise</code>*
Performs a PATCH request.

**Kind**: instance method of <code>[AbstractHTTPClient](#AbstractHTTPClient)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [path] | <code>string</code> | Path on the endpoint. |
| [data] | <code>Object</code> | Data payload. |

<a name="AbstractHTTPClient+post"></a>

### *abstractHTTPClient.post([path], [data]) ⇒ <code>Promise</code>*
Performs a POST request.

**Kind**: instance method of <code>[AbstractHTTPClient](#AbstractHTTPClient)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [path] | <code>string</code> | Path on the endpoint. |
| [data] | <code>Object</code> | Data payload. |

<a name="AbstractHTTPClient+put"></a>

### *abstractHTTPClient.put([path], [data]) ⇒ <code>Promise</code>*
Performs a PUT request.

**Kind**: instance method of <code>[AbstractHTTPClient](#AbstractHTTPClient)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [path] | <code>string</code> | Path on the endpoint. |
| [data] | <code>Object</code> | Data payload. |

<a name="AbstractHTTPClient+getURL"></a>

### *abstractHTTPClient.getURL(path) ⇒ <code>string</code>*
Returns the full path based this.baseURL and path.

**Kind**: instance method of <code>[AbstractHTTPClient](#AbstractHTTPClient)</code>  

| Param | Type |
| --- | --- |
| path | <code>string</code> | 

