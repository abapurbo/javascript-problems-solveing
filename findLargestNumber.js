function findLargestNumber(nums) {
    let largest = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > largest) {
            largest = nums[i]
        }
    }
    return largest
}
console.log(findLargestNumber([30,40,50]))