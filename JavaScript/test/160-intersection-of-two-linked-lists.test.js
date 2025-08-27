import { expect } from "chai";
import { describe, test } from "mocha";
import {
  getIntersectionNode,
  ListNode,
} from "../src/160-intersection-of-two-linked-lists.js";

describe("Intersection of Two Linked Lists", () => {
  test("case 1", () => {
    const joint = new ListNode(8);
    joint.next = new ListNode(4);
    joint.next.next = new ListNode(5);
    const listA = new ListNode(4);
    listA.next = new ListNode(1);
    listA.next.next = joint;
    const listB = new ListNode(5);
    listB.next = new ListNode(6);
    listB.next.next = new ListNode(1);
    listB.next.next.next = joint;

    expect(getIntersectionNode(listA, listB)).to.equal(joint);
  });

  test("case 2", () => {
    const joint = new ListNode(2);
    joint.next = new ListNode(4);
    const listA = new ListNode(1);
    listA.next = new ListNode(9);
    listA.next.next = new ListNode(1);
    listA.next.next.next = joint;
    const listB = new ListNode(3);
    listB.next = joint;

    expect(getIntersectionNode(listA, listB)).to.equal(joint);
  });

  test("case 3", () => {
    const listA = new ListNode(2);
    listA.next = new ListNode(6);
    listA.next.next = new ListNode(4);
    const listB = new ListNode(1);
    listB.next = new ListNode(5);

    expect(getIntersectionNode(listA, listB)).to.be.null;
  });

  test("edge cases", () => {
    const listA = new ListNode(2);
    expect(getIntersectionNode(listA)).to.be.null;
  });
});
