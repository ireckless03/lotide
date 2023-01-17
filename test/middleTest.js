//test code
const assert = require('chai').assert;
const middle = require('../middle');


it("returns [] for [1]", () => {
  assert.deepEqual(middle([1]), []);
});

it("returns [] for [1, 2]", () => {
  assert.deepEqual(middle([1, 2]), []);
});

it("returns [2] for [1, 2, 3]", () => {
  assert.deepEqual(middle([1, 2, 3]), [2]);
});

it("returns [22, 13] for [1, 22, 13, 4]", () => {
  assert.deepEqual(middle([1, 22, 13, 4]), [22, 13]);
});

it("3. returns ['Like','Sour','Candy'] for ['I', 'Like', 'Sour', 'Candy']", () => { assert.deepEqual(middle(['I', 'Like', 'Sour', 'Candy']), ['Like',"Sour"]); 
});

it("returns [22, 13] for [1, 22, 13, 4]", () => {
  assert.deepEqual(middle([1, 22, 13, 4, 123, 42]), [13, 4]);
});
