/**
     * No validation is being done. Asumming it's an array of numbers
     * The idea behind this algorithms is to compare each number with the next of the array
     * and swap it if the condition is true. It's the same idea as the selection algorithm.
     * It makes it inefficent for large lists, but outperform more advanced algorithms
     * in small lists.
     * Time complex = O(n^2) Best is o(n) when it's lineal
     * Stable = yes
     * @returns Array of sorted numbers
     */
const bubbleSort = (array) => {
  const sorted = array;
  for (let i = 0; i < sorted.length; i++) {
    for (let j = 0; j < sorted.length; j++) {
      if (sorted[j] > sorted[j + 1]) {
        // swap
        const tempValue = sorted[j];
        sorted[j] = sorted[j + 1];
        sorted[j + 1] = tempValue;
      }
    }
  }
  return sorted;
};
module.exports = {
  bubbleSort,
};
