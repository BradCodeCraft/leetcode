package dev.two_sum;

import java.util.HashMap;
import java.util.Map;

/**
 * Solution
 */
public class Solution {
  public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> hashmap = new HashMap<>();

    for (int i = 0; i < nums.length; i++) {
      final Integer remainder = target - nums[i];

      if (hashmap.containsKey(remainder)) {
        return new int[] {hashmap.get(remainder), i};
      }

      hashmap.put(nums[i], i);
    }

    return new int[] {};
  }
}
