const {isValid} = require('../20.有效的括号');

test("测试=》20.有效的括号",()=>{
    expect(isValid("()")).toBe(true);
    expect(isValid("()[]{}")).toBe(true);
    expect(isValid("(]")).toBe(false);
    expect(isValid("()))))")).toBe(false);
})