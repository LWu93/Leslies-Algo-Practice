/*
Design a data structure that supports all following operations in average O(1) time.

insert(val): Inserts an item val to the set if not already present.
remove(val): Removes an item val from the set if present.
getRandom: Returns a random element from current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.

Example:

// Init an empty set.
RandomizedSet randomSet = new RandomizedSet();

// Inserts 1 to the set. Returns true as 1 was inserted successfully.
randomSet.insert(1);

// Returns false as 2 does not exist in the set.
randomSet.remove(2);

// Inserts 2 to the set, returns true. Set now contains [1,2].
randomSet.insert(2);

// getRandom should return either 1 or 2 randomly.
randomSet.getRandom();

// Removes 1 from the set, returns true. Set now contains [2].
randomSet.remove(1);

// 2 was already in the set, so return false.
randomSet.insert(2);

// Since 2 is the only number in the set, getRandom always return 2.
randomSet.getRandom();
*/

/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
  //Adding space for O(1) access to delete
  this.set = [];
  this.map = new Map(); //store our val/idx
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (this.map.has(val)) return false;

  this.set.push(val);
  this.map.set(val, this.set.length-1)
  return true
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */

//use as a global function so it doesn't initiate a new func every time we call .remove
const swap = (arr,i,j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

RandomizedSet.prototype.remove = function(val) {
  if (!this.map.has(val)) return false;

  let idx = this.map.get(val);
  this.map.delete(val)

  if (idx !== this.set.length-1) {
    //we swap wherever the idx val is with the last val and pop it out for constant time
    swap(this.set, idx, this.set.length-1)
    this.map.set(this.set[idx], idx) //set its new idx afterwards
  }

  this.set.pop()
  return true
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  let random = Math.floor(Math.random() * this.set.length)
  return this.set[random]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */


//ES6 Class Constructor
// class RandomizedSet {
//     constructor() {
//         this.set = new Set();
//     }

//     insert(val) {
//         if (!this.set.has(val)) {
//             this.set.add(val)
//             return true
//         } else {
//             return false
//         }
//     }

//     remove(val) {
//         if (!this.set.has(val)) return false;

//         this.set.delete(val);
//         return true
//     }

//     getRandom() {
//         let random = Math.floor(Math.random() * this.set.size)
//         return [...this.set][random]
//     }
// }
