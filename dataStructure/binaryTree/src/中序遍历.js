

function ldr(root,result = []){
    if(root == null){
        return result;
    }
    ldr(root.left,result);
    result.push(root.val);
    ldr(root.right,result);
    return result;
}

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

function ldr(root,result = []){
    if(root == null){
        return result;
    }
    ldr(root.left,result);
    result.push(root.val);
    ldr(root.right,result);
    return result;
}

module.exports = {
    ldr,
    ldr4stack
}