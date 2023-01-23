const findKey = (object, callBack) => {
  for (let keys of Object.keys(object)) {
    if (callBack(object[keys])) {
      return keys;
    }
  }
};

module.exports = findKey;