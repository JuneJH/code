// 创建链表


// 遍历打印

// 获取链表长度

//通过下标获取表中的某一个数据

//通过下标设置链表中的某一个数据

// 在链表某一个节点之后加入一个新节点

// 在链表的末尾加入一个新节点

// 删除一个链表节点

// 链表逆置

/**
 * 二叉树
 */

// 创建二叉树
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
const g = new Node('g');
const g1 = new Node('1g');

a.right = c;
a.left = b;

c.left = f;
c.right = g;

b.left = d;
b.right = e;

e.left = g1;

// 前序遍历二叉树
// console.log('前序遍历');

function DLR(root) {
    if (root == null) return;
    console.log(root.value);
    DLR(root.left);
    DLR(root.right);
}

// DLR(a)

// 中序遍历二叉树

// console.log('中序遍历')

function LDR(root) {
    if (root === null) return;
    LDR(root.left);
    console.log(root.value);
    LDR(root.right);
}

// LDR(a)

// 后序遍历二叉树

// console.log('后序遍历');
function LRD(root) {
    if (root == null) return;
    LRD(root.left);
    LRD(root.right);
    console.log(root.value)
}

// LRD(a)

// 给出前序和中序还原二叉树，并写出后序遍历
const dlr = 'acfgbde'.split('');
const ldr = 'fcgadbe'.split('');

function initTree(dlr, ldr) {
    if (dlr == null || ldr == null || dlr.length == 0 || ldr.length == 0 || dlr.length != ldr.length) return;
    const root = new Node(dlr[0]);
    const rootIndex = ldr.indexOf(dlr[0]);
    const dlrLeft = dlr.slice(1, rootIndex + 1);
    const dlrRight = dlr.slice(rootIndex + 1);
    const ldrLeft = ldr.slice(0, rootIndex);
    const ldrRight = ldr.slice(rootIndex + 1);

    root.left = initTree(dlrLeft, ldrLeft);
    root.right = initTree(dlrRight, ldrRight);

    return root;
}

// const result = initTree(dlr,ldr);
// console.log(result.left)
// console.log(result.right)

// 给出中序和后序还原二叉树，并写出前序

function treeLRD(ldr, lrd) {
    if (ldr == null || lrd == null || lrd.length == 0 || ldr.length == 0 || ldr.length != lrd.length) return;
    const rootValue = lrd[lrd.length - 1];
    const root = new Node(rootValue);
    const rootIndex = ldr.indexOf(rootValue);

    const ldrLeft = ldr.slice(0, rootIndex);
    const lrdLeft = lrd.slice(0, rootIndex);
    root.left = treeLRD(ldrLeft, lrdLeft);

    const ldrRight = ldr.slice(rootIndex + 1);
    const lrdRight = lrd.slice(rootIndex, lrd.length - 1);
    root.right = treeLRD(ldrRight, lrdRight);

    return root;
}

const tree = treeLRD(ldr, 'fgcdeba'.split(''));

//二叉树的深度搜索

function deepSearch(root, target) {
    if (root == null) return false;
    console.log(root.value)

    if (root.value == target) return true;
    return deepSearch(root.left, target) || deepSearch(root.right, target);
}

// console.log(deepSearch(tree,'d'))

//二叉树的广度搜索

function gdSearch(rootList, target) {
    if (rootList == null || rootList.length == 0) return false;
    const children = [];
    for (let i = 0; i < rootList.length; i++) {
        console.log(rootList[i].value)
        if (rootList[i].value == target) {
            return true
        } else {
            rootList[i].left && children.push(rootList[i].left);
            rootList[i].right && children.push(rootList[i].right);
        }
    }
    return gdSearch(children, target);
}

// console.log(gdSearch([tree],'x'))



// 二叉树的比较

function compareTree(root1, root2) {
    if (root1 == root2) return true;
    if (root1 == null && root2 != null || root1 != null && root2 == null) return false;
    if (root1.value != root2.value) return false;

    return compareTree(root1.left, root2.left) && compareTree(root1.right, root2.right);
}
// console.log(compareTree(a,tree))

// 二叉树交互比较
function changeCompare(root1, root2) {
    if (root1 == root2) return true;
    if (root1 == null && root2 != null || root1 !== null && root2 == null) return false;
    if (root1.value !== root2.value) return false;
    return changeCompare(root1.left, root2.left) && changeCompare(root1.right, root2.right)
        || changeCompare(root1.left, root2.right) && changeCompare(root1.right, root2.left);
}

// console.log(changeCompare(a,tree))

// 二叉树的diff
function diffTree(root1, root2, info = []) {
    if (root1 == root2) return;
    if (root1 == null && root2 !== null) {
        info.push({
            type: '新增',
            originNode: null,
            newNode: root2
        })
    } else if (root1 !== null && root2 == null) {
        info.push({
            type: '删除',
            originNode: root1,
            newNode: null
        })
    } else if (root1.value != root2.value) {
        info.push({
            type: '修改',
            originNode: root1,
            newNode: root2
        })
        diffTree(root1.left, root2.left, info);
        diffTree(root1.right, root2.right, info);
    } else {
        diffTree(root1.left, root2.left, info);
        diffTree(root1.right, root2.right, info);
    }
    return info;
}

const info = diffTree(a, tree);
// console.log(info)

// 定义::满二叉树，完全二叉树的定义是什么

// 图的深度搜索

// 图的广度搜索

// 最小生成树

//数组，链表，栈，队列
/**
 * 排序
 */

// 选择排序

// 冒泡排序

// 插入排序

// 快速排序
