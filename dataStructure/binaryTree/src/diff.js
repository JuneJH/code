// diff

// 构建两颗不一样的树
function Node (value) {
    this.value = value;
    this.left = null;
    this.right = null;
}



function diff(root1,root2,info=[]){
    if(root1 == root2) return true;
    if(root1 != null && root2 == null){
        info.push({
            type:'删除',
            origin:root1,
            nowNode:null
        })
    }else if(root1 == null && root2 != null){
        info.push({
            type:'新增',
            origin:null,
            newNode:root2
        })

    }else if(root1.value != root2.value){
        info.push({
            type:'修改',
            origin:root1,
            nowNode:root2
        })
        diff(root1.left,root2.left,info);
        diff(root1.right,root2.right,info)
    }else{
        diff(root1.left,root2.left,info);
        diff(root1.right,root2.right,info)

    }
    return info;
}

module.exports = {
    diff,
}

