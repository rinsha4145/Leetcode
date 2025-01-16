var relativeSortArray = function(arr1, arr2) {
    let sortedArr1 = arr1.sort((a, b) => a - b);
    let result = [];
    for (let num of arr2) {
        for (let j = 0; j < sortedArr1.length; j++) {
            if (num === sortedArr1[j]) {
                result.push(sortedArr1[j]);
            }
        }
    }
    for (let num of sortedArr1) {
        if (!arr2.includes(num)) {
            result.push(num);
        }
    }
    return result;
};
console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19],[2,1,4,3,9,6]))