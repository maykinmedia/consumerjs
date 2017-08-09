<a name="PageNumberList"></a>

## PageNumberList
A list with page number pagination.

**Kind**: global class  
**See**: [abstract-paginated-list.md](abstract-paginated-list.md) for inherited API.  

* [PageNumberList](#PageNumberList)
    * [.pageField](#PageNumberList+pageField)
    * [.pageQueryParam](#PageNumberList+pageQueryParam)
    * [.page](#PageNumberList+page)
    * [.pageCountField](#PageNumberList+pageCountField)
    * [.pageCount](#PageNumberList+pageCount)
    * [.pageSize](#PageNumberList+pageSize)
    * [.first()](#PageNumberList+first) ⇒ <code>Promise</code>
    * [.last()](#PageNumberList+last) ⇒ <code>Promise</code>
    * [.previous()](#PageNumberList+previous) ⇒ <code>Promise</code>
    * [.next()](#PageNumberList+next) ⇒ <code>Promise</code>
    * [.requestPage(page, method, data)](#PageNumberList+requestPage) ⇒ <code>Promise</code>

<a name="PageNumberList+pageField"></a>

### pageNumberList.pageField
{string} The field to recover the page from.

**Kind**: instance property of <code>[PageNumberList](#PageNumberList)</code>  
<a name="PageNumberList+pageQueryParam"></a>

### pageNumberList.pageQueryParam
{string} The parameter to indicate the request page with.

**Kind**: instance property of <code>[PageNumberList](#PageNumberList)</code>  
<a name="PageNumberList+page"></a>

### pageNumberList.page
{number} The current page.

**Kind**: instance property of <code>[PageNumberList](#PageNumberList)</code>  
<a name="PageNumberList+pageCountField"></a>

### pageNumberList.pageCountField
{string} The field to recover the amount of page from.

**Kind**: instance property of <code>[PageNumberList](#PageNumberList)</code>  
<a name="PageNumberList+pageCount"></a>

### pageNumberList.pageCount
{number} The amount of pages.

**Kind**: instance property of <code>[PageNumberList](#PageNumberList)</code>  
<a name="PageNumberList+pageSize"></a>

### pageNumberList.pageSize
{number} The amount of objects on a page.

**Kind**: instance property of <code>[PageNumberList](#PageNumberList)</code>  
<a name="PageNumberList+first"></a>

### pageNumberList.first() ⇒ <code>Promise</code>
Requests the first page.

**Kind**: instance method of <code>[PageNumberList](#PageNumberList)</code>  
<a name="PageNumberList+last"></a>

### pageNumberList.last() ⇒ <code>Promise</code>
Requests the last page.

**Kind**: instance method of <code>[PageNumberList](#PageNumberList)</code>  
<a name="PageNumberList+previous"></a>

### pageNumberList.previous() ⇒ <code>Promise</code>
Requests the previous page.

**Kind**: instance method of <code>[PageNumberList](#PageNumberList)</code>  
<a name="PageNumberList+next"></a>

### pageNumberList.next() ⇒ <code>Promise</code>
Requests the next page.

**Kind**: instance method of <code>[PageNumberList](#PageNumberList)</code>  
<a name="PageNumberList+requestPage"></a>

### pageNumberList.requestPage(page, method, data) ⇒ <code>Promise</code>
Requests a page

**Kind**: instance method of <code>[PageNumberList](#PageNumberList)</code>  

| Param | Type |
| --- | --- |
| page | <code>number</code> | 
| method | <code>string</code> | 
| data | <code>Object</code> | 

