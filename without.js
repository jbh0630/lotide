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
    return `🛑🛑🛑 Assertion Failed: [${actual} !== ${expected}]`;
  }
};

const without = function(source, itemsToRemove) {
   
  const longArray = source.length > itemsToRemove.length ? source.length : itemsToRemove;
  const output = [];
  for (let i = 0; i < longArray; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] !== itemsToRemove[j]) {
        output.push(source[i]);
      }
    }
  }
  return output;
};
// source.filter(s => !itemsToRemove.includes(s))

const words = ["hello", "world", "lighthouse"];
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));
console.log(assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]));
console.log(assertArraysEqual(without(words, ["world"]), ["hello", "world"]));
console.log(assertArraysEqual(without(words, ["world"]), ["hello", "lighthouse"]));
console.log(assertArraysEqual(without(words, ["hello"]), ["world", "lighthouse"]));