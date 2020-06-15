function flatten(arr){
    let res = []

    const helper = (arr) => {
        if (!arr.length) return;

        if (Array.isArray(arr[0])) {
            helper(arr[0])
        } else {
            res.push(arr[0])
        }
        helper(arr.slice(1))
    }
    helper(arr)

    return res;
}
