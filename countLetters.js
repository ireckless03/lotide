const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (input, lettersToCount) {
  let result = {}
  let string = input.replaceAll(" ", "")
  for (let letter of string) {
      if (result[letter]) {
        result[letter]++;
      } else {
        result[letter] = 1;
      }
    }
console.log("result",result)
return result;
}

const input = "my brain is in pain"

const result1 = countLetters(input, {"a": true,"b": true,"i": true,"c": true,"p": true, "z": false})

assertEqual(result1["a"], 2);
assertEqual(result1["b"], 1);
assertEqual(result1["i"], 4);
assertEqual(result1["p"], 1);
assertEqual(result1["z"], undefined);
