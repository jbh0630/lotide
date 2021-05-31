const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it('returns "ight" for "light"', () => {
    assert.deepEqual(tail('light'), 'ight');
  });
  it('returns "onday" for "monday"', () => {
    assert.deepEqual(tail('monday'), 'onday');
  });
  it('returns "ac" for "mac"', () => {
    assert.deepEqual(tail('mac'), 'ac');
  });
});