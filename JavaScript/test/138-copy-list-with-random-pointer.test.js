import { expect } from "chai";
import { describe, test } from "mocha";
import {
  _Node,
  copyRandomList,
} from "../src/138-copy-list-with-random-pointer.js";

describe("Copy List with Random Pointer", () => {
  test("Case 1", () => {
    const head = new _Node(7);
    const first = new _Node(13);
    const second = new _Node(11);
    const third = new _Node(10);
    const fourth = new _Node(1);

    head.next = first;
    first.random = head;
    first.next = second;
    second.random = fourth;
    second.next = third;
    third.random = second;
    third.next = fourth;

    expect(copyRandomList(head)).to.deep.eq(head);
  });

  test("Case 2", () => {});

  test("Case 3", () => {});
});
