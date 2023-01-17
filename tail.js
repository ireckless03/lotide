const tail = (words) => {
  if (words.length < 1) {
    return [];
  }
  console.log(words.slice(1));
  return words.slice(1);
};

module.exports = tail;
