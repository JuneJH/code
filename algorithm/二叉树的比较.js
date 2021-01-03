// 创建二叉树

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')
const f = new Node('f')
const g = new Node('g')

a.left = c;
a.right = b;

b.left = d;
b.right = e;

c.left = f;
c.right = g;

const a1 = new Node('a')
const b1 = new Node('b')
const c1 = new Node('c')
const d1 = new Node('d')
const e1 = new Node('e')
const f1 = new Node('f')
const g1 = new Node('g')

a1.right = c1;
a1.left = b1;

b1.left = d1;
b1.right = e1;

c1.left = f1;
c1.right = g1;

// 比较两棵树,compare
// console.log(a === a1)

function compareTree (root1,root2,info){
    if(root1 == root2) return true; // 只有当都为空的时候为true，即认为最后一个节点都找完了
    if(root1 == null && root2 != null || root2 == null && root1 != null) return false;//结构上不对等
    if(root1.value != root2.value) return false;//值不相等
    const left = compareTree(root1.left,root2.left,'left');// 调用左子树
    const right = compareTree(root1.right,root2.right,'right') // 检查右子树
    return left && right; // 任何一边不相等都不相等
}

console.log(compareTree(a,a1))

// 二叉树交互左右子树比较
function compareLeftToRight (root1,root2) {
    if(root1 == root2) return true;
    if(root1 == null && root2 != null || root1 != null && root2 == null) return false;
    if(root1.value != root2.value) return false;
    return compareLeftToRight(root1.left,root2.left) && compareLeftToRight(root1.right,root2.right) 
         ||  compareLeftToRight(root1.left,root2.right) && compareLeftToRight(root1.right,root2.left);
}

console.log(compareLeftToRight(a,a1));

// diff

function diffTree(root1,root2,diffLsit) {
    if(root1 == root2) return;
    if(root1 == null && root2 != null) {
        diffLsit.push({type:'增加',node:null,newNode:root2})
    }else if (root1 != null && root2 == null){
        diffLsit.push({type:'删除',node:root1,newNode:null})
    }else if(root1.value != root2.value){
        diffLsit.push({type:'修改',node:root1,newNode:root2});
        diffTree(root1.left,root2.left,diffLsit)  // 修改一个节点的值，要让它继续向下查找，这点与增加后删除不一样
        diffTree(root1.right,root2.right,diffLsit)
    }else{
        diffTree(root1.left,root2.left,diffLsit)
        diffTree(root1.right,root2.right,diffLsit)
    }
    return diffLsit;
}

const resultdiff = diffTree(a,a1,[]);
console.log(resultdiff)


// 前序遍历

function prevTravel(root){
    if(root == null) return;
    console.log(root.value);
    prevTravel(root.left);
    prevTravel(root.right)
}

// prevTravel(a)
// console.log('=============')
// prevTravel(a1)
