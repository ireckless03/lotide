// TEST CODE
const assert = require('chai').assert;
const head   = require('../head');

describe("Returning the first element in the array", () => {
  it("returns 1 for [1, 6, 7]", () => {
    assert.strictEqual(head([1,6,7]), 1);
  });
});

it("returns 1 for [1, 2, 3]", () => {
  assert.strictEqual(head([1, 2, 3]), 1); 
});





