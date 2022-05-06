# 栈

> 先进后出
> 可以通过数组或者链表实现该数据结构

## 1. 基础栈

```js
var MinStack = function() {
    this.container = [];

};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.container.push(val);

};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    return this.container.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.container[this.container.length - 1]


};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if(this.container.length < 0){
        return null;
    }
    let min = this.container[0];
    for(let i = 0; i < this.container.length; i ++){
        if(min > this.container[i]){
            min = this.container[i];
        }
    }
    return min;

};

```
