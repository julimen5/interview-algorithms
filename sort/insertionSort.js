const sort = require('./sort');

const inSort = (array) => ({
  /**
     * This is an stable sorting algorithm that consist in compare the key number
     * with the PREVIOUS numbers. If the previous numbers are greater (or smaller)
     * than the key swap it.
     * Space complexity = O(1)
     * Time complexity = O(n^2) - O(n) for best
     * Stable = yes
     * Best case =  already sorted
     * Worst case = reversely sorted
     * Stable = yes
     * Sorting in place = yes
     */
  insertionSort: () => {
    const sorted = array;
    for (let i = 1; i < sorted.length; i++) {
      let position = i;
      for (let j = i; j >= 0; j--) {
        if (sorted[j] > sorted[i]) {
          position = j;
        }
      }
      if (position !== i) {
        const tempValue = sorted[i];
        sorted[i] = sorted[position];
        sorted[position] = tempValue;
      }
    }
    return sorted;
  },
});

module.exports = inSort;
