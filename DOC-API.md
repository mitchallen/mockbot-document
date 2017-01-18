## Modules

<dl>
<dt><a href="#module_mockbot-document">mockbot-document</a></dt>
<dd><p>Module</p>
</dd>
<dt><a href="#module_mockbot-document-factory">mockbot-document-factory</a></dt>
<dd><p>Factory module</p>
</dd>
</dl>

## External

<dl>
<dt><a href="#external_mockbot-element">mockbot-element</a></dt>
<dd><p>Mock Element</p>
</dd>
</dl>

<a name="module_mockbot-document"></a>

## mockbot-document
Module


* [mockbot-document](#module_mockbot-document)
    * [.mockElement(spec)](#module_mockbot-document+mockElement) ⇒ <code>[mockbot-element](#external_mockbot-element)</code>
    * [.querySelector()](#module_mockbot-document+querySelector) ⇒ <code>null</code>
    * [.getElementById(id)](#module_mockbot-document+getElementById) ⇒ <code>[mockbot-element](#external_mockbot-element)</code>
    * [.getElementsByTagName(tagName)](#module_mockbot-document+getElementsByTagName) ⇒ <code>[Array.&lt;mockbot-element&gt;](#external_mockbot-element)</code>
    * [.createElement(tagName)](#module_mockbot-document+createElement) ⇒ <code>[mockbot-element](#external_mockbot-element)</code>

<a name="module_mockbot-document+mockElement"></a>

### mockbot-document.mockElement(spec) ⇒ <code>[mockbot-element](#external_mockbot-element)</code>
Creates a mock element to simulate html elements.

**Kind**: instance method of <code>[mockbot-document](#module_mockbot-document)</code>  

| Param | Type | Description |
| --- | --- | --- |
| spec | <code>Object</code> | Named parameters object |
| spec.tagName | <code>string</code> | Required element type name (a, div, x-thing, etc.) |
| spec.id | <code>string</code> | Optional element id |

**Example** *(usage)*  
```js
document.mockElement( { tagName: tagName, id: id } );
var result = document.getElementById(id);
should.exist(result);
```
<a name="module_mockbot-document+querySelector"></a>

### mockbot-document.querySelector() ⇒ <code>null</code>
Mock document.querySelector().
CURRENTLY NON-FUNCTIONAL - just a place holder for now.

**Kind**: instance method of <code>[mockbot-document](#module_mockbot-document)</code>  
**Example** *(usage)*  
```js
document.querySelector("...");
```
<a name="module_mockbot-document+getElementById"></a>

### mockbot-document.getElementById(id) ⇒ <code>[mockbot-element](#external_mockbot-element)</code>
Mock document.getElementById()

**Kind**: instance method of <code>[mockbot-document](#module_mockbot-document)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Element id |

**Example** *(usage)*  
```js
var el = document.getElementById("id");
```
<a name="module_mockbot-document+getElementsByTagName"></a>

### mockbot-document.getElementsByTagName(tagName) ⇒ <code>[Array.&lt;mockbot-element&gt;](#external_mockbot-element)</code>
Mock document.getElementsByTagName()

**Kind**: instance method of <code>[mockbot-document](#module_mockbot-document)</code>  

| Param | Type | Description |
| --- | --- | --- |
| tagName | <code>string</code> | Element tagName (div,p,a,etc.) |

**Example** *(usage)*  
```js
var elArray = document.getElementsByTagName("div");
```
<a name="module_mockbot-document+createElement"></a>

### mockbot-document.createElement(tagName) ⇒ <code>[mockbot-element](#external_mockbot-element)</code>
Mock document.createElement()

**Kind**: instance method of <code>[mockbot-document](#module_mockbot-document)</code>  

| Param | Type | Description |
| --- | --- | --- |
| tagName | <code>string</code> | name of HTML element (a, div, x-thing, etc.) |

**Example** *(usage)*  
```js
var el = document.createElement("div");
```
<a name="module_mockbot-document-factory"></a>

## mockbot-document-factory
Factory module

<a name="module_mockbot-document-factory.create"></a>

### mockbot-document-factory.create(spec) ⇒ <code>[mockbot-document](#module_mockbot-document)</code>
Factory method 
It takes one spec parameter that must be an object with named parameters

**Kind**: static method of <code>[mockbot-document-factory](#module_mockbot-document-factory)</code>  

| Param | Type | Description |
| --- | --- | --- |
| spec | <code>Object</code> | Named parameters object |

**Example** *(Usage example)*  
```js
var factory = require("mockbot-document");
var obj = factory.create({});
```
<a name="external_mockbot-element"></a>

## mockbot-element
Mock Element

**Kind**: global external  
**See**: [mockbot-element](https://www.npmjs.com/package/mockbot-element)  
