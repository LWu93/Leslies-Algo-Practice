function averagePair(arr, target){
  if (!arr.length) return false;

  let left = 0;
  let right = arr.length - 1

  while (left <= right) {
      let currAvg = arr[left] + arr[right] / 2

      if (currAvg === target) return true
      if (currAvg > target) {
          right--
      } else {
          left++
      }
  }

  return false
}
