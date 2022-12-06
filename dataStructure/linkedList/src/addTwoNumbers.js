const {ListNode} = require("./utils");
/**
 * 大数相加
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
function addTwoNumbers(a, b) {
    // 结果链表，便于操作
    const result = new ListNode(-1);
    // 连表指针
    let p1 = a,p2 = b,p = result;
    let carray = 0;
    while(p1 != null || p2 != null){
        const  r1 = p1 == null ? 0 : p1.val;
        const  r2 = p2 == null ? 0 : p2.val;
        const res = r1 + r2 + carray;

        p.next = new ListNode(Math.floor(res % 10));
        carray = Math.floor(res / 10);
        p = p.next;
        p1 = p1 === null ? p1 : p1.next;
        p2 = p2 === null ? p2 : p2.next;
    }   
    if(carray > 0){
        p.next = new ListNode(carray);
    }


    return result.next;
}

module.exports = {
    addTwoNumbers
}