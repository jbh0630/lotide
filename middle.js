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

const middle = function(array) {
  const middleOfArray = [];
  let middleIndex = 0;
  if (array.length > 2) {
    if (array.length % 2 === 1) {
      middleIndex = Math.floor(array.length / 2);
      middleOfArray.push(array[middleIndex]);
    } else {
      middleIndex = Math.floor(array.length / 2);
      middleOfArray.push(array[middleIndex - 1]);
      middleOfArray.push(array[middleIndex]);
    }
  }
  return middleOfArray;
};

console.log(assertArraysEqual(middle([1, 2, 3]),[2]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]));
console.log(assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4, 5]));