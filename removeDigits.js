function removeDigits(nums) {
    let newString = ''
    for (let num of nums) {
        if (num >= '0' && num <= '9') {
            continue
        }
        newString += num
    }
    return newString
}
console.log(removeDigits('hello2025world'))