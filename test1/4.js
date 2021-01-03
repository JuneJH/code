// 1.new  objectFactory
 function objectFactory(){
     const constructor = [].shift.call(arguments);
     const obj = {};
     let result = constructor.apply(obj,arguments);
     obj.__proto__ = constructor.prototype;
     if(result == null){
         result = false;
     }
     return typeof result == 'object' ? result : obj;
 }

// 2.大数相加 add

// 3. 树深度优先 非递归deepTravel  递归dfs
function deepTravel(root){
    const stack = [];
    root && stack.push(root);
    const result = [];
    while(stack.length){
        const node = stack.pop();
        result.push(node.value);
        for(let i = node.children.length - 1; i >= 0; i --){
            stack.push(node.children[i])
        }
    }
    return result;
}
function dfs(root){
    if(!root) return;
    console.log(root.value);
    for(let i = 0; i < root.children.length; i ++){
        dfs(root.children[i])
    }
}

// 4. 树广度优先  非递归reBfs  递归bfs
function reBfs(root){
    const queue = [];
    root && queue.push(root);
    const result = [];
    while(queue.length){
        const node = queue.pop();
        result.push(node.value);
        queue.unshift(...node.children.reverse());
    }
    return result;
}
function bfs(roots){
    if(roots == null || roots.length == 0) return;
    const nodeList = [];
    for(let i = 0; i < roots.length; i ++){
        console.log(roots[i].value);
        nodeList.push(...roots[i].children);
    }
    bfs(nodeList)
}


// 5. 单旋singleRotate
// 无法解决变化分支不可以是唯一最深支
// 左浅右深 左单旋
// 做单旋步骤
// 1. 找到新根   root.right
// 2. 找到变化分支  新根.left
// 3. 当前旋转节点的右孩子是变化分支 
// 4. 新根的左孩子是旋转节点
// 5. 返回新的根节点
function changeBalanceTreeByRotate(root){
    if(isBalanceTree(root)) return root;
    if(root.left){
        root.left = changeBalanceTreeByRotate(root.left);
    }
    if(root.right){
        root.right = changeBalanceTreeByRotate(root.right);
    }
    const leftLen = getDeep(root.left);
    const rightLen = getDeep(root.right);
    if(Math.abs(leftLen - rightLen) < 2){
        return root;
    }else{
        if(leftLen > rightLen){
            const left = getDeep(root.left.left);
            const right = getDeep(root.left.right);
            if(right > left){
                root.left = leftRotate(root.left);
            }
            const newRoot = rightRotate(root);
            newRoot.right = changeBalanceTreeByRotate(newRoot.right);
            return changeBalanceTreeByRotate(newRoot)
        }else{
            const left = getDeep(root.right.left);
            const right = getDeep(root.right.right);
            if(left > right){
                root.right = rightRotate(root.right)
            }
            const newRoot = leftRotate(root);
            newRoot.left = changeBalanceTreeByRotate(newRoot.left);
            return changeBalanceTreeByRotate(newRoot)
        }
    }
    function rightRotate(root){
        const newRoot = root.left;
        const changeTree = newRoot.right;
        root.left = changeTree;
        newRoot.right = root;
        return newRoot;
    }
    function leftRotate(root){
        const newRoot = root.right;
        const changeTree = newRoot.left;
        root.right = changeTree;
        newRoot.left = root;
        return newRoot;
    }
}

// 6，图的广度bfsGraph
function bfsGraph(roots,target,path=[]){
    if(roots == null || roots.length == 0) return false;
    const nodeList = [];
    for(let i = 0; i < roots.length; i ++){
        if(path.includes(roots[i])) continue;
        path.push(roots[i])
        console.log(roots[i].value)
        if(roots[i].value == target) return true;
        nodeList.push(...roots[i].neighbor)
    }
    return bfsGraph(nodeList,target,path);
}

// 7. 图的深度deepSearchGraph
function deepSearchGraph(root,target,path=[]){
    if(!root) return false;
    if(root.value == target) return true;
    const result = [];
    for(let i = 0; i < root.neighbor.length; i ++){
        if(path.includes(root.neighbor[i])) continue;
        path.push(root.neighbor[i]);
        result.push(deepSearchGraph(root.neighbor[i],target,path));
    }
    return result.some(e=>e);
}

// 8. kruskal
function kruskal(distance,pointSet){
    const horde =[];
    while(true){
        const result = {
            from : null,
            to : null,
            minDistance : Infinity,
        }
        for(let i = 0; i < distance.length; i ++){
            for(let j = 0; j < distance[i].length; j ++){
                if(i != j && distance[i][j] < result.minDistance && _canLink(pointSet[i],pointSet[j],horde)){
                    result.from = pointSet[i];
                    result.to = pointSet[j];
                    result.minDistance = distance[i][j];
                }
            }
        }
        _link(result.from,result.to,horde);
        result.from.neighbor.push(result.to);
        result.to.neighbor.push(result.from);
        if(horde.length == 1 && horde[0].length == pointSet.length) break;
    }
    return horde;
    function _canLink(from,to,horde){
        let fromHorde = null;
        let toHorde = null;
        for(let i = 0; i < horde.length; i ++){
            if(horde[i].includes(from)){
                fromHorde = horde[i]
            }
            if(horde[i].includes(to)){
                toHorde = horde[i]
            }
        }
        if(fromHorde != null && toHorde != null && fromHorde == toHorde) return false;
        return true;
    }
    function _link(from,to,horde){
        let fromHorde = null;
        let toHorde = null;
        for(let i = 0; i < horde.length; i ++){
            if(horde[i].includes(from)){
                fromHorde = horde[i]
            }
            if(horde[i].includes(to)){
                toHorde = horde[i]
            }
        }
        if(fromHorde == null && toHorde == null){
            const newArr = [from,to];
            horde.push(newArr)
        }else if(fromHorde != null && toHorde == null){
            fromHorde.push(to)
        }else if(fromHorde == null && toHorde != null){
            toHorde.push(from)
        }else{
            fromHorde.push(...toHorde);
            horde.splice(horde.indexOf(toHorde),1)
        }
    }
}

// 9. Events
function Events(){
    this._cache = {};
}
Events.prototype.on = function (type,handle){
    if(!this._cache[type]){
        this._cache[type] = []
    }
    this._cache[type].push(handle);
}
Events.prototype.emit = function (type,...args){
    if(!this._cache[type]) return;
    this._cache[type].forEach(fn=>{
        fn.call(this,...args);
    })

}
Events.prototype.off = function(type,handle){
    if(this._cache[type]){
        this._cache[type] = this._cache [type].filter(fn=>fn != handle && fn.origin != handle);
    }

}
Events.prototype.once = function (type,handle){
    const that = this;
    function only(...args){
        handle.call(this,...args);
        that.off(type,handle);
    }
    only.origin = handle;
    this.on(type,only);

}

// 10. reduce实现map
Array.prototype.myMap = function (cb){
    return this.reduce((pre,curr,index,self)=>{
        pre.push(cb(curr,index,self))
        return pre;
    },[])
}
 