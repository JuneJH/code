const {ListNode} = require("../src/utils");
const {hasCycle} = require('../src/环形链表');

test('环形链表', () => {
  const head = new ListNode(3,null);
  const a = new ListNode(2,null);
  const b = new ListNode(-4,a);
  head.next = a;
  a.next = b;
  expect(hasCycle(head)).toBeTruthy();
});