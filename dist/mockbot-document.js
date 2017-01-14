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
* @param {Object} options Named parameters object
* @returns {module:mockbot-document}
* @example <caption>Usage example</caption>
* var factory = require("mockbot-document");
* var obj = factory.create({});
*/
module.exports.create = function (spec) {

    spec = spec || {};
    // private 

    return {
        // public
        /** mock document.querySelector()
          * @function
          * @instance
          * @memberof module:mockbot-document
          * @example <caption>usage</caption>
          * document.querySelector("...");
        */
        querySelector: function querySelector() {
            return null;
        },
        /** mock document.getElementById()
          * @function
          * @instance
          * @memberof module:mockbot-document
          * @returns {external:mockbot-element}
          * @example <caption>usage</caption>
          * var el = document.getElementById("id");
        */
        getElementById: function getElementById(id) {
            return id === "found" ? elementFactory.create() : null;
        },
        /** mock document.createElement()
          * @function
          * @instance
          * @memberof module:mockbot-document
          * @returns {external:mockbot-element}
          * @example <caption>usage</caption>
          * var el = document.createElement("id");
        */
        createElement: function createElement(id) {
            return elementFactory.create();
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
 */

/**
 * 
 * Factory module
 * @module mockbot-element-factory
 */

/** 
* Factory method 
* It takes one spec parameter that must be an object with named parameters
* @param {Object} options Named parameters object
* @returns {module:mockbot-element}
* @example <caption>Usage example</caption>
* var factory = require("mockbot-element");
* var obj = factory.create({});
*/

module.exports.create = function (spec) {
    spec = spec || {};
    // private 
    return {
        /** mock element.setAttribute
          * @function
          * @instance
          * @param {string} name attribute name
          * @param {string} value attribute value
          * @memberof module:mockbot-element
          * @example <caption>usage</caption>
          * el.setAttribute("width");
        */
        setAttribute: function setAttribute(name, value) {},

        /** mock element.getAttribute
          * @function
          * @instance
          * @param {Object} options Named parameters object
          * @memberof module:mockbot-element
          * @example <caption>usage</caption>
          * el.setAttribute("width");
        */
        getAttribute: function getAttribute(name) {
            return {};
        },
        /** mock element.cloneNode
          * @function
          * @instance
          * @param {boolean} deep If true, clone children as well
          * @memberof module:mockbot-element
          * @returns {module:mockbot-element}
          * @example <caption>usage</caption>
          * el.setAttribute("width");
        */
        cloneNode: function cloneNode(deep) {
            return Object.create(this, {});
        }
    };
};

},{}]},{},[1])(1)
});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});