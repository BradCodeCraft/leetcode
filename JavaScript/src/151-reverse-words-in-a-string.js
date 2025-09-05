/**
 * @param {string} s
 * @return {string}
 */
function reverseWords(s) {
  let wordArr = s.split(" ");
  wordArr = wordArr.filter((val) => val.length > 0);
  return wordArr.reverse().join(" ");
}

export { reverseWords };
