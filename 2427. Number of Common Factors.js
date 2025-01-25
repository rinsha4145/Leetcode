var commonFactors = function (a, b) {
  let count = 0;
  for (let i = 1; i <= Math.min(a, b); i++) {
    a % i === 0 && b % i === 0 ? count++ : 0;
  }
  return count;
};
console.log(commonFactors(12, 6));
