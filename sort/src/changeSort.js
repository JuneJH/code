const { compare,change } = require("./utils");

/**
 * 选择排序: 一次循环找到最大或者最小值
 * @param arr
 * @returns {*}
 */
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