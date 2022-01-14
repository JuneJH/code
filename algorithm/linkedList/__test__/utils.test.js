const {ListNode,nodeEach,nodeReverse,nodeLength,} = require("../src/utils")
const linkA = new ListNode(1,new ListNode(2,new ListNode(4,null)));
const linkB = new ListNode(1,new ListNode(2,new ListNode(4,null)));
test('测试链表遍历方法', () => {
    expect(nodeEach(linkA)).toMatchObject([1,2,4]);
}); 
test('测试链表逆转方法', () => {
  expect(nodeEach(nodeReverse(linkA))).toMatchObject([4,2,1]);
}); 
test('测试链表长度方法', () => {
  expect(nodeLength(linkB)).toBe(3);
}); 