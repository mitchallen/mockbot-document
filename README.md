mockbot-document
==
mock html dom document
--

<p align="left">
  <a href="https://travis-ci.org/mitchallen/mockbot-document">
    <img src="https://img.shields.io/travis/mitchallen/mockbot-document.svg?style=flat-square" alt="Version">
  </a>
  <a href="https://codecov.io/gh/mitchallen/mockbot-document">
    <img src="https://codecov.io/gh/mitchallen/mockbot-document/branch/master/graph/badge.svg" alt="Coverage Status">
  </a>
  <a href="https://npmjs.org/package/mockbot-document">
    <img src="http://img.shields.io/npm/dt/mockbot-document.svg?style=flat-square" alt="Downloads">
  </a>
  <a href="https://npmjs.org/package/mockbot-document">
    <img src="http://img.shields.io/npm/v/mockbot-document.svg?style=flat-square" alt="Version">
  </a>
  <a href="https://npmjs.com/package/mockbot-document">
    <img src="https://img.shields.io/npm/l/mockbot-document.svg?style=flat-square" alt="License"></a>
  </a>
</p>

## Installation

    $ npm init
    $ npm install mockbot-document --save
  
* * *

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
    * [.querySelector()](#module_mockbot-document+querySelector)
    * [.getElementById()](#module_mockbot-document+getElementById) ⇒ <code>[mockbot-element](#external_mockbot-element)</code>
    * [.createElement()](#module_mockbot-document+createElement) ⇒ <code>[mockbot-element](#external_mockbot-element)</code>

<a name="module_mockbot-document+querySelector"></a>

### mockbot-document.querySelector()
mock document.querySelector()

**Kind**: instance method of <code>[mockbot-document](#module_mockbot-document)</code>  
**Example** *(usage)*  
```js
document.querySelector("...");
```
<a name="module_mockbot-document+getElementById"></a>

### mockbot-document.getElementById() ⇒ <code>[mockbot-element](#external_mockbot-element)</code>
mock document.getElementById()

**Kind**: instance method of <code>[mockbot-document](#module_mockbot-document)</code>  
**Example** *(usage)*  
```js
var el = document.getElementById("id");
```
<a name="module_mockbot-document+createElement"></a>

### mockbot-document.createElement() ⇒ <code>[mockbot-element](#external_mockbot-element)</code>
mock document.createElement()

**Kind**: instance method of <code>[mockbot-document](#module_mockbot-document)</code>  
**Example** *(usage)*  
```js
var el = document.createElement("id");
```
<a name="module_mockbot-document-factory"></a>

## mockbot-document-factory
Factory module

<a name="module_mockbot-document-factory.create"></a>

### mockbot-document-factory.create(options) ⇒ <code>[mockbot-document](#module_mockbot-document)</code>
Factory method 
It takes one spec parameter that must be an object with named parameters

**Kind**: static method of <code>[mockbot-document-factory](#module_mockbot-document-factory)</code>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Named parameters object |

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


* * *

## Testing

To test, go to the root folder and type (sans __$__):

    $ npm test
   
* * *
 
## Repo(s)

* [bitbucket.org/mitchallen/mockbot-document.git](https://bitbucket.org/mitchallen/mockbot-document.git)
* [github.com/mitchallen/mockbot-document.git](https://github.com/mitchallen/mockbot-document.git)

* * *

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

* * *

## Version History

#### Version 0.1.0 

* initial release

* * *
