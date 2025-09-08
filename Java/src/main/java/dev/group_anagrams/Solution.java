package dev.group_anagrams;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Solution
 */
public class Solution {

  public List<List<String>> groupAnagrams(String[] strs) {
    Map<String, List<String>> anagrams = new HashMap<>();

    for (String str : strs) {
      char[] characters = str.toCharArray();
      Arrays.sort(characters);
      String sortedStr = new String(characters);

      if (anagrams.containsKey(sortedStr)) {
        List<String> newList = anagrams.get(sortedStr);
        newList.add(str);
        anagrams.put(sortedStr, newList);
      } else {
        anagrams.put(sortedStr, new ArrayList<>(Arrays.asList(str)));
      }
    }

    return new ArrayList<>(anagrams.values());
  }
}
