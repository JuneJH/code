// 创建二叉树
function Node (value) {
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

a.left = c;
a.right = b;

c.left = f;
c.right = g;

b.left = d;
b.right = e;


// 前序遍历
function preTravel (root,info){
    if(root == null) return;
    console.log(root.value,info);
    preTravel(root.left,'left')
    preTravel(root.right,'right')
}

preTravel(a,'root')

console.log('中序遍历')

// 中序遍历

function middleTravel (root,info) {
    if( root == null ) return;
    middleTravel(root.left,'left');
    console.log(root.value,info);
    middleTravel(root.right,'right');
} 
middleTravel(a,'root')

console.log('后续遍历')

// 后续遍历

function afterTravel ( root ) {
    if( root == null ) return;
    afterTravel(root.left)
    afterTravel(root.right);
    console.log(root.value);
}

afterTravel(a)