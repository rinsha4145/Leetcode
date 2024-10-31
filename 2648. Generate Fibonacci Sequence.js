fn = (x) => x * 5, args = [2], t = 20
var cancellable = function(fn, args, t) {
    const t1 = setTimeout(()=>fn(...args), t);
    return () => clearTimeout(t1)
};
