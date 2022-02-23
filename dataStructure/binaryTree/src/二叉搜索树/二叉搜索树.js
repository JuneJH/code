const {Node} = require("../utils");

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

module.exports = {
    createSearchBinaryTree,
    findBySearchBinaryTree
}
// // 判断是否为平衡二叉树
// function isBalance(root) {
//     if (root == null) return true;
//     // 返回树的深度
//     function treeDeep(root) {
//         if (root == null) return 0;
//         return Math.max(treeDeep(root.left), treeDeep(root.right)) + 1;
//     }
//     const isLeft = isBalance(root.left);
//     const isRight = isBalance(root.right);
//     const leftDeep = treeDeep(root.left);
//     const rightDeep = treeDeep(root.right);
//     if (Math.abs(leftDeep - rightDeep) > 1) {
//         return false;
//     } else {
//
//         return isLeft && isRight
//     }
// }
// // 返回树的深度
// function treeDeep(root) {
//     if (root == null) return 0;
//     return Math.max(treeDeep(root.left), treeDeep(root.right)) + 1;
// }
//
// // 简单转换平衡二叉树，单旋
// //不能处理变化分支是唯一最深的分支，也不能一样最深分支
//
// function sigleChange(root) {
//     if (root == null) return;
//     if (isBalance(root)) return root;
//     root.left && (root.left = sigleChange(root.left));
//     root.right && (root.right = sigleChange(root.right));
//     const leftDeep = treeDeep(root.left);
//     const rightDeep = treeDeep(root.right);
//     if (Math.abs(leftDeep - rightDeep) <= 1) {
//         return root;
//     } else {
//         if (leftDeep > rightDeep) {
//             return rightRotate(root)
//         } else {
//             return leftRotate(root)
//         }
//     }
//     function rightRotate(root) {
//         const newRoot = root.left;
//         const changeNode = newRoot.right;
//         root.left = changeNode;
//         newRoot.right = root;
//         return newRoot;
//
//     }
//     function leftRotate(root) {
//         const newRoot = root.right;
//         const changeNode = newRoot.left;
//         root.right = changeNode;
//         newRoot.left = root;
//         return newRoot;
//     }
// }
//
// // 升级单旋，左右单旋，右左单旋
//
// function doubleChange(root) {
//     if (root == null) return;
//     if (isBalance(root)) return root;
//     root.left && (root.left = doubleChange(root.left));
//     root.right && (root.right = doubleChange(root.right));
//     const leftDeep = treeDeep(root.left);
//     const rightDeep = treeDeep(root.right);
//     if (Math.abs(leftDeep - rightDeep) <= 1) {
//         return root;
//     } else {
//         if (leftDeep > rightDeep) {
//             const leftDeep = treeDeep(root.left.left)
//             const rightDeep = treeDeep(root.left.right)
//             if (leftDeep < rightDeep) {
//                 console.log('======')
//                 root.left = leftRotate(root.left)
//             }
//             return rightRotate(root)
//         } else {
//             const leftDeep = treeDeep(root.right.left)
//             const rightDeep = treeDeep(root.right.right)
//             if (leftDeep > rightDeep) {
//                 root.right = rightRotate(root.right)
//             }
//             return leftRotate(root)
//         }
//     }
//     function rightRotate(root) {
//         const newRoot = root.left;
//         const changeNode = newRoot.right;
//         root.left = changeNode;
//         newRoot.right = root;
//         return newRoot;
//
//     }
//     function leftRotate(root) {
//         const newRoot = root.right;
//         const changeNode = newRoot.left;
//         root.right = changeNode;
//         newRoot.left = root;
//         return newRoot;
//     }
// }
// // 最总版平衡树
// // 左左，右右
// function finalChange(root) {
//     if (root == null) return;
//     if (isBalance(root)) return root;
//     root.left && (root.left = finalChange(root.left));
//     root.right && (root.right = finalChange(root.right));
//     const leftDeep = treeDeep(root.left);
//     const rightDeep = treeDeep(root.right);
//     if (Math.abs(leftDeep - rightDeep) <= 1) {
//         return root;
//     } else {
//         if (leftDeep > rightDeep) {
//             const leftDeep = treeDeep(root.left.left)
//             const rightDeep = treeDeep(root.left.right)
//             if (leftDeep < rightDeep) {
//                 root.left = leftRotate(root.left)
//             }
//             const newRoot =  rightRotate(root);
//             newRoot.right = finalChange(newRoot.right);
//             return finalChange(newRoot)
//         } else {
//             const leftDeep = treeDeep(root.right.left)
//             const rightDeep = treeDeep(root.right.right)
//             if (leftDeep > rightDeep) {
//                 root.right = rightRotate(root.right)
//             }
//             const newRoot = leftRotate(root)
//             newRoot.left = finalChange(newRoot.left);
//             return finalChange(newRoot)
//         }
//     }
//     // 右旋
//     function rightRotate(root) {
//         const newRoot = root.left;
//         const changeNode = newRoot.right;
//         root.left = changeNode;
//         newRoot.right = root;
//         return newRoot;
//
//     }
//     function leftRotate(root) {
//         const newRoot = root.right;
//         const changeNode = newRoot.left;
//         root.right = changeNode;
//         newRoot.left = root;
//         return newRoot;
//     }
// }

//
// const a = new Node('a')
// const b = new Node('b')
// const c = new Node('c')
// const d = new Node('d')
// const e = new Node('e')
// const f = new Node('f')
// const g = new Node('g')
// // a.left = b;
// a.right = c;
// c.left = g;
// b.left = d;
// b.right = e
// d.left = f;
// f.left = g

// 生成变化分支为唯一深度
// a.left = b;
// b.left = c;
// b.right = d;
// d.left = e

// 右左单旋
// a.right = b;
// b.left = c;
// b.right = d;
// c.left = e

// 生成变化分支的深度与最高深度相等

// a.left = b;
// b.right = e;
// e.left = f;
// b.left = c;
// c.left = d

// console.log('isBalance', isBalance(a))
// const newa = sigleChange(a)
// console.log('isBalance', isBalance(newa))

// const twoa = doubleChange(a);

// console.log('isBalance', isBalance(twoa))

// const finala = finalChange(twoa);
// // console.log(treeDeep(finala))

// console.log('isBalance', isBalance(finala))






//=======================调用函数区域==========================================

//生成二叉搜索树
// const root = createTree(arr);
// // 包装为平衡二叉树
// const balanceRoot = finalChange(root)
// console.log(balanceRoot.value)
// const rootvalue = balanceRoot.value
// console.log(findBySearchBinaryTree(balanceRoot,rootvalue),treeSum)
// // // 调用搜索函数
// const resultarr = searchArr(arr,1000)
// console.log(resultarr.isSerach,resultarr.count)
// // 调用搜素树函数
// console.log(searchTree(balanceRoot,1000),treeSum)




// ==============================================================================





