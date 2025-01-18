var isPalindrome = function (x) {
  const y = x.toString().split("").reverse().join("");
  if (x == y) {
    return true;
  } else return false;
};
console.log(isPalindrome(121));
