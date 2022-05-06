/**
 * 通过位运算请和
 * @param {*} a 
 * @param {*} b 
 * @returns a,b的和
 */
function sum(a, b) {
    if (a == 0) return b;
    if (b == 0) return a;
    let newA = a ^ b; // 未进位的加法
    let newB = (a & b) << 1; // 进位后的结果
    return sum(newA, newB);// 迭代
}



module.exports = {
    sum,
}
