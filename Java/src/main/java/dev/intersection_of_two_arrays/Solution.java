package dev.intersection_of_two_arrays;

import java.util.HashSet;
import java.util.Set;

/**
 * Solution
 */
public class Solution {
  public int[] intersection(int[] nums1, int[] nums2) {
    Set<Integer> hashset1 = new HashSet<>();
    Set<Integer> hashset2 = new HashSet<>();

    for (int num : nums1) {
      hashset1.add(num);
    }

    for (int num : nums2) {
      if (hashset1.contains(num)) {
        hashset2.add(num);
      }
    }

    Object[] resultObjectArray = hashset2.toArray();
    int[] resultIntArray = new int[resultObjectArray.length];

    for (int i = 0; i < resultObjectArray.length; i++) {
      resultIntArray[i] = (int)resultObjectArray[i];
    }

    return resultIntArray;
  }
}
