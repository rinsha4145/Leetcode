var reverse = function (x) {
  const reversedString = Math.abs(x).toString().split("").reverse().join("");
  const reversedNumber = parseInt(reversedString);
  if (reversedNumber > Math.pow(2, 31) - 1) {
    return 0;
  }
  return x < 0 ? -reversedNumber : reversedNumber;
};
console.log(reverse(123));
