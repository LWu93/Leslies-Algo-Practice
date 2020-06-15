function someRecursive(arr, cb){
  if (!arr.length) return false;
  let last = arr.pop()
  if (cb(last)) {
      return true
  } else {
      return someRecursive(arr,cb)
  }

}
