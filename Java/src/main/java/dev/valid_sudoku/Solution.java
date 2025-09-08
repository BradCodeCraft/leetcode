package dev.valid_sudoku;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Solution
 */
public class Solution {
  public boolean isValidSudoku(char[][] board) {
    Map<Integer, List<Boolean>> rows = new HashMap<>();
    Map<Integer, List<Boolean>> cols = new HashMap<>();
    Map<Integer, List<Boolean>> boxes = new HashMap<>();

    for (int i = 0; i < 9; i++) {
      rows.put(i,
               new ArrayList<>(Arrays.asList(false, false, false, false, false,
                                             false, false, false, false)));
      cols.put(i,
               new ArrayList<>(Arrays.asList(false, false, false, false, false,
                                             false, false, false, false)));
      boxes.put(i,
                new ArrayList<>(Arrays.asList(false, false, false, false, false,
                                              false, false, false, false)));
    }

    for (int row = 0; row < 9; row++) {
      for (int col = 0; col < 9; col++) {
        int box = (row / 3) * 3 + (col / 3);
        char cell = board[row][col];

        if (cell != '.') {
          if (rows.get(row).get(Integer.parseInt(cell + "") - 1) ||
              cols.get(col).get(Integer.parseInt(cell + "") - 1) ||
              boxes.get(box).get(Integer.parseInt(cell + "") - 1)) {
            return false;
          } else {
            rows.get(row).set(Integer.parseInt(cell + "") - 1, true);
            cols.get(col).set(Integer.parseInt(cell + "") - 1, true);
            boxes.get(box).set(Integer.parseInt(cell + "") - 1, true);
          }
        }
      }
    }

    return true;
  }
}
