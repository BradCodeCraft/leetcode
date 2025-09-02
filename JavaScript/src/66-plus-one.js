/**
 * @param {number[]} digits
 * @returns {number[]}
 */
function plusOne(digits) {
  let newLastDigit = digits[digits.length - 1] + 1;
  let carryOver = newLastDigit >= 10 ? 1 : 0;
  newLastDigit = newLastDigit >= 10 ? newLastDigit % 10 : newLastDigit;
  digits[digits.length - 1] = newLastDigit;
  let pointer = digits.length - 2;

  while (pointer >= 0) {
    let newDigit = digits[pointer] + carryOver;
    carryOver = newDigit >= 10 ? 1 : 0;
    newDigit = newDigit >= 10 ? newDigit % 10 : newDigit;
    digits[pointer] = newDigit;

    pointer -= 1;
  }

  return carryOver === 1 ? [1, ...digits] : digits;
}

export { plusOne };
