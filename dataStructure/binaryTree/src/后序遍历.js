function lrd(root,result = []){
    if(root === null){
        return ;
    }

    lrd(root.left,result);
    lrd(root.right,result);
    result.push(root.val);
    return result;
}
module.exports = {
    lrd
}