const assertEqual = require('./assertEqual')
const eqArrays = require('./eqArrays')

// do they have same number of keys?
// the value of each key is same as the other?
const eqObjects = function(object1, object2) {
  const objKeys1 = Object.keys(object1).sort();
  const objKeys2 = Object.keys(object2).sort();
  let objValue1 = [];
  let objValue2 = [];
  console.log('objkeys',objKeys1);
  console.log('objkeys',objKeys2);

  // make sure same number of keys
  if (objKeys1.length !== objKeys2.length) {
    return false
  }
  // check if keys are the same
  console.log('keys for both',objKeys1,objKeys2)
  eqArrays(objKeys1, objKeys2)

  for (let key of objKeys1) {
    if (objKeys1[key] !== objKeys2[key])
    console.log('objKey1[name')
  }
  // make sure keys are the same
  // placing each keys value in an array
  for (key in object1) {
    objValue1.push(object1[key])
  }

  for (key in object2) {
    objValue2.push(object2[key])
  }
  // values of keys are showing crrectly
  objValue1.sort()
  objValue2.sort()
  eqArrays(objValue1, objValue2)
  // for (key in object1) {
  //   //each key showing colour and size
  //   objArr1.push(key)
  //   console.log(key)
  //   keys1++
  // }

  // object2.forEach(function(element, index) { 
  //   console.log('element:',element,'index',index)
  // })

  // if true check if keys are the same
  // looping thru the object keys, check the value of each key and make sure its the same value
  // if so return true
  // if not exit and return false
};


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
//assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

//const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
//eqObjects(shirtObject , longSleeveShirtObject); // => false
//assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);


