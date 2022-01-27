const { compare,change } = require("./utils");

/**
 * 冒泡排序
 * @param arr
 * @returns {*}
 */
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (compare(arr[j], arr[j + 1])) change(arr, j, j + 1)
        }
    }
    return arr
}

module.exports = {
    bubbleSort
}