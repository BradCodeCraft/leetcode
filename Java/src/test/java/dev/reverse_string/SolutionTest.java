package dev.reverse_string;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;

import org.junit.jupiter.api.Test;

/**
 * SolutionTest
 */
public class SolutionTest {
  @Test
  void CaseOne() {
    char[] s = new char[] {'h', 'e', 'l', 'l', 'o'};
    new Solution().reverseString(s);
    assertArrayEquals(new char[] {'o', 'l', 'l', 'e', 'h'}, s);
  }

  @Test
  void CaseTwo() {
    char[] s = new char[] {'H', 'a', 'n', 'n', 'a', 'h'};
    new Solution().reverseString(s);
    assertArrayEquals(new char[] {'h', 'a', 'n', 'n', 'a', 'H'}, s);
  }
}
