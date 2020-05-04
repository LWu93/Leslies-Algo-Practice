var containsDuplicate = function(nums) {
    let map = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) return true;
        map.add(nums[i]);
    }

    return false;
};

containsDuplicate([1,1,1,3,3,4,3,2,4,2]) //==> true
containsDuplicate([1,2,3,4]) //==> false

