package dev.fibonacci_number;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

/**
 * SolutionTest
 */
public class SolutionTest {
  private final Solution solution = new Solution();

  @Test
  void CaseOne() {
    assertEquals(1, solution.fib(2));
  }

  @Test
  void CaseTwo() {
    assertEquals(2, solution.fib(3));
  }

  @Test
  void CaseThree() {
    assertEquals(3, solution.fib(4));
  }
}
