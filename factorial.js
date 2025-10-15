function factorialMultiply(num) {
    let sum = 1;
    for (let i = 5; i > 1; i--) {
        sum *= i
    }
    return sum
}
console.log(factorialMultiply(5))