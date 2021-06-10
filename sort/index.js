const selSort = require('./selectionSort');
const bubSort = require('./bubbleSort');
const inSort = require('./insertionSort');
const mergeSort = require('./mergeSort');

const sort = {
  ...selSort,
  ...bubSort,
  ...inSort,
  ...mergeSort,
};

console.log(mergeSort.mergeSort([5, 4, 3, 2, 1]));
module.exports = sort;
