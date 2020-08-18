/**
 * @param {number} N
 * @param {number} K
 * @return {number[]}
 */

//psuedocode
//loop through set of nums. we know if N = 1, we can only go from 0-9. if N = 2, we go from 10-99. These are multiples of 10s so we can start with 1 and find our starting integer length.
//In order to check the abs diff, there might be a math formula.. otherwise we have to do type coersion
//loop through the nums as a string and coerce into a num to check its abs diff's.
//Have a helper func, checkAbsDiffOfANum(str) -> loop through and return boolean if it satisfies
//loop from starting Num through its next multiple of 10.

//First Attempt
// var numsSameConsecDiff = function(N, K) {
//     let startingNum = 1, res = [];
//     //edgecase. Not 100% sure how if K === 0, we get 0-9 as ints in our arr. Thought "01" is invalid
//     if ((N == 1) || (K <= 0 && N == 1)) res.push(0);

//     for (let i = 1; i < N; i++) {
//         startingNum *= 10
//     };

//     for (let i = startingNum; i < startingNum * 10; i++) {
//         if (checkAbsDiffOfANum(i.toString(),K)) res.push(i)
//     }

//     //HF to check if the str satisfies abs diff
//     function checkAbsDiffOfANum (str, k) {
//         for (let i = 1; i < str.length; i++) {
//             if (Math.abs((str[i]*1) - (str[i-1]*1)) !== k) return false
//         }

//         return true;
//     }

//     return res;
// };
//TLE - 7, 6. Too many loops

//Backtracking solution
var numsSameConsecDiff = function(N, K) {
  let res = []
  var compose = function(n) {
    if (n.length === N) {
      res.push(n)
    } else {
      let num = Number(n[n.length-1])
      if (num-K >= 0) compose(`${n}${num-K}`)
      if (num+K <= 9 && K>0) compose(`${n}${num+K}`)
    }

  }

  for (let i=0; i<10; i++) {
    if (N>1 && i===0) continue
    compose(`${i}`)
  }

  return res
};
//n - # of digits for a combination
//Time - O(2^n). Creating the # of diff combinations in our recursive calls
//Space - O(2^n). recursive calls in our call stack.
