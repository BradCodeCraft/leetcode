class MyStack {
  constructor() {
    this.stack = [];
    this.head = null;
  }

  /**
   * add number into stack
   *
   * @param {number} x
   */
  push(x) {
    this.stack.push(x);
    this.head = this.stack.length - 1;
  }

  /**
   * remove and return the element on the top of the stack
   *
   * @returns {number} removed top element
   */
  pop() {
    const value = this.stack.pop();

    // decrease head by one if not the last element
    if (this.head > 0) this.head -= 1;
    else this.head = null;

    return value;
  }

  /**
   * return the top element without removing it
   *
   * @returns {number} top element
   */
  top() {
    return this.stack[this.head];
  }

  /**
   * check if stack is empty
   *
   * @returns {boolean}
   */
  empty() {
    return this.head == null;
  }
}

export { MyStack };
