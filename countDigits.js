const wordDigits = 'hello230928330942840924084world';
let count = 0
for (let wordDigit of wordDigits) {
    if (wordDigit >= 0 && wordDigit <= 9) {
        count++
    }
}
console.log(count)