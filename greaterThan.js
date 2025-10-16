function greaterThen(nums) {
    let newArr = []
    for (let arr of nums) {
          if(arr>10){
            newArr.push(arr)
          }
    }
    return newArr
}
console.log(greaterThen([12,5,14,26,10]))