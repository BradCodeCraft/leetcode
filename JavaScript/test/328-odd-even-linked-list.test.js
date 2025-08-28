import { describe, test } from "mocha";
import { ListNode, oddEvenList } from "../src/328-odd-even-linked-list.js";
import { expect } from "chai";

describe("Odd Even Linked List", () => {
  test("Case 1", () => {
    const head = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))),
    );
    expect(oddEvenList(head)).to.deep.equal(
      new ListNode(
        1,
        new ListNode(3, new ListNode(5, new ListNode(2, new ListNode(4)))),
      ),
    );
  });
  test("Case 2", () => {
    const head = new ListNode(
      2,
      new ListNode(
        1,
        new ListNode(
          3,
          new ListNode(5, new ListNode(6, new ListNode(4, new ListNode(7)))),
        ),
      ),
    );
    expect(oddEvenList(head)).to.deep.equal(
      new ListNode(
        2,
        new ListNode(
          3,
          new ListNode(
            6,
            new ListNode(7, new ListNode(1, new ListNode(5, new ListNode(4)))),
          ),
        ),
      ),
    );
  });
});
