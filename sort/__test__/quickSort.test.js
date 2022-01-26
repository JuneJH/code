const {quickSort} = require("../src/quickSort")

test("快速排序",()=>{
    expect(quickSort([2,1,4,5,3,8,7,9,6])).toMatchObject([1,2,3,4,5,6,7,8,9])
})