/**
    Module: @mitchallen/mockbot-document
      Test: smoke-test
    Author: Mitch Allen
*/

"use strict";

var request = require('supertest'),
    should = require('should'),
    modulePath = "../modules/index";

describe('module factory smoke test', () => {

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

    it('module should exist', done => {
        should.exist(_factory);
        done();
    })

    it('create method with no spec should return object', done => {
        var obj = _factory.create();
        should.exist(obj);
        done();
    });

    it('create method with spec should return object', done => {
        var obj = _factory.create({});
        should.exist(obj);
        done();
    });

    it('querySelector should be available', done => {
        should.exist(document.querySelector);
        done();
    })

    it('querySelector with no spec should return null', done => {
        var result = document.querySelector();
        should.not.exist(result);
        done();
    })

    it('getElementById should be available', done => {
        should.exist(document.getElementById);
        done();
    })

    it('getElementById with no elements should return null', done => {
        var result = document.getElementById('foo');
        should.not.exist(result);
        done();
    })

   it('getElementById for non-existant id should return null', done => {
        var tagName = "div",
            id = 'alpha';   // must have at least one other item 
        document.mockElement( { tagName: tagName, id: id } );
        var result = document.getElementById('foo');
        should.not.exist(result);
        done();
    })

    it('getElementById for existing id should return object', done => {
        var tagName = "div",
            id = 'alpha'; 
        document.mockElement( { tagName: tagName, id: id } );
        var result = document.getElementById(id);
        should.exist(result);
        done();
    })

    it('createElement should be available', done => {
        should.exist(document.createElement);
        done();
    })

    it('createElement should return object', done => {
        var result = document.createElement('div');
        should.exist(result);
        done();
    })

    it('createElement should return object with tagName as uppercase', done => {
        var tagName = "div";
        var result = document.createElement(tagName);
        should.exist(result);
        should.exist(result.tagName);
        result.tagName.should.eql(tagName.toUpperCase());
        done();
    })

    it('mockElement should create element', done => {
        var tag = "div",
            id = "m1",
            el1 = document.mockElement( { tagName: tag, id: id } );
        should.exist(el1);
        var el2 = document.getElementById(id)
        should.exist(el2);
        el2.tagName.should.eql(tag.toUpperCase());
        el2.id.should.eql(id);
        done();
    })
});
