/*
Given a set of intervals, for each of the interval i, check if there exists an interval j whose start point is bigger than or equal to the end point of the interval i, which can be called that j is on the "right" of i.

For any interval i, you need to store the minimum interval j's index, which means that the interval j has the minimum start point to build the "right" relationship for interval i. If the interval j doesn't exist, store -1 for the interval i. Finally, you need output the stored value of each interval as an array.

Note:

You may assume the interval's end point is always bigger than its start point.
You may assume none of these intervals have the same start point.


Example 1:
Input: [ [1,2] ]
Output: [-1]

Explanation: There is only one interval in the collection, so it outputs -1.


Example 2:
Input: [ [3,4], [2,3], [1,2] ]
Output: [-1, 0, 1]

Explanation: There is no satisfied "right" interval for [3,4].
For [2,3], the interval [3,4] has minimum-"right" start point;
For [1,2], the interval [2,3] has minimum-"right" start point.


Example 3:
Input: [ [1,4], [2,3], [3,4] ]
Output: [-1, 2, -1]

Explanation: There is no satisfied "right" interval for [1,4] and [3,4].
For [2,3], the interval [3,4] has minimum-"right" start point.

*/

/**
 * @param {number[][]} intervals
 * @return {number[]}
 */

/* psuedocode
if intervals.length <= 1, we can return [-1]. Otherwise, we start our res arr with -1 since there are no intervals to the left of the first one.
Looking for a satisfied rightInterval - if a prevInterval's start is >= currEndPoint of interval[i]
Keep track of each interval in a map so we can store key/val --> start/freq.
You may assume none of these intervals have the same start point. - so we can use that as a key/val

Best way to approach this is to sort and then search through using binary search
*/
var findRightInterval = function(intervals) {
  if (intervals.length === 0) return []
  if (intervals.length === 1) return [-1]

  let res = [], map = new Map();

  //storing the startTime of each interval with its idx
  intervals.forEach((ele,idx) => map.set(ele[0], idx))

  //sort intervals so we have the startTime in front
  intervals.sort((a,b) => a[0] - b[0])

  //loop through intervals and use BS to get the greatest # of satisfying conditionals
  for (let i = 0; i < intervals.length; i++) {
    let [startTime, endTime] = intervals[i];
    let left = i, right = intervals.length-1, matchIdx = -1;

    while (left <= right) {
      let mid = left + Math.floor((right-left)/2);

      //Edgecase - If its equal to endTime AND the prev idx does not satisfy the condition
      if (intervals[mid][0] >= endTime && intervals[mid-1][0] < endTime) {
        matchIdx = map.get(intervals[mid][0])
        break;
      } else if (intervals[mid][0] < endTime) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    //defaults to -1 if we don't find a match. if we do, we push that instead.
    res[map.get(startTime)] = matchIdx
  }

  return res
};
/* N - intervals.length.
Time - O(N log N). 1 for loop and 1 loop with a binary search for n log n. Sorting is also nlogn.
Space - O(N). Storing each interval startTime as a key and val is the idx. Also returning a array with N amount of eles representing the indices.
*/
