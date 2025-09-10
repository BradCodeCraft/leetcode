package dev.search_in_a_binary_search_tree;

import static org.assertj.core.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.assertNull;

import org.junit.jupiter.api.Test;

/**
 * SolutionTest
 */
public class SolutionTest {
  @Test
  void CaseOne() {
    assertThat(
        new Solution().searchBST(
            new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)),
                         new TreeNode(7)),
            2))
        .usingRecursiveComparison()
        .isEqualTo(new TreeNode(2, new TreeNode(1), new TreeNode(3)));
  }

  @Test
  void CaseTwo() {
    assertNull(new Solution().searchBST(
        new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)),
                     new TreeNode(7)),
        5));
  }
}
