 const num=9
 const result = (num % 7 === 0)
    ? "Multiple of 7"
    : (num % 3 === 0)
      ? "Multiple of 3"
      : "Not a multiple of 3 or 7";

  console.log(result);