const price = 65;
const arr = [4, 50, 30, 20, 5]
let max = Infinity;
function fn(price, arr, result) {
    if (arr.length == 0 || result.length > max) {
        console.log(result);
        return;
    };
    if (price <= 0) {
        if (price == 0) {
            if (max > result.length) {
                max = result.length;
            }
        }
        return;
    }
    let temp = arr[0];
    if (price >= temp) {
        result.push(temp)
        fn(price - temp, arr.slice(0), result);
        result.pop();
        fn(price, arr.slice(1), result)
    } else {
        fn(price, arr.slice(1), result)
    }
}
fn(price, arr, [])
console.log(max)