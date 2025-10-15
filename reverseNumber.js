function resverseNumber(num) {
    let newStrs = num + '';
    let reverseNum = ''
    for (let i = newStrs.length - 1; i >=0; i--) {
         reverseNum+=newStrs[i]
    }
     let convertNum=parseInt(reverseNum)
    return convertNum
}
console.log(resverseNumber(23))