/**
 * 判断是不是循环链表，利用快慢指针
 * 如果快指针等于慢指针说明存在环
 * @param {*} head 
 * @returns 
 */
function hasCycle(head) {
    if(!head || !head.next)return false;
    let f = head;
    let s = head;
    // 如果快指针走到尾了，说明没有环
    while(f && f.next){
        // 每次走两步
        f= f.next.next;
        // 每次走一步
        s = s.next;
        // 再次相遇即存在环
        if(f === s)return true;
    }
    
    return false;
 }

 module.exports = {
    hasCycle
 }