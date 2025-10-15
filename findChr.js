const chrs = 'hello';
const chracter = 'l';
let count = 0
for (let chr of chrs) {

    if (chracter == chr) {
        count++
    }
}
console.log(`${chracter} appears ${count} times`)