/**
 * 【递归】中序遍历
 * @param {*} root 
 * @param {*} result 
 * @returns 
 */
function ldr(root,result = []){
    if(root == null){
        return result;
    }
    ldr(root.left,result);
    result.push(root.val);
    ldr(root.right,result);
    return result;
}
/**
 * 【队列】中序遍历
 * @param {*} root 
 * @returns 
 */
function ldr4stack(root){
    const result = [];
    if(root == null){
        return result;
    }
    const stack = new Array();
    while(root || stack.length > 0){
        while(root){
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        result.push(root.val);
        root = root.right;
    }
    return result;
}

function *ldrGenrotor(root){
    if(root === null){
        return []
    };
    yield *ldrGenrotor(root.left);
    yield root.val;
    yield *ldrGenrotor(root.right);
}

function callLdrGenrotor(root){
    return [...ldrGenrotor(root)];
}

module.exports = {
    ldr,
    ldr4stack,
    callLdrGenrotor
}