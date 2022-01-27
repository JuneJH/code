const compare = (a, b) => a > b ? true : false;
const change = (arr, a, b) => { [arr[a], arr[b]] = [arr[b], arr[a]] }


module.exports = {
    compare,
    change
}