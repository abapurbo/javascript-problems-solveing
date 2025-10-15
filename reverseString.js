const strs = 'world'
let reverse = ''
for (let i = strs.length-1; i >= 0; i--) {
    reverse += strs[i]
}
console.log(reverse)