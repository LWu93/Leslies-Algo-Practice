function maxSubarraySum(arr, length){
  if (arr.length < length) return null;

  let maxSum = -Infinity;
  let currSum = 0;
  let left = 0;

  for (let right = 0; right < arr.length; right++) {
      currSum += arr[right]
      if (right - left >= length) {
          currSum -= arr[left]
          left++
      }

      maxSum = Math.max(currSum, maxSum)
  }

  return maxSum
}
