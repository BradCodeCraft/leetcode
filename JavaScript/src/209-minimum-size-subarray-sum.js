/**
 * @param {number} target
 * @param {number[]} nums
 * @returns {number}
 */
function minSubArrayLen(target, nums) {
  let left = 0;
  let cur = 0;
  let min = 0;

  for (let right = 0; right < nums.length; right += 1) {
    cur += nums[right];

    while (cur >= target) {
      if (right - left + 1 < min || min === 0) {
        min = right - left + 1;
      }

      cur -= nums[left];
      left += 1;
    }
  }

  return min;
}

export { minSubArrayLen };
