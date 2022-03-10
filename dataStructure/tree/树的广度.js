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

b.children.push(e,g);

e.children.push(f);

// 
function bfs(roots){
    if(roots == null || roots.length == 0) return;
    const children = []
    for(let i = 0; i < roots.length; i ++){
        console.log(roots[i].value);
        children.push(...roots[i].children)
    }
    bfs(children)
}
// bfs([a])

// 

function bfSearch(roots,target){
    if(roots == null || roots.length == 0) return false;
    const children = [];
    for(let i = 0; i < roots.length; i ++){
        if(roots[i].value == target){
            return true;
        }else{
            children.push(...roots[i].children)
        }
    }
    return bfSearch(children,target)
}

console.log(bfSearch([a],'e'))