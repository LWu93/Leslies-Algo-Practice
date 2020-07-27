/*
Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

Example:
Input: 38
Output: 2

Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

Follow up:
Could you do it without any loop/recursion in O(1) runtime?

*/

/**
 * @param {number} num
 * @return {number}
 */

//Psuedocode
//initialize a total var, loop through each number and add it to a total count
//while loop as num is greater than 9
//return total count
var addDigits = function(num) {
  let total = 0;

  while (num > 0) {
    total += Math.floor(num % 10);
    num /= 10;

    //reset total is total is greater than 9
    if (num === 0 && total > 9) {
      num = total;
      total = 0;
    }
  }

  return total;
};

//Time - O(n). n - # of digits in num.
//Space - O(1)

