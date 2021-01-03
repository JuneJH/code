// diff

// 构建两颗不一样的树
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

const a1 = new Node('a');
const b1 = new Node('b');
const c1 = new Node('c1');
const d1 = new Node('d');
const e1 = new Node('e');
const f1 = new Node('f');
const g1 = new Node('g1');

a.left = b;
a.right = c;

b.left = d;
b.right = e;

c.left = f1;
c.right = g;

a1.left = b1;
a1.right = c1;

b1.left = d1;
b1.right = e1;

c1.left = f1;
c1.right = g1;

function diff(root1,root2,info=[]){
    if(root1 == root2) return true;
    if(root1 != null && root2 == null){
        info.push({
            type:'删除',
            origin:root1,
            nowNode:null
        })
    }else if(root1 == null && root2 != null){
        info.push({
            type:'新增',
            origin:null,
            newNode:root2
        })

    }else if(root1.value != root2.value){
        info.push({
            type:'修改',
            origin:root1,
            nowNode:root2
        })
        diff(root1.left,root2.left,info);
        diff(root1.right,root2.right,info)
    }else{
        diff(root1.left,root2.left,info);
        diff(root1.right,root2.right,info)

    }
    return info;
}

const result = diff(a,a1,[]);
console.log(result)

