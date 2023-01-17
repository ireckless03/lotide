//test code
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

middle([1]); // []
middle([11,43]); // []
middle([11,64,35]); // [64]
middle([11,43,35,52,64,]); // [35]
middle([11,43,35,52,64,78]);// [35, 52]