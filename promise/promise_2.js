const PENDING = 'pending',
    RESOLVED = 'resolved',
    REJECTED = 'rejected'
function MyPromise(executor) {
    const that = this;
    this.pending = PENDING;
    this.value = undefined;
    this.thenable = [];
    this.catchable = [];

    function changeState(data, state, queue) {
        if (that.pending != PENDING) return;
        that.pending = state;
        that.value = data;
        queue.forEach(fn => {
            fn(data)
        })
    }

    function resolve(data) {
        setTimeout(() => {
            changeState(data, RESOLVED, that.thenable)
        })
    }
    function reject(err) {
        setTimeout(() => {
            changeState(err, REJECTED, that.catchable)
        })

    }
    try {
        executor(resolve, reject)
    } catch (e) {
        reject(e)
    }
}
function getPromise(thenHandle, catchHandle, that) {
    return new MyPromise((resolve, reject) => {
        if (thenHandle) {
            const newThenHandle = (data) => {
                const result = thenHandle(data);
                try {
                    if (result instanceof MyPromise) {
                        result.then(resp => {
                            resolve(resp)
                        }, err => {
                            reject(err)
                        })
                    } else {
                        resolve(result)
                    }
                } catch (e) {
                    reject(e)
                }
            }
            if (that.pending == RESOLVED) {
                setTimeout(() => {
                    newThenHandle(that.value)
                })
            } else {
                that.thenable.push(newThenHandle);
            }
        }
        if (catchHandle) {
            const newCatchHandle = (err) => {
                const result = catchHandle(err);
                try {
                    resolve(result)
                } catch (e) {
                    reject(e)
                }
            }

            if (that.pending == REJECTED) {
                setTimeout(() => {
                    newCatchHandle(that.value)
                })
            } else {
                that.catchable.push(newCatchHandle)
            }


        }
    })

}
MyPromise.prototype.then = function (thenHandle, catchHandle) {
    return getPromise(thenHandle, catchHandle, this)

}
MyPromise.prototype.catch = function (catchHandle) {
    return getPromise(undefined, catchHandle, this)
}

MyPromise.all = function (iterable){
    return new MyPromise((resolve,reject)=>{
         const result = iterable.map(p=>{
             const obj ={
                 data:null,
                 isSettle:false,
             }
             p.then(res=>{
                 obj.data = res;
                 obj.isSettle = true;
                 const re = result.filter(ele=>!ele.isSettle)
                 if(re.length == 0){
                     resolve(result);
                 }
             },err=>{
                 reject(err)
             })
             return obj;
         })
    })
}

MyPromise.race = function (iterable){
    return new MyPromise((resolve,reject)=>{
        iterable.forEach(p=>{
            p.then(res=>{
                resolve(res)
            },err=>{
                reject(err)
            })
        })
    })
}

MyPromise.reject = function (data){
    return new MyPromise((resolve,reject)=>{
        reject(data)
    })

}
MyPromise.resolve = function (data){
    return new MyPromise((resolve,reject)=>{
        if(data instanceof MyPromise){
            return data
        }else{
            resolve(data)
        }

    })
}