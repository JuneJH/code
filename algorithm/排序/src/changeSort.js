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
    return arr;
}

module.exports = {
    changeSort
} 