# Javascript中克隆对象

> 在JavaScript中通过赋值操作复制对象的引用地址

## 1. 通过JSON方式实现克隆

## 2. 浅克隆

## 3. 实现一个深度克隆

```js
/**
 * 深度clone对象
 * @param obj 目标对象
 * @returns {any[]|*|{}}
 */
function clone(obj){
    if(obj instanceof Array){
        return cloneArray(obj);
    }else if(obj instanceof Object){
        return cloneObject(obj)
    }else{
        return obj;
    }
}

/**
 * 深度克隆数组
 * @param arr 需要克隆的数组
 * @returns {any[]}
 */
function cloneArray(arr){
    const result = new Array(arr.length);
    for(let i = 0; i < arr.length; i++){
        if(arr[i] instanceof Object){
            result.push(clone(arr[i]))
        }else{
            result.push(arr[i])
        }
    }
    return result;
}

/**
 * 深度克隆对象
 * @param obj 需要克隆的对象
 * @returns {{}}
 */
function cloneObject(obj){
    const result = {};
    Object.getOwnPropertyNames(obj).forEach(ele =>{
        if(ele instanceof Object){
            result[ele] = clone(obj[ele]);
        }else{
            result[ele] = obj[ele];
        }
    })
    return result;
}
```