function specialCharacter(strs) {
    let count = 0
    for (let str of strs) {
        if (!((str >= 'a' && str <= 'z') ||
            (str >= 'A' && str <= 'Z') ||
            (str >= '0' && str <= '9')
        )) {
          count++
        }
    }
    return count
}
console.log(specialCharacter('hell23@#$%$^%$%^$%'))