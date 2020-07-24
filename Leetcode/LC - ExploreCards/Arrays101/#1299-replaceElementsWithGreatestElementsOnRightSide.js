/*
Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

After doing so, return the array.

Example 1:

Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]

Constraints:

1 <= arr.length <= 10^4
1 <= arr[i] <= 10^5

*/

/**
 * @param {number[]} arr
 * @return {number[]}
 */

//Psuedocode
//We want the greatest # to the right so we can start from the end of the arr to track the max # we've seen so far, var max.
//as we loop backwards, we have to store the curr val before replacing arr[i] with max for reference
//THEN we replace arr[i] and finally recheck for max #
//return modified arr
var replaceElements = function(arr) {
  if (!arr.length) return arr;
  let max = arr[arr.length-1] //we are storing the last idx as our first max
  arr[arr.length-1] = -1; //set last idx to -1

  //start looping from 2nd to last idx
  for (let i = arr.length-2; i >= 0; i--) {
    let temp = arr[i];
    arr[i] = max

    max = Math.max(max, temp)
  }


  return arr;
};
//Time - O(n). n - arr.length
//Space - O(1). modifying in-place
