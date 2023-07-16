/**
 * 先序遍历
 * @param {*} root 
 * @param {*} result 
 * @returns 
 */
function preOrder(root, result = []) {
    if (root === null) {
        return result;
    }
    result.push(root.val);
    preOrder(root.left, result);
    preOrder(root.right, result);
    return result;
}
/**
 * 先序遍历迭代版
 * @param {*} root 
 * @returns 
 */
function preOrder4Stack(root) {
    const result = [];
    if (root == null) {
        return result;
    }
    const stack = new Array();
    stack.push(root);
    while (stack.length > 0) {
        const currentRoot = stack.pop();
        result.push(currentRoot.val);
        currentRoot.right && stack.push(currentRoot.right);
        currentRoot.left && stack.push(currentRoot.left);
    }
    return result;
}

/**
 * 惰性遍历，利用生成器函数进行节省
 * @param {*} root 
 * @returns 
 */
function* preOrderGenerator(root) {
    if (root === null) {
        return;
    }
    yield root.val;
    yield* preOrderGenerator(root.left);
    yield* preOrderGenerator(root.right);
}

function preOrderGeneratorCall(root) {
    // 扩展运算符调用生成器函数
    return [...preOrderGenerator(root)];

    let g = preOrderGenerator(root);
    const res = [];
    let ite = null
    while(!(ite = g.next()).done){
        res.push(ite.value);
    }

    return res;
}

module.exports = {
    preOrder,
    preOrder4Stack,
    preOrderGeneratorCall
}