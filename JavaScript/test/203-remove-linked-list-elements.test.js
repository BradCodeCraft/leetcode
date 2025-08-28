import { describe, test } from "mocha";
import {
  ListNode,
  removeElements,
} from "../src/203-remove-linked-list-elements.js";
import { expect } from "chai";

describe("Remove Linked List Elements", () => {
  test("Case 1", () => {
    const head = new ListNode(
      1,
      new ListNode(
        2,
        new ListNode(
          6,
          new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6)))),
        ),
      ),
    );
    expect(removeElements(head, 6)).to.deep.equal(
      new ListNode(
        1,
        new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))),
      ),
    );
  });

  test("Case 2", () => {
    expect(removeElements(null, 1)).to.be.null;
  });

  test("Case 3", () => {
    const head = new ListNode(
      7,
      new ListNode(7, new ListNode(7, new ListNode(7))),
    );
    expect(removeElements(head, 7)).to.be.null;
  });
});
