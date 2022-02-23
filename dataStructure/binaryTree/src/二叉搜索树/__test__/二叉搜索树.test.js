const {createSearchBinaryTree,findBySearchBinaryTree} = require("../二叉搜索树");

describe("测试二叉搜索树",()=>{
    const arr = [1];
    for (let i = 0; i < 10000; i++) {
        arr.push(Math.floor(Math.random() * 10000))
    }
    const searchBinaryTree = createSearchBinaryTree(arr);
    it("测试存在的",()=>{
        expect(findBySearchBinaryTree(searchBinaryTree,1)).toBe(true);
    })
    it("测试不存在",()=>{
        expect(findBySearchBinaryTree(searchBinaryTree,-1)).toBe(false);
    })
})