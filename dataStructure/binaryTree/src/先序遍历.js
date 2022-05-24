/**
 * 先序遍历
 * @param {*} root 
 * @param {*} result 
 * @returns 
 */
function preOrder(root,result=[]){
    if(root === null){
        return result;
    }
    result.push(root.val);
    preOrder(root.left,result);
    preOrder(root.right,result);
    return result;
}
function preOrder4Stack(root){
    const result = [];
    if(root == null){
        return result;
    }
    const stack = new Array();
    stack.push(root);
    while(stack.length > 0){
        const currentRoot = stack.pop();
        result.push(currentRoot.val);
        currentRoot.right && stack.push(currentRoot.right);
        currentRoot.left && stack.push(currentRoot.left);
    }
    return result;
}

module.exports = {
    preOrder,
    preOrder4Stack
}