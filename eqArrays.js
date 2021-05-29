const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
};

const eqArrays = function(a, b) {

  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(a[i]) && (eqArrays(a[i], b[i]) === false)) {
      return false;
    }
    if (!(Array.isArray(a[i])) && a[i] !== b[i]) { 
      return false;
    }
  } 
  return true;
};


console.log(assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true));
console.log(assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false));
console.log(assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false));