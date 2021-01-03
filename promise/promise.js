const MyPromise = (function () {
    const PENDING = 'pending',
        RESOLVE = 'resolve',
        REJECT = 'reject',
        promiseState = Symbol('promiseState'),
        promiseValue = Symbol('promseValue'),
        changeState = Symbol('changeState'),
        thenList = Symbol('thenList'),
        catchList = Symbol('catchList'),
        settle = Symbol('settle'),
        linkPromse = Symbol('linkPromse');


    return class MyPromise {
        [changeState](data, state,queue) {
            if (this[promiseState] != PENDING) return;
            this[promiseState] = state;
            this[promiseValue] = data;
            queue.forEach(ele=>{
                ele(data);
            })

        }
        constructor(execute) {
            this[promiseState] = PENDING;
            this[promiseValue] = 'undefined';
            this[thenList] = [];
            this[catchList] = [];
            const that = this;
            const resolve = function (data) {
                that[changeState](data, RESOLVE,that[thenList])

            }
            const reject = function (err) {
                that[changeState](err, REJECT,that[catchList])
            }

            try {
                execute(resolve, reject);
            } catch (err) {
                reject(err)
            }

        }
        [settle](handle, queue, state) {
            if(typeof handle != 'function') return;
            if (this[promiseState] == state) {
                setTimeout(()=>{
                    handle(this[promiseValue]);
                },0)
            } else {
                queue.push(handle)
            }
        }
        [linkPromse](thenable,catchable){
            return new MyPromise((resolve,reject)=>{
                this[settle]((data)=>{
                    try{
                        const result = thenable(data);
                        if(result instanceof MyPromise){
                            result.then(res=>{
                                resolve(res);
                            },err=>{
                                reject(err);
                            })
                        }else{
                            resolve(result)
                        }
                        
                    }catch(err){
                        reject(err)
                    }
                },this[thenList],RESOLVE)
                this[settle]((data)=>{
                    try{
                        const result = catchable(data);
                        if(result instanceof MyPromise){
                            result.then(res=>{
                                resolve(res);
                            },err=>{
                                reject(err);
                            })
                        }else{
                            resolve(result)
                        }
                    }catch(err){
                        reject(err)
                    }
                },this[catchList],REJECT)
              
            })
        }
        then(thenable, catchable) {
            return this[linkPromse](thenable,catchable)
           
        }
        catch(catchable) {
            return this[linkPromse](undefined,catchable)

        }
        static all(iterable){
            return new MyPromise((resolve,reject)=>{
               const result =  iterable.map(p=>{
                    const obj = {
                        isSettle:false,
                        data:null
                    }
                    p.then(resp=>{
                        obj.data = resp;
                        obj.isSettle = true;
                        let re = result.filter(ele=>{
                            return !ele.isSettle
                        })
                        if(re.length == 0){
                            resolve(result.map(ele=>ele.data))
                        }
                    },err=>{
                        reject(err)
                    })
                    return obj;
                })
            })

        }
        static race(iterable){
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
        static resolve(params){
            if(params instanceof MyPromise){
                 return params;
            }
            return new MyPromise((resolve,reject)=>{
                resolve(params)
            })

        }
        static reject(parmas){
            return new MyPromise((resolve,reject)=>{
                reject(parmas);
            })
        }
    }
})()