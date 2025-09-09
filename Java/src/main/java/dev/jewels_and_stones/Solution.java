package dev.jewels_and_stones;

import java.util.HashSet;
import java.util.Set;

/**
 * Solution
 */
public class Solution {
  public int numJewelsInStones(String jewels, String stones) {
    Set<Character> seen = new HashSet<>();

    for (int i = 0; i < jewels.length(); i++) {
      seen.add(jewels.charAt(i));
    }

    int count = 0;

    for (int i = 0; i < stones.length(); i++) {
      if (seen.contains(stones.charAt(i)))
        count += 1;
    }

    return count;
  }
}
