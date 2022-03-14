/**
 * 广度优先遍历
 * @param roots
 */
function bfs(roots){
    if(roots == null || roots.length == 0) return;
    const children = []
    for(let i = 0; i < roots.length; i ++){
        console.log(roots[i].value);
        children.push(...roots[i].children)
    }
    bfs(children)
}

/**
 * 广度优先查找
 * @param roots
 * @param target
 * @returns {boolean|boolean|*}
 */
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

module.exports = {
    bfs,
    bfSearch
}