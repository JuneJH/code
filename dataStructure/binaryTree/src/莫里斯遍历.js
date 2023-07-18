

function morrisInOrderTraversal(root) {
    const result = [];
    let currentNode = root;

    while (currentNode) {
        if (!currentNode.left) {
            // 如果当前节点没有左子树，则将当前节点值加入结果数组，然后转向右子树
            result.push(currentNode.val);
            currentNode = currentNode.right;
        } else {
            // 如果当前节点有左子树
            let preNode = currentNode.left;

            // 找到当前节点的左子树的最右节点（即当前节点在中序遍历中的前驱节点）
            while (preNode.right && preNode.right !== currentNode) {
                preNode = preNode.right;
            }

            if (!preNode.right) {
                // 如果前驱节点的右指针为空，将其指向当前节点
                preNode.right = currentNode;
                currentNode = currentNode.left;
            } else {
                // 如果前驱节点的右指针指向当前节点，表示当前节点的左子树已经遍历完了
                // 将前驱节点的右指针恢复为空，将当前节点值加入结果数组，然后转向右子树
                preNode.right = null;
                result.push(currentNode.val);
                currentNode = currentNode.right;
            }
        }
    }

    return result;
}


module.exports = {
    morrisInOrderTraversal
}