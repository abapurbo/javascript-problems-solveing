const strs = 'programming'
let totalVowel = 0;
for (let str of strs) {
    if (str =='a' || str=='A'|| str=='i'|| str =='o'|| str=='O'||str=='I' || str=='U'||str=='u'||str=='e'||str=='E'){
        totalVowel++
    }
}
console.log(totalVowel)