const {mergeSort} = require("../src/mergeSort");

test("归并排序",()=>{
    expect(mergeSort([2,1,4,5,3,8,7,9,6])).toMatchObject([1,2,3,4,5,6,7,8,9]);
    expect(mergeSort([2,1,5,4,3,8,7,9,6])).toMatchObject([1,2,3,4,5,6,7,8,9]);
    expect(mergeSort([2,1,4,5,3,8,9,7,6])).toMatchObject([1,2,3,4,5,6,7,8,9]);
})