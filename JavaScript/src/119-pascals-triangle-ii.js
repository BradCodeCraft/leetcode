/**
 * @param {number} rowIndex
 * @return {number[]}
 */
function getRow(rowIndex) {
  if (rowIndex === 0) return [1];
  if (rowIndex === 1) return [1, 1];

  let pascalArray = [[1], [1, 1]];

  for (let i = 2; i <= rowIndex; i += 1) {
    let row = new Array(i + 1);
    row[0] = 1;
    row[row.length - 1] = 1;

    for (let j = 1; j < row.length - 1; j += 1) {
      row[j] = pascalArray[i - 1][j - 1] + pascalArray[i - 1][j];
    }

    if (i === rowIndex) {
      return row;
    } else {
      pascalArray.push(row);
    }
  }
}

export { getRow };
