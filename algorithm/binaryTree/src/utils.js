/**
 * 构造一个二叉树
 * @param {*} value 
 */
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
/**
 * 得到树的深度
 * @param {*} root 
 * @returns 
 */
function getTreeDeep(root) {
    if (root == null) return 0;
    return Math.max(getTreeDeep(root.left), getTreeDeep(root.right)) + 1;
}

module.exports = {
    Node,
    getTreeDeep
}