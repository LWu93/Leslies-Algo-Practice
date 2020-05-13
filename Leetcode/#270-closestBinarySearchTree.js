var closestValue = function(root, target) {
   if (root === null) return null

    let stack = [root]
    let closest = Infinity
    let closestValue = null

    while (stack.length) {
        let current = stack.pop()
        //we want to pop out the root and check the difference between the current val and the target
        let difference = Math.abs(current.val - target)
        //if difference is less than closest, which is initially infinity, we want to reassign closest to the difference
        if (difference < closest){
            closest = difference
            closestValue = current.val
        }
        //if the target is less than the current val and there is a left node, you want to Binary search left
        if (target < current.val && current.left) {
            current = current.left
            stack.push(current)
          //else you want to binary search right
        } else if (target > current.val && current.right) {
            current = current.right
            stack.push(current)
          //else return the closestValue we've gotten so far
        } else return closestValue

    }
    return closestValue

}
