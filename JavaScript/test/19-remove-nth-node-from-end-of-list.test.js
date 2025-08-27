import { expect } from "chai";
import { describe, test } from "mocha";
import {
  ListNode,
  removeNthFromEnd,
} from "../src/19-remove-nth-node-from-end-of-list.js";

describe("Remove Nth Node From End of List", () => {
  test("case 1", () => {
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);
    head.next.next.next.next = new ListNode(5);
    const result = new ListNode(1);
    result.next = new ListNode(2);
    result.next.next = new ListNode(3);
    result.next.next.next = new ListNode(5);

    expect(removeNthFromEnd(head, 2)).to.deep.equal(result);
  });

  test("case 2", () => {
    const head = new ListNode(1);

    expect(removeNthFromEnd(head, 1)).to.equal(null);
  });

  test("case 3", () => {
    const head = new ListNode(1);
    head.next = new ListNode(2);
    const result = new ListNode(1);

    expect(removeNthFromEnd(head, 1)).to.deep.equal(result);
  });

  test("edge case", () => {
    expect(removeNthFromEnd(null, 2)).to.equal(null);

    const head = new ListNode(1);
    head.next = new ListNode(2);
    const result = new ListNode(2);

    expect(removeNthFromEnd(head, 2)).to.deep.equal(result);
  });
});
