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

module.exports = {
    throttle
}