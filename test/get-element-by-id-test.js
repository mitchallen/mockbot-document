/**
    Module: @mitchallen/mockbot-document
      Test: get-element-by-id-test
    Author: Mitch Allen
*/

"use strict";

var request = require('supertest'),
    should = require('should'),
    modulePath = "../modules/index";

describe('getElementById', () => {

    var _factory = null;

    before( done => {
        // Call before all tests
        done();
    });

    after( done => {
        // Call after all tests
        done();
    });

    beforeEach( done => {
        // Call before each test
        delete require.cache[require.resolve(modulePath)];
        _factory = require(modulePath);
        global.document = _factory.create();
        done();
    });

    afterEach( done => {
        // Call after each test
        delete global.document;
        done();
    });


    it('should exist', done => {
        should.exist(document.getElementById);
        done();
    })

    it('with no elements should return null', done => {
        var result = document.getElementById('foo');
        should.not.exist(result);
        done();
    })

   it('for non-existant id should return null', done => {
        var tagName = "div",
            id = 'alpha';   // must have at least one other item 
        document.mockElement( { tagName: tagName, id: id } );
        var result = document.getElementById('foo');
        should.not.exist(result);
        done();
    })

    it('for mocked element should return object', done => {
        var tagName = "div",
            id = 'alpha'; 
        document.mockElement( { tagName: tagName, id: id } );
        var result = document.getElementById(id);
        should.exist(result);
        done();
    })
});
