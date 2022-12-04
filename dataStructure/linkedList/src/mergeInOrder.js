/**
 * 迭代方案
 * 合并两个有序链表
 * 遍历链表按照大小顺序放入新的链表中
 * @param {*} list1 
 * @param {*} list2 
 * @returns 
 */
const mergeTwoLists = function (list1, list2) {
    const result = { val: 0, next: null };
    let pre = result;
    while (list2 && list1) {
        if (list1.val > list2.val) {
            pre.next = list2;
            list2 = list2.next;
        } else {
            pre.next = list1;
            list1 = list1.next;
        }
        pre = pre.next;
    }
    pre.next = list1 ? list1 : list2;
    return result.next;
};

/**
 * 递归方案
 * @param {*} list1 
 * @param {*} list2 
 * @returns 
 */
const mergeTwoLists01 = function (list1, list2) {
    if (!list1) {
        return list2;
    } else
        if (!list2) {
            return list1
        } else {
            if (list1.val > list2.val) {
                list2.next = mergeTwoLists(list2.next, list1);
                return list2;
            } else {
                list1.next = mergeTwoLists(list1.next, list2);
                return list1
            }
        }
};

module.exports = { mergeTwoLists };