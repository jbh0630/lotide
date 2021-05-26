const eqArrays = function(a, b) {
  let boolean = false;
  if (a.length === b.length) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] === b[i]) {
        boolean = true;
      } else {
        boolean = false;
      }
    }
  } 
  return boolean;
};

const assertArraysEqual = function(bool) {
 
    if (bool === true) {
      return `✅✅✅ Assertion Passed`;
    } else {
      return `🛑🛑🛑 Assertion Failed`;
    }
};

const flatten = function(array) {
  var flattened = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        flattened.push(array[i][j]);
      }
    } else {
      flattened.push(array[i]);
    }
  }
  return flattened;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log(assertArraysEqual(eqArrays(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])));
console.log(assertArraysEqual(eqArrays(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, [5, 6]])));
console.log(assertArraysEqual(eqArrays(flatten([1, 66, 2, [2, 46, 4], [2, 4, 3]]), [1, 66, 2, 2, 46, 4, 2, 4, 3])));
console.log(assertArraysEqual(eqArrays(flatten([1, 66, 2, [2, 46, 4], [2, 4, 3]]), [1, 66, 2, 2, 46, 4, 2, 4, 3, 2])));