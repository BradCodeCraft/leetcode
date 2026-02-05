/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = function (n) {
  const bit = n.toString(2);
  return n > 0 && bit.split("").filter((e) => e === "1").length == 1;
};

export { isPowerOfTwo };
