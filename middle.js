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


