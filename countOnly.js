// function to take in collection of items and return counts for a specific subset of those items
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

module.exports = countOnly