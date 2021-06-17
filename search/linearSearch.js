/**
 * Linear sort is rarely used due to it's inefficiency.
 * The algorithm consists in loop through the given array and
 * if the number is founded return the current index inside the loop
 * if not return -1
 * Time Complexity = O(n)
 * @param array
 * @param number
 * @returns {number}
 */
const linearSearch = (array, number) => {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === number) return i;
  }
  return -1;
};

module.exports = {
  linearSearch,
};
