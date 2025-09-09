package dev.longest_substring_without_repeating_characters;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

/**
 * SolutionTest
 */
public class SolutionTest {
  @Test
  void CaseOne() {
    assertEquals(3, new Solution().lengthOfLongestSubstring("abcabcbb"));
  }

  @Test
  void CaseTwo() {
    assertEquals(1, new Solution().lengthOfLongestSubstring("bbbbb"));
  }

  @Test
  void CaseThree() {
    assertEquals(3, new Solution().lengthOfLongestSubstring("pwwkew"));
  }

  @Test
  void Failed() {
    assertEquals(3, new Solution().lengthOfLongestSubstring("dvdf"));
    assertEquals(2, new Solution().lengthOfLongestSubstring("abba"));
  }
}
