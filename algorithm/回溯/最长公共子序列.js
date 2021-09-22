
function fn1(str1, str2) {
    const ceche = [];
    return fn(str1, str2);

    function fn(str1, str2) {

        for (let i = 0; i < ceche.length; i++) {
            if (ceche[i].str1 == str1 && ceche[i].str2 == str2) {
                return ceche[i].result;
            }
        }
        const obj = {
            str1,
            str2,
            result: null
        }
        if (!str1 || !str2) obj.result = "";
        else if (str1[0] == str2[0]) {
            obj.result = str1[0] + fn(str1.substr(1), str2.substr(1))
        } else {
            let s1 = fn(str1, str2.substr(1));
            let s2 = fn(str1.substr(1), str2);
            if (s1.length > s2.length) {
                obj.result = s1;
            } else {
                obj.result = s2;
            }
        }
        ceche.push(obj);
        return obj.result;
    }

}

var longestCommonSubsequence = function (text1, text2) {
    let t1Len = text1.length;
    let t2Len = text2.length;
    const dp = new Array(t1Len + 1);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(t2Len + 1)
        dp[i][0] = 0;
    }
    dp[0].fill(0)
     for(let i = 1; i <= t1Len; i ++){
         for(let j = 1; j <= t2Len; j ++){
             if(text1[i - 1] == text2[j - 1]){
                 dp[i][j] = 1 + dp[i - 1][j - 1]
             }else{
                 dp[i][j] = Math.max(dp[i - 1][j],dp[i][j - 1])
             }
         }
     }

    return dp[t1Len][t2Len]
};


let text1 = "abcd", text2 = "abcd";
console.log(longestCommonSubsequence(text1, text2))
// console.log(fn1('abcddsfghjasfdgearsfd','abdasdfgsdfghfsghj'))