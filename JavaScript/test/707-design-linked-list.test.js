// import { expect } from "chai";
// import { beforeEach, describe, test } from "mocha";
// import { MyLinkedList } from "../src/707-design-linked-list.js";
//
// describe("should create a MyLinkedList instance", () => {
//   test("new MyLinkedList()", () => {
//     const myLinkedList = new MyLinkedList();
//
//     expect(() => myLinkedList).to.not.throw();
//     expect(myLinkedList.value).to.be.undefined;
//     expect(myLinkedList.next).to.be.undefined;
//   });
// });
//
// describe("methods should work", () => {
//   /** @type {MyLinkedList} */
//   let myLinkedList = null;
//   beforeEach(() => {
//     myLinkedList = new MyLinkedList();
//   });
//
//   test("addToHead()", () => {
//     myLinkedList.addAtHead(1);
//
//     expect(myLinkedList.head.value).to.equal(1);
//
//     myLinkedList.addAtHead(2);
//
//     expect(myLinkedList.head.value).to.equal(2);
//     expect(myLinkedList.head.next.value).to.equal(1);
//   });
//
//   test("addAtTail()", () => {
//     myLinkedList.addAtTail(1);
//
//     expect(myLinkedList.value).to.equal(1);
//
//     myLinkedList.addAtTail(2);
//
//     expect(myLinkedList.value).to.equal(1);
//     expect(myLinkedList.next.value).to.equal(2);
//   });
//
//   test("addAtIndex()", () => {
//     myLinkedList.addAtIndex(0, 1);
//
//     expect(myLinkedList.value).to.equal(1);
//
//     myLinkedList.addAtIndex(0, 2);
//
//     expect(myLinkedList.value).to.equal(2);
//     expect(myLinkedList.next.value).to.equal(1);
//
//     myLinkedList.addAtIndex(2, 3);
//
//     expect(myLinkedList.value).to.equal(2);
//     expect(myLinkedList.next.value).to.equal(1);
//     expect(myLinkedList.next.next.value).to.equal(3);
//
//     myLinkedList.addAtIndex(1, 0);
//
//     expect(myLinkedList.value).to.equal(2);
//     expect(myLinkedList.next.value).to.equal(0);
//     expect(myLinkedList.next.next.value).to.equal(1);
//     expect(myLinkedList.next.next.next.value).to.equal(3);
//   });
//
//   test("deleteAtIndex()", () => {
//     myLinkedList.addAtHead(1);
//     myLinkedList.addAtHead(2);
//     myLinkedList.addAtIndex(2, 3);
//     myLinkedList.addAtIndex(1, 0);
//
//     expect(myLinkedList.value).to.equal(2);
//     expect(myLinkedList.next.value).to.equal(0);
//     expect(myLinkedList.next.next.value).to.equal(1);
//     expect(myLinkedList.next.next.next.value).to.equal(3);
//
//     myLinkedList.deleteAtIndex(0);
//
//     expect(myLinkedList.value).to.equal(0);
//     expect(myLinkedList.next.value).to.equal(1);
//     expect(myLinkedList.next.next.value).to.equal(3);
//
//     myLinkedList.deleteAtIndex(2);
//
//     expect(myLinkedList.value).to.equal(0);
//     expect(myLinkedList.next.value).to.equal(1);
//
//     myLinkedList.deleteAtIndex(2);
//
//     expect(myLinkedList.value).to.equal(0);
//     expect(myLinkedList.next.value).to.equal(1);
//   });
// });
//
// describe("leetcode", () => {
//   test("case 1", () => {
//     const myLinkedList = new MyLinkedList();
//     myLinkedList.addAtHead(1);
//     myLinkedList.addAtTail(3);
//     myLinkedList.addAtIndex(1, 2);
//     expect(myLinkedList.get(1)).to.equal(2);
//     myLinkedList.deleteAtIndex(1);
//     expect(myLinkedList.get(1)).to.equal(3);
//   });
// });
