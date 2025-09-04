/**
 * @param {string} a
 * @param {string} b
 * @returns {string}
 */
function addBinary(a, b) {
  let pointerA = a.length - 1;
  let pointerB = b.length - 1;
  let result = "";
  let carry = 0;

  while (pointerA >= 0 || pointerB >= 0) {
    let valueA = a.charAt(pointerA) ? parseInt(a.charAt(pointerA)) : 0;
    let valueB = b.charAt(pointerB) ? parseInt(b.charAt(pointerB)) : 0;
    let sum = valueA + valueB + carry;

    if (sum >= 2) {
      sum -= 2;
      carry = 1;
    } else {
      carry = 0;
    }

    result = sum + result;

    if (pointerA >= 0) pointerA -= 1;
    if (pointerB >= 0) pointerB -= 1;
  }

  return carry ? carry + result : result;
}

export { addBinary };
