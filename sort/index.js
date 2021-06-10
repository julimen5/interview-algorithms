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

module.exports = sort;
