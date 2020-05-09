//ALEX's
// if first 2 points have slope, all other points have to have same slope
var checkStraightLine = function(coordinates) {
    if (coordinates.length === 2) return true
    let pt1 = coordinates[0]
    let pt2 = coordinates[1]
    // slope = dy/dx
    let slope = (pt2[1] - pt1[1]) / (pt2[0] - pt1[0])

    //we start from 2 because we accounted for first and second points.
    for (let i = 2; i < coordinates.length-1; i ++){
        let point = coordinates[i]
        let dy = point[1]-pt2[1]
        let dx = point[0]-pt2[0]
        if (slope !== dy / dx) return false
    }
    return true
};

// Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]])
// Output: true

// Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
checkStraightLine([[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]])
// Output: false
