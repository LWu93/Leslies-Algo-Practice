/*
Given an array of 4 digits, return the largest 24 hour time that can be made.

The smallest 24 hour time is 00:00, and the largest is 23:59.  Starting from 00:00, a time is larger if more time has elapsed since midnight.

Return the answer as a string of length 5.  If no valid time can be made, return an empty string.

Example 1:
Input: [1,2,3,4]
Output: "23:41"

Example 2:
Input: [5,5,5,5]
Output: ""

Note:
A.length == 4
0 <= A[i] <= 9
*/

/**
 * @param {number[]} A
 * @return {string}
 */

/* psuedocode
generate each variation of the # of times that are possible.
Compare them to the var maxTime that will start at "00:00". If it is greater, update maxTime.
Create a HF to compare the two times.
Backtrack to get every permutation of the nums in A
*/

var largestTimeFromDigits = function(A) {
  let maxTime = "00:00"

  //edgecase when all eles in A are 0
  if (A[0] == 0 && A[1] == 0 && A[2] == 0 && A[3] == 0) return maxTime;

  //generate each possibility of time to check if one is bigger or not
  const backtrack = (arr, numsArr) => {
    //basecase to create our new times
    if (numsArr.length === 4) {
      let [one, two, three, four] = numsArr;
      let currHour = `${one}${two}`
      let currMin = `${three}${four}`

      //check if valid times
      if (currHour < '24' && currMin < '60') {
        let [maxHour, maxMin] = maxTime.split(":");
        //update maxTime to be the currTime if currHour is greater than maxHour or the hours are equal and then check currMin
        if (currHour > maxHour) {
          maxTime = `${one}${two}:${three}${four}`
        } else if (currHour == maxHour && currMin > maxMin) {
          maxTime = `${one}${two}:${three}${four}`
        }
      }
    }

    for (let i = 0; i < A.length; i++) {
      let currNum = A.splice(i,1)[0]
      numsArr.push(currNum) //add num into numsArr
      backtrack(arr, numsArr) //recursively call with numsArr
      A.splice(i, 0, currNum) //place back that number into A
      numsArr.pop() //remove last combination from the arr
    }
  }

  backtrack(A, [])

  return maxTime === "00:00" ? "" : maxTime;
};
/* Complexity. N - A.length

Time - O(!N) ==> O(1). We're creating permutations of N which is 4. Since 4 is constant, it simplifies to O(1).
Space - O(1). Same conditions as above via recursive calls in the callstack that simplify to 1.
*/
