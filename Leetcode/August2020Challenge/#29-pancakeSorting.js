/* psuedocode

Approach using pancake sort approach. Not only do you have to sort it, you have to add each idxPoint or K where you do a flip and add it into a res array.

Loop from the back and have a HF track where the MaxValIdx is in the Array;
const maxVal takes in (arr, endPoint). loops through and returns maxIdxPoint.
have a flip HF - es6 swap function.

At every iteration in our loop, we want to flip the maxVal to the front and flip to the back.
That means we need to res.push the idx that we've found via maxValIdx and the end of the arr.

Return res array
*/

var pancakeSort = function(A) {
  if (A.length <= 1) return [];

  //Flip HF
  const flip = (arr, end) => {
    let start = 0;
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]]
      start++;
      end--;
    }
  }

  //idxOfMaxVal HF --> returns maxIdx in curr Array length. O(n) time.
  const idxOfMaxVal = (arr, endPoint) => {
    let maxIdx = 0; //start at 0th idx since we're looping backwards

    for (let i = 1; i <= endPoint; i++) {
      if (arr[i] > arr[maxIdx]) {
        maxIdx = i;
      }
    }

    return maxIdx;
  }

  let res = [];

  for (let i = A.length-1; i > 0; i--) {
    let maxValsIdx = idxOfMaxVal(A, i);

    //check to see if we NEED to flip or not or if its sorted
    if (maxValsIdx === i) continue;

    //flip maxValsIdx to front then back. Add K or maxValIdx to res arr.
    flip(A,maxValsIdx);
    res.push(maxValsIdx+1);
    flip(A,i)
    res.push(i+1);
  }

  return res;
};
/* n - A.length
Time - O(n^2). We are looping through A but we also have our idxOfMaxVal HF that is O(n).
Space - O(n). Worst case, we essentially do 2 flips at every iteration and will push in 2 indices but that simplifies to O(n).
*/
