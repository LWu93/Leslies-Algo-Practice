/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

//Brute Force - O(n) time. TLE
// var myPow = function(x, n) {
//   let total = x

//   if (x === 1 || n === 0) return 1;

//   if (n > 0) {
//     for (let i = 1; i < n; i++) {
//       total *= x
//     }
//   } else {
//     for (let i = 0; i >= n; i--) {
//       total /= x
//     }
//   }

//   return total
// };

//Psudocode for optimal solution - O(log n) time.
//3 cases to check, if n is negative, 0 or positive
//we can cut our search in half recursively by finding our nth number and squaring the result.
//x^n ==> (x^(n/2))^2 ==> x^(n/2) * x^(n/2)
//Ex: 2^6 ==> 64 is the same as (2^3) * (2^3)
//When n < 0 aka negative, x^n = (1/x)^(-n) Ex: 3^-5 = (1/3)^5
//in the case where n is odd, you find the Math.floor(n/2) and add the additional exponent
//Ex: 2^5 ==> 2^2 * 2^2 * 2 ==> 2^(n/2 floored) * 2^(n/2 floored) * 2

var myPow = function(x, n) {
  // x^n = (1/x)^(-n) Ex: 3^-5 = (1/3)^5
  if (n < 0) {
    x = 1 / x
    n = -1*n
  }

  if (n === 0) return 1;

  let half = myPow(x, Math.floor(n/2))
  // x^(n/2) * x^(n/2)
  if (n % 2 === 0) {
    return half * half
  } else {
    return half * half * x
  }
}
