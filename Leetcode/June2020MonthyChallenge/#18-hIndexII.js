var hIndex = function(citations) {
    if (!citations.length) return 0;

    let left = 0;
    let right = citations.length - 1

    while (left <= right) {
        let mid = left + Math.floor((right-left)/2)
        // console.log('mid', mid,"left", left, right",right)
        if (mid === citations.length) return mid;
        if (citations.length - mid <= citations[mid]) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return citations.length - left
};
