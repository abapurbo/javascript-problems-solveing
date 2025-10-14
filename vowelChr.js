let chr = 'r'

if (chr == 'a' || chr == 'i' || chr == 'e' || chr == 'u' || chr == 'o') {
    console.log('Vowel')
}
else if (chr == 'A' || chr == 'I' || chr == 'E' || chr == 'U' || chr == 'O') {
    console.log("Vowel")
}
else if ((chr > 'a' || chr > 'A') && (chr <= 'z' || chr <= 'Z')){
    console.log('consonet')
}
else{
    console.log('this is a not a alphabet character')
}