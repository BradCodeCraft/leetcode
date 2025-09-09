package dev.find_duplicate_subtrees;

import static org.junit.jupiter.api.Assertions.assertIterableEquals;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

/**
 * SolutionTest
 */
public class SolutionTest {
  @Disabled
  @Test
  void CaseOne() {
    TreeNode root = new TreeNode(
        1, new TreeNode(2, new TreeNode(4, null, null), null),
        new TreeNode(3, new TreeNode(2, new TreeNode(4, null, null), null),
                     new TreeNode(4)));
    List<TreeNode> expected = new ArrayList<>();
    expected.add(new TreeNode(2, new TreeNode(4), null));
    expected.add(new TreeNode(4));

    assertIterableEquals(expected, new Solution().findDuplicateSubtrees(root));
  }

  @Disabled
  @Test
  void CaseTwo() {
    TreeNode root = new TreeNode(2, new TreeNode(1), new TreeNode(1));
    List<TreeNode> expected = new ArrayList<>();
    expected.add(new TreeNode(1));

    assertIterableEquals(expected, new Solution().findDuplicateSubtrees(root));
  }

  @Disabled
  @Test
  void CaseThree() {
    TreeNode root = new TreeNode(2, new TreeNode(2, new TreeNode(3), null),
                                 new TreeNode(2, new TreeNode(3), null));
    List<TreeNode> expected = new ArrayList<>();
    expected.add(new TreeNode(2, new TreeNode(3), null));
    expected.add(new TreeNode(3));

    assertIterableEquals(expected, new Solution().findDuplicateSubtrees(root));
  }
}
