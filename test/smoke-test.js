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

    it('getElementById for non-existant id should return null', done => {
        var result = document.getElementById('foo');
        should.not.exist(result);
        done();
    })

    it('getElementById for existing id should return object', done => {
        var id = 'alpha';
        document.mockElement( { id: id } );
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
});
