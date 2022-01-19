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
 * 得到树的深度
 * @param {*} root 
 * @returns 
 */
function getTreeDeep(root) {
    if (root == null) return 0;
    return Math.max(getTreeDeep(root.left), getTreeDeep(root.right)) + 1;
}

/**
 * 先序遍历 【递归】
 * @param root
 * @returns {*[]}
 */
function  preTraverseTreeRecursion(root){
    const result = []
    function  _fn(root){
        if(root === null){
            return;
        }
        result.push(root.val);
        _fn(root.left);
        _fn(root.right)
    }
    _fn(root)
    return  result;
}
function  preTraverseTree(root){
   const stack = [],res = [];
   while (root || stack.length > 0){
       while (root){
           res.push(root.val)
           stack.push(root.right);
           root = root.left;
       }
       root = stack.pop();
   }
   return res;
}

/**
 * 中序遍历
 * @param root
 */
function midTraverseTreeRecursion(root){
    const res = [];
    function  _fn(root){
        if(root === null){
            return;
        }
        _fn(root.left);
        res.push(root.val);
        _fn(root.right);
    }
    _fn(root);
    return res;
}
function midTraverseTree(root){
    const res = [],stack = [];
    while (root || stack.length > 0){
        while (root){
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        res.push(root.val);
        root = root.right;
    }
    return res;
}

/**
 * 后序遍历
 * @param root
 * @returns {*[]}
 */
function afterTraverseTreeRecursion(root){
    const res = [];
    function  _fn(root){
        if(root === null){
            return;
        }
        _fn(root.left);
        _fn(root.right);
        res.push(root.val);
    }
    _fn(root);
    return res;
}
function afterTraverseTree(root){
    const res = [],stack = [];
    while (root || stack.length > 0){
        while (root){
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        res.push(root.val);

    }
}

module.exports = {
    Node,
    getTreeDeep,
    preTraverseTree,
    preTraverseTreeRecursion,
    midTraverseTreeRecursion,
    midTraverseTree,
    afterTraverseTreeRecursion
}