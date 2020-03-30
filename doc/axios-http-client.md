<a name="module_axios-http-client"></a>

## axios-http-client

* [axios-http-client](#module_axios-http-client)
    * [.AxiosHTTPClient](#module_axios-http-client.AxiosHTTPClient)
        * [new exports.AxiosHTTPClient(consumer, [options])](#new_module_axios-http-client.AxiosHTTPClient_new)
        * [.cancelSource](#module_axios-http-client.AxiosHTTPClient+cancelSource) : <code>Object</code>
        * [.getConfiguration([data], [query])](#module_axios-http-client.AxiosHTTPClient+getConfiguration) ⇒ <code>Object</code>
        * [.serializeParams(params)](#module_axios-http-client.AxiosHTTPClient+serializeParams) ⇒ <code>Object</code>
        * [.createResponse(response)](#module_axios-http-client.AxiosHTTPClient+createResponse) ⇒ <code>HttpResponseMessage</code>
        * [.createError(error)](#module_axios-http-client.AxiosHTTPClient+createError) ⇒ <code>Promise.&lt;never&gt;</code>
        * [.withAbort(axiosPromise)](#module_axios-http-client.AxiosHTTPClient+withAbort) ⇒ <code>Promise</code>
        * [.delete([path], [data])](#module_axios-http-client.AxiosHTTPClient+delete) ⇒ <code>Promise</code>
        * [.get([path], [data])](#module_axios-http-client.AxiosHTTPClient+get) ⇒ <code>Promise</code>
        * [.patch([path], [data])](#module_axios-http-client.AxiosHTTPClient+patch) ⇒ <code>Promise</code>
        * [.post([path], [data])](#module_axios-http-client.AxiosHTTPClient+post) ⇒ <code>Promise</code>
        * [.put([path], [data])](#module_axios-http-client.AxiosHTTPClient+put) ⇒ <code>Promise</code>
        * [.request(method, [path], [data])](#module_axios-http-client.AxiosHTTPClient+request) ⇒ <code>Promise</code>

<a name="module_axios-http-client.AxiosHTTPClient"></a>

### axios-http-client.AxiosHTTPClient
HTTP client based on Axios.
(Response) interface is modeled after aurelia-http-client.

**Kind**: static class of [<code>axios-http-client</code>](#module_axios-http-client)  

* [.AxiosHTTPClient](#module_axios-http-client.AxiosHTTPClient)
    * [new exports.AxiosHTTPClient(consumer, [options])](#new_module_axios-http-client.AxiosHTTPClient_new)
    * [.cancelSource](#module_axios-http-client.AxiosHTTPClient+cancelSource) : <code>Object</code>
    * [.getConfiguration([data], [query])](#module_axios-http-client.AxiosHTTPClient+getConfiguration) ⇒ <code>Object</code>
    * [.serializeParams(params)](#module_axios-http-client.AxiosHTTPClient+serializeParams) ⇒ <code>Object</code>
    * [.createResponse(response)](#module_axios-http-client.AxiosHTTPClient+createResponse) ⇒ <code>HttpResponseMessage</code>
    * [.createError(error)](#module_axios-http-client.AxiosHTTPClient+createError) ⇒ <code>Promise.&lt;never&gt;</code>
    * [.withAbort(axiosPromise)](#module_axios-http-client.AxiosHTTPClient+withAbort) ⇒ <code>Promise</code>
    * [.delete([path], [data])](#module_axios-http-client.AxiosHTTPClient+delete) ⇒ <code>Promise</code>
    * [.get([path], [data])](#module_axios-http-client.AxiosHTTPClient+get) ⇒ <code>Promise</code>
    * [.patch([path], [data])](#module_axios-http-client.AxiosHTTPClient+patch) ⇒ <code>Promise</code>
    * [.post([path], [data])](#module_axios-http-client.AxiosHTTPClient+post) ⇒ <code>Promise</code>
    * [.put([path], [data])](#module_axios-http-client.AxiosHTTPClient+put) ⇒ <code>Promise</code>
    * [.request(method, [path], [data])](#module_axios-http-client.AxiosHTTPClient+request) ⇒ <code>Promise</code>

<a name="new_module_axios-http-client.AxiosHTTPClient_new"></a>

#### new exports.AxiosHTTPClient(consumer, [options])
Configures HTTPClient instance.


| Param | Type | Description |
| --- | --- | --- |
| consumer | <code>AbstractConsumer</code> | Reference to consumer instantiating this object. |
| [options] | <code>Object</code> | Additional configuration. |

<a name="module_axios-http-client.AxiosHTTPClient+cancelSource"></a>

#### axiosHTTPClient.cancelSource : <code>Object</code>
**Kind**: instance property of [<code>AxiosHTTPClient</code>](#module_axios-http-client.AxiosHTTPClient)  
<a name="module_axios-http-client.AxiosHTTPClient+getConfiguration"></a>

#### axiosHTTPClient.getConfiguration([data], [query]) ⇒ <code>Object</code>
Returns the configuration for axios based on this.headers and query.
Makes sure the response schema closely matches former versions using aurelia-http-client.

**Kind**: instance method of [<code>AxiosHTTPClient</code>](#module_axios-http-client.AxiosHTTPClient)  

| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | Data payload. |
| [query] | <code>Object</code> | Query parameters. |

<a name="module_axios-http-client.AxiosHTTPClient+serializeParams"></a>

#### axiosHTTPClient.serializeParams(params) ⇒ <code>Object</code>
Serialize params to take this.arrayFormat into account.

**Kind**: instance method of [<code>AxiosHTTPClient</code>](#module_axios-http-client.AxiosHTTPClient)  

| Param | Type |
| --- | --- |
| params | <code>Object</code> | 

<a name="module_axios-http-client.AxiosHTTPClient+createResponse"></a>

#### axiosHTTPClient.createResponse(response) ⇒ <code>HttpResponseMessage</code>
Converts Axios response to HttpResponseMessage.

**Kind**: instance method of [<code>AxiosHTTPClient</code>](#module_axios-http-client.AxiosHTTPClient)  

| Param | Type |
| --- | --- |
| response | <code>Object</code> | 

<a name="module_axios-http-client.AxiosHTTPClient+createError"></a>

#### axiosHTTPClient.createError(error) ⇒ <code>Promise.&lt;never&gt;</code>
Converts Axios error to HttpResponseMessage.

**Kind**: instance method of [<code>AxiosHTTPClient</code>](#module_axios-http-client.AxiosHTTPClient)  

| Param |
| --- |
| error | 

<a name="module_axios-http-client.AxiosHTTPClient+withAbort"></a>

#### axiosHTTPClient.withAbort(axiosPromise) ⇒ <code>Promise</code>
Adds/implements abort (and cancel) methods to Axios provided promise.

**Kind**: instance method of [<code>AxiosHTTPClient</code>](#module_axios-http-client.AxiosHTTPClient)  

| Param | Type |
| --- | --- |
| axiosPromise | <code>Promise</code> | 

<a name="module_axios-http-client.AxiosHTTPClient+delete"></a>

#### axiosHTTPClient.delete([path], [data]) ⇒ <code>Promise</code>
Performs a DELETE request.

**Kind**: instance method of [<code>AxiosHTTPClient</code>](#module_axios-http-client.AxiosHTTPClient)  

| Param | Type | Description |
| --- | --- | --- |
| [path] | <code>string</code> | Path on the endpoint. |
| [data] | <code>Object</code> | Data payload. |

<a name="module_axios-http-client.AxiosHTTPClient+get"></a>

#### axiosHTTPClient.get([path], [data]) ⇒ <code>Promise</code>
Performs a GET request.

**Kind**: instance method of [<code>AxiosHTTPClient</code>](#module_axios-http-client.AxiosHTTPClient)  

| Param | Type | Description |
| --- | --- | --- |
| [path] | <code>string</code> | Path on the endpoint. |
| [data] | <code>Object</code> | Data payload. |

<a name="module_axios-http-client.AxiosHTTPClient+patch"></a>

#### axiosHTTPClient.patch([path], [data]) ⇒ <code>Promise</code>
Performs a PATCH request.

**Kind**: instance method of [<code>AxiosHTTPClient</code>](#module_axios-http-client.AxiosHTTPClient)  

| Param | Type | Description |
| --- | --- | --- |
| [path] | <code>string</code> | Path on the endpoint. |
| [data] | <code>Object</code> | Data payload. |

<a name="module_axios-http-client.AxiosHTTPClient+post"></a>

#### axiosHTTPClient.post([path], [data]) ⇒ <code>Promise</code>
Performs a POST request.

**Kind**: instance method of [<code>AxiosHTTPClient</code>](#module_axios-http-client.AxiosHTTPClient)  

| Param | Type | Description |
| --- | --- | --- |
| [path] | <code>string</code> | Path on the endpoint. |
| [data] | <code>Object</code> | Data payload. |

<a name="module_axios-http-client.AxiosHTTPClient+put"></a>

#### axiosHTTPClient.put([path], [data]) ⇒ <code>Promise</code>
Performs a PUT request.

**Kind**: instance method of [<code>AxiosHTTPClient</code>](#module_axios-http-client.AxiosHTTPClient)  

| Param | Type | Description |
| --- | --- | --- |
| [path] | <code>string</code> | Path on the endpoint. |
| [data] | <code>Object</code> | Data payload. |

<a name="module_axios-http-client.AxiosHTTPClient+request"></a>

#### axiosHTTPClient.request(method, [path], [data]) ⇒ <code>Promise</code>
Performs the Axios request.

**Kind**: instance method of [<code>AxiosHTTPClient</code>](#module_axios-http-client.AxiosHTTPClient)  

| Param | Type | Description |
| --- | --- | --- |
| method | <code>string</code> | The method to use. |
| [path] | <code>string</code> | Path on the endpoint. |
| [data] | <code>Object</code> | Data payload. |

