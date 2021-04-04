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

function add(a){
    return a + 10;
}

function d (a){
    return a * 10;
}

const fn = compose(add,d);

const result = fn(10);
console.log("最终结果",result);

