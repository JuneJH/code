//公共方法

const compare = (a, b) => a > b ? true : false;
const change = (arr, a, b) => { [arr[a], arr[b]] = [arr[b], arr[a]] }
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
     _quickSort(arr, 0, arr.length);
     return arr;
}


module.exports = {
    quickSort
}