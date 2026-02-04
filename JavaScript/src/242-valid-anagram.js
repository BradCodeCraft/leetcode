/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
export const isAnagram = function (s, t) {
  // check if both strings are equal in length
  if (s.length !== t.length) return false;

  let hashTable = {};

  // store characters in s in a hash table
  for (const l of s) {
    const value = hashTable[l];

    if (value != null) hashTable[l] = value + 1;
    else hashTable[l] = 1;
  }

  // check if characters in t are in hash table
  for (const l of t) {
    const value = hashTable[l];

    if (value == null || value == 0) return false;
    else hashTable[l] = value - 1;
  }

  // result if all characters in t are in s
  return true;
};
