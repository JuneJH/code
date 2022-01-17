const {Node,getTreeDeep} = require("../src/utils")

describe("测试二叉树工具方法",()=>{
    const a = new Node('a')
    const b = new Node('b')
    const c = new Node('c');
    a.left = b;
    a.right = c;
  it("测试链表长度",()=>{
    expect(getTreeDeep(a)).toBe(2);
  })
})
