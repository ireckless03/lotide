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

const takeUntil = (array, callBack) => {
  for (let i of array) {
    if (callBack(i)) {
      array = array.slice(0, array.indexOf(i));
    }
  }
  return array;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

// console.log(results1);
// console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);
console.log("Test 1")
assertArraysEqual(takeUntil(data1, x => x < 0),[1, 2, 5, 7, 2] )
assertArraysEqual(takeUntil(data2,x => x === ','),["I've", "been", "to", "Hollywood"] )
console.log("------------------------------------")

console.log("Test 2")
assertArraysEqual(takeUntil(data1, x => x < 6),[1, 2, 5] )
assertArraysEqual(takeUntil(data2,x => x === 'been'),["I've"] )
console.log("------------------------------------")

console.log("Test 3")
assertArraysEqual(takeUntil(data1, x => x === 4),[1, 2, 5, 7, 2, -1, 2] )
assertArraysEqual(takeUntil(data2,x => x === 'Redwood'),["I've", "been", "to", "Hollywood", ",", "I've", "been", "to"] )