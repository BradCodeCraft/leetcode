import { describe, test } from "mocha";
import { detectCycle, ListNode } from "../src/142-linked-list-cycle-ii.js";
import { expect } from "chai";

describe("Linked List Cycle II", () => {
  test("case 1", () => {
    const head = new ListNode(3);
    head.next = new ListNode(2);
    head.next.next = new ListNode(0);
    head.next.next.next = new ListNode(-4);
    head.next.next.next.next = head.next;

    expect(detectCycle(head)).to.equal(head.next);
  });

  test("case 2", () => {
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = head;

    expect(detectCycle(head)).to.equal(head);
  });

  test("case 3", () => {
    const head = new ListNode(1);

    expect(detectCycle(head)).to.equal(null);
  });
});
