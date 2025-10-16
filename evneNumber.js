function evenNumber(nums) {
    let count = 0;
    for (let num of nums) {
        if (num % 2 == 0) {
            count++
        }
    }
    return count
}

console.log(evenNumber([1,2,3,4,6]))