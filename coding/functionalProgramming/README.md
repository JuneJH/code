# 函数编程

## 1. 函数合成

```js
/**
 * 函数组合
 * @param  {接受需要组合的函数,函数自右向左运行} funcs 
 */
function compose(...funcs){
    if(funcs.length === 0){
        return args=>args;
    }else if(funcs.length === 1){
        return args=>funcs[0](args);
    }

    return function(args){
        return funcs.reduceRight((args,fn)=>{
            return fn(args);
        },args)
    }
}
```

## 2. curry

```js
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

```
