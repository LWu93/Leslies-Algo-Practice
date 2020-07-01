/*
Radix Sort is a special sorting algo that works on lists of numbers, generally used in binary nums.
It never makes comparisons between the nums.
Uses the fact that the info about the size of a # is encoded in the num of digits/
More digits means a bigger number
*/

//Helper Functions

//getDigit - returns the digit in num at the given place value
const getDigit = (num, place) => {
  return Math.floor(Math.abs(num) / Math.pow(10,place)) % 10;
}
//getDigit(123, 100) returns 1

//digitCount - returns the count of digits in a num
const digitCount = num => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num)) + 1)
}
//digitCount(135) //returns 3

//mostDigits - takes an arr of nums and returns the largest num of digits in the arr.
const mostDigits = nums => {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]))
  }
  return maxDigits
}
//mostDigits([1, 23, 345, 6789]) //returns 4


//PSUDOCODE FOR RADIXSORT

//radixSort accepts an arr of nums
//figure out how many digits the largest num has, const largestDigit
//loop from k = 0 up to largestDigit
//for each iteration, you need to create buckets for each digit from 0-9
//place each num in corresponding bucket based on its kth digit
//replace our existing arr with values in our bucket, from 0 up to 9
//return the new arr at the end

const radixSort = (nums) => {
  const largestDigit = mostDigits(nums);
  for (let k = 0; k < largestDigit; k++) {
    let buckets = Array.from({length: 10}, () => [])
    for (let l = 0; l < nums.length; l++) {
      //get the digit from each num of k. k will be dynamic and changes from each loop
      let digit = getDigit(nums[l], k)
      buckets[digit].push(nums[l])
    }
    //create a new array where the nums in bucket are combined and placed in ascending order
    nums = [].concat(...buckets)
  }
  return nums
}

//Time Complexity - Worst case O(n * k) n - length of nums arr, k - length of digits (ON AVG)
//Space Complexity - O(n + k) n - creating a new arr length. k - creating buckets for the digits
