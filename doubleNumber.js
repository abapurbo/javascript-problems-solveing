function doubleNumberInArr(nums) {
    let newArr = []
    for (let num of nums){
        newArr.push(num*2)
    }
    return newArr
}
console.log(doubleNumberInArr([2,3,4]))