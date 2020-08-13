/*
Design an Iterator class, which has:

A constructor that takes a string characters of sorted distinct lowercase English letters and a number combinationLength as arguments.
A function next() that returns the next combination of length combinationLength in lexicographical order.
A function hasNext() that returns True if and only if there exists a next combination.

Example:

CombinationIterator iterator = new CombinationIterator("abc", 2); // creates the iterator.

iterator.next(); // returns "ab"
iterator.hasNext(); // returns true
iterator.next(); // returns "ac"
iterator.hasNext(); // returns true
iterator.next(); // returns "bc"
iterator.hasNext(); // returns false

Constraints:

1 <= combinationLength <= characters.length <= 15
There will be at most 10^4 function calls per test.
It's guaranteed that all calls of the function next are valid.
*/

/**
 * @param {string} characters
 * @param {number} combinationLength
 */

//psuedocode
//We know that the chars are unique and already sorted, so once we get the chars in, we can create every single possible combination of the characters in order.
//we can use a arr to store the unique combinations in order and track .next using a count or currIdx
//backtrack using an empty string and build out each subset. if it hits length, push into our arr
//.next will return the currIdx we're at and then increment it.
//.hasNext will check if currIdx is greater or equal to the arr.length, means theres nothing next

//remade to class Component
class CombinationIterator {
  constructor(characters, combinationLength) {
    this.currIdx = 0; //.next starts at 0th idx or the first combination in our arr.

    let res = []
    //backtracking the string
    function makeCombinations (str, idx) {
      //our base case - where we hit the combination of our str == length
      if (str.length == combinationLength) {
        res.push(str);
        return;
      }

      //loop through chars to get each individual subset.
      //Start from idx and increment as we recursively call to find the next subset.
      for (let i = idx; i < characters.length; i++) {
        makeCombinations(str+characters[i], i+1)
      }
    }

    makeCombinations('', 0)
    this.combinations = res; //set newly built res to reflect the combinations
  }

  next() {
    this.currIdx++ //since we start currIdx at 0, we have to account for that as we ++
    return this.combinations[this.currIdx-1]
  }

  hasNext() {
    if (this.currIdx >= this.combinations.length) return false;
    return true;
  }
}
//n - characters.length. k - combinationLength. (??) Not 100% sure how k is accounted for but we have to account for the subsets lengths. If k === 1, we create every single subset. If k is 2, we generate less subsets.
//Time - O(n^2). You are creating subsets of each char depending on its length. Worst case is length is 1 but you generate less permutations as k grows
//Space - O(n^2). Worst case - you have every subset if k === 1.

