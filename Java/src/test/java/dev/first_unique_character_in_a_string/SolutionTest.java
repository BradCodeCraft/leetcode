package dev.first_unique_character_in_a_string;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

/**
 * SolutionTest
 */
public class SolutionTest {
  @Test
  void CaseOne() {
    assertEquals(0, new Solution().firstUniqChar("leetcode"));
  }

  @Test
  void CaseTwo() {
    assertEquals(2, new Solution().firstUniqChar("loveleetcode"));
  }

  @Test
  void CaseThree() {
    assertEquals(-1, new Solution().firstUniqChar("aabb"));
  }
}
