const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const partitioning = (arr, start, end) => {
  const pivot = arr[end];
  let smallerElement = start;
  for (let i = start; i <= end - 1; i += 1) {
    if (arr[i] <= pivot) {
      swap(arr, i, smallerElement);
      smallerElement += 1;
    }
  }
  swap(arr, smallerElement, end);
  return smallerElement;
};

/**
 * Quicksort is an efficient divide and conquer sorting algorithm.
 * First we must choose a "pivot". Sometimes it's random but for this ex we will choose
 * the last element of the array
 * Then comes the "partitioning" part that consists in divide the array in two:
 * * * * To the left: the elements smaller than the pivot
 * * * * To the right: the elements larger than the pivot
 * after this, the pivot should be in the correct position.
 * Then, the last step is to repeat this process again with both sides of the array
 * The time complexity es O(nlog(n)) when the selection of pivot divides original array
 * into two nearly equal sized sub arrays.
 * Time complexity = O(nlog(n))worst O(n^2)
 */
const quickSort = (array, start, end) => {
  if (start < end) {
    const nextPivot = partitioning(array, start, end);
    quickSort(array, start, nextPivot - 1);
    quickSort(array, nextPivot + 1, end);
  }
  return array;
};

module.exports = {
  quickSort,
};
