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

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [];
        results[sentence[i]].push(i);
      }
    }
  }
  return results;
};

console.log(assertArraysEqual(letterPositions("hello").e, [1]));
console.log(assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]));
console.log(assertArraysEqual(letterPositions("mac book pro by apple").p, [9, 17, 18]));
