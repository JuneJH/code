const {ListNode} = require("../src/utils");
const {addTwoNumbers} = require('../src/addTwoNumbers');

test('大数相加', () => {
  const a = new ListNode(2);
  a.next = new ListNode(4);
  a.next.next = new ListNode(3);

  const b = new ListNode(5);
  b.next = new ListNode(6);
  b.next.next = new ListNode(4);
  expect(addTwoNumbers(a,b).toString()).toMatchObject([7,0,8]);
});