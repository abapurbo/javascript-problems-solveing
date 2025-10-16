function convertUpperCase(arrs) {
    let newArr = []
    for(let arr of arrs){
        newArr.push(arr.toUpperCase())
    }
    return newArr
}
console.log(convertUpperCase(['hello','world','javascript']))