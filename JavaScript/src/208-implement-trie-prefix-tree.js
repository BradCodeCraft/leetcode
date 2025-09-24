class Trie {
  constructor() {
    this.children = {};
  }

  /**
   * @param {String} word
   */
  insert(word) {
    let cur = this.children;

    for (const letter of word) {
      if (!cur[letter]) {
        cur[letter] = {};
        cur[letter].isEnd = false;
      }
      cur = cur[letter];
    }
    cur.isEnd = true;
  }

  /**
   * @param {String} word
   * @returns {Boolean}
   */
  search(word) {
    let cur = this.children;

    for (const letter of word) {
      if (!cur[letter]) return false;
      cur = cur[letter];
    }

    return cur.isEnd;
  }

  /**
   * @param {String} prefix
   * @returns {Boolean}
   */
  startsWith(prefix) {
    let cur = this.children;

    for (const letter of prefix) {
      if (!cur[letter]) return false;
      cur = cur[letter];
    }

    return cur != null;
  }
}

export { Trie };
