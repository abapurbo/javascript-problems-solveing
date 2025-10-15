let num = 1234;
let sum = 0
while (num > 0) {
    let digit = num % 10;        // শেষ digit বের করো
    console.log('ehllo',digit)
    sum += digit;                // sum এর সাথে যোগ করো
    num = Math.floor(num / 10);  // শেষ digit বাদ দাও
}
console.log(num,sum)