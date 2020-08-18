//psuedocode - backtrack. Start an empty array with another empty arr
//we want to start tracking our subsets with an empty arr
//As we add a new num into our arr, we want to push the ele's of that array into res
//Then we want to recursively call backtrack with the trackingArr and increment i so we don't account for it again
//Pop off the last ele from the first iteration

//Recursive
function powerset(array) {

	let res = [[]];
	if (!array.length) return res

	const backtrack = (arr, idx) => {
		for (let i = idx; i < array.length; i++) {
			arr.push(array[i]);
			res.push([...arr])
			backtrack(arr, i+1)
			arr.pop()
		}
	}

	backtrack([], 0)
	return res;
}

//Iterative
function powerset (array) {
  const subsets = [[]]

  for (const ele of array) {
    let subsetLength = subsets.length;
    for (let i = 0; i < subsetLength; i++) {
      currSubset = subsets[i];
      subsets.push(currSubset.concat(ele))
    }
  }
  return subsets
}
//Time - O(2^n * n). Looping and creating subsets is doubling our subset as n increases.
//Space - O(2^n * n). Same as above.

