const linearSearch = require('./linearSearch');
const binarySearch = require('./binarySearch');
const jumpSearch = require("./jumpSearch");

module.exports = {
  ...linearSearch,
  ...binarySearch,
  ...jumpSearch,
};
