/**
 * @param {string[]} strs
 * @returns {string}
 */
function longestCommonPrefix(strs) {
  let commonPrefix = "";

  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j].charAt(i) !== strs[0].charAt(i))
        return commonPrefix;
    }

    commonPrefix += strs[0].charAt(i);
  }

  return commonPrefix;
}

export { longestCommonPrefix };
