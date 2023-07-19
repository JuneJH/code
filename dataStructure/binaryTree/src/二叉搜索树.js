const {Node  ,getTreeDeep} = require("./utils");

/**
 * 构建一颗二叉搜索树
 * @param arr 目标数组
 * @returns {Node|boolean}
 */
function createSearchBinaryTree(arr) {
    if (arr == null || arr.length == 0) return false;
    const root = new Node(arr[0]);
    for (let i = 0; i < arr.length; i++) {
        addNode(root, arr[i])
    }
    return root
}

/**
 * 递归添加节点
 * @param root
 * @param val
 */
function  addNode(root,val){
    if(root === null){
        return;
    }
    if(root.val === val){
        return;
    }
    if(root.val < val){
        root.right ? addNode(root.right,val) : (root.right = new Node(val));
    }else{
        root.left ? addNode(root.left,val) : (root.left = new Node(val));
    }
}

/**
 * 在二叉搜索树中查找
 * @param root
 * @param target
 * @returns {boolean|boolean|*}
 */
function findBySearchBinaryTree(root, target) {
    if (root == null) return false;
    if (root.val == target) return true;
    if (root.val > target) {
        return findBySearchBinaryTree(root.left, target);
    } else {
        return findBySearchBinaryTree(root.right, target);
    }
}

/**
 * 判断是否为平衡二叉树
 * @param root
 * @returns {*|boolean}
 */
function isBalanceTree(root) {
    if (root == null) return true;
    const isLeft = isBalanceTree(root.left);
    const isRight = isBalanceTree(root.right);
    const leftDeep = getTreeDeep(root.left);
    const rightDeep = getTreeDeep(root.right);
    if (Math.abs(leftDeep - rightDeep) > 1) {
        return false;
    } else {

        return isLeft && isRight
    }
}
/**
 * 右旋
 * @param root
 * @returns {*}
 */
function rightRotate(root) {
    const newRoot = root.left;
    const changeNode = newRoot.right;
    root.left = changeNode;
    newRoot.right = root;
    return newRoot;
}

/**
 * 左旋
 * @param root
 * @returns {*}
 */
function leftRotate(root) {
    const newRoot = root.right;
    const changeNode = newRoot.left;
    root.right = changeNode;
    newRoot.left = root;
    return newRoot;
}
/**
 * 不能处理变化分支是唯一最深的分支，也不能一样最深分支
 * @param root
 * @returns {*}
 */
function sigleChange(root) {
    if (root == null) return;
    if (isBalanceTree(root)) return root;
    // 后序遍历
    root.left && (root.left = sigleChange(root.left));
    root.right && (root.right = sigleChange(root.right));
    const leftDeep = getTreeDeep(root.left);
    const rightDeep = getTreeDeep(root.right);
    if (Math.abs(leftDeep - rightDeep) <= 1) {
        return root;
    } else {
        if (leftDeep > rightDeep) {
            // 右旋
            return rightRotate(root)
        } else {
            // 左旋
            return leftRotate(root)
        }
    }
}
/**
 * 左右单旋,右左单旋
 * @param root
 * @returns {*}
 */
function doubleChange(root) {
    if (root == null) return;
    if (isBalance(root)) return root;
    root.left && (root.left = doubleChange(root.left));
    root.right && (root.right = doubleChange(root.right));
    const leftDeep = treeDeep(root.left);
    const rightDeep = treeDeep(root.right);
    if (Math.abs(leftDeep - rightDeep) <= 1) {
        return root;
    } else {
        if (leftDeep > rightDeep) {
            const leftDeep = treeDeep(root.left.left)
            const rightDeep = treeDeep(root.left.right)
            if (leftDeep < rightDeep) {
                root.left = leftRotate(root.left)
            }
            return rightRotate(root)
        } else {
            const leftDeep = treeDeep(root.right.left)
            const rightDeep = treeDeep(root.right.right)
            if (leftDeep > rightDeep) {
                root.right = rightRotate(root.right)
            }
            return leftRotate(root)
        }
    }
}
/**
 * 左右双旋
 * @param root
 * @returns {*}
 */
function finalChange(root) {
    if (root == null) return;
    if (isBalance(root)) return root;
    root.left && (root.left = finalChange(root.left));
    root.right && (root.right = finalChange(root.right));
    const leftDeep = treeDeep(root.left);
    const rightDeep = treeDeep(root.right);
    if (Math.abs(leftDeep - rightDeep) <= 1) {
        return root;
    } else {
        if (leftDeep > rightDeep) {
            const leftDeep = treeDeep(root.left.left)
            const rightDeep = treeDeep(root.left.right)
            if (leftDeep < rightDeep) {
                root.left = leftRotate(root.left)
            }
            const newRoot =  rightRotate(root);
            newRoot.right = finalChange(newRoot.right);
            return finalChange(newRoot)
        } else {
            const leftDeep = treeDeep(root.right.left)
            const rightDeep = treeDeep(root.right.right)
            if (leftDeep > rightDeep) {
                root.right = rightRotate(root.right)
            }
            const newRoot = leftRotate(root)
            newRoot.left = finalChange(newRoot.left);
            return finalChange(newRoot)
        }
    }
}

module.exports = {
    createSearchBinaryTree,
    findBySearchBinaryTree,
    isBalanceTree,
    sigleChange,
    doubleChange,
    finalChange
}




