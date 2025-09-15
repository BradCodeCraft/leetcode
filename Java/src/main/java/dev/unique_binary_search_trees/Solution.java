package dev.unique_binary_search_trees;

/**
 * Solution
 */
public class Solution {
  public int numTrees(int n) {
    int[] uniqueArr = new int[n + 1];
    uniqueArr[0] = uniqueArr[1] = 1;

    for (int i = 2; i <= n; i++) {
      for (int j = 1; j <= i; j++) {
        uniqueArr[i] += uniqueArr[j - 1] * uniqueArr[i - j];
      }
    }

    return uniqueArr[n];
  }
}
