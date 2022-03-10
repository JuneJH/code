// 创建树

function Node(value){
    this.value = value;
    this.branch = [];
}

const body = new Node('body');
const header = new Node('header');
const nav = new Node('nav');
const h1 = new Node('h1')
const container = new Node('container');
const content = new Node('content');
const div = new Node('div');
const footer = new Node('footer');

body.branch = [header,container,footer];
header.branch = [nav,h1];
container.branch = [content,div]

const body1 = new Node('body');
const header1 = new Node('header');
const nav1 = new Node('nav');
const h11 = new Node('h1')
const container1 = new Node('container12345');
const content1 = new Node('content234');
const div1 = new Node('div');
const footer1 = new Node('footer');

const add = new Node('add')

body1.branch = [header1,container1,footer1];
header1.branch = [nav1,h11,add];
container1.branch = [content1]
// footer1.branch = [div]

//diff
 function diffTree (t1,t2,diffList=[]){
     if(t1 == t2) return;
     if(t1 == null && t2 != null){
         diffList.push({type:'add',node:null,newNode:t2})
     }else if(t1 != null && t2 == null) {
         diffList.push({type:'delete',node:t1,newNode:null})
     }else if(t1.value != t2.value){
          diffList.push({type:'update',node:t1,newNode:t2});
          let len = t1.branch.length > t2.branch.length ? t1.branch.length: t2.branch.length;
          for(let i = 0; i < len; i ++){
             diffTree(t1.branch[i],t2.branch[i],diffList)
          }
     }else{
         let len = t1.branch.length > t2.branch.length ? t1.branch.length: t2.branch.length;
         for(let i = 0; i < len; i ++){
            diffTree(t1.branch[i],t2.branch[i],diffList)
         }
     }
     return diffList;

 }

 const result = diffTree(body,body1);
 console.log(result)



// 打印树
function print(root){
    if(root == null) return;
    console.log(root.value);
    root.branch.forEach(ele=>{
        print(ele)
    })
}
// print(body)