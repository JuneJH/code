const { clone } = require("../src/deepClone");

test("测试深度克隆",()=>{
    const target = {
        a: 1,
        b: 2,
        c:{
            name:"c",
            value:3
        }
    }
    expect(clone(target)).toEqual(target)
})