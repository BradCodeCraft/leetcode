package dev.longest_substring_without_repeating_characters;

import java.util.HashSet;
import java.util.Set;

/**
 * Solution
 */
public class Solution {
  public int lengthOfLongestSubstring(String s) {
    Set<Character> sub = new HashSet<>();
    int max = 0;
    int left = 0;
    int right = 0;

    while (right < s.length()) {
      if (!sub.contains(s.charAt(right))) {
        sub.add(s.charAt(right));
        right += 1;
        max = Math.max(max, right - left);
      } else {
        left += 1;
        sub.clear();

        for (int i = left; i < right; i++) {
          sub.add(s.charAt(i));
        }
      }
    }

    return Math.max(right - left, max);
  }
}
