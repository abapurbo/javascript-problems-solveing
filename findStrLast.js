function firstLetterAndLastLetter(chrs) {
    let count = ' '
    if (chrs) {
        count += chrs[0] + chrs[chrs.length - 1]
    }
    else{
        console.log('The string is empty')
    }
    return count

}
console.log(firstLetterAndLastLetter('javascript'))
