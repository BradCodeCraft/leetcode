package dev.happy_number;

import java.util.HashSet;
import java.util.Set;

/**
 * Solution
 */
public class Solution {
  public boolean isHappy(int n) {
    Set<Integer> hashset = new HashSet<>();

    while (n > 1 && !hashset.contains(n)) {
      hashset.add(n);

      int sum = 0;

      for (String num : Integer.toString(n).split("")) {
        sum += Math.pow(Integer.parseInt(num), 2);
      }

      n = sum;
    }

    return n == 1;
  }
}
