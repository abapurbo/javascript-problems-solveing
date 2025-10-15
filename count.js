function countWord(word) {
    let count = 0;
    let check = ''
    for (let i = 0; i < word.length; i++) {
        if (word[i] !== ' ') {
            console.log(word[i])
            if (i === word.length - 1 || word[i + 1] == ' ') {
                  check +=word[i]
            }
        }
    }
    console.log('hello',check)
    return count


}
console.log(countWord('I love coding'))