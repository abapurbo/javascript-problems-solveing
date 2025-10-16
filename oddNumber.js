function oddNumber(nums) {
    let count = 0;
    for (let num of nums) {
        if (num % 2 == 1) {
            count++
        }
    }
    return count
}
console.log(oddNumber([1,2,3,4,5,6]))