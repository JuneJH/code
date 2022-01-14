const {ListNode,nodeEach} = require("../src/utils")

    test('测试链表基本方法', () => {
        const linkA = new ListNode(1,new ListNode(2,new ListNode(4,null)));
        const linkB = new ListNode(1,new ListNode(3,new ListNode(4,null)));
        expect(nodeEach(linkA)).toMatchObject([1,2,4]);
      }); 