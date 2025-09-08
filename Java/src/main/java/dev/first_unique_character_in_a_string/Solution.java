package dev.first_unique_character_in_a_string;

import java.util.HashMap;
import java.util.Map;

class Solution {
  public int firstUniqChar(String s) {
    Map<Character, Integer> hashmap = new HashMap<>();

    for (int i = 0; i < s.length(); i++) {
      if (hashmap.containsKey(s.charAt(i))) {
        hashmap.put(s.charAt(i), hashmap.get(s.charAt(i)) + 1);
      } else {
        hashmap.put(s.charAt(i), 1);
      }
    }

    for (int i = 0; i < s.length(); i++) {
      if (hashmap.get(s.charAt(i)) == 1)
        return i;
    }

    return -1;
  }
}
