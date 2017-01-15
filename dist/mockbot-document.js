(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.MitchAllen || (g.MitchAllen = {})).MockbotDocument = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
/**
    Module: mockbot-document
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint esversion: 6 */

"use strict";

/**
 * Mock Element
 * @external mockbot-element
 * @see {@link https://www.npmjs.com/package/mockbot-element|mockbot-element}
 */

var elementFactory = _dereq_("mockbot-element");

/**
 * Module
 * @module mockbot-document
 */

/**
 * 
 * Factory module
 * @module mockbot-document-factory
 */

/** 
* Factory method 
* It takes one spec parameter that must be an object with named parameters
* @param {Object} spec Named parameters object
* @returns {module:mockbot-document}
* @example <caption>Usage example</caption>
* var factory = require("mockbot-document");
* var obj = factory.create({});
*/
module.exports.create = function (spec) {

    spec = spec || {};

    var elements = [];

    return {

        /** creates a mock element to simulate html elements
           * @function
           * @instance
           * @param {Object} spec Named parameters object
           * @param {string} spec.tagName Required element type name (a, div, x-thing, etc.)
           * @param {string} spec.id Optional element id
           * @memberof module:mockbot-document
           * @returns {external:mockbot-element}
           * @example <caption>usage</caption>
           * document.mockElement( { tagName: "div", d: "alpha" } );
         */
        mockElement: function mockElement(spec) {
            return elements.push(elementFactory.create(spec));
        },

        /** mock document.querySelector().
          * CURRENTLY NON-FUNCTIONAL - just a place holder for now.
          * @function
          * @instance
          * @memberof module:mockbot-document
          * @returns {null}
          * @example <caption>usage</caption>
          * document.querySelector("..."");
        */
        querySelector: function querySelector() {
            return null;
        },

        /** mock document.getElementById()
          * @function
          * @instance
          * @param {string} id Element id
          * @memberof module:mockbot-document
          * @returns {external:mockbot-element}
          * @example <caption>usage</caption>
          * var el = document.getElementById("id");
        */
        getElementById: function getElementById(id) {
            var result = elements.filter(function (el) {
                return el.id === id;
            });
            return result.length > 0 ? result : null;
        },

        /** mock document.createElement()
          * @function
          * @instance
          * @param {string} tagName name of HTML element (a, div, x-thing, etc.)
          * @memberof module:mockbot-document
          * @returns {external:mockbot-element}
          * @example <caption>usage</caption>
          * var el = document.createElement("div");
        */
        createElement: function createElement(tagName) {
            return elementFactory.create({ tagName: tagName });
        }
    };
};

},{"mockbot-element":2}],2:[function(_dereq_,module,exports){
(function (global){
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.MitchAllen || (g.MitchAllen = {})).MockbotElement = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof _dereq_=="function"&&_dereq_;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof _dereq_=="function"&&_dereq_;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
/**
    Module: mockbot-element
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint esversion: 6 */

"use strict";

/**
 * Module
 * @module mockbot-element
 * @property {String} id - the id of the element
 * @property {String} tagName - read-only tagName of element as uppercase (i.e. 'DIV')
 */

/**
 * 
 * Factory module
 * @module mockbot-element-factory
 */

/** 
* Factory method 
* It takes one spec parameter that must be an object with named parameters
* @param {Object} spec Named parameters object
* @param {string} spec.tagName required HTML tagName (a, div, x-thing, etc.)
* @param {string} spec.id optional id attribute for HTML element
* @returns {module:mockbot-element}
* @example <caption>Usage</caption>
* var factory = require("mockbot-element");
* var obj = factory.create({ tagName: "div" });
* @example <caption>Usage with id</caption>
* var factory = require("mockbot-element");
* var obj = factory.create({ tagName: "div", id: "d1" });
*/

module.exports.create = function (spec) {
  spec = spec || {};
  // private
  var m_tagName = spec.tagName || "";

  if (!m_tagName.match(/^[[A-Za-z_][\w+$-_]+/)) {
    // browser throws DOMexception
    throw new Error("The tagName provided ('" + m_tagName + "') is not a valid name");
  }

  var m_attribute = [];
  if (spec.id) {
    m_attribute.id = spec.id;
  }
  var obj = {
    /** mock element.setAttribute
      * @function
      * @instance
      * @param {string} name attribute name
      * @param {string} value attribute value
      * @memberof module:mockbot-element
      * @example <caption>usage</caption>
      * el.setAttribute("width","5");
    */
    setAttribute: function setAttribute(name, value) {
      m_attribute[name] = value;
    },

    /** mock element.getAttribute
      * @function
      * @instance
      * @param {string} name attribute name
      * @memberof module:mockbot-element
      * @example <caption>usage</caption>
      * var w = el.getAttribute("width");
    */
    getAttribute: function getAttribute(name) {
      return m_attribute[name];
    },
    /** mock element.cloneNode
      * @function
      * @instance
      * @param {boolean} deep If true, clone children as well
      * @memberof module:mockbot-element
      * @returns {module:mockbot-element}
      * @example <caption>usage</caption>
      * var n = el.cloneNode();
    */
    cloneNode: function cloneNode(deep) {
      return Object.create(this, {});
    }
  };

  Object.defineProperties(obj, {
    // properties are documented in the module section at the top
    "id": {
      get: function get() {
        return m_attribute.id;
      },
      set: function set(id) {
        return m_attribute.id = id;
      },
      enumerable: true
    },

    "tagName": {
      writable: false,
      value: m_tagName.toUpperCase()
    }

  });

  return obj;
};

},{}]},{},[1])(1)
});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});