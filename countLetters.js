const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
};

const countLetters = function(strings) {
  const newStrings = strings.split(' ').join('');
  const results = {};
  for (const string of newStrings) {
    if(results[string]) {
      results[string] += 1;
    } else {
      results[string] = 1;
    }
  }
  return results;
};


const expectedResults = countLetters("lighthouse in the house");

console.log(assertEqual(expectedResults["l"], 1));
console.log(assertEqual(expectedResults["i"], 2));
console.log(assertEqual(expectedResults["g"], 1));
console.log(assertEqual(expectedResults["h"], 4));
console.log(assertEqual(expectedResults["t"], 2));
console.log(assertEqual(expectedResults["o"], 2));
console.log(assertEqual(expectedResults["u"], 2));
console.log(assertEqual(expectedResults["s"], 2));
console.log(assertEqual(expectedResults["e"], 3));
console.log(assertEqual(expectedResults["n"], 1));