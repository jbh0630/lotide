const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe ('#letterPositions', () => {
  it ('returns [1] for ("hello").e', () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });
  it ('returns [3, 5, 15, 18] for ("lighthouse in the house").h', () => {
    assert.deepEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);
  });
  it ('returns [9, 17, 18] for ("lighthouse in the house").h', () => {
    assert.deepEqual(letterPositions("mac book pro by apple").p, [9, 17, 18]);
  });
});
