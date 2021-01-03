// 创建二叉树
function Node ( value ) {
    this.value = value;
    this.left = null;
    this.right = null;
}
const a = new Node( 'a' );
const b = new Node( 'b' );
const c = new Node( 'c' );
const d = new Node( 'd' );
const e = new Node( 'e' );
const f = new Node( 'f' );
const g = new Node( 'g' );

a.left = c;
a.right = b;

c.left = f;
c.right = g;

b.left = d;
b.right = e;

// 深度优先搜索

function deepSearch(root,target) {
    if(root == null ) return false;
    console.log(root.value)
    if(root.value == target) return true;
    const left = deepSearch(root.left,target);
    const right = deepSearch(root.right,target);
    return left || right;
}

console.log(deepSearch(a,'e'))

console.log('===========================================')

// 广度优先搜索
function fn(rootList,target) {
    if(rootList == null || rootList.length == 0) return false;
    const childList = [];
    for(let i = 0; i < rootList.length; i ++) {
        console.log(rootList[i].value)
        if(rootList[i] != null && rootList[i].value == target){
            return true;
        }else if(rootList[i] != null){
            childList.push(rootList[i].left);
            childList.push(rootList[i].right)
        }
    }
    return fn(childList,target);
}

console.log(fn([a],'e'))


