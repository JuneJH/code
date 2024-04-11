/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements01 = function(head, val) {
   // 增加哨兵减少判断
   const sentinel = new ListNode(null,head);
   let p = sentinel;
   while(p.next){
    if(p.next.val === val){
        p.next = p.next.next;
    }else{
        p = p.next;
    }
   }
   return sentinel.next;
};

const removeElements = function (head,val){
    if(!head){
        return head;
    }
    // 利用递归保留了上一次节点的引用
    head.next = removeElements(head.next,val);
    return head.val === val ? head.next : head;
}
// @lc code=end

