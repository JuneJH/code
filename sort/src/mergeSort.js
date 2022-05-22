
/**
 * 归并排序
 * @param {*array} array 
 * @returns 
 */
function mergeSort(array){
    // 当只有一个元素的时候,数组就已经排好序了
    if(array.length <= 1){
        return array;
    }
    // 从中间位置分割数组形成子数组
    const mid = Math.floor(array.length / 2);
    // 分别对子数组进行排序
    const leftArr = mergeSort(array.slice(0,mid));
    const rightArr = mergeSort(array.slice(mid,array.length));
    // 归并在一起就是整个问题的解
    return merge(leftArr,rightArr);
}

function merge(arr1,arr2){
    const result = new Array(arr1.length+arr2.length);
    let index = 0;
    let p1 = 0;
    let p2 = 0;
    while(index < result.length){
        if(p1 < arr1.length && p2 < arr2.length){
            if(arr1[p1] <= arr2[p2]){
                result[index++] = arr1[p1 ++];
            }else{
                result[index++] = arr2[p2++];
            }
        }else if(p1 >= arr1.length){
            result[index++] = arr2[p2++];
        }else{
            result[index++] = arr1[p1 ++];
        }
    }
    return result;
}

module.exports = {
    mergeSort
}