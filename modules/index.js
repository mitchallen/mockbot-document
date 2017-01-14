/**
    Module: @mitchallen/mockbot-document
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint esversion: 6 */

"use strict";

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
 * var factory = require("@mitchallen/mockbot-document");
 * var obj = factory.create({});
 */
module.exports.create = (spec) => {
    if(!spec) {
        return null;
    }
    // private 
    let _package = "@mitchallen/mockbot-document";
    return {
        // public
        /** Returns the package name
          * @function
          * @instance
          * @memberof module:mockbot-document
        */
        package: () => _package,
        /** Health check
          * @function
          * @instance
          * @memberof module:mockbot-document
          * @example <caption>Health check</caption>
          * obj.health.should.eql("OK");
        */
        health: () => "OK"
    };
};
