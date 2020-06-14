var findLeastNumOfUniqueInts = function(arr, k) {
    let hash = {}
    if (!arr.length) return 0;

    for (let i = 0; i < arr.length; i++) {
        const curr = arr[i]
        hash.hasOwnProperty(curr) ? hash[curr]++ : hash[curr] = 1
    }

    const arranged = []
    for (key in hash) {
        arranged.push([key, hash[key]])
    }
    // console.log(arranged)
    arranged.sort((a,b) => a[1] - b[1])
    // console.log("after sorted", arranged)

    let unique = arranged.length;
    for (let i = 0; i < arranged.length; i++) {
        // console.log("unique", unique, "k", k);
        [num, freq] = arranged[i]
        k -= freq
        if (k === 0) return unique - 1;
        if (k < 0) return unique;
        unique -= 1
    }

    return unique;
};
