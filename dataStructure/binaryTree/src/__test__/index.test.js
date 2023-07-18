const { preOrder, preOrder4Stack, preOrderGeneratorCall } = require("../先序遍历");
const { ldr,
    ldr4stack,
    callLdrGenrotor } = require("../中序遍历");

const { lrd,
    lrd4Stack } = require("../后序遍历");
const { Node, getTreeDeep } = require("../utils");
describe("测试二叉树遍历", () => {
    const a = new Node("1");
    const b = new Node("2");
    const c = new Node("3");
    const d = new Node("4");
    const e = new Node("5");

    a.left = b;
    a.right = c;
    b.left = d;
    d.right = e;
    it("【前序遍历】递归方案", () => {
        expect(preOrder(a)).toEqual(["1", "2", "4", "5", "3"]);
    });
    it("【前序遍历】栈方案", () => {
        expect(preOrderGeneratorCall(a)).toEqual(["1", "2", "4", "5", "3"]);
    });
    it("【前序遍历】迭代器方案", () => {
        expect(preOrderGeneratorCall(a)).toEqual(["1", "2", "4", "5", "3"]);
    });

    it("【中序遍历】递归方案", () => {
        expect(ldr(a)).toEqual(["4", "5", "2", "1", "3"]);
    });
    it("【中序遍历】栈方案", () => {
        expect(ldr4stack(a)).toEqual(["4", "5", "2", "1", "3"]);
    });
    it("【中序遍历】迭代器方案", () => {
        expect(callLdrGenrotor(a)).toEqual(["4", "5", "2", "1", "3"]);
    });

    it("【后序遍历】递归方案", () => {
        expect(lrd(a)).toEqual(["5", "4", "2", "3", "1"]);
    });
    it("【后序遍历】栈方案",()=>{
        expect(lrd4Stack(a)).toEqual(["5", "4", "2", "3", "1"]);
    });
    // it("【后序遍历】迭代器方案",()=>{
    //     expect(preOrderGeneratorCall(a)).toEqual(["1","2","4","5","3"]);
    // });
})