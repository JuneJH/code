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

module.exports = {
    curry
}