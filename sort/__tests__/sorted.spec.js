const sorted = require('../sort');

describe('Testing sort', () => {
  it('Should return ordered by selection sort', (done) => {
    expect(sorted([6, 3, 4, 2, 1, 5]).selectionSort('asc')).toStrictEqual([1, 2, 3, 4, 5, 6]);
    expect(sorted([6, 3, 4, 2, 1, 5, 1, 4, 5]).selectionSort('asc')).toStrictEqual([
      1, 1, 2, 3, 4,
      4, 5, 5, 6,
    ]);
    expect(sorted([6, 3, 4, 2, 1, 5]).selectionSort('desc')).toStrictEqual([6, 5, 4, 3, 2, 1]);
    done();
  });
  it('Should return ordered by selection no inplace sort', (done) => {
    expect(sorted([6, 3, 4, 2, 1, 5]).selectionNoPlaceSort()).toStrictEqual([1, 2, 3, 4, 5, 6]);
    expect(sorted([6, 3, 4, 2, 1, 5, 1, 4, 5]).selectionNoPlaceSort()).toStrictEqual([
      1, 1, 2, 3, 4,
      4, 5, 5, 6,
    ]);
    done();
  });
  it('Should return oreder by bubleSort', () => {
    expect(sorted([6, 3, 4, 2, 1, 5]).bubbleSort()).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });

  it('Should return oreder by insertionSort', () => {
    expect(sorted([5, 1, 4, 2, 3, 7, 6]).insertionSort()).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});
