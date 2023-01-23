const findKeyByValue = function(shows, title) {
  for (let genre of Object.keys(shows)) {
    if (shows[genre] === title) {
      return genre;
    }
  }
};

module.exports = findKeyByValue;