const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');




// do they have same number of keys?
// the value of each key is same as the other?
const eqObjects = function(object1, object2) {
  const objKeys1 = Object.keys(object1).sort();
  const objKeys2 = Object.keys(object2).sort();
  let objValue1 = [];
  let objValue2 = [];

  // make sure same number of keys
  if (objKeys1.length !== objKeys2.length) {
    return false;
  }
  // check if keys are the same working
  if (!eqArrays(objKeys1, objKeys2)) {
    return false;
  }

  // make sure keys are the same
  // placing each keys value in an array
  for (key in object1) {
    objValue1.push(object1[key]);
  }

  for (key in object2) {
    objValue2.push(object2[key]);
  }
  // values of keys are showing crrectly
  const sorted1 = objValue1.flatMap(num => num).sort();
  const sorted2 = objValue2.flatMap(num => num).sort();
  console.log(sorted1);
  console.log(sorted2);

  // objValue1.flatMap(x => x);
  // objValue2.flatMap(x => x)
  console.log('value 1',sorted1, ' val2',sorted2);
  console.log('pass',eqArrays(sorted1, sorted2));
};

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false

module.exports = eqObjects;



