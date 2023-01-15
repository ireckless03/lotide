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

const without = function(original, itemsToRemove) {
  let withoutArray = [];
  for (i = 0; i < original.length; i++) {
    if (itemsToRemove.includes(original[i]) === false) {
      withoutArray.push(original[i]);
    }
  }
  return withoutArray;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["hello"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


