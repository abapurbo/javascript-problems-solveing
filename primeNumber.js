function primeNumber(num) {
    if ((num % 1 == 0) && (num % num == 0) && (num % 2 !== 0)) {
        console.log('The number is prime')
    }
    else{
        console.log('The number is not prime')
    }
}
primeNumber(7)