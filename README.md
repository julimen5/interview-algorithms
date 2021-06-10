# interview-algorithms
Another list of interest algorithms to prepare for an interview in js

## Algorithms

### Sorting
* Bubble sort
* Selection sort
    * no in place
    * common
* Insertion sort 
* Merge sort

#### Usage 

```JavaScript
const { sort } = require('./index');
const bubbleSorted = sort.bubbleSort([5,4,3,2,1]);
const selectionNoPlaceSorted = sort.selectionNoPlaceSort([5,4,3,2,1]);
const selectionSorted = sort.selectionSort([5,4,3,2,1]);
const insertionSorted = sort.insertionSort([5,4,3,2,1]);
const mergeSorted = sort.mergeSort([5,4,3,2,1]);
```