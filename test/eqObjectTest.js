const assert = require('chai').assert;
const eqObjects = require('../eqObjects')
const eqArrays= require('../eqArrays');
const assertObjectsEqual = require('../assertObjectsEqual')

// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject = { size: "medium", color: "red" };
eqObjects({ color: "red", size: "medium" } , { size: "medium", color: "red" })

module.exports = eqArrays;
