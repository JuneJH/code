/**
 * 深度优先遍历
 * @param root
 */
function deep (root) {
    if(root == null) return;
    console.log(root.value);
    for(let i = 0; i < root.children.length; i ++){
        deep(root.children[i])
    }
}

/**
 * 深度优先查找
 * @param root
 * @param target
 * @returns {boolean|boolean}
 */
function deepSearch(root,target){
    if(root == null || target == null) return false;
    if(root.value == target) return true;
    let result = false;
    for(let i = 0; i < root.children.length; i ++){
        result |= deepSearch(root.children[i],target);
    }
    return result ? true : false;
}

module.exports = {
    deep,
    deepSearch
}
