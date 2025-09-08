package dev.group_anagrams;

import static org.junit.jupiter.api.Assertions.assertIterableEquals;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * SolutionTest
 */
public class SolutionTest {
  @Test
  void CaseOne() {
    List<List<String>> expected = new ArrayList<>();
    expected.add(new ArrayList<>(Arrays.asList("eat", "tea", "ate")));
    expected.add(new ArrayList<>(Arrays.asList("bat")));
    expected.add(new ArrayList<>(Arrays.asList("tan", "nat")));

    assertIterableEquals(
        expected, new Solution().groupAnagrams(
                      new String[] {"eat", "tea", "tan", "ate", "nat", "bat"}));
  }

  @Test
  void CaseTwo() {
    assertIterableEquals(
        new ArrayList<>(Arrays.asList(new ArrayList<>(Arrays.asList("")))),
        new Solution().groupAnagrams(new String[] {""}));
  }

  @Test
  void CaseThree() {
    assertIterableEquals(
        new ArrayList<>(Arrays.asList(new ArrayList<>(Arrays.asList("a")))),
        new Solution().groupAnagrams(new String[] {"a"}));
  }
}
