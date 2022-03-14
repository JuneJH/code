const {Tree} = require("../src/utils");
const {bfSearch} = require("../src/bfs");
const {deepSearch} = require("../src/deep");

describe("测试树",()=>{
    const a = new Tree('a');
    const b = new Tree('b');
    const c = new Tree('c');
    const d = new Tree('d');
    const e = new Tree('e');
    const f = new Tree('f');
    const g = new Tree('g');
    a.children.push(b,c,d);
    b.children.push(e,g);
    e.children.push(f);
    it("广度优先查找",()=>{
        expect(bfSearch([a],'e')).toBe(true);
    })
    it("深度优先查找",()=>{
        expect(deepSearch(a,'d')).toBe(true);
    })
})