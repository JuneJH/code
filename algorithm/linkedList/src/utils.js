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

function nodeReverse(root) {
    if(root.next.next == null){
        root.next.next = root;
        return root.next;
    }else{
        const result = nodeReverse(root.next)
        root.next.next = root;
        root.next = null;
        return result;
    }
}

function nodeLength (root) {
    let len = 0;
    while(root !== null) {
        len ++;
        root = root.next;
    }
    return len;
}

/**
 * 通过下标获取一个位置的数据
 * @param {*} root 
 * @param {*} index 
 * @returns 
 */
function getValueIndex (root,index){
    let len = 0;
    while(root != null){
        if(len == index){
            return root.val;
        }
        len ++;
        root = root.next;
    }
}


module.exports = {
    ListNode,
    nodeEach,
    nodeReverse,
    nodeLength,
    getValueIndex
}