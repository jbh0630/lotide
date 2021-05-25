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
    return boolean;
  } else {
    return boolean;
  }
};

console.log(eqArrays([1, 2, 3], [1, 2, 3]));