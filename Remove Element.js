let nums = [3, 2, 2, 3];
let val = 3;
let k = 0;

var removeElement = function(nums, val) {
   for (let i = 0; i < nums.length; i++) {
       if (nums[i] !== val) {
           nums[k] = nums[i]; 
           k++; 
       }
   }
};

// Call the function and pass `nums` and `val`
removeElement(nums, val);

// Print `k` which represents the new length of the array after removal
console.log(k);  // Output: 2

  // Output: [2, 2]
