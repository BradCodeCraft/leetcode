package dev.unique_binary_search_trees;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

/**
 * SolutionTest
 */
public class SolutionTest {
  private Solution solution = new Solution();

  @Test
  void CaseOne() {
    assertEquals(5, this.solution.numTrees(3));
  }

  @Test
  void CaseTwo() {
    assertEquals(1, this.solution.numTrees(1));
  }

  @Test
  void CaseThree() {
    assertEquals(14, this.solution.numTrees(4));
  }

  @Test
  void CaseFour() {
    assertEquals(42, this.solution.numTrees(5));
  }
}
