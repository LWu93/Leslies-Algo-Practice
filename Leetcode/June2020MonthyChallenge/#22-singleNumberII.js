var singleNumber = function(nums) {
    let hash = {};

    for (i in nums) {
        let curr = nums[i]
        if (!hash.hasOwnProperty(curr)) hash[curr] = 0
        hash[curr]++
        if (hash[curr] >= 3) delete hash[curr]
    }

    for (key in hash) {
        if (hash[key] === 1) return key
    }
};
