//公共方法

const compare = (a, b) => a > b ? true : false;
const change = (arr, a, b) => { [arr[a], arr[b]] = [arr[b], arr[a]] }
// 选择排序
function changeSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let maxIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (compare(arr[maxIndex], arr[j])) maxIndex = j;
        }
        change(arr, i, maxIndex)
    }
}
// 冒泡

function bubbleSort(arr) {
    console.log('bubble')
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (compare(arr[j], arr[j + 1])) change(arr, j, j + 1)
        }
    }
}
// 插入
function insertSort(arr) {
    console.log('insertSort');
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            const tmp = arr[i];
            for (let j = i; j >= 0; j--) {
                if (tmp < arr[j - 1] && j > 0) {
                    arr[j] = arr[j - 1];
                } else {
                    arr[j] = tmp;
                    break;
                }
            }
        }
    }
}

// 快速

function quickSort(arr) {
    function _quickSort(arr, start, end) {
        if (start > end - 1 || arr.length == 0 || start > arr.length) return;
        let left = start;
        let right = end;
        do {
            do left++; while (arr[left] < arr[start] && left < right);
            do right--; while (arr[right] > arr[start] && left < right);
            if (left < right) change(arr, left, right);
        } while (left < right);
        const middleIndex = right == left ? right - 1 : right;
        change(arr, middleIndex, start)
        _quickSort(arr, start, middleIndex)
        _quickSort(arr, middleIndex + 1, end)
    }
    _quickSort(arr, 0, arr.length)
}

// const arr = [8,1,2,5,3,4,9,7,6];
// // bubbleSort(arr);
// // quickSort(arr)
// insertSort(arr)
// console.log(arr)

function mergeSort(arr) {  //采用自上而下的递归方法
    var len = arr.length;
    if (len < 2) {
        return arr;
    }
    var middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    var result = [];
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
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
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