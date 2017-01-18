/**
    Module: @mitchallen/mockbot-document
      Test: create-element-test
    Author: Mitch Allen
*/

"use strict";

var request = require('supertest'),
    should = require('should'),
    modulePath = "../modules/index";

describe('createElement', () => {

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
        should.exist(document.createElement);
        done();
    })

    it('should return object', done => {
        var result = document.createElement('div');
        should.exist(result);
        done();
    })

    it('should return object with tagName as uppercase', done => {
        var tagName = "div";
        var result = document.createElement(tagName);
        should.exist(result);
        should.exist(result.tagName);
        result.tagName.should.eql(tagName.toUpperCase());
        done();
    })
});
