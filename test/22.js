// 1. myCall
Function.prototype.myCall = function () {
    const [obj, ...args] = Array.from(arguments);
    if (!obj) {
        obj = typeof window == 'undefined' ? global : window;
    }
    const func = Symbol('func');
    obj[func] = this;
    const result = obj[func](...args);
    delete obj[func];
    return result;
}

// 2. myApply
Function.prototype.myApply = function () {
    const [obj, args] = Array.from(arguments);
    if (!obj) {
        obj = typeof window == 'undefined' ? global : window
    }
    const func = Symbol('func');
    obj[func] = this;
    const result = obj[func](...args);
    delete obj[func];
    return result;
}

// 3. myBind
Function.prototype.myBind = function () {
    let [obj, ...args] = Array.from(arguments);
    if (!obj) {
        obj = typeof window == 'undefined' ? global : window;
    }
    const func = Symbol('func');
    const handle = this;
    const temp = function () { };
    function fn(...params) {
        if (new.target) {
            obj = this;
        }
        if (!obj[func]) {
            obj[func] = handle;
        }
        const result = obj[func](...args, ...params);
        delete obj[func];
        return result;
    }
    temp.prototype = handle.prototype;
    fn.prototype = new temp;
    return fn;
}

// 4. curry
function curry(handle, ...args) {
    return function (...params) {
        args = [...args, ...params];
        if (args.length >= handle.length) {
            return handle.call(this, ...args);
        } else {
            return curry(handle, ...args)
        }
    }
}

// 5. clone
function clone(obj) {
    if (obj instanceof Array) {
        return cloneArray(obj)
    } else if (obj instanceof Object) {
        return cloneObj(obj)
    } else {
        return obj;
    }
}
function cloneArray(arr) {
    const result = [];
    arr.forEach(ele => {
        if (ele instanceof Object) {
            result.push(clone(ele))
        } else {
            result.push(ele)
        }
    })
    return result;
}
function cloneObj(obj) {
    const result = {};
    Object.getOwnPropertyNames(obj).forEach(ele => {
        if (obj[ele] instanceof Object) {
            result[ele] = clone(obj[ele])
        } else {
            result[ele] = obj[ele]
        }
    })
    return result;
}

// 6. debounce
function debounce(handle, delay) {
    let timer = null;
    return function (e) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            return handle.call(this, e);
        }, delay)
    }
}

// 7. trottle
function trottle(handle, wait) {
    let lastTime = 0;
    return function (e) {
        let nowTime = + new Date();
        if (nowTime - lastTime > wait) {
            lastTime = nowTime;
            return handle.call(this, e);
        }
    }
}

// 8. flatten
function flatten(arr, shallow, strict, output) {
    output = output || [];
    let index = output.length;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] instanceof Array) {
            if (shallow) {
                arr[i].forEach(ele => {
                    output[index++] = ele
                })
            } else {
                flatten(arr[i], shallow, strict, output);
                index = output.length;
            }
        } else if (!strict) {
            output[index++] = arr[i];
        }
    }
    return output;
}

// 9. bubblesort
function compare(a, b) {
    if (a > b) {
        return true;
    } else {
        return false;
    }
}
function change(arr, a, b) {
    return [arr[a], arr[b]] = [arr[b], arr[a]];
}
function bubblesort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (compare(arr[j], arr[j + 1])) {
                change(arr, j, j + 1)
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
                minIndex = j
            }
        }
        change(arr, minIndex, i)
    }
    return arr;
}

// 11. quicksort
function quicksort(arr) {
    _quicksort(arr, 0, arr.length);
    return arr;
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
        const midIndex = left == right ? right - 1 : right;
        change(arr, midIndex, begin);
        _quicksort(arr, begin, midIndex);
        _quicksort(arr, midIndex + 1, end);
    }
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
    traversalLink(root.next)
}

// 14. 获取链表长度 getLinkLength
function getLinkLength(root) {
    if (root == null) return 0;
    return getLinkLength(root.next) + 1;
}

// 15. 通过下标获取表中的某一个数据  getLinkValueBySubscript
function getLinkValueBySubscript(root, subscript, index = 0) {
    if (!root) return;
    if (subscript == index) {
        return root.value;
    } else {
        return getLinkValueBySubscript(root.next, subscript, ++index)
    }
}

// 16. 通过下标设置链表中的某一个数据 setLinkValueBySubscript
function setLinkValueBySubscript(root, value, subscript, index = 0) {
    if (!root) return;
    if (subscript == index) {
        return root.value = value;
    } else {
        return setLinkValueBySubscript(root.next, value, subscript, ++index)
    }

}

// 17. 在链表某一个节点之后加入一个新节点 addLinkValueByNode
function addLinkValueByNode(root, value, node) {
    if (!root) return;
    if (root.value == node.value) {
        const newNode = new CreateLink(value);
        newNode.next = root.next;
        return root.next = newNode;
    } else {
        return addLinkValueByNode(root.next, value, node)
    }
}

// 18. 在链表的末尾加入一个新节点 pushLinkNode
function pushLinkNode(root, value) {
    if (!root) return;
    if (root.next == null) {
        const newNode = new CreateLink(value);
        root.next = newNode;
        return newNode;
    } else {
        return pushLinkNode(root.next, value)
    }
}

// 19. 删除一个链表节点 deleteNodeByValue ,修改可以删除第一节点
function deleteNodeByValue(root, value) {
    if (!root.next) return true;
    if (root.next.value == value) {
        root.next = root.next.next;
        return deleteNodeByValue(root.next, value)

    } else {
        return deleteNodeByValue(root.next, value)
    }
}

// 20. 链表逆置 reverseLink
function reverseLink(root) {
    if (!root) return;
    if (root.next.next == null) {
        const temp = root.next;
        temp.next = root;
        root.next = null;
        return temp;
    } else {
        const result = reverseLink(root.next);
        root.next.next = root;
        root.next = null;
        return result;
    }
}

// 21. 创建二叉树 BinaryTree
function BinaryTree(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

// 22. 前序遍历二叉树 traversalDLR
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
    traversalLDR(root.right);
}

// 24. 后序遍历二叉树 traversalLRD
function traversalLRD(root) {
    if (!root) return;
    traversalLRD(root.left);
    traversalLRD(root.right);
    console.log(root.value);
}

// 25. 给出前序和中序还原二叉树，并写出后序遍历 reductionTreeByDlr
function reductionTreeByDlr(dlr, ldr) {
    if (dlr == null || dlr.length == 0 || ldr == null || ldr.length == 0 || ldr.length != dlr.length) return;
    const rootValue = dlr[0];
    const root = new BinaryTree(rootValue);
    const position = ldr.indexOf(rootValue);
    const leftDlr = dlr.slice(1, position + 1);
    const rightDlr = dlr.slice(position + 1);
    const leftLdr = ldr.slice(0, position);
    const rightLdr = ldr.slice(position + 1);
    root.left = reductionTreeByDlr(leftDlr, leftLdr);
    root.right = reductionTreeByDlr(rightDlr, rightLdr);
    return root;
}

// 26. 给出中序和后序还原二叉树，并写出前序 reductionTreeByLRD
function reductionTreeByLRD(lrd, ldr) {
    if (lrd == null || lrd.length == 0 || ldr == null || ldr.length == 0 || ldr.length != lrd.length) return;
    const rootValue = lrd[lrd.length - 1];
    const root = new BinaryTree(rootValue);
    const position = ldr.indexOf(rootValue);
    const leftLrd = lrd.slice(0, position);
    const rightLrd = lrd.slice(position, lrd.length - 1);
    const leftLdr = ldr.slice(0, position);
    const rightLdr = ldr.slice(position + 1);
    root.left = reductionTreeByLRD(leftLrd, leftLdr);
    root.right = reductionTreeByLRD(rightLrd, rightLdr);
    return root;
}

// 27. 二叉树的深度搜索 deepSerchBinaryTree
function deepSerchBinaryTree(root, value) {
    if (!root) return false;
    console.log(root.value)
    if (root.value == value) return true;
    return deepSerchBinaryTree(root.left, value) || deepSerchBinaryTree(root.right, value);

}

// 28. 二叉树的广度搜索 bfsBinaryTree
function bfsBinaryTree(roots, value) {
    if (roots == null || roots.length == 0) return false;
    const rootsList = [];
    for (let i = 0; i < roots.length; i++) {
        console.log(roots[i].value, value)
        if (roots[i].value == value) {
            return true
        } else {
            roots[i].left && rootsList.push(roots[i].left);
            roots[i].right && rootsList.push(roots[i].right);
        }
    }
    return bfsBinaryTree(rootsList, value);

}

// 29. 二叉树的比较 compareBinaryTreeByStrict
function compareBinaryTreeByStrict(root1, root2) {
    if (root1 == root2) return true;
    if (root1 != null && root2 == null || root1 == null && root2 != null) return false;
    if (root1.value != root2.value) return false;
    return compareBinaryTreeByStrict(root1.left, root2.left) && compareBinaryTreeByStrict(root1.right, root2.right);
}

// 30. 二叉树交互比较 compareBinaryTree
function compareBinaryTree(root1, root2) {
    if (root1 == root2) return true;
    if (root1 != null && root2 == null || root1 == null && root2 != null) return false;
    if (root1.value != root2.value) return false;
    return compareBinaryTree(root1.left, root2.left) && compareBinaryTree(root1.right, root2.right) ||
        compareBinaryTree(root1.right, root2.left) && compareBinaryTree(root1.left, root2.right)

}

// 31. 二叉树的diff diffByBinaryTree
function diffByBinaryTree(root1, root2, result = []) {
    if (root1 == root2) return;
    if (root1 != null && root2 == null) {
        result.push({
            origin: root1,
            nowNode: null,
            handle: '删除'
        })
    } else if (root1 == null && root2 != null) {
        result.push({
            origin: null,
            nowNode: root2,
            handle: '新增'
        })

    } else if (root1.value != root2.value) {
        result.push({
            oringin: root1,
            nowNode: root2,
            handle: '修改'
        })
        diffByBinaryTree(root1.left, root2.left, result)
        diffByBinaryTree(root1.right, root2.right, result);
    }
    diffByBinaryTree(root1.left, root2.left, result)
    diffByBinaryTree(root1.right, root2.right, result);
    return result;
}

// 32. prim算法 prim
function Tree(value) {
    this.value = value;
    this.neighbor = [];
}
function prim(distance,point,start){
    const horde = [start];
    while(true){
        const result = _getDistance(distance,point);
        horde.push(result.to);
        if(horde.length == point.length) break;
    }
    return horde;
    function _getDistance(distance,point){
        const result ={
            from:null,
            to:null,
            distance:Infinity
        }
        for(let i = 0; i < horde.length;i ++){
            const position = point.indexOf(horde[i]);
            for(let j = 0; j < distance[position].length; j ++){
                if(!horde.includes(point[j]) && result.distance > distance[position][j]){
                    result.from = horde[i];
                    result.to = point[j];
                    result.distance = distance[position][j];
                }
            }
           
        }
        result.from.neighbor.push(result.to)
        result.to.neighbor.push(result.from)
        return result;
    }

}

// 33. 克鲁斯卡算法

// 34. 二叉搜索树（二叉搜索树

// 35. 构建二叉搜索树 searchTree
function searchTree(arr){
    if(arr.length == 0) return;
    const root = new BinaryTree(arr[0]);
    for(let i = 1; i < arr.length; i ++){
        addNode(root,arr[i]);
    }
    return root;
    function addNode(root,value){
        if(!root) return;
        if(root.value == value) return;
        if(root.value > value){
            if(root.left == null){
                const newNode = new BinaryTree(value);
                root.left = newNode;
            }else{
                addNode(root.left,value);
            }
        }else{
            if(root.right == null){
                const newNode = new BinaryTree(value);
                root.right = newNode;
            }else{
                addNode(root.right,value)
            }
        }
    }
}

// 36. 使用二叉搜索树 includesBySearchTree
function includesBySearchTree(root,value){
    if(!root) return false;
    if(root.value == value) return true;
    if(root.value > value){
        return includesBySearchTree(root.left,value);
    }else{
        return includesBySearchTree(root.right,value)
    }
}

// 37. 平衡二叉树

// 38. 判断是否为平衡二叉树 判断是否为平衡二叉树
function getDeep(root){
    if(root == null) return 0;
    const leftLen = getDeep(root.left) + 1;
    const rightLen = getDeep(root.right) + 1;
    return Math.max(leftLen,rightLen)
}
function isBalanceTree(root){
    if(!root) return true;
    const leftLen = getDeep(root.left);
    const rightLen = getDeep(root.right);
    if(Math.abs(leftLen - rightLen) > 1) return false;
    return isBalanceTree(root.left) && isBalanceTree(root.right);
}

// 39. 定义满二叉树，完全二叉树

// 40. 数组，链表，栈，队列

// 大数相加

function add(a,b){
    a = '0' + a;
    b = '0' + b;
    const aArr = a.split('');
    const bArr = b.split('');
    const aLen = aArr.length;
    const bLen = bArr.length;
    const len = aLen > bLen ? aLen: bLen;
    const result = [];
    let flag = 0;
    if(aLen > bLen){
        for(i = 0; i < aLen - bLen; i ++){
            aArr.unshift('0')
        }
    }else{
        for(i = 0; i < bLen - aLen; i ++){
            bArr.unshift('0');
        }
    }
    for(let i = len - 1; i >= 0; i -- ){
        const re = + aArr[i] + parseInt(bArr[i]) + flag;
        if(re > 10){
           result[i] = re % 10;
           flag = 1;
        }else{
            result[i] = re;
            flag = 0;
        }
    }
    return result.join('').replace(/^0/g,'');

}