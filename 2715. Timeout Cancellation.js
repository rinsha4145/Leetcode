let fn = (x) => x * 5;
let args = [2];
let t = 20;

var cancellable = function (fn, args, t) {
  const t1 = setTimeout(() => {
    console.log(fn(...args)); // Log the result of fn
  }, t);
  return () => clearTimeout(t1);
};

const cancel = cancellable(fn, args, t);
