const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

//write a function
const tail = (words) =>{
  if (words.length < 1) {
    return [];
  }
  console.log(words.slice(1));
  // return array using slice method
  return words.slice(1);
};
const words = ["Yo Yo", "Lighthouse", "Labs"];
const results = tail(words); // no need to capture the return value since we are not checking it
assertEqual(results.length, 2); // original array should still have 3 elements!
assertEqual(results[0],"Lighthouse");
assertEqual(results[1],"Labs");