const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');



console.log(assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true));
console.log(assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false));
console.log(assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false));