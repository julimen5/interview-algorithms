[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

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

## Algorithms

### Searching
* Linear search

#### Usage
```JavaScript
const { search } = require('./index');
const linearSearched = search.linearSearch([5,4,3,2,1], 4);

```
