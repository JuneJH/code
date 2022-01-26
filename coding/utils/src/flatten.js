//扁平化
function flattenByre(arr){
    let result = [];
    for(let i = 0; i < arr.length; i ++){
        if(arr[i] instanceof Array){
            result = result.concat(flatten(arr[i]))
        }else{
            result.push(arr[i])
        }
    }
    return result;
}
// 这种方式只适合纯数据类型
function flattenByToString(arr){
    return arr.toString().split(',').map(ele=> +ele);
}
//
function flattenByReduce(arr){
    return arr.reduce((prev,curr,index)=>{
        if(Array.isArray(curr)){
            prev = prev.concat(flattenByReduce(curr))
        }else{
            prev.push(curr);
        }
        return prev
    },[])
}
/**
 * 数组拉平
 * @param {输入的数组} arr 
 * @param {只做一层扁平} shallow 
 * @param {是否去除非数组元素} strict 
 * @param {递归中的结果} output 
 */
function flatten(arr,shallow,strict,output){
    output = output || [];
    let index = output.length;   // 全局通过此索引进行添加数据
    for(let i = 0; i < arr.length; i ++){  // 开始循环
        if(arr[i] instanceof Array){      // 判断是否为数组
            if(shallow){                    // 是否浅扁平 
                for(let j = 0; j < arr[i].length; j ++){
                    output[index++] = arr[i][j];
                }
            }else{
                flatten(arr[i],shallow,strict,output);  // 递归
                index = output.length;   // 等会递归回来更新
            }
        }else if(!strict){
            output[index++] = arr[i]
        }
    }
    return output;
}

//test

const arr = [1,2,3,4,5,[6,7,8,9,[10,11,12,[13,14,15]]]]
console.log(arr.flat())