const tt=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};tt();const q={},nt=(e,t)=>e===t,rt=Symbol("solid-proxy"),st=Symbol("solid-track"),ie={equals:nt};let it=Fe;const H={},M=1,oe=2,je={owned:null,cleanups:null,context:null,owner:null},[ot,Dn]=B(!1);var y=null;let Z=null,v=null,G=null,x=null,I=null,we=0;function J(e,t){const n=v,r=y,s=e.length===0?je:{owned:null,cleanups:null,context:null,owner:t||r};y=s,v=null;try{return ue(()=>e(()=>$e(s)),!0)}finally{v=n,y=r}}function B(e,t){t=t?Object.assign({},ie,t):ie;const n={value:e,observers:null,observerSlots:null,pending:H,comparator:t.equals||void 0},r=s=>(typeof s=="function"&&(s=s(n.pending!==H?n.pending:n.value)),_e(n,s));return[Ke.bind(n),r]}function lt(e,t,n){const r=Ce(e,t,!0,M);ee(r)}function A(e,t,n){const r=Ce(e,t,!1,M);ee(r)}function b(e,t,n){n=n?Object.assign({},ie,n):ie;const r=Ce(e,t,!0,0);return r.pending=H,r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,ee(r),Ke.bind(r)}function ke(e){if(G)return e();let t;const n=G=[];try{t=e()}finally{G=null}return ue(()=>{for(let r=0;r<n.length;r+=1){const s=n[r];if(s.pending!==H){const i=s.pending;s.pending=H,_e(s,i)}}},!1),t}function j(e){let t,n=v;return v=null,t=e(),v=n,t}function Be(e,t,n){const r=Array.isArray(e);let s,i=n&&n.defer;return o=>{let l;if(r){l=Array(e.length);for(let a=0;a<e.length;a++)l[a]=e[a]()}else l=e();if(i){i=!1;return}const u=j(()=>t(l,s,o));return s=l,u}}function ve(e){return y===null||(y.cleanups===null?y.cleanups=[e]:y.cleanups.push(e)),e}function ct(){return y}function ut(e,t){const n=y;y=e;try{return ue(t,!0)}finally{y=n}}function at(e){const t=v,n=y;return Promise.resolve().then(()=>{v=t,y=n;let r;return ke(e),v=y=null,r?r.done:void 0})}function ft(){return[ot,at]}function Me(e){const t=Symbol("context");return{id:t,Provider:pt(t),defaultValue:e}}function be(e){let t;return(t=We(y,e.id))!==void 0?t:e.defaultValue}function dt(e){const t=b(e);return b(()=>ye(t()))}function Ke(){const e=Z;if(this.sources&&(this.state||e)){const t=x;x=null,this.state===M||e?ee(this):le(this),x=t}if(v){const t=this.observers?this.observers.length:0;v.sources?(v.sources.push(this),v.sourceSlots.push(t)):(v.sources=[this],v.sourceSlots=[t]),this.observers?(this.observers.push(v),this.observerSlots.push(v.sources.length-1)):(this.observers=[v],this.observerSlots=[v.sources.length-1])}return this.value}function _e(e,t,n){if(G)return e.pending===H&&G.push(e),e.pending=t,t;if(e.comparator&&e.comparator(e.value,t))return t;let r=!1;return e.value=t,e.observers&&e.observers.length&&ue(()=>{for(let s=0;s<e.observers.length;s+=1){const i=e.observers[s];r&&Z.disposed.has(i),(r&&!i.tState||!r&&!i.state)&&(i.pure?x.push(i):I.push(i),i.observers&&Ve(i)),r||(i.state=M)}if(x.length>1e6)throw x=[],new Error},!1),t}function ee(e){if(!e.fn)return;$e(e);const t=y,n=v,r=we;v=y=e,ht(e,e.value,r),v=n,y=t}function ht(e,t,n){let r;try{r=e.fn(t)}catch(s){He(s)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?_e(e,r):e.value=r,e.updatedAt=n)}function Ce(e,t,n,r=M,s){const i={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:y,context:null,pure:n};return y===null||y!==je&&(y.owned?y.owned.push(i):y.owned=[i]),i}function De(e){const t=Z;if(e.state===0||t)return;if(e.state===oe||t)return le(e);if(e.suspense&&j(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<we);)(e.state||t)&&n.push(e);for(let r=n.length-1;r>=0;r--)if(e=n[r],e.state===M||t)ee(e);else if(e.state===oe||t){const s=x;x=null,le(e,n[0]),x=s}}function ue(e,t){if(x)return e();let n=!1;t||(x=[]),I?n=!0:I=[],we++;try{const r=e();return gt(n),r}catch(r){He(r)}finally{x=null,n||(I=null)}}function gt(e){x&&(Fe(x),x=null),!e&&(I.length?ke(()=>{it(I),I=null}):I=null)}function Fe(e){for(let t=0;t<e.length;t++)De(e[t])}function le(e,t){const n=Z;e.state=0;for(let r=0;r<e.sources.length;r+=1){const s=e.sources[r];s.sources&&(s.state===M||n?s!==t&&De(s):(s.state===oe||n)&&le(s,t))}}function Ve(e){const t=Z;for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n];(!r.state||t)&&(r.state=oe,r.pure?x.push(r):I.push(r),r.observers&&Ve(r))}}function $e(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const i=s.pop(),o=n.observerSlots.pop();r<s.length&&(i.sourceSlots[o]=r,s[r]=i,n.observerSlots[r]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)$e(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function He(e){throw e}function We(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:We(e.owner,t):void 0}function ye(e){if(typeof e=="function"&&!e.length)return ye(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=ye(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function pt(e){return function(n){let r;return lt(()=>r=j(()=>(y.context={[e]:n.value},dt(()=>n.children)))),r}}const yt=Symbol("fallback");function Pe(e){for(let t=0;t<e.length;t++)e[t]()}function mt(e,t,n={}){let r=[],s=[],i=[],o=0,l=t.length>1?[]:null;return ve(()=>Pe(i)),()=>{let u=e()||[],a,c;return u[st],j(()=>{let h=u.length,d,E,P,R,T,C,_,N,U;if(h===0)o!==0&&(Pe(i),i=[],r=[],s=[],o=0,l&&(l=[])),n.fallback&&(r=[yt],s[0]=J(de=>(i[0]=de,n.fallback())),o=1);else if(o===0){for(s=new Array(h),c=0;c<h;c++)r[c]=u[c],s[c]=J(g);o=h}else{for(P=new Array(h),R=new Array(h),l&&(T=new Array(h)),C=0,_=Math.min(o,h);C<_&&r[C]===u[C];C++);for(_=o-1,N=h-1;_>=C&&N>=C&&r[_]===u[N];_--,N--)P[N]=s[_],R[N]=i[_],l&&(T[N]=l[_]);for(d=new Map,E=new Array(N+1),c=N;c>=C;c--)U=u[c],a=d.get(U),E[c]=a===void 0?-1:a,d.set(U,c);for(a=C;a<=_;a++)U=r[a],c=d.get(U),c!==void 0&&c!==-1?(P[c]=s[a],R[c]=i[a],l&&(T[c]=l[a]),c=E[c],d.set(U,c)):i[a]();for(c=C;c<h;c++)c in P?(s[c]=P[c],i[c]=R[c],l&&(l[c]=T[c],l[c](c))):s[c]=J(g);s=s.slice(0,o=h),r=u.slice(0)}return s});function g(h){if(i[c]=h,l){const[d,E]=B(c);return l[c]=E,t(u[c],d)}return t(u[c])}}}function f(e,t){return j(()=>e(t||{}))}function te(){return!0}const ze={get(e,t,n){return t===rt?n:e.get(t)},has(e,t){return e.has(t)},set:te,deleteProperty:te,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:te,deleteProperty:te}},ownKeys(e){return e.keys()}};function ge(e){return(e=typeof e=="function"?e():e)==null?{}:e}function Ne(...e){return new Proxy({get(t){for(let n=e.length-1;n>=0;n--){const r=ge(e[n])[t];if(r!==void 0)return r}},has(t){for(let n=e.length-1;n>=0;n--)if(t in ge(e[n]))return!0;return!1},keys(){const t=[];for(let n=0;n<e.length;n++)t.push(...Object.keys(ge(e[n])));return[...new Set(t)]}},ze)}function Xe(e,...t){const n=new Set(t.flat()),r=Object.getOwnPropertyDescriptors(e),s=t.map(i=>{const o={};for(let l=0;l<i.length;l++){const u=i[l];Object.defineProperty(o,u,r[u]?r[u]:{get(){return e[u]},set(){return!0}})}return o});return s.push(new Proxy({get(i){return n.has(i)?void 0:e[i]},has(i){return n.has(i)?!1:i in e},keys(){return Object.keys(e).filter(i=>!n.has(i))}},ze)),s}function wt(e){const t="fallback"in e&&{fallback:()=>e.fallback};return b(mt(()=>e.each,e.children,t||void 0))}function Ge(e){let t=!1;const n=b(()=>e.when,void 0,{equals:(r,s)=>t?r===s:!r==!s});return b(()=>{const r=n();if(r){const s=e.children;return(t=typeof s=="function"&&s.length>0)?j(()=>s(r)):s}return e.fallback})}const vt=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],bt=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...vt]),_t=new Set(["innerHTML","textContent","innerText","children"]),Ct={className:"class",htmlFor:"for"},Le={class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"},$t=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),xt={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Et(e,t,n){let r=n.length,s=t.length,i=r,o=0,l=0,u=t[s-1].nextSibling,a=null;for(;o<s||l<i;){if(t[o]===n[l]){o++,l++;continue}for(;t[s-1]===n[i-1];)s--,i--;if(s===o){const c=i<r?l?n[l-1].nextSibling:n[i-l]:u;for(;l<i;)e.insertBefore(n[l++],c)}else if(i===l)for(;o<s;)(!a||!a.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[i-1]&&n[l]===t[s-1]){const c=t[--s].nextSibling;e.insertBefore(n[l++],t[o++].nextSibling),e.insertBefore(n[--i],c),t[s]=n[i]}else{if(!a){a=new Map;let g=l;for(;g<i;)a.set(n[g],g++)}const c=a.get(t[o]);if(c!=null)if(l<c&&c<i){let g=o,h=1,d;for(;++g<s&&g<i&&!((d=a.get(t[g]))==null||d!==c+h);)h++;if(h>c-l){const E=t[o];for(;l<c;)e.insertBefore(n[l++],E)}else e.replaceChild(n[l++],t[o++])}else o++;else t[o++].remove()}}}const Re="_$DX_DELEGATE";function At(e,t,n){let r;return J(s=>{r=s,t===document?e():L(t,e(),t.firstChild?null:void 0,n)}),()=>{r(),t.textContent=""}}function k(e,t,n){const r=document.createElement("template");r.innerHTML=e;let s=r.content.firstChild;return n&&(s=s.firstChild),s}function St(e,t=window.document){const n=t[Re]||(t[Re]=new Set);for(let r=0,s=e.length;r<s;r++){const i=e[r];n.has(i)||(n.add(i),t.addEventListener(i,It))}}function ce(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function Pt(e,t,n,r){r==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r)}function S(e,t){t==null?e.removeAttribute("class"):e.className=t}function Nt(e,t,n,r){r?Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n:Array.isArray(n)?e.addEventListener(t,s=>n[0](n[1],s)):e.addEventListener(t,n)}function Lt(e,t,n={}){const r=Object.keys(t||{}),s=Object.keys(n);let i,o;for(i=0,o=s.length;i<o;i++){const l=s[i];!l||l==="undefined"||t[l]||(Te(e,l,!1),delete n[l])}for(i=0,o=r.length;i<o;i++){const l=r[i],u=!!t[l];!l||l==="undefined"||n[l]===u||!u||(Te(e,l,!0),n[l]=u)}return n}function Rt(e,t,n={}){const r=e.style,s=typeof n=="string";if(t==null&&s||typeof t=="string")return r.cssText=t;s&&(r.cssText=void 0,n={}),t||(t={});let i,o;for(o in n)t[o]==null&&r.removeProperty(o),delete n[o];for(o in t)i=t[o],i!==n[o]&&(r.setProperty(o,i),n[o]=i);return n}function Tt(e,t,n,r){typeof t=="function"?A(s=>Oe(e,t(),s,n,r)):Oe(e,t,void 0,n,r)}function L(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return W(e,t,r,n);A(s=>W(e,t(),s,n),r)}function Ut(e,t,n,r,s={},i=!1){t||(t={});for(const o in s)if(!(o in t)){if(o==="children")continue;Ue(e,o,null,s[o],n,i)}for(const o in t){if(o==="children"){r||W(e,t.children);continue}const l=t[o];s[o]=Ue(e,o,l,s[o],n,i)}}function Ot(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function Te(e,t,n){const r=t.trim().split(/\s+/);for(let s=0,i=r.length;s<i;s++)e.classList.toggle(r[s],n)}function Ue(e,t,n,r,s,i){let o,l,u;if(t==="style")return Rt(e,n,r);if(t==="classList")return Lt(e,n,r);if(n===r)return r;if(t==="ref")i||n(e);else if(t.slice(0,3)==="on:")e.addEventListener(t.slice(3),n);else if(t.slice(0,10)==="oncapture:")e.addEventListener(t.slice(10),n,!0);else if(t.slice(0,2)==="on"){const a=t.slice(2).toLowerCase(),c=$t.has(a);Nt(e,a,n,c),c&&St([a])}else if((u=_t.has(t))||!s&&(Le[t]||(l=bt.has(t)))||(o=e.nodeName.includes("-")))t==="class"||t==="className"?S(e,n):o&&!l&&!u?e[Ot(t)]=n:e[Le[t]||t]=n;else{const a=s&&t.indexOf(":")>-1&&xt[t.split(":")[0]];a?Pt(e,a,t,n):ce(e,Ct[t]||t,n)}return n}function It(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),q.registry&&!q.done&&(q.done=!0,document.querySelectorAll("[id^=pl-]").forEach(r=>r.remove()));n!==null;){const r=n[t];if(r&&!n.disabled){const s=n[`${t}Data`];if(s!==void 0?r(s,e):r(e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function Oe(e,t,n={},r,s){return t||(t={}),!s&&"children"in t&&A(()=>n.children=W(e,t.children,n.children)),t.ref&&t.ref(e),A(()=>Ut(e,t,r,!0,n,!0)),n}function W(e,t,n,r,s){for(q.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,o=r!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,i==="string"||i==="number"){if(q.context)return n;if(i==="number"&&(t=t.toString()),o){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=F(e,n,r,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||i==="boolean"){if(q.context)return n;n=F(e,n,r)}else{if(i==="function")return A(()=>{let l=t();for(;typeof l=="function";)l=l();n=W(e,l,n,r)}),()=>n;if(Array.isArray(t)){const l=[];if(me(l,t,s))return A(()=>n=W(e,l,n,r,!0)),()=>n;if(q.context){for(let u=0;u<l.length;u++)if(l[u].parentNode)return n=l}if(l.length===0){if(n=F(e,n,r),o)return n}else Array.isArray(n)?n.length===0?Ie(e,l,r):Et(e,n,l):(n&&F(e),Ie(e,l));n=l}else if(t instanceof Node){if(q.context&&t.parentNode)return n=o?[t]:t;if(Array.isArray(n)){if(o)return n=F(e,n,r,t);F(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function me(e,t,n){let r=!1;for(let s=0,i=t.length;s<i;s++){let o=t[s],l;if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))r=me(e,o)||r;else if((l=typeof o)=="string")e.push(document.createTextNode(o));else if(l==="function")if(n){for(;typeof o=="function";)o=o();r=me(e,Array.isArray(o)?o:[o])||r}else e.push(o),r=!0;else e.push(document.createTextNode(o.toString()))}return r}function Ie(e,t,n){for(let r=0,s=t.length;r<s;r++)e.insertBefore(t[r],n)}function F(e,t,n,r){if(n===void 0)return e.textContent="";const s=r||document.createTextNode("");if(t.length){let i=!1;for(let o=t.length-1;o>=0;o--){const l=t[o];if(s!==l){const u=l.parentNode===e;!i&&!o?u?e.replaceChild(s,l):e.insertBefore(s,n):u&&l.remove()}else i=!0}}else e.insertBefore(s,n);return[s]}function qt(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function jt([e,t],n,r){return[n?()=>n(e()):e,r?s=>t(r(s)):t]}function kt(e){try{return document.querySelector(e)}catch{return null}}function Bt(e,t){const n=kt(`a#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function Mt(e,t,n,r){let s=!1;const i=l=>typeof l=="string"?{value:l}:l,o=jt(B(i(e()),{equals:(l,u)=>l.value===u.value}),void 0,l=>(!s&&t(l),l));return n&&ve(n((l=e())=>{s=!0,o[1](i(l)),s=!1})),{signal:o,utils:r}}function Kt(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:B({value:""})};return e}function Dt(){return Mt(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:r})=>{t?window.history.replaceState(r,"",e):window.history.pushState(r,"",e),Bt(window.location.hash.slice(1),n)},e=>qt(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}const Ft=/^(?:[a-z0-9]+:)?\/\//i,Vt=/^\/+|\/+$/g;function Q(e,t=!1){const n=e.replace(Vt,"");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function se(e,t,n){if(Ft.test(t))return;const r=Q(e),s=n&&Q(n);let i="";return!s||t.startsWith("/")?i=r:s.toLowerCase().indexOf(r.toLowerCase())!==0?i=r+s:i=s,(i||"/")+Q(t,!i)}function Ht(e,t){if(e==null)throw new Error(t);return e}function Je(e,t){return Q(e).replace(/\/*(\*.*)?$/g,"")+Q(t)}function Wt(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function V(e,t){return decodeURIComponent(t?e.replace(/\+/g," "):e)}function zt(e,t){const[n,r]=e.split("/*",2),s=n.split("/").filter(Boolean),i=s.length;return o=>{const l=o.split("/").filter(Boolean),u=l.length-i;if(u<0||u>0&&r===void 0&&!t)return null;const a={path:i?"":"/",params:{}};for(let c=0;c<i;c++){const g=s[c],h=l[c];if(g[0]===":")a.params[g.slice(1)]=h;else if(g.localeCompare(h,void 0,{sensitivity:"base"})!==0)return null;a.path+=`/${h}`}return r&&(a.params[r]=u?l.slice(-u).join("/"):""),a}}function Xt(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((s,i)=>s+(i.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function Qe(e){const t=new Map,n=ct();return new Proxy({},{get(r,s){return t.has(s)||ut(n,()=>t.set(s,b(()=>e()[s]))),t.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}const Gt=100,Ye=Me(),ae=Me(),fe=()=>Ht(be(Ye),"Make sure your app is wrapped in a <Router />");let Y;const xe=()=>Y||be(ae)||fe().base,Jt=e=>{const t=xe();return b(()=>t.resolvePath(e()))},Qt=e=>{const t=fe();return b(()=>{const n=e();return n!==void 0?t.renderPath(n):n})},Yt=()=>fe().location;function Zt(e,t="",n){const{path:r,component:s,data:i,children:o}=e,l=!o||Array.isArray(o)&&!o.length,u=Je(t,r),a=l?u:u.split("/*",1)[0];return{originalPath:r,pattern:a,element:s?()=>f(s,{}):()=>{const{element:c}=e;return c===void 0&&n?f(n,{}):c},preload:e.component?s.preload:e.preload,data:i,matcher:zt(a,!l)}}function en(e,t=0){return{routes:e,score:Xt(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let s=e.length-1;s>=0;s--){const i=e[s],o=i.matcher(n);if(!o)return null;r.unshift({...o,route:i})}return r}}}function Ze(e,t="",n,r=[],s=[]){const i=Array.isArray(e)?e:[e];for(let o=0,l=i.length;o<l;o++){const u=i[o];if(u&&typeof u=="object"&&u.hasOwnProperty("path")){const a=Zt(u,t,n);if(r.push(a),u.children)Ze(u.children,a.pattern,n,r,s);else{const c=en([...r],s.length);s.push(c)}r.pop()}}return r.length?s:s.sort((o,l)=>l.score-o.score)}function tn(e,t){for(let n=0,r=e.length;n<r;n++){const s=e[n].matcher(t);if(s)return s}return[]}function nn(e,t){const n=new URL("http://sar"),r=b(u=>{const a=e();try{return new URL(a,n)}catch{return console.error(`Invalid path ${a}`),u}},n,{equals:(u,a)=>u.href===a.href}),s=b(()=>V(r().pathname)),i=b(()=>V(r().search,!0)),o=b(()=>V(r().hash)),l=b(()=>"");return{get pathname(){return s()},get search(){return i()},get hash(){return o()},get state(){return t()},get key(){return l()},query:Qe(Be(i,()=>Wt(r())))}}function rn(e,t="",n,r){const{signal:[s,i],utils:o={}}=Kt(e),l=o.parsePath||(m=>m),u=o.renderPath||(m=>m),a=se("",t),c=void 0;if(a===void 0)throw new Error(`${a} is not a valid base path`);a&&!s().value&&i({value:a,replace:!0,scroll:!1});const[g,h]=ft(),[d,E]=B(s().value),[P,R]=B(s().state),T=nn(d,P),C=[],_={pattern:a,params:{},path:()=>a,outlet:()=>null,resolvePath(m){return se(a,m)}};if(n)try{Y=_,_.data=n({data:void 0,params:{},location:T,navigate:U(_)})}finally{Y=void 0}function N(m,p,$){j(()=>{if(typeof p=="number"){p&&(o.go?o.go(p):console.warn("Router integration does not support relative routing"));return}const{replace:z,resolve:X,scroll:Ee,state:K}={replace:!1,resolve:!0,scroll:!0,...$},O=X?m.resolvePath(p):se("",p);if(O===void 0)throw new Error(`Path '${p}' is not a routable path`);if(C.length>=Gt)throw new Error("Too many redirects");const D=d();if(O!==D||K!==P()){const he=C.push({value:D,replace:z,scroll:Ee,state:P()});h(()=>{E(O),R(K)}).then(()=>{C.length===he&&de({value:O,state:K})})}})}function U(m){return m=m||be(ae)||_,(p,$)=>N(m,p,$)}function de(m){const p=C[0];p&&((m.value!==p.value||m.state!==p.state)&&i({...m,replace:p.replace,scroll:p.scroll}),C.length=0)}A(()=>{const{value:m,state:p}=s();j(()=>{m!==d()&&h(()=>{E(m),R(p)})})});{let m=function(p){if(p.defaultPrevented||p.button!==0||p.metaKey||p.altKey||p.ctrlKey||p.shiftKey)return;const $=p.composedPath().find(Se=>Se instanceof Node&&Se.nodeName.toUpperCase()==="A");if(!$)return;const z=$ instanceof SVGAElement,X=z?$.href.baseVal:$.href;if((z?$.target.baseVal:$.target)||!X&&!$.hasAttribute("state"))return;const K=($.getAttribute("rel")||"").split(/\s+/);if($.hasAttribute("download")||K&&K.includes("external"))return;const O=z?new URL(X,document.baseURI):new URL(X),D=V(O.pathname);if(O.origin!==window.location.origin||a&&D&&!D.toLowerCase().startsWith(a.toLowerCase()))return;const he=l(D+V(O.search,!0)+V(O.hash)),Ae=$.getAttribute("state");p.preventDefault(),N(_,he,{resolve:!1,replace:$.hasAttribute("replace"),scroll:!$.hasAttribute("noscroll"),state:Ae&&JSON.parse(Ae)})};var Vn=m;document.addEventListener("click",m),ve(()=>document.removeEventListener("click",m))}return{base:_,out:c,location:T,isRouting:g,renderPath:u,parsePath:l,navigatorFactory:U}}function sn(e,t,n,r){const{base:s,location:i,navigatorFactory:o}=e,{pattern:l,element:u,preload:a,data:c}=r().route,g=b(()=>r().path),h=Qe(()=>r().params);a&&a();const d={parent:t,pattern:l,get child(){return n()},path:g,params:h,data:t.data,outlet:u,resolvePath(E){return se(s.path(),E,g())}};if(c)try{Y=d,d.data=c({data:t.data,params:h,location:i,navigate:o(d)})}finally{Y=void 0}return d}const on=k("<a></a>"),ln=e=>{const{source:t,url:n,base:r,data:s,out:i}=e,o=t||Dt(),l=rn(o,r,s);return f(Ye.Provider,{value:l,get children(){return e.children}})},cn=e=>{const t=fe(),n=xe(),r=b(()=>Ze(e.children,Je(n.pattern,e.base||""),un)),s=b(()=>tn(r(),t.location.pathname));t.out&&t.out.matches.push(s().map(({route:u,path:a,params:c})=>({originalPath:u.originalPath,pattern:u.pattern,path:a,params:c})));const i=[];let o;const l=b(Be(s,(u,a,c)=>{let g=a&&u.length===a.length;const h=[];for(let d=0,E=u.length;d<E;d++){const P=a&&a[d],R=u[d];c&&P&&R.route.pattern===P.route.pattern?h[d]=c[d]:(g=!1,i[d]&&i[d](),J(T=>{i[d]=T,h[d]=sn(t,h[d-1]||n,()=>l()[d+1],()=>s()[d])}))}return i.splice(u.length).forEach(d=>d()),c&&g?c:(o=h[0],h)}));return f(Ge,{get when(){return l()&&o},children:u=>f(ae.Provider,{value:u,get children(){return u.outlet()}})})},qe=e=>e,un=()=>{const e=xe();return f(Ge,{get when(){return e.child},children:t=>f(ae.Provider,{value:t,get children(){return t.outlet()}})})};function an(e){const[,t]=Xe(e,["children","to","href","state"]),n=Qt(()=>e.to);return(()=>{const r=on.cloneNode(!0);return Tt(r,t,!1,!0),L(r,()=>e.children),A(s=>{const i=n()||e.href,o=JSON.stringify(e.state);return i!==s._v$&&ce(r,"href",s._v$=i),o!==s._v$2&&ce(r,"state",s._v$2=o),s},{_v$:void 0,_v$2:void 0}),r})()}function fn(e){e=Ne({inactiveClass:"inactive",activeClass:"active"},e);const[,t]=Xe(e,["activeClass","inactiveClass","end"]),n=Yt(),r=Jt(()=>e.href),s=b(()=>{const i=r();if(i===void 0)return!1;const o=i.split(/[?#]/,1)[0].toLowerCase(),l=n.pathname.toLowerCase();return e.end?o===l:l.startsWith(o)});return f(an,Ne(t,{get to(){return r()},get classList(){return{[e.inactiveClass]:!s(),[e.activeClass]:s()}},get["aria-current"](){return s()?"page":void 0}}))}const dn="_app_a47qf_1",hn="_header_a47qf_8",gn="_title_a47qf_18",pn="_text_a47qf_23",yn="_content_a47qf_30";var ne={app:dn,header:hn,title:gn,text:pn,content:yn},mn={};const wn="_entry_fzpno_3",vn="_header_fzpno_37",bn="_downloadContainer_fzpno_63",_n="_img_fzpno_91";var re={entry:wn,header:vn,downloadContainer:bn,img:_n};const Cn="_button_63h7x_3";var $n={button:Cn};const xn=k("<button></button>");function En(e){return(()=>{const t=xn.cloneNode(!0);return L(t,()=>e.text),A(()=>S(t,$n.button)),t})()}const An=k("<div><img><div><span></span><div></div></div></div>");function w(e){return(()=>{const t=An.cloneNode(!0),n=t.firstChild,r=n.nextSibling,s=r.firstChild,i=s.nextSibling;return L(s,()=>e.title),L(i,f(En,{text:".blend"})),A(o=>{const l=re.entry,u=e.previewUrl,a=re.img,c=re.header,g=re.downloadContainer;return l!==o._v$&&S(t,o._v$=l),u!==o._v$2&&ce(n,"src",o._v$2=u),a!==o._v$3&&S(n,o._v$3=a),c!==o._v$4&&S(r,o._v$4=c),g!==o._v$5&&S(i,o._v$5=g),o},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),t})()}const Sn="_grid_uuqg1_3";var Pn={grid:Sn};const Nn=k("<div></div>");function Ln(e){return(()=>{const t=Nn.cloneNode(!0);return L(t,()=>e.children),A(()=>S(t,Pn.grid)),t})()}const Rn=k("<div><div>All assets in this library are distributed under the MIT license. Feel free to include them in your personal or commercial projects. If you fancy a small donation is always welcome and helps me out a ton!</div></div>");function Tn(e){return(()=>{const t=Rn.cloneNode(!0),n=t.firstChild;return L(t,f(Ln,{get children(){return[f(w,{title:"Energy Cell",previewUrl:"./src/assets/preview.png"}),f(w,{title:"Energy Cell",previewUrl:"./src/assets/preview.png"}),f(w,{title:"Energy Cell",previewUrl:"./src/assets/preview.png"}),f(w,{title:"Energy Cell",previewUrl:"./src/assets/preview.png"}),f(w,{title:"Energy Cell",previewUrl:"./src/assets/preview.png"}),f(w,{title:"Energy Cell",previewUrl:"./src/assets/preview.png"}),f(w,{title:"Energy Cell",previewUrl:"./src/assets/preview.png"}),f(w,{title:"Energy Cell",previewUrl:"./src/assets/preview.png"}),f(w,{title:"Energy Cell",previewUrl:"./src/assets/preview.png"}),f(w,{title:"Energy Cell",previewUrl:"./src/assets/preview.png"}),f(w,{title:"Energy Cell",previewUrl:"./src/assets/preview.png"}),f(w,{title:"Energy Cell",previewUrl:"./src/assets/preview.png"}),f(w,{title:"Energy Cell",previewUrl:"./src/assets/preview.png"}),f(w,{title:"Energy Cell",previewUrl:"./src/assets/preview.png"}),f(w,{title:"Energy Cell",previewUrl:"./src/assets/preview.png"}),f(w,{title:"Energy Cell",previewUrl:"./src/assets/preview.png"}),f(w,{title:"Energy Cell",previewUrl:"./src/assets/preview.png"}),f(w,{title:"Energy Cell",previewUrl:"./src/assets/preview.png"}),f(w,{title:"Energy Cell",previewUrl:"./src/assets/preview.png"}),f(w,{title:"Energy Cell",previewUrl:"./src/assets/preview.png"}),f(w,{title:"Energy Cell",previewUrl:"./src/assets/preview.png"}),f(w,{title:"Energy Cell",previewUrl:"./src/assets/preview.png"})]}}),null),A(()=>S(n,mn.text)),t})()}const Un=k("<div>The impressum</div>");function On(e){return Un.cloneNode(!0)}const In="_navbar_1ohjh_1",qn="_active_1ohjh_42";var pe={navbar:In,active:qn};const jn=k("<div></div>"),et=[{text:"Home",href:"/home"},{text:"Library",href:"/library"},{text:"License",href:"/license"},{text:"Impressum",href:"/impressum"}],[Fn,kn]=B("selectedTab");kn(et[0].text);function Bn(){return(()=>{const e=jn.cloneNode(!0);return L(e,f(wt,{each:et,children:t=>f(fn,{get href(){return t.href},get value(){return t.text},get inactiveClass(){return pe.inactive},get activeClass(){return pe.active},get children(){return t.text}})})),A(()=>S(e,pe.navbar)),e})()}const Mn=k("<div><header><span>Mesh Kit</span></header><div></div></div>");function Kn(){return(()=>{const e=Mn.cloneNode(!0),t=e.firstChild,n=t.firstChild,r=t.nextSibling;return L(t,f(Bn,{}),null),L(r,f(cn,{get children(){return[f(qe,{path:"/library",get element(){return f(Tn,{})}}),f(qe,{path:"/impressum",get element(){return f(On,{})}})]}})),A(s=>{const i=ne.app,o=ne.header,l=ne.title,u=ne.content;return i!==s._v$&&S(e,s._v$=i),o!==s._v$2&&S(t,s._v$2=o),l!==s._v$3&&S(n,s._v$3=l),u!==s._v$4&&S(r,s._v$4=u),s},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),e})()}At(()=>f(ln,{get children(){return f(Kn,{})}}),document.getElementById("root"));
