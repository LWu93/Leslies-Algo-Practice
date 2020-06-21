//First Attempt. approach problem with dp again after looking into some more dp.

var calculateMinimumHP = function(dungeon) {
    //loop through matrix
    //if i is 0, all you gotta do is add up the previous j box
    //if j is 0, add up previous i box
    //if its in the middle and you have access to top and left, you want to take Math.min(top,left)
    //return last ele in matrix * -1 and then add 1 to cover min health of Knight
    let allPositives = true;

    for (let i = 0; i < dungeon.length; i++) {
        for (let j = 0; j < dungeon[i].length; j++) {
            if (dungeon[i][j] <= 0) allPositives = false //check if all options are positive or not
            if (i === 0 && j === 0) continue //you want to start at 0 but not add any previous nums

            if (i === 0) {
                dungeon[i][j] += dungeon[i][j-1]
                continue
            }
            if (j === 0) {
                dungeon[i][j] += dungeon[i-1][j]
                continue
            }

            let top = dungeon[i-1][j]
            let left = dungeon[i][j-1]
            //if they're both negative, you want the maximum of the minimums
            if (top < 0 && left < 0) {
                dungeon[i][j] += Math.max(top,left)
            } else if ((top < 0 && left > 0) || (top > 0 && left < 0)) {
                dungeon[i][j] += Math.max(top,left)
            } else {
                dungeon[i][j] += Math.min(top,left)
            }

        }
    }
    // console.log("dungeon", dungeon)
    //if all positive, knight wont ever lose health
    if (allPositives === true) return 1

    let lastIdx = dungeon[dungeon.length-1].length - 1
    // console.log("lastIdx", lastIdx)
    return (dungeon[dungeon.length-1][lastIdx] * -1) + 1
};
