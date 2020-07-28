/*
You are given a char array representing tasks CPU need to do. It contains capital letters A to Z where each letter represents a different task. Tasks could be done without the original order of the array. Each task is done in one unit of time. For each unit of time, the CPU could complete either one task or just be idle.

However, there is a non-negative integer n that represents the cooldown period between two same tasks (the same letter in the array), that is that there must be at least n units of time between any two same tasks.

You need to return the least number of units of times that the CPU will take to finish all the given tasks.

Example 1:
Input: tasks = ["A","A","A","B","B","B"], n = 2
Output: 8

Explanation:
A -> B -> idle -> A -> B -> idle -> A -> B
There is at least 2 units of time between any two same tasks.

Example 2:
Input: tasks = ["A","A","A","B","B","B"], n = 0
Output: 6

Explanation: On this case any permutation of size 6 would work since n = 0.
["A","A","A","B","B","B"]
["A","B","A","B","A","B"]
["B","B","B","A","A","A"]
...
And so on.

Example 3:
Input: tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2
Output: 16

Explanation:
One possible solution is
A -> B -> C -> A -> D -> E -> A -> F -> G -> A -> idle -> idle -> A -> idle -> idle -> A

*/

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */

//psuedocode
//set vals into a set to keep track of freq
//with freq, we want to sort or order it so we're taking the highest freq when we reach = n again
//IF, there are no other options we want have to account for idle time and then add n
//ELSE, continue running vals until we hit a point where we run out of other vals to run

//formula - resultCount = (maxOccurrences - 1) * (n + 1) + (numMaxTasks);
//(maxOccurences - 1) - we need to find the maxOccurance. We must subtract 1 because we dont need to have any empty spaces or filling after the last occurence at the end.

// (n + 1) - We need to multiply times n+1 because there will always be n spaces in between, which when multiplying, would not be including the actual task if we were to not add 1.
//Ex: Case 3: [A, B, C, C, C] n = 2. maxOccurance = (3-1) * (2+1)
// Shortest solution: [ C, A, _, C, B, _, C ]

// +maxNumTasks
// This is to consider the case where there is more than 1 task that needs to be appended at the end.

//Description - https://leetcode.com/problems/task-scheduler/discuss/401103/simple-Javascript-idle-slots-1-pass-with-detailed-description
var leastInterval = function(tasks, n) {
  let map = new Map();

  let maxFreq = 0; //max occurrences

  let maxValCount = 0; // the number of tasks that has the max occurrences

  for(let k of tasks){
    let tVal = map.has(k) ? map.get(k)+1: 1;
    map.set(k, tVal);

    // set our maxFreq and number of maxFreq tasks only if we have a new max
    if(tVal > maxVal){
      maxFreq = tVal;
      maxValCount = 1;

    // otherwise, increment number of maxFreq tasks
    } else if(tVal === maxFreq){
      maxValCount++;
    }
  }
  // our formula, handle the edge case
  return Math.max(tasks.length, (maxFreq - 1) * (n + 1) + maxValCount);
};
//n - tasks.length
//Time - O(n). 1 for loop
//Space - O(n). storing in a map
