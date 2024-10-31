let fn = (x) => x * 5
let args = [2]
let t = 20
var cancellable = function(fn, args, t) {
    const t1 = setTimeout(()=>fn(...args), t);
    return () => clearTimeout(t1)
};
console.log(cancellable())
