/*
Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.
Note that elements beyond the length of the original array are not written.
Do the above modifications to the input array in place, do not return anything from your function.

Example 1:
Input: [1,0,2,3,0,4,5,0]
Output: null
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

Example 2:
Input: [1,2,3]
Output: null
Explanation: After calling your function, the input array is modified to: [1,2,3]

Note:
1 <= arr.length <= 10000
0 <= arr[i] <= 9
*/

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */

//Psuedocode
//We know that we have to duplicate 0s. We can loop through the arr once and find all 0s
//Once we have a zeros count, we know that we will have to make the space to account for it
//we can subtract zeros from the arr length, we have a new length that account for all non zeros in the front of the arr.
//For Ex: [1,0,0,2,3] -> [1,0,0,0,0], [0,0,1,2,1] --> [0,0,0,0,1]
//new length is 3 and we will only copy over the first 3 elements from the new length
//Edge case - when we are copying zeros and we have to account for when the ptr pasts the last ele in the original arr
var duplicateZeros = function(arr) {
  let zeros = 0;
  let length = arr.length - 1;//acc for idx

  //to adjust count everytime we add to zeros
  for (let i = 0; i <= length - zeros; i++) {
    if (arr[i] === 0) {
      //Edge case where we don't want to account for a duplicate 0 since its the last ele
      if (i === length - zeros) {
        arr[length] = 0;
        length -= 1;
        break;
      }
      zeros++;
    }
  }

  //loop backwards and fill in our arr from the last elements inwards;
  let newLength = length - zeros;
  for (let i = newLength; i >= 0; i--) {
    //[1,0,2,3,0,4,5,0]
    //[1,0,0,2,3,0,0,4]
    if (arr[i] === 0) {
      arr[i+zeros] = 0;
      zeros--;
      arr[i+zeros] = 0;
    } else {
      arr[i+zeros] = arr[i];
    }
  }
};

//Time - O(2n) ==> O(n). n - arr.length;
//Space - O(1)
