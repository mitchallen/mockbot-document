/**
    Module: @mitchallen/mockbot-document
      Test: get-elements-by-tagname-test
    Author: Mitch Allen
*/

"use strict";

var request = require('supertest'),
    should = require('should'),
    modulePath = "../modules/index";

describe('getElementsByTagName', () => {

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
        should.exist(document.getElementsByTagName);
        done();
    })

    it('with no elements should return null', done => {
        var result = document.getElementsByTagName('foo');
        should.not.exist(result);
        done();
    })

   it('for non-existant id should return null', done => {
        var tagName = "div",
            id = 'alpha';   // must have at least one other item 
        document.mockElement( { tagName: tagName, id: id } );
        var result = document.getElementsByTagName('foo');
        should.not.exist(result);
        done();
    })

    it('for mocked element should return array', done => {
        var tagName = "div",
            id = 'alpha'; 
        document.mockElement( { tagName: tagName, id: id } );
        var result = document.getElementsByTagName(tagName);
        should.exist(result);
        result.should.be.instanceOf(Array);
        result.should.have.lengthOf(1);
        done();
    })

    it('for mocked element should return matching array element', done => {
        var tagName = "div",
            id = 'alpha'; 
        document.mockElement( { tagName: tagName, id: id } );
        var result = document.getElementsByTagName(tagName);
        should.exist(result);
        should.exist(result[0]);
        var el = result[0];
        el.tagName.should.eql(tagName.toUpperCase());
        el.id.should.eql(id);
        done();
    })

    it('should return multiple elements', done => {
        var tagName = "div",
            id = ['alpha', 'beta']; 
        id.forEach( function( i ) {
            document.mockElement( { tagName: tagName, id: i } );
        });
        var result = document.getElementsByTagName(tagName);
        should.exist(result);
        result.should.have.lengthOf(2);
        should.exist(result[0]);
        should.exist(result[1]);
        result.forEach( function( el, ix ) {
            el.tagName.should.eql(tagName.toUpperCase());
            el.id.should.eql(id[ix]);
        });
        done();
    })
});
