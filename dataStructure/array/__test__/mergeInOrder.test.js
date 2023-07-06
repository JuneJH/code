const {mergeTwoLists} = require('../src/mergeInOrder');
const {ListNode,nodeEach} = require("../src/utils")

test('合并有序链表', () => {
  const linkA = new ListNode(1,new ListNode(2,new ListNode(4,null)));
  const linkB = new ListNode(1,new ListNode(3,new ListNode(4,null)));
  expect(nodeEach(mergeTwoLists(linkA,linkB))).toMatchObject([1,1,2,3,4,4]);
});