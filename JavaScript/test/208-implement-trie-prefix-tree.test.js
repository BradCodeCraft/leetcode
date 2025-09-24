import { expect } from "chai";
import { describe, test } from "mocha";
import { Trie } from "../src/208-implement-trie-prefix-tree.js";

describe("Implement Trie (Prefix Tree)", () => {
  test("Case 1", () => {
    const trie = new Trie();
    trie.insert("apple");

    expect(trie.search("apple")).to.be.true;
    expect(trie.search("app")).to.be.false;
    expect(trie.startsWith("app")).to.be.true;

    trie.insert("app");

    expect(trie.search("app")).to.be.true;
  });
});
