<a name="module_abstract-page-number-list"></a>

## abstract-page-number-list

* [abstract-page-number-list](#module_abstract-page-number-list)
    * *[.AbstractPageNumberList](#module_abstract-page-number-list.AbstractPageNumberList)*
        * *[new exports.AbstractPageNumberList(objects, consumer, responseData, [method], [path], [data])](#new_module_abstract-page-number-list.AbstractPageNumberList_new)*
        * *[.currentMethod](#module_abstract-page-number-list.AbstractPageNumberList+currentMethod)*
        * *[.currentPath](#module_abstract-page-number-list.AbstractPageNumberList+currentPath)*
        * *[.currentData](#module_abstract-page-number-list.AbstractPageNumberList+currentData)*
        * *[.pageField](#module_abstract-page-number-list.AbstractPageNumberList+pageField)*
        * *[.pageQueryParam](#module_abstract-page-number-list.AbstractPageNumberList+pageQueryParam)*
        * *[.page](#module_abstract-page-number-list.AbstractPageNumberList+page)*
        * *[.pageCountField](#module_abstract-page-number-list.AbstractPageNumberList+pageCountField)*
        * *[.pageCount](#module_abstract-page-number-list.AbstractPageNumberList+pageCount)*
        * *[.pageSize](#module_abstract-page-number-list.AbstractPageNumberList+pageSize)*
        * *[.first()](#module_abstract-page-number-list.AbstractPageNumberList+first) ⇒ <code>Promise</code>*
        * *[.last()](#module_abstract-page-number-list.AbstractPageNumberList+last) ⇒ <code>Promise</code>*
        * *[.previous()](#module_abstract-page-number-list.AbstractPageNumberList+previous) ⇒ <code>Promise</code>*
        * *[.next()](#module_abstract-page-number-list.AbstractPageNumberList+next) ⇒ <code>Promise</code>*
        * *[.goToPage(page, [forceGet])](#module_abstract-page-number-list.AbstractPageNumberList+goToPage)*
        * *[.requestPage(page, method, data)](#module_abstract-page-number-list.AbstractPageNumberList+requestPage) ⇒ <code>Promise</code>*

<a name="module_abstract-page-number-list.AbstractPageNumberList"></a>

### *abstract-page-number-list.AbstractPageNumberList*
Abstract base class for paginated lists.

**Kind**: static abstract class of [<code>abstract-page-number-list</code>](#module_abstract-page-number-list)  
**See**: [abstract-list.md](abstract-list.md) for inherited API.  

* *[.AbstractPageNumberList](#module_abstract-page-number-list.AbstractPageNumberList)*
    * *[new exports.AbstractPageNumberList(objects, consumer, responseData, [method], [path], [data])](#new_module_abstract-page-number-list.AbstractPageNumberList_new)*
    * *[.currentMethod](#module_abstract-page-number-list.AbstractPageNumberList+currentMethod)*
    * *[.currentPath](#module_abstract-page-number-list.AbstractPageNumberList+currentPath)*
    * *[.currentData](#module_abstract-page-number-list.AbstractPageNumberList+currentData)*
    * *[.pageField](#module_abstract-page-number-list.AbstractPageNumberList+pageField)*
    * *[.pageQueryParam](#module_abstract-page-number-list.AbstractPageNumberList+pageQueryParam)*
    * *[.page](#module_abstract-page-number-list.AbstractPageNumberList+page)*
    * *[.pageCountField](#module_abstract-page-number-list.AbstractPageNumberList+pageCountField)*
    * *[.pageCount](#module_abstract-page-number-list.AbstractPageNumberList+pageCount)*
    * *[.pageSize](#module_abstract-page-number-list.AbstractPageNumberList+pageSize)*
    * *[.first()](#module_abstract-page-number-list.AbstractPageNumberList+first) ⇒ <code>Promise</code>*
    * *[.last()](#module_abstract-page-number-list.AbstractPageNumberList+last) ⇒ <code>Promise</code>*
    * *[.previous()](#module_abstract-page-number-list.AbstractPageNumberList+previous) ⇒ <code>Promise</code>*
    * *[.next()](#module_abstract-page-number-list.AbstractPageNumberList+next) ⇒ <code>Promise</code>*
    * *[.goToPage(page, [forceGet])](#module_abstract-page-number-list.AbstractPageNumberList+goToPage)*
    * *[.requestPage(page, method, data)](#module_abstract-page-number-list.AbstractPageNumberList+requestPage) ⇒ <code>Promise</code>*

<a name="new_module_abstract-page-number-list.AbstractPageNumberList_new"></a>

#### *new exports.AbstractPageNumberList(objects, consumer, responseData, [method], [path], [data])*

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| objects | <code>Array.&lt;AbstractConsumerObject&gt;</code> |  | Items to populate list with. |
| consumer | <code>Consumer</code> |  | Consumer instance for this object. |
| responseData | <code>Object</code> |  | The responseData result as Object. |
| [method] | <code>string</code> | <code>&quot;&#x27;get&#x27;&quot;</code> | The request method. |
| [path] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | The request path. |
| [data] | <code>Object</code> | <code>{}</code> | The request data payload. |

<a name="module_abstract-page-number-list.AbstractPageNumberList+currentMethod"></a>

#### *abstractPageNumberList.currentMethod*
{string} The method of the request.

**Kind**: instance property of [<code>AbstractPageNumberList</code>](#module_abstract-page-number-list.AbstractPageNumberList)  
<a name="module_abstract-page-number-list.AbstractPageNumberList+currentPath"></a>

#### *abstractPageNumberList.currentPath*
{string} The path of the request.

**Kind**: instance property of [<code>AbstractPageNumberList</code>](#module_abstract-page-number-list.AbstractPageNumberList)  
<a name="module_abstract-page-number-list.AbstractPageNumberList+currentData"></a>

#### *abstractPageNumberList.currentData*
{string} The payload of the request.

**Kind**: instance property of [<code>AbstractPageNumberList</code>](#module_abstract-page-number-list.AbstractPageNumberList)  
<a name="module_abstract-page-number-list.AbstractPageNumberList+pageField"></a>

#### *abstractPageNumberList.pageField*
{string} The field to recover the page from.

**Kind**: instance property of [<code>AbstractPageNumberList</code>](#module_abstract-page-number-list.AbstractPageNumberList)  
<a name="module_abstract-page-number-list.AbstractPageNumberList+pageQueryParam"></a>

#### *abstractPageNumberList.pageQueryParam*
{string} The parameter to indicate the request page with.

**Kind**: instance property of [<code>AbstractPageNumberList</code>](#module_abstract-page-number-list.AbstractPageNumberList)  
<a name="module_abstract-page-number-list.AbstractPageNumberList+page"></a>

#### *abstractPageNumberList.page*
{number} The current page.

**Kind**: instance property of [<code>AbstractPageNumberList</code>](#module_abstract-page-number-list.AbstractPageNumberList)  
<a name="module_abstract-page-number-list.AbstractPageNumberList+pageCountField"></a>

#### *abstractPageNumberList.pageCountField*
{string} The field to recover the amount of page from.

**Kind**: instance property of [<code>AbstractPageNumberList</code>](#module_abstract-page-number-list.AbstractPageNumberList)  
<a name="module_abstract-page-number-list.AbstractPageNumberList+pageCount"></a>

#### *abstractPageNumberList.pageCount*
{number} The amount of pages.

**Kind**: instance property of [<code>AbstractPageNumberList</code>](#module_abstract-page-number-list.AbstractPageNumberList)  
<a name="module_abstract-page-number-list.AbstractPageNumberList+pageSize"></a>

#### *abstractPageNumberList.pageSize*
{number} The amount of objects on a page.

**Kind**: instance property of [<code>AbstractPageNumberList</code>](#module_abstract-page-number-list.AbstractPageNumberList)  
<a name="module_abstract-page-number-list.AbstractPageNumberList+first"></a>

#### *abstractPageNumberList.first() ⇒ <code>Promise</code>*
Requests the first page.

**Kind**: instance method of [<code>AbstractPageNumberList</code>](#module_abstract-page-number-list.AbstractPageNumberList)  
<a name="module_abstract-page-number-list.AbstractPageNumberList+last"></a>

#### *abstractPageNumberList.last() ⇒ <code>Promise</code>*
Requests the last page.

**Kind**: instance method of [<code>AbstractPageNumberList</code>](#module_abstract-page-number-list.AbstractPageNumberList)  
<a name="module_abstract-page-number-list.AbstractPageNumberList+previous"></a>

#### *abstractPageNumberList.previous() ⇒ <code>Promise</code>*
Requests the previous page.

**Kind**: instance method of [<code>AbstractPageNumberList</code>](#module_abstract-page-number-list.AbstractPageNumberList)  
<a name="module_abstract-page-number-list.AbstractPageNumberList+next"></a>

#### *abstractPageNumberList.next() ⇒ <code>Promise</code>*
Requests the next page.

**Kind**: instance method of [<code>AbstractPageNumberList</code>](#module_abstract-page-number-list.AbstractPageNumberList)  
<a name="module_abstract-page-number-list.AbstractPageNumberList+goToPage"></a>

#### *abstractPageNumberList.goToPage(page, [forceGet])*
Navigates to page.
Only replays method and payload when forceGet=false.

**Kind**: instance method of [<code>AbstractPageNumberList</code>](#module_abstract-page-number-list.AbstractPageNumberList)  

| Param | Type | Default |
| --- | --- | --- |
| page | <code>number</code> |  | 
| [forceGet] | <code>boolean</code> | <code>true</code> | 

<a name="module_abstract-page-number-list.AbstractPageNumberList+requestPage"></a>

#### *abstractPageNumberList.requestPage(page, method, data) ⇒ <code>Promise</code>*
Requests a page

**Kind**: instance method of [<code>AbstractPageNumberList</code>](#module_abstract-page-number-list.AbstractPageNumberList)  

| Param | Type |
| --- | --- |
| page | <code>number</code> | 
| method | <code>string</code> | 
| data | <code>Object</code> | 

