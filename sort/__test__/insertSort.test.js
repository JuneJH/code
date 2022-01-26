const {insertSort} = require("../src/inserSort")

test("选择排序",()=>{
    expect(insertSort([2,1,4,5,3,8,7,9,6])).toMatchObject([1,2,3,4,5,6,7,8,9])
})