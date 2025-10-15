function smallLestDigit(num) {
    let min = num % 10;
    num = Math.floor(num / 10);
    while (num > 0) {
        let digit = num % 10;
        if (digit < min) {
            min = digit;
        }
        num = Math.floor(num / 10)
    }
    return min
}
console.log(smallLestDigit(5032))