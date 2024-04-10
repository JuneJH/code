const {permute} = require('../src/46.全排列');

test("测试=》46.全排列",()=>{
    expect(permute([1,2,3])).toBe([[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]);
    expect(permute([0,1])).toBe([[0,1],[1,0]]);
    expect(permute([1])).toBe([[1]]);
})