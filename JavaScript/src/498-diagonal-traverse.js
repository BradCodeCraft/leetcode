/**
 * @param {number[][]} mat
 * @returns {number[]}
 */
function findDiagonalOrder(mat) {
  if (!mat || mat.length === 0) return [];

  const rows = mat.length;
  const columns = mat[0].length;
  let resultArray = new Array(rows * columns);
  let row = 0;
  let column = 0;

  for (let i = 0; i < rows * columns; i += 1) {
    resultArray[i] = mat[row][column];
    const isGoingUpRight = (row + column) % 2 === 0;

    if (isGoingUpRight) {
      if (column === columns - 1) row += 1;
      else if (row === 0) column += 1;
      else {
        row -= 1;
        column += 1;
      }
    } else {
      if (row === rows - 1) column += 1;
      else if (column === 0) row += 1;
      else {
        row += 1;
        column -= 1;
      }
    }
  }

  return resultArray;
}

export { findDiagonalOrder };
