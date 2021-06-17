const search = require('../index');

describe('Testing search algorithms', () => {
  it('Should be found by linearSearch', () => {
    expect(search.linearSearch([54, 312, 311, 4501, 1203], 311)).toBe(2);
    expect(search.linearSearch([54, 312, 311, 4501, 1203], 1000)).toBe(-1);
  });
});
