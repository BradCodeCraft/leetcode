package dev.design_hashmap;

import java.util.Arrays;

/**
 * MyHashMap
 */
public class MyHashMap {
  private int[] hashmap;
  private final int capacity = (int)Math.pow(10, 6) + 1;

  public MyHashMap() {
    this.hashmap = new int[this.capacity];
    Arrays.fill(this.hashmap, -1);
  }

  public void put(int key, int value) { this.hashmap[key] = value; }

  public int get(int key) { return this.hashmap[key]; }

  public void remove(int key) { this.hashmap[key] = -1; }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * MyHashMap obj = new MyHashMap();
 * obj.put(key,value);
 * int param_2 = obj.get(key);
 * obj.remove(key);
 */
