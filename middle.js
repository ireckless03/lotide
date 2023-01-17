const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');



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

module.exports = middle;