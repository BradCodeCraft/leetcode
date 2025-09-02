import { expect } from "chai";
import { describe, test } from "mocha";
import { ListNode, rotateRight } from "../src/61-rotate-list.js";

describe("Rotate List", () => {
  test("Case 1", () => {
    const head = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))),
    );

    expect(rotateRight(head, 2)).to.deep.eq(
      new ListNode(
        4,
        new ListNode(5, new ListNode(1, new ListNode(2, new ListNode(3)))),
      ),
    );
  });

  test("Case 2", () => {
    const head = new ListNode(0, new ListNode(1, new ListNode(2)));

    expect(rotateRight(head, 4)).to.deep.eq(
      new ListNode(2, new ListNode(0, new ListNode(1))),
    );
  });

  test("Failed", () => {
    const head = new ListNode(1);

    expect(rotateRight(head, 1)).to.deep.eq(new ListNode(1));
  });
});
