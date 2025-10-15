const word = "I love programming"
const arrayWords = word.split(' ')
let longestWord = ''
for (let arrayWord of arrayWords) {
    if (arrayWord.length > longestWord.length) {
        longestWord = arrayWord
    }
}
console.log(longestWord)