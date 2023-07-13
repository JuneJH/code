function  breadthSearch(root,target){
    if(root === null){
        return false;
    }
    if(!Array.isArray(root)){
        root = [root];
    }
    if(root.length === 0){
        return  false;
    }
    const children = [];
    for(let i = 0; i < root.length; i ++){
        const node = root[i];
        if(node.val === target){
            return  true;
        }else{
            node.left && children.push(node.left); 
            node.right && children.push(node.right);
        }
    }
    return  breadthSearch(children,target);
}

function breadthSearch2(root){
    const res = [];
    if(root === null){
        return res;
    }

    const queue = new Array(root);

    while(queue.length > 0){
        const node = queue.pop();
        res.push(node.val);
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
    }

    return res;
    
}
const {Node} = require("./utils")
const a = new Node("1");
const b = new Node("2");
const c = new Node("3");
const d = new Node("4");
const e = new Node("5");

a.left = b;
a.right = c;
b.left = d;
d.right =e;

console.log("runn",breadthSearch2(a))

module.exports = {
    breadthSearch
}