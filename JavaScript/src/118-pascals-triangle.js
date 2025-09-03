/**
 * @param {number} numRows
 * @returns {number[][]}
 */
function generate(numRows) {
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1, 1]];

  let resultArray = [[1], [1, 1]];

  for (let i = 2; i < numRows; i += 1) {
    let row = new Array(i);
    row[0] = 1;
    row[i] = 1;

    for (let j = 1; j < i; j += 1) {
      row[j] = resultArray[i - 1][j - 1] + resultArray[i - 1][j];
    }

    resultArray.push(row);
  }

  return resultArray;
}

export { generate };
