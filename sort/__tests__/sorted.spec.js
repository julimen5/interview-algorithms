const sorted = require('../index.js');

describe('Testing sort', () => {
  it('Should return ordered by selection sort', (done) => {
    expect(sorted.selectionSort([6, 3, 4, 2, 1, 5], 'asc')).toStrictEqual([1, 2, 3, 4, 5, 6]);
    expect(sorted.selectionSort([6, 3, 4, 2, 1, 5, 1, 4, 5], 'asc')).toStrictEqual([
      1, 1, 2, 3, 4,
      4, 5, 5, 6,
    ]);
    expect(sorted.selectionSort([6, 3, 4, 2, 1, 5], 'desc')).toStrictEqual([6, 5, 4, 3, 2, 1]);
    done();
  });
  it('Should return ordered by bubleSort', () => {
    expect(sorted.bubbleSort([6, 3, 4, 2, 1, 5])).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });

  it('Should return ordered by insertionSort', () => {
    expect(sorted.insertionSort([5, 1, 4, 2, 3, 7, 6])).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it('Should return ordered by mergeSort', () => {
    expect(sorted.mergeSort([5, 3, 2, 1, 4])).toStrictEqual([1, 2, 3, 4, 5]);
  });

  it('Should return ordered by quickSort', () => {
    const arr = [5,4,3,2,1];
    expect(sorted.quickSort(arr, 0, arr.length - 1)).toStrictEqual([1, 2, 3, 4, 5]);
  });
});
