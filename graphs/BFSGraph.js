// /**
//  * Create a node function
//  * it will return a "empty node" with the value and vertices as a set
//  * @param adj
//  * @param v
//  * @returns {{vertices: Set<any>, father: null, visited: boolean, value, order: null}}
//  */
// const node = (adj, v) => {
//   const value = v;
//   const vertices = new Set();
//   const father = null;
//   const order = null;
//   const visited = false;
//   vertices.add(adj);
//   return {
//     value,
//     visited,
//     vertices,
//     father,
//     order,
//   };
// };
//
// const searchValue = (grafo, search, path = []) => {
//   path.push(grafo[search].value);
//   if (!grafo[search].father) {
//     return path;
//   }
//   return searchValue(grafo, grafo[search].father, path);
// };
//
// /**
//  * Explain the algorithm here
//  * @param grafo
//  * @param start
//  * @param search
//  * @returns {*[]|*}
//  */
// const bfs = (grafo, start, search) => {
//   const queue = [];
//   queue.push(start);
//   start.order = 0;
//   start.visited = true;
//   while (queue.length) {
//     const current = queue.shift();
//     const adys = [...grafo[current.value].vertices];
//     adys.forEach((ady) => {
//       if (!grafo[ady].visited) {
//         grafo[ady].visited = true;
//         grafo[ady].father = current.value;
//         grafo[ady].order = current.order + 1;
//         queue.push(grafo[ady]);
//       }
//     });
//   }
//   return searchValue(grafo, search);
// };
//
// const nodes = [[1, 2], [1, 3], [2, 4], [3, 4]];
// const graph = {};
//
// nodes.forEach((n) => {
//   if (graph[n[0]]) {
//     graph[n[0]].vertices.add(n[1]);
//   } else graph[n[0]] = node(n[1], n[0]);
//   if (graph[n[1]]) {
//     graph[n[1]].vertices.add(n[0]);
//   } else graph[n[1]] = node(n[0], n[1]);
// });
//
// const p = bfs(graph, graph[1], 3);
//
// console.log(graph);
// console.log(p);

/**
 * Create a node function
 * it will return a "empty node" with the value and vertices as a set
 * @param adj
 * @param v
 * @returns {{vertices: Set<any>, father: null, visited: boolean, value, order: null}}
 */
const node = (adj, v) => {
  const value = v;
  const vertices = new Set();
  const father = null;
  const order = null;
  const visited = false;
  vertices.add(adj);
  return {
    value,
    visited,
    vertices,
    father,
    order,
  };
};

/**
 * Given an array this function will create the graph
 * If graph[0] is not in the array it will create a node
 * if exists then it will n[1] as a vertix
 * @param nodes
 * @returns {{}}
 */
const createNodes = (nodes) => {
  const graph = {};
  nodes.forEach((n) => {
    if (graph[n[0]]) {
      graph[n[0]].vertices.add(n[1]);
    } else graph[n[0]] = node(n[1], n[0]);
    if (graph[n[1]]) {
      graph[n[1]].vertices.add(n[0]);
    } else graph[n[1]] = node(n[0], n[1]);
  });
  return graph;
};

/**
 * Find the value given the bfs logic.
 * First the algo will add that value to the path array
 * If has no father means that we arrive to the last node
 * else will call recursively
 * @param graph
 * @param search
 * @param path
 * @returns {*[]|*}
 */
const searchValue = (graph, search, path = []) => {
  path.push(graph[search].value);
  if (!graph[search].father) {
    return path.reverse(); // reversing the path from father to node
  }
  return searchValue(graph, graph[search].father, path);
};

/**
 * Breadth First Search is searching algorithm to search data in a tree or graph
 * using a queue that will store all the nodes (vertices)
 * that should be visited that are the adjacent and marked as visited.
 * While a the queue is not empty we will take the vertices (adjacent)
 * of that current node and then do
 * for each adjacent check if it was visited before:
 * if not: set it as visited, the father will be that
 * current node of the queue and the order will be
 * the current order of the queue + 1
 * Once we finish the queue means we are ready to find the value we need
 * and apply the searchValue function.
 *
 * The return of this function is the path from father
 * to the searchedValue as an array of the values
 *
 * @param startNumber
 * @param search
 * @param nodes
 * @returns {*[]*}
 */
const bfs = (startNumber, search, nodes) => {
  const graph = createNodes(nodes);
  const queue = [];
  const start = graph[startNumber];
  queue.push(start);
  start.order = 0;
  start.visited = true;
  while (queue.length) {
    const current = queue.shift();
    const adys = [...graph[current.value].vertices];
    adys.forEach((ady) => {
      if (!graph[ady].visited) {
        graph[ady].visited = true;
        graph[ady].father = current.value;
        graph[ady].order = current.order + 1;
        queue.push(graph[ady]);
      }
    });
  }
  if (!graph[search]) {
    throw new Error('Searched number must be in the graph');
  }
  return searchValue(graph, search);
};

module.exports = {
  bfs,
};
