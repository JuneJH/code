

function deep(root,path=[]){
    if(root == null) return;
    if(path.includes(root)) return;
    console.log(root.value);
    path.push(root)
    for(let i = 0; i < root.neighbor.length; i ++){
        deep(root.neighbor[i],path)
    }
}

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

module.exports =  {
    deepSearch
}