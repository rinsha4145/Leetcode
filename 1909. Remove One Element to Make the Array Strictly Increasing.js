var canBeIncreasing = function (nums) {
  let removed = false;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] >= nums[i + 1]) {
      if (removed) return false;

      if (
        i > 0 &&
        nums[i - 1] >= nums[i + 1] &&
        i + 2 < nums.length &&
        nums[i] >= nums[i + 2]
      ) {
        return false;
      }

      removed = true;
    }
  }

  return true;
};
console.log(canBeIncreasing([1, 2, 10, 5, 7]));
