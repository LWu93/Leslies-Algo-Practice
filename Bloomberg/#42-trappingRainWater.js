/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!

Example:
Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6

*/

/**
 * @param {number[]} height
 * @return {number}
 */

/* psuedocode
you want the find the max height or elevation of each wall so that you know if it fills up water or not in the device.
by knowing the max wall height from each side, you're effectively able to count the amount of water from left to right

store maxHeight of the wall from the left to right
store maxHeight of the wall from the right to left

As you can see from the diagram, finding the maxHeight from the left and right and subtracting it from the wallHeight of the index will show...
1 - the walls are equal height and you cannot trap any water at that idx or
2 - if you do have a returned val, that idx is storing the difference of the maxHeights vs the currHeight of the wall itself

idx 1 - the maxHeight is 1 and the height is 1, thus not storing any water.
idx 2 - the maxHeight from the left is 1 and the right is 3. So we take the max Height and subtract it from the currwall @ 0 ==> 1.
idx 4 - the maxHeight from the left is 2 and the right is 3. Both sides will generate a maxHeight of 2 from both sides. - currHeight ==> 1.
*/
var trap = function(height) {
  if (!height.length) return 0;

  let leftHeights = [], rightHeights = new Array(height.length).fill(0);

  //Loop through the leftSide to get the maxHeight at each idx
  for (let i = 0; i < height.length; i++) {
    let prevMax = leftHeights[i-1] || 0
    leftHeights.push(Math.max(prevMax, height[i]))
  }

  //Do the same from the right side.
  for (let i = height.length-1; i >= 0; i--) {
    let prevMax = rightHeights[i+1] || 0
    rightHeights[i] = Math.max(prevMax, height[i])
  }

  //loop through a 3rd time to do the math. get the minHeight from both maxHeights and subtract by currHeight
  let trappedWater = 0;
  for (let i = 0; i < height.length; i++) {
    let minHeights = Math.min(leftHeights[i], rightHeights[i]);
    let diff = minHeights - height[i]
    trappedWater += diff
  }

  return trappedWater;
};
/* complexity. n - height.length;

Time - O(3n) ==> O(n). 3 for loops through height.
Space - O(n2) ==> O(n). Storing 2 arrays of maxHeights from both sides.

*/

/*optimization using 2 pointers and the same approach as above but no arrays.

We're moving the points as we KNOW the leftMax is less than rightMax and vice versa. We can do this because there has to be a higher/lower wall in between both sides. If there isen't then the device is flat and we can continue adding water stored since each step will have the same Max from both sides. Ex: if both sides were maxHeight 2, all we have to account for is the walls in between.

    if (height.length === 0) return 0;

    let left = 0, right = height.length-1;
    let leftMax=0, rightMax=0;
    let ans = 0;

        while (left < right) {
            if (height[left] > leftMax) leftMax = height[left];
            if (height[right] > rightMax) rightMax = height[right];
            if (leftMax < rightMax) {
                ans += Math.max(0, leftMax-height[left]);
                left++;
            } else {
                ans += Math.max(0, rightMax-height[right]);
                right--;
            }
        }

    return ans;

*/
