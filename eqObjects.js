const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual')
// do they have same number of keys?
// the value of each key is same as the other?
const eqObjects = function(object1, object2) {
  const objKeys1 = Object.keys(object1).sort();
  const objKeys2 = Object.keys(object2).sort();
  let objValue1 = [];
  let objValue2 = [];

  if (objKeys1.length !== objKeys2.length) {
    return false;
  }

  if (!eqArrays(objKeys1, objKeys2)) {
  return false;
  }

  for (key in object1) {
    objValue1.push(object1[key]);
  }

  for (key in object2) {
    objValue2.push(object2[key]);
  }

  const sorted1 = objValue1.flatMap(num => num).sort();
  const sorted2 = objValue2.flatMap(num => num).sort();

  if (!eqArrays(sorted1, sorted2)) {
    return false;
  }
  return true;
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
//We need to use that return value in combination with assertEquals to test if the function is working correctly.
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);

module.exports = eqObjects;



