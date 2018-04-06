## Classes

<dl>
<dt><a href="#AbstractPaginatedList">AbstractPaginatedList</a></dt>
<dd><p>Abstract base class for paginated lists.</p>
</dd>
<dt><a href="#AbstractPaginatedList">AbstractPaginatedList</a></dt>
<dd></dd>
</dl>

<a name="AbstractPaginatedList"></a>

## *AbstractPaginatedList*
Abstract base class for paginated lists.

**Kind**: global abstract class  
**See**: [abstract-list.md](abstract-list.md) for inherited API.  

* *[AbstractPaginatedList](#AbstractPaginatedList)*
    * *[new AbstractPaginatedList(objects, consumer, raw, [method], [path], [data])](#new_AbstractPaginatedList_new)*
    * *[.currentMethod](#AbstractPaginatedList+currentMethod)*
    * *[.currentPath](#AbstractPaginatedList+currentPath)*
    * *[.currentData](#AbstractPaginatedList+currentData)*
    * *[.first()](#AbstractPaginatedList+first)*
    * *[.last()](#AbstractPaginatedList+last)*
    * *[.previous()](#AbstractPaginatedList+previous)*
    * *[.next()](#AbstractPaginatedList+next)*
    * *[.goToPage(page, [forceGet])](#AbstractPaginatedList+goToPage)*
    * *[.requestPage()](#AbstractPaginatedList+requestPage)*

<a name="new_AbstractPaginatedList_new"></a>

### *new AbstractPaginatedList(objects, consumer, raw, [method], [path], [data])*

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| objects | <code>Array.&lt;AbstractConsumerObject&gt;</code> |  | Items to populate list with. |
| consumer | <code>Consumer</code> |  | Consumer instance for this object. |
| raw | <code>Object</code> |  | The raw result as Object. |
| [method] | <code>string</code> | <code>&quot;&#x27;get&#x27;&quot;</code> | The request method. |
| [path] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | The request path. |
| [data] | <code>Object</code> | <code>{}</code> | The request data payload. |

<a name="AbstractPaginatedList+currentMethod"></a>

### *abstractPaginatedList.currentMethod*
{string} The method of the request.

**Kind**: instance property of <code>[AbstractPaginatedList](#AbstractPaginatedList)</code>  
<a name="AbstractPaginatedList+currentPath"></a>

### *abstractPaginatedList.currentPath*
{string} The path of the request.

**Kind**: instance property of <code>[AbstractPaginatedList](#AbstractPaginatedList)</code>  
<a name="AbstractPaginatedList+currentData"></a>

### *abstractPaginatedList.currentData*
{string} The payload of the request.

**Kind**: instance property of <code>[AbstractPaginatedList](#AbstractPaginatedList)</code>  
<a name="AbstractPaginatedList+first"></a>

### *abstractPaginatedList.first()*
Placeholder implementation for method.

**Kind**: instance method of <code>[AbstractPaginatedList](#AbstractPaginatedList)</code>  
**Throws**:

- <code>Error</code> 

<a name="AbstractPaginatedList+last"></a>

### *abstractPaginatedList.last()*
Placeholder implementation for method.

**Kind**: instance method of <code>[AbstractPaginatedList](#AbstractPaginatedList)</code>  
**Throws**:

- <code>Error</code> 

<a name="AbstractPaginatedList+previous"></a>

### *abstractPaginatedList.previous()*
Placeholder implementation for method.

**Kind**: instance method of <code>[AbstractPaginatedList](#AbstractPaginatedList)</code>  
**Throws**:

- <code>Error</code> 

<a name="AbstractPaginatedList+next"></a>

### *abstractPaginatedList.next()*
Placeholder implementation for method.

**Kind**: instance method of <code>[AbstractPaginatedList](#AbstractPaginatedList)</code>  
**Throws**:

- <code>Error</code> 

<a name="AbstractPaginatedList+goToPage"></a>

### *abstractPaginatedList.goToPage(page, [forceGet])*
Navigates to page.
Only replays method and payload when forceGet=false.

**Kind**: instance method of <code>[AbstractPaginatedList](#AbstractPaginatedList)</code>  
**Throws**:

- <code>Error</code> 


| Param | Type | Default |
| --- | --- | --- |
| page | <code>number</code> |  | 
| [forceGet] | <code>boolean</code> | <code>true</code> | 

<a name="AbstractPaginatedList+requestPage"></a>

### *abstractPaginatedList.requestPage()*
Placeholder implementation for method.

**Kind**: instance method of <code>[AbstractPaginatedList](#AbstractPaginatedList)</code>  
**Throws**:

- <code>Error</code> 

<a name="AbstractPaginatedList"></a>

## AbstractPaginatedList
**Kind**: global class  

* [AbstractPaginatedList](#AbstractPaginatedList)
    * *[new AbstractPaginatedList(objects, consumer, raw, [method], [path], [data])](#new_AbstractPaginatedList_new)*
    * *[.currentMethod](#AbstractPaginatedList+currentMethod)*
    * *[.currentPath](#AbstractPaginatedList+currentPath)*
    * *[.currentData](#AbstractPaginatedList+currentData)*
    * *[.first()](#AbstractPaginatedList+first)*
    * *[.last()](#AbstractPaginatedList+last)*
    * *[.previous()](#AbstractPaginatedList+previous)*
    * *[.next()](#AbstractPaginatedList+next)*
    * *[.goToPage(page, [forceGet])](#AbstractPaginatedList+goToPage)*
    * *[.requestPage()](#AbstractPaginatedList+requestPage)*

<a name="new_AbstractPaginatedList_new"></a>

### *new AbstractPaginatedList(objects, consumer, raw, [method], [path], [data])*

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| objects | <code>Array.&lt;AbstractConsumerObject&gt;</code> |  | Items to populate list with. |
| consumer | <code>Consumer</code> |  | Consumer instance for this object. |
| raw | <code>Object</code> |  | The raw result as Object. |
| [method] | <code>string</code> | <code>&quot;&#x27;get&#x27;&quot;</code> | The request method. |
| [path] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | The request path. |
| [data] | <code>Object</code> | <code>{}</code> | The request data payload. |

<a name="AbstractPaginatedList+currentMethod"></a>

### *abstractPaginatedList.currentMethod*
{string} The method of the request.

**Kind**: instance property of <code>[AbstractPaginatedList](#AbstractPaginatedList)</code>  
<a name="AbstractPaginatedList+currentPath"></a>

### *abstractPaginatedList.currentPath*
{string} The path of the request.

**Kind**: instance property of <code>[AbstractPaginatedList](#AbstractPaginatedList)</code>  
<a name="AbstractPaginatedList+currentData"></a>

### *abstractPaginatedList.currentData*
{string} The payload of the request.

**Kind**: instance property of <code>[AbstractPaginatedList](#AbstractPaginatedList)</code>  
<a name="AbstractPaginatedList+first"></a>

### *abstractPaginatedList.first()*
Placeholder implementation for method.

**Kind**: instance method of <code>[AbstractPaginatedList](#AbstractPaginatedList)</code>  
**Throws**:

- <code>Error</code> 

<a name="AbstractPaginatedList+last"></a>

### *abstractPaginatedList.last()*
Placeholder implementation for method.

**Kind**: instance method of <code>[AbstractPaginatedList](#AbstractPaginatedList)</code>  
**Throws**:

- <code>Error</code> 

<a name="AbstractPaginatedList+previous"></a>

### *abstractPaginatedList.previous()*
Placeholder implementation for method.

**Kind**: instance method of <code>[AbstractPaginatedList](#AbstractPaginatedList)</code>  
**Throws**:

- <code>Error</code> 

<a name="AbstractPaginatedList+next"></a>

### *abstractPaginatedList.next()*
Placeholder implementation for method.

**Kind**: instance method of <code>[AbstractPaginatedList](#AbstractPaginatedList)</code>  
**Throws**:

- <code>Error</code> 

<a name="AbstractPaginatedList+goToPage"></a>

### *abstractPaginatedList.goToPage(page, [forceGet])*
Navigates to page.
Only replays method and payload when forceGet=false.

**Kind**: instance method of <code>[AbstractPaginatedList](#AbstractPaginatedList)</code>  
**Throws**:

- <code>Error</code> 


| Param | Type | Default |
| --- | --- | --- |
| page | <code>number</code> |  | 
| [forceGet] | <code>boolean</code> | <code>true</code> | 

<a name="AbstractPaginatedList+requestPage"></a>

### *abstractPaginatedList.requestPage()*
Placeholder implementation for method.

**Kind**: instance method of <code>[AbstractPaginatedList](#AbstractPaginatedList)</code>  
**Throws**:

- <code>Error</code> 

