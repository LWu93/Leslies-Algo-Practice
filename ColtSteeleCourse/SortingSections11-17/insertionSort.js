//Begin looping through the 2nd ele of your arr if it exists
//compare the second ele with the first one and sort in order, swapping if necessary.
//continue looping through the array and if its not in sorted position,
//you iterate through the front array and swap the element to the correct place
//repeat until array is sorted aka end of the loop

const insertionSort = arr => {
  const swap = (arr, a, b) => {
    [arr[a], arr[b]] = [arr[b], arr[a]]
  }

  for (let i = 1; i < arr.length; i++) {
    const curr = arr[i]
    for (let j = i - 1; j >= 0 && arr[j] > curr; j--) {
      arr[j+1] = arr[j]
    }
    arr[j+1] = curr
  }

  return arr;
}

insertionSort([3, 1, 7, 25, 15, 98, 46])
insertionSort([5, 2, 6, 19, 23, 15, 24, 1, 3])

//Time Complexity - O(n^2) worse case is we full go through the for and while loop
//Space Complexity - O(1) swapping inplace
