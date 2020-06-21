var xorOperation = function(n, start) {
    let arr = [start]

    for (let i = 1; i < n; i++) {
        arr[i] = start + 2*i
    }

    let res = 0;

    for (let i = 0; i < arr.length;i++) {
        res ^= arr[i]
    }

    return res
};
