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

module.exports = {
    bfs
}