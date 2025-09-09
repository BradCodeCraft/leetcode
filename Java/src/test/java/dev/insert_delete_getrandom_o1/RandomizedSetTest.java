package dev.insert_delete_getrandom_o1;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

/**
 * RandomizedSetTest
 */
public class RandomizedSetTest {
  @Test
  void CaseOne() {
    RandomizedSet randomizedSet = new RandomizedSet();

    assertTrue(randomizedSet.insert(1));
    assertFalse(randomizedSet.remove(2));
    assertTrue(randomizedSet.insert(2));
    assertNotNull(randomizedSet.getRandom());
    assertTrue(randomizedSet.remove(1));
    assertFalse(randomizedSet.insert(2));
    assertNotNull(randomizedSet.getRandom());
  }
}
