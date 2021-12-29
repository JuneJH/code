function myAjax (options){
    // 判断是否传入参数
    if(!options || typeof options != 'object') return;
    // 处理参数,一些默认参数
    const type = options.type || 'get';
    let url = options.url || location.pathname;
    const async = options.async == false ? false : true;
    const params = getParams(options.params);
    // 创建一个XMLHttpRequest对象
    const xhr = new XMLHttpRequest();
    // 判断是否为get请求方法，并处理业务数据
    if(type == 'get'){
        url = url + '?' + params;
    }
    xhr.open(type,url,async);
    // 判断，如果为post请求方法，需要设置请求体的编码格式
    if(type == 'post'){
        xhr.setRequestHeader('content-type','application/x-WWW-from-urlencoded');
    }
    // 设置请求参数
    xhr.send(params);
    // 监听事件
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4){   // 共有5个值，4的时候为完成状态
            if(xhr.status == 200){ // 状态码
                let data = null;
                // 得到响应头的content-type，处理数据
                const contentType = xhr.getResponseHeader('content-type');
                if(contentType.indexOf('json') > -1){
                    data =  JSON.parse(xhr.responseText);
                }else if(contentType.indexOf('xml') > -1){
                    data = xhr.responseXML;
                }else{
                    data = xhr.responseText;
                }
                options.success && options.success(data);
            }else{
                options.error && options.error(xhr.responseText)
            }
        }
    }

}
function getParams(params){
    if(!params) return;
    const arr = [];
    for (const key in params) {
        if (params.hasOwnProperty(key)) {
            arr.push(key + '=' + params[key])
        }
    }
    return arr.join('&');
    
}
