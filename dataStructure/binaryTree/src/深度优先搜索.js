function deepSearch(root,target){
    if(root === null){
        return false;
    }
    if(root.val === target){
        return  true
    }
    return  deepSearch(root.left,target) && deepSearch(root.right,target)
}

module.exports = {
    deepSearch
}