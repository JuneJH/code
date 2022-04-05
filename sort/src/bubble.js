const { compare,change } = require("./utils");

/**
 * 冒泡排序：两两比较符合条件(根据排序顺序)就交换位置,把大的或者小的数冒泡至前面
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