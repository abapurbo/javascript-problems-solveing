const examGrade =50;
if (examGrade >= 85) {
    console.log('grade A', examGrade)
}
else if (examGrade > 50 && examGrade < 60) {
    console.log('grade B', examGrade)
}
else if (examGrade === 50) {
    console.log('grade C', examGrade)
}
else {
    console.log('Fail',examGrade)
}