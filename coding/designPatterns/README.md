# 设计模式


## 1. 发布-代理模式

- 实现一个Event
```js
class EventEmitter {
    constructor() {
      this.cache = {};  // 中间控制层
    }
    on(type, handle) {
      if (!Array.isArray(this.cache[type])) {
        this.cache[type] = [];
      }
      this.cache[type].push(handle);
    }
    once(type, handle) {
      const self = this;
      function _fn(...args) {
        handle.call(this, ...args);
        self.off(type, _fn);
      }
      this.on(type,_fn);
    }
    off(type, handle) {
      if (Array.isArray(this.cache[type])) {
        this.cache[type] = this.cache[type].filter((fn) => fn != handle);
      }
    }
    emit(type, ...args) {
      if (Array.isArray(this.cache[type])) {
        this.cache[type].forEach((fn) => {
          fn.call(this, ...args);
        });
      }
    }
  }
```