let nums = [2, 7, 11, 15];
let target = 9;
var twoSum = function (nums, target) {
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        console.log([i, j]);
      }
    }
  }
};
twoSum(nums, target);
