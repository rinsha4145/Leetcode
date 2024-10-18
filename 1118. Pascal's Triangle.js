let numRows = 5;
var generate = function(numRows) {
    let triangle = [];
    if (numRows === 0) {
        return [];
    }
    if (numRows === 1) {
        return [[1]];
    }
    for (let i = 0; i < numRows; i++) {
        let row = new Array(i + 1).fill(1);
        for (let j = 1; j < i; j++) {
            row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
        triangle.push(row);
    }
    return triangle;
};

// Call the function and log the result
console.log(generate(numRows));
