!function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=47)}([function(e,t,n){"use strict";var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=n(8),r=n(32),i=Object.prototype.toString;function u(e){return"[object Array]"===i.call(e)}function s(e){return null!==e&&"object"===(void 0===e?"undefined":a(e))}function c(e){return"[object Function]"===i.call(e)}function f(e,t){if(null!=e)if("object"!==(void 0===e?"undefined":a(e))&&(e=[e]),u(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:u,isArrayBuffer:function(e){return"[object ArrayBuffer]"===i.call(e)},isBuffer:r,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===i.call(e)},isFile:function(e){return"[object File]"===i.call(e)},isBlob:function(e){return"[object Blob]"===i.call(e)},isFunction:c,isStream:function(e){return s(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:f,merge:function n(){var r={};function e(e,t){"object"===a(r[t])&&"object"===(void 0===e?"undefined":a(e))?r[t]=n(r[t],e):r[t]=e}for(var t=0,o=arguments.length;t<o;t++)f(arguments[t],e);return r},extend:function(n,e,r){return f(e,function(e,t){n[t]=r&&"function"==typeof e?o(e,r):e}),n},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e[Math.floor(Math.random()*e.length)]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.list,n=e.type,r=e.isObscene,o=e.isAbstract;return t.filter(function(e){return e.type===n&&e.isObscene==r&&e.isAbstract===o})}},function(u,e,s){"use strict";(function(e){var n=s(0),r=s(29),t={"Content-Type":"application/x-www-form-urlencoded"};function o(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var a,i={adapter:("undefined"!=typeof XMLHttpRequest?a=s(7):void 0!==e&&(a=s(7)),a),transformRequest:[function(e,t){return r(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(o(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(o(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return 200<=e&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],function(e){i.headers[e]={}}),n.forEach(["post","put","patch"],function(e){i.headers[e]=n.merge(t)}),u.exports=i}).call(this,s(30))},function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";var i=n(27);e.exports=function(e,t,n,r,o){var a=new Error(e);return i(a,t,n,r,o)}},function(e,t,d){"use strict";var p=d(0),m=d(28),h=d(26),y=d(25),v=d(24),b=d(6),g="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||d(23);e.exports=function(l){return new Promise(function(n,r){var o=l.data,a=l.headers;p.isFormData(o)&&delete a["Content-Type"];var i=new XMLHttpRequest,e="onreadystatechange",u=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in i||v(l.url)||(i=new window.XDomainRequest,e="onload",u=!0,i.onprogress=function(){},i.ontimeout=function(){}),l.auth){var t=l.auth.username||"",s=l.auth.password||"";a.Authorization="Basic "+g(t+":"+s)}if(i.open(l.method.toUpperCase(),h(l.url,l.params,l.paramsSerializer),!0),i.timeout=l.timeout,i[e]=function(){if(i&&(4===i.readyState||u)&&(0!==i.status||i.responseURL&&0===i.responseURL.indexOf("file:"))){var e="getAllResponseHeaders"in i?y(i.getAllResponseHeaders()):null,t={data:l.responseType&&"text"!==l.responseType?i.response:i.responseText,status:1223===i.status?204:i.status,statusText:1223===i.status?"No Content":i.statusText,headers:e,config:l,request:i};m(n,r,t),i=null}},i.onerror=function(){r(b("Network Error",l,null,i)),i=null},i.ontimeout=function(){r(b("timeout of "+l.timeout+"ms exceeded",l,"ECONNABORTED",i)),i=null},p.isStandardBrowserEnv()){var c=d(22),f=(l.withCredentials||v(l.url))&&l.xsrfCookieName?c.read(l.xsrfCookieName):void 0;f&&(a[l.xsrfHeaderName]=f)}if("setRequestHeader"in i&&p.forEach(a,function(e,t){void 0===o&&"content-type"===t.toLowerCase()?delete a[t]:i.setRequestHeader(t,e)}),l.withCredentials&&(i.withCredentials=!0),l.responseType)try{i.responseType=l.responseType}catch(n){if("json"!==l.responseType)throw n}"function"==typeof l.onDownloadProgress&&i.addEventListener("progress",l.onDownloadProgress),"function"==typeof l.onUploadProgress&&i.upload&&i.upload.addEventListener("progress",l.onUploadProgress),l.cancelToken&&l.cancelToken.promise.then(function(e){i&&(i.abort(),r(e),i=null)}),void 0===o&&(o=null),i.send(o)})}},function(e,t,n){"use strict";e.exports=function(n,r){return function(){for(var e=new Array(arguments.length),t=0;t<e.length;t++)e[t]=arguments[t];return n.apply(r,e)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(39)),o=u(n(38)),a=u(n(37)),i=u(n(36));function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){switch(e.nameType){case"normal":(0,r.default)(e);break;case"semiobscene":(0,o.default)(e);break;case"obscene":(0,a.default)(e);break;case"abstract":(0,i.default)(e);break;default:(0,r.default)(e)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(41)),o=a(n(40));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(n,e){n.markup.nameListEl.innerHTML="",n.nameList.forEach(function(e){var t=document.createElement("li");t.classList="imedar-list__item imedar-list__item_inactive",t.textContent=e,n.markup.nameListEl.appendChild(t),setTimeout(function(){t.classList="imedar-list__item"},(0,r.default)(n))}),e?setTimeout(function(){e(),(0,o.default)(n)},n.maxDelay):(0,o.default)(n)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(10)),o=a(n(9));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){e.isProcessing||(e.nameList=[],e.isProcessing=!0,(0,r.default)(e),(0,o.default)(e),(0,r.default)(e,function(){e.isProcessing=!1}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(42)),o=a(n(14));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(n){n.markup.controlEl.addEventListener("submit",function(e){e.preventDefault();var t=(0,r.default)(this,{hash:!0}).type;n.nameType=t,o.default.roll(n)})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=(r=n(45))&&r.__esModule?r:{default:r};t.default=function(e){var t=document.createElement("div");t.classList="imedar",e.el.innerHTML="",e.el.appendChild(t);var n=document.createElement("form");n.classList="imedar-control",e.markup.controlEl=n,t.appendChild(n);var r=document.createElement("ul");r.classList="imedar-control-list",n.appendChild(r),r.appendChild((0,i.default)({input:{value:"normal",id:"imedarNameType_normal",checked:"normal"===e.nameType},label:{for:"imedarNameType_normal",text:e.textLabel.normalNameType}})),r.appendChild((0,i.default)({input:{value:"semiobscene",id:"imedarNameType_semiobscene",checked:"semiobscene"===e.nameType},label:{for:"imedarNameType_semiobscene",text:e.textLabel.semiobsceneNameType}})),r.appendChild((0,i.default)({input:{value:"obscene",id:"imedarNameType_obscene",checked:"obscene"===e.nameType},label:{for:"imedarNameType_obscene",text:e.textLabel.obsceneNameType}})),r.appendChild((0,i.default)({input:{value:"abstract",id:"imedarNameType_abstract",checked:"abstract"===e.nameType},label:{for:"imedarNameType_abstract",text:e.textLabel.abstractNameType}}));var o=document.createElement("button");o.classList="imedar__submit",n.appendChild(o),e.markup.submitButtonEl=o;var a=document.createElement("ul");a.classList="imedar-list",t.appendChild(a),e.markup.nameListEl=a}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=f(n(13)),o=f(n(44)),a=f(n(11)),i=f(n(35)),u=f(n(12)),s=f(n(9)),c=f(n(10));function f(e){return e&&e.__esModule?e:{default:e}}var l={generateBasicMarkup:r.default,init:o.default,roll:a.default,getSrcData:i.default,setListeners:u.default,getNameList:s.default,render:c.default};t.default=l},function(e,t,n){"use strict";e.exports=function(t){return function(e){return t.apply(null,e)}}},function(e,t,n){"use strict";var r=n(4);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new r(e),t(n.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var t;return{token:new o(function(e){t=e}),cancel:t}},e.exports=o},function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";var r=n(0);e.exports=function(t,n,e){return r.forEach(e,function(e){t=e(t,n)}),t}},function(e,t,n){"use strict";var r=n(0),o=n(19),a=n(5),i=n(3),u=n(18),s=n(17);function c(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(t){return c(t),t.baseURL&&!u(t.url)&&(t.url=s(t.baseURL,t.url)),t.headers=t.headers||{},t.data=o(t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||i.adapter)(t).then(function(e){return c(t),e.data=o(e.data,e.headers,t.transformResponse),e},function(e){return a(e)||(c(t),e&&e.response&&(e.response.data=o(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},function(e,t,n){"use strict";var r=n(0);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(t){r.forEach(this.handlers,function(e){null!==e&&t(e)})},e.exports=o},function(e,t,n){"use strict";var u=n(0);e.exports=u.isStandardBrowserEnv()?{write:function(e,t,n,r,o,a){var i=[];i.push(e+"="+encodeURIComponent(t)),u.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),u.isString(r)&&i.push("path="+r),u.isString(o)&&i.push("domain="+o),!0===a&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,n){"use strict";function u(){this.message="String contains an invalid character"}(u.prototype=new Error).code=5,u.prototype.name="InvalidCharacterError",e.exports=function(e){for(var t,n,r=String(e),o="",a=0,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.charAt(0|a)||(i="=",a%1);o+=i.charAt(63&t>>8-a%1*8)){if(255<(n=r.charCodeAt(a+=.75)))throw new u;t=t<<8|n}return o}},function(e,t,n){"use strict";var i=n(0);e.exports=i.isStandardBrowserEnv()?function(){var n,r=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");function a(e){var t=e;return r&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}return n=a(window.location.href),function(e){var t=i.isString(e)?a(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0}},function(e,t,n){"use strict";var a=n(0),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,r,o={};return e&&a.forEach(e.split("\n"),function(e){if(r=e.indexOf(":"),t=a.trim(e.substr(0,r)).toLowerCase(),n=a.trim(e.substr(r+1)),t){if(o[t]&&0<=i.indexOf(t))return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([n]):o[t]?o[t]+", "+n:n}}),o}},function(e,t,n){"use strict";var a=n(0);function i(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var r;if(n)r=n(t);else if(a.isURLSearchParams(t))r=t.toString();else{var o=[];a.forEach(t,function(e,t){null!=e&&(a.isArray(e)?t+="[]":e=[e],a.forEach(e,function(e){a.isDate(e)?e=e.toISOString():a.isObject(e)&&(e=JSON.stringify(e)),o.push(i(t)+"="+i(e))}))}),r=o.join("&")}return r&&(e+=(-1===e.indexOf("?")?"?":"&")+r),e}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e}},function(e,t,n){"use strict";var o=n(6);e.exports=function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(o("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},function(e,t,n){"use strict";var o=n(0);e.exports=function(n,r){o.forEach(n,function(e,t){t!==r&&t.toUpperCase()===r.toUpperCase()&&(n[r]=e,delete n[t])})}},function(e,t,n){"use strict";var r,o,a=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function s(t){if(r===setTimeout)return setTimeout(t,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(e){r=i}try{o="function"==typeof clearTimeout?clearTimeout:u}catch(e){o=u}}();var c,f=[],l=!1,d=-1;function p(){l&&c&&(l=!1,c.length?f=c.concat(f):d=-1,f.length&&m())}function m(){if(!l){var e=s(p);l=!0;for(var t=f.length;t;){for(c=f,f=[];++d<t;)c&&c[d].run();d=-1,t=f.length}c=null,l=!1,function(t){if(o===clearTimeout)return clearTimeout(t);if((o===u||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(t);try{o(t)}catch(e){try{return o.call(null,t)}catch(e){return o.call(this,t)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function y(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(1<arguments.length)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];f.push(new h(e,t)),1!==f.length||l||s(m)},h.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=y,a.addListener=y,a.once=y,a.off=y,a.removeListener=y,a.removeAllListeners=y,a.emit=y,a.prependListener=y,a.prependOnceListener=y,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},function(e,t,n){"use strict";var r=n(3),o=n(0),a=n(21),i=n(20);function u(e){this.defaults=e,this.interceptors={request:new a,response:new a}}u.prototype.request=function(e){"string"==typeof e&&(e=o.merge({url:e},arguments[1])),(e=o.merge(r,{method:"get"},this.defaults,e)).method=e.method.toLowerCase();var t=[i,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},o.forEach(["delete","get","head","options"],function(n){u.prototype[n]=function(e,t){return this.request(o.merge(t||{},{method:n,url:e}))}}),o.forEach(["post","put","patch"],function(r){u.prototype[r]=function(e,t,n){return this.request(o.merge(n||{},{method:r,url:e,data:t}))}}),e.exports=u},function(e,t,n){"use strict";function r(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}e.exports=function(e){return null!=e&&(r(e)||"function"==typeof(t=e).readFloatLE&&"function"==typeof t.slice&&r(t.slice(0,0))||!!e._isBuffer);var t}},function(e,t,n){"use strict";var r=n(0),o=n(8),a=n(31),i=n(3);function u(e){var t=new a(e),n=o(a.prototype.request,t);return r.extend(n,a.prototype,t),r.extend(n,t),n}var s=u(i);s.Axios=a,s.create=function(e){return u(r.merge(i,e))},s.Cancel=n(4),s.CancelToken=n(16),s.isCancel=n(5),s.all=function(e){return Promise.all(e)},s.spread=n(15),e.exports=s,e.exports.default=s},function(e,t,n){"use strict";e.exports=n(33)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=(r=n(34))&&r.__esModule?r:{default:r};t.default=function(e){return o.default.get(e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(2)),u=r(n(1));function r(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){for(var t=(0,i.default)({list:e.data,type:"prefix",isObscene:!1,isAbstract:!0}),n=(0,i.default)({list:e.data,type:"suffix",isObscene:!1,isAbstract:!0}),r=0;r<e.amount;r+=1){var o=(0,u.default)(t),a=(0,u.default)(n);e.nameList.push(""+o.text+a.text)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(2)),u=r(n(1));function r(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){for(var t=(0,i.default)({list:e.data,type:"prefix",isObscene:!0,isAbstract:!1}),n=(0,i.default)({list:e.data,type:"suffix",isObscene:!0,isAbstract:!1}),r=0;r<e.amount;r+=1){var o=(0,u.default)(t),a=(0,u.default)(n);e.nameList.push(""+o.text+a.text)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=r(n(2)),s=r(n(1));function r(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){for(var t=0;t<e.amount;t+=1){var n=.5<=Math.random(),r=(0,u.default)({list:e.data,type:"prefix",isObscene:n,isAbstract:!1}),o=(0,u.default)({list:e.data,type:"suffix",isObscene:!n,isAbstract:!1}),a=(0,s.default)(r),i=(0,s.default)(o);e.nameList.push(""+a.text+i.text)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(2)),u=r(n(1));function r(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){for(var t=(0,i.default)({list:e.data,type:"prefix",isObscene:!1,isAbstract:!1}),n=(0,i.default)({list:e.data,type:"suffix",isObscene:!1,isAbstract:!1}),r=0;r<e.amount;r+=1){var o=(0,u.default)(t),a=(0,u.default)(n);e.nameList.push(""+o.text+a.text)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){e.markup.submitButtonEl.disabled=e.isProcessing}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Math.floor(Math.random()*(e.maxDelay-e.minDelay+1))+e.minDelay}},function(e,t,n){"use strict";var y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v=/^(?:submit|button|image|reset|file)$/i,b=/^(?:input|select|textarea|keygen)/i,o=/(\[[^\[\]]*\])/g;function g(e,t,n){if(t.match(o))!function e(t,n,r){if(0===n.length)return r;var o=n.shift(),a=o.match(/^\[(.+?)\]$/);if("[]"===o)return t=t||[],Array.isArray(t)?t.push(e(null,n,r)):(t._values=t._values||[],t._values.push(e(null,n,r))),t;if(a){var i=a[1],u=+i;isNaN(u)?(t=t||{})[i]=e(t[i],n,r):(t=t||[])[u]=e(t[u],n,r)}else t[o]=e(t[o],n,r);return t}(e,function(e){var t=[],n=new RegExp(o),r=/^([^\[\]]*)/.exec(e);for(r[1]&&t.push(r[1]);null!==(r=n.exec(e));)t.push(r[1]);return t}(t),n);else{var r=e[t];r?(Array.isArray(r)||(e[t]=[r]),e[t].push(n)):e[t]=n}return e}function x(e,t,n){return n=n.replace(/(\r)?\n/g,"\r\n"),n=(n=encodeURIComponent(n)).replace(/%20/g,"+"),e+(e?"&":"")+encodeURIComponent(t)+"="+n}e.exports=function(e,t){"object"!=(void 0===t?"undefined":y(t))?t={hash:!!t}:void 0===t.hash&&(t.hash=!0);for(var n=t.hash?{}:"",r=t.serializer||(t.hash?g:x),o=e&&e.elements?e.elements:[],a=Object.create(null),i=0;i<o.length;++i){var u=o[i];if((t.disabled||!u.disabled)&&u.name&&b.test(u.nodeName)&&!v.test(u.type)){var s=u.name,c=u.value;if("checkbox"!==u.type&&"radio"!==u.type||u.checked||(c=void 0),t.empty){if("checkbox"!==u.type||u.checked||(c=""),"radio"===u.type&&(a[u.name]||u.checked?u.checked&&(a[u.name]=!0):a[u.name]=!1),null==c&&"radio"==u.type)continue}else if(!c)continue;if("select-multiple"!==u.type)n=r(n,s,c);else{c=[];for(var f=u.options,l=!1,d=0;d<f.length;++d){var p=f[d],m=t.empty&&!p.value,h=p.value||m;p.selected&&h&&(l=!0,n=t.hash&&"[]"!==s.slice(s.length-2)?r(n,s+"[]",p.value):r(n,s,p.value))}!l&&t.empty&&(n=r(n,s,""))}}}if(t.empty)for(var s in a)a[s]||(n=r(n,s,""));return n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={el:null,srcURL:null,nameType:null,amount:null,minDelay:16,maxDelay:null,textLabel:null,isProcessing:!1,markup:{},data:null,nameList:[]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(43)),o=u(n(13)),a=u(n(12)),i=u(n(11));function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t){r.default.data=e,r.default.el=t.el,r.default.srcURL=t.srcURL,r.default.nameType=t.nameType,r.default.amount=t.amount,r.default.maxDelay=t.maxDelay>r.default.minDelay?t.maxDelay:r.default.minDelay,r.default.textLabel=t.textLabel,(0,o.default)(r.default),(0,a.default)(r.default),(0,i.default)(r.default)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.input,n=e.label,r=document.createElement("li");r.classList="imedar-control-list__item";var o=document.createElement("input");o.type="radio",o.name="type",o.value=t.value,o.id=t.id,o.checked=t.checked;var a=document.createElement("label");return a.setAttribute("for",n.for),a.textContent=n.text,r.appendChild(o),r.appendChild(a),r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,l=(r=n(14))&&r.__esModule?r:{default:r};t.default=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.el,n=e.srcURL,r=e.nameType,o=void 0===r?"normal":r,a=e.amount,i=void 0===a?10:a,u=e.maxDelay,s=void 0===u?16:u,c=e.textLabel;if(n&&t){var f={el:t,srcURL:n,nameType:o,amount:i,maxDelay:s,textLabel:c};l.default.getSrcData(n).then(function(e){l.default.init(e.data,f)}).catch(function(e){console.error("[imedar] Error getting data from source URL")})}else console.error("[imedar] missing source URL or Element object for mounting")}},function(e,t,n){"use strict";var r,o=(r=n(46))&&r.__esModule?r:{default:r};window.makeImedar=o.default}]);