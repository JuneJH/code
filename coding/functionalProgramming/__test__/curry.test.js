const { curry } = require("../src/curry");

describe("测试函数柯里化",()=>{
    function add(a,b,c,d,e){
        return a + b + c + d + e;
    }
    const step1 = curry(add,1);
    const step2 = curry(step1,2);
    const step3 = curry(step2,3,4,5);

    it("柯里化一",()=>{
        expect(step1(2,3,4,5)).toBe(15);
    })
    it("柯里化二",()=>{
        expect(step2(3,4,5)).toBe(15);
    })
    it("柯里化三",()=>{
        expect(step3(6)).toBe(15);
    })
})

