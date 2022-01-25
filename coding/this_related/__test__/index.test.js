require("../src/index")

describe("测试this相关方法",()=>{
  const obj = {
      a:1,
      b:2,
  }
  const target ={
      a:2,
      b:1,
      say(){
          return this.a;
      }
  }
  it("测试call",()=>{
    expect(target.say.myCall(obj)).toBe(1);
  });
  it("测试apply",()=>{
    expect(target.say.myApply(obj)).toBe(1);
  });
  it("测试myBind",()=>{
    expect(target.say.myBind(obj)()).toBe(1);
  });
  
})
