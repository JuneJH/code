function Jsonp(src,params,callbackKey,callback){
    Jsonp.fns || (Jsonp.fns = []);
    Jsonp.keys || (Jsonp.keys = 0);

    Jsonp.fns[Jsonp.keys] = callback;

    params[callbackKey] = `Jsonp.fns[${Jsonp.keys}]`;

    const str = Object.keys(params).map(key=>`${key}=${params[key]}`).join("&");

    const script = document.createElement("script");
    script.src = src + "?" + str;
    document.body.append(script);
    Jsonp.keys ++;
}