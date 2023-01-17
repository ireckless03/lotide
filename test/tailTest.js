const tail = require('../tail');
const assert = require('chai').assert;

it("1. returns ['Lighthouse','Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
  assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ['Lighthouse','Labs']); 
});

it("2. returns ['12','5'] for ['2','12','5']", () => {
  assert.deepEqual(tail(["2", "12", "5"]), ['12','5']); 
});

it("3. returns ['Like','Sour','Candy'] for ['I', 'Like', 'Sour', 'Candy']", () => { assert.deepEqual(tail(['I', 'Like', 'Sour', 'Candy']), ['Like','Sour',"Candy"]); 
});


