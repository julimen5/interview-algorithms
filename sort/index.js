const selSort = require('./selectionSort');
const bubSort = require('./bubbleSort');
const inSort = require('./insertionSort');
const mergeSort = require('./mergeSort');
const quickSort = require('./quickSort');

const sort = {
  ...selSort,
  ...bubSort,
  ...inSort,
  ...mergeSort,
  ...quickSort,
};

module.exports = sort;
