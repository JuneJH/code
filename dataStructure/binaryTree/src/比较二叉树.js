const isSameTree = function(p, q) {
    if(p === null && q === null){
        return true
    }
    if(p !== null && q == null || p === null && q!== null){
        return false;
    }
    if(p.val !== q.val){
        return false;
    }
    const left = isSameTree(p.left,q.left);
    const right = isSameTree(p.right,q.right);
    return left && right;
};

module.exports = {
    isSameTree,
}