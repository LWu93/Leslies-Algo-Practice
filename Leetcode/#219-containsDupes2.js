// Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] === nums[j] and the absolute difference between i and j is at most k.

// //  Input: nums = [1,2,3,1], k = 3
// Output: true

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

function containsDups(arr, k)   {
  //loop through arr
  //keep a "window" that tracks the incides in between by having a second loop
  //check the indices in between to see if they equal one another

  for (let i = 0; i < arr.length - 1; i++) {

    for (let j = i + 1; j <= i + k && j < arr.length; j++) {
      if (arr[i] === arr[j]) return true;
    }

  }
  return false;
}

// nums = [2,3,1,1]
// nums = [1,2,3,1,2,3]
// containsDups(nums, 2)  

function containsDups(arr, k)   {
  //keep track of numbers you have in your map
  //as you loop through arr, you can add/delete. Check in map to see if num exists

  let obj = new Set();
  //1, 2, 3
  for (let i = 0; i < arr.length; i++) {
    if (obj.has(arr[i])) return true;

    obj.add(arr[i]);

    if (obj.size > k) {
      obj.delete(arr[i-k])
    }

  }
  return false;
}

// nums = [1,2,3,1,2,3]
nums = [2,3,1,1, 2, 3, 4, 5]
containsDups(nums, 2)
