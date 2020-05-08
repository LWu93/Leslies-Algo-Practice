var plusOne = function(digits) {
    let carry = 0
    for (let i = digits.length-1; i >= 0; i--) {
        let sum = i === digits.length-1 ? digits[i] + carry + 1 : digits[i] + carry
        digits[i] = sum % 10
        if (sum > 9) {
            carry = 1
        }
        else {
            carry = 0
            break
        }
    }
    if (carry === 1) {
        digits.unshift(1)
    }
    return digits
}

// Input: [1,2,3]
plusOne([1,2,3])
// Output: [1,2,4]
plusOne([9,9,9])
// Output: [1,0,0,0]
