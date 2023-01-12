const eqArrays = function(actual, expected) {
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item))
  }
  return results;
}
const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
const results2 = map(words, (word) => word[4]);
const results3 = map(words, (word) => word[0] + "o" + word[1]);

console.log(results1);

// TEST CODE
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(results2, [
  "n",
  "r",
  undefined,
  "r",
  undefined,
]);
assertArraysEqual(results3, ["gor", "coo", "too", "moa", "too"]);
