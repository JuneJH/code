const { simplifyPath } = require('../71. 简化路径');

test("测试=》71. 简化路径", () => {
    expect(simplifyPath("/home/")).toBe("/home");
    expect(simplifyPath("/../")).toBe("/");
    expect(simplifyPath("/home//foo/")).toBe("/home/foo");
    expect(simplifyPath("/a/./b/../../c/")).toBe("/c");
})