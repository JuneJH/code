# 性能优化相关

## 1. 节流

```js
/**
 * 节流
 * @param {*} handle 
 * @param {*} delay 
 * @returns 
 */
function debounce(handle,delay){
    let timer = null;
    let that = this; // 这里保存this反而弄巧成拙
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(()=>{
            handle.call(that,...args)
        },delay)
    }
}

```

## 2. 防抖

```js
/**
 * 防抖
 * @param {*} handle 
 * @param {*} wait 
 * @returns 
 */
function throttle(handle,wait){
    let lastTime = 0;
    return function(...args){
        let nowTime = +new Date();
        if(nowTime - lastTime > wait){
            handle.call(this,...args);
        }
    }
}
```