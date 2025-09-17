import { describe, test } from "mocha";
import { expect } from "chai";
import {
  _Node,
  connect,
} from "../src/116-populating-next-right-pointers-in-each-node.js";

describe("Populating Next Right Pointers in Each Node", () => {
  test("Case 1", () => {
    expect(
      connect(
        new _Node(
          1,
          new _Node(2, new _Node(4), new _Node(5)),
          new _Node(3, new _Node(6), new _Node(7)),
        ),
      ),
    ).to.deep.eq(
      new _Node(
        1,
        new _Node(
          2,
          new _Node(
            4,
            null,
            null,
            new _Node(
              5,
              null,
              null,
              new _Node(6, null, null, new _Node(7, null, null, null)),
            ),
          ),
          new _Node(
            5,
            null,
            null,
            new _Node(6, null, null, new _Node(7, null, null, null)),
          ),
          new _Node(
            3,
            new _Node(6, null, null, new _Node(7, null, null, null)),
            new _Node(7, null, null, null),
          ),
        ),
        new _Node(
          3,
          new _Node(6, null, null, new _Node(7, null, null, null)),
          new _Node(7, null, null, null),
        ),
        null,
      ),
    );
  });

  test("Case 2", () => {
    expect(connect()).to.be.null;
  });
});
