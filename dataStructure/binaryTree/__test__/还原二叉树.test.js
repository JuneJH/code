const {reductionTree4MidAndAfter,reductionTree4preAndMid} = require("../src/还原二叉树")

//           1
//      2             3
//  4       5     6       7


describe("通过遍历顺序还原二叉树",()=>{
    const pre = "1245367";
    const mid = "4251637";
    const after = "4526731";

    it("通过前序中序输出后序",()=>{
        expect(reductionTree4preAndMid(pre,mid)).toBe(after);
    })
    it("通过中序后序输出前序",()=>{
        expect(reductionTree4MidAndAfter(mid,after)).toBe(pre);
    })


})