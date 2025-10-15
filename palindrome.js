let strs = 'hello';
let reverse = ''

for (let i = strs.length - 1; i >= 0; i--) {
    reverse += strs[i]
}

if (strs === reverse){
    console.log('Palindrome')
}
else{
    console.log('Not Palindrome')
}