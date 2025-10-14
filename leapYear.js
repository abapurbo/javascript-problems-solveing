let year = 2005;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log('this is a leap year',year);
}
else{
    console.log('this is a not leap year',year)
}