const whereAreTheShips = (sea, topRight, bottomLeft) => {
    let ships = 0
    let [top, right] = topRight  // [4,4]
    let [bottom, left] = bottomLeft //[0,0]
    // bounds
    if(top < bottom || left > right || !sea.hasShips(topRight,bottomLeft)) {
        return 0
    }
    // found your ship
    if (top === bottom && left === right) return 1

    let horizontal = Math.floor(bottom + (top - bottom) / 2 )//no overflow
    let vertical = Math.floor(left + (right-left) / 2)


    console.log("bottomleft",[horizontal, vertical], bottomLeft)
    ships+=whereAreTheShips(sea, [horizontal, vertical], bottomLeft)
    console.log("bottom right",[top, vertical], [horizontal+1, left])
    ships+=whereAreTheShips(sea, [top, vertical], [horizontal+1, left])
    console.log("top left", [horizontal, right], [bottom,vertical+1])
    ships+=whereAreTheShips(sea, [horizontal, right], [bottom,vertical+1])
    console.log("top right", topRight, [horizontal + 1, vertical + 1])
    ships+=whereAreTheShips(sea, topRight, [horizontal + 1, vertical + 1])

    return ships
}
var countShips = function(sea, topRight, bottomLeft){
    return whereAreTheShips(sea, topRight, bottomLeft)
}
