const findLucky = (arr) => {
    //loop through the arr and keep track of the frequency of numbers
    let frequency = {};
    let largestLuckyNum = -1;

    arr.forEach(num => {
        if (!frequency[num]) {
            frequency[num] = 1;
        } else {
            frequency[num]++;
        }
    });

    //check if the key/value === to itself, we can do loop through Obj keys

    for (key in frequency) {
        let check = Number(key)
        if ( check === frequency[key] && check > largestLuckyNum) {
            largestLuckyNum = check;
        }
    }

    //return largest val or -1 if there are no lucky #s
    return largestLuckyNum;
};

//arr = [2,2,3,4]
findLucky([2,2,3,4]) // ==> 2
// Explanation: The only lucky number in the array is 2 because frequency[2] == 2.

// arr = [1,2,2,3,3,3]
findLucky([1,2,2,3,3,3]) // ==> 3
// Explanation: The only lucky number in the array is 2 because frequency[2] == 2.

// arr = [2,2,2,3,3]
findLucky([1,2,2,3,3,3]) // ==> -1
// Explanation: There are no lucky numbers in the array.
