const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(actual, expected) {
  let truthCounter = 0;
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] === expected[i]) {
      truthCounter++;
      if (truthCounter === 3) {
        return true;
      }
    } else {
      return false;
    }
  }
};


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// eqArrays([1, 2, 3], [1, 2, 3]) // => true
// eqArrays([1, 2, 3], [3, 2, 1]) // => false

// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false