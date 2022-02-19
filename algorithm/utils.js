/**
 * 构造一个二叉树
 * @param {*} val
 */
function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

/**
 * 构造一个图
 * @param val
 * @constructor
 */
function Graph(val){
    this.val = val;
    this.neighbor = [];
}


module.exports = {
    Node,
    Graph,
}