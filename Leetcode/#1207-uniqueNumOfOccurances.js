var uniqueOccurrences = function(arr) {
    if (!arr.length) return true;

    let hash = {};
    let dups = {};

    for (ele of arr) {
        hash.hasOwnProperty(ele) ? hash[ele] += 1 : hash[ele] = 1
    }
    for (key in hash) {
        if (dups.hasOwnProperty(hash[key])) return false
        else dups[hash[key]] = true
    }
    return true
};
