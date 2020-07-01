//Create an empty array and look at the smallest values in each input array
//While there are still values in the array.. (use pointers to keep track)
//if arr1[p1] is <= arr2[p2], push that value into our new arr and p1++.
//else push arr2's val into the new arr and p2++.
//once we've exhausted arr1 or arr2, you can push in the remaining of the other

const merge = (arr1, arr2) => {
  let result = [];
  let p1 = 0;
  let p2 = 0;

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] <= arr2[p2]) {
      result.push(arr1[p1])
      p1++
    } else {
      result.push(arr2[p2])
      p2++
    }
  }

  while (p1 < arr1.length) {
    result.push(arr1[p1])
    p1++
  }

  while (p2 < arr2.length) {
    result.push(arr2[p2])
    p2++
  }

  return result;
}

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  return merge(mergeSort(arr.slice(0,mid)), mergeSort(arr.slice(mid)))
}

mergeSort([100,1,2,3,300,200]) // return [1,2,3,100,200,300]

//Time Complexity - O(n log n)
//we are splitting the arr in half every time we are mergeSorting.
//there is still n space complexity because you still have to loop through the entire arr to sort
//Space Complexity - O(n)
//mergeSort creates a new arr every time mergeSort is called and returns a new arr
