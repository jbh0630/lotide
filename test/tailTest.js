const tail = require('../tail');
const assertEqual = require('../assertEqual');

console.log(assertEqual(tail('light'), 'ight'));
console.log(assertEqual(tail('monday'), 'onday'));
console.log(assertEqual(tail('mac'), 'ac'));
