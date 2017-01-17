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
    $ npm install mockbot-document --save-dev
    
* * *

## Usage

With tools like __browserify__, it's easy to create client side code in node.js. But, when testing with tools like __mocha__, code that references browser elements or the document object will throw an error.

This can be worked around by creating a mock object that simulates the document object. Assign it to __global__ before each test starts, then delete it from global when each test finishes.  Here is an example using mocha:

	"use strict";

    var documentFactory = require("mockbot-document");
    
    describe('module smoke test', () => {
    
      beforeEach( done => {
        // Call before all tests
        // mock browser document
        global.document = documentFactory.create();
        done();
      });
      
	  afterEach( done => {
        // Call after all tests
        delete global.document;
        done();
      });
      
      it('createElement should return object', done => {
        var result = document.createElement('div');
        should.exist(result);
        done();
      })
    }
    
* * *

## Limitations

The main objective of this module is to provide placeholders to avoid lint and compiler errors. Duplicating functionality of a real browser is not as important. Though attempts will be made to simulate a response from a browser, actual functionality is not guaranteed.

## Available Methods

Only a small subset of mock document methods are currently available. Over time others will be added.  See the module reference below to see what is currently available. 

## Requesting Methods

If a specific method is desired ASAP, open up an issue on github.com to request it.

## Elements

For information on available element methods, see __[mockbot-element](https://www.npmjs.com/package/mockbot-element)__.

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
    * [.mockElement(spec)](#module_mockbot-document+mockElement) ⇒ <code>[mockbot-element](#external_mockbot-element)</code>
    * [.querySelector()](#module_mockbot-document+querySelector) ⇒ <code>null</code>
    * [.getElementById(id)](#module_mockbot-document+getElementById) ⇒ <code>[mockbot-element](#external_mockbot-element)</code>
    * [.createElement(tagName)](#module_mockbot-document+createElement) ⇒ <code>[mockbot-element](#external_mockbot-element)</code>

<a name="module_mockbot-document+mockElement"></a>

### mockbot-document.mockElement(spec) ⇒ <code>[mockbot-element](#external_mockbot-element)</code>
creates a mock element to simulate html elements

**Kind**: instance method of <code>[mockbot-document](#module_mockbot-document)</code>  

| Param | Type | Description |
| --- | --- | --- |
| spec | <code>Object</code> | Named parameters object |
| spec.tagName | <code>string</code> | Required element type name (a, div, x-thing, etc.) |
| spec.id | <code>string</code> | Optional element id |

**Example** *(usage)*  
```js
document.mockElement( { tagName: "div", d: "alpha" } );
```
<a name="module_mockbot-document+querySelector"></a>

### mockbot-document.querySelector() ⇒ <code>null</code>
mock document.querySelector().
CURRENTLY NON-FUNCTIONAL - just a place holder for now.

**Kind**: instance method of <code>[mockbot-document](#module_mockbot-document)</code>  
**Example** *(usage)*  
```js
document.querySelector("...");
```
<a name="module_mockbot-document+getElementById"></a>

### mockbot-document.getElementById(id) ⇒ <code>[mockbot-element](#external_mockbot-element)</code>
mock document.getElementById()

**Kind**: instance method of <code>[mockbot-document](#module_mockbot-document)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Element id |

**Example** *(usage)*  
```js
var el = document.getElementById("id");
```
<a name="module_mockbot-document+createElement"></a>

### mockbot-document.createElement(tagName) ⇒ <code>[mockbot-element](#external_mockbot-element)</code>
mock document.createElement()

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

#### Version 0.1.11

* updated mockbot-element to version 0.1.8

#### Version 0.1.10

* fixed type-o in doc

#### Version 0.1.9

* refactored getElementById
* cleaned up documentation

#### Version 0.1.8

* fixed version history

#### Version 0.1.7

* updated mockbot-element to version 0.1.7
* removed client example

#### Version 0.1.6

* updated mockbot-element to version 0.1.6

#### Version 0.1.5

* updated mockbot-element to version 0.1.5

#### Version 0.1.4

* updated mockbot-element to version 0.1.4 (contains tagName property)
* updated createElement to create element using tagName

#### Version 0.1.3

* fixed doc errors

#### Version 0.1.2

* fixed version history

#### Version 0.1.1

* added test cases to bring coverage up to 100%
* added mockElement method
* updated to latest version of mockbot-element

#### Version 0.1.0 

* initial release

* * *
