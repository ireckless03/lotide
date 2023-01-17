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
  console.log('length',objKeys1.length);
  console.log('length',objKeys2.length);
  if (objKeys1.length !== objKeys2.length) {
    return false;
  }
  console.log('Key Lengths are same');

  // check if keys are the same working
  console.log('key1/key2',objKeys1,objKeys2);
  if (eqArrays(objKeys1, objKeys2)) {
    console.log("arrays are equal")
    ;
  } else {
    return false;
  }
  console.log('pass2');
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
  console.log('pass3');
  // objValue1.flatMap(x => x);
  // objValue2.flatMap(x => x)
  console.log('value 1',sorted1, ' val2',sorted2);
  if (!eqArrays(sorted1, sorted2)) {
    console.log('arrays nt equal');
    return false;
  }
  return true;
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
//We need to use that return value in combination with assertEquals to test if the function is working correctly.
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);
console.log('case 2 ---------------\n');
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

// eqObjects(shirtObject , longSleeveShirtObject); // => false
// assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);
// module.exports = eqObjects;



