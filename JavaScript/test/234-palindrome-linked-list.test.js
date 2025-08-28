import { describe, test } from "mocha";
import { ListNode, isPalindrome } from "../src/234-palindrome-linked-list.js";
import { expect } from "chai";

describe("Palindrome Linked List", () => {
  test("Case 1", () => {
    const head = new ListNode(
      1,
      new ListNode(2, new ListNode(2, new ListNode(1))),
    );

    expect(isPalindrome(head)).to.be.true;
  });
  test("Case 2", () => {
    const head = new ListNode(1, new ListNode(2));
    expect(isPalindrome(head)).to.be.false;
  });
});
