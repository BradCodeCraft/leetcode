package dev.minimum_index_sum_of_two_lists;

import java.util.HashMap;
import java.util.Map;

/**
 * Solution
 */
public class Solution {
  public String[] findRestaurant(String[] list1, String[] list2) {
    Map<String, Integer> seen = new HashMap<>();

    for (int i = 0; i < list1.length; i++) {
      seen.put(list1[i], i);
    }

    Map<Integer, String[]> buckets = new HashMap<>();

    for (int i = 0; i < list2.length; i++) {
      if (seen.containsKey(list2[i])) {
        final int key = seen.get(list2[i]) + i;
        String[] bucket = buckets.get(key);

        if (bucket == null) {
          bucket = new String[1];
          bucket[0] = list2[i];
          buckets.put(key, bucket);
        } else {
          String[] newBucket = new String[bucket.length + 1];

          for (int j = 0; j < bucket.length; j++) {
            newBucket[j] = bucket[j];
          }

          newBucket[bucket.length] = list2[i];
          buckets.put(key, newBucket);
        }
      }
    }

    int min = 0;

    while (min < list1.length + list2.length) {
      if (buckets.containsKey(min)) {
        return buckets.get(min);
      }

      min += 1;
    }

    return new String[] {};
  }
}
