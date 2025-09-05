/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  let left = 0;

  for (let right = 1; right < nums.length; right += 1) {
    if (nums[right] !== nums[left]) {
      left += 1;
      nums[left] = nums[right];
    }
  }

  return left + 1;
}

export { removeDuplicates };
