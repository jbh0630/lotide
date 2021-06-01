const assert = require('chai').assert;
const flatten = require('../flatten');

describe ('#flatten', () => {
  it ('returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]', () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it ('returns [1, 66, 2, 2, 46, 4, 2, 4, 3] for [1, 66, 2, [2, 46, 4], [2, 4, 3]]', () => {
    assert.deepEqual(flatten([1, 66, 2, [2, 46, 4], [2, 4, 3]]), [1, 66, 2, 2, 46, 4, 2, 4, 3]);
  });
});
