const {preOrder,preOrder4Stack} = require("../src/先序遍历");
const {ldr,ldr4stack} = require("../src/中序遍历");
const {lrd} = require("../src/后序遍历");
const {Node} = require("../src/utils")


test("先序遍历",()=>{
    const a = new Node(1); //           1
    const b = new Node(2); //      2             3
    const c = new Node(3); //  4       5     6       7
    const d = new Node(4);
    const e = new Node(5);
    const f = new Node(6);
    const g = new Node(7);
    a.left = b;
    a.right = c;

    b.left = d;
    b.right = e;

    c.left = f;
    c.right = g;
    const _a = a.left;
    expect(preOrder(a)).toMatchObject([1,2,4,5,3,6,7]);
    expect(preOrder4Stack(a)).toMatchObject([1,2,4,5,3,6,7]);
})

test("中序遍历",()=>{
    const a = new Node(1); //           1
    const b = new Node(2); //      2             3
    const c = new Node(3); //  4       5     6       7
    const d = new Node(4);
    const e = new Node(5);
    const f = new Node(6);
    const g = new Node(7);
    a.left = b;
    a.right = c;

    b.left = d;
    b.right = e;

    c.left = f;
    c.right = g;
    const _a = a.left;
    expect(ldr(a)).toMatchObject([4,2,5,1,6,3,7]);
    expect(ldr4stack(a)).toMatchObject([4,2,5,1,6,3,7]);

   
})

test("后序遍历",()=>{
    const a = new Node(1); //           1
    const b = new Node(2); //      2             3
    const c = new Node(3); //  4       5     6       7
    const d = new Node(4);
    const e = new Node(5);
    const f = new Node(6);
    const g = new Node(7);
    a.left = b;
    a.right = c;

    b.left = d;
    b.right = e;

    c.left = f;
    c.right = g;
    const _a = a.left;
    expect(lrd(a)).toMatchObject([4,5,2,6,7,3,1]);
    expect(lrd(a)).toMatchObject([4,5,2,6,7,3,1]);
});