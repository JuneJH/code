function  breadthSearch(root,target){
    if(root === null){
        return false;
    }
    if(!Array.isArray(root)){
        root = [root];
    }
    if(root.length === 0){
        return  false;
    }
    const children = [];
    for(let i = 0; i < root.length; i ++){
        const node = root[i];
        if(node.val === target){
            return  true;
        }else{
            node.left && children.push(node.left);
            node.right && children.push(node.right);
        }
    }
    return  breadthSearch(children,target);
}

module.exports = {
    breadthSearch
}