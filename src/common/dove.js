// shal
; const eutf8 = s => { var i, r = [], c, x; for (i = 0; i < s.length; i++)if ((c = s.charCodeAt(i)) < 0x80) r.push(c); else if (c < 0x800) r.push(0xC0 + (c >> 6 & 0x1F), 0x80 + (c & 0x3F)); else { if ((x = c ^ 0xD800) >> 10 == 0) c = (x << 10) + (s.charCodeAt(++i) ^ 0xDC00) + 0x10000, r.push(0xF0 + (c >> 18 & 0x7), 0x80 + (c >> 12 & 0x3F)); else r.push(0xE0 + (c >> 12 & 0xF)); r.push(0x80 + (c >> 6 & 0x3F), 0x80 + (c & 0x3F)) }; return r }; const sha1 = s => { var data = new Uint8Array(eutf8(s));var i, j, t; var l = ((data.length + 8) >>> 6 << 4) + 16, s = new Uint8Array(l << 2); s.set(new Uint8Array(data.buffer)), s = new Uint32Array(s.buffer); for (t = new DataView(s.buffer), i = 0; i < l; i++)s[i] = t.getUint32(i << 2); s[data.length >> 2] |= 0x80 << (24 - (data.length & 3) * 8); s[l - 1] = data.length << 3; var w = [], f = [function () { return m[1] & m[2] | ~m[1] & m[3] }, function () { return m[1] ^ m[2] ^ m[3] }, function () { return m[1] & m[2] | m[1] & m[3] | m[2] & m[3] }, function () { return m[1] ^ m[2] ^ m[3] }], rol = function (n, c) { return n << c | n >>> (32 - c) }, k = [1518500249, 1859775393, -1894007588, -899497514], m = [1732584193, -271733879, null, null, -1009589776]; m[2] = ~m[0], m[3] = ~m[1]; for (i = 0; i < s.length; i += 16) { var o = m.slice(0); for (j = 0; j < 80; j++)w[j] = j < 16 ? s[i + j] : rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1), t = rol(m[0], 5) + f[j / 20 | 0]() + m[4] + w[j] + k[j / 20 | 0] | 0, m[1] = rol(m[1], 30), m.pop(), m.unshift(t); for (j = 0; j < 5; j++)m[j] = m[j] + o[j] | 0 }; t = new DataView(new Uint32Array(m).buffer); for (var i = 0; i < 5; i++)m[i] = t.getUint32(i << 2); var hex = Array.prototype.map.call(new Uint8Array(new Uint32Array(m).buffer), function (e) { return (e < 16 ? "0" : "") + e.toString(16) }).join(""); return hex };

// Cookies (Original file: /npm/js-cookie@2.2.1/src/js.cookie.js)
!function(e){var n;if("function"==typeof define&&define.amd&&(define(e),n=!0),"object"==typeof exports&&(module.exports=e(),n=!0),!n){var t=window.Cookies,o=window.Cookies=e();o.noConflict=function(){return window.Cookies=t,o}}}(function(){function e(){for(var e=0,n={};e<arguments.length;e++){var t=arguments[e];for(var o in t)n[o]=t[o]}return n}function n(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function t(o){function r(){}function i(n,t,i){if("undefined"!=typeof document){"number"==typeof(i=e({path:"/"},r.defaults,i)).expires&&(i.expires=new Date(1*new Date+864e5*i.expires)),i.expires=i.expires?i.expires.toUTCString():"";try{var c=JSON.stringify(t);/^[\{\[]/.test(c)&&(t=c)}catch(e){}t=o.write?o.write(t,n):encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=encodeURIComponent(String(n)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var f="";for(var u in i)i[u]&&(f+="; "+u,!0!==i[u]&&(f+="="+i[u].split(";")[0]));return document.cookie=n+"="+t+f}}function c(e,t){if("undefined"!=typeof document){for(var r={},i=document.cookie?document.cookie.split("; "):[],c=0;c<i.length;c++){var f=i[c].split("="),u=f.slice(1).join("=");t||'"'!==u.charAt(0)||(u=u.slice(1,-1));try{var a=n(f[0]);if(u=(o.read||o)(u,a)||n(u),t)try{u=JSON.parse(u)}catch(e){}if(r[a]=u,e===a)break}catch(e){}}return e?r[e]:r}}return r.set=i,r.get=function(e){return c(e,!1)},r.getJSON=function(e){return c(e,!0)},r.remove=function(n,t){i(n,"",e(t,{expires:-1}))},r.defaults={},r.withConverter=t,r}(function(){})});

/**
 * 信鸽(API客户端SDK)
 * @author Focrs<focrs@kunquer.com>
 * @copyright 2019 Kunquer, Co.,Ltd
 * @since 2019-06-01
 */
class Dove {
    
    constructor(config) {
        // debug开关
        this.debug = config.debug;
        // 客户端ID
        this.id = config.id;
        // 客户端KEY
        this.key = config.key;
        // API端点
        this.url = config.url;
        // API版本号
        this.version = config.version,
        // 登录终端
        this.terminal = config.terminal;
        // 语言
        this.lang = config.lang || 'en';
        // 授权码信息
        this._token = {
            status: config.token.status, // token身份信息接口
            offline: config.token.offline || null, // 当前登录会话无效后需要进行的操作
            secure: true === config.token.secure // token是否安全处理
        };
    }
    
    /**
     * 获取token信息
     * @param string value token值
     */
    token() {
        if(Cookies.get('token')) {
            let [token, terminal] = Cookies.get('token').split('|');
            if(this.terminal == terminal) {
                this._online(token);
                Cookies.remove('token', {path: '/', domain: document.domain.substring(document.domain.indexOf('.'))});
            }
        }
        return Cookies.get(this.terminal + '.token');
    }
    
    /**
     * 设置为在线状态
     */
    _online(token) {
        Cookies.set(this.terminal + '.token', token, {
            expires: new Date(new Date().getTime() + 3600*1000*24*7),
            domain: document.domain.substring(document.domain.indexOf('.')),
            path: '/',
            secure: this._token.secure,
            SameSite: 'Lax'
        });
    }
    
    /**
     * 当前身份信息
     * @example
     * @param boolean refresh 是否强制刷新
     * const dove = new Dove({...});
     * dove.status().then(status => console.log(status));
     */
    status(refresh) {
        return new Promise(resolve => {
            if(!this.token()) return resolve(null); // 身份过期
            let status = localStorage.getItem('dove.status');
            if(status && !refresh) { // 读取缓存(60s)
                status = JSON.parse(status);
                if(status.token == this.token() && status._time > 0 && 
                	60 * 1000 > new Date().getTime() - status._time) {
                	return resolve(status);
                }
            }
            this.query({api: this._token.status}).then(status => {
            	if(status) {
            		status._time = new Date().getTime();
            		localStorage.setItem('dove.status', JSON.stringify(status));
            		this._online(status.token);
            	}
                resolve(status);
            }).catch(error => resolve(null));
        });
    }
    
    /**
     * 退出登录状态
     */
    logout() {
        let domain = document.domain.substring(document.domain.indexOf('.') + 1);
        Cookies.remove(this.terminal + '.token', {path: '/', domain: domain});
        Cookies.remove('token', {path: '/', domain: domain});
        localStorage.removeItem('dove.status');
        return true;
    }
    
    /**
     * 查询
     * @param json query 查询语句
     * @param File file 文件对象
     * @param boolean 是否静默处理(出错不提示，也不执行offline方法)
     * @example
     * const dove = new Dove({...});
     * dove.query([{api: 'greet:read'}, {api: 'token:status'}])
       .then(data => {
           let [greet, status] = data;
       })
     */
    query(query, file = null, silent = false) {
        return new Promise((resolve, reject) => {
            this.clock().then(() => this._request(query, file, silent, resolve, reject));
        });
    }
    
    /**
     * 获取/设置当前服务器时间
     * @param int timestamp UNIX时间戳
     * @return int|void 如果传递了timestamp参数，则为设置服务器时间操作，不返回值；否则返回服务器时间
     */
    time(timestamp) {
        if (timestamp && timestamp > 0) {
            localStorage.setItem('dove.clock', timestamp + ':' + Date.parse(new Date()) / 1000);
        } else {
            let ct = localStorage.getItem('dove.clock');
            if(!ct) return 0;
            ct = ct.split(':');
            return ct[0] > 0 ? (ct[0] + Date.parse(new Date()) / 1000 - ct[1]) : 0;
        }
    };
    
    /**
     * 加密
     */
    sign() {
        let time = this.time();
        return sha1(this.id + 'YLS' + this.key + 'YLS' + time) + '.' + time;
    }
    
    /**
     * 主动同步服务器时间
     */
    clock() {
        return new Promise(resolve => {
            if(this.time() > 0) return resolve();
            fetch(this.url).then(response => response.json())
            .then(response => {
                this.time(response.time);
                return resolve();
            });
        });
    }
    
    _request(query, file, silent, resolve, reject) {
        let glue = {
            id: this.id,
            version: this.version,
            sign: this.sign(),
            lang: this.lang,
            query: query,
            token: this.token()
        };
        let first = 0 == this.time();
        let retry = response => {
            if (first && response.time > 0) { // 首次发起API请求失败，同步服务器时间到本地
                this.time(response.time); // 服务器时间懒同步
                return this._request(query, file, silent, resolve, reject); // 重新请求
            } else if('SYSTEM_TOKEN_EXPIRED' == response.code) { // token过期
                this.status(true).then(status => { // 换取新的token
                	if(status && status.token) {
                		this._online(status.token);
                        return this._request(query, file, silent, resolve, reject); // 重新请求
                	} else this.logout();
                });
            } else if('SYSTEM_TOKEN_INVALID' == response.code) { // token无效
                this.logout();
                !silent && ('function' == typeof this._token.offline) && this._token.offline();
                reject(response.data);
            } else reject(response.data);
        };
        let handle = response => {
            if ('object' === typeof response) {
                if (true === response.status) {
                    return resolve(response.data.length > 1 ? response.data : response.data[0]);
                } else return retry(response);
            } else if ('string' == typeof response) {
                try {
                    let data = JSON.parse(response);
                    return data.status ? resolve(data.data) : retry(data);
                } catch (e) {
                    return reject(response);
                }
            } else if ('number' == typeof response) {
                return reject(response);
            } else return reject('发生了一个未知错误:<');
        };
          
        if(file) { // 上传文件无法避免触发OPTIONS预检
            glue.type = 'file';
            var data = new FormData();
            data.append('file', file);
            return new Promise((resolve, reject) => {
                fetch(this.url, {
                    method: 'POST',
                    body: data,
                    mode: 'cors',
                    headers: new Headers({'YLS-HEAD': JSON.stringify(glue)}),
                    cache: 'no-cache'
                })
                .then(response => response.json())
                .then(response => handle(response))
                .catch(response => handle(response));
          });
        } else {
            glue.type = 'json';
            // 将id,key放在请求体而不放在header中是避免变成复杂请求(复杂请求会触发一个OPTIONS预检请求)
            fetch(this.url, {
                method: 'POST',
                body: JSON.stringify(glue),
                mode: 'cors',
                headers: new Headers({'Content-Type': 'text/plain'}),
                cache: 'no-cache'
            })
            .then(response => response.json())
            .then(response => handle(response))
            .catch(response => handle(response));
        }
    }
}