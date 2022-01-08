// 1.new 
function objectFactory() {
  const Origin = [].shift.call(arguments);
  const obj = {};
  const result = Origin.apply(obj, arguments);
  obj.__proto__ = Origin.prototype;
  return typeof result == 'object' ? result : obj;
}

// 2.大数相加 add
function add(a, b) {
  a = '0' + a;
  b = '0' + b;
  const aArr = a.split('');
  const bArr = b.split('');
  const aLen = aArr.length;
  const bLen = bArr.length;
  let flag = 0;
  const result = [];
  if (aLen > bLen) {
    for (let i = aLen - bLen; i > 0; i--) {
      bArr.unshift('0')
    }
  } else if (aLen < bLen) {
    for (let i = bLen - aLen; i > 0; i--) {
      aArr.unshift('0')
    }
  }
  for (let i = aArr.length - 1; i >= 0; i--) {
    const rej = + aArr[i] + +bArr[i] + flag;
    if (rej >= 10) {
      result[i] = rej % 10;
      flag = 1;
    } else {
      result[i] = rej;
      flag = 0;
    }
  }
  return result.join('').replace(/^0/g, "");
}

// 3. 树深度优先 非递归
function dfs(root, result) {
  result = result || [];
  if (!root) return;
  result.push(root.value)
  for (let i = 0; i < root.children.length; i++) {
    dfs(root.children[i], result);
  }
  return result;
}
function deepTravel(tree) {
  let stack = [];
  let nodeList = [];
  tree && stack.push(tree);
  while (stack.length) {
    let node = stack.pop();
    nodeList.push(node.value);
    for (let i = node.children.length - 1; i >= 0; i--) {
      stack.push(node.children[i]);
    }
  }
  return nodeList;
}

// 4. 树广度优先  非递归
function bfs(root, result) {
  if (root == null || root.length == 0) return result;
  result = result || [];
  const nodeList = []
  for (let i = 0; i < root.length; i++) {
    result.push(root[i].value);
    nodeList.push(...root[i].children)
  }
  return bfs(nodeList, result);
}

function reBfs(root) {
  if (!root) return;
  const result = [];
  const queue = [];
  root && queue.push(root);
  while (queue.length) {
    const node = queue.shift();
    result.push(node.value);
    for (let i = 0; i < node.children.length; i++) {
      queue.push(node.children[i]);
    }
  }
  return result
}

// 5. 平衡二叉树

function isBalanceTree(root) {
  if (!root) return true;
  const left = getDeep(root.left);
  const right = getDeep(root.right);
  if (Math.abs(left - right) > 1) {
    return false;
  } else {
    return isBalanceTree(root.left) && isBalanceTree(root.right)
  }

}
function getDeep(root) {
  if (root == null) return 0;
  const left = getDeep(root.left) + 1;
  const right = getDeep(root.right) + 1;
  return Math.max(left, right);
}


// 6. 单旋
// 无法解决变化分支不可以是唯一最深支
// 左浅右深 左单旋
// 做单旋步骤
// 1. 找到新根   root.right
// 2. 找到变化分支  新根.left
// 3. 当前旋转节点的右孩子是变化分支 
// 4. 新根的左孩子是旋转节点
// 5. 返回新的根节点
function singleRotate(root) {
  if (!root) return;
  if (isBalanceTree(root)) return root;
  root.right && (root.right = singleRotate(root.right));
  root.left && (root.left = singleRotate(root.left));
  const left = getDeep(root.left);
  const right = getDeep(root.right);
  if (Math.abs(left - right) <= 1) {
    return root;
  } else {
    if (left > right) {
      return rightRotate(root);
    } else {
      return leftRotate(root)
    }
  }
  function rightRotate(root) {
    const newRoot = root.left;
    const changeNode = newRoot.right;
    root.left = changeNode;
    newRoot.right = root;
    return newRoot;

  }
  function leftRotate(root) {
    const newRoot = root.right;
    const changeNode = newRoot.left;
    root.right = changeNode;
    newRoot.left = root;
    return newRoot;
  }
}

// 7. 双旋
// 左右单旋，右左单旋

function doubleChange(root) {
  if (root == null) return;
  if (isBalanceTree(root)) return root;
  root.left && (root.left = doubleChange(root.left));
  root.right && (root.right = doubleChange(root.right));
  const leftDeep = getDeep(root.left);
  const rightDeep = getDeep(root.right);
  if (Math.abs(leftDeep - rightDeep) <= 1) {
    return root;
  } else {
    if (leftDeep > rightDeep) {
      const leftDeep = getDeep(root.left.left)
      const rightDeep = getDeep(root.left.right)
      if (leftDeep < rightDeep) {
        root.left = leftRotate(root.left)
      }
      return rightRotate(root)
    } else {
      const leftDeep = getDeep(root.right.left)
      const rightDeep = getDeep(root.right.right)
      if (leftDeep > rightDeep) {
        root.right = rightRotate(root.right)
      }
      return leftRotate(root)
    }
  }
  function rightRotate(root) {
    const newRoot = root.left;
    const changeNode = newRoot.right;
    root.left = changeNode;
    newRoot.right = root;
    return newRoot;

  }
  function leftRotate(root) {
    const newRoot = root.right;
    const changeNode = newRoot.left;
    root.right = changeNode;
    newRoot.left = root;
    return newRoot;
  }
}


// 8. 左左右右
function finalChange(root) {
  if (root == null) return;
  if (isBalanceTree(root)) return root;
  root.left && (root.left = finalChange(root.left));
  root.right && (root.right = finalChange(root.right));
  const leftDeep = getDeep(root.left);
  const rightDeep = getDeep(root.right);
  if (Math.abs(leftDeep - rightDeep) <= 1) {
    return root;
  } else {
    if (leftDeep > rightDeep) {
      const leftDeep = getDeep(root.left.left)
      const rightDeep = getDeep(root.left.right)
      if (leftDeep < rightDeep) {
        root.left = leftRotate(root.left)
      }
      const newRoot = rightRotate(root);
      newRoot.right = finalChange(newRoot.right);
      return finalChange(newRoot)
    } else {
      const leftDeep = getDeep(root.right.left)
      const rightDeep = getDeep(root.right.right)
      if (leftDeep > rightDeep) {
        root.right = rightRotate(root.right)
      }
      const newRoot = leftRotate(root)
      newRoot.left = finalChange(newRoot.left);
      return finalChange(newRoot)
    }
  }
  // 右旋
  function rightRotate(root) {
    const newRoot = root.left;
    const changeNode = newRoot.right;
    root.left = changeNode;
    newRoot.right = root;
    return newRoot;

  }
  function leftRotate(root) {
    const newRoot = root.right;
    const changeNode = newRoot.left;
    root.right = changeNode;
    newRoot.left = root;
    return newRoot;
  }
}
// 9，图的广度
function Graph(value){
  this.value = value;
  this.neighbor = []
}
const graphA = new Graph('a');
const graphB = new Graph('b')
const graphC = new Graph('c')
const graphD = new Graph('d')
const graphE = new Graph('e')

graphA.neighbor.push(graphB,graphC)
graphB.neighbor.push(graphA,graphC,graphD)
graphC.neighbor.push(graphA,graphB,graphD)
graphD.neighbor.push(graphB,graphC,graphE)
graphE.neighbor.push(graphD)

function bfsGraph(roots,target,path=[]){
  if(roots == null || roots.length == 0) return false;
  const list = [];
  for(let i = 0; i < roots.length; i ++){
      if(path.includes(roots[i])) continue;
      path.push(roots[i])
      console.log(roots[i].value)
      if(roots[i].value == target) {
          return true
      }else{
          list.push(...roots[i].neighbor)
      }
  }
  return bfsGraph(list,target,path)
}

console.log(bfsGraph([graphA],'x'))

// 10. 图的深度
function deepSearchGraph(root,target,path=[]){
  if(root == null) return false;
  if(path.includes(root)) return false;
  console.log(root.value)
  if(root.value == target) return true;
  path.push(root);
  let reuslt = false;
  for(let i = 0; i < root.neighbor.length; i ++){
      reuslt |= deepSearchGraph(root.neighbor[i],target,path)
  }
  return reuslt ? true : false;
}
console.log(deepSearchGraph(graphA,'x',[]))

// 11. kruskal
const graphA1 = new Graph('a');
const graphB1 = new Graph('b')
const graphC1 = new Graph('c')
const graphD1 = new Graph('d')
const graphE1 = new Graph('e')
const pointSet = [graphA1, graphB1,graphC1, graphD1, graphE1];
const distance = [
    [0, 4, 7, Infinity, Infinity],
    [4, 0, 8, 6, Infinity],
    [7, 8, 0, 5, Infinity],
    [Infinity, 6, 5, 0, 7],
    [Infinity, Infinity, Infinity, 7, 0],
]

function kruskal(pointSet, distance) {
  const resultList = [];
  let allDistance = 0;
  function _canlink(resultList, tempBegin, tempEnd){
      let beginListIn = null;
      let endListIn = null;
      for(let i = 0; i < resultList.length; i ++){
              if(resultList[i].includes(tempBegin)){
                  beginListIn = resultList[i];
              }
              if(resultList[i].includes(tempEnd)){
                  endListIn = resultList[i];
              }
      }
      if(beginListIn !== null && endListIn != null && beginListIn == endListIn){//null也相等，所以需要判断是否为空
          return false;
      }
      return true;
  };
  function _link(resultList, tempBegin, tempEnd){
      let beginListIn = null;
      let endListIn = null;
      for(let i = 0; i < resultList.length; i ++){
              if(resultList[i].includes(tempBegin)){
                  beginListIn = resultList[i];
              }
              if(resultList[i].includes(tempEnd)){
                  endListIn = resultList[i];
              }
      }
      if(beginListIn == null && endListIn == null){
          const newArr = [tempBegin,tempEnd];
          resultList.push(newArr);
      }else if(beginListIn == null && endListIn != null){
          endListIn.push(tempBegin);
      }else if(beginListIn != null && endListIn == null){
          beginListIn.push(tempEnd)
      }else if(beginListIn != null && endListIn !== null && endListIn != beginListIn){
          beginListIn.push(...endListIn)//一定不要改变了beginListIn的数组地址指向
          const endIndex = resultList.indexOf(endListIn);
          resultList.splice(endIndex,1);
      }
  }
  while (true) {
      const result = {
          minDistance: Infinity,
          end: null,
          begin: null
      }
      for (let i = 0; i < distance.length; i++) {
          for (let j = 0; j < distance[i].length; j++) {
              const tempBegin = pointSet[i];
              const tempEnd = pointSet[j];
              if (i != j && result.minDistance > distance[i][j] && _canlink(resultList, tempBegin, tempEnd)) {
                  result.begin = tempBegin;
                  result.end = tempEnd;
                  result.minDistance = distance[i][j];
              }
          }
      }
      _link(resultList, result.begin, result.end);
      result.begin.neighbor.push(result.end);
      result.end.neighbor.push(result.begin);
      allDistance += result.minDistance;
      // 注意resulList是一个二维数组
      if (resultList.length == 1 && resultList[0].length == pointSet.length) break;
  }
  return allDistance;
}
console.log('111111111',kruskal(pointSet,distance))

// 12. Events
function EventEmitter(){
  this._events = {};
}
EventEmitter.prototype.on = function (type,handle){
  if(!this._events[type]){
    this._events[type] = []
  };
  this._events[type].push(handle);

}
EventEmitter.prototype.off = function (type,handle){
  if(this._events[type]){
    this._events[type] = this._events[type].filter(fn=>{
      return fn !== handle && fn.origin !== handle
    })
  }

}
EventEmitter.prototype.emit = function (type,...args){
  if(this._events[type]){
     this._events[type].forEach(fn=>{
       fn.call(this,...args);
     })
  }

}
EventEmitter.prototype.once = function (type,handle){
  let _this = this;
  function only(...args){
    handle(...args);
    _this.off(type,only)
  }
  only.origin = handle;
  this.on(type,only);

}
const event = new EventEmitter();
event.on('sayName',function(name){
    console.log('say something,i am giving up on you!',name)
})
const  sayName = function(age){
  console.log('i am alone without you',age)
}
event.once('hh',function(...args){
  console.log('hhhh',...args)
})
event.on('sayName',sayName)
event.off('sayName',sayName)
event.emit('sayName','June')
event.emit('hh',11);
event.emit('hh',11);
event.emit('hh',11);
event.emit('hh',11);
// 13. reduce实现map

Array.prototype.myMap = function (callback) {
  var arr = this;
  return arr.reduce((acc, cur, i) => {
    acc.push(callback(cur, i, arr));
    return acc
  }, []);
}
const arrMap = [1,2,3,4,5,6,7,8,9]
const newArrMap = arrMap.map(ele=>ele + 1)
const newArrMap1 = arrMap.myMap(ele => ele + 2)
console.log(arrMap,newArrMap,newArrMap1)
// 14. 单例模式
const singleHandle = function (func){
  let result = null;
  return function () {
      if(result == null){
          const args = Array.from(arguments)
          result = new func(...args)
      }
      return result;
  }
}

function Person(name,age){
  this.name = name;
  this.age = age
}
const p1 = new Person('juen',18);
const p2 = new Person('july',16);
console.log(p1,p2)
console.log(p1 == p2)
const Person1 = singleHandle(Person);
const p3 = new Person1('juen',18);
const p4 = new Person1('july',16);
console.log(p3,p4)
console.log(p3 == p4)

// 15. 发布订阅者模式
// 事件发布/订阅模式 (PubSub) 在异步编程中帮助我们完成更松的解耦,


// 16. 观察者模式

var obj = {
  value: 0
}

var proxy = new Proxy(obj, {
  set: function(target, key, value, receiver) { // {value: 0}  "value"  1  Proxy {value: 0}
    console.log('值发生重新设置')
    Reflect.set(target, key, value, receiver)
  }
})

proxy.value = 1 // 调用相应函数

// 17. 代理模式
// 为一个对象提供一种代理来控制这个对象得访问
//虚拟代理，懒加载
const myImage = (function() {
  const imgNode = document.createElement('img')
  document.body.appendChild(imgNode)
  return {
    setSrc: function(src) {
      imgNode.src = src
    }
  }
})()

const proxyImage = (function() {
  const img = new Image()
  img.onload = function() { // http 图片加载完毕后才会执行
    myImage.setSrc(this.src)
  }
  return {
    setSrc: function(src) {
      myImage.setSrc('../e74754a6a7f0d7d05133c14d17730bf2.png') // 本地 loading 图片
      img.src = src
    }
  }
})()

proxyImage.setSrc('https://inews.gtimg.com/newsapp_bt/0/11205804124/1000')

// 18. 工厂模式


// 19. 装饰者模式

// 20. 


// 1.new  objectFactory

// 2.大数相加 add

// 3. 树深度优先 非递归deepTravel  递归dfs

// 4. 树广度优先  非递归reBfs  递归bfs

// 5. 单旋singleRotate
// 无法解决变化分支不可以是唯一最深支
// 左浅右深 左单旋
// 做单旋步骤
// 1. 找到新根   root.right
// 2. 找到变化分支  新根.left
// 3. 当前旋转节点的右孩子是变化分支 
// 4. 新根的左孩子是旋转节点
// 5. 返回新的根节点

// 6，图的广度bfsGraph

// 7. 图的深度deepSearchGraph

// 8. kruskal

// 9. Events

// 10. reduce实现map