var sortColors = function(nums) {
    let hash = {};
    let currColor = 0;

    //edgecase
    if (!nums.length || nums.length === 1) return

    for (let i = 0; i < nums.length; i++) {
        hash.hasOwnProperty(nums[i]) ? hash[nums[i]] += 1 : hash[nums[i]] = 1
    }

    for (let j = 0; j < nums.length; j++) {
        while (!hash[currColor]) {
            currColor += 1
        }
        nums[j] = currColor
        hash[currColor] -= 1
    }
    // console.log("hash", hash)

};
