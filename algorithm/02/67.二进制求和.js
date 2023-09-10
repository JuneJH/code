/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let i = a.length - 1,j = b.length - 1;
    let carry = 0;
    let result = "";
    while(i >= 0 || j >= 0){
        const v0 = i >= 0 ? +a[i--] : 0;
        const v2 = j >= 0 ? +b[j--] : 0;

        const res = carry + v0 + v2;
        if(res > 2){
            carry = res % 2;
            result = "1" + result;
        }else
        if(res == 2){
            carry = 1; 
            result = "0"+ result;
        }else{
            carry = 0;
            result = res+result;
        }
    }

    if(carry > 0){
          result =carry + result;
    }
    return result;

};