// 给出前序遍历和中序遍历还原二叉树，并且写出后序遍历。

// 已知前序遍历
 const prev = ['a','c','f','g','b','d','e'];
 const middle = ['f','c','g','a','d','b','e'];

 function Node ( value ) {
     this.value = value;
     this.left = null;
      this.right = null;
 }

 function fn1 ( prev, middle ) {
     if(prev == null || middle == null || prev.length == 0 || middle.length == 0 || prev.length != middle.length) return null;
    //  得到根节点，根据前序遍历
    const root = new Node(prev[0]);
    //  根据根节点，通过中序遍历找到左子树右子树
    const index = middle.findIndex(ele => ele == prev[0]);
    // 得到左子树
    const prevLeft = prev.slice(1,index + 1);
    const prevRight = prev.slice(index + 1);
    const middleLeft = middle.slice(0,index);
    const middleRight = middle.slice(index + 1);
    root.left = fn1(prevLeft,middleLeft)
    root.right = fn1(prevRight,middleRight)
    return root;
 }

 const root = fn1(prev,middle);
 console.log(root.left)
 console.log(root.right)

 console.log('=================')

//  根据中序和后序还原二叉树
const after = ['f','g','c','d','e','b','a']

function fn2 ( middle,after ) {
    if(middle == null || after == null || middle.length == 0 || after.length == 0 || middle.length != after.length) return null;
    // 通过后序遍历得到根节点
    const root = new Node(after[after.length - 1]);
    // 同样的得到左子树右子树
    const index = middle.indexOf(after[after.length - 1]);
    const middleLeft = middle.slice(0,index);
    const middleRight = middle.slice(index + 1);
    const afterLeft = after.slice(0,index);
    const afterRight = after.slice(index,after.length - 1 );
    root.left = fn2(middleLeft,afterLeft);
    root.right = fn2(middleRight,afterRight);
    return root;
}

const root1 = fn2(middle,after);
console.log(root1.left)
console.log(root1.right)
