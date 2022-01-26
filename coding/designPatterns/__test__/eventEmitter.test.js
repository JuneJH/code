const { EventEmitter } = require("../src/eventEmitter");

describe("测试事件机制",()=>{
    let aVal = 0,bVal = 0,cVal = 0;
    function a(...params) {
        if(params[0]){
            aVal += params[0]
        }else{
            aVal ++;
        }
    }
    function b(...params) {
        if(params[0]){
            bVal += params[0]
        }else{
            bVal ++;
        }
    }
    function c(...params) {
        if(params[0]){
            cVal += params[0]
        }else{
            cVal ++;
        }
    }
    const e = new EventEmitter();
    e.on("a", a);
    e.on("b", b);
    e.once("c", c);
    it("触发事件a",()=>{
        e.emit("a")
        expect(aVal).toBe(1)
    })
    it("触发事件b",()=>{
        e.emit("b",2)
        expect(bVal).toBe(2)
    })
    it("触发事件c",()=>{
        e.emit("c")
        expect(cVal).toBe(1)
    })
    it("再次触发事件c",()=>{
        e.emit("c")
        expect(cVal).toBe(1)
    })
    it("注销事件",()=>{
        e.off("a",a);
        e.emit("a");
        expect(aVal).toBe(1)
    })
})