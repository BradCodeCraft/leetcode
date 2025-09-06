package dev.isomorphic_strings;

import java.util.HashMap;
import java.util.Map;

class Solution {
  public boolean isIsomorphic(String s, String t) {
    Map<Character, Character> hashmapS = new HashMap<>();
    Map<Character, Character> hashmapT = new HashMap<>();

    for (int i = 0; i < s.length(); i++) {
      Character letterS = s.charAt(i);
      Character letterT = t.charAt(i);

      if (hashmapS.containsKey(letterS)) {
        if (hashmapS.get(letterS) != letterT) {
          return false;
        }
      } else {
        hashmapS.put(letterS, letterT);
      }
    }

    for (int i = 0; i < t.length(); i++) {
      Character letterT = t.charAt(i);
      Character letterS = s.charAt(i);

      if (hashmapT.containsKey(letterT)) {
        if (hashmapT.get(letterT) != letterS) {
          return false;
        }
      } else {
        hashmapT.put(letterT, letterS);
      }
    }

    return true;
  }
}
