import { expect } from "chai";
import { describe, test } from "mocha";
import { ListNode, reverseList } from "../src/206-reverse-linked-list.js";

describe("Reverse Linked List", () => {
  test("case 1", () => {
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);
    head.next.next.next.next = new ListNode(5);
    const result = new ListNode(5);
    result.next = new ListNode(4);
    result.next.next = new ListNode(3);
    result.next.next.next = new ListNode(2);
    result.next.next.next.next = new ListNode(1);

    expect(reverseList(head)).to.deep.equal(result);
  });

  test("case 2", () => {
    const head = new ListNode(1);
    head.next = new ListNode(2);
    const result = new ListNode(2);
    result.next = new ListNode(1);

    expect(reverseList(head)).to.deep.equal(result);
  });

  test("case 3", () => {
    expect(reverseList()).to.equal(null);
  });
});
