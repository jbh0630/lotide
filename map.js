const eqArrays = function(actual, expected) {
  let boolean = false;
  if (actual.length === expected.length) {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] === expected[i]) {
        boolean = true;
      } else {
        boolean = false;
      }
    }
  }
  return boolean;
};

const assertArraysEqual = function(actual, expected) {
  const eqArrayResult = eqArrays(actual, expected);
  if (eqArrayResult === true) {
    return `✅✅✅ Assertion Passed: [${actual}] === [${expected}]`;
  } else {
    return `🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`;
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {

  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);
console.log(assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]));

console.log(assertArraysEqual(results1, [ 'c', 't', 'm', 't' ]));
console.log(assertArraysEqual(results1, [ 'a', 'g', 'c', 't', 'm', 't' ]));
console.log(assertArraysEqual(results1, [ 't', 'm', 't' ]));