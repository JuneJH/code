// 1. myCall
Function.prototype.myCall = function () {
    let [obj, ...arg] = Array.from(arguments);
    if (!obj) {
        obj = typeof windwo == "undefined" ? global : windwo;
    }
    const func = Symbol('func');
    obj[func] = this;
    const result = obj[func](...arg);
    delete obj[func];
    return result;
}

// 2. apply
Function.prototype.myApply = function () {
    let [obj, args] = Array.from(arguments);
    if (!obj) {
        obj = typeof window === 'undefined' ? global : window;
    }
    const func = Symbol('func');
    obj[func] = this;
    const result = obj[func](...args);
    delete obj[func];
    return result;
}


// 3. bind

Function.prototype.myBind = function () {
    let [obj, ...args] = Array.from(arguments);
    if (!obj) {
        obj = typeof window === 'undefined' ? global : window;
    }
    const func = Symbol('funcName');
    const that = this;
    const temp = function () { };
    function fn(...params) {
        if (new.target) {
            obj = that
        }
        if (!obj[func]) {
            obj[func] = that;
        };
        const result = obj[func](...args, ...params);
        delete obj[func];
        return result;
    }
    temp.prototype = that.prototype;
    fn.prototype = new temp();
    return fn;
}

// 4. curry
function curry(handle, ...args) {
    if (typeof handle !== 'function') return;
    return function (...params) {
        args = args.concat(params);
        if (args.length >= handle.length) {
            return handle.call(this, ...args);
        } else {
            return curry(handle, ...args);
        }
    }
}

// 5. clone
function clone(obj) {
    if (obj instanceof Array) {
        return cloneArray(obj)
    } else if (obj instanceof Object) {
        return cloneObject(obj);
    } else {
        return obj;
    }
}
function cloneArray(arr) {
    const result = new Array(arr.length);
    arr.forEach(ele => {
        if (ele instanceof Object) {
            result.push(clone(ele))
        } else {
            result.push(ele);
        }
    })
    return result;
}
function cloneObject(obj) {
    const result = {};
    Object.getOwnPropertyNames(obj).forEach(ele => {
        if (ele instanceof Object) {
            result[ele] = clone(obj[ele])
        } else {
            result[ele] = obj[ele];
        }
    })
    return result;
}

// 6. debounce
function debounce(handle, delay) {
    let timer = null;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            handle.call(this, ...args)
        }, delay)
    }
}

// 7. trottle
function trottle(handle, wait) {
    let lastTime = 0;
    return function (...args) {
        let nowTime = + new Date();
        if (nowTime - lastTime > wait) {
            handle.call(this, ...args);
            lastTime = nowTime;
        }
    }
}

// 8. flatten
function flatten(arr, shallow, stric, output) {
    output = output || [];
    let index = output.length;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            if (shallow) {
                arr[i].forEach(ele => {
                    output[index++] = ele;
                })
            } else {
                flatten(arr[i], shallow, stric, output);
                index = output.length;
            }
        } else {
            if (!stric) {
                output[index++] = arr[i]
            }
        }
    }
    return output;
}

// 9. bubblesort
function change(arr, a, b) {
   return [arr[a], arr[b]] = [arr[b], arr[a]]
}
function compare(a, b) {
    // console.log(a,b)
    if (a > b) {
        return true
    } else {
        return false
    }
}
function bubblesort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length - i - 1; j++) {
            if (compare(arr[j], arr[j+1])) {
                change(arr, j, j+1)
            }
        }
    }
    return arr;
}

// 10. selectionsort
function selectionsort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i; j < arr.length; j++) {
            if (compare(arr[minIndex], arr[j])) {
                minIndex = j;
            }
        }
        change(arr, minIndex, i)
    }
    return arr;
}

// 11. quicksort
function quicksort(arr) {
    function _quicksort(arr, begin, end) {
        if (begin >= end - 1) return;
        let left = begin;
        let right = end;
        do {
            do left++; while (left < right && arr[left] < arr[begin]);
            do right--; while (left < right && arr[right] > arr[begin]);
            if (left < right) {
                change(arr, left, right);
            }
        } while (left < right);
        let middleIndex = left == right ? right - 1 : right;
        change(arr, middleIndex, begin);
        _quicksort(arr, begin, middleIndex);
        _quicksort(arr, middleIndex + 1, end);
    }
    _quicksort(arr, 0, arr.length)
    return arr;
}

// 12. 创建链表 createLink
function CreateLink(value) {
    this.value = value;
    this.next = null;
}
// 13. 遍历打印 traversalLink
function traversalLink(root) {
    if (!root) return;
    console.log(root.value);
    traversalLink(root.next);
}
// 14. 获取链表长度 getLinkLength
function getLinkLength(root) {
    if (root == null) return 0;
    return getLinkLength(root.next) + 1;
}
// 15. 通过下标获取表中的某一个数据  getLinkValueBySubscript
function getLinkValueBySubscript(root, subscript, index = 0) {
    if (!root) return false;
    if (index == subscript) {
        return root.value;
    } else {
        return getLinkValueBySubscript(root.next, subscript, ++index);
    }
}

// 16. 通过下标设置链表中的某一个数据 setLinkValueBySubscript

function setLinkValueBySubscript(root, value, subscript, index = 0) {
    if (!root) return;
    if (index == subscript) {
        return root.value = value;
    } else {
        return setLinkValueBySubscript(root.next, value, subscript, ++index);
    }
}



// 17. 在链表某一个节点之后加入一个新节点 addLinkValueByNode
function addLinkValueByNode(root, value, node) {
    if (!root) return;
    if (root.value == node.value) {
        const newNode = new CreateLink(value);
        newNode.next = root.next;
        root.next = newNode;
    } else {
        addLinkValueByNode(root.next, value, node)
    }
}

// 18. 在链表的末尾加入一个新节点  pushLinkNode
function pushLinkNode(root, value) {
    if (!root) return;
    if (root.next == null) {
        let newNode = new CreateLink(value);
        root.next = newNode;
        return newNode;
    } else {
        return pushLinkNode(root.next, value)
    }
}
// traversalLink(a)
// pushLinkNode(a,'b')
// traversalLink(a)


// 19. 删除一个链表节点 deleteNodeByValue
function deleteNodeByValue(root, value) {
    console.log(root,value)
    if (!root || !root.next) return true;
    if (root.next.value == value) {
        root.next = root.next.next;
       return deleteNodeByValue(root.next, value)
    } else {
        return deleteNodeByValue(root.next, value);
    }
}
// deleteNodeByValue(a,'b')
// traversalLink(a)
// 20. 链表逆置  reverseLink
function reverseLink(root) {
    if (!root) return;
    if (root.next.next == null) {
        const temp = root.next;
        temp.next = root;
        root.next = null;
        return temp;
    } else {
        let result = reverseLink(root.next);
        root.next.next = root;
        root.next = null;
        return result;
    }
}

// traversalLink(reverseLink(d))

// 21. 创建二叉树 BinaryTree
function BinaryTree(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

// 22. 前序遍历二叉树DLR
function traversalDLR(root) {
    if (!root) return;
    console.log(root.value);
    traversalDLR(root.left);
    traversalDLR(root.right);
}

// 23. 中序遍历二叉树 traversalLDR
function traversalLDR(root) {
    if (!root) return;
    traversalLDR(root.left);
    console.log(root.value);
    traversalLDR(root.right)
}
// traversalLDR(aa)
// 24. 后序遍历二叉树traversalRLD
function traversalLRD(root) {
    if (!root) return;
    traversalLRD(root.left);
    traversalLRD(root.right);
    console.log(root.value)
}
// traversalLRD(aa)
// 25. 给出前序和中序还原二叉树，并写出后序遍历  reductionTreeByDlr;


function reductionTreeByDlr(dlr, ldr) {
    if (dlr == null || dlr.length == 0 || ldr == null || ldr.length == 0 || dlr.length != ldr.length) return;
    const rootValue = dlr[0];
    const newRoot = new BinaryTree(rootValue);
    const rootPosition = ldr.indexOf(rootValue)
    const leftLdr = ldr.slice(0, rootPosition);
    const rightLdr = ldr.slice(rootPosition + 1);
    const leftDlr = dlr.slice(1, rootPosition + 1);
    const rightDlr = dlr.slice(rootPosition + 1);
    newRoot.left = reductionTreeByDlr(leftDlr, leftLdr);
    newRoot.right = reductionTreeByDlr(rightDlr, rightLdr);
    return newRoot;
}

// 26. 给出中序和后序还原二叉树，并写出前序  reductionTreeByLRD
function reductionTreeByLRD(lrd, ldr) {
    if (lrd == null || lrd.length == 0 || ldr == null || ldr.length == 0 || lrd.length != ldr.length) return;
    const rootValue = lrd[lrd.length - 1];
    const rootPosition = ldr.indexOf(rootValue);
    const newRoot = new BinaryTree(rootValue);
    const leftLrd = lrd.slice(0, rootPosition);
    const rightLrd = lrd.slice(rootPosition, lrd.length - 1);
    const leftLdr = ldr.slice(0, rootPosition);
    const rightLdr = ldr.slice(rootPosition + 1);
    newRoot.left = reductionTreeByLRD(leftLrd, leftLdr);
    newRoot.right = reductionTreeByLRD(rightLrd, rightLdr);
    return newRoot;
}
// const newRoot = reductionTreeByLRD(lrd, ldr)

// 27. 二叉树的深度搜索  deepSerchBinaryTree
function deepSerchBinaryTree(root, value) {
    if (!root) return false;
    console.log(root.value)
    if (root.value == value) {
        return true;
    } else {
        return deepSerchBinaryTree(root.left, value) || deepSerchBinaryTree(root.right, value);
    }
}



// 28. 二叉树的广度搜索  bfsBinaryTree
function bfsBinaryTree(roots, value) {
    if (roots == null || roots.length == 0) return false;
    const newList = [];
    for (let i = 0; i < roots.length; i++) {
        console.log(roots[i].value)
        if (roots[i].value == value) {
            return true;
        } else {
            roots[i].left && newList.push(roots[i].left)
            roots[i].right && newList.push(roots[i].right)
        }
    }
    return bfsBinaryTree(newList,value)
}

// 29. 二叉树的比较 compareBinaryTreeByStrict
function compareBinaryTreeByStrict(root1,root2){
    if(root1 == null && root2 != null || root1 != null && root2 == null) return false
    if( root1 == root2 )return true;
    if(root1.value == root2.value){
        return compareBinaryTreeByStrict(root1.left,root2.left) && compareBinaryTreeByStrict(root1.right,root2.right);

    }else{
        return false;
    }
}
// console.log(1,compareBinaryTreeByStrict(aa,newRoot))


// 30. 二叉树交互比较,左右树交换
function compareBinaryTree(root1,root2){
    if(root1 == null && root2 != null || root1 != null && root2 == null) return false
    if( root1 == root2 )return true;
    if(root1.value == root2.value){
        return compareBinaryTree(root1.left,root2.left) && compareBinaryTree(root1.right,root2.right) || compareBinaryTree(root1.left,root2.right) && compareBinaryTree(root1.right,root2.left);

    }else{
        return false;
    }
}


// 31. 二叉树的diff  diffByBinaryTree
function diffByBinaryTree(root1,root2,result = []){
    if(root1 == null && root2 == null) return;
    
    if(root1 == null && root2 != null){// 新增节点
        result.push({
            originNode:null,
            newNode:root2,
            handle:'增加'
        })

    }else if(root1 != null && root2 == null){//删除节点
        result.push({
            originNode:root1,
            newNode:null,
            handle:'删除'
        })

    }else if(root1.value != root2.value){// 修改节点
        result.push({
            originNode:root1,
            newNode:root2,
            handle:'修改'
        })
        diffByBinaryTree(root1.left,root2.left,result)
        diffByBinaryTree(root1.right,root2.right,result)
    }else{
        diffByBinaryTree(root1.left,root2.left,result)
        diffByBinaryTree(root1.right,root2.right,result)
    }
    return result;
}

// console.log(1,diffByBinaryTree(aa,newRoot))


// 32. prim算法
function Tree(value){
    this.value = value;
    this.neighbor = [];
}


function prim(distanceSet,pointSet,start){
    const horde = [start];
    while(true){
        const newPoint = _getMinDistance(distanceSet,pointSet,horde);
        horde.push(newPoint);
        if(horde.length == pointSet.length) break;
    }
    function _getMinDistance(distanceSet,pointSet,horde){
        const result = {
            to:null,
            from:null,
            distance:Infinity
        };
        for(let i = 0; i < horde.length; i ++){
            const nowPointPositon = pointSet.indexOf(horde[i]);
            for(let j = 0; j < distanceSet[nowPointPositon].length; j ++){
                const currDistance = distanceSet[nowPointPositon][j];
                if(!horde.includes(pointSet[j]) &&  currDistance < result.distance){
                      result.to = pointSet[j];
                      result.from = horde[i];
                      result.distance = currDistance;
                }
            }
        }

        result.from.neighbor.push(result.to)
        result.to.neighbor.push(result.from)
        return result.to
    }
    return horde;


}



// 33. 克鲁斯卡算法 kruskal

// 34. 二叉搜索树（二叉搜索树）
    //  一个有排序的树，即中序遍历的结果是一个有序的序列

// 35. 构建二叉搜索树 searchTree
function searchTree(arr){
    if(arr == null || arr.length == 0)return;
    const root = new BinaryTree(arr[0]);
    for(let i = 1; i < arr.length; i ++){
        addNode(root,arr[i])
    }
    function addNode(root,value){
        if(!root) return;
        if(root.value == value) return;
        if(root.value > value){
            if(root.left == null){
                const newNode = new BinaryTree(value);
                root.left = newNode;
            }else{
                addNode(root.left,value)
            }
        }else{
            if(root.right == null){
                const newNode = new BinaryTree(value);
                root.right = newNode;
            }else{
                addNode(root.right,value);
            }
        }
    }
    return root;
}
let arr = [1,2,3,4,5,6,7,11,1,1,111,111,111,111,111222,22,333,44,555,666,77,77,77];
for(let i = 0; i < 1000; i ++){
     arr.push(Math.floor(Math.random() * 1000));
}
// traversalLDR(searchTree1);

// 36. 使用二叉搜索树  includesBySearchTree
function includesBySearchTree(root,value){
    if(!root) return false;
    if(root.value == value) return true;
    if(root.value > value){
        return includesBySearchTree(root.left,value)
    }else{
         return includesBySearchTree(root.right,value)
    }
}
// console.log(includesBySearchTree(searchTree1,77))
// 37. 平衡二叉树
//根节点的左子树与右子树的深度不能相差超过1，
// 所有子树也必须满足上述条件

// 38. 判断是否为平衡二叉树 isBalanceTree
function getTreeDeep(root){
    if(root == null) return 0;
    let leftLen =  getTreeDeep(root.left) + 1;
    let rightLen = getTreeDeep(root.right) + 1;
    return Math.max(leftLen,rightLen);
}
function isBalanceTree(root){
    if(!root) return true;
    let leftLen = getTreeDeep(root.left);
    let rightLen = getTreeDeep(root.right);
    if(Math.abs(leftLen - rightLen) > 1){
        return false;
    }else{
        return isBalanceTree(root.left) && isBalanceTree(root.right)
    }
}


// 39. 定义满二叉树，完全二叉树

// 40. 数组，链表，栈，队列