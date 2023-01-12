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

const result1 = countLetters(lettersToCount, {"a": true,"b": true,"i": true,"c": true,"p": true, "z": true})

assertEqual(result1["a"], 2);
assertEqual(result1["b"], 1);
assertEqual(result1["i"], 4);
assertEqual(result1["p"], 1);
assertEqual(result1["z"], undefined);
