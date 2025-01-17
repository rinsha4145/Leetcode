let n = 2;
var fib = function (n) {
  let fib = [0, 1];
  let start = 0;
  for (let i = 2; i <= 30; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[n];
};

console.log(fib(n));
