// 创建链表
function Node(value) {
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

// 打印

function print (root) {
    if(root){
        console.log(root.value);
        print(root.next)
    }
}

print(a);

// 获取链表长度

function length(root) {
    if(root == null) return 0;
    return 1 + length(root.next);
}

console.log(length(a))

// 通过下标获取一个位置的数据

function getValue (root,index) {
    function _getValue(root,i){
        if(root == null) return false;
        if(i == index) return root.value;
        return _getValue(root.next, i + 1)
    }
    return _getValue(root,0)
}

console.log('=====通过下标得到某个位置的值======',getValue(a,3))

// 通过下标设置值

function setValue(root,index,value) {
    const newNode = new Node(value);
    function _setValue(root,i){
        if(root == null) return false;
        if(i == index) {
            newNode.next = root.next;
            root.next = newNode;
        }else{
            _setValue(root.next,++ i);
        }
    }
    _setValue(root,0)
}

setValue(a,3,'hello')
print(a)

function push(root,value) {
    if(root.next == null){
        const newRoot = new Node(value);
        root.next = newRoot;
        return true;
    }
    push(root.next,value)
}

push(a,'end')
print(a)


function remove(root,value){
    if(root == null || root.next == null) return false;
    if(root.next.value == value){
         root.next = root.next.next;
         return true;
    }
    remove(root.next,node);
}
remove(a,b);
print(a);

// 链表的逆置

function reverse(root) {
    if(root.next.next == null) {
        const temp = root.next;
        root.next.next = root;
        root.next = null;
        return temp;
    }else{
        const result = reverse(root.next);
        root.next.next = root;
        root.next = null;
        return result;
    }
}

console.log('===========reverse==========')
print(a)
const re = reverse(a);
print(re)
