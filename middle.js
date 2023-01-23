const middle = function(array) {
  const evenIndex = Math.floor(array.length / 2) - 1;
  const oddIndex = Math.floor(array.length / 2);
  const length = array.length;
  if (length < 3) {
   return [];
  } else if (array.length % 2 === 0) {
    return ([array[evenIndex],array[evenIndex + 1]]);
  } else {
    return ([array[oddIndex]]);
  }
};

module.exports = middle;