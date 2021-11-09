[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.com/julimen5/interview-algorithms.svg?branch=main)](https://travis-ci.com/julimen5/interview-algorithms)
[![codecov](https://codecov.io/gh/julimen5/interview-algorithms/branch/main/graph/badge.svg?token=CVDFILSM81)](https://codecov.io/gh/julimen5/interview-algorithms)

# interview-algorithms
Another list of interest algorithms to prepare for an interview in js

## Algorithms

### Sorting
* Bubble sort
* Selection sort
* Insertion sort 
* Merge sort
* Quicksort

#### Usage 

```JavaScript

const { sort } = require('./index');
const bubbleSorted = sort.bubbleSort([5,4,3,2,1]);
const selectionSorted = sort.selectionSort([5,4,3,2,1]);
const insertionSorted = sort.insertionSort([5,4,3,2,1]);
const mergeSorted = sort.mergeSort([5,4,3,2,1]);
const quickSorted = sort.quickSort([5,4,3,2,1], 0, 4);

```

### Searching
* Linear search
* Jump search
* Binary search

#### Usage
```JavaScript
const { search } = require('./index');
const linearSearched = search.linearSearch([5,4,3,2,1], 4);
const jumpSearched = search.jumpSearch([1,2,3,4,5], 2, 1);
const jumpSearched = search.binarySearch([1,2,3,4,5], 2);
```

### Graphs
* BFS

#### Usage

```javascript
const { graph } = require('./index');
const bfs = graph.bfs(3, 7, [[1, 2], [2, 3], [3, 4], [4, 5], [7, 8]]);
```
