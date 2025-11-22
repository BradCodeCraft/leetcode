/**
 * @param {number[]} nums
 * @returns {number}
 */
function majorityElement(nums) {
  const map = {};
  let max;
  let maxCount;

  for (const num of nums) {
    // Store number and count
    if (map[num]) map[num] += 1;
    else map[num] = 1;

    // Replace max if value is higher
    if (max == null) {
      max = Number(num);
      maxCount = map[num];
      continue;
    }

    if (map[num] > maxCount) {
      max = Number(num);
      maxCount = map[num];
    }
  }

  return max;
}

export { majorityElement };
