function myAjax(options) {
    if (!options || typeof options != 'object') return;
    const type = options.type ? options.type : 'get';
    let url = options.url ? options.url : location.pathname;
    const async = options.async == false ? false : true;
    const params = getParams(options.params);
    const xhr = new XMLHttpRequest();
    if (type == 'get') {
        url=url +'?'+params
        console.log(url)
    }
    if (type == 'post') {
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
    }
    xhr.open(type, url, async);

    xhr.send(params)
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                const contentType = xhr.getResponseHeader('content-type');
                let data = null;
                if (contentType.includes('json')) {
                    data = JSON.parse(xhr.responseText)
                } else if (contentType.includes('xml')) {
                    data = xhr.responseXML
                } else {
                    data = xhr.responseText
                }
                options.success && options.success(data)
            } else {
                options.error && options.error(xhr.responseText)
            }
        }
    }
}
function getParams(params) {
    if (!params) return null;
    const result = [];
    for (const key in params) {
        if (params.hasOwnProperty(key)) {
             result.push(`${key}=${params[key]}`)
        }
    }
    return result.join('&')
}