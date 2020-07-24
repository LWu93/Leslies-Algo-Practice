/*
Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).
More formally check if there exists two indices i and j such that :

i != j
0 <= i, j < arr.length
arr[i] == 2 * arr[j]

Example 1:
Input: arr = [10,2,5,3]
Output: true
Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.

Example 2:
Input: arr = [7,1,14,11]
Output: true
Explanation: N = 14 is the double of M = 7,that is, 14 = 2 * 7.

Example 3:
Input: arr = [3,1,7,11]
Output: false
Explanation: In this case does not exist N and M, such that N = 2 * M.

Constraints:
2 <= arr.length <= 500
-10^3 <= arr[i] <= 10^3
*/

/**
 * @param {number[]} arr
 * @return {boolean}
 */

//Psuedocode
//loop through arr and have a hash map storing potential matches
//hash will store its double and its half.
//We can assume the numbers won't be decimaled so we can store if they're even
//IF, we find a match in our hash, return true
//ELSE, go through entire arr, and return false
var checkIfExist = function(arr) {
    let hash = {};

    for (const num of arr) {
        if (hash[num*2]) {
            return true;
        } else if (num % 2 === 0 && hash[num/2]) {
            return true;
        }
        //setting it to true after the checks so it doesn't account for edge case of 0
        hash[num] = true;
    }

    return false
};
//Time - O(n). n - arr.length
//Space - O(n). n - arr.length of space in hash.
