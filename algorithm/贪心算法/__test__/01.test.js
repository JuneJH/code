const {majorityElement} = require("../src/01.多数元素");

test("查找多数元素",()=>{
    expect(majorityElement([3,2,3])).toBe(3);
    expect(majorityElement([2,2,1,1,1,2,2])).toBe(2);
    expect(majorityElement([8,8,7,7,7])).toBe(7);
    expect(majorityElement([8,8,8,7,7])).toBe(8);
})