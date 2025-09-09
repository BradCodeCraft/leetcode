/**
 * @param {number[]} nums
 * @param {number} k
 * @returns {number[]}
 */
function topKFrequent(nums, k) {
  let dict = {};

  for (const num of nums) {
    if (dict[num]) {
      dict[num] += 1;
    } else {
      dict[num] = 1;
    }
  }

  let freq = new Array(nums.length + 1);

  for (let i = 0; i < freq.length; i++) {
    freq[i] = [];
  }

  for (const key of Object.keys(dict)) {
    const value = dict[key];

    freq[value] = [...freq[value], key];
  }

  let result = [];

  for (let i = freq.length - 1; i > 0; i--) {
    if (k == 0) break;
    if (!freq[i]) continue;

    for (const num of freq[i]) {
      if (k == 0) break;
      result.push(num);
      k -= 1;
    }
  }

  return result.map((value) => parseInt(value));
}

export { topKFrequent };
