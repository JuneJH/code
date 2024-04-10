// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 每个右括号都有一个对应的相同类型的左括号。

function isValid(s) {
    const statck = [];
    const symbolMap = {
        "(": ")",
        "{": "}",
        "[": "]"
    }
    for (let i = 0; i < s.length; i++) {
        const item = s[i];
        if (item in symbolMap) {
            statck.push(item);
        } else {
            if (symbolMap[statck.pop()] !== item) {

                return false;
            }
        }
    }
    return !statck.length;
};

module.exports = {
    isValid
}