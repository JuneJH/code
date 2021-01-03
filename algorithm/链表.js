// 构建一个链表
function Node (value) {
    this.value = value;
    this.next = null;
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// 遍历链表

function nodeEach (root) {
    while(root != null){
        console.log(root.value);
        root = root.next;
    }
}

nodeEach(a)
console.log('======获取链表长度==========')

// 获取链表长度

function nodeLength (root) {
    let len = 0;
    while(root != null) {
        len ++;
        root = root.next;
    }
    return len;
}

// console.log(nodeLength(a));
console.log('======通过下标获取值====')

// 通过下标获取一个位置的数据

function getValueIndex (root,index){
    let len = 0;
    while(root != null){
        if(len == index){
            return root.value;
        }
        len ++;
        root = root.next;
    }
    return void 0;
}
// console.log(getValueIndex(a,1));
console.log('=====通过下标设置==========')

// 通过下标设置值
 
function setValue (root,index,value) {
    let len = 0;
    if(root == null){
        root = new Node(value);
        return root;
    }
    while(root != null){
        if(len == index){
            root.value = value;
            return value;
        }
        if(root.next == null){
            console.log(len)
            root.next = new Node(null);
        }
            root = root.next;
            len ++;
    }
}

// console.log(setValue(a,5,'up'))
// console.log('=====遍历======')
// nodeEach(a);
console.log('===在某一结点后加入新的节点=====')

//在某一结点后加入新的节点

function nodeSplit(root,index,value){
    let len = 0;
    while(root != null){
        if(len == index){
            const newRoot = new Node(value);
            newRoot.next = root.next;
            root.next = newRoot;
            return newRoot.value;
        }
        root = root.next;
        len ++;
    }
}

// console.log(nodeSplit(a,3,6));
// nodeEach(a)

// 在末尾添加
console.log('=====push======');

function nodePush (root,value) {
     while(root != null){
         if(root.next == null){
             const newRoot = new Node(value);
             root.next = newRoot;
             return newRoot;
         }
         root = root.next;
     }
}

nodePush(a,'push1')
nodePush(a,'push2')
nodePush(a,'push3')
nodeEach(a)

// 删除一个节点

function removeNode(root,index) {
    let len = 0;
    while(root != null) {
        if(len == index - 1) {
            root.next = root.next.next;
            return true
        }
        len ++;
        root = root.next;
    }
    return false;
}

// removeNode(a,0);
// nodeEach(a);

// 链表逆置
console.log('========逆置========')

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
const result = nodeReverse(a);
nodeEach(result)
