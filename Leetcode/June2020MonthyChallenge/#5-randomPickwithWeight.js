/**
 * @param {number[]} w
 */
var Solution = function(w) {
    //[1,3,5]
    this.res = new Array(w.length);
    this.count = 0;

    for (let i = 0; i < w.length; i++) {
        this.count += w[i];
        this.res[i] = this.count
        // [1,4,9]
        // count = 4
    }

};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    let random = Math.floor(Math.random() * this.count + 1);//2
    // console.log("random", random)

    for (let i = 0; i < this.res.length; i++) {
        if (random <= this.res[i]) return i;

    }
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */

////////////////////////////////////////////////////
////////////////////////////////////////////////////

//Alex's Solution
var Solution = function(w) {
    this.prefixSums = new Array(w.length).fill(0)

    this.totalSum = 0
    for (let i = 0; i < w.length; i++){
        this.totalSum += w[i]
        this.prefixSums[i] = this.totalSum
    }
    // console.log(this.prefixSums)
};
/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    let target = Math.floor(this.totalSum * Math.random())

    let left = 0
    let right = this.prefixSums.length-1

    while (left <= right){
        let mid = left + Math.floor((right-left)/2)
        if (target < this.prefixSums[mid]) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return left
}
