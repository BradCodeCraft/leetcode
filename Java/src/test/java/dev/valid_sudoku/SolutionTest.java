package dev.valid_sudoku;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

/**
 * SolutionTest
 */
public class SolutionTest {
  @Test
  void CaseOne() {
    assertTrue(new Solution().isValidSudoku(new char[][] {
        new char[] {'5', '3', '.', '.', '7', '.', '.', '.', '.'},
        new char[] {'6', '.', '.', '1', '9', '5', '.', '.', '.'},
        new char[] {'.', '9', '8', '.', '.', '.', '.', '6', '.'},
        new char[] {'8', '.', '.', '.', '6', '.', '.', '.', '3'},
        new char[] {'4', '.', '.', '8', '.', '3', '.', '.', '1'},
        new char[] {'7', '.', '.', '.', '2', '.', '.', '.', '6'},
        new char[] {'.', '6', '.', '.', '.', '.', '2', '8', '.'},
        new char[] {'.', '.', '.', '4', '1', '9', '.', '.', '5'},
        new char[] {'.', '.', '.', '.', '8', '.', '.', '7', '9'}}));
  }

  @Test
  void CaseTwo() {
    assertFalse(new Solution().isValidSudoku(new char[][] {
        new char[] {'8', '3', '.', '.', '7', '.', '.', '.', '.'},
        new char[] {'6', '.', '.', '1', '9', '5', '.', '.', '.'},
        new char[] {'.', '9', '8', '.', '.', '.', '.', '6', '.'},
        new char[] {'8', '.', '.', '.', '6', '.', '.', '.', '3'},
        new char[] {'4', '.', '.', '8', '.', '3', '.', '.', '1'},
        new char[] {'7', '.', '.', '.', '2', '.', '.', '.', '6'},
        new char[] {'.', '6', '.', '.', '.', '.', '2', '8', '.'},
        new char[] {'.', '.', '.', '4', '1', '9', '.', '.', '5'},
        new char[] {'.', '.', '.', '.', '8', '.', '.', '7', '9'}}));
  }
}
