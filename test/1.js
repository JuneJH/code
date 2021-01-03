// call
Function.prototype.myCall = function (obj, ...args) {
    if (!obj) {
        obj = typeof window === 'undefined' ? global : window;
    };
    const func = Symbol('func');
    obj[func] = this;
    const result = obj[func](...args);
    delete obj[func];
    return result;
}
// apply
Function.prototype.myApply = function (obj, args) {
    if (!obj) {
        obj = typeof window == 'undefined' ? global : window;
    }
    const func = Symbol('func');
    obj[func] = this;
    const result = obj[func](...args);
    delete obj[func];
    return result;

}
// bind
Function.prototype.myBind = function (obj, ...args) {
    if (!obj) {
        obj = typeof window === 'undefined' ? global : window;
    }
    const func = Symbol('func');
    const that = this;
    const temp = function () { };
    function fn(...params) {
        if(new.target){
            obj = this
        }
        if (!obj[func]) {
            obj[func] = that;
        }
        args = [...args, ...params]
        const result = obj[func](...args);
        delete obj[func];
        return result;
    }
    temp.prototype = obj.prototype;
    fn.prototype = new temp();
    return fn;
}

// clone
function clone(obj){
    if(obj instanceof Array){
        return cloneArray(obj);
    }else if(obj instanceof Object){
        return cloneObject(obj)
    }else{
        return obj;
    }
}
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

// curry
function curry(fn,...args){
    return function (...params) {
        args = [...args,...params];
        if(args.length >= fn.length){
            return fn(...args);
        }else{
           return curry(fn,...args)
        }
    }
}

// debounce
function debounce(handle,delay){
    let timer = null;
    // let that = this; // 这里保存this反而弄巧成拙
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(()=>{
            handle.call(that,...args)
        },delay)
    }

}

// throttle
function throttle(handle,wait){
    let lastTime = 0;
    return function(...args){
        let nowTime = +new Date();
        if(nowTime - lastTime > wait){
            handle.call(this,...args);
        }
    }
}

// flatten
function flatten(arr,shallow,strict,output){
    output = output || [];
    let index = output.length;
    for(let i = 0; i < arr.length; i ++){
        if(arr[i] instanceof Array){
            if(shallow){
                arr[i].forEach(ele=>{
                    output[index++] = ele;
                })
            }else{
                flatten(arr[i],shallow,strict,output);
                index = output.length;
            }
        }else if(!strict){
             output[index++] = arr[i]
        }
    }
   return output;
}
