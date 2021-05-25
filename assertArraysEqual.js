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
    return assertArraysEqual(boolean, a, b);
  } else {
    return assertArraysEqual(boolean, a, b);
  }
};

const assertArraysEqual = function(boolean, a, b) {
 
    if (boolean === true) {
      return `✅✅✅ Assertion Passed: ${a} === ${b}`;
    } else {
      return `🛑🛑🛑 Assertion Failed: ${a} !== ${b}`;
    }
};



console.log(eqArrays([1, 2, 4], [1, 2, 3]));