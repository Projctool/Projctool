import{E as ot,r as te,q as it,h as at,o as q,c as M,a as P,F as ct,x as lt,s as ne,v as Ee,t as ut,V as ft,y as dt,z as pt}from"./DQff8rwl.js";function Ue(e,t){return function(){return e.apply(t,arguments)}}const{toString:ht}=Object.prototype,{getPrototypeOf:he}=Object,G=(e=>t=>{const n=ht.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),C=e=>(e=e.toLowerCase(),t=>G(t)===e),X=e=>t=>typeof t===e,{isArray:j}=Array,v=X("undefined");function mt(e){return e!==null&&!v(e)&&e.constructor!==null&&!v(e.constructor)&&O(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const je=C("ArrayBuffer");function yt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&je(e.buffer),t}const wt=X("string"),O=X("function"),ke=X("number"),Q=e=>e!==null&&typeof e=="object",bt=e=>e===!0||e===!1,V=e=>{if(G(e)!=="object")return!1;const t=he(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},gt=C("Date"),Et=C("File"),Rt=C("Blob"),St=C("FileList"),Tt=e=>Q(e)&&O(e.pipe),Ot=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||O(e.append)&&((t=G(e))==="formdata"||t==="object"&&O(e.toString)&&e.toString()==="[object FormData]"))},xt=C("URLSearchParams"),[At,Ct,_t,Nt]=["ReadableStream","Request","Response","Headers"].map(C),Pt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function H(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),j(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function qe(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const B=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Me=e=>!v(e)&&e!==B;function ae(){const{caseless:e}=Me(this)&&this||{},t={},n=(r,s)=>{const o=e&&qe(t,s)||s;V(t[o])&&V(r)?t[o]=ae(t[o],r):V(r)?t[o]=ae({},r):j(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&H(arguments[r],n);return t}const Lt=(e,t,n,{allOwnKeys:r}={})=>(H(t,(s,o)=>{n&&O(s)?e[o]=Ue(s,n):e[o]=s},{allOwnKeys:r}),e),Ft=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Bt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Dt=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&he(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Ut=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},jt=e=>{if(!e)return null;if(j(e))return e;let t=e.length;if(!ke(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},kt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&he(Uint8Array)),qt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Mt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},It=C("HTMLFormElement"),vt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Re=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Ht=C("RegExp"),Ie=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};H(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},zt=e=>{Ie(e,(t,n)=>{if(O(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(O(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Jt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return j(e)?r(e):r(String(e).split(t)),n},Vt=()=>{},Kt=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,re="abcdefghijklmnopqrstuvwxyz",Se="0123456789",ve={DIGIT:Se,ALPHA:re,ALPHA_DIGIT:re+re.toUpperCase()+Se},Wt=(e=16,t=ve.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function $t(e){return!!(e&&O(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Gt=e=>{const t=new Array(10),n=(r,s)=>{if(Q(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=j(r)?[]:{};return H(r,(i,c)=>{const f=n(i,s+1);!v(f)&&(o[c]=f)}),t[s]=void 0,o}}return r};return n(e,0)},Xt=C("AsyncFunction"),Qt=e=>e&&(Q(e)||O(e))&&O(e.then)&&O(e.catch),He=((e,t)=>e?setImmediate:t?((n,r)=>(B.addEventListener("message",({source:s,data:o})=>{s===B&&o===n&&r.length&&r.shift()()},!1),s=>{r.push(s),B.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",O(B.postMessage)),Zt=typeof queueMicrotask<"u"?queueMicrotask.bind(B):typeof process<"u"&&process.nextTick||He,a={isArray:j,isArrayBuffer:je,isBuffer:mt,isFormData:Ot,isArrayBufferView:yt,isString:wt,isNumber:ke,isBoolean:bt,isObject:Q,isPlainObject:V,isReadableStream:At,isRequest:Ct,isResponse:_t,isHeaders:Nt,isUndefined:v,isDate:gt,isFile:Et,isBlob:Rt,isRegExp:Ht,isFunction:O,isStream:Tt,isURLSearchParams:xt,isTypedArray:kt,isFileList:St,forEach:H,merge:ae,extend:Lt,trim:Pt,stripBOM:Ft,inherits:Bt,toFlatObject:Dt,kindOf:G,kindOfTest:C,endsWith:Ut,toArray:jt,forEachEntry:qt,matchAll:Mt,isHTMLForm:It,hasOwnProperty:Re,hasOwnProp:Re,reduceDescriptors:Ie,freezeMethods:zt,toObjectSet:Jt,toCamelCase:vt,noop:Vt,toFiniteNumber:Kt,findKey:qe,global:B,isContextDefined:Me,ALPHABET:ve,generateString:Wt,isSpecCompliantForm:$t,toJSONObject:Gt,isAsyncFn:Xt,isThenable:Qt,setImmediate:He,asap:Zt};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const ze=m.prototype,Je={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Je[e]={value:e}});Object.defineProperties(m,Je);Object.defineProperty(ze,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create(ze);return a.toFlatObject(e,i,function(f){return f!==Error.prototype},c=>c!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const Yt=null;function ce(e){return a.isPlainObject(e)||a.isArray(e)}function Ve(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function Te(e,t,n){return e?e.concat(t).map(function(s,o){return s=Ve(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function en(e){return a.isArray(e)&&!e.some(ce)}const tn=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function Z(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,p){return!a.isUndefined(p[w])});const r=n.metaTokens,s=n.visitor||l,o=n.dots,i=n.indexes,f=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function u(h){if(h===null)return"";if(a.isDate(h))return h.toISOString();if(!f&&a.isBlob(h))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(h)||a.isTypedArray(h)?f&&typeof Blob=="function"?new Blob([h]):Buffer.from(h):h}function l(h,w,p){let R=h;if(h&&!p&&typeof h=="object"){if(a.endsWith(w,"{}"))w=r?w:w.slice(0,-2),h=JSON.stringify(h);else if(a.isArray(h)&&en(h)||(a.isFileList(h)||a.endsWith(w,"[]"))&&(R=a.toArray(h)))return w=Ve(w),R.forEach(function(b,x){!(a.isUndefined(b)||b===null)&&t.append(i===!0?Te([w],x,o):i===null?w:w+"[]",u(b))}),!1}return ce(h)?!0:(t.append(Te(p,w,o),u(h)),!1)}const d=[],y=Object.assign(tn,{defaultVisitor:l,convertValue:u,isVisitable:ce});function g(h,w){if(!a.isUndefined(h)){if(d.indexOf(h)!==-1)throw Error("Circular reference detected in "+w.join("."));d.push(h),a.forEach(h,function(R,T){(!(a.isUndefined(R)||R===null)&&s.call(t,R,a.isString(T)?T.trim():T,w,y))===!0&&g(R,w?w.concat(T):[T])}),d.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return g(e),t}function Oe(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function me(e,t){this._pairs=[],e&&Z(e,this,t)}const Ke=me.prototype;Ke.append=function(t,n){this._pairs.push([t,n])};Ke.toString=function(t){const n=t?function(r){return t.call(this,r,Oe)}:Oe;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function nn(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function We(e,t,n){if(!t)return e;const r=n&&n.encode||nn,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new me(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class xe{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const $e={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},rn=typeof URLSearchParams<"u"?URLSearchParams:me,sn=typeof FormData<"u"?FormData:null,on=typeof Blob<"u"?Blob:null,an={isBrowser:!0,classes:{URLSearchParams:rn,FormData:sn,Blob:on},protocols:["http","https","file","blob","url","data"]},ye=typeof window<"u"&&typeof document<"u",cn=(e=>ye&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),ln=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",un=ye&&window.location.href||"http://localhost",fn=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ye,hasStandardBrowserEnv:cn,hasStandardBrowserWebWorkerEnv:ln,origin:un},Symbol.toStringTag,{value:"Module"})),A={...fn,...an};function dn(e,t){return Z(e,new A.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return A.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function pn(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function hn(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function Ge(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),f=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,f?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=hn(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(pn(r),s,n,0)}),n}return null}function mn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const z={transitional:$e,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(Ge(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t)||a.isReadableStream(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return dn(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return Z(c?{"files[]":t}:t,f&&new f,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),mn(t)):t}],transformResponse:[function(t){const n=this.transitional||z.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(a.isResponse(t)||a.isReadableStream(t))return t;if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?m.from(c,m.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:A.classes.FormData,Blob:A.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{z.headers[e]={}});const yn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),wn=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&yn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Ae=Symbol("internals");function I(e){return e&&String(e).trim().toLowerCase()}function K(e){return e===!1||e==null?e:a.isArray(e)?e.map(K):String(e)}function bn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const gn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function se(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function En(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Rn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class S{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,f,u){const l=I(f);if(!l)throw new Error("header name must be a non-empty string");const d=a.findKey(s,l);(!d||s[d]===void 0||u===!0||u===void 0&&s[d]!==!1)&&(s[d||f]=K(c))}const i=(c,f)=>a.forEach(c,(u,l)=>o(u,l,f));if(a.isPlainObject(t)||t instanceof this.constructor)i(t,n);else if(a.isString(t)&&(t=t.trim())&&!gn(t))i(wn(t),n);else if(a.isHeaders(t))for(const[c,f]of t.entries())o(f,c,r);else t!=null&&o(n,t,r);return this}get(t,n){if(t=I(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return bn(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=I(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||se(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=I(i),i){const c=a.findKey(r,i);c&&(!n||se(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||se(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=K(s),delete n[o];return}const c=t?En(o):String(o).trim();c!==o&&delete n[o],n[c]=K(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Ae]=this[Ae]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=I(i);r[c]||(Rn(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}S.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(S.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(S);function oe(e,t){const n=this||z,r=t||n,s=S.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Xe(e){return!!(e&&e.__CANCEL__)}function k(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(k,m,{__CANCEL__:!0});function Qe(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Sn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Tn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(f){const u=Date.now(),l=r[o];i||(i=u),n[s]=f,r[s]=u;let d=o,y=0;for(;d!==s;)y+=n[d++],d=d%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),u-i<t)return;const g=l&&u-l;return g?Math.round(y*1e3/g):void 0}}function On(e,t){let n=0,r=1e3/t,s,o;const i=(u,l=Date.now())=>{n=l,s=null,o&&(clearTimeout(o),o=null),e.apply(null,u)};return[(...u)=>{const l=Date.now(),d=l-n;d>=r?i(u,l):(s=u,o||(o=setTimeout(()=>{o=null,i(s)},r-d)))},()=>s&&i(s)]}const W=(e,t,n=3)=>{let r=0;const s=Tn(50,250);return On(o=>{const i=o.loaded,c=o.lengthComputable?o.total:void 0,f=i-r,u=s(f),l=i<=c;r=i;const d={loaded:i,total:c,progress:c?i/c:void 0,bytes:f,rate:u||void 0,estimated:u&&c&&l?(c-i)/u:void 0,event:o,lengthComputable:c!=null,[t?"download":"upload"]:!0};e(d)},n)},Ce=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},_e=e=>(...t)=>a.asap(()=>e(...t)),xn=A.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const c=a.isString(i)?s(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}(),An=A.hasStandardBrowserEnv?{write(e,t,n,r,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Cn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function _n(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Ze(e,t){return e&&!Cn(t)?_n(e,t):t}const Ne=e=>e instanceof S?{...e}:e;function U(e,t){t=t||{};const n={};function r(u,l,d){return a.isPlainObject(u)&&a.isPlainObject(l)?a.merge.call({caseless:d},u,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function s(u,l,d){if(a.isUndefined(l)){if(!a.isUndefined(u))return r(void 0,u,d)}else return r(u,l,d)}function o(u,l){if(!a.isUndefined(l))return r(void 0,l)}function i(u,l){if(a.isUndefined(l)){if(!a.isUndefined(u))return r(void 0,u)}else return r(void 0,l)}function c(u,l,d){if(d in t)return r(u,l);if(d in e)return r(void 0,u)}const f={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(u,l)=>s(Ne(u),Ne(l),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(l){const d=f[l]||s,y=d(e[l],t[l],l);a.isUndefined(y)&&d!==c||(n[l]=y)}),n}const Ye=e=>{const t=U({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:o,headers:i,auth:c}=t;t.headers=i=S.from(i),t.url=We(Ze(t.baseURL,t.url),e.params,e.paramsSerializer),c&&i.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):"")));let f;if(a.isFormData(n)){if(A.hasStandardBrowserEnv||A.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if((f=i.getContentType())!==!1){const[u,...l]=f?f.split(";").map(d=>d.trim()).filter(Boolean):[];i.setContentType([u||"multipart/form-data",...l].join("; "))}}if(A.hasStandardBrowserEnv&&(r&&a.isFunction(r)&&(r=r(t)),r||r!==!1&&xn(t.url))){const u=s&&o&&An.read(o);u&&i.set(s,u)}return t},Nn=typeof XMLHttpRequest<"u",Pn=Nn&&function(e){return new Promise(function(n,r){const s=Ye(e);let o=s.data;const i=S.from(s.headers).normalize();let{responseType:c,onUploadProgress:f,onDownloadProgress:u}=s,l,d,y,g,h;function w(){g&&g(),h&&h(),s.cancelToken&&s.cancelToken.unsubscribe(l),s.signal&&s.signal.removeEventListener("abort",l)}let p=new XMLHttpRequest;p.open(s.method.toUpperCase(),s.url,!0),p.timeout=s.timeout;function R(){if(!p)return;const b=S.from("getAllResponseHeaders"in p&&p.getAllResponseHeaders()),F={data:!c||c==="text"||c==="json"?p.responseText:p.response,status:p.status,statusText:p.statusText,headers:b,config:e,request:p};Qe(function(N){n(N),w()},function(N){r(N),w()},F),p=null}"onloadend"in p?p.onloadend=R:p.onreadystatechange=function(){!p||p.readyState!==4||p.status===0&&!(p.responseURL&&p.responseURL.indexOf("file:")===0)||setTimeout(R)},p.onabort=function(){p&&(r(new m("Request aborted",m.ECONNABORTED,e,p)),p=null)},p.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,p)),p=null},p.ontimeout=function(){let x=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const F=s.transitional||$e;s.timeoutErrorMessage&&(x=s.timeoutErrorMessage),r(new m(x,F.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,p)),p=null},o===void 0&&i.setContentType(null),"setRequestHeader"in p&&a.forEach(i.toJSON(),function(x,F){p.setRequestHeader(F,x)}),a.isUndefined(s.withCredentials)||(p.withCredentials=!!s.withCredentials),c&&c!=="json"&&(p.responseType=s.responseType),u&&([y,h]=W(u,!0),p.addEventListener("progress",y)),f&&p.upload&&([d,g]=W(f),p.upload.addEventListener("progress",d),p.upload.addEventListener("loadend",g)),(s.cancelToken||s.signal)&&(l=b=>{p&&(r(!b||b.type?new k(null,e,p):b),p.abort(),p=null)},s.cancelToken&&s.cancelToken.subscribe(l),s.signal&&(s.signal.aborted?l():s.signal.addEventListener("abort",l)));const T=Sn(s.url);if(T&&A.protocols.indexOf(T)===-1){r(new m("Unsupported protocol "+T+":",m.ERR_BAD_REQUEST,e));return}p.send(o||null)})},Ln=(e,t)=>{let n=new AbortController,r;const s=function(f){if(!r){r=!0,i();const u=f instanceof Error?f:this.reason;n.abort(u instanceof m?u:new k(u instanceof Error?u.message:u))}};let o=t&&setTimeout(()=>{s(new m(`timeout ${t} of ms exceeded`,m.ETIMEDOUT))},t);const i=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(f=>{f&&(f.removeEventListener?f.removeEventListener("abort",s):f.unsubscribe(s))}),e=null)};e.forEach(f=>f&&f.addEventListener&&f.addEventListener("abort",s));const{signal:c}=n;return c.unsubscribe=i,[c,()=>{o&&clearTimeout(o),o=null}]},Fn=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},Bn=async function*(e,t,n){for await(const r of e)yield*Fn(ArrayBuffer.isView(r)?r:await n(String(r)),t)},Pe=(e,t,n,r,s)=>{const o=Bn(e,t,s);let i=0,c,f=u=>{c||(c=!0,r&&r(u))};return new ReadableStream({async pull(u){try{const{done:l,value:d}=await o.next();if(l){f(),u.close();return}let y=d.byteLength;if(n){let g=i+=y;n(g)}u.enqueue(new Uint8Array(d))}catch(l){throw f(l),l}},cancel(u){return f(u),o.return()}},{highWaterMark:2})},Y=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",et=Y&&typeof ReadableStream=="function",le=Y&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),tt=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Dn=et&&tt(()=>{let e=!1;const t=new Request(A.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),Le=64*1024,ue=et&&tt(()=>a.isReadableStream(new Response("").body)),$={stream:ue&&(e=>e.body)};Y&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!$[t]&&($[t]=a.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new m(`Response type '${t}' is not supported`,m.ERR_NOT_SUPPORT,r)})})})(new Response);const Un=async e=>{if(e==null)return 0;if(a.isBlob(e))return e.size;if(a.isSpecCompliantForm(e))return(await new Request(e).arrayBuffer()).byteLength;if(a.isArrayBufferView(e)||a.isArrayBuffer(e))return e.byteLength;if(a.isURLSearchParams(e)&&(e=e+""),a.isString(e))return(await le(e)).byteLength},jn=async(e,t)=>{const n=a.toFiniteNumber(e.getContentLength());return n??Un(t)},kn=Y&&(async e=>{let{url:t,method:n,data:r,signal:s,cancelToken:o,timeout:i,onDownloadProgress:c,onUploadProgress:f,responseType:u,headers:l,withCredentials:d="same-origin",fetchOptions:y}=Ye(e);u=u?(u+"").toLowerCase():"text";let[g,h]=s||o||i?Ln([s,o],i):[],w,p;const R=()=>{!w&&setTimeout(()=>{g&&g.unsubscribe()}),w=!0};let T;try{if(f&&Dn&&n!=="get"&&n!=="head"&&(T=await jn(l,r))!==0){let _=new Request(t,{method:"POST",body:r,duplex:"half"}),N;if(a.isFormData(r)&&(N=_.headers.get("content-type"))&&l.setContentType(N),_.body){const[ee,J]=Ce(T,W(_e(f)));r=Pe(_.body,Le,ee,J,le)}}a.isString(d)||(d=d?"include":"omit"),p=new Request(t,{...y,signal:g,method:n.toUpperCase(),headers:l.normalize().toJSON(),body:r,duplex:"half",credentials:d});let b=await fetch(p);const x=ue&&(u==="stream"||u==="response");if(ue&&(c||x)){const _={};["status","statusText","headers"].forEach(ge=>{_[ge]=b[ge]});const N=a.toFiniteNumber(b.headers.get("content-length")),[ee,J]=c&&Ce(N,W(_e(c),!0))||[];b=new Response(Pe(b.body,Le,ee,()=>{J&&J(),x&&R()},le),_)}u=u||"text";let F=await $[a.findKey($,u)||"text"](b,e);return!x&&R(),h&&h(),await new Promise((_,N)=>{Qe(_,N,{data:F,headers:S.from(b.headers),status:b.status,statusText:b.statusText,config:e,request:p})})}catch(b){throw R(),b&&b.name==="TypeError"&&/fetch/i.test(b.message)?Object.assign(new m("Network Error",m.ERR_NETWORK,e,p),{cause:b.cause||b}):m.from(b,b&&b.code,e,p)}}),fe={http:Yt,xhr:Pn,fetch:kn};a.forEach(fe,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Fe=e=>`- ${e}`,qn=e=>a.isFunction(e)||e===null||e===!1,nt={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!qn(n)&&(r=fe[(i=String(n)).toLowerCase()],r===void 0))throw new m(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([c,f])=>`adapter ${c} `+(f===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(Fe).join(`
`):" "+Fe(o[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:fe};function ie(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new k(null,e)}function Be(e){return ie(e),e.headers=S.from(e.headers),e.data=oe.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),nt.getAdapter(e.adapter||z.adapter)(e).then(function(r){return ie(e),r.data=oe.call(e,e.transformResponse,r),r.headers=S.from(r.headers),r},function(r){return Xe(r)||(ie(e),r&&r.response&&(r.response.data=oe.call(e,e.transformResponse,r.response),r.response.headers=S.from(r.response.headers))),Promise.reject(r)})}const rt="1.7.3",we={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{we[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const De={};we.transitional=function(t,n,r){function s(o,i){return"[Axios v"+rt+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!De[i]&&(De[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};function Mn(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],f=c===void 0||i(c,o,e);if(f!==!0)throw new m("option "+o+" must be "+f,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const de={assertOptions:Mn,validators:we},L=de.validators;class D{constructor(t){this.defaults=t,this.interceptors={request:new xe,response:new xe}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=U(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&de.assertOptions(r,{silentJSONParsing:L.transitional(L.boolean),forcedJSONParsing:L.transitional(L.boolean),clarifyTimeoutError:L.transitional(L.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:de.assertOptions(s,{encode:L.function,serialize:L.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],h=>{delete o[h]}),n.headers=S.concat(i,o);const c=[];let f=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(f=f&&w.synchronous,c.unshift(w.fulfilled,w.rejected))});const u=[];this.interceptors.response.forEach(function(w){u.push(w.fulfilled,w.rejected)});let l,d=0,y;if(!f){const h=[Be.bind(this),void 0];for(h.unshift.apply(h,c),h.push.apply(h,u),y=h.length,l=Promise.resolve(n);d<y;)l=l.then(h[d++],h[d++]);return l}y=c.length;let g=n;for(d=0;d<y;){const h=c[d++],w=c[d++];try{g=h(g)}catch(p){w.call(this,p);break}}try{l=Be.call(this,g)}catch(h){return Promise.reject(h)}for(d=0,y=u.length;d<y;)l=l.then(u[d++],u[d++]);return l}getUri(t){t=U(this.defaults,t);const n=Ze(t.baseURL,t.url);return We(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){D.prototype[t]=function(n,r){return this.request(U(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(U(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}D.prototype[t]=n(),D.prototype[t+"Form"]=n(!0)});class be{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new k(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new be(function(s){t=s}),cancel:t}}}function In(e){return function(n){return e.apply(null,n)}}function vn(e){return a.isObject(e)&&e.isAxiosError===!0}const pe={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(pe).forEach(([e,t])=>{pe[t]=e});function st(e){const t=new D(e),n=Ue(D.prototype.request,t);return a.extend(n,D.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return st(U(e,s))},n}const E=st(z);E.Axios=D;E.CanceledError=k;E.CancelToken=be;E.isCancel=Xe;E.VERSION=rt;E.toFormData=Z;E.AxiosError=m;E.Cancel=E.CanceledError;E.all=function(t){return Promise.all(t)};E.spread=In;E.isAxiosError=vn;E.mergeConfig=U;E.AxiosHeaders=S;E.formToJSON=e=>Ge(a.isHTMLForm(e)?new FormData(e):e);E.getAdapter=nt.getAdapter;E.HttpStatusCode=pe;E.default=E;const Hn={class:"space-y-4"},zn={key:0,src:"https://static.thenounproject.com/png/363640-200.png",alt:"User Avatar",class:"w-8 h-8 rounded-full ml-2"},Jn={key:1,src:"https://iapara.com/wp-content/uploads/2024/03/gemini-google.jpg.webp",alt:"AI Avatar",class:"w-8 h-8 rounded-full mr-2"},Vn={class:"flex items-center space-x-4 mt-4"},Kn=P("button",{type:"submit",class:"p-2 bg-primary text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition duration-300 ease-in-out"},[P("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 24 24",fill:"currentColor"},[P("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"})])],-1),$n=ot({__name:"chat",setup(e){const t=te([]),n=te(""),r=l=>{n.value=l.target.value},s=async()=>{const l={role:"user",content:n.value};t.value.push(l);try{const d=await E.post("/api/chat",{messages:[l]}),y={role:"ai",content:o(d.data)};t.value.push(y)}catch(d){console.error("Error durante la solicitud a la API",d)}n.value=""},o=l=>i(l)?l:"Lo siento, pero eso no te puedo responder, ya que soy una herramienta integral impulsada por IA diseñada para ayudarte a gestionar proyectos de software de manera eficiente. Ya sea que estés trabajando en un proyecto a largo plazo o en un sprint corto, ofrezco funciones que hacen que la asignación de tareas, la creación de historias de usuario, la estimación de tiempos y la gestión de costos sean sencillas y accesibles. Asimismo, también doy recomendaciones y optimizaciones inteligentes para mejorar los flujos de trabajo de gestión de proyectos.",i=l=>["hola","proyecto","tarea","historia de usuario","estimación de tiempos","gestión de costos","asignación de tareas"].some(y=>l.toLowerCase().includes(y)),c=l=>l.replace(/\\n/g," ").replace(/0:/g,"").replace(/"/g,"").replace(/\\+/g,"").replace(/\*\*/g,"").replace(/\*/g,"").replace(/#/g,"").trim().split(new RegExp("(?<=[.!?])\\s+")).slice(0,2).join(" "),f=te(null),u=()=>{f.value&&(f.value.scrollTop=f.value.scrollHeight)};return it(()=>{const l=new MutationObserver(u);f.value&&l.observe(f.value,{childList:!0,subtree:!0}),at(()=>{l.disconnect()})}),(l,d)=>(q(),M("div",null,[P("div",{ref_key:"messageContainer",ref:f,class:"flex-1 overflow-y-auto p-4 bg-white rounded-lg shadow-md max-h-96"},[P("ul",Hn,[(q(!0),M(ct,null,lt(t.value,(y,g)=>(q(),M("li",{key:g,class:ne([{"justify-end":y.role==="user","justify-start":y.role==="ai"},"flex items-center"])},[P("div",{class:ne([{"flex-row-reverse":y.role==="user","flex-row":y.role==="ai"},"flex items-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl"])},[y.role==="user"?(q(),M("img",zn)):Ee("",!0),y.role==="ai"?(q(),M("img",Jn)):Ee("",!0),P("p",{class:ne([{"bg-gray-600 p-3 rounded text-white text-sm ml-2":y.role==="user","bg-gray-800 p-3 rounded self-end text-white text-sm mr-2":y.role==="ai"},"p-3 rounded-lg break-words"])},ut(c(y.content)),3)],2)],2))),128))])],512),P("div",Vn,[P("form",{onSubmit:ft(s,["prevent"]),class:"flex items-center w-full p-4 bg-white rounded-lg shadow-md"},[dt(P("input",{"onUpdate:modelValue":d[0]||(d[0]=y=>n.value=y),onInput:r,class:"w-full p-2 border rounded-[30px]",placeholder:"Type a message..."},null,544),[[pt,n.value]]),Kn],32)])]))}});export{$n as _};
