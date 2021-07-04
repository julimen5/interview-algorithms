/**
 * Search a sorted array by repeatedly dividing the search interval in half.
 * Begin with an interval covering the whole array.
 * If the searched value of the search key is less than the item n the middle of the interval
 * use the lowest half, if not use the top half.
 * @param arr
 * @param x
 * Time complexity = O(1) best case - O(log n) worst case (it's gonna increase during the recursion)
 *
 */
const binarySearch = (arr, x) => {
  // Let's assume the arr is already sorted.
  if (arr.length === 1) {
    return arr[0] === x ? x : -1;
  }
  const mid = Math.floor(arr.length / 2);
  if (arr[mid] === x) return x;
  if (arr[mid] > x) return binarySearch(arr.slice(0, mid), x);
  return binarySearch(arr.slice(mid, arr.length), x);
};

module.exports = {
  binarySearch,
};
