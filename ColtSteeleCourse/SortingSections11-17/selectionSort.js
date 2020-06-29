//loop through the array and keep track of the first element's idx to use as a min val benchmark
//compare with all the items in the rest of the array
//if you find a smaller val, set that equal to your benchmark min
//after you finish looping, if the min val is not the idx of the first ele you started with, swap them
//continue looping until array is sorted

const selectionSort = arr => {
  //helper func
  const swap = (arr, a, b) => {
    [arr[a], arr[b]] = [arr[b], arr[a]]
  }

  for (let i = 0; i < arr.length; i++) {
    let minIdx = i
    for (let j = i + 1; j < arr.length; j++) {
      //if the 2nd ele in the loop is less than the first ele you loop through, set that equal to minIdx
      if (arr[j] < arr[minIdx]) {
        minIdx = j
      }
    }
    //if minIdx changed, swap the ele's
    if (minIdx !== i) swap(arr, minIdx, i)
  }

  return arr;
}

//Time Complexity - O(n^2) worse case is we full go through every for loop
//Space Complexity - O(1) swapping inplace
