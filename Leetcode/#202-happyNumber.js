/**
 * @param {number} n
 * @return {boolean}
*/

/*
Write an algorithm to determine if a number n is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Return True if n is a happy number, and False if not.

Example:

Input: 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

*/

//PSUDOCODE
//Need to loop through number.
//Store result in a DS, hash is the most efficient.
//have a while loop check if n !== 1. If n ever changes to 1, we can exit the loop and RETURN true
//in the while loop, create a helper func that will square the digits inside of n.
//you have to check if that num already exists in the hash, if it does - its a cycle and you can RETURN false.
//if it doesn't exist, set that num into your hash. Then set that num equal to n

const isHappy = (n) => {
    let hash = {}

    while (n !== 1) {
        let sumOfNumsSquared = squaredNums(n);
        if (hash[sumOfNumsSquared]) return false
        hash[sumOfNumsSquared] = true
        n = sumOfNumsSquared
    }

    return true
};

const squaredNums = (num) => {
    let str = num.toString()
    let total = 0;
    for (const digit of str) {
        total += digit * digit
    }

    return total
}

//Time Complexity - O(n * m). n - length of the num. m - # of permutations of the non-Happy nums.
//Space Complexity - O(h). h - the # permutations of a non-Happy number go into the hash.
