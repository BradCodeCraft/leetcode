/**
 * @param {number[]} nums
 * @returns {number}
 */
function pivotIndex(nums) {
  let left = 0;
  let total = 0;

  for (const num of nums) {
    total += num;
  }

  for (let i = 0; i < nums.length; i++) {
    if (left * 2 === total - nums[i]) {
      return i;
    }

    left += nums[i];
  }

  return -1;
}

export { pivotIndex };
