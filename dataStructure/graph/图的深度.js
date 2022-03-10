// 创建一棵树

function Node(value){
    this.value = value;
    this.neighbor = [];
}

const a = new Node('a');
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')

a.neighbor.push(b,c)
b.neighbor.push(a,c,d)
c.neighbor.push(a,b,d)
d.neighbor.push(b,c,e)
e.neighbor.push(d)

function deep(root,path=[]){
    if(root == null) return;
    if(path.includes(root)) return;
    console.log(root.value);
    path.push(root)
    for(let i = 0; i < root.neighbor.length; i ++){
        deep(root.neighbor[i],path)
    }

}
// deep(a)

//  func
function deepSearch(root,target,path=[]){
    if(root == null) return false;
    if(path.includes(root)) return false;
    if(root.value == target) return true;
    path.push(root);
    let reuslt = false;
    for(let i = 0; i < root.neighbor.length; i ++){
        reuslt |= deepSearch(root.neighbor[i],target,path)
    }
    return reuslt ? true : false;
}
console.log(deepSearch(a,'c',[]))