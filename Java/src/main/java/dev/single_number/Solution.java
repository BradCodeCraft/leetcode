package dev.single_number;

import java.util.HashSet;
import java.util.Set;

/**
 * Solution
 */
public class Solution {
  public int singleNumber(int[] nums) {
    Set<Integer> hashset = new HashSet<>();

    for (int num : nums) {
      if (hashset.contains(num)) {
        hashset.remove(num);
      } else {
        hashset.add(num);
      }
    }

    return (int)hashset.toArray()[0];
  }
}
