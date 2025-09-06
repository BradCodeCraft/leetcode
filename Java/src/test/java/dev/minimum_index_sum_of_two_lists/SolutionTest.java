package dev.minimum_index_sum_of_two_lists;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;

import org.junit.jupiter.api.Test;

/**
 * SolutionTest
 */
public class SolutionTest {
  @Test
  void CaseOne() {
    assertArrayEquals(
        new String[] {"Shogun"},
        new Solution().findRestaurant(
            new String[] {"Shogun", "Tapioca Express", "Burger King", "KFC"},
            new String[] {"Piatti", "The Grill at Torrey Pines",
                          "Hungry Hunter Steakhouse", "Shogun"}));
  }

  @Test
  void CaseTwo() {
    assertArrayEquals(
        new String[] {"Shogun"},
        new Solution().findRestaurant(
            new String[] {"Shogun", "Tapioca Express", "Burger King", "KFC"},
            new String[] {"KFC", "Shogun", "Burger King"}));
  }

  @Test
  void CaseThree() {
    assertArrayEquals(
        new String[] {"sad", "happy"},
        new Solution().findRestaurant(new String[] {"happy", "sad", "good"},
                                      new String[] {"sad", "happy", "good"}));
  }

  @Test
  void Failed() {
    assertArrayEquals(
        new String[] {"KFC", "Burger King", "Tapioca Express", "Shogun"},
        new Solution().findRestaurant(
            new String[] {"Shogun", "Tapioca Express", "Burger King", "KFC"},
            new String[] {"KFC", "Burger King", "Tapioca Express", "Shogun"}));
  }
}
