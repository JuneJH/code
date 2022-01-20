const {isSameTree} = require("../src/比较二叉树");
const {Node} = require("../src/utils")


test("比较二叉树",()=>{
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
    expect(isSameTree(a,_a)).toBe(false);
})