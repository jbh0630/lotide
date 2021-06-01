const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe ('#eqObjects', () => {
  it ('returns true for { a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }', () => {
    assert.deepEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });
  it ('returns false for { a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }', () => {
    assert.deepEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
  });
  it ('returns true for [1,2,[4,1, { a: [1,2], b: 4}],4], [1,2,[4,1 , { a: [1,2], b: 4}],4]', () => {
    assert.deepEqual(eqObjects([1,2,[4,1, { a: [1,2], b: 4}],4], [1,2,[4,1 , { a: [1,2], b: 4}],4]), true);
  });
});
