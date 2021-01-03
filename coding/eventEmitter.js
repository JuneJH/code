  // class EventEmitter {
      //   constructor() {
      //     this.cache = {};  // 中间控制层
      //   }
      //   on(type, handle) {
      //     if (!Array.isArray(this.cache[type])) {
      //       this.cache[type] = [];
      //     }
      //     this.cache[type].push(handle);
      //   }
      //   once(type, handle) {
      //     const self = this;
      //     function _fn(...args) {
      //       handle.call(this, ...args);
      //       self.off(type, _fn);
      //     }
      //     this.on(type,_fn);
      //   }
      //   off(type, handle) {
      //     if (Array.isArray(this.cache[type])) {
      //       this.cache[type] = this.cache[type].filter((fn) => fn != handle);
      //     }
      //   }
      //   emit(type, ...args) {
      //     if (Array.isArray(this.cache[type])) {
      //       this.cache[type].forEach((fn) => {
      //         fn.call(this, ...args);
      //       });
      //     }
      //   }
      // }

      function a(...params) {
        console.log("this is a funciton!!!", "parms", params);
      }
      function b(...params) {
        console.log("this is b funciton!!!", "parms", params);
      }
      function c(...params) {
        console.log("this is c funciton!!!", "parms", params);
      }
      // const e = new EventEmitter();
      // e.on("c", a);
      // e.on("c", b);
      // e.once("c", c);



      class EventControl{
        constructor(){
          this.cache = [];
        }
        emit(...args){
          this.cache.forEach(fn=>{
            fn.call(this,...args);
          })
        };
        on(who,handle){
          who.cache.push(handle);
        }
        once(who,handle){
          function _fn(...args){
            handle.call(this,...args);
            who.off(who,_fn);
          }
          who.on(who,_fn);
        }
        off(who,handle){
          who.cache = who.cache.filter(fn=>fn != handle);
        }
      }

      const eventTargt = new EventControl();
      const e = new EventControl();


      e.on(eventTargt,a);
      e.on(eventTargt,b);
      e.once(eventTargt,b)
