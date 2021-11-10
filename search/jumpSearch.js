/**
 * The jump search algorithm allows to combine a linear search with a speed optimization. This mean that instead of going
 * 1 by 1, we will increase the step of n^1/2. As well as in binary search the array needs to be sorted.
 * @param arr
 * @param k
 * @param jump
 * Time complexyty
 */
const jumpSearch = (arr, k, jump) => {
  const length = arr.length;
  const step = Math.floor(Math.sqrt(jump));
  const position = findBlock(arr, length, step, k);
  return arr[position] === k ? position : -1;
};

const findBlock = (arr, length, jump, key) => {
  let start = 0;
  let currentJump = jump;
  // we will start by checking if the array of the minimum value between the currentJump position and the length
  // is lower than the key.
  // If that is true, means that the key is not present in the left side of the block
  // Ex:
  // [1,2,3,4,5,6] => step = 2, find 5
  // in the first iteration the step will be 2, so we will take the 2nd position of the array and compare it with the
  // key value, if its not greater it will jump to the next block, now as the step is 2 by 2, the "currentStep" will be 4
  while(arr[Math.min(currentJump, length) -1] < key) {
    start = currentJump;
    currentJump += jump;
    if (start >= length)  // the key is not in the array
      return -1
  }
  // after we finish this we now have to iterate over the block we found
  // following with the example
  while(arr[start] < key) {
    start += 1;
    console.log(start, currentJump, key);
    if(start === Math.min(currentJump, length)) // if we reached the next block or the end of the array, the target doesn't exists
      return -1
  }
  return start;

}

module.exports = {
  jumpSearch,
};
