const {Node} = require("../src/utils")

/**
 * 根据前序中序还原二叉树并写出后序
 * @param {*} pre 前序遍历
 * @param {*} mid 中序遍历
 */
function reductionTree4preAndMid(pre,mid){
    if(pre === null || mid === null || pre.length === 0 || mid.length === 0) return null;
    const root = new Node(pre[0]);
    const index = mid.indexOf(pre[0]);
    const preLeftTree = pre.slice(1,index + 1);
    const preRightTree = pre.slice(index + 1);
    const midLeftTree = mid.slice(0,index);
    const midRightTree = mid.slice(index + 1);
    root.left = reductionTree4preAndMid(preLeftTree,midLeftTree);
    root.right = reductionTree4preAndMid(preRightTree,midRightTree);
    return  root;
}

/**
 * 根据中序后序还原二叉树并写出前序
 * @param {*} mid 
 * @param {*} after 
 */
function reductionTree4MidAndAfter(mid,after){
    if(mid === null || after === null || mid.length === 0 || after.length === 0){
        return null
    }
    const head = after[after.length - 1];
    const root = new Node(head);
    const index = mid.indexOf(head);
    const midLeftTree = mid.slice(0,index);
    const midRightTree = mid.slice(index + 1);
    const afterLeftTree = after.slice(0,index);
    const afterRightTree = after.slice(index,after.length - 1);
    root.left = reductionTree4MidAndAfter(midLeftTree,afterLeftTree);
    root.right = reductionTree4MidAndAfter(midRightTree,afterRightTree);
    return  root;
}



module.exports = {
    reductionTree4preAndMid,
    reductionTree4MidAndAfter
}

