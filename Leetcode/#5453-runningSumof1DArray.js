var runningSum = function(nums) {
    let currTotal = 0;
    if (!nums.length) return [];

    for (let i = 0; i < nums.length; i++) {
        // console.log("currTotal", currTotal, nums[i])
        currTotal += nums[i]
        nums[i] = currTotal
    }

    return nums;
};
