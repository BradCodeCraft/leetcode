package dev.design_hashmap;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

/**
 * MyHashMapTest
 */
public class MyHashMapTest {
  @Test
  public void CaseOne() {
    final MyHashMap myHashMap = new MyHashMap();
    myHashMap.put(1, 1);
    myHashMap.put(2, 2);

    assertEquals(1, myHashMap.get(1));
    assertEquals(-1, myHashMap.get(3));

    myHashMap.put(2, 1);

    assertEquals(1, myHashMap.get(2));

    myHashMap.remove(2);

    assertEquals(-1, myHashMap.get(2));
  }
}
