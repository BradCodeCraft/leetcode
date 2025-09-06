package dev.isomorphic_strings;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

/**
 * SolutionTest
 */
public class SolutionTest {
  @Test
  void CaseOne() {
    assertTrue(new Solution().isIsomorphic("egg", "add"));
  }

  @Test
  void CaseTwo() {
    assertFalse(new Solution().isIsomorphic("foo", "bar"));
  }

  @Test
  void CaseThree() {
    assertTrue(new Solution().isIsomorphic("paper", "title"));
  }

  @Test
  void Failed() {
    assertTrue(new Solution().isIsomorphic("a", "a"));
    assertFalse(new Solution().isIsomorphic("bbbaaaba", "aaabbbba"));
    assertFalse(new Solution().isIsomorphic("badc", "babc"));
  }
}
