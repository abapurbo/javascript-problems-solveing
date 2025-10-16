function findSamllestNumber(nums) {
    let smallest = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < smallest) {
            smallest = nums[i]
        }
    }
    return smallest;
}
console.log(findSamllestNumber([1,2,0,4]))