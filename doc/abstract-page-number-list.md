## Classes

<dl>
<dt><a href="#AbstractPageNumberList">AbstractPageNumberList</a></dt>
<dd><p>Abstract base class for paginated lists.</p>
</dd>
<dt><a href="#AbstractPageNumberList">AbstractPageNumberList</a></dt>
<dd></dd>
</dl>

<a name="AbstractPageNumberList"></a>

## *AbstractPageNumberList*
Abstract base class for paginated lists.

**Kind**: global abstract class  
**See**: [abstract-list.md](abstract-list.md) for inherited API.  

* *[AbstractPageNumberList](#AbstractPageNumberList)*
    * *[new AbstractPageNumberList(objects, consumer, responseData, [method], [path], [data])](#new_AbstractPageNumberList_new)*
    * *[.currentMethod](#AbstractPageNumberList+currentMethod)*
    * *[.currentPath](#AbstractPageNumberList+currentPath)*
    * *[.currentData](#AbstractPageNumberList+currentData)*
    * *[.pageField](#AbstractPageNumberList+pageField)*
    * *[.pageQueryParam](#AbstractPageNumberList+pageQueryParam)*
    * *[.page](#AbstractPageNumberList+page)*
    * *[.pageCountField](#AbstractPageNumberList+pageCountField)*
    * *[.pageCount](#AbstractPageNumberList+pageCount)*
    * *[.pageSize](#AbstractPageNumberList+pageSize)*
    * *[.first()](#AbstractPageNumberList+first) ⇒ <code>Promise</code>*
    * *[.last()](#AbstractPageNumberList+last) ⇒ <code>Promise</code>*
    * *[.previous()](#AbstractPageNumberList+previous) ⇒ <code>Promise</code>*
    * *[.next()](#AbstractPageNumberList+next) ⇒ <code>Promise</code>*
    * *[.goToPage(page, [forceGet])](#AbstractPageNumberList+goToPage)*
    * *[.requestPage(page, method, data)](#AbstractPageNumberList+requestPage) ⇒ <code>Promise</code>*

<a name="new_AbstractPageNumberList_new"></a>

### *new AbstractPageNumberList(objects, consumer, responseData, [method], [path], [data])*

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| objects | <code>Array.&lt;AbstractConsumerObject&gt;</code> |  | Items to populate list with. |
| consumer | <code>Consumer</code> |  | Consumer instance for this object. |
| responseData | <code>Object</code> |  | The responseData result as Object. |
| [method] | <code>string</code> | <code>&quot;&#x27;get&#x27;&quot;</code> | The request method. |
| [path] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | The request path. |
| [data] | <code>Object</code> | <code>{}</code> | The request data payload. |

<a name="AbstractPageNumberList+currentMethod"></a>

### *abstractPageNumberList.currentMethod*
{string} The method of the request.

**Kind**: instance property of <code>[AbstractPageNumberList](#AbstractPageNumberList)</code>  
<a name="AbstractPageNumberList+currentPath"></a>

### *abstractPageNumberList.currentPath*
{string} The path of the request.

**Kind**: instance property of <code>[AbstractPageNumberList](#AbstractPageNumberList)</code>  
<a name="AbstractPageNumberList+currentData"></a>

### *abstractPageNumberList.currentData*
{string} The payload of the request.

**Kind**: instance property of <code>[AbstractPageNumberList](#AbstractPageNumberList)</code>  
<a name="AbstractPageNumberList+pageField"></a>

### *abstractPageNumberList.pageField*
{string} The field to recover the page from.

**Kind**: instance property of <code>[AbstractPageNumberList](#AbstractPageNumberList)</code>  
<a name="AbstractPageNumberList+pageQueryParam"></a>

### *abstractPageNumberList.pageQueryParam*
{string} The parameter to indicate the request page with.

**Kind**: instance property of <code>[AbstractPageNumberList](#AbstractPageNumberList)</code>  
<a name="AbstractPageNumberList+page"></a>

### *abstractPageNumberList.page*
{number} The current page.

**Kind**: instance property of <code>[AbstractPageNumberList](#AbstractPageNumberList)</code>  
<a name="AbstractPageNumberList+pageCountField"></a>

### *abstractPageNumberList.pageCountField*
{string} The field to recover the amount of page from.

**Kind**: instance property of <code>[AbstractPageNumberList](#AbstractPageNumberList)</code>  
<a name="AbstractPageNumberList+pageCount"></a>

### *abstractPageNumberList.pageCount*
{number} The amount of pages.

**Kind**: instance property of <code>[AbstractPageNumberList](#AbstractPageNumberList)</code>  
<a name="AbstractPageNumberList+pageSize"></a>

### *abstractPageNumberList.pageSize*
{number} The amount of objects on a page.

**Kind**: instance property of <code>[AbstractPageNumberList](#AbstractPageNumberList)</code>  
<a name="AbstractPageNumberList+first"></a>

### *abstractPageNumberList.first() ⇒ <code>Promise</code>*
Requests the first page.

**Kind**: instance method of <code>[AbstractPageNumberList](#AbstractPageNumberList)</code>  
<a name="AbstractPageNumberList+last"></a>

### *abstractPageNumberList.last() ⇒ <code>Promise</code>*
Requests the last page.

**Kind**: instance method of <code>[AbstractPageNumberList](#AbstractPageNumberList)</code>  
<a name="AbstractPageNumberList+previous"></a>

### *abstractPageNumberList.previous() ⇒ <code>Promise</code>*
Requests the previous page.

**Kind**: instance method of <code>[AbstractPageNumberList](#AbstractPageNumberList)</code>  
<a name="AbstractPageNumberList+next"></a>

### *abstractPageNumberList.next() ⇒ <code>Promise</code>*
Requests the next page.

**Kind**: instance method of <code>[AbstractPageNumberList](#AbstractPageNumberList)</code>  
<a name="AbstractPageNumberList+goToPage"></a>

### *abstractPageNumberList.goToPage(page, [forceGet])*
Navigates to page.
Only replays method and payload when forceGet=false.

**Kind**: instance method of <code>[AbstractPageNumberList](#AbstractPageNumberList)</code>  

| Param | Type | Default |
| --- | --- | --- |
| page | <code>number</code> |  | 
| [forceGet] | <code>boolean</code> | <code>true</code> | 

<a name="AbstractPageNumberList+requestPage"></a>

### *abstractPageNumberList.requestPage(page, method, data) ⇒ <code>Promise</code>*
Requests a page

**Kind**: instance method of <code>[AbstractPageNumberList](#AbstractPageNumberList)</code>  

| Param | Type |
| --- | --- |
| page | <code>number</code> | 
| method | <code>string</code> | 
| data | <code>Object</code> | 

<a name="AbstractPageNumberList"></a>

## AbstractPageNumberList
**Kind**: global class  

* [AbstractPageNumberList](#AbstractPageNumberList)
    * *[new AbstractPageNumberList(objects, consumer, responseData, [method], [path], [data])](#new_AbstractPageNumberList_new)*
    * *[.currentMethod](#AbstractPageNumberList+currentMethod)*
    * *[.currentPath](#AbstractPageNumberList+currentPath)*
    * *[.currentData](#AbstractPageNumberList+currentData)*
    * *[.pageField](#AbstractPageNumberList+pageField)*
    * *[.pageQueryParam](#AbstractPageNumberList+pageQueryParam)*
    * *[.page](#AbstractPageNumberList+page)*
    * *[.pageCountField](#AbstractPageNumberList+pageCountField)*
    * *[.pageCount](#AbstractPageNumberList+pageCount)*
    * *[.pageSize](#AbstractPageNumberList+pageSize)*
    * *[.first()](#AbstractPageNumberList+first) ⇒ <code>Promise</code>*
    * *[.last()](#AbstractPageNumberList+last) ⇒ <code>Promise</code>*
    * *[.previous()](#AbstractPageNumberList+previous) ⇒ <code>Promise</code>*
    * *[.next()](#AbstractPageNumberList+next) ⇒ <code>Promise</code>*
    * *[.goToPage(page, [forceGet])](#AbstractPageNumberList+goToPage)*
    * *[.requestPage(page, method, data)](#AbstractPageNumberList+requestPage) ⇒ <code>Promise</code>*

<a name="new_AbstractPageNumberList_new"></a>

### *new AbstractPageNumberList(objects, consumer, responseData, [method], [path], [data])*

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| objects | <code>Array.&lt;AbstractConsumerObject&gt;</code> |  | Items to populate list with. |
| consumer | <code>Consumer</code> |  | Consumer instance for this object. |
| responseData | <code>Object</code> |  | The responseData result as Object. |
| [method] | <code>string</code> | <code>&quot;&#x27;get&#x27;&quot;</code> | The request method. |
| [path] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | The request path. |
| [data] | <code>Object</code> | <code>{}</code> | The request data payload. |

<a name="AbstractPageNumberList+currentMethod"></a>

### *abstractPageNumberList.currentMethod*
{string} The method of the request.

**Kind**: instance property of <code>[AbstractPageNumberList](#AbstractPageNumberList)</code>  
<a name="AbstractPageNumberList+currentPath"></a>

### *abstractPageNumberList.currentPath*
{string} The path of the request.

**Kind**: instance property of <code>[AbstractPageNumberList](#AbstractPageNumberList)</code>  
<a name="AbstractPageNumberList+currentData"></a>

### *abstractPageNumberList.currentData*
{string} The payload of the request.

**Kind**: instance property of <code>[AbstractPageNumberList](#AbstractPageNumberList)</code>  
<a name="AbstractPageNumberList+pageField"></a>

### *abstractPageNumberList.pageField*
{string} The field to recover the page from.

**Kind**: instance property of <code>[AbstractPageNumberList](#AbstractPageNumberList)</code>  
<a name="AbstractPageNumberList+pageQueryParam"></a>

### *abstractPageNumberList.pageQueryParam*
{string} The parameter to indicate the request page with.

**Kind**: instance property of <code>[AbstractPageNumberList](#AbstractPageNumberList)</code>  
<a name="AbstractPageNumberList+page"></a>

### *abstractPageNumberList.page*
{number} The current page.

**Kind**: instance property of <code>[AbstractPageNumberList](#AbstractPageNumberList)</code>  
<a name="AbstractPageNumberList+pageCountField"></a>

### *abstractPageNumberList.pageCountField*
{string} The field to recover the amount of page from.

**Kind**: instance property of <code>[AbstractPageNumberList](#AbstractPageNumberList)</code>  
<a name="AbstractPageNumberList+pageCount"></a>

### *abstractPageNumberList.pageCount*
{number} The amount of pages.

**Kind**: instance property of <code>[AbstractPageNumberList](#AbstractPageNumberList)</code>  
<a name="AbstractPageNumberList+pageSize"></a>

### *abstractPageNumberList.pageSize*
{number} The amount of objects on a page.

**Kind**: instance property of <code>[AbstractPageNumberList](#AbstractPageNumberList)</code>  
<a name="AbstractPageNumberList+first"></a>

### *abstractPageNumberList.first() ⇒ <code>Promise</code>*
Requests the first page.

**Kind**: instance method of <code>[AbstractPageNumberList](#AbstractPageNumberList)</code>  
<a name="AbstractPageNumberList+last"></a>

### *abstractPageNumberList.last() ⇒ <code>Promise</code>*
Requests the last page.

**Kind**: instance method of <code>[AbstractPageNumberList](#AbstractPageNumberList)</code>  
<a name="AbstractPageNumberList+previous"></a>

### *abstractPageNumberList.previous() ⇒ <code>Promise</code>*
Requests the previous page.

**Kind**: instance method of <code>[AbstractPageNumberList](#AbstractPageNumberList)</code>  
<a name="AbstractPageNumberList+next"></a>

### *abstractPageNumberList.next() ⇒ <code>Promise</code>*
Requests the next page.

**Kind**: instance method of <code>[AbstractPageNumberList](#AbstractPageNumberList)</code>  
<a name="AbstractPageNumberList+goToPage"></a>

### *abstractPageNumberList.goToPage(page, [forceGet])*
Navigates to page.
Only replays method and payload when forceGet=false.

**Kind**: instance method of <code>[AbstractPageNumberList](#AbstractPageNumberList)</code>  

| Param | Type | Default |
| --- | --- | --- |
| page | <code>number</code> |  | 
| [forceGet] | <code>boolean</code> | <code>true</code> | 

<a name="AbstractPageNumberList+requestPage"></a>

### *abstractPageNumberList.requestPage(page, method, data) ⇒ <code>Promise</code>*
Requests a page

**Kind**: instance method of <code>[AbstractPageNumberList](#AbstractPageNumberList)</code>  

| Param | Type |
| --- | --- |
| page | <code>number</code> | 
| method | <code>string</code> | 
| data | <code>Object</code> | 

