const merge = (left, right) => {
  const result = [];
  while (left.length && right.length) {
    result.push(left[0] < right[0] ? left.shift() : right.shift());
  }
  return [...result, ...left, ...right];
};

const mergeSort = (array) => {
  if (array.length === 1) {
    return array;
  }
  const middle = Math.floor(array.length / 2);
  const leftArr = array.slice(0, middle);
  const rightArr = array.slice(middle);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
};

module.exports = { mergeSort };
