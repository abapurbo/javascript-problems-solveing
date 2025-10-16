function totalCharecter(arrs) {
    let count = 0;
    for (let arr of arrs) {
        count += arr.length
    }
    return count
}
console.log(totalCharecter(['hi','hello','world']))