// 定义： 根节点的左子树与右子树的深度差不能超过1；
//        这个树的二叉树的每一个子树都符合上述条件

// 构建一个树
 
function Node(value){
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
const h = new Node('h');
const j = new Node('j');

a.left = b;
// a.right = c;

b.left = d;
b.right = e;

// d.left = h;
e.left = j;

c.left = f;
c.right = g;

const node2 = new Node('2');
const node5 = new Node('5');
const node3 = new Node('3');
const node6 = new Node('6');

node2.right = node5;
node5.left = node3;
node5.right = node6;

// 判断是否为平衡二叉树
   
function getLen(root){
    if(root == null) return 0;
    const leftLen = getLen(root.left);
    const rightLen = getLen(root.right);
    return Math.max(leftLen,rightLen) + 1;
}
// 由高往下看,都可以通过前序，后序遍历。性能上前序由于后序，次数少
function isTree(root){
    if(root == null) return  true;
    const leftLen = getLen(root.left);
    const rightLen = getLen(root.right);
    if(Math.abs(leftLen - rightLen) > 1){
        return false;
    }else{
        return isTree(root.left) && isTree(root.right)
    }
}

// 单旋
function leftRotate(root) {
    const newRoot = root.right;
    const change = newRoot.left;
    root.right = change;
    newRoot.left = root;
    return newRoot;

}
function rightRotate(root) {
    const newRoot = root.left;
    const change = newRoot.left;
    root.left = change;
    newRoot.right = root;
    return newRoot;

}
// 后序遍历
function change(root){
    if(isTree(root)) return root;
    root.left && (root.left = change(root.left));
    root.right && (root.right = change(root.right));
    const leftLen = getLen(root.left);
    const rightLen = getLen(root.right);
    if(Math.abs(leftLen - rightLen) < 2){
        return root; //！！！！！！！！！！！！！！！！！！！！！！
    }else{
        if(leftLen < rightLen){
            const ll = getLen(root.left);
            const rl = getLen(root.right);
            if(rl > ll){
                root.left = RightRotate(root.left)
            }
            return leftRotate(root)
        }else{
            const ll = getLen(root.left);
            const rl = getLen(root.right);
            if(rl < ll ){
                // root.right = leftRotate(root.right)
            }
            return rightRotate(root)
        }
    }
}

console.log('是否为平衡二叉树',isTree(a))
const result = change(a);
// console.log(result)
console.log('是否为平衡二叉树',isTree(result))



