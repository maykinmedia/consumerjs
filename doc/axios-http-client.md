## Classes

<dl>
<dt><a href="#AxiosHTTPClient">AxiosHTTPClient</a></dt>
<dd><p>HTTP client based on Axios.
(Response) interface is modeled after aurelia-http-client.</p>
</dd>
<dt><a href="#AxiosHTTPClient">AxiosHTTPClient</a></dt>
<dd></dd>
</dl>

<a name="AxiosHTTPClient"></a>

## AxiosHTTPClient
HTTP client based on Axios.
(Response) interface is modeled after aurelia-http-client.

**Kind**: global class  

* [AxiosHTTPClient](#AxiosHTTPClient)
    * [new AxiosHTTPClient([options])](#new_AxiosHTTPClient_new)
    * [.cancelSource](#AxiosHTTPClient+cancelSource) : <code>Object</code>
    * [.getConfiguration([data], [query])](#AxiosHTTPClient+getConfiguration) ⇒ <code>Object</code>
    * [.createResponse(response)](#AxiosHTTPClient+createResponse) ⇒ <code>HttpResponseMessage</code>
    * [.createError(error)](#AxiosHTTPClient+createError) ⇒ <code>Promise.&lt;never&gt;</code>
    * [.withAbort(axiosPromise)](#AxiosHTTPClient+withAbort) ⇒ <code>Promise</code>
    * [.delete([path], [data])](#AxiosHTTPClient+delete) ⇒ <code>Promise</code>
    * [.get([path], [data])](#AxiosHTTPClient+get) ⇒ <code>Promise</code>
    * [.patch([path], [data])](#AxiosHTTPClient+patch) ⇒ <code>Promise</code>
    * [.post([path], [data])](#AxiosHTTPClient+post) ⇒ <code>Promise</code>
    * [.put([path], [data])](#AxiosHTTPClient+put) ⇒ <code>Promise</code>
    * [.request(method, [path], [data])](#AxiosHTTPClient+request) ⇒ <code>Promise</code>

<a name="new_AxiosHTTPClient_new"></a>

### new AxiosHTTPClient([options])
Configures AxiosHTTPClient instance.


| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | Additional configuration. |

<a name="AxiosHTTPClient+cancelSource"></a>

### axiosHTTPClient.cancelSource : <code>Object</code>
**Kind**: instance property of <code>[AxiosHTTPClient](#AxiosHTTPClient)</code>  
<a name="AxiosHTTPClient+getConfiguration"></a>

### axiosHTTPClient.getConfiguration([data], [query]) ⇒ <code>Object</code>
Returns the configuration for axios based on this.headers and query.
Makes sure the response schema closely matches former versions using aurelia-http-client.

**Kind**: instance method of <code>[AxiosHTTPClient](#AxiosHTTPClient)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | Data payload. |
| [query] | <code>Object</code> | Query parameters. |

<a name="AxiosHTTPClient+createResponse"></a>

### axiosHTTPClient.createResponse(response) ⇒ <code>HttpResponseMessage</code>
Converts Axios response to HttpResponseMessage.

**Kind**: instance method of <code>[AxiosHTTPClient](#AxiosHTTPClient)</code>  

| Param | Type |
| --- | --- |
| response | <code>Object</code> | 

<a name="AxiosHTTPClient+createError"></a>

### axiosHTTPClient.createError(error) ⇒ <code>Promise.&lt;never&gt;</code>
Converts Axios error to HttpResponseMessage.

**Kind**: instance method of <code>[AxiosHTTPClient](#AxiosHTTPClient)</code>  

| Param |
| --- |
| error | 

<a name="AxiosHTTPClient+withAbort"></a>

### axiosHTTPClient.withAbort(axiosPromise) ⇒ <code>Promise</code>
Adds/implements abort (and cancel) methods to Axios provided promise.

**Kind**: instance method of <code>[AxiosHTTPClient](#AxiosHTTPClient)</code>  

| Param | Type |
| --- | --- |
| axiosPromise | <code>Promise</code> | 

<a name="AxiosHTTPClient+delete"></a>

### axiosHTTPClient.delete([path], [data]) ⇒ <code>Promise</code>
Performs a DELETE request.

**Kind**: instance method of <code>[AxiosHTTPClient](#AxiosHTTPClient)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [path] | <code>string</code> | Path on the endpoint. |
| [data] | <code>Object</code> | Data payload. |

<a name="AxiosHTTPClient+get"></a>

### axiosHTTPClient.get([path], [data]) ⇒ <code>Promise</code>
Performs a GET request.

**Kind**: instance method of <code>[AxiosHTTPClient](#AxiosHTTPClient)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [path] | <code>string</code> | Path on the endpoint. |
| [data] | <code>Object</code> | Data payload. |

<a name="AxiosHTTPClient+patch"></a>

### axiosHTTPClient.patch([path], [data]) ⇒ <code>Promise</code>
Performs a PATCH request.

**Kind**: instance method of <code>[AxiosHTTPClient](#AxiosHTTPClient)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [path] | <code>string</code> | Path on the endpoint. |
| [data] | <code>Object</code> | Data payload. |

<a name="AxiosHTTPClient+post"></a>

### axiosHTTPClient.post([path], [data]) ⇒ <code>Promise</code>
Performs a POST request.

**Kind**: instance method of <code>[AxiosHTTPClient](#AxiosHTTPClient)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [path] | <code>string</code> | Path on the endpoint. |
| [data] | <code>Object</code> | Data payload. |

<a name="AxiosHTTPClient+put"></a>

### axiosHTTPClient.put([path], [data]) ⇒ <code>Promise</code>
Performs a PUT request.

**Kind**: instance method of <code>[AxiosHTTPClient](#AxiosHTTPClient)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [path] | <code>string</code> | Path on the endpoint. |
| [data] | <code>Object</code> | Data payload. |

<a name="AxiosHTTPClient+request"></a>

### axiosHTTPClient.request(method, [path], [data]) ⇒ <code>Promise</code>
Performs the Axios request.

**Kind**: instance method of <code>[AxiosHTTPClient](#AxiosHTTPClient)</code>  

| Param | Type | Description |
| --- | --- | --- |
| method | <code>string</code> | The method to use. |
| [path] | <code>string</code> | Path on the endpoint. |
| [data] | <code>Object</code> | Data payload. |

<a name="AxiosHTTPClient"></a>

## AxiosHTTPClient
**Kind**: global class  

* [AxiosHTTPClient](#AxiosHTTPClient)
    * [new AxiosHTTPClient([options])](#new_AxiosHTTPClient_new)
    * [.cancelSource](#AxiosHTTPClient+cancelSource) : <code>Object</code>
    * [.getConfiguration([data], [query])](#AxiosHTTPClient+getConfiguration) ⇒ <code>Object</code>
    * [.createResponse(response)](#AxiosHTTPClient+createResponse) ⇒ <code>HttpResponseMessage</code>
    * [.createError(error)](#AxiosHTTPClient+createError) ⇒ <code>Promise.&lt;never&gt;</code>
    * [.withAbort(axiosPromise)](#AxiosHTTPClient+withAbort) ⇒ <code>Promise</code>
    * [.delete([path], [data])](#AxiosHTTPClient+delete) ⇒ <code>Promise</code>
    * [.get([path], [data])](#AxiosHTTPClient+get) ⇒ <code>Promise</code>
    * [.patch([path], [data])](#AxiosHTTPClient+patch) ⇒ <code>Promise</code>
    * [.post([path], [data])](#AxiosHTTPClient+post) ⇒ <code>Promise</code>
    * [.put([path], [data])](#AxiosHTTPClient+put) ⇒ <code>Promise</code>
    * [.request(method, [path], [data])](#AxiosHTTPClient+request) ⇒ <code>Promise</code>

<a name="new_AxiosHTTPClient_new"></a>

### new AxiosHTTPClient([options])
Configures AxiosHTTPClient instance.


| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | Additional configuration. |

<a name="AxiosHTTPClient+cancelSource"></a>

### axiosHTTPClient.cancelSource : <code>Object</code>
**Kind**: instance property of <code>[AxiosHTTPClient](#AxiosHTTPClient)</code>  
<a name="AxiosHTTPClient+getConfiguration"></a>

### axiosHTTPClient.getConfiguration([data], [query]) ⇒ <code>Object</code>
Returns the configuration for axios based on this.headers and query.
Makes sure the response schema closely matches former versions using aurelia-http-client.

**Kind**: instance method of <code>[AxiosHTTPClient](#AxiosHTTPClient)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | Data payload. |
| [query] | <code>Object</code> | Query parameters. |

<a name="AxiosHTTPClient+createResponse"></a>

### axiosHTTPClient.createResponse(response) ⇒ <code>HttpResponseMessage</code>
Converts Axios response to HttpResponseMessage.

**Kind**: instance method of <code>[AxiosHTTPClient](#AxiosHTTPClient)</code>  

| Param | Type |
| --- | --- |
| response | <code>Object</code> | 

<a name="AxiosHTTPClient+createError"></a>

### axiosHTTPClient.createError(error) ⇒ <code>Promise.&lt;never&gt;</code>
Converts Axios error to HttpResponseMessage.

**Kind**: instance method of <code>[AxiosHTTPClient](#AxiosHTTPClient)</code>  

| Param |
| --- |
| error | 

<a name="AxiosHTTPClient+withAbort"></a>

### axiosHTTPClient.withAbort(axiosPromise) ⇒ <code>Promise</code>
Adds/implements abort (and cancel) methods to Axios provided promise.

**Kind**: instance method of <code>[AxiosHTTPClient](#AxiosHTTPClient)</code>  

| Param | Type |
| --- | --- |
| axiosPromise | <code>Promise</code> | 

<a name="AxiosHTTPClient+delete"></a>

### axiosHTTPClient.delete([path], [data]) ⇒ <code>Promise</code>
Performs a DELETE request.

**Kind**: instance method of <code>[AxiosHTTPClient](#AxiosHTTPClient)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [path] | <code>string</code> | Path on the endpoint. |
| [data] | <code>Object</code> | Data payload. |

<a name="AxiosHTTPClient+get"></a>

### axiosHTTPClient.get([path], [data]) ⇒ <code>Promise</code>
Performs a GET request.

**Kind**: instance method of <code>[AxiosHTTPClient](#AxiosHTTPClient)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [path] | <code>string</code> | Path on the endpoint. |
| [data] | <code>Object</code> | Data payload. |

<a name="AxiosHTTPClient+patch"></a>

### axiosHTTPClient.patch([path], [data]) ⇒ <code>Promise</code>
Performs a PATCH request.

**Kind**: instance method of <code>[AxiosHTTPClient](#AxiosHTTPClient)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [path] | <code>string</code> | Path on the endpoint. |
| [data] | <code>Object</code> | Data payload. |

<a name="AxiosHTTPClient+post"></a>

### axiosHTTPClient.post([path], [data]) ⇒ <code>Promise</code>
Performs a POST request.

**Kind**: instance method of <code>[AxiosHTTPClient](#AxiosHTTPClient)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [path] | <code>string</code> | Path on the endpoint. |
| [data] | <code>Object</code> | Data payload. |

<a name="AxiosHTTPClient+put"></a>

### axiosHTTPClient.put([path], [data]) ⇒ <code>Promise</code>
Performs a PUT request.

**Kind**: instance method of <code>[AxiosHTTPClient](#AxiosHTTPClient)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [path] | <code>string</code> | Path on the endpoint. |
| [data] | <code>Object</code> | Data payload. |

<a name="AxiosHTTPClient+request"></a>

### axiosHTTPClient.request(method, [path], [data]) ⇒ <code>Promise</code>
Performs the Axios request.

**Kind**: instance method of <code>[AxiosHTTPClient](#AxiosHTTPClient)</code>  

| Param | Type | Description |
| --- | --- | --- |
| method | <code>string</code> | The method to use. |
| [path] | <code>string</code> | Path on the endpoint. |
| [data] | <code>Object</code> | Data payload. |

