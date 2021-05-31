const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  const eqArrayResult = eqArrays(actual, expected);
  if (eqArrayResult === true) {
    return `✅✅✅ Assertion Passed: [${actual}] === [${expected}]`;
  } else {
    return `🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`;
  }
};


module.exports = assertArraysEqual;