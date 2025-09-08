package dev.intersection_of_two_arrays_ii;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

class Solution {
  public int[] intersect(int[] nums1, int[] nums2) {
    Map<Integer, Integer> hashmap = new HashMap<>();
    ArrayList<Integer> intersectArray = new ArrayList<>();

    for (int num : nums1) {
      if (hashmap.containsKey(num)) {
        hashmap.put(num, hashmap.get(num) + 1);
      } else {
        hashmap.put(num, 1);
      }
    }

    for (int num : nums2) {
      if (hashmap.containsKey(num) && hashmap.get(num) > 0) {
        hashmap.put(num, hashmap.get(num) - 1);
        intersectArray.add(num);
      }
    }

    int[] resultArray = new int[intersectArray.size()];
    int pointer = 0;

    for (Integer num : intersectArray) {
      resultArray[pointer] = num;
      pointer += 1;
    }

    return resultArray;
  }
}
