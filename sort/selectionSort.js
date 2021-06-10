/**
     * We are supposing that we receive an array of numbers.
     * No validation is done.
     * This method is not the orginal, it's not an in-place algorithms
     * Just a new way to do it using functional programing.
     * @returns Array of sorted numbers
     */
const selectionNoPlaceSort = (array) => {
  const sorted = array;
  array.forEach((element, i) => {
    const tempArray = sorted.slice(i + 1, sorted.length + 1);
    let minPosition = i;
    // this delta represents how much we are moving from the original array (sorted)
    const delta = sorted.length - tempArray.length;
    tempArray.forEach((e, j) => {
      if (e < sorted[minPosition]) {
        minPosition = delta + j;
      }
    });
    if (minPosition !== i) {
      const tempValue = sorted[i];
      sorted[i] = sorted[minPosition];
      sorted[minPosition] = tempValue;
    }
  });
  return sorted;
};

/**
   * No validation is being done. Asuming it's an array of numbers
   * selection sort is an in-place comparison sorting algorithm.
   * It's inefficient for large lists.
   * It's used when the aux memory is limited.
   * How it works? The algorithm divides the input in two part: the sorted and the unsorted
   * it takes the first element of the unsorted part and compares it with all the elements
   * one by one finding the smallest, then it swaps the position between the first element
   * and the smallest.
   * One of the best things about the sorting algorithm is that it makes the less amount of swaps
   * Space complexity = O(n)
   * Time Complexity = O(n^2)
   * Stable = No
   * @returns Array of sorted numbers
   */
const selectionSort = (array, order) => {
  const sorted = array;
  for (let i = 0; i < sorted.length - 1; i++) {
    let position = i;
    for (let j = i + 1; j < array.length; j++) {
      if (order === 'asc' && sorted[j] < sorted[position]) {
        position = j;
      }
      if (order === 'desc' && sorted[j] > sorted[position]) position = j;
    }
    if (position !== i) {
      const tempValue = sorted[i];
      sorted[i] = sorted[position];
      sorted[position] = tempValue;
    }
  }
  return sorted;
};

module.exports = {
  selectionSort,
  selectionNoPlaceSort,
};
