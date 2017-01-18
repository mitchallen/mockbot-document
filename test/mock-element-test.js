/**
    Module: @mitchallen/mockbot-document
      Test: mock-element-test
    Author: Mitch Allen
*/

"use strict";

var request = require('supertest'),
    should = require('should'),
    modulePath = "../modules/index";

describe('mockElement', () => {

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
        should.exist(document.mockElement);
        done();
    })

    it('should create element', done => {
        var tag = "div",
            id = "m1",
            el1 = document.mockElement( { tagName: tag, id: id } );
        should.exist(el1);
        done();
    })

    it('should return element with tagName as uppercase', done => {
        var tag = "div",
            id = "m1",
            el = document.mockElement( { tagName: tag, id: id } );
        should.exist(el);
        el.tagName.should.eql(tag.toUpperCase());
        done();
    })

    it('should return element with id property', done => {
        var tag = "div",
            id = "m1",
            el = document.mockElement( { tagName: tag, id: id } );
        should.exist(el);
        el.id.should.eql(id);
        done();
    })

    it('should create element that getElementById can find', done => {
        var tag = "div",
            id = "m1",
            el1 = document.mockElement( { tagName: tag, id: id } );
        should.exist(el1);
        var el2 = document.getElementById(id);
        should.exist(el2);
        el2.tagName.should.eql(tag.toUpperCase());
        el2.id.should.eql(id);
        done();
    })

    it('should return an object that can be found by getElementsByTagName', done => {
        var tag = "div",
            id = "m1",
            el = document.mockElement( { tagName: tag, id: id } );
        should.exist(el);
        var elArray = document.getElementsByTagName(tag);
        should.exist(elArray);
        elArray.length.should.eql(1);
        elArray[0].tagName.should.eql(tag.toUpperCase());
        elArray[0].id.should.eql(id);
        done();
    })
});
