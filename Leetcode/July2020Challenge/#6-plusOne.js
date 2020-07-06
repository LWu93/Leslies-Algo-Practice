/*
Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:

Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Example 2:

Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */

//Psudocode
//you want to loop thru digits from the back to make it easier to account for overflow
//IF its a 9, you want to continue until there are no more 9s (2 scenarios)
//scenario 1 - if there's one 9, you simply add the next digit
//scenario 2 - if they're all 9s and you need to add 1 to the front.
//set a var to account for overflow
//ELSE you just add 1 to the next digit and return digits

const plusOne = (digits) => {
  // let overflow = false
  for (let i = digits.length - 1; i <= 0; i--) {
    if (digits[i] !== 9) {
      digits[i]++
      return digits
    } else {
      digits[i] = 0
      //can also just check to see if i gets to 0
      // overflow = true
    }
  }
  //subtle optimization - we don't need a var to check if overflow is true.
  //If it exits the loop, you know you hit the case where they're all 9s.

  return [1].concat(digits) //shortcut to add 1 to the front without unshifting
}

//Time Complexity - O(n). n - digits.length. Worse case is overflow and all digits are 9s.
//Space Complexity - O(1). Inplace mutation.
