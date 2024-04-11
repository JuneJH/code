/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    const sentinel = new ListNode(null,head);
    let s = sentinel,f = sentinel.next;

    while(s != null && f != null && s.next != null && f.next != null){
        if(s === f){
            return true;
        }
        s = s.next;
        f = f.next.next;

    }
    return false;
    
};
// @lc code=end

