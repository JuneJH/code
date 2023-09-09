/*
 * @lc app=leetcode.cn id=2 lang=java
 *
 * [2] 两数相加
 */

// @lc code=start

import javax.management.ListenerNotFoundException;

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */

class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {

        ListNode res = new ListNode(-1);
        ListNode current = res;
        
        int carry = 0;

        while(l1 != null || l2 != null){
            int v1 = 0;
            int v2 = 0;
            if(l1 != null){
                v1 = l1.val;
                l1 = l1.next;
            }
            if(l2 != null){
                v2 = l2.val;
                l2 = l2.next;
            }

            int r = v1 +  v2 + carry;

            current.next = new ListNode(r%10);
            current = current.next;
            carry = r / 10;


        }
        if(carry > 0){
            current.next = new ListNode(carry);
        }




        return res.next;
    }
}
// @lc code=end

