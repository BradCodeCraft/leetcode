package dev.design_hashset;

import java.util.Arrays;

class MyHashSet {
  private boolean[] hashset;

  public MyHashSet() {
    this.hashset = new boolean[(int)Math.pow(10, 6) + 1];
    Arrays.fill(hashset, false);
  }

  public void add(int key) { this.hashset[key] = true; }

  public void remove(int key) { this.hashset[key] = false; }

  public boolean contains(int key) { return this.hashset[key]; }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * MyHashSet obj = new MyHashSet();
 * obj.add(key);
 * obj.remove(key);
 * boolean param_3 = obj.contains(key);
 */
