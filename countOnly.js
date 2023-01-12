// function to take in collection of items and return counts for a specific subset of those items
// it wont count everything. It will also be given an idea of which items we care about and only count those
// Items we care about are strings
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

// return an object containing counts of everything that the input object listed.

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
// loop through list of names
// check if the name is on the list, if so increase count
// const countOnly = function(allItems, itemsToCount) {
//   const results = {}
//   for (let name of allItems) {
//     console.log(name)
//   }

// }

const countOnly = function(allItems, itemsToCount) {
  const result = {};
  for (const item of allItems) {
    console.log(item);
    if (itemsToCount[item]) {
      if (result[item]) {
        result[item]++;
      } else {
        result[item] = 1;
      }
    }
  }
  console.log("result",result);
  return result;
};
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
