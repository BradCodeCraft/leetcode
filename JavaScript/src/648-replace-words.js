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
}

/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @returns {string}
 */
export function replaceWords(dictionary, sentence) {
  const trie = new Trie();

  for (const word of dictionary) {
    trie.insert(word);
  }

  const phrases = sentence.split(" ");
  let cur = trie.children;
  let res = [];

  for (const phrase of phrases) {
    let newPhrase = "";

    for (const letter of phrase) {
      if (cur[letter]) {
        newPhrase += letter;
        cur = cur[letter];

        if (cur.isEnd) break;
      } else {
        newPhrase = phrase;
        break;
      }
    }
    res.push(newPhrase);
    cur = trie.children;
  }

  return res.join(" ");
}
