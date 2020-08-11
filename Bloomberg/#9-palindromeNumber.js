/*
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:
Input: 121
Output: true

Example 2:
Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:
Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

Follow up:
Coud you solve it without converting the integer to a string?
*/

/**
 * @param {number} x
 * @return {boolean}
 */

//psuedocode - approach by coverting to a string
//convert the integer into a string if it is positive. negative nums can't be palindromes
//create the new str backwards, type coersion back into # and check if they're equal
var isPalindrome = function(x) {
  if (x < 0) return false;

  let newStr = '', stringNum = x.toString();

  for (const char of stringNum) {
    newStr = char + newStr
  }

  return (newStr*1) === x
};
//n - # of digits in number
//Time - O(n). toString() of a gigantic num may also add another layer of n ==> O(2n).
//Space - O(n)

//psuedocode - approach using basic maths
//we know every decimal place % 10 will give you the val of the new char but backwards.
//we can use that to find the value of the reverse num
//Ex: x - 123. Reversed - 321. We add remainder of x % place to a total.
//Then Remainder * 10 to acc for decimal places moving.
//First iteration, total = 1, decimal(0) *= 10 + remainder(1). --> total = 21, decimal = (1*10)+2
//while loop will divide num by 10 so that we can *10 to our decimal
//% 10s everywhere
var isPalindrome = function(x) {
  if (x < 0) return false;

  let reversed = 0, remainder, copy = x; //make a copy of x to mutate

  while (copy > 0) {
    remainder = copy % 10;
    reversed = (reversed * 10) + remainder;
    copy = Math.floor(copy/10)
  }

  return reversed == x;
}
//n - # of digits in number
//Time - O(n)
//Space - O(1)
