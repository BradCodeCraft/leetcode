package dev;

/**
 * Solution
 */
public class Solution {
  public int pivotIndex(int[] nums) {
    int left = 0;
    int total = 0;

    for (int num : nums) {
      total += num; 
    }

    for (int i = 0; i < nums.length; i++) {
      if (left * 2 == total - nums[i]) {
        return i;
      } 

      left += nums[i];
    }

    return -1;
  }
}
