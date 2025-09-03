/**
 * @param {number[][]} matrix
 * @returns {number[]}
 */
function spiralOrder(matrix) {
  const rows = matrix.length;
  const columns = matrix[0].length;
  let topBoundary = 0;
  let bottomBoundary = rows - 1;
  let leftBoundary = 0;
  let rightBoundary = columns - 1;
  let resultArray = new Array(rows * columns);
  let row = 0;
  let column = 0;
  let currentDirection = 0;

  for (let i = 0; i < rows * columns; i += 1) {
    resultArray[i] = matrix[row][column];

    switch (currentDirection) {
      case 0:
        if (column === rightBoundary) {
          row += 1;
          currentDirection = currentDirection + 1;
          topBoundary += 1;
        } else {
          column += 1;
        }
        break;
      case 1:
        if (row === bottomBoundary) {
          column -= 1;
          currentDirection = currentDirection + 1;
          rightBoundary -= 1;
        } else {
          row += 1;
        }
        break;
      case 2:
        if (column === leftBoundary) {
          row -= 1;
          currentDirection = currentDirection + 1;
          bottomBoundary -= 1;
        } else {
          column -= 1;
        }
        break;
      case 3:
        if (row === topBoundary) {
          column += 1;
          currentDirection = (currentDirection + 1) % 4;
          leftBoundary += 1;
        } else {
          row -= 1;
        }
        break;
    }
  }

  return resultArray;
}

export { spiralOrder };
