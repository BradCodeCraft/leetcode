import { expect } from "chai";
import { describe, test } from "mocha";
import { hasCycle, ListNode } from "../src/141-linked-list-cycle.js";

describe("Linked List Cycle I", () => {
  test("case 1", () => {
    const head = new ListNode(3);
    head.next = new ListNode(2);
    head.next.next = new ListNode(0);
    head.next.next.next = new ListNode(-4);
    head.next.next.next.next = head.next;

    expect(hasCycle(head)).to.be.true;
  });

  test("case 2", () => {
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = head;

    expect(hasCycle(head)).to.be.true;
  });

  test("case 3", () => {
    const head = new ListNode(1);

    expect(hasCycle(head)).to.be.false;
  });

  test("edge cases", () => {
    expect(hasCycle()).to.be.false;
  });
});
