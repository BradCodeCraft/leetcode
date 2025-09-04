/**
 * @param {number[]} nums
 * @returns {number}
 */
function findMaxConsecutiveOnes(nums) {
  let max = 0;
  let cur = 0;

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === 1) {
      cur += 1;
    } else {
      max = cur >= max ? cur : max;
      cur = 0;
    }
  }

  return cur >= max ? cur : max;
}

export { findMaxConsecutiveOnes };
