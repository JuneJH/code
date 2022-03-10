//公共方法

const compare = (a, b) => a > b ? true : false;
const change = (arr, a, b) => { [arr[a], arr[b]] = [arr[b], arr[a]] }

function mergeSort(arr) {  //采用自上而下的递归方法
    const len = arr.length;
    if (len < 2) {
        return arr;
    }
    var middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const result = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());
    return result;
}
const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(myMergeSort(arr));

function myMergeSort(arr){
    const len = arr.length;
    if(len < 2){
        return arr;
    }
    const middleIndex = Math.floor(len / 2);
    const left = arr.slice(0,middleIndex);
    const right = arr.slice(middleIndex);
    return merge(mergeSort(left),mergeSort(right));
    function merge(left,right){
        const result = [];
        while(left.length && right.length){
            if(left[0] > right[0]){
                result.push(right.shift())
            }else{
                result.push(left.shift())
            }
            
        }
        while(left.length){
            result.push(left.shift())
        }
        while(right.length){
            result.push(right.shift())
        }
        return result;
    }

}