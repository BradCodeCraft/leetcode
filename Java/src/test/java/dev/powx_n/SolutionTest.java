package dev.powx_n;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

/**
 * SolutionTest
 */
public class SolutionTest {
  private Solution solution = new Solution();

  @Test
  void CaseOne() {
    assertEquals(1024, this.solution.myPow(2.0, 10));
  }

  @Test
  void CaseTwo() {
    assertEquals(9.26100, this.solution.myPow(2.1, 3), 0.001);
  }

  @Test
  void CaseThree() {
    assertEquals(0.25, this.solution.myPow(2.00, -2));
  }
}
