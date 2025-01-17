let c = [15, 8, 42, 23, 4, 16, 50, 29, 9, 33, 7, 1, 60, 21, 37, 3],
  a = [],
  r = true;
let start = 0,
  end = c.length - 1;
const sort = (c) => {
  c.sort((a, b) => a - b);
  console.log(c);
  for (i = 0; i < 10; i++) {
    if (r) {
      a.push(c[start]);
      start++;
      r = false;
    } else {
      a.push(c[end]);
      end--;
      r = true;
    }
  }

  return a;
};
console.log(sort(c));
