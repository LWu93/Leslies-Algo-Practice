/*
Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

Example 1:
Input: [[0, 30],[5, 10],[15, 20]]
Output: 2

Example 2:
Input: [[7,10],[2,4]]
Output: 1

NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.
*/

/**
 * @param {number[][]} intervals
 * @return {number}
 */

/* psuedocode
sort the intervals array by the endTimes of the interval
loop through the sorted intervals and compare the startTimes and endTimes of each interval
If first startTime <  endTime
    you need a additional room. minRooms++.
    Continue looping through your start times.
Else the endTime satisfies the middle requirements of the same room, meaning you dont need a new room.
    endIdx++

return minRooms
*/

var minMeetingRooms = function(intervals) {
  if (!intervals.length) return 0;

  let minRoomsNeeded = 0;

  //sort and get the arrays of each meeting in order. We need to be able to look at the start and end time of each meeting
  let startMeetings = intervals.map(ele => ele[0]).sort((a,b) => a-b)
  let endMeetings = intervals.map(ele => ele[1]).sort((a,b) => a-b)

  let endIdx = 0; //start with the earliest meeting endtime
  for (let i = 0; i < intervals.length; i++) {
    if (startMeetings[i] < endMeetings[endIdx]) {
      minRoomsNeeded++
    } else {
      endIdx++
    }
  }

  return minRoomsNeeded;
};
/* Complexity. n - intervals.length

Time - O(2* nlogn) ==> O(nlogn). Sorting twice --> 2 * nlogn simplifies to nlogn.
Space - O(2n) ==> O(n). creating 2 new arrays using .map.

*/
