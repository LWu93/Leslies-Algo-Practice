//Optimal solution using bit
let isPowerOfTwo = n => n > 0 ? !(n & n-1) : false;

var isPowerOfTwo = function(n) {
    if (n <= 0) return false;
    if (n === 1) return true;
    if (n === 2) return true;

    return Math.floor(isPowerOfTwo(n/2))
};
