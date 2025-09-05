/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
  let left = 0;

  for (let right = 0; right < nums.length; right += 1) {
    if (nums[right] !== 0) {
      const temporary = nums[left];
      nums[left] = nums[right];
      nums[right] = temporary;
      left += 1;
    }
  }
}

export { moveZeroes };
