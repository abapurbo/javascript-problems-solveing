const strs = 'HELLO';

for (let i = 0; i < strs.length; i++) {
    for (let j = i + 1; j <= strs.length; j++) {
        console.log(strs.slice(i, j))
    }
}
