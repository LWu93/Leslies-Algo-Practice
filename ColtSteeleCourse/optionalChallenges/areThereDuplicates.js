function areThereDuplicates() {
  // good luck. (supply any arguments you deem necessary.)
//   console.log("Args", [...arguments])
  let arr = [...arguments]
  let hash = {}

  for (let i = 0; i < arr.length; i++) {
      let curr = arr[i]
      if (hash[curr]) return true
      else hash[curr] = true
  }

  return false
}
