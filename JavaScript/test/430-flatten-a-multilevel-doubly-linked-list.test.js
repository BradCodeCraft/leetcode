import { expect } from "chai";
import { describe, test } from "mocha";
import {
  _Node,
  flatten,
} from "../src/430-flatten-a-multilevel-doubly-linked-list.js";

describe("Flatten a Multilevel Doubly Linked List", () => {
  test("Case 1", () => {
    const head = new _Node(1);
    head.next = new _Node(2, head);
    const levelTwoChild = new _Node(11);
    levelTwoChild.next = new _Node(12, levelTwoChild);
    const levelOneChild = new _Node(7);
    levelOneChild.next = new _Node(8, levelOneChild);
    levelOneChild.next.child = levelTwoChild;
    levelOneChild.next.next = new _Node(9, levelOneChild.next);
    levelOneChild.next.next.next = new _Node(10, levelOneChild.next.next);
    head.next.next = new _Node(3, head.next);
    head.next.next.child = levelOneChild;
    head.next.next.next = new _Node(4, head.next.next);
    head.next.next.next.next = new _Node(5, head.next.next.next);
    head.next.next.next.next.next = new _Node(6, head.next.next.next.next);

    const expected = new _Node(1);
    expected.next = new _Node(2, expected);
    expected.next.next = new _Node(3, expected.next);
    expected.next.next.next = new _Node(7, expected.next.next);
    expected.next.next.next.next = new _Node(8, expected.next.next.next);
    expected.next.next.next.next.next = new _Node(
      11,
      expected.next.next.next.next,
    );
    expected.next.next.next.next.next.next = new _Node(
      12,
      expected.next.next.next.next.next,
    );
    expected.next.next.next.next.next.next.next = new _Node(
      9,
      expected.next.next.next.next.next.next,
    );
    expected.next.next.next.next.next.next.next.next = new _Node(
      10,
      expected.next.next.next.next.next.next.next,
    );
    expected.next.next.next.next.next.next.next.next.next = new _Node(
      4,
      expected.next.next.next.next.next.next.next.next,
    );
    expected.next.next.next.next.next.next.next.next.next.next = new _Node(
      5,
      expected.next.next.next.next.next.next.next.next.next,
    );
    expected.next.next.next.next.next.next.next.next.next.next.next = new _Node(
      6,
      expected.next.next.next.next.next.next.next.next.next.next,
    );

    expect(flatten(head)).to.deep.equal(expected);
  });

  test("Case 2", () => {
    const head = new _Node(1);
    head.next = new _Node(2, head);
    head.child = new _Node(3);

    const expected = new _Node(1);
    expected.next = new _Node(3, expected);
    expected.next.next = new _Node(2, expected.next);

    expect(flatten(head)).to.deep.equal(expected);
  });

  test("Case 3", () => {
    expect(flatten()).to.be.null;
  });
});
