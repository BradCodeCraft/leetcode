package dev.foursum_ii;

import java.util.*;

/**
 * Solution
 */
public class Solution {
  public int fourSumCount(int[] nums1, int[] nums2, int[] nums3, int[] nums4) {
    Map<Integer, Integer> sums = new HashMap<>();

    for (int k : nums4) {
      for (int l : nums3) {
        sums.put(k + l, sums.getOrDefault(k + l, 0) + 1);
      }
    }

    int count = 0;

    for (int i : nums1) {
      for (int j : nums2) {
        count += sums.getOrDefault(-(i + j), 0);
      }
    }

    return count;
  }
}
