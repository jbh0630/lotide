const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
};

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
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
console.log(assertEqual(eqArrays([1, 2, 4], [1, 2, 3]), true));
console.log(assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, 4]), true));
console.log(assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), true));
console.log(assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false));