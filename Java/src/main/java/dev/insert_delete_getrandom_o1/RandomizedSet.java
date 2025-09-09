package dev.insert_delete_getrandom_o1;

import java.util.HashSet;
import java.util.Set;

/**
 * RandomizedSet
 */
public class RandomizedSet {
  private Set<Integer> set;

  public RandomizedSet() { this.set = new HashSet<>(); }

  public boolean insert(int val) {
    if (this.set.contains(val))
      return false;

    this.set.add(val);
    return true;
  }

  public boolean remove(int val) {
    if (this.set.contains(val)) {
      this.set.remove(val);
      return true;
    }

    return false;
  }

  public int getRandom() {
    Object[] numbers = this.set.toArray();
    return (
        int)numbers[(int)Math.floor(Math.random() * numbers.length - 1) + 1];
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * RandomizedSet obj = new RandomizedSet();
 * boolean param_1 = obj.insert(val);
 * boolean param_2 = obj.remove(val);
 * int param_3 = obj.getRandom();
 */
