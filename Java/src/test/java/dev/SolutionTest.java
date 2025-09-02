package dev;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

/**
 * SolutionTest
 */
public class SolutionTest {
  Solution solution = new Solution();

  @Test
  public void pivotIndexTest() {
    int[] caseOne = {1, 7, 3, 6, 5, 6};
    assertEquals(this.solution.pivotIndex(caseOne), 3);

    int[] caseTwo = {1, 2, 3};
    assertEquals(this.solution.pivotIndex(caseTwo), -1);

    int[] caseThree = {2, 1, -1};
    assertEquals(this.solution.pivotIndex(caseThree), 0);

    int[] caseFour = {0, 0};
    assertEquals(this.solution.pivotIndex(caseFour), 0);
  }

  @Test
  public void dominantIndexTest() {
    int[] caseOne = {3, 6, 1, 0};
    assertEquals(solution.dominateIndex(caseOne), 1);

    int[] caseTwo = {1, 2, 3, 4};
    assertEquals(solution.dominateIndex(caseTwo), -1);
  }
}
