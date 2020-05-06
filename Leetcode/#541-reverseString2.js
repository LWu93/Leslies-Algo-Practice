var reverseStr = function(s, k) {
    let arr = s.split('')
    for(let i = 0 ; i < arr.length-1; i+=(2*k)){
        let left = i;
        let right = Math.min(i + k - 1, arr.length-1);
        while(left < right){
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
    return arr.join('');
};

//Input: s = "abcdefg", k = 2
reverseStr("abcdefg", 2)
//==> Output: "bacdfeg"
