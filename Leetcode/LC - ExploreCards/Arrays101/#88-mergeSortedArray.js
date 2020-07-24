/*
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:
The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.

Example:

Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]


Constraints:
-10^9 <= nums1[i], nums2[i] <= 10^9
nums1.length == m + n
nums2.length == n
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

//Psuedocode
//both arrays are sorted and meaning the highest vals are at the end of the array
//we can use the 2 lengths as idx's provided and check which val at the end is greater
//IF nums1 is greater, simply put the last idx (m + n - 1) in the arr as the last val and mm--
//ELSE nums2 is greater and you set nums1[m+n-1] = nums[n-1], then n--
//Since we will be looping through the bigger arr, nums1, we know if it fills up, we're done
//The other case is if there are still values in n. If so, we just need to fill in the arr accordingly
var merge = function(nums1, m, nums2, n) {
  while (m > 0 && n > 0) {
    if (nums1[m-1] >= nums2[n-1]) {
      nums1[m+n-1] = nums1[m-1];
      m--;
    } else {
      nums1[m+n-1] = nums2[n-1];
      n--;
    }
  }

  while (n > 0) {
  nums1[n-1] = nums2[n-1];
  n--;
  }

};
//Time - O(n). n - nums1.length (will account for nums2.length)
//Space - O(1). Modifying in-place
