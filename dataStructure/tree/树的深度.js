// 创建一棵树

function Node(value){
    this.value = value;
    this.children = []
}
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
const g = new Node('g');

a.children.push(b,c,d);

b.children.push(e,g)

e.children.push(f)

// 深度遍历

function deep (root) {
    if(root == null) return;
    console.log(root.value);
    for(let i = 0; i < root.children.length; i ++){
        deep(root.children[i])
    }
}
// deep(a)

// 深度搜索

function deepSearch(root,target){
    if(root == null || target == null) return false;
    if(root.value == target) return true;
    let result = false;
    for(let i = 0; i < root.children.length; i ++){
        result |= deepSearch(root.children[i],target);
    }
    return result ? true : false;
}

console.log(deepSearch(a,'d'))