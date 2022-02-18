const { createStore } = require("../index");

describe("测试redux",()=>{
    const reducer = (state,{type,payload})=>{
        if(type === "+"){
            return state + 1;
        }else if(type === "-"){
            return  state - 1;
        }else if(type === "="){
            return  payload
        }
        return  state;
    }
    const store = createStore(reducer,0);
    it("测试加一",()=>{
        store.dispatch({type:"+"});
        const res = store.getState();
        expect(res).toBe(1)
    });
    it("测试减一",()=>{
        store.dispatch({type:"-"});
        const res = store.getState();
        expect(res).toBe(0)
    });
    it("测试赋值",()=>{
        store.dispatch({type:"=",payload:10});
        const res = store.getState();
        expect(res).toBe(10)
    })
})