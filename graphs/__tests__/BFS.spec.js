const { bfs } = require('../BFSGraph');

describe('Testing BFS algorithm', () => {
  it('should fail because searched value not in the graph', (done) => {
    expect(() => bfs(3, 10, [[1, 2], [2, 3], [3, 4], [4, 5]])).toThrow('Searched number must be in the graph');
    done();
  });
  it('should return one element because path is not find', (done) => {
    const result = bfs(3, 7, [[1, 2], [2, 3], [3, 4], [4, 5], [7, 8]]);
    expect(result).toHaveLength(1);
    expect(result[0]).toBe(7);
    done();
  });
  it('should return the complete path', (done) => {
    const result = bfs(3, 5, [[1, 2], [2, 3], [3, 4], [4, 5], [7, 8]]);
    expect(result).toHaveLength(3);
    done();
  });
  it('should return the complete path', (done) => {
    const result = bfs(3, 5, [[1, 2], [2, 3], [3, 4], [4, 5], [3, 5]]);
    expect(result).toHaveLength(2);
    done();
  });
});
