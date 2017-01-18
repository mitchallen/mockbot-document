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
 * @param {Object} spec Named parameters object
 * @returns {module:mockbot-document}
 * @example <caption>Usage example</caption>
 * var factory = require("mockbot-document");
 * var obj = factory.create({});
 */
module.exports.create = (spec) => {

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
        mockElement: function(spec) {
            var el = elementFactory.create( spec );
            elements.push( el );
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
        querySelector: function () { return null; },

        /** Mock document.getElementById()
          * @function
          * @instance
          * @param {string} id Element id
          * @memberof module:mockbot-document
          * @returns {external:mockbot-element}
          * @example <caption>usage</caption>
          * var el = document.getElementById("id");
        */
        getElementById: function (id) { 
            var result = elements.filter( (el) => el.id === id );
            return result.length > 0 ? result[0] : null; 
        },

        /** Mock document.getElementsByTagName()
          * @function
          * @instance
          * @param {string} tagName Element tagName (div,p,a,etc.)
          * @memberof module:mockbot-document
          * @returns {Array.<external:mockbot-element>}
          * @example <caption>usage</caption>
          * var elArray = document.getElementsByTagName("div");
        */
        getElementsByTagName: function (tagName) { 
            var result = elements.filter( (el) => el.tagName === tagName.toUpperCase() );
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
        createElement: function(tagName) {
            return elementFactory.create( { tagName: tagName } );
        }
    };
};
