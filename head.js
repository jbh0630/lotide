const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `Assertion Passed: ${actual} === ${expected}`
  } else {
    return `Assertion Failed: ${actual} !== ${expected}`;
  }
};

const head = (array) => {
  const headOfArray = array[0];
  if (headOfArray === undefined) {
    return undefined;
  } else {
    return headOfArray;
  }
}

console.log(assertEqual(head([]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));
console.log(assertEqual(head([5,6,7]), 5));
