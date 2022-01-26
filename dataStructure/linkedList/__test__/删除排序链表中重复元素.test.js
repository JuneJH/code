const {ListNode,nodeEach} = require("../src/utils");
const {deleteDuplicates} = require('../src/删除排序链表中重复元素');

test('删除排序链表中重复元素', () => {
  const linkA = new ListNode(1,new ListNode(1,new ListNode(2,new ListNode(2,null))));
  expect(nodeEach(deleteDuplicates(linkA))).toMatchObject([1,2]);
});