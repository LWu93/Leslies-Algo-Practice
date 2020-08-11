/*
Find The Duplicates
Given two sorted arrays arr1 and arr2 of passport numbers, implement a function findDuplicates that returns an array of all passport numbers that are both in arr1 and arr2. Note that the output array should be sorted in an ascending order.

Let N and M be the lengths of arr1 and arr2, respectively. Solve for two cases and analyze the time & space complexities of your solutions: M ≈ N - the array lengths are approximately the same M ≫ N - arr2 is much bigger than arr1.

Example:

input:  arr1 = [1, 2, 3, 5, 6, 7], arr2 = [3, 6, 7, 8, 20]

output: [3, 6, 7] # since only these three values are both in arr1 and arr2
Constraints:

[time limit] 5000ms

[input] array.integer arr1

1 ≤ arr1.length ≤ 100
[input] array.integer arr2

1 ≤ arr2.length ≤ 100
[output] array.integer
*/

//psuedocode
//arr1 and arr2 are sorted
//return should be sorted in asc order
//loop through the longer arr. Check whichever arr is longer
//use the same idx for both arr1 and arr2
//store #s in a map.
//have a res arr store all dups.
function findDuplicates(arr1, arr2) {
  let res = [], set = new Set();
  const longer = arr1.length > arr2.length ? arr1.length : arr2.length;

  for (let i = 0; i < longer; i++) {
    let char1 = arr1[i] || 0, char2 = arr2[i] || 0

    if (char1) {
      if (set.has(char1)) res.push(char1)
      else set.add(char1)
    }

    if (char2) {
      if (set.has(char2)) res.push(char2)
      else set.add(char2)
    }
  }

  return res;
}
//n - arr1.length, m - arr2.length
//Time - O(max(n,m))
//Space - O(2 * max(n,m)) ==> O(max(n,m)). Worst case is our res === n.

//Second approach without using additional space but adding time complexity
function findDuplicates(arr1, arr2) {
  //psuedocode
  //arr1 and arr2 are sorted
  //while loop through both arrs. Since they're sorted
  //use the same idx for both arr1 and arr2
  //have a res arr store all dups, should be pushed in asc order since arrs are sorted.

  let res = [], ptr1 = 0, ptr2 = 0;

  while (ptr1 < arr1.length && ptr2 < arr2.length) {
    if (arr1[ptr1] === arr2[ptr2]) {
      res.push(arr1[ptr1])
      ptr1++
      ptr2++
    } else if (arr1[ptr1] < arr2[ptr2]) {
      ptr1++
    } else {
      ptr2++
    }
  }

  return res;
}
