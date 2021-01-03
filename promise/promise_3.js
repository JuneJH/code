const PENDING = 'pending',
      RESOLVE = 'resolve',
      REJECT = 'reject';
function MyPromise (executor) {
    this.pending = PENDING;
    this.value = undefined;
    this.thenable = [];
    this.catchable = [];
    const that = this;
    
    function settle(data,state,queue){
        if(that.pending != PENDING) return;
        that.pending = state;
        that.value = data;
        queue.forEach(fn=>{
            fn(data)
        })

    }
    function resolve (data) {
        settle(data,RESOLVE,that.thenable);
    }
    function reject (e) {
        settle(e,REJECT,that.catchable)
    }
    try{
        executor(resolve,reject);
    }catch(e){
        reject(e);
    }
}
function getNewHandle(handle,resolve,reject){
    return ((data)=>{
        const result = handle(data);
       try{
        if(result instanceof MyPromise){
            result.then(res=>{
                resolve(res)
            },err=>{
                reject(err)
            })
        }else{
            resolve(result)
        }
       }catch(e){
           reject(e)
       }
    })
}
function getMyPrmise(thenHandle,catchHandle,that){
    return new MyPromise((resolve,reject)=>{
        const newThenHandle = getNewHandle(thenHandle,resolve,reject)
        const newCatchHandle = getNewHandle(catchHandle,resolve,reject)
        if(that.pending == RESOLVE){
            setTimeout(()=>{
                newThenHandle(that.value)
            })
        }else{
            that.thenable.push(newThenHandle);
        }
        if(that.pending == REJECT){
            setTimeout(()=>{
                newCatchHandle(that.value)
            })
        }else{
            that.catchable.push(newCatchHandle);
        }
        
    })

}
MyPromise.prototype.then = function (thenHandle,catchHandle){
    return getMyPrmise(thenHandle,catchHandle,this)
}
MyPromise.prototype.catch = function (catchHandle){
    return getMyPrmise(undefined,catchHandle,this);
}

MyPromise.all = function (iterable){
    return new MyPromise((resolve,reject)=>{
        const result = iterable.map(p=>{
            const obj = {
                data:null,
                isSettle:false,
            }
            p.then(res=>{
                obj.data = res;
                obj.isSettle = true;
                const re = result.filter(ele => !ele.isSettle)
                if(re.length == 0){
                    resolve(result.map(ele=>ele.data));
                }
            },err=>{
                reject(err)
            })

            return obj;
        })
    })
}

MyPromise.race = function(iterable){
    return new MyPromise((resolve,reject)=>{
        iterable.forEach(p=>{
            p.then(res=>{
                resolve(res);
            },err=>{
                reject(err)
            })
        })
    })
}
MyPromise.resolve = function(params){
    return new MyPromise((resolve,reject)=>{
        if(params instanceof MyPromise){
            params.then(res=>{
                resolve(res)
            },err=>{
                reject(err)
            })
        }else{
            resolve(params)
        }
    })
}
MyPromise.reject = function(data){
    return new MyPromise((resolve,reject)=>{
        reject(data)
    })
}