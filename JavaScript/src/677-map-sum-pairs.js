class MapSum {
  constructor() {
    this.children = {};
  }

  /**
   * @param {string} key
   * @param {number} val
   * @returns {void}
   */
  insert(key, val) {
    let cur = this.children;

    for (const letter of key) {
      if (!cur[letter]) cur[letter] = {};
      cur = cur[letter];
    }

    cur.isEnd = true;
    cur.val = val;
  }

  /**
   * @param {string} prefix
   * @returns {number}
   */
  sum(prefix) {
    let cur = this.children;

    for (const letter of prefix) {
      if (!cur[letter]) cur[letter] = {};
      cur = cur[letter];
    }

    return (cur.isEnd ? cur.val : 0) + this.dfs(cur);
  }

  /**
   * @param {{}} trie
   * @returns {number}
   */
  dfs(trie) {
    if (!trie) return 0;

    let total = 0;

    for (const key of Object.keys(trie)) {
      if (key != "isEnd" && key != "val") {
        console.log(trie);
        if (trie[key].isEnd) {
          total += trie[key].val;
        }
        total += this.dfs(trie[key]);
      }
    }

    return total;
  }
}

export { MapSum };
