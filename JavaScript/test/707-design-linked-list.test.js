import { expect } from "chai";
import { beforeEach, describe, test } from "mocha";
import { Node, MyLinkedList } from "../src/707-design-linked-list.js";

describe("Design Linked List", () => {
  test("Case 1", () => {
    let myLinkedList = new MyLinkedList();
    myLinkedList.addAtHead(1);
    let expected = new MyLinkedList();
    expected.head = new Node(1);
    expected.size = 1;

    expect(myLinkedList).to.deep.equal(expected);

    myLinkedList.addAtTail(3);
    expected.head.next = new Node(3);
    expected.head.next.prev = expected.head;
    expected.size = 2;

    expect(myLinkedList).to.deep.equal(expected);

    myLinkedList.addAtIndex(1, 2); // linked list becomes 1->2->3
    expected = new MyLinkedList();
    expected.head = new Node(1);
    expected.head.next = new Node(2);
    expected.head.next.prev = expected.head;
    expected.head.next.next = new Node(3);
    expected.head.next.next.prev = expected.head.next;
    expected.size = 3;

    expect(myLinkedList.get(1)).to.equal(2); // return 2

    myLinkedList.deleteAtIndex(1); // now the linked list is 1->3
    expected = new MyLinkedList();
    expected.head = new Node(1);
    expected.head.next = new Node(3);
    expected.head.next.prev = expected.head;
    expected.size = 2;

    expect(myLinkedList).to.deep.equal(expected);

    expect(myLinkedList.get(1)).to.equal(3); // return 3;
  });
});
