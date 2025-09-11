package dev.k_th_symbol_in_grammer;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

/**
 * SolutionTest
 */
public class SolutionTest {
  private Solution solution = new Solution();

  @Test
  void CaseOne() {
    assertEquals(0, this.solution.kthGrammar(1, 1));
  }

  @Test
  void CaseTwo() {
    assertEquals(0, this.solution.kthGrammar(2, 1));
  }

  @Test
  void CaseThree() {
    assertEquals(1, this.solution.kthGrammar(2, 2));
  }

  @Test
  void Failed() {
    assertEquals(0, this.solution.kthGrammar(3, 1));
    assertEquals(0, this.solution.kthGrammar(30, 434991989));
  }
}
