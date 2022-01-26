const {getLen} = require("../utils")
// 由高往下看,都可以通过前序，后序遍历。性能上前序由于后序，次数少
function isTree(root){
    if(root == null) return  true;
    const leftLen = getLen(root.left);
    const rightLen = getLen(root.right);
    if(Math.abs(leftLen - rightLen) > 1){
        return false;
    }else{
        return isTree(root.left) && isTree(root.right)
    }
}
module.exports = {
    isTree
}