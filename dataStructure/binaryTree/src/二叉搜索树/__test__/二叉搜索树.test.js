const {createSearchBinaryTree,findBySearchBinaryTree,isBalanceTree,sigleChange,doubleChange,finalChange} = require("../二叉搜索树");
const { Node,getTreeDeep} = require("../../utils");

describe("测试二叉搜索树",()=>{
    const arr = [1];
    for (let i = 0; i < 10000; i++) {
        arr.push(Math.floor(Math.random() * 10000))
    }
    const searchBinaryTree = createSearchBinaryTree(arr);
    const a = new Node("1");
    const b = new Node("2");
    const c = new Node("3");
    const d = new Node("4");
    const e = new Node("5");

    a.left = b;
    a.right = c;
    b.left = d;
    d.right =e;

    it("测试存在的",()=>{
        expect(findBySearchBinaryTree(searchBinaryTree,1)).toBe(true);
    });
    it("测试不存在",()=>{
        expect(findBySearchBinaryTree(searchBinaryTree,-1)).toBe(false);
    });
    it("测试二叉树深度",()=>{
        expect(getTreeDeep(a)).toBe(4);
    });
    it("测试是否为平衡二叉树",()=>{
        expect(isBalanceTree(a)).toBe(false);
    });
    it("测试单旋",()=>{
        const tree = sigleChange(a);
        expect(isBalanceTree(tree)).toBe(false);
    })
})

