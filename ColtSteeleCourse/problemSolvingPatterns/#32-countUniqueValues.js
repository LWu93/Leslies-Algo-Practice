function countUniqueValues(arr){
  if (!arr.length) return 0;

  let start = 0;
  let end = 1;

  for (end; end < arr.length; end++) {
      if (arr[end] !== arr[start]) {
          start++
          arr[start] = arr[end]
      }
  }

  return start + 1;
}
// s
//[1,1,1,1,1,2]
//   e
