/*
Given two binary strings, return their sum (also a binary string).
The input strings are both non-empty and contains only characters 1 or 0.

Example 1:
Input: a = "11", b = "1"
Output: "100"

Example 2:
Input: a = "1010", b = "1011"
Output: "10101"

Constraints:
Each string consists only of '0' or '1' characters.
1 <= a.length, b.length <= 10^4
Each string is either "0" or doesn't contain any leading zero.

*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */


var addBinary = function(a, b) {
  // need them the same length string so you can 'add' them
  if (a.length < b.length){
    let temp = a
    a = b
    b = temp
  }
  while(a.length !== b.length){
    b = "0" + b
  }
  // need a carry for when each bit is a 1
  let result = ""
  let carry = 0

  for (let i = a.length-1; i >= 0; i--){ // add from the end like a LL
    carry += parseInt(a[i]) + parseInt(b[i])

    // if carry is a 1, then we added 0 and 1 together. so there's no carry
    if (carry%2 === 1) result = '1' + result

    // else we added 0 and 0 for no carry OR we added 1 and 1 for carry of 1
    else result = '0' + result

    // carry = 1 when we added to 2, carry = 0 otherwise
    carry = Math.floor(carry/2)
  }

  // any leftover carry means we have to add a place value to the front
  if (carry === 1) result = '1' + result
  return result
}

//Time Complexity - O(n). n - length of num in binary.
//Space Complexity - O(n). n - length of num in binary stored as res.
