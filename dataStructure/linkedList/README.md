# 链表

- 与数组的特性 几乎相反
- 数据存储不要求连续空间，不要求容量大小，只存在逻辑顺序
- 插入数据的时间复杂度是O(1)，查找数据O(n)
- 链表的最后一个的next指向null

## 1. 创建链表

```js
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
```

## 2. 遍历链表

```js
function nodeEach (root) {
    const result = [];
    while(root != null){
       result.push(root.val);
        root = root.next;
    }
    return result;
}
```

## 3. 逆转链表

- 递归版
```js
function nodeReverse(root) {
    if(root.next.next == null){
        root.next.next = root;
        return root.next;
    }else{
        const result = nodeReverse(root.next)
        root.next.next = root;
        root.next = null;
        return result;
    }
}
```
- 迭代版

## 3. 求链表长度

```js
function nodeLength (root) {
    let len = 0;
    while(root !== null) {
        len ++;
        root = root.next;
    }
    return len;
}
```

## 4. 获取下标位置的值

```js
function getValueIndex (root,index){
    let len = 0;
    while(root != null){
        if(len == index){
            return root.val;
        }
        len ++;
        root = root.next;
    }
}
```

## 5. 判断环线链表

```js
function hasCycle(head) {
    if(!head || !head.next)return false;
    let f = head;
    let s = head;
    while(f && f.next){
        f= f.next.next;
        s = s.next;
        if(f === s)return true;
    }
    return false;
 }
```

## 6. 合并有序链表

- 迭代方式

```js
function mergeTwoLists(list1, list2) {
    const result = {val:0,next:null};
    let pre = result;
    while(list2 && list1){
        if(list1.val > list2.val){
            pre.next = list2;
            list2 = list2.next;
        }else{
            pre.next = list1;
            list1 = list1.next;
        }
        pre = pre.next;
    }
    pre.next = list1 ? list1:list2;
    return result.next;
 };
```
- 递归方式
```js
function mergeTwoLists (list1, list2) {
     if(!list1){
         return list2;
     }else if(!list2){
         return list1
     }else {
         if(list1.val > list2.val){
              list2.next = mergeTwoLists(list2.next,list1);
              return list2;
         }else{
             list1.next = mergeTwoLists(list1.next,list2);
             return list1
         }
     }
 };
```
## 7. 删除有序链表中重复的数据

```js
function deleteDuplicates(head) {
    if(head === null)return head;
    const result = head;
    while(head && head.next){
        if(head.val === head.next.val){
            head.next = head.next.next;
        }else{
            head = head.next;
        }
    }
    return result;
}
```
