/*
Given an array of citations (each citation is a non-negative integer) of a researcher, write a function to compute the researcher's h-index.

According to the definition of h-index on Wikipedia: "A scientist has index h if h of his/her N papers have at least h citations each, and the other N − h papers have no more than h citations each."

Example:
Input: citations = [3,0,6,1,5]
Output: 3

Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had
             received 3, 0, 6, 1, 5 citations respectively.
             Since the researcher has 3 papers with at least 3 citations each and the remaining
             two with no more than 3 citations each, her h-index is 3.
Note: If there are several possible values for h, the maximum one is taken as the h-index.
*/

/**
 * @param {number[]} citations
 * @return {number}
 */

//first approach - sort
//sort citations from desc order. let hIdx = 0
//loop backwards through citations and we can start at hIdx since thats the MAX it can be.
//if we ever hit a case where currVal < currIdx, return our prevIdx we've encountered aka hIdx
//reset hIdx to be either min of currVal or currIdx + 1 - to acc for idx's.

var hIndex = function(citations) {
  if (!citations.length) return 0;

  let hIdx = 0;
  citations.sort((a,b) => b-a)

  for (let i = 0; i < citations.length; i++) {
      if (citations[i] < i) return hIdx;
      hIdx = Math.min(citations[i], i+1)//account for idx
  }

  return hIdx
};
//n - citations.length
//Time - O(n log n).
//Space - O(log n). space in recursive calls via sort

//Second approach - binary search? Similar thought process except you don't need to potentially loop through the entire citations arr. Worse case, its still nlogn due to .sort but may be faster in some cases.
