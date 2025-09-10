package dev.climbing_stairs;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

/**
 * SolutionTest
 */
public class SolutionTest {
  private Solution solution = new Solution();

  @Test
  void CaseOne() {
    assertEquals(2, this.solution.climbStairs(2));
  }

  @Test
  void CaseTwo() {
    assertEquals(3, this.solution.climbStairs(3));
  }

  @Test
  void CaseThree() {
    assertEquals(89, this.solution.climbStairs(10));
  }
}
