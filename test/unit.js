/*
 * Unit Tests
 *
 */

// Dependencies
var helpers = require('../app/lib.js');
var assert = require('assert');

// Holder for Tests
var unit = {};


// assert that multiplier funcion will return a number
unit['helpers.multiplier should return a number'] = function(done){
  var val = helpers.multiplier(1,4);
  assert.equal(typeof(val), 'number');
  done();
};

// assert that the multiplier will return error when invalid parameters are passed
unit['helpers.multiplier should return The passed parameters and it should be numerical'] = function(done){
  var val = helpers.multiplier('e', '3');
  assert.equal(val, 'The passed parameters but be numerical');
  done();
}

// assert that the multiplier returns valid answer
unit['helpers.multiplier should return 6'] = function(done){
  var val = helpers.multiplier(8,3);
  assert.equal(val, 6);
  done();
}


// assert that the multiplier returns valid answer
unit['helpers.multiplier should return 1'] = function(done){
  var val = helpers.multiplier(1,1);
  assert.equal(val, 1);
  done();
}

// assert that the palindrome returns valid answer
unit['helpers.palindrome should return Nenonen'] = function(done){
  var val = helpers.palindrome('Nenonen');
  assert.equal(val, true);
  done();
}

// assert that the palindrome returns valid answer
unit['helpers.palindrome should return Anna'] = function(done){
  var val = helpers.palindrome('Anna');
  assert.equal(val, true);
  done();
}


// assert that the palindrome returns valid answer
unit['helpers.palindrome should return Anna'] = function(done){
  var val = helpers.palindrome('Hello');
  assert.equal(val, false);
  done();
}

// Export the tests to the runner
module.exports = unit;
