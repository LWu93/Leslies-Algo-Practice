//you want to move the greatest ele in the arr to the last element
//you continue looping to the next ele until you're finished
const bubbleSort = (arr) => {
  //swap helper func
  const swap = (arr, a, b) => {
    [arr[a], arr[b]] = [arr[b], arr[a]]
  }

  //double for loop from the back and go through every element from the front
  //if the first element is > than the next, swap them
  //keep going until you've moved the greatest element to the back every i loop
  for (let i = arr.length; i > 0; i--) {
    //check to see if we ever make any swaps in our first for loop
    let noSwaps = true
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        swap(arr, j, j+1)
        noSwaps = false
      }
    }
    //if we make no swaps, we are done and they're sorted. simply break
    if (noSwaps) break;
  }
  return arr
}

bubbleSort([5, 2, 6, 19, 23, 15, 24]) //[2,5,6,15,19,23,24]

//Time Complexity - O(n^2) worse case is we full go through easy nested for loop
//Space Complexity - O(1) swapping inplace
