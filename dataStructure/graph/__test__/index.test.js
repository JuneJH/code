const {Graph} = require("../src/utils");
const {deepSearch} = require("../src/deep");
const {bfs} = require("../src/bfs");
describe("测试图遍历",()=>{
    const a = new Graph('a');
    const b = new Graph('b')
    const c = new Graph('c')
    const d = new Graph('d')
    const e = new Graph('e')

    a.neighbor.push(b,c)
    b.neighbor.push(a,c,d)
    c.neighbor.push(a,b,d)
    d.neighbor.push(b,c,e)
    e.neighbor.push(d)
    it("广度优先遍历",()=>{
        expect(bfs([a],'c')).toBe(true);
    })
    it("深度优先遍历",()=>{
        expect(deepSearch(a,'c',[])).toBe(true);
    })
})