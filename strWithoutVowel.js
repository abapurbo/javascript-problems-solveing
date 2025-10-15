const strs = 'hello'
let newStr = ''
for (let str of strs) {

    if (str !== 'A' && str !== 'a' && str !== 'E' && str !== 'e' && str !== 'U' && str !== 'u' && str !== 'O' && str !== 'I' && str !== 'o' && str !== 'i') {
        newStr += str
    }
}

console.log(newStr)