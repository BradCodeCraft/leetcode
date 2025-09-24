import { expect } from "chai";
import { describe, test } from "mocha";
import { replaceWords } from "../src/648-replace-words.js";

describe("Replace Words", () => {
  test("Case 1", () => {
    expect(
      replaceWords(
        ["cat", "bat", "rat"],
        "the cattle was rattled by the battery",
      ),
    ).to.eq("the cat was rat by the bat");
  });

  test("Case 2", () => {
    expect(replaceWords(["a", "b", "c"], "aadsfasf absbs bbab cadsfafs")).to.eq(
      "a a b c",
    );
  });

  test("Failed case", () => {
    expect(
      replaceWords(
        ["a", "aa", "aaa", "aaaa"],
        "a aa a aaaa aaa aaa aaa aaaaaa bbb baba ababa",
      ),
    ).to.eq("a a a a a a a a bbb baba a");
  });
});
