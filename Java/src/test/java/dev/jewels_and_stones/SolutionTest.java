package dev.jewels_and_stones;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

/**
 * SolutionTest
 */
public class SolutionTest {
  @Test
  void CaseOne() {
    assertEquals(3, new Solution().numJewelsInStones("aA", "aAAbbbb"));
  }

  @Test
  void CaseTwo() {
    assertEquals(0, new Solution().numJewelsInStones("z", "ZZ"));
  }
}
