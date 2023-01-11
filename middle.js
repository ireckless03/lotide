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


const middle = function(array) {
  const evenIndex = Math.floor(array.length / 2) - 1;
  const oddIndex = Math.floor(array.length / 2);
  const length = array.length;
  if (length < 3) {
    console.log([]);
  } else if (array.length % 2 === 0) {
    console.log([array[evenIndex],array[evenIndex + 1]]);
  } else {
    console.log([array[oddIndex]]);
  }
};

middle([1]) // []
middle([11,43]) // []
middle([11,64,35]) // [64]
middle([11,43,35,52,64,]) // [35]
middle([11,43,35,52,64,78]) // [35, 52]