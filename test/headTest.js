// TEST CODE
const assert = require('chai').assert;
const head   = require('../head');

describe("Returning the first element in the array", () => {
  it("returns 1 for [1, 6, 7]", () => {
    assert.strictEqual(head([1,6,7]), 1);
  });
});

it("returns '5' for ['5']", () => {
  assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); 
});

it("returns '5' for ['5']", () => {
  assert.strictEqual(head(["Long", "Days", "Ahead"]), "long"); 
});


