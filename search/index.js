const linearSearch = require('./linearSearch');
const binarySearch = require('./binarySearch');

module.exports = {
  ...linearSearch,
  ...binarySearch,
};
