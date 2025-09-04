/**
 * @param {number[]} nums
 * @param {number} val
 * @returns {number}
 */
function removeElement(nums, val) {
  let insertPointer = 0;

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] !== val) {
      nums[insertPointer] = nums[i];
      insertPointer += 1;
    }
  }

  return insertPointer;
}

export { removeElement };
