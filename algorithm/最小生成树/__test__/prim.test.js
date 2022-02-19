const { Graph } = require("../../utils");
const { prim } = require("../src/prim");
test("测试普里姆算法",()=>{
    const a = new Graph('a');
    const b = new Graph('b');
    const c = new Graph('c');
    const d = new Graph('d');
    const e = new Graph('e');

    const pointSet = [a,b,c,d,e];
    const distance = [
        [0,4,7,Infinity,Infinity],
        [4,0,8,6,Infinity],
        [7,8,0,5,Infinity],
        [Infinity,6,5,0,7],
        [Infinity,Infinity,Infinity,7,0],
    ];

    expect(prim(pointSet,distance,pointSet[2])).toBe(22)
})