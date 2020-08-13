/*
Pancake Sort
Given an array of integers arr:

Write a function flip(arr, k) that reverses the order of the first k elements in the array arr.
Write a function pancakeSort(arr) that sorts and returns the input array. You are allowed to use only the function flip you wrote in the first step in order to make changes in the array.
Example:

input:  arr = [1, 5, 4, 3, 2]
output: [1, 2, 3, 4, 5] # to clarify, this is pancakeSort's output
Analyze the time and space complexities of your solution.

Note: it’s called pancake sort because it resembles sorting pancakes on a plate with a spatula, where you can only use the spatula to flip some of the top pancakes in the plate. To read more about the problem, see the Pancake Sorting Wikipedia page.

Constraints:

[time limit] 5000ms

[input] array.integer arr

[input] integer k

0 ≤ k
[output] array.integer

*/
//psuedocode
//write a function flip (arr,k) - ES6 swap functionality.
//we KNOW we want 5 or the largest num at the end
//Every time we find where that idx is, we can flip the 5 to the beginning and flip the 5 to the end
//Once we flip to the end, we can subtract 1 from its total arr length and continue looking for the next map to flip until you hit 0
//Loop backwards so your i can change as you find the max

//First Approach via Pramp interview
function pancakeSort(arr) {

  let count = arr.length-1, copy = arr;

  while (count > 0) {
    let max = Math.max(...copy)
      for (let i = 0; i < copy.length; i++) {
        if (arr[i] == max) {
          flip(arr,i);
          flip(arr,count);
          copy = arr.slice(0,count);
          count--
          break;
        }
      }
  }

  return arr
}

//Helper Function - flip will mutate original arr
const flip = (arr, k) => {
  let start = 0, end = k

  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]]
    start++;
    end--;
  }
}

//Second Approach - refactored and Optimized
function pancakeSort(arr) {
  //helper function to not add additional O(n) time and space if we use indexOf or make a copy of the arr
  function findMaxIdx(arr, lastIdx) {
    let maxIdx = 0;
    for (let i = 1; i <= lastIdx; i++) {
      if (arr[i] > arr[maxIdx]) maxIdx = i
    }
    return maxIdx;
  }

  for (let i = arr.length-1; i > 0; i--) {
    let idxOfMax = findMaxIdx(arr, i)
    flip(arr,idxOfMax) //flip maxVal to front of arr
    flip(arr, i) //flip maxVal to back of arr
  }

  return arr
}
//n - arr.length
//Time - O(n^2). for loop and finding the maxVal in arr
//Space - O(1). Not making a new copy of the arr










/*
============== HINTS ==============
The first part is straightforward and is mainly a tool to use in the second part. If your peer has a hard time solving this part, encourage them to try one of the examples above and do it manually.
If they still don’t understand, help them by walking them through the following algorithm (see details in the full solution):

function flip(arr, k):
    for i from 0 to floor(k / 2):
        tmp = arr[i]
        arr[i] = arr[k - i]
        arr[k - i] = tmp

As for the second part, if your peer is stuck, you may hint that similarly to other sorting algorithms, the key part in this algorithm is to gradually sort the array through iterations.
If the vague hint above doesn’t help, ask them to perform a simpler task first - devise an algorithm that sends the maximal element to the last place in the array, and use that as an iteration step.
If your peer needs further assistance, guide them towards the following algorithm that iterates from the end of the array to the beginning, and in each iteration finds the i’th largest element and places it in the correct position in the array (see full solution for details):

function pancakeSort(arr):
    for i from (arr.length-1) to 1:
        maxIndex = findMaxIndexInPrefix(arr,i)
        flip(arr, maxIndex)
        flip(arr, i)

    return arr

*/
