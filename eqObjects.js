// Primitives As Values (Implementation)
// const eqObjects1 = function(object1, object2) {
//   const object1Keys = Object.keys(object1);
//   const object2Keys = Object.keys(object2);
//   let boolean = false;
//   if (object1Keys.length === object2Keys.length) {
//     for (const o of Object.keys(object1)) {
//       if (object1[o] === object2[o]) {
//         boolean = true;
//       }
//     }
//   } 
//   return boolean;
// };

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(assertEqual(eqObjects1(ab, ba), true)); 

// const abc = { a: "1", b: "2", c: "3" };
// console.log(assertEqual(eqObjects1(ab, abc), false)); 


// Arrays As Values (Tests)
// const eqObjects2 = function(object1, object2) {
//   if(!Array.isArray(object1) && !Array.isArray(object2)) {
//     const object1Keys = Object.keys(object1);
//     const object2Keys = Object.keys(object2);
//     let boolean = false;
//     if (object1Keys.length === object2Keys.length) {
//       for (const o of Object.keys(object1)) {
//         if (object1[o].length === object2[o].length) {
//           for (let i = 0; i < object1[o].length; i++) {
//             if (object1[o][i] === object2[o][i]) {
//               boolean = true;
//             } else {
//               boolean = false;
//             }
//           }        
//         } else {
//           boolean = false;
//         }
//       }
//     } 
//     return boolean;
//   } else {
//     eqArrays(object1, object2);
//   }
// };

const eqObjects2 = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  if (object1Keys.length != object2Keys.length) {
    return false;
  }

  return object1Keys.every(key => {
    const obj1Val = object1[key];
    const obj2Val = object2[key];

    if (typeof(obj1Val) === 'object' && typeof(obj2Val) === 'object') {
      return eqObjects2(obj1Val, obj2Val);
    } else {
      return obj1Val === obj2Val;
    }
  });

};
module.exports = eqObjects2;