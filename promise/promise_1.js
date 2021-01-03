function MyPromise(executor) {
    this.promiseState = 'pending';
    this.promiseValue = 'undefined';
    this.thenList = [];
    this.catchList = [];
    this.changeState = (data, state, queue) => {
        if (this.promiseState != "pending") return;
        this.promiseState = state;
        this.promiseValue = data;
        queue.forEach(ele => {
            ele(data);
        })

    }
    const resolve = (data) => {
        this.changeState(data, 'resolved', this.thenList)
    }
    const reject = (data) => {
        this.changeState(data, 'rejected', this.catchList)

    }
    try {
        executor(resolve, reject);
    } catch (err) {
        reject(err);
    }

    this.then = (thenable, catchable) => {
        // catchable && this.catch(catchable)
        return new MyPromise((resolve, reject) => {
            const newThenable =function (data)  {
                try {
                    const result = thenable(data)
                    if(result instanceof MyPromise){
                        result.then(res=>{
                            resolve(res)
                        },err=>{
                            reject(err)
                        })
                    }else{
                        resolve(result);
                    }
                    
                } catch (err) {
                    reject(err)
                }
            }
            if (this.promiseState == 'resolved') {
                newThenable(this.promiseValue)
            } else {
                this.thenList.push(newThenable)
            }
            const newCatchable = function (err) {
                try {
                    const result = catchable(err);
                    if(result instanceof MyPromise){
                        result.then(res=>{
                            resolve(res)
                        },err=>{
                            reject(err)
                        })
                    }else{
                        resolve(result)
                    }
                    
                } catch (err) {
                    reject(err)
                }
            }
            if (this.promiseState == 'rejected') {
                newCatchable(this.promiseValue)
            } else {
                this.catchList.push(newCatchable)
            }
          
        })
    };
    this.catch = (catchable) => {
        return new MyPromise((resolve, reject) => {
            const newCatchable = function (err) {
                try {
                    const result = catchable(err);
                    if(result instanceof MyPromise){
                        result.then(res=>{
                            resolve(res)
                        },err=>{
                            reject(err)
                        })
                    }else{
                        resolve(result)
                    }
                    
                } catch (err) {
                    reject(err)
                }
            }
            if (this.promiseState == 'rejected') {
                newCatchable(this.promiseValue)
            } else {
                this.catchList.push(newCatchable)
            }
        })
    }
}

MyPromise.all = function(iterable){
    return new MyPromise((resolve,reject)=>{
        const result = iterable.map(p=>{
            const obj = {
                data:null,
                isSettle:false,
            }
            p.then(res=>{
                obj.data = res;
                obj.isSettle = true;
                const re = result.filter(p=>!p.isSettle)
                if(re.length == 0){
                    resolve(result.map(p=>p.data));
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
                   resolve(res)
               },err=>{
                   reject(err)
               })
           })
    })
    
}
MyPromise.resolve = function(params){
    if(params instanceof MyPromise){
        return params;
    }else{
        return new MyPromise((resolve)=>{
            resolve(params)
        })
    }
    
}
MyPromise.reject = function(params){
    return new MyPromise((resolve,reject)=>{
        reject(params)
    })
    
}