import { expect } from "chai";
import { describe, test } from "mocha";
import { ListNode, addTwoNumbers } from "../src/2-add-two-numbers.js";

describe("Add Two Numbers", () => {
  test("Case 1", () => {
    const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
    const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

    expect(addTwoNumbers(l1, l2)).to.deep.equal(
      new ListNode(7, new ListNode(0, new ListNode(8))),
    );
  });

  test("Case 2", () => {
    const l1 = new ListNode(0);
    const l2 = new ListNode(0);

    expect(addTwoNumbers(l1, l2)).to.deep.equal(new ListNode(0));
  });

  test("Case 3", () => {
    const l1 = new ListNode(
      9,
      new ListNode(
        9,
        new ListNode(
          9,
          new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))),
        ),
      ),
    );
    const l2 = new ListNode(
      9,
      new ListNode(9, new ListNode(9, new ListNode(9))),
    );

    expect(addTwoNumbers(l1, l2)).to.deep.equal(
      new ListNode(
        8,
        new ListNode(
          9,
          new ListNode(
            9,
            new ListNode(
              9,
              new ListNode(
                0,
                new ListNode(0, new ListNode(0, new ListNode(1))),
              ),
            ),
          ),
        ),
      ),
    );
  });
});
