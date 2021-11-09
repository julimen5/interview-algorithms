const search = require('../index');

describe('Testing search algorithms', () => {
  it('Should be found by linearSearch', (done) => {
    expect(search.linearSearch([54, 312, 311, 4501, 1203], 311)).toBe(2);
    expect(search.linearSearch([54, 312, 311, 4501, 1203], 1000)).toBe(-1);
    done();
  });
  it('should be found by binarySearch', (done) => {
    expect(search.binarySearch([1, 2, 3, 4, 5], 1)).toBe(1);
    expect(search.binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
    expect(search.binarySearch([1, 2, 3, 4, 5, 6], 7)).toBe(-1);
    done();
  });
  it('should be founded by jumpSearch', function () {
    expect(search.jumpSearch([1, 2, 3, 4, 5], 1, 4)).toBe(0);
    expect(search.jumpSearch([1, 2, 3, 4, 5], 7,2)).toBe(-1);
    expect(search.jumpSearch([1, 2, 3, 4, 5, 6], 4,1)).toBe(3);
  });
});
