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

module.exports = {
    debounce
}