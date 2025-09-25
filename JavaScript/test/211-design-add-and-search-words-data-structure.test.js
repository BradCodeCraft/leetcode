import { describe, test } from "mocha";
import { expect } from "chai";
import { WordDictionary } from "../src/211-design-add-and-search-words-data-structure.js";

describe("Design Add and Search Words Data Structure", () => {
  test("Case 1", () => {
    const wordDictionary = new WordDictionary();
    wordDictionary.addWord("bad");
    wordDictionary.addWord("dad");
    wordDictionary.addWord("mad");

    expect(wordDictionary.search("pad")).to.be.false;
    expect(wordDictionary.search("bad")).to.be.true;
    expect(wordDictionary.search(".ad")).to.be.true;
    expect(wordDictionary.search("b..")).to.be.true;
  });
});
