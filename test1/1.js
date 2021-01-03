// 1.new  objectFactory
function objectFactory() {
  const obj = new Object();
  const constouctor = [].shift.call(arguments);
  constouctor.apply(obj, arguments);
  obj.__proto__ = constouctor.prototype;
  return obj;
}

// 2.大数相加 add
function add(a, b) {
  a = '0' + a;
  b = '0' + b;
  const aArr = a.split('');
  const bArr = b.split('');
  const aLen = aArr.length;
  const bLen = bArr.length;
  const result = [];
  let flag = 0;
  if (aLen > bLen) {
    for (i = 0; i < aLen - bLen; i++) {
      bArr.unshift('0');
    }
  } else {
    for (i = 0; i < bLen - aLen; i++) {
      aArr.unshift('0')
    }
  }
  for (let i = aArr.length - 1; i >= 0; i--) {
    const re = +aArr[i] + +bArr[i] + flag;
    if (re >= 10) {
      result[i] = re % 10;
      flag = 1;
    } else {
      result[i] = re;
      flag = 0
    }
  }
  return result.join('').replace(/^0/g, '');

}

// 3. 树深度优先 非递归deepTravel  递归dfs
function deepTravel(root) {
  if (!root) return;
  const stack = [];
  root && stack.push(root);
  const result = [];
  while (stack.length) {
    const node = stack.shift();
    result.push(node.value)
    for (let i = node.children.length - 1; i >= 0; i--) {
      stack.unshift(node.children[i]);
    }
  }
  return result;
}
function dfs(root) {
  if (!root) return;
  console.log(root.value);
  for (let i = 0; i < root.children.length; i++) {
    dfs(root.children[i])
  }
}

// 4. 树广度优先  非递归reBfs  递归bfs
function reBfs(root) {
  if (!root) return;
  const result = [];
  const queue = [];
  root && queue.push(root);
  while (queue.length) {
    const node = queue.pop();
    result.push(node.value);
    for (let i = 0; i < node.children.length; i++) {
      queue.unshift(node.children[i]);
    }
  }
  return result;
}
function bfs(roots) {
  if (roots == null || roots.length == 0) return;
  const nodeList = [];
  for (let i = 0; i < roots.length; i++) {
    console.log(roots[i].value);
    nodeList.push(...roots[i].children);
  }
  bfs(nodeList);
}

// 5. 平衡二叉树



// 6. 单旋singleRotate
// 无法解决变化分支不可以是唯一最深支
// 左浅右深 左单旋
// 做单旋步骤
// 1. 找到新根   root.right
// 2. 找到变化分支  新根.left
// 3. 当前旋转节点的右孩子是变化分支 
// 4. 新根的左孩子是旋转节点
// 5. 返回新的根节点
function changeBalanceTreeByRotate(root) {
  if (!root) return;
  if (isBalanceTree(root)) return root;
  // 因为需要从下至上，因此采用后序遍历次序
  root.left && (root.left = changeBalanceTreeByRotate(root.left));
  root.right && (root.right = changeBalanceTreeByRotate(root.right));
  const leftLen = getDeep(root.left);
  const rightLen = getDeep(root.right);
  if (Math.abs(leftLen - rightLen) < 2) {
    return root;
  } else {
    if (leftLen > rightLen) {
      const leftLen = getDeep(root.left.left);
      const rightLen = getDeep(root.left.right);
      if (rightLen > leftLen) {
        root.left = leftRotate(root.left);
      }
      const newRoot = rightRotate(root);
      newRoot.right = changeBalanceTreeByRotate(newRoot.right)
      return changeBalanceTreeByRotate(newRoot);
    } else {
      const leftLen = getDeep(root.right.left);
      const rightLen = getDeep(root.right.right);
      if (rightLen < leftLen) {
        root.right = rightRotate(root.right);
      }
      const newRoot = leftRotate(root);
      newRoot.left = changeBalanceTreeByRotate(newRoot.left);
      return changeBalanceTreeByRotate(newRoot)
    }
  }
  function rightRotate(root) {
    const newRoot = root.left;
    const changeTree = newRoot.right;
    newRoot.right = root;
    root.left = changeTree;
    return newRoot;
  }
  function leftRotate(root) {
    const newRoot = root.right;
    const changTree = newRoot.left;
    newRoot.left = root;
    root.right = changTree;
    return newRoot;
  }
}

// 7. 双旋
// 左右单旋，右左单旋

// 8. 左左右右finalChange

// 9，图的广度bfsGraph
function bfsGraph(roots, target, path) {
  if (roots == null || roots.length == 0) return false;
  path = path || [];
  const nodeList = [];
  for (let i = 0; i < roots.length; i++) {
    if (!path.includes(roots[i])) {
      path.push(roots[i]);
      console.log(roots[i].value);
      if(roots[i].value == target){
        return true;
      }else{
        nodeList.push(...roots[i].neighbor)
      }
    }
  }
  return bfsGraph(nodeList, target,path)
}
function reBfsGraph(root,target){
  const queue = [];
  root && queue.push(root);
  const path = [];
  while(queue.length){
    const node = queue.pop();
    if(!path.includes(node)){
      console.log(node.value);
      if(node.value == target) return true;
      path.push(node);
      queue.unshift(...node.neighbor.reverse())
    }
  }
  return false;
}
// 10. 图的深度deepSearchGraph
function deepSearchGraph(root,target,path = []){
  if(!root) return false;
  if(root.value == target) return true;
  let result = [];
  for(let i = 0; i < root.neighbor.length; i ++){
      if(path.includes(root.neighbor[i])) continue;
      path.push(root.neighbor[i]);
      result.push(deepSearchGraph(root.neighbor[i],target,path))
  }
  return result.some(e=>e);
}

// 11. kruskal
function kruskal(distance,pointSet){
   const horde = [];
   while(true){
     const result = {
       from : null,
       to : null,
       minDistance : Infinity
     }
     for(let i = 0; i < distance.length; i ++){
       for(let j = 0; j < distance[i].length; j ++){
         if(i != j && distance[i][j] < result.minDistance && _canLink(pointSet[i],pointSet[j],horde)){
           result.from = pointSet[i];
           result.to = pointSet[j];
           result.minDistance = distance[i][j]
         }
       }
     }
     _link(result.from,result.to,horde);
     result.from.neighbor.push(result.to)
     result.to.neighbor.push(result.from)
     if(horde.length == 1 && horde[0].length == pointSet.length) break;
   }
   return horde[0];
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
     if(fromHorde != null && toHorde != null && fromHorde == toHorde){
       return false;
     }
     return true;

   }
   function _link(from,to,horde){
     let fromHorde = null;
     let toHorde = null;
     for(let i = 0; i < horde.length; i ++){
       if(horde[i].includes(from)){
         fromHorde = horde[i];
       }
       if(horde[i].includes(to)){
         toHorde = horde[i];
       }
     }
     if(fromHorde == null && toHorde != null){
       toHorde.push(from);
     }else if(fromHorde != null && toHorde == null){
       fromHorde.push(to);
     }else if(fromHorde == null && toHorde == null){
       const newArr = [from,to];
       horde.push(newArr)
     }else{
       fromHorde.push(...toHorde);
       horde.splice(horde.indexOf(toHorde),1);
     }
   }
}

// 12. Events
function Events(){
  this._cache = {};
}
Events.prototype.on = function(type,handle){
  console.log('on',type)
  if(!this._cache[type]){
     this._cache[type] = [];
  }
  this._cache[type].push(handle)

}
Events.prototype.off = function(type,handle){
  if(!this._cache[type]) return;
  this._cache[type] = this._cache[type].filter(fn=>fn !== handle && fn.origin != handle)
  
}
Events.prototype.once = function(type,handle){
  const that = this;
  function only(...args){
    handle(...args)
    that.off(type,handle);
  }
  only.origin = handle;
  this.on(type,only);
}
Events.prototype.emit = function(type,...args){
  if(!this._cache[type]) return;
  this._cache[type].forEach(fn=>{
      fn.call(this,...args)
  })
}      

// 13. reduce实现map
Array.prototype.myMap = function (cb){
  return this.reduce((result,curr,index,self)=>{
    result.push(cb(curr,index,self))
    return(result)
  },[])
}