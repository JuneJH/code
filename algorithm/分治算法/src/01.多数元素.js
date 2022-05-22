// 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。

//  

// 示例 1：

// 输入：nums = [3,2,3]
// 输出：3
// 示例 2：

// 输入：nums = [2,2,1,1,1,2,2]
// 输出：2
//  

// 提示：
// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/majority-element

/** 分治求解
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
    return _majorityElement(nums,0,nums.length - 1);
};

function _majorityElement(nums,start,end) {

    if(start == end){
        return nums[start];
    }
    // 把数组从中间一分为2
    const mid = Math.floor((end - start) / 2) + start;
    const left = _majorityElement(nums,start,mid);
    const right = _majorityElement(nums,mid + 1,end);
    // 如果两边的多数元素一样
    if(left == right){
        return left;
    }
    // 如果两边多数元素不一样则返回大的那个
    const leftCount = count(nums,left,start,mid);
    const rightCount = count(nums,right,mid + 1,end);
    return leftCount > rightCount ? left : right;

};

function count(nums,target,start,end){
    let count = 0;
    for(let i = start; i <= end; i ++){
        if(nums[i] == target){
            count ++;
        }
    }
    return count;
}

module.exports = {
    majorityElement
}