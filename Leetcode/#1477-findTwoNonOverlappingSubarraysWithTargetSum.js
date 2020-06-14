var minSumOfLengths = function(arr, target) {
    let allSubs = [] // [length:[start,end]]

    let result = Infinity
    let sum = 0
    let left = 0

    for (let right = 0; right < arr.length; right++){
        sum += arr[right]
        while (sum > target) {
            sum -= arr[left]
            left++
        }
        if (sum === target){
            let entry = [right-left+1,[left,right]]
            allSubs.push(entry)
        }

    }
    allSubs.sort((a,b) => a[0]-b[0]) // is this necessary? bottleneck
    if (allSubs.length < 2) return -1
    // shortest 2 intervals not overlapping
    for (let i = 0; i < allSubs.length-1; i++){
        let first = allSubs[i]
        let firstStart = first[1][0]
        let firstEnd = first[1][1]
        for (let j = i+1; j< allSubs.length; j++){
            let second = allSubs[j]
            let secondStart = second[1][0]
            let secondEnd = second[1][1]
            if ((firstEnd < secondStart && firstStart < secondStart) || (secondEnd < firstStart && secondStart < firstStart)){
                let currLength = first[0]+second[0]
                result = Math.min(result, currLength)
                break
            }
        }
    }
    return result === Infinity ? -1 : result
}
