const {sum} = require("../src/sum");

test("测试位运算加法",()=>{
    expect(sum(2,5)).toBe(7)
})