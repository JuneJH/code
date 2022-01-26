function insertSort(arr) {
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
    return arr;
}


module.exports = {
    insertSort
}