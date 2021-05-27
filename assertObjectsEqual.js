const eqObjects = function(object1, object2) {
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

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  const eqObjectResult = eqObjects(object1, object2);
  if (eqObjectResult === true) {
    return `✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`;
  }
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertObjectsEqual(ab, ba));