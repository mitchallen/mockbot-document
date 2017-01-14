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

var elementFactory = require("mockbot-element");

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
module.exports.create = (spec) => {

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
        querySelector: function () { return null; },
        /** mock document.getElementById()
          * @function
          * @instance
          * @memberof module:mockbot-document
          * @returns {external:mockbot-element}
          * @example <caption>usage</caption>
          * var el = document.getElementById("id");
        */
        getElementById: function (id) { 
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
        createElement: function(id) {
            return elementFactory.create();
        }
    };
};
