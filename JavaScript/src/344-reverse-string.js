/**
 * @param {character[]} s
 * @returns {void} Do not return anything, modify s in-place instead.
 */
function reverseString(s) {
  let left = 0;
  let right = s.length - 1;

  while (left <= right) {
    const temporary = s[left];
    s[left] = s[right];
    s[right] = temporary;

    left += 1;
    right -= 1;
  }
}

export { reverseString };
