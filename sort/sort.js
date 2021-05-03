const selSort = require('./selectionSort');
const bubSort = require('./bubbleSort');
const inSort = require('./insertionSort');

const sort = (arr) => {
  const array = arr;
  return {
    ...selSort(array),
    ...bubSort(array),
    ...inSort(array),
  };
};

module.exports = sort;
