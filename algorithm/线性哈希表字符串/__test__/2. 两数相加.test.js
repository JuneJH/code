const { addTwoNumbers, ListNode } = require('../src/2.两数相加');

// 辅助函数：将数组转换为链表
function createListNodeByArray(arr) {
    const dummy = new ListNode(0);
    let current = dummy;
    for (const val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

// 辅助函数：将链表转换为数组
function listNodeToArray(listNode) {
    const result = [];
    let current = listNode;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

describe('两数相加', () => {
    test('基本测试用例', () => {
        // 测试用例 1: 342 + 465 = 807
        expect(listNodeToArray(
            addTwoNumbers(
                createListNodeByArray([2, 4, 3]),
                createListNodeByArray([5, 6, 4])
            )
        )).toEqual([7, 0, 8]);

        // 测试用例 2: 0 + 0 = 0
        expect(listNodeToArray(
            addTwoNumbers(
                createListNodeByArray([0]),
                createListNodeByArray([0])
            )
        )).toEqual([0]);

        // 测试用例 3: 9999999 + 9999 = 10009998
        expect(listNodeToArray(
            addTwoNumbers(
                createListNodeByArray([9, 9, 9, 9, 9, 9, 9]),
                createListNodeByArray([9, 9, 9, 9])
            )
        )).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
    });

    test('边界情况测试', () => {
        // 测试不同长度的链表
        expect(listNodeToArray(
            addTwoNumbers(
                createListNodeByArray([1, 2, 3]),
                createListNodeByArray([1])
            )
        )).toEqual([2, 2, 3]);

        // 测试有进位的情况
        expect(listNodeToArray(
            addTwoNumbers(
                createListNodeByArray([9]),
                createListNodeByArray([1])
            )
        )).toEqual([0, 1]);

        // 测试全是9的情况
        expect(listNodeToArray(
            addTwoNumbers(
                createListNodeByArray([9, 9]),
                createListNodeByArray([9, 9])
            )
        )).toEqual([8, 9, 1]);
    });
});