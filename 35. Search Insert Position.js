let nums = [1,3,5,6], target = 5
var searchInsert = function(nums, target) {
    var low = 0;
    var high = nums.length - 1;

    while (low <= high) {
        var mid = Math.floor((low + high) / 2);  

        if (nums[mid] === target) {
            return mid;  
        } else if (nums[mid] < target) {
            low = mid + 1;  
        } else {
            high = mid - 1; 
        }
    }

    return low;  
};
 console.log(searchInsert(nums,target))