// TEST CODE 
const eqArrays = require("../eqArrays");
const { assert } = require("chai");

  it("should return true for ([1, '2', 3], [1, '2', 3])", () => {
    assert.strictEqual(eqArrays([1, '2', 3], [1, '2', 3]), true);
  });

  it("should return false for ([4, 5, 3], [5, 3, 4])", () => {
    assert.strictEqual(eqArrays([4, 5, 3], [5, 3, 4]), false);
  });

  it("should return true for (['3', '2', '1'], ['3', '2', '1'])", () => {
    assert.strictEqual(eqArrays(['3', '2', '1'], ['3', '2', '1']), true);
  });

  it("should return false for (['1', '2', '3'], [1, '2', 3])", () => {
    assert.strictEqual(eqArrays(['1', '2', '3'], [1, '2', 3]), false);
  });