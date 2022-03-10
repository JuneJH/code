// func
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


function bfs(roots,target,path=[]){
    if(roots == null || roots.length == 0) return false;
    const list = [];
    for(let i = 0; i < roots.length; i ++){
        if(path.includes(roots[i])) continue;
        path.push(roots[i])
        if(roots[i].value == target) {
            return true
        }else{
            list.push(...roots[i].neighbor)
        }
    }
    return bfs(list,target,path)
}

console.log(bfs([a],'x'))