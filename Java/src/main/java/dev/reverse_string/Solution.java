package dev.reverse_string;

import java.util.Arrays;

/**
 * Solution
 */
public class Solution {
  private String reverse(char[] s) {
    if (s.length == 1)
      return s[0] + "";

    return s[s.length - 1] +
        this.reverse(Arrays.copyOfRange(s, 0, s.length - 1));
  }

  public void reverseString(char[] s) {
    String reversedS = this.reverse(s);

    for (int i = 0; i < s.length; i++) {
      s[i] = reversedS.charAt(i);
    }
  }
}
