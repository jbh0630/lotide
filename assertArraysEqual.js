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



console.log(assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3])));