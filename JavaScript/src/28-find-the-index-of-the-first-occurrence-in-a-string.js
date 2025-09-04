/**
 * @param {string} haystack
 * @param {string} needle
 * @returns {number}
 */
function strStr(haystack, needle) {
  for (let i = 0; i <= haystack.length - needle.length; i += 1) {
    if (haystack.slice(i, i + needle.length) === needle) {
      return i;
    }
  }

  return -1;
}

export { strStr };
