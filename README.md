# interview-algorithms
Another list of interest algorithms to prepare for an interview in js

## Algorithms

### Sorting
* Bubble sort
* Selection sort
    * no in place
    * common
* Insertion sort 

#### Usage 

```JavaScript
const { sort } = require('./index');
const sortObject = sort([4,32,5,6,1]);
const bubbleSorted = sortObject.bubbleSort();
const selectionNoPlaceSorted = sortObject.selectionNoPlaceSort();
const selectionSorted = sortObject.selectionSort();
```