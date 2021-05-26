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

const without = function(source, itemsToRemove) {
   
  return source.filter(s => !itemsToRemove.includes(s));
};

const words = ["hello", "world", "lighthouse"];
console.log(assertArraysEqual(eqArrays(words, ["hello", "world", "lighthouse"])));
console.log(assertArraysEqual(eqArrays(without(words, ["lighthouse"]), ["hello", "world"])));
console.log(assertArraysEqual(eqArrays(without(words, ["world"]), ["hello", "world"])));