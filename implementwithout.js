const without = function(original, itemsToRemove) {
  let withoutArray = [];
  for (i = 0; i < original.length; i++) {
    if (itemsToRemove.includes(original[i]) === false) {
      withoutArray.push(original[i]);
    }
  }
  return withoutArray;
};

module.exports = without;