function filterStringElement(strs) {
    let strArr = []
    for (let str of strs) {
        if (typeof str ==='string') {
            strArr.push(str)
        }
    }
    return strArr
}
console.log(filterStringElement(['hello',1,true,'apple','world']))