var longestCommonSubsequence = function(text1, text2) {
    const cache = [];
 
    return func(text1,text2).length
    function func(text1,text2){
        for(let i = 0; i < cache.length; i ++){
            if(cache[i].text1 == text1 && cache[i].text2 == text2){
                return cache[i].result;
            } 
        }
        let obj ={
            text1,
            text2,
            result:""
        }
        if(!text1 || !text2) obj.result = "";
        else if(text1[0] == text2[0]){
            obj.result = text1[0] + func(text1.substr(1),text2.substr(1));
        }else{
            let str1 = func(text1,text2.substr(1));
            let str2 = func(text1.substr(1),text2);
            if(str1.length > str2.length){
                obj.result = str1;
            }else{
                obj.result = str2;
            }
        }
        cache.push(obj);
        return obj.result;
    }
    
};