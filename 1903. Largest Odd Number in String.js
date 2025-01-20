var largestOddNumber = function (num) {
  if (Number(num) % 2 === 1) return num;
  const item = num.split("").map((item) => Number(item));
  for (let i = item.length - 1; i >= 0; i--)
    if (item[i] % 2 === 1) return num.slice(0, i + 1);
  return "";
};
console.log(largestOddNumber("52"));
