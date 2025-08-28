class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class MyLinkedList {
  constructor() {
    /** @type {Node} */
    this.head = null;
    this.size = 0;
  }

  /**
   * @param {number} index
   * @returns {number}
   */
  get(index) {
    if (index < 0 || index >= this.size) return -1;

    let current = this.head;

    while (index > 0) {
      current = current.next;
      index -= 1;
    }

    return current.val;
  }

  /**
   * @param {number} val
   */
  addAtHead(val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size += 1;
  }

  /**
   * @param {number} val
   */
  addAtTail(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      newNode.prev = current;
      current.next = newNode;
    }

    this.size += 1;
  }

  /**
   * @param {number} index
   * @param {number} val
   */
  addAtIndex(index, val) {
    if (index < 0 || index > this.size) return;
    if (index === 0) return this.addAtHead(val);

    let current = this.head;
    let pointer = 0;

    while (pointer < index - 1) {
      current = current.next;
      pointer += 1;
    }

    const newNode = new Node(val);
    newNode.prev = current;
    newNode.next = current.next;
    current.next = newNode;
    this.size += 1;
  }

  /**
   * @param {number} index
   */
  deleteAtIndex(index) {
    if (index < 0 || index >= this.size) return;

    if (index === 0) {
      this.head = this.head.next;
    } else {
      let current = this.head;
      let pointer = 0;

      while (pointer < index - 1) {
        current = current.next;
        pointer += 1;
      }

      current.next = current.next.next;
    }

    this.size -= 1;
  }
}

export { Node, MyLinkedList };
