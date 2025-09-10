package dev.climbing_stairs;

import java.util.HashMap;
import java.util.Map;

/**
 * Solution
 */
public class Solution {
  private Map<Integer, Integer> cache = new HashMap<>();

  public int climbStairs(int n) {
    if (this.cache.containsKey(n)) {
      return this.cache.get(n);
    }
    int steps;
    if (n <= 2) {
      steps = n;
    } else {
      steps = this.climbStairs(n - 1) + this.climbStairs(n - 2);
    }

    cache.put(n, steps);
    return steps;
  }
}
