// BFS to test if x and y are on the same level.
// to test for different parents,empty each queue's parent's left and right into an array.
// each level will have an array of children arrays. if x and y are on the same level but in different children arrays, they have different parents.
var isCousins = function(root, x, y) {
    if (root === null) return false

    let queue = [root]
    while (queue.length) {
        let size = queue.length
        let level = 1
        let parentHash = {} // check {x: xparent, y: yparent } parent[x] !== parent[y]
        let levelHash = {} // check {x:xlevel, y:ylevel} levelHash[x] == levelHash[y]
        for (let i = 0; i < size; i++){
            let parent = queue.shift()

            if (parent.left !== null) {
                if (parent.left.val === x) {
                    parentHash[x] = parent.val
                    levelHash[x] = level
                } else if (parent.left.val === y) {
                    parentHash[y] = parent.val
                    levelHash[y] = level
                }
                queue.push(parent.left)
            }
            if (parent.right !== null) {
                 if (parent.right.val === x) {
                    parentHash[x] = parent.val
                    levelHash[x] = level
                } else if (parent.right.val === y) {
                    parentHash[y] = parent.val
                    levelHash[y] = level
                }
                queue.push(parent.right)
            }

        }
        // console.log(parentHash)
        if (parentHash[x] || parentHash[y]) {
            if (parentHash[x] !== parentHash[y] && levelHash[x] === levelHash[y]) return true
            else return false
        }
        level++
    }
    return false
}
