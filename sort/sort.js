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

console.log(sort([5, 1]).insertionSort());
module.exports = sort;
