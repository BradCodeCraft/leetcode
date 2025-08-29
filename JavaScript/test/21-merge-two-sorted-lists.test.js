import { expect } from "chai";
import { describe, test } from "mocha";
import { ListNode, mergeTwoLists } from "../src/21-merge-two-sorted-lists.js";

describe("Merge Two Sorted Lists", () => {
  test("Case 1", () => {
    const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
    const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

    expect(mergeTwoLists(list1, list2)).to.deep.equal(
      new ListNode(
        1,
        new ListNode(
          1,
          new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4)))),
        ),
      ),
    );
  });

  test("Case 2", () => {
    expect(mergeTwoLists()).to.be.null;
  });

  test("Case 3", () => {
    const list2 = new ListNode(0);

    expect(mergeTwoLists(null, list2)).to.deep.equal(list2);
  });

  test("Case 4", () => {
    const list1 = new ListNode(-9, new ListNode(3));
    const list2 = new ListNode(5, new ListNode(7));
    const expected = new ListNode(
      -9,
      new ListNode(3, new ListNode(5, new ListNode(7))),
    );

    expect(mergeTwoLists(list1, list2)).to.deep.equal(expected);
  });
});
