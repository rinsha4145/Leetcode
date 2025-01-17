var sumOfTheDigitsOfHarshadNumber = function (x) {
  let sum = 0;
  let s = x.toString();
  for (let i of s) sum += parseInt(i);
  if (x % sum === 0) return sum;
  return -1;
};
console.log(sumOfTheDigitsOfHarshadNumber(18));
