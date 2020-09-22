/**
 * @param {number[]} nums
 * @return {number[]}
 */

/* psuedocode

There can be ATMOST 2 elements that satisfy the majority element. We need to be able to loop through twice to look for those nums.

potentially store 2 vars to keep track of the num and freq.
once another num overtakes the freq, update it to be that num and freq.
do the same for our var2 since we need to track both.
check if the freq of that num is > n/3, if it is push into res arr.

second loop will need to check freq of the vars that are most freq in the nums arr


Solution -

While scanning the array, the counter is incremented if you encounter an element which is exactly same as the potential candidate but decremented otherwise. When the counter reaches zero, the element which will be encountered next will become the potential candidate. Keep doing this procedure while scanning the array. However, when you have exhausted the array, you have to make sure that the element recorded in the potential candidate variable is the majority element by checking whether it occurs more than ⌊n/2⌋ times in the array.
If an element is truly a majority element, it will stick in the potential candidate variable, no matter how it shows up in the array (i.e. all clustered in the beginning of the array, all clustered near the end of the array, or showing up anywhere in the array), after the whole array has been scanned. Of course, while you are scanning the array, the element might be replaced by another element in the process, but the true majority element will definitely remain as the potential candidate in the end.

both candidates are initialized as None in the beginning with their corresponding counters being 0. While going through the array:

- If the current element is equal to one of the potential candidate, the count for that candidate is increased while leaving the count of the other candidate as it is.
- If the counter reaches zero, the candidate associated with that counter will be replaced with the next element if the next element is not equal to the other candidate as well.
- Both counters are decremented only when the current element is different from both candidates.

*/

var majorityElement = function (nums) {
	if (!nums.length) return [];
	if (nums.length === 1) return nums;

	let maj1 = { num: 0, freq: 0 },
		maj2 = { num: 1, freq: 0 }; //first 2 nums are insignificant

	for (const num of nums) {
		//first 2 cases cover if they are unique to both nums.
		if (num === maj1.num) maj1.freq++;
		else if (num === maj2.num) maj2.freq++;
		//next two cases cover IF we hit a point where the freq is 0, we need to replace w new num
		else if (maj1.freq === 0) {
			maj1.num = num;
			maj1.freq = 1;
		} else if (maj2.freq === 0) {
			maj2.num = num;
			maj2.freq = 1;
		}
		//finally if no nums match, we can simply subtract the freq from both
		else {
			maj1.freq--;
			maj2.freq--;
		}
	}

	//loop through a second time to see if its freq is > n/3. if it is, push into res arr
	let count1 = 0,
		count2 = 0;
	for (const num of nums) {
		if (num === maj1.num) count1++;
		else if (num === maj2.num) count2++;
	}

	let res = [];
	if (count1 > nums.length / 3) res.push(maj1.num);
	if (count2 > nums.length / 3) res.push(maj2.num);

	return res;
};

/* complexity. N - nums.length

Time - O(N). 2 loops through nums arr
Space - O(1). Constant vars
*/
