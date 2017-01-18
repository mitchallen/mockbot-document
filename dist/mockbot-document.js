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

        /** Creates a mock element to simulate html elements.
           * @function
           * @instance
           * @param {Object} spec Named parameters object
           * @param {string} spec.tagName Required element type name (a, div, x-thing, etc.)
           * @param {string} spec.id Optional element id
           * @memberof module:mockbot-document
           * @returns {external:mockbot-element}
           * @example <caption>usage</caption>
           * document.mockElement( { tagName: tagName, id: id } );
           * var result = document.getElementById(id);
           * should.exist(result);
         */
        mockElement: function mockElement(spec) {
            var el = elementFactory.create(spec);
            elements.push(el);
            return el;
        },

        /** Mock document.querySelector().
          * CURRENTLY NON-FUNCTIONAL - just a place holder for now.
          * @function
          * @instance
          * @memberof module:mockbot-document
          * @returns {null}
          * @example <caption>usage</caption>
          * document.querySelector("...");
        */
        querySelector: function querySelector() {
            return null;
        },

        /** Mock document.getElementById()
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
            return result.length > 0 ? result[0] : null;
        },

        /** Mock document.getElementsByTagName()
          * @function
          * @instance
          * @param {string} id Element id
          * @memberof module:mockbot-document
          * @returns {Array.<external:mockbot-element>}
          * @example <caption>usage</caption>
          * var elArray = document.getElementsByTagName("div");
        */
        getElementsByTagName: function getElementsByTagName(tagName) {
            var result = elements.filter(function (el) {
                return el.tagName === tagName.toUpperCase();
            });
            return result.length > 0 ? result : null;
        },

        /** Mock document.createElement()
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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var nodeFactory = _dereq_('mockbot-node');

/**
 * MockBot Node
 * @external mockbot-node
 * @see {@link https://www.npmjs.com/package/mockbot-node|mockbot-node}
 */

/**
 * Module
 * @module mockbot-element
 * @extends external:mockbot-node
 * @property {String} id - the id of the element
 * @property {String} tagName - read-only tagName of element as uppercase (i.e. 'DIV')
 * @property {String} outerHTML - WARNING: only get currently works, set not implemented
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

  // nodeType EXPORT_NODE = 1
  var obj = nodeFactory.create({ nodeType: 1 });

  Object.assign(obj, {
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

    /** return value of outerHTML
      * @function
      * @instance
      * @memberof module:mockbot-element
      * @example <caption>usage</caption>
      * console.log("ELEMENT: " + el);
    */
    toString: function toString() {
      return this.outerHTML;
    }
  });

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
      enumerable: true,
      value: m_tagName.toUpperCase()
    },

    "outerHTML": {
      get: function get() {
        var str = "<" + this.tagName.toLowerCase();
        str += Object.keys(m_attribute).reduce(function (s, key) {
          var sValue = _typeof(m_attribute[key]) === 'object' ? "[object Object]" : m_attribute[key];
          return s + " " + key + (sValue.length > 0 ? "=\"" + sValue + "\"" : "");
        }, "");
        str += ">";
        str += this.childNodes.reduce(function (s, el) {
          return s + el.outerHTML;
        }, "");
        str += "</" + this.tagName.toLowerCase() + ">";
        return str;
      },
      set: function set(html) {
        // TODO - parse HTML 
        console.warn("*** WARNING: .outerHTMl set not implemented");
      },
      enumerable: true
    }

  });

  return obj;
};

},{"mockbot-node":2}],2:[function(_dereq_,module,exports){
(function (global){
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.MitchAllen || (g.MitchAllen = {})).MockbotNode = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof _dereq_=="function"&&_dereq_;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof _dereq_=="function"&&_dereq_;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
/**
    Module: mockbot-node
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint esversion: 6 */

"use strict";

/**
 * Module
 * @module mockbot-node
 * @property {Array} childNodes - an array of child nodes
 */

/**
 * 
 * Factory module
 * @module mockbot-node-factory
 */

/** 
* Factory method 
* It takes one spec parameter that must be an object with named parameters
* @param {Object} spec Named parameters object
* @param {number} spec.nodeType required node type
* @returns {module:mockbot-node}
* @example <caption>Usage example</caption>
* var factory = require("mockbot-node");
* var obj = factory.create({ nodeType: 1 });
*/

module.exports.create = function (spec) {

    spec = spec || {};
    var m_nodeType = spec.nodeType || 0,
        m_child = [];

    var obj = {

        /** mock node.hasChildNodes
          * @function
          * @instance
          * @memberof module:mockbot-node
          * @returns {boolean}
          * @example <caption>usage</caption>
          * if(node.hasChildNodes()) { ... }
        */
        hasChildNodes: function hasChildNodes() {
            return m_child.length > 0;
        },

        /** mock node.appenChild 
          * @function
          * @instance
          * @param {boolean} deep If true, clone children as well
          * @memberof module:mockbot-node
          * @returns {module:mockbot-node}
          * @example <caption>usage</caption>
          * node.appendChild(child);
        */
        appendChild: function appendChild(n) {
            m_child.push(n);
            return n;
        },

        /** mock node.cloneNode
          * @function
          * @instance
          * @param {boolean} deep If true, clone children as well
          * @memberof module:mockbot-node
          * @returns {module:mockbot-node}
          * @example <caption>usage</caption>
          * var n = el.cloneNode();
        */
        cloneNode: function cloneNode(deep) {
            // TODO - this may not be ideal 
            return Object.assign({}, this);
        }
    };

    Object.defineProperties(obj, {
        // properties are documented in the module section at the top

        "nodeType": {
            writable: false,
            enumerable: true,
            value: m_nodeType
        },

        "childNodes": {
            writable: false,
            enumerable: true,
            value: m_child
        }

    });

    return obj;
};

},{}]},{},[1])(1)
});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});