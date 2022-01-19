//创建一个10000长的数组
const arr = []
for (let i = 0; i < 10000; i++) {
    arr.push(Math.floor(Math.random() * 10000))
}
// 计数
let arrSum = 0;
let rootSum = 0;

//查找数组中是否存在一个数据

function SearchValue(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        arrSum ++;
        if (arr[i] == value) {
            return true
        }
    }
    return false;
}

// 通过数组创建一个二叉搜索树

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
function createTree(arr) {
    if (arr == null || arr.length == 0) return;
    const root = new Node(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        addNode(root, arr[i]);
    }
    function addNode(root, value) {
        if (root == null) return;
        if(root.value == value) return;
        if (value > root.value) {
            if (root.right == null) {
                root.right = new Node(value);
            }else{
                addNode(root.right,value)
            }
        }else{
            if(root.left == null){
                root.left = new Node(value);
            }else{
                addNode(root.left,value)
            }
        }
    }
    return root;
}
const root = createTree(arr)

//二叉树的使用
 function SearchTree(root,value){
     rootSum ++;
     if(root == null) return false;
     if(root.value == value) return true;
     if(value > root.value){
        return SearchTree(root.right,value)
     }else{
         return SearchTree(root.left,value)
     }
 }
console.log(SearchValue(arr, 1000))
console.log(arrSum)
console.log(SearchTree(root,1000))
console.log(rootSum)

