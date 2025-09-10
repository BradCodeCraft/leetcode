package dev.maximum_depth_of_binary_tree;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

/**
 * SolutionTest
 */
public class SolutionTest {
  private Solution solution = new Solution();

  @Test
  void CaseOne() {
    assertEquals(3, this.solution.maxDepth(new TreeNode(
                        3, new TreeNode(9),
                        new TreeNode(20, new TreeNode(15), new TreeNode(7)))));
  }

  @Test
  void CaseTwo() {
    assertEquals(
        2, this.solution.maxDepth(new TreeNode(1, null, new TreeNode(2))));
  }
}
