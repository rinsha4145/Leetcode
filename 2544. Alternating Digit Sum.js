
var alternateDigitSum = function(n) {
    let isPositive = true;
    let digits = n.toString().split(''); 
    let sum = 0;
    for (let digit of digits) {
        let num = parseInt(digit); 
        if (isPositive) {
            sum += num;
            isPositive = false;
        } else {
            sum -= num;
            isPositive = true;
        }
    }

    return sum;
};
console.log(alternateDigitSum(521))