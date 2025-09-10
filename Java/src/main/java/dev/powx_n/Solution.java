package dev.powx_n;

/**
 * Solution
 */
public class Solution {
  private double myPowHelper(double x, long n) {
    if (n == 0) {
      return 1.0;
    }
    if (n < 0) {
      return 1.0 / this.myPowHelper(x, -n);
    }

    if (n % 2 == 0) {
      return this.myPowHelper(x * x, n / 2);
    } else {
      return x * this.myPowHelper(x * x, (n - 1) / 2);
    }
  }

  public double myPow(double x, int n) { return this.myPowHelper(x, (long)n); }
}
