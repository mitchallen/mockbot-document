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

    var elements = [];

    return {
       /** creates a mock element to simulate html elements
          * @function
          * @instance
          * @memberof module:mockbot-document
          * @returns {external:mockbot-element}
          * @example <caption>usage</caption>
          * document.mockElement( { id: "alpha" } );
        */
        mockElement: function(spec) {
          return elements.push(elementFactory.create( spec ));
        },
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
            for (var i = 0, len = elements.length; i < len; i++) {
                var el = elements[i];
                // var elId = el.getAttribute("id");
                var elId = el.id;
                if(elId == id) { return el; }
            }
            return null; 
        },
        /** mock document.createElement()
          * @function
          * @instance
          * @memberof module:mockbot-document
          * @returns {external:mockbot-element}
          * @example <caption>usage</caption>
          * var el = document.createElement("id");
        */
        createElement: function(type) {
            return elementFactory.create( { type: type } );
        }
    };
};
