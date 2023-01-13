const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKey = (object, callBack) => {
  for (let keys of Object.keys(object)) {
    if (callBack(object[keys])) {
      return keys;
    }
  }
};



const testObject = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};


assertEqual(findKey(testObject, x => x.stars === 2), "noma");
assertEqual(findKey(testObject, x => x.stars === 3), "Akaleri");
assertEqual(findKey(testObject, x => x.stars === 1), "Blue Hill");