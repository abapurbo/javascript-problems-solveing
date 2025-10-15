function searchUppercase(str) {
    let count = 0;
    for (let chr of chrs) {
        if (chr >= "A" && chr <= "Z") {
            count++
        }
    }
    return count
}
console.log(searchUppercase('HeLLo'))