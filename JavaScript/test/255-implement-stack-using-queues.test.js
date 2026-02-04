import { describe, test } from "mocha";
import { expect } from "chai";
import { MyStack } from "../src/255-implement-stack-using-queues.js";

describe("Implement Stack using Queues", () => {
  test("Case 1", () => {
    const stack = new MyStack();

    expect(stack.stack).to.deep.eq([]);

    stack.push(1);
    stack.push(2);

    expect(stack.top()).to.eq(2);
    expect(stack.pop()).to.eq(2);
    expect(stack.empty()).to.be.false;
  });

  test("Case 2", () => {
    const stack = new MyStack();

    expect(stack.stack).to.deep.eq([]);

    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(2);

    expect(stack.top()).to.eq(2);
    expect(stack.pop()).to.eq(2);
    expect(stack.top()).to.eq(4);
  });
});
