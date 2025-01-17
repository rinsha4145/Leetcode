let nums = [3, 2, 1, 5, 6, 4],
  k = 2;
var findKthLargest = function (nums, k) {
  nums.sort((a, b) => a - b);
  return nums[nums.length - k];
};
console.log(findKthLargest(nums, k));
