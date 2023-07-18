function lrd(root, result = []) {
    if (root === null) {
        return;
    }

    lrd(root.left, result);
    lrd(root.right, result);
    result.push(root.val);
    return result;
}

function lrd4Stack(root) {
    if (root == null) {
        return;
    }
    const result = [];
    const nodes = [];
    let lastNode = null;

    while (root || nodes.length > 0) {
        while (root) {
            nodes.push(root);
            root = root.left;
        }
        const node = nodes.pop();
        if (node.right && node.right !== lastNode) {
            nodes.push(node);
            root = node.right;
        } else {
            result.push(node.val);
            lastNode = node;
        }

    }

    return result;
}

module.exports = {
    lrd,
    lrd4Stack
}