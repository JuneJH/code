const { compare,change } = require("./utils");

/**
 * 快排
 * @param arr
 * @returns {*}
 */
function quickSort(arr) {
    function _quickSort(arr, start, end) {
        // if (start > end - 1 || arr.length == 0 || start > arr.length) return;
        // let left = start;
        // let right = end;
        // do {
        //     do left++; while (arr[left] < arr[start] && left < right);
        //     do right--; while (arr[right] > arr[start] && left < right);
        //     if (left < right) change(arr, left, right);
        // } while (left < right);
        // const middleIndex = right == left ? right - 1 : right;
        // change(arr, middleIndex, start)
        // _quickSort(arr, start, middleIndex)
        // _quickSort(arr, middleIndex + 1, end)
    }
    function _quickSort1(arr,start,end){
       let i = start;
       let j = end;
       const temp = arr[i];
       while(i < j){
           while(i < j && arr[j] > temp){j --};
           if(i < j){arr[i ++] = arr[j]};
           while(i < j && arr[i] < temp){i ++};
           if(i < j ){arr[j --] = arr[i]};
       }
       arr[i] = temp;
       if(i - 1 - start > 1){_quickSort1(arr,0,i -1)};
       if(end - i - 1 > 1){_quickSort1(arr,i + 1,end)};

    }
     _quickSort1(arr, 0, arr.length - 1);
     return arr;
}


module.exports = {
    quickSort
}