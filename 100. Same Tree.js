let p = [1, 2, 3],
  q = [1, 2, 3];
var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q || p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

console.log(isSameTree(p, q));
