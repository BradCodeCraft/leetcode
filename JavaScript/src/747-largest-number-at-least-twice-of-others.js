/**
 * @param {number[]} nums
 * @returns {number}
 */
function dominantIndex(nums) {
  let max = 0;
  let maxIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
      maxIndex = i;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] * 2 > max && i !== maxIndex) {
      return -1;
    }
  }

  return maxIndex;
}

export { dominantIndex };
