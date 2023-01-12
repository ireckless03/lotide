const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function (lettersToCount) {
  let result = {}
  let string = lettersToCount.replaceAll(" ", "")
  for (let letter of string) {
      if (result[letter]) {
        result[letter]++;
      } else {
        result[letter] = 1;
      }
    }
return result;
}

const lettersToCount = "my brain is in pain"


assertEqual((lettersToCount["a"], 2), 2);
assertEqual((lettersToCount["b"], 1), 1);
assertEqual((lettersToCount["i"], 4), 4);
assertEqual((lettersToCount["p"], 1), 1);
assertEqual((lettersToCount["z"], undefined), undefined);
