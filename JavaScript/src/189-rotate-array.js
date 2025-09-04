/**
 * @param {number[]} nums
 * @param {number} k
 * @returns {void} Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
  let size = nums.length;
  k = k % size;
  let rotatedArray = new Array(size);

  for (let i = 0; i < size; i += 1) {
    rotatedArray[i] = nums[(size - k + i) % size];
  }

  for (let i = 0; i < size; i += 1) {
    nums[i] = rotatedArray[i];
  }
}

export { rotate };
