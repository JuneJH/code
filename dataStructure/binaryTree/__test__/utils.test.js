const {
       Node,
       getTreeDeep,
       preTraverseTree,
       preTraverseTreeRecursion,
       midTraverseTreeRecursion,
       midTraverseTree,
       afterTraverseTreeRecursion,
       afterTraverseTree

} = require("../src/utils")

describe("测试二叉树工具方法",()=>{
    const a = new Node(1); //           1
    const b = new Node(2); //      2             3
    const c = new Node(3); //  4       5     6       7
    const d = new Node(4);
    const e = new Node(5);
    const f = new Node(6);
    const g = new Node(7);
    a.left = b;
    a.right = c;

    b.left = d;
    b.right = e;

    c.left = f;
    c.right = g;

  it("测试二叉树长度",()=>{
    expect(getTreeDeep(a)).toBe(3);
  });
  it("测试二叉树先序迭代遍历",()=>{
      expect(preTraverseTree(a)).toMatchObject([1,2,4,5,3,6,7])
  });
  it("测试二叉树先序递归遍历",()=>{
      expect(preTraverseTreeRecursion(a)).toMatchObject([1,2,4,5,3,6,7])
  });
  it("测试二叉树中序递归遍历",()=>{
      expect(midTraverseTreeRecursion(a)).toMatchObject([4,2,5,1,6,3,7])
  });
  it("测试二叉树中序迭代遍历",()=>{
      expect(midTraverseTree(a)).toMatchObject([4,2,5,1,6,3,7])
  });
  it("测试二叉树后序递归遍历",()=>{
      expect(afterTraverseTreeRecursion(a)).toMatchObject([4,5,2,6,7,3,1])
  });
  it("测试二叉树后序迭代遍历",()=>{
      expect(afterTraverseTree(a)).toMatchObject([4,5,2,6,7,3,1])
  });
})
