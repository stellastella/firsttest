'use strict';
var chai = require('chai');
var expect = chai.expect;

var myApp = require('../app/getPrimes.js');

 describe('prime number within a value: ', function () {

    describe('Return the prime numbers in an array [getPrimes]', function () {

      it('should return [2,3,5,7,11] for [12]', function () {
        expect(myApp.getPrimes([12])).to.eql([2,3,5,7,11]);
      });
 it('should return [] for [1]', function () {
        expect(myApp.getPrimes([])).to.eql([]);
      });

       it('should return [2] for [2]', function () {
        expect(myApp.getPrimes([2])).to.eql([2]);
      });

    });
  });