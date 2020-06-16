var threeSum = function(nums) {
    let ans = []
    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && (nums[i] === nums[i - 1])) continue;
        let curr = i;
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            //[-4, -1, -1, 0, 1, 2]
            //.     c   l        r
            let sums = []
            let currSum = (nums[curr] + nums[left] + nums[right])

            // console.log([nums[curr], nums[left], nums[right]])
            if (currSum === 0) {
                sums.push(nums[curr], nums[left], nums[right])
                left++
                while(nums[left] === nums[left-1]) {
                    left++
                };
            }
            if (currSum < 0) {
                left++
            } else if (currSum > 0) {
                right--
            }
            if (sums.length > 1) ans.push(sums)

        }
    }
    return ans;
};
