const zigzagLevelOrder = (root) => {
    let result = []
    if (root === null) return result
    let direction = true // true for odd levels, reversed for evens (false)
    let queue = [root]
    while (queue.length) {
        let level = queue.length
        let currentLevel = []
        for (let i = 0; i < level; i++) {
            let current = queue.shift()
            currentLevel.push(current.val)
            if (current.left !== null) {
                queue.push(current.left)
            }
            if (current.right !== null) {
                queue.push(current.right)
            }
        }
        if (direction) result.push(currentLevel)
        else if (!direction) result.push(currentLevel.reverse())
        direction = !direction
    }
    return result
}

// input [3,9,20,null,null,15,7]
zigzagLevelOrder()
//output
// [
//   [3],
//   [20,9],
//   [15,7]
// ]
