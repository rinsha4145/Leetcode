var sumZero = function(n) {
    let arr = [];
    for (let i = 1; i <= n/2; i++) {
       arr.push(i, -i); 
    }
    if (n%2){
      arr.push(0);
    } 
    return arr;
};