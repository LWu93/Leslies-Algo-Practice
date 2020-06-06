var reconstructQueue = function(people) {
    let res = [];

    people.sort((a, b) => a[0] == b[0] ? a[1] - b[1] : b[0] - a[0]);
    //this will sort the array first by height to see if they're equal.
    //if they are, you want to sort the num of people in ascending order
    //if not, you want to sort by height in descending order

    // [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]
    // [[7,0], [7,1], [6,1], [5,0], [5,2], [4,4]]

    //loop through the array of people and splice in the place of the ele in the res array.
    for (let i = 0; i < people.length; i++) {
        let [height, numInFront] = people[i];
        res.splice(numInFront, 0, people[i])
        // console.log(res, "numInFront:", numInFront, "ele:", people[i])
    }

    return res;
};
