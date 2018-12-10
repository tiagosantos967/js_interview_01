const assert = require('assert');
const expect = require('chai').expect;
const should = require('chai').should();

const strangeObject = require('../src/strange-object.js');

/*
  Do not change this file!
*/

it('should print \'Hello\'', function(){
    expect(strangeObject.value).to.be.equal('Hello');
});

it('should print \'World\'', function(){
    expect(strangeObject.value()).to.be.equal('World');
});
