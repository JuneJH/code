# 树

> 树是n(n>0)个结点的优先集T

1. 结点：树的元素，包括数据项+若干指向其子树的分支
2. 结点的度：结点拥有的子树的数目
3. 叶子：度为0的结点
4. 结点的层次：从根结点算起，根为第一层，其孩子为第二层

## 1. 遍历：DFS

- 深度优先遍历
- 走到底再回退


## 2. 遍历：BFS


## 二叉树

> 树的度为2

## 1. 满二叉树

> 所有的叶子节点都在最底层
> 非叶子节点都有两个子节点 

## 2. 完全二叉树

> 叶子节点都在最后一层或者倒数第二层
> **国内**叶子节点都向左靠拢
> **国外**如果有叶子节点必然有两个子节点


## 3. 构建一颗树

```js
/**
 * 构造一个二叉树
 * @param {*} val
 */
function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}
```


## 4. 遍历

### 1. 先序遍历(先根次序遍历,根左右)

- 递归版
```js
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
```
- 迭代版
```js
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
```
### 2. 中序遍历(中根次序遍历,左根右)
- 递归版
  
```js
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
```
- 迭代版

```js
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
```
### 3. 后序遍历(后根次序遍历,左右根)
- 递归版
  
```js
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
```
- 迭代版

```js
function afterTraverseTree(root){
    const res = [],stack = [];
    while (root || stack.length > 0){
        while (root){
            res.push(root.val);
            stack.push(root.left);
            root = root.right;
        }
        root = stack.pop();
    }
    console.log(res)
    return res.reverse();
}
```

## 5. 求树的长度

```js
/**
 * 得到树的深度
 * @param {*} root 
 * @returns 
 */
function getTreeDeep(root) {
    if (root == null) return 0;
    return Math.max(getTreeDeep(root.left), getTreeDeep(root.right)) + 1;
}

```

## 6. 比较二叉树

```js
const isSameTree = function(p, q) {
    if(p === null && q === null){
        return true
    }
    if(p !== null && q == null || p === null && q!== null){
        return false;
    }
    if(p.val !== q.val){
        return false;
    }
    const left = isSameTree(p.left,q.left);
    const right = isSameTree(p.right,q.right);
    return left && right;
};
```

## 7. 二叉树的搜索

> 深度优先搜索: 搜索未知
> 广度优先搜索： 搜索局域

# 二叉搜索树

> 左子树比当前节点小，右子树比当前节点大


## 平衡二叉树

> 根节点的左子树和右子树高度差不能超过一
> 每个子树都符合第一条
