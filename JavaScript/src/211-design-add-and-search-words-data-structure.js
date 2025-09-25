export class WordDictionary {
  constructor() {
    this.children = new Array(26);
    this.isEnd = false;
  }

  /**
   * @param {string} word
   */
  addWord(word) {
    let cur = this;
    for (const letter of word) {
      const index = letter.charCodeAt(0) - 97;
      if (!cur.children[index]) {
        cur.children[index] = new WordDictionary();
      }
      cur = cur.children[index];
    }
    cur.isEnd = true;
  }

  /**
   * @param {string} word
   * @returns {boolean}
   */
  search(word) {
    let cur = this;
    for (let i = 0; i < word.length; i++) {
      const letter = word.charAt(i);
      const index = word.charCodeAt(i) - 97;
      if (!cur.children[index] && letter != ".") return false;
      if (letter == ".") {
        for (const dictionary of cur.children) {
          if (dictionary && dictionary.search(word.slice(i + 1))) return true;
        }
        return false;
      }
      cur = cur.children[index];
    }
    return cur && cur.isEnd;
  }
}
