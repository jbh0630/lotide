const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
};

// Primitives As Values (Implementation)
const eqObjects1 = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  let boolean = false;
  if (object1Keys.length === object2Keys.length) {
    for (const o of Object.keys(object1)) {
      if (object1[o] === object2[o]) {
        boolean = true;
      }
    }
  } 
  return boolean;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertEqual(eqObjects1(ab, ba), true)); 

const abc = { a: "1", b: "2", c: "3" };
console.log(assertEqual(eqObjects1(ab, abc), false)); 


// Arrays As Values (Tests)
const eqObjects2 = function(object1, object2) {
  if(!Array.isArray(object1) && !Array.isArray(object2)) {
    const object1Keys = Object.keys(object1);
    const object2Keys = Object.keys(object2);
    let boolean = false;
    if (object1Keys.length === object2Keys.length) {
      for (const o of Object.keys(object1)) {
        if (object1[o].length === object2[o].length) {
          for (let i = 0; i < object1[o].length; i++) {
            if (object1[o][i] === object2[o][i]) {
              boolean = true;
            } else {
              boolean = false;
            }
          }        
        } else {
          boolean = false;
        }
      }
    } 
    return boolean;
  } else {
    eqArrays(object1, object2);
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

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertEqual(eqObjects2(cd, dc), true));

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertEqual(eqObjects2(cd, cd2), false));