// const findDuplicate = (nums) => {
//     nums.sort((a,b) => a-b)

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === nums[i+1]) return nums[i]
//     }
// };
//Time Complexity - O(n log n)
//Space - O(1)


//Optimal - Floyd's Algo
const findDuplicate = (nums) => {
  //set 2 pointers to the beginning
  let tortoise = nums[0];
  let hare = nums[0];
  //since we KNOW there is a duplicate number, there will be a cycle and the ele/idx values will eventually be the same
  while (true) {
    tortoise = nums[tortoise];
    hare = nums[nums[hare]];
    if (tortoise === hare) {
      break;
    }
  }
  //when you find where they match, reset 1 pointer to equal the start and the other to equal where the cycle matched
  // Keep in mind this does not mean where the cycle begins but where they simply meet.
  let p1 = nums[0];
  let p2 = tortoise; //takes the idx value
  //loop through until you do find the beginning of the cycle and you find the beginning of the cycle, the duplicate.
  while (p1 !== p2) {
    p1 = nums[p1];
    p2 = nums[p2];
  }
  return p1;
};
findDuplicate([3,1,3,4,2]) // returns 3
// t
//[3,1,3,4,2]
//     h
