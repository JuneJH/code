function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function nodeEach (root) {
    const result = [];
    while(root != null){
       result.push(root.val);
        root = root.next;
    }
    return result;
}

module.exports = {
    ListNode,
    nodeEach
}