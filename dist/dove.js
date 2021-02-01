const eutf8=e=>{var t,n,i,o=[];for(t=0;t<e.length;t++)(n=e.charCodeAt(t))<128?o.push(n):n<2048?o.push(192+(n>>6&31),128+(63&n)):((i=55296^n)>>10==0?(n=(i<<10)+(56320^e.charCodeAt(++t))+65536,o.push(240+(n>>18&7),128+(n>>12&63))):o.push(224+(n>>12&15)),o.push(128+(n>>6&63),128+(63&n)));return o},sha1=e=>{var t,n,i=new Uint8Array(eutf8(e)),o=16+(i.length+8>>>6<<4);for((e=new Uint8Array(o<<2)).set(new Uint8Array(i.buffer)),e=new Uint32Array(e.buffer),n=new DataView(e.buffer),f=0;f<o;f++)e[f]=n.getUint32(f<<2);e[i.length>>2]|=128<<24-8*(3&i.length),e[o-1]=i.length<<3;var r=[],s=[function(){return c[1]&c[2]|~c[1]&c[3]},function(){return c[1]^c[2]^c[3]},function(){return c[1]&c[2]|c[1]&c[3]|c[2]&c[3]},function(){return c[1]^c[2]^c[3]}],a=function(e,t){return e<<t|e>>>32-t},u=[1518500249,1859775393,-1894007588,-899497514],c=[1732584193,-271733879,null,null,-1009589776];for(c[2]=~c[0],c[3]=~c[1],f=0;f<e.length;f+=16){var h=c.slice(0);for(t=0;t<80;t++)r[t]=t<16?e[f+t]:a(r[t-3]^r[t-8]^r[t-14]^r[t-16],1),n=a(c[0],5)+s[t/20|0]()+c[4]+r[t]+u[t/20|0]|0,c[1]=a(c[1],30),c.pop(),c.unshift(n);for(t=0;t<5;t++)c[t]=c[t]+h[t]|0}n=new DataView(new Uint32Array(c).buffer);for(var f=0;f<5;f++)c[f]=n.getUint32(f<<2);return Array.prototype.map.call(new Uint8Array(new Uint32Array(c).buffer),(function(e){return(e<16?"0":"")+e.toString(16)})).join("")};!function(e){var t;if("function"==typeof define&&define.amd&&(define(e),t=!0),"object"==typeof exports&&(module.exports=e(),t=!0),!t){var n=window.Cookies,i=window.Cookies=e();i.noConflict=function(){return window.Cookies=n,i}}}((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var i in n)t[i]=n[i]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(i){function o(){}function r(t,n,r){if("undefined"!=typeof document){"number"==typeof(r=e({path:"/"},o.defaults,r)).expires&&(r.expires=new Date(1*new Date+864e5*r.expires)),r.expires=r.expires?r.expires.toUTCString():"";try{var s=JSON.stringify(n);/^[\{\[]/.test(s)&&(n=s)}catch(e){}n=i.write?i.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var a="";for(var u in r)r[u]&&(a+="; "+u,!0!==r[u]&&(a+="="+r[u].split(";")[0]));return document.cookie=t+"="+n+a}}function s(e,n){if("undefined"!=typeof document){for(var o={},r=document.cookie?document.cookie.split("; "):[],s=0;s<r.length;s++){var a=r[s].split("="),u=a.slice(1).join("=");n||'"'!==u.charAt(0)||(u=u.slice(1,-1));try{var c=t(a[0]);if(u=(i.read||i)(u,c)||t(u),n)try{u=JSON.parse(u)}catch(e){}if(o[c]=u,e===c)break}catch(e){}}return e?o[e]:o}}return o.set=r,o.get=function(e){return s(e,!1)},o.getJSON=function(e){return s(e,!0)},o.remove=function(t,n){r(t,"",e(n,{expires:-1}))},o.defaults={},o.withConverter=n,o}((function(){}))}));class Dove{constructor(e){this.debug=e.debug,this.id=e.id,this.key=e.key,this.url=e.url,this.version=e.version,this.terminal=e.terminal,this.lang=e.lang||"en",this._token={status:e.token.status,offline:e.token.offline||null,secure:!0===e.token.secure}}token(){if(Cookies.get("token")){let[e,t]=Cookies.get("token").split("|");this.terminal==t&&(this._online(e),Cookies.remove("token",{path:"/",domain:document.domain.substring(document.domain.indexOf("."))}))}return Cookies.get(this.terminal+".token")}_online(e){Cookies.set(this.terminal+".token",e,{expires:new Date((new Date).getTime()+6048e5),domain:document.domain.substring(document.domain.indexOf(".")),path:"/",secure:this._token.secure,SameSite:"Lax"})}status(e){return new Promise((t=>{if(!this.token())return t(null);let n=localStorage.getItem("dove.status");if(n&&!e&&(n=JSON.parse(n),n.token==this.token()&&n._time>0&&6e4>(new Date).getTime()-n._time))return t(n);this.query({api:this._token.status}).then((e=>{e&&(e._time=(new Date).getTime(),localStorage.setItem("dove.status",JSON.stringify(e)),this._online(e.token)),t(e)})).catch((e=>t(null)))}))}logout(){let e=document.domain.substring(document.domain.indexOf(".")+1);return Cookies.remove(this.terminal+".token",{path:"/",domain:e}),Cookies.remove("token",{path:"/",domain:e}),localStorage.removeItem("dove.status"),!0}query(e,t=null,n=!1){return new Promise(((i,o)=>{this.clock().then((()=>this._request(e,t,n,i,o)))}))}time(e){if(!(e&&e>0)){let e=localStorage.getItem("dove.clock");return e?(e=e.split(":"),e[0]>0?e[0]+Date.parse(new Date)/1e3-e[1]:0):0}localStorage.setItem("dove.clock",e+":"+Date.parse(new Date)/1e3)}sign(){let e=this.time();return sha1(this.id+"YLS"+this.key+"YLS"+e)+"."+e}clock(){return new Promise((e=>{if(this.time()>0)return e();fetch(this.url).then((e=>e.json())).then((t=>(this.time(t.time),e())))}))}_request(e,t,n,i,o){let r={id:this.id,version:this.version,sign:this.sign(),lang:this.lang,query:e,token:this.token()},s=0==this.time(),a=r=>{if(s&&r.time>0)return this.time(r.time),this._request(e,t,n,i,o);"SYSTEM_TOKEN_EXPIRED"==r.code?this.status(!0).then((r=>{if(r&&r.token)return this._online(r.token),this._request(e,t,n,i,o);this.logout()})):"SYSTEM_TOKEN_INVALID"==r.code?(this.logout(),!n&&"function"==typeof this._token.offline&&this._token.offline(),o(r.data)):o(r.data)},u=e=>{if("object"==typeof e)return!0===e.status?i(e.data.length>1?e.data:e.data[0]):a(e);if("string"!=typeof e)return o("number"==typeof e?e:"发生了一个未知错误:<");try{let t=JSON.parse(e);return t.status?i(t.data):a(t)}catch(t){return o(e)}};if(t){r.type="file";var c=new FormData;return c.append("file",t),new Promise(((e,t)=>{fetch(this.url,{method:"POST",body:c,mode:"cors",headers:new Headers({"YLS-HEAD":JSON.stringify(r)}),cache:"no-cache"}).then((e=>e.json())).then((e=>u(e))).catch((e=>u(e)))}))}r.type="json",fetch(this.url,{method:"POST",body:JSON.stringify(r),mode:"cors",headers:new Headers({"Content-Type":"text/plain"}),cache:"no-cache"}).then((e=>e.json())).then((e=>u(e))).catch((e=>u(e)))}}