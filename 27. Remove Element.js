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
removeElement(nums, val);
console.log(k); 


