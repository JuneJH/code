const { diff } = require("../src/diff");
const {Node} = require("../src/utils")


test("比较二叉树",()=>{
    const a = new Node('a');
    const b = new Node('b');
    const c = new Node('c');
    const d = new Node('d');
    const e = new Node('e');
    const f = new Node('f');
    const g = new Node('g');

    const a1 = new Node('a');
    const b1 = new Node('b');
    const c1 = new Node('c1');
    const d1 = new Node('d');
    const e1 = new Node('e');
    const f1 = new Node('f');
    const g1 = new Node('g1');

    a.left = b;
    a.right = c;

    b.left = d;
    b.right = e;

    c.left = f1;
    c.right = g;

    a1.left = b1;
    a1.right = c1;

    b1.left = d1;
    b1.right = e1;

    c1.left = f1;
    c1.right = g1;
    const result = diff(a,a1,[]);
    expect(result).toEqual([]);
})