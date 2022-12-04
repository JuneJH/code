/**
 * 删除排序链表中重复的元素
 * 有序链表只需比较前后即可
 * @param head
 * @returns {*}
 */
const deleteDuplicates = function(head) {
    if(head === null)return head;
    const result = head;
    while(head && head.next){
        if(head.val === head.next.val){
            head.next = head.next.next;
        }else{
            head = head.next;
        }
    }
    return result;
};

module.exports = {
    deleteDuplicates
}