var RandomizedSet = function() {
    this.set = {}
    this.count = 0

};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.set[val]) return false;

    this.set[val] = true;
    this.count += 1
    return true
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.set[val]) return false;

    delete this.set[val]
    this.count -= 1
    // console.log(this.set, this.count)
    return true
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const length = this.count;
    let arr = [...Object.keys(this.set)]
    let random = Math.floor(Math.random() * length)

    return arr[random]
};
