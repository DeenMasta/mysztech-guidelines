var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},c=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},l=(n,r,o)=>(o=n==null?{}:e(i(n)),c(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function D(e,t){return E(e.type,t,e.props)}function O(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ee(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var k=/\/+/g;function A(e,t){return typeof e==`object`&&e&&e.key!=null?ee(``+e.key):t.toString(36)}function j(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function te(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,te(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+A(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(k,`$&/`)+`/`),te(o,r,i,``,function(e){return e})):o!=null&&(O(o)&&(o=D(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(k,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+A(a,u),c+=te(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+A(a,u++),c+=te(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return te(j(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function M(e,t,n){if(e==null)return e;var r=[],i=0;return te(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ne(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var N=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},P={map:M,forEach:function(e,t,n){M(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return M(e,function(){t++}),t},toArray:function(e){return M(e,function(e){return e})||[]},only:function(e){if(!O(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=P,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=O,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ne}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,N)}catch(e){N(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.8`})),d=o(((e,t)=>{t.exports=u()})),f=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,O());else{var t=n(l);t!==null&&A(x,t.startTime-e)}}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&A(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}}}finally{i?O():S=!1}}}var O;if(typeof y==`function`)O=function(){y(D)};else if(typeof MessageChannel<`u`){var ee=new MessageChannel,k=ee.port2;ee.port1.onmessage=D,O=function(){k.postMessage(null)}}else O=function(){_(D,0)};function A(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,A(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,O()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),p=o(((e,t)=>{t.exports=f()})),m=o((e=>{var t=d();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.8`})),h=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=m()})),g=o((e=>{var t=p(),n=d(),r=h();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}var m=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),E=Symbol.for(`react.suspense_list`),D=Symbol.for(`react.memo`),O=Symbol.for(`react.lazy`),ee=Symbol.for(`react.activity`),k=Symbol.for(`react.memo_cache_sentinel`),A=Symbol.iterator;function j(e){return typeof e!=`object`||!e?null:(e=A&&e[A]||e[`@@iterator`],typeof e==`function`?e:null)}var te=Symbol.for(`react.client.reference`);function M(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===te?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case E:return`SuspenseList`;case ee:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case D:return t=e.displayName||null,t===null?M(e.type)||`Memo`:t;case O:t=e._payload,e=e._init;try{return M(e(t))}catch{}}return null}var ne=Array.isArray,N=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},re=[],ie=-1;function ae(e){return{current:e}}function oe(e){0>ie||(e.current=re[ie],re[ie]=null,ie--)}function I(e,t){ie++,re[ie]=e.current,e.current=t}var se=ae(null),ce=ae(null),le=ae(null),ue=ae(null);function de(e,t){switch(I(le,t),I(ce,e),I(se,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Jd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Jd(t),e=Yd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}oe(se),I(se,e)}function fe(){oe(se),oe(ce),oe(le)}function pe(e){e.memoizedState!==null&&I(ue,e);var t=se.current,n=Yd(t,e.type);t!==n&&(I(ce,e),I(se,n))}function me(e){ce.current===e&&(oe(se),oe(ce)),ue.current===e&&(oe(ue),ip._currentValue=F)}var he,ge;function _e(e){if(he===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);he=t&&t[1]||``,ge=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+he+e+ge}var ve=!1;function ye(e,t){if(!e||ve)return``;ve=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{ve=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?_e(n):``}function be(e,t){switch(e.tag){case 26:case 27:case 5:return _e(e.type);case 16:return _e(`Lazy`);case 13:return e.child!==t&&t!==null?_e(`Suspense Fallback`):_e(`Suspense`);case 19:return _e(`SuspenseList`);case 0:case 15:return ye(e.type,!1);case 11:return ye(e.type.render,!1);case 1:return ye(e.type,!0);case 31:return _e(`Activity`);default:return``}}function xe(e){try{var t=``,n=null;do t+=be(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Se=Object.prototype.hasOwnProperty,Ce=t.unstable_scheduleCallback,we=t.unstable_cancelCallback,Te=t.unstable_shouldYield,Ee=t.unstable_requestPaint,De=t.unstable_now,Oe=t.unstable_getCurrentPriorityLevel,ke=t.unstable_ImmediatePriority,Ae=t.unstable_UserBlockingPriority,je=t.unstable_NormalPriority,Me=t.unstable_LowPriority,Ne=t.unstable_IdlePriority,Pe=t.log,Fe=t.unstable_setDisableYieldValue,Ie=null,Le=null;function Re(e){if(typeof Pe==`function`&&Fe(e),Le&&typeof Le.setStrictMode==`function`)try{Le.setStrictMode(Ie,e)}catch{}}var ze=Math.clz32?Math.clz32:He,Be=Math.log,Ve=Math.LN2;function He(e){return e>>>=0,e===0?32:31-(Be(e)/Ve|0)|0}var Ue=256,We=262144,Ge=4194304;function Ke(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function qe(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Ke(n))):i=Ke(o):i=Ke(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Ke(n))):i=Ke(o)):i=Ke(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Je(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ye(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xe(){var e=Ge;return Ge<<=1,!(Ge&62914560)&&(Ge=4194304),e}function Ze(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Qe(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function $e(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-ze(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&et(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function et(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-ze(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function tt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ze(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function nt(e,t){var n=t&-t;return n=n&42?1:rt(n),(n&(e.suspendedLanes|t))===0?n:0}function rt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function it(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function at(){var e=P.p;return e===0?(e=window.event,e===void 0?32:bp(e.type)):e}function ot(e,t){var n=P.p;try{return P.p=e,t()}finally{P.p=n}}var st=Math.random().toString(36).slice(2),ct=`__reactFiber$`+st,lt=`__reactProps$`+st,ut=`__reactContainer$`+st,dt=`__reactEvents$`+st,ft=`__reactListeners$`+st,pt=`__reactHandles$`+st,mt=`__reactResources$`+st,ht=`__reactMarker$`+st;function gt(e){delete e[ct],delete e[lt],delete e[dt],delete e[ft],delete e[pt]}function _t(e){var t=e[ct];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ut]||n[ct]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=q(e);e!==null;){if(n=e[ct])return n;e=q(e)}return t}e=n,n=e.parentNode}return null}function vt(e){if(e=e[ct]||e[ut]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function yt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function bt(e){var t=e[mt];return t||=e[mt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function xt(e){e[ht]=!0}var St=new Set,Ct={};function wt(e,t){Tt(e,t),Tt(e+`Capture`,t)}function Tt(e,t){for(Ct[e]=t,e=0;e<t.length;e++)St.add(t[e])}var Et=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Dt={},Ot={};function kt(e){return Se.call(Ot,e)?!0:Se.call(Dt,e)?!1:Et.test(e)?Ot[e]=!0:(Dt[e]=!0,!1)}function At(e,t,n){if(kt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}}function jt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Mt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Nt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Pt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ft(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function It(e){if(!e._valueTracker){var t=Pt(e)?`checked`:`value`;e._valueTracker=Ft(e,t,``+e[t])}}function Lt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Pt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function Rt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var zt=/[\n"\\]/g;function Bt(e){return e.replace(zt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Vt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Nt(t)):e.value!==``+Nt(t)&&(e.value=``+Nt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Ut(e,o,Nt(n)):Ut(e,o,Nt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Nt(s):e.removeAttribute(`name`)}function Ht(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){It(e);return}n=n==null?``:``+Nt(n),t=t==null?n:``+Nt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),It(e)}function Ut(e,t,n){t===`number`&&Rt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Wt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Nt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Gt(e,t,n){if(t!=null&&(t=``+Nt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Nt(n)}function Kt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ne(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Nt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),It(e)}function qt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Jt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Yt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Jt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Xt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Yt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Yt(e,o,t[o])}function Zt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Qt=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),$t=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function en(e){return $t.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function tn(){}var nn=null;function rn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var an=null,on=null;function sn(e){var t=vt(e);if(t&&(e=t.stateNode)){var n=e[lt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Vt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Bt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[lt]||null;if(!a)throw Error(i(90));Vt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Lt(r)}break a;case`textarea`:Gt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Wt(e,!!n.multiple,t,!1)}}}var cn=!1;function ln(e,t,n){if(cn)return e(t,n);cn=!0;try{return e(t)}finally{if(cn=!1,(an!==null||on!==null)&&(Tu(),an&&(t=an,e=on,on=an=null,sn(t),e)))for(t=0;t<e.length;t++)sn(e[t])}}function un(e,t){var n=e.stateNode;if(n===null)return null;var r=n[lt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var dn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),fn=!1;if(dn)try{var pn={};Object.defineProperty(pn,"passive",{get:function(){fn=!0}}),window.addEventListener(`test`,pn,pn),window.removeEventListener(`test`,pn,pn)}catch{fn=!1}var mn=null,hn=null,gn=null;function _n(){if(gn)return gn;var e,t=hn,n=t.length,r,i=`value`in mn?mn.value:mn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return gn=i.slice(e,1<r?1-r:void 0)}function vn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function yn(){return!0}function bn(){return!1}function xn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?yn:bn,this.isPropagationStopped=bn,this}return m(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=yn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=yn)},persist:function(){},isPersistent:yn}),t}var Sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cn=xn(Sn),wn=m({},Sn,{view:0,detail:0}),Tn=xn(wn),En,Dn,On,kn=m({},wn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==On&&(On&&e.type===`mousemove`?(En=e.screenX-On.screenX,Dn=e.screenY-On.screenY):Dn=En=0,On=e),En)},movementY:function(e){return`movementY`in e?e.movementY:Dn}}),An=xn(kn),jn=xn(m({},kn,{dataTransfer:0})),Mn=xn(m({},wn,{relatedTarget:0})),Nn=xn(m({},Sn,{animationName:0,elapsedTime:0,pseudoElement:0})),Pn=xn(m({},Sn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Fn=xn(m({},Sn,{data:0})),In={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Ln={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Rn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function zn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Rn[e])?!!t[e]:!1}function Bn(){return zn}var Vn=xn(m({},wn,{key:function(e){if(e.key){var t=In[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=vn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Ln[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bn,charCode:function(e){return e.type===`keypress`?vn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?vn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Hn=xn(m({},kn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Un=xn(m({},wn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bn})),Wn=xn(m({},Sn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Gn=xn(m({},kn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Kn=xn(m({},Sn,{newState:0,oldState:0})),qn=[9,13,27,32],Jn=dn&&`CompositionEvent`in window,Yn=null;dn&&`documentMode`in document&&(Yn=document.documentMode);var Xn=dn&&`TextEvent`in window&&!Yn,Zn=dn&&(!Jn||Yn&&8<Yn&&11>=Yn),Qn=` `,$n=!1;function er(e,t){switch(e){case`keyup`:return qn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function tr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var nr=!1;function rr(e,t){switch(e){case`compositionend`:return tr(t);case`keypress`:return t.which===32?($n=!0,Qn):null;case`textInput`:return e=t.data,e===Qn&&$n?null:e;default:return null}}function ir(e,t){if(nr)return e===`compositionend`||!Jn&&er(e,t)?(e=_n(),gn=hn=mn=null,nr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Zn&&t.locale!==`ko`?null:t.data;default:return null}}var ar={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function or(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!ar[e.type]:t===`textarea`}function sr(e,t,n,r){an?on?on.push(r):on=[r]:an=r,t=Md(t,`onChange`),0<t.length&&(n=new Cn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var cr=null,lr=null;function ur(e){Td(e,0)}function dr(e){if(Lt(yt(e)))return e}function fr(e,t){if(e===`change`)return t}var pr=!1;if(dn){var mr;if(dn){var hr=`oninput`in document;if(!hr){var gr=document.createElement(`div`);gr.setAttribute(`oninput`,`return;`),hr=typeof gr.oninput==`function`}mr=hr}else mr=!1;pr=mr&&(!document.documentMode||9<document.documentMode)}function _r(){cr&&(cr.detachEvent(`onpropertychange`,vr),lr=cr=null)}function vr(e){if(e.propertyName===`value`&&dr(lr)){var t=[];sr(t,lr,e,rn(e)),ln(ur,t)}}function yr(e,t,n){e===`focusin`?(_r(),cr=t,lr=n,cr.attachEvent(`onpropertychange`,vr)):e===`focusout`&&_r()}function br(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return dr(lr)}function xr(e,t){if(e===`click`)return dr(t)}function Sr(e,t){if(e===`input`||e===`change`)return dr(t)}function Cr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var wr=typeof Object.is==`function`?Object.is:Cr;function Tr(e,t){if(wr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Se.call(t,i)||!wr(e[i],t[i]))return!1}return!0}function Er(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Dr(e,t){var n=Er(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Er(n)}}function Or(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Or(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function kr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Rt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Rt(e.document)}return t}function Ar(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var jr=dn&&`documentMode`in document&&11>=document.documentMode,Mr=null,Nr=null,Pr=null,Fr=!1;function Ir(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fr||Mr==null||Mr!==Rt(r)||(r=Mr,`selectionStart`in r&&Ar(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Pr&&Tr(Pr,r)||(Pr=r,r=Md(Nr,`onSelect`),0<r.length&&(t=new Cn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Mr)))}function Lr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Rr={animationend:Lr(`Animation`,`AnimationEnd`),animationiteration:Lr(`Animation`,`AnimationIteration`),animationstart:Lr(`Animation`,`AnimationStart`),transitionrun:Lr(`Transition`,`TransitionRun`),transitionstart:Lr(`Transition`,`TransitionStart`),transitioncancel:Lr(`Transition`,`TransitionCancel`),transitionend:Lr(`Transition`,`TransitionEnd`)},zr={},Br={};dn&&(Br=document.createElement(`div`).style,`AnimationEvent`in window||(delete Rr.animationend.animation,delete Rr.animationiteration.animation,delete Rr.animationstart.animation),`TransitionEvent`in window||delete Rr.transitionend.transition);function Vr(e){if(zr[e])return zr[e];if(!Rr[e])return e;var t=Rr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Br)return zr[e]=t[n];return e}var Hr=Vr(`animationend`),Ur=Vr(`animationiteration`),Wr=Vr(`animationstart`),Gr=Vr(`transitionrun`),Kr=Vr(`transitionstart`),qr=Vr(`transitioncancel`),Jr=Vr(`transitionend`),Yr=new Map,Xr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Xr.push(`scrollEnd`);function Zr(e,t){Yr.set(e,t),wt(t,[e])}var Qr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},$r=[],ei=0,ti=0;function ni(){for(var e=ei,t=ti=ei=0;t<e;){var n=$r[t];$r[t++]=null;var r=$r[t];$r[t++]=null;var i=$r[t];$r[t++]=null;var a=$r[t];if($r[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&oi(n,i,a)}}function ri(e,t,n,r){$r[ei++]=e,$r[ei++]=t,$r[ei++]=n,$r[ei++]=r,ti|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ii(e,t,n,r){return ri(e,t,n,r),si(e)}function ai(e,t){return ri(e,null,null,t),si(e)}function oi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-ze(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function si(e){if(50<gu)throw gu=0,_u=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ci={};function li(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ui(e,t,n,r){return new li(e,t,n,r)}function di(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fi(e,t){var n=e.alternate;return n===null?(n=ui(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function pi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function mi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)di(e)&&(s=1);else if(typeof e==`string`)s=Yf(e,n,se.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ee:return e=ui(31,n,t,a),e.elementType=ee,e.lanes=o,e;case y:return hi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=ui(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case T:return e=ui(13,n,t,a),e.elementType=T,e.lanes=o,e;case E:return e=ui(19,n,t,a),e.elementType=E,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case D:s=14;break a;case O:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=ui(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function hi(e,t,n,r){return e=ui(7,e,r,t),e.lanes=n,e}function gi(e,t,n){return e=ui(6,e,null,t),e.lanes=n,e}function _i(e){var t=ui(18,null,null,0);return t.stateNode=e,t}function vi(e,t,n){return t=ui(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var yi=new WeakMap;function bi(e,t){if(typeof e==`object`&&e){var n=yi.get(e);return n===void 0?(t={value:e,source:t,stack:xe(t)},yi.set(e,t),t):n}return{value:e,source:t,stack:xe(t)}}var xi=[],Si=0,Ci=null,wi=0,Ti=[],Ei=0,Di=null,Oi=1,ki=``;function Ai(e,t){xi[Si++]=wi,xi[Si++]=Ci,Ci=e,wi=t}function ji(e,t,n){Ti[Ei++]=Oi,Ti[Ei++]=ki,Ti[Ei++]=Di,Di=e;var r=Oi;e=ki;var i=32-ze(r)-1;r&=~(1<<i),n+=1;var a=32-ze(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Oi=1<<32-ze(t)+i|n<<i|r,ki=a+e}else Oi=1<<a|n<<i|r,ki=e}function Mi(e){e.return!==null&&(Ai(e,1),ji(e,1,0))}function Ni(e){for(;e===Ci;)Ci=xi[--Si],xi[Si]=null,wi=xi[--Si],xi[Si]=null;for(;e===Di;)Di=Ti[--Ei],Ti[Ei]=null,ki=Ti[--Ei],Ti[Ei]=null,Oi=Ti[--Ei],Ti[Ei]=null}function Pi(e,t){Ti[Ei++]=Oi,Ti[Ei++]=ki,Ti[Ei++]=Di,Oi=t.id,ki=t.overflow,Di=e}var Fi=null,Ii=null,L=!1,Li=null,Ri=!1,zi=Error(i(519));function Bi(e){throw Ki(bi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),zi}function Vi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[ct]=e,t[lt]=r,n){case`dialog`:K(`cancel`,t),K(`close`,t);break;case`iframe`:case`object`:case`embed`:K(`load`,t);break;case`video`:case`audio`:for(n=0;n<Cd.length;n++)K(Cd[n],t);break;case`source`:K(`error`,t);break;case`img`:case`image`:case`link`:K(`error`,t),K(`load`,t);break;case`details`:K(`toggle`,t);break;case`input`:K(`invalid`,t),Ht(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:K(`invalid`,t);break;case`textarea`:K(`invalid`,t),Kt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Rd(t.textContent,n)?(r.popover!=null&&(K(`beforetoggle`,t),K(`toggle`,t)),r.onScroll!=null&&K(`scroll`,t),r.onScrollEnd!=null&&K(`scrollend`,t),r.onClick!=null&&(t.onclick=tn),t=!0):t=!1,t||Bi(e,!0)}function Hi(e){for(Fi=e.return;Fi;)switch(Fi.tag){case 5:case 31:case 13:Ri=!1;return;case 27:case 3:Ri=!0;return;default:Fi=Fi.return}}function Ui(e){if(e!==Fi)return!1;if(!L)return Hi(e),L=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Xd(e.type,e.memoizedProps)),n=!n),n&&Ii&&Bi(e),Hi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Ii=_f(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Ii=_f(e)}else t===27?(t=Ii,af(e.type)?(e=gf,gf=null,Ii=e):Ii=t):Ii=Fi?hf(e.stateNode.nextSibling):null;return!0}function Wi(){Ii=Fi=null,L=!1}function Gi(){var e=Li;return e!==null&&(G===null?G=e:G.push.apply(G,e),Li=null),e}function Ki(e){Li===null?Li=[e]:Li.push(e)}var qi=ae(null),Ji=null,Yi=null;function Xi(e,t,n){I(qi,t._currentValue),t._currentValue=n}function Zi(e){e._currentValue=qi.current,oe(qi)}function Qi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function $i(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Qi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Qi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ea(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;wr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ue.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[ip]:e.push(ip))}a=a.return}e!==null&&$i(t,e,n,r),t.flags|=262144}function ta(e){for(e=e.firstContext;e!==null;){if(!wr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function na(e){Ji=e,Yi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ra(e){return aa(Ji,e)}function ia(e,t){return Ji===null&&na(e),aa(e,t)}function aa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Yi===null){if(e===null)throw Error(i(308));Yi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Yi=Yi.next=t;return n}var oa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},sa=t.unstable_scheduleCallback,ca=t.unstable_NormalPriority,R={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function la(){return{controller:new oa,data:new Map,refCount:0}}function ua(e){e.refCount--,e.refCount===0&&sa(ca,function(){e.controller.abort()})}var da=null,fa=0,pa=0,ma=null;function ha(e,t){if(da===null){var n=da=[];fa=0,pa=_d(),ma={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return fa++,t.then(ga,ga),t}function ga(){if(--fa===0&&da!==null){ma!==null&&(ma.status=`fulfilled`);var e=da;da=null,pa=0,ma=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function _a(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var va=N.S;N.S=function(e,t){au=De(),typeof t==`object`&&t&&typeof t.then==`function`&&ha(e,t),va!==null&&va(e,t)};var ya=ae(null);function ba(){var e=ya.current;return e===null?Ul.pooledCache:e}function xa(e,t){t===null?I(ya,ya.current):I(ya,t.pool)}function Sa(){var e=ba();return e===null?null:{parent:R._currentValue,pool:e}}var Ca=Error(i(460)),wa=Error(i(474)),Ta=Error(i(542)),Ea={then:function(){}};function Da(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Oa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(tn,tn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ma(e),e;default:if(typeof t.status==`string`)t.then(tn,tn);else{if(e=Ul,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ma(e),e}throw Aa=t,Ca}}function ka(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Aa=e,Ca):e}}var Aa=null;function ja(){if(Aa===null)throw Error(i(459));var e=Aa;return Aa=null,e}function Ma(e){if(e===Ca||e===Ta)throw Error(i(483))}var Na=null,Pa=0;function Fa(e){var t=Pa;return Pa+=1,Na===null&&(Na=[]),Oa(Na,e,t)}function Ia(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function La(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ra(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=fi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=gi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===O&&ka(i)===t.type)?(t=a(t,n.props),Ia(t,n),t.return=e,t):(t=mi(n.type,n.key,n.props,null,e.mode,r),Ia(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=vi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=hi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=gi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=mi(t.type,t.key,t.props,null,e.mode,n),Ia(n,t),n.return=e,n;case v:return t=vi(t,e.mode,n),t.return=e,t;case O:return t=ka(t),f(e,t,n)}if(ne(t)||j(t))return t=hi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Fa(t),n);if(t.$$typeof===C)return f(e,ia(e,t),n);La(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case O:return n=ka(n),p(e,t,n,r)}if(ne(n)||j(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Fa(n),r);if(n.$$typeof===C)return p(e,t,ia(e,n),r);La(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case O:return r=ka(r),m(e,t,n,r,i)}if(ne(r)||j(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Fa(r),i);if(r.$$typeof===C)return m(e,t,n,ia(t,r),i);La(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),L&&Ai(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return L&&Ai(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),L&&Ai(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),L&&Ai(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return L&&Ai(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),L&&Ai(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===O&&ka(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ia(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===y?(c=hi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=mi(o.type,o.key,o.props,null,e.mode,c),Ia(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=vi(o,e.mode,c),c.return=e,e=c}return s(e);case O:return o=ka(o),b(e,r,o,c)}if(ne(o))return h(e,r,o,c);if(j(o)){if(l=j(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Fa(o),c);if(o.$$typeof===C)return b(e,r,ia(e,o),c);La(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=gi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Pa=0;var i=b(e,t,n,r);return Na=null,i}catch(t){if(t===Ca||t===Ta)throw t;var a=ui(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var za=Ra(!0),Ba=Ra(!1),Va=!1;function Ha(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ua(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Wa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ga(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,H&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=si(e),oi(e,null,n),t}return ri(e,r,t,n),si(e)}function Ka(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tt(e,n)}}function qa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ja=!1;function Ya(){if(Ja){var e=ma;if(e!==null)throw e}}function Xa(e,t,n,r){Ja=!1;var i=e.updateQueue;Va=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(W&f)===f:(r&f)===f){f!==0&&f===pa&&(Ja=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,f);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,f=typeof h==`function`?h.call(_,d,f):h,f==null)break a;d=m({},d,f);break a;case 2:Va=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Zl|=o,e.lanes=o,e.memoizedState=d}}function Za(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Qa(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Za(n[e],t)}var $a=ae(null),eo=ae(0);function to(e,t){e=Yl,I(eo,e),I($a,t),Yl=e|t.baseLanes}function no(){I(eo,Yl),I($a,$a.current)}function ro(){Yl=eo.current,oe($a),oe(eo)}var io=ae(null),ao=null;function oo(e){var t=e.alternate;I(fo,fo.current&1),I(io,e),ao===null&&(t===null||$a.current!==null||t.memoizedState!==null)&&(ao=e)}function so(e){I(fo,fo.current),I(io,e),ao===null&&(ao=e)}function co(e){e.tag===22?(I(fo,fo.current),I(io,e),ao===null&&(ao=e)):lo(e)}function lo(){I(fo,fo.current),I(io,io.current)}function uo(e){oe(io),ao===e&&(ao=null),oe(fo)}var fo=ae(0);function po(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||ff(n)||pf(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var mo=0,z=null,B=null,ho=null,go=!1,_o=!1,vo=!1,yo=0,bo=0,xo=null,So=0;function Co(){throw Error(i(321))}function wo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wr(e[n],t[n]))return!1;return!0}function To(e,t,n,r,i,a){return mo=a,z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,N.H=e===null||e.memoizedState===null?Hs:Us,vo=!1,a=n(r,i),vo=!1,_o&&(a=Do(t,n,r,i)),Eo(e),a}function Eo(e){N.H=Vs;var t=B!==null&&B.next!==null;if(mo=0,ho=B=z=null,go=!1,bo=0,xo=null,t)throw Error(i(300));e===null||oc||(e=e.dependencies,e!==null&&ta(e)&&(oc=!0))}function Do(e,t,n,r){z=e;var a=0;do{if(_o&&(xo=null),bo=0,_o=!1,25<=a)throw Error(i(301));if(a+=1,ho=B=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}N.H=Ws,o=t(n,r)}while(_o);return o}function Oo(){var e=N.H,t=e.useState()[0];return t=typeof t.then==`function`?Fo(t):t,e=e.useState()[0],(B===null?null:B.memoizedState)!==e&&(z.flags|=1024),t}function ko(){var e=yo!==0;return yo=0,e}function Ao(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function jo(e){if(go){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}go=!1}mo=0,ho=B=z=null,_o=!1,bo=yo=0,xo=null}function Mo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ho===null?z.memoizedState=ho=e:ho=ho.next=e,ho}function No(){if(B===null){var e=z.alternate;e=e===null?null:e.memoizedState}else e=B.next;var t=ho===null?z.memoizedState:ho.next;if(t!==null)ho=t,B=e;else{if(e===null)throw z.alternate===null?Error(i(467)):Error(i(310));B=e,e={memoizedState:B.memoizedState,baseState:B.baseState,baseQueue:B.baseQueue,queue:B.queue,next:null},ho===null?z.memoizedState=ho=e:ho=ho.next=e}return ho}function Po(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fo(e){var t=bo;return bo+=1,xo===null&&(xo=[]),e=Oa(xo,e,t),t=z,(ho===null?t.memoizedState:ho.next)===null&&(t=t.alternate,N.H=t===null||t.memoizedState===null?Hs:Us),e}function Io(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Fo(e);if(e.$$typeof===C)return ra(e)}throw Error(i(438,String(e)))}function Lo(e){var t=null,n=z.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=z.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Po(),z.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=k;return t.index++,n}function Ro(e,t){return typeof t==`function`?t(e):t}function zo(e){return Bo(No(),B,e)}function Bo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(mo&f)===f:(W&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===pa&&(d=!0);else if((mo&p)===p){u=u.next,p===pa&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,z.lanes|=p,Zl|=p;f=u.action,vo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,z.lanes|=f,Zl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!wr(o,e.memoizedState)&&(oc=!0,d&&(n=ma,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Vo(e){var t=No(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);wr(o,t.memoizedState)||(oc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ho(e,t,n){var r=z,a=No(),o=L;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!wr((B||a).memoizedState,n);if(s&&(a.memoizedState=n,oc=!0),a=a.queue,ps(Go.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||ho!==null&&ho.memoizedState.tag&1){if(r.flags|=2048,cs(9,{destroy:void 0},Wo.bind(null,r,a,n,t),null),Ul===null)throw Error(i(349));o||mo&127||Uo(r,t,n)}return n}function Uo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=z.updateQueue,t===null?(t=Po(),z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wo(e,t,n,r){t.value=n,t.getSnapshot=r,Ko(t)&&qo(e)}function Go(e,t,n){return n(function(){Ko(t)&&qo(e)})}function Ko(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wr(e,n)}catch{return!0}}function qo(e){var t=ai(e,2);t!==null&&bu(t,e,2)}function Jo(e){var t=Mo();if(typeof e==`function`){var n=e;if(e=n(),vo){Re(!0);try{n()}finally{Re(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:e},t}function Yo(e,t,n,r){return e.baseState=n,Bo(e,B,typeof r==`function`?r:Ro)}function Xo(e,t,n,r,a){if(Rs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};N.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Zo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Zo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=N.T,o={};N.T=o;try{var s=n(i,r),c=N.S;c!==null&&c(o,s),Qo(e,t,s)}catch(n){es(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),N.T=a}}else try{a=n(i,r),Qo(e,t,a)}catch(n){es(e,t,n)}}function Qo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){$o(e,t,n)},function(n){return es(e,t,n)}):$o(e,t,n)}function $o(e,t,n){t.status=`fulfilled`,t.value=n,ts(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Zo(e,n)))}function es(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ts(t),t=t.next;while(t!==r)}e.action=null}function ts(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ns(e,t){return t}function rs(e,t){if(L){var n=Ul.formState;if(n!==null){a:{var r=z;if(L){if(Ii){b:{for(var i=Ii,a=Ri;i.nodeType!==8;){if(!a){i=null;break b}if(i=hf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){Ii=hf(i.nextSibling),r=i.data===`F!`;break a}}Bi(r)}r=!1}r&&(t=n[0])}}return n=Mo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ns,lastRenderedState:t},n.queue=r,n=Fs.bind(null,z,r),r.dispatch=n,r=Jo(!1),a=Ls.bind(null,z,!1,r.queue),r=Mo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Xo.bind(null,z,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function is(e){return as(No(),B,e)}function as(e,t,n){if(t=Bo(e,t,ns)[0],e=zo(Ro)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Fo(t)}catch(e){throw e===Ca?Ta:e}else r=t;t=No();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(z.flags|=2048,cs(9,{destroy:void 0},os.bind(null,i,n),null)),[r,a,e]}function os(e,t){e.action=t}function ss(e){var t=No(),n=B;if(n!==null)return as(t,n,e);No(),t=t.memoizedState,n=No();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function cs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=z.updateQueue,t===null&&(t=Po(),z.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ls(){return No().memoizedState}function us(e,t,n,r){var i=Mo();z.flags|=e,i.memoizedState=cs(1|t,{destroy:void 0},n,r===void 0?null:r)}function ds(e,t,n,r){var i=No();r=r===void 0?null:r;var a=i.memoizedState.inst;B!==null&&r!==null&&wo(r,B.memoizedState.deps)?i.memoizedState=cs(t,a,n,r):(z.flags|=e,i.memoizedState=cs(1|t,a,n,r))}function fs(e,t){us(8390656,8,e,t)}function ps(e,t){ds(2048,8,e,t)}function ms(e){z.flags|=4;var t=z.updateQueue;if(t===null)t=Po(),z.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function hs(e){var t=No().memoizedState;return ms({ref:t,nextImpl:e}),function(){if(H&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function gs(e,t){return ds(4,2,e,t)}function _s(e,t){return ds(4,4,e,t)}function vs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ys(e,t,n){n=n==null?null:n.concat([e]),ds(4,4,vs.bind(null,t,e),n)}function bs(){}function xs(e,t){var n=No();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&wo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ss(e,t){var n=No();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&wo(t,r[1]))return r[0];if(r=e(),vo){Re(!0);try{e()}finally{Re(!1)}}return n.memoizedState=[r,t],r}function Cs(e,t,n){return n===void 0||mo&1073741824&&!(W&261930)?e.memoizedState=t:(e.memoizedState=n,e=yu(),z.lanes|=e,Zl|=e,n)}function ws(e,t,n,r){return wr(n,t)?n:$a.current===null?!(mo&42)||mo&1073741824&&!(W&261930)?(oc=!0,e.memoizedState=n):(e=yu(),z.lanes|=e,Zl|=e,t):(e=Cs(e,n,r),wr(e,t)||(oc=!0),e)}function Ts(e,t,n,r,i){var a=P.p;P.p=a!==0&&8>a?a:8;var o=N.T,s={};N.T=s,Ls(e,!1,t,n);try{var c=i(),l=N.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Is(e,t,_a(c,r),vu(e)):Is(e,t,r,vu(e))}catch(n){Is(e,t,{then:function(){},status:`rejected`,reason:n},vu())}finally{P.p=a,o!==null&&s.types!==null&&(o.types=s.types),N.T=o}}function Es(){}function Ds(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Os(e).queue;Ts(e,a,t,F,n===null?Es:function(){return ks(e),n(r)})}function Os(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:F},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ks(e){var t=Os(e);t.next===null&&(t=e.alternate.memoizedState),Is(e,t.next.queue,{},vu())}function As(){return ra(ip)}function js(){return No().memoizedState}function Ms(){return No().memoizedState}function Ns(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=vu();e=Wa(n);var r=Ga(t,e,n);r!==null&&(bu(r,t,n),Ka(r,t,n)),t={cache:la()},e.payload=t;return}t=t.return}}function Ps(e,t,n){var r=vu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Rs(e)?zs(t,n):(n=ii(e,t,n,r),n!==null&&(bu(n,e,r),Bs(n,t,r)))}function Fs(e,t,n){Is(e,t,n,vu())}function Is(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rs(e))zs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,wr(s,o))return ri(e,t,i,0),Ul===null&&ni(),!1}catch{}if(n=ii(e,t,i,r),n!==null)return bu(n,e,r),Bs(n,t,r),!0}return!1}function Ls(e,t,n,r){if(r={lane:2,revertLane:_d(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Rs(e)){if(t)throw Error(i(479))}else t=ii(e,n,r,2),t!==null&&bu(t,e,2)}function Rs(e){var t=e.alternate;return e===z||t!==null&&t===z}function zs(e,t){_o=go=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Bs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tt(e,n)}}var Vs={readContext:ra,use:Io,useCallback:Co,useContext:Co,useEffect:Co,useImperativeHandle:Co,useLayoutEffect:Co,useInsertionEffect:Co,useMemo:Co,useReducer:Co,useRef:Co,useState:Co,useDebugValue:Co,useDeferredValue:Co,useTransition:Co,useSyncExternalStore:Co,useId:Co,useHostTransitionStatus:Co,useFormState:Co,useActionState:Co,useOptimistic:Co,useMemoCache:Co,useCacheRefresh:Co};Vs.useEffectEvent=Co;var Hs={readContext:ra,use:Io,useCallback:function(e,t){return Mo().memoizedState=[e,t===void 0?null:t],e},useContext:ra,useEffect:fs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),us(4194308,4,vs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return us(4194308,4,e,t)},useInsertionEffect:function(e,t){us(4,2,e,t)},useMemo:function(e,t){var n=Mo();t=t===void 0?null:t;var r=e();if(vo){Re(!0);try{e()}finally{Re(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Mo();if(n!==void 0){var i=n(t);if(vo){Re(!0);try{n(t)}finally{Re(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ps.bind(null,z,e),[r.memoizedState,e]},useRef:function(e){var t=Mo();return e={current:e},t.memoizedState=e},useState:function(e){e=Jo(e);var t=e.queue,n=Fs.bind(null,z,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:bs,useDeferredValue:function(e,t){return Cs(Mo(),e,t)},useTransition:function(){var e=Jo(!1);return e=Ts.bind(null,z,e.queue,!0,!1),Mo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=z,a=Mo();if(L){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Ul===null)throw Error(i(349));W&127||Uo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,fs(Go.bind(null,r,o,e),[e]),r.flags|=2048,cs(9,{destroy:void 0},Wo.bind(null,r,o,n,t),null),n},useId:function(){var e=Mo(),t=Ul.identifierPrefix;if(L){var n=ki,r=Oi;n=(r&~(1<<32-ze(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=yo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=So++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:As,useFormState:rs,useActionState:rs,useOptimistic:function(e){var t=Mo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ls.bind(null,z,!0,n),n.dispatch=t,[e,t]},useMemoCache:Lo,useCacheRefresh:function(){return Mo().memoizedState=Ns.bind(null,z)},useEffectEvent:function(e){var t=Mo(),n={impl:e};return t.memoizedState=n,function(){if(H&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Us={readContext:ra,use:Io,useCallback:xs,useContext:ra,useEffect:ps,useImperativeHandle:ys,useInsertionEffect:gs,useLayoutEffect:_s,useMemo:Ss,useReducer:zo,useRef:ls,useState:function(){return zo(Ro)},useDebugValue:bs,useDeferredValue:function(e,t){return ws(No(),B.memoizedState,e,t)},useTransition:function(){var e=zo(Ro)[0],t=No().memoizedState;return[typeof e==`boolean`?e:Fo(e),t]},useSyncExternalStore:Ho,useId:js,useHostTransitionStatus:As,useFormState:is,useActionState:is,useOptimistic:function(e,t){return Yo(No(),B,e,t)},useMemoCache:Lo,useCacheRefresh:Ms};Us.useEffectEvent=hs;var Ws={readContext:ra,use:Io,useCallback:xs,useContext:ra,useEffect:ps,useImperativeHandle:ys,useInsertionEffect:gs,useLayoutEffect:_s,useMemo:Ss,useReducer:Vo,useRef:ls,useState:function(){return Vo(Ro)},useDebugValue:bs,useDeferredValue:function(e,t){var n=No();return B===null?Cs(n,e,t):ws(n,B.memoizedState,e,t)},useTransition:function(){var e=Vo(Ro)[0],t=No().memoizedState;return[typeof e==`boolean`?e:Fo(e),t]},useSyncExternalStore:Ho,useId:js,useHostTransitionStatus:As,useFormState:ss,useActionState:ss,useOptimistic:function(e,t){var n=No();return B===null?(n.baseState=e,[e,n.queue.dispatch]):Yo(n,B,e,t)},useMemoCache:Lo,useCacheRefresh:Ms};Ws.useEffectEvent=hs;function Gs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:m({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ks={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=vu(),i=Wa(r);i.payload=t,n!=null&&(i.callback=n),t=Ga(e,i,r),t!==null&&(bu(t,e,r),Ka(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=vu(),i=Wa(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ga(e,i,r),t!==null&&(bu(t,e,r),Ka(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=vu(),r=Wa(n);r.tag=2,t!=null&&(r.callback=t),t=Ga(e,r,n),t!==null&&(bu(t,e,n),Ka(t,e,n))}};function qs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Tr(n,r)||!Tr(i,a):!0}function Js(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ks.enqueueReplaceState(t,t.state,null)}function Ys(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=m({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Xs(e){Qr(e)}function Zs(e){console.error(e)}function Qs(e){Qr(e)}function $s(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function ec(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function tc(e,t,n){return n=Wa(n),n.tag=3,n.payload={element:null},n.callback=function(){$s(e,t)},n}function nc(e){return e=Wa(e),e.tag=3,e}function rc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){ec(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){ec(t,n,r),typeof i!=`function`&&(cu===null?cu=new Set([this]):cu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function ic(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ea(t,n,a,!0),n=io.current,n!==null){switch(n.tag){case 31:case 13:return ao===null?Mu():n.alternate===null&&Xl===0&&(Xl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Ea?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Zu(e,r,a)),!1;case 22:return n.flags|=65536,r===Ea?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Zu(e,r,a)),!1}throw Error(i(435,n.tag))}return Zu(e,r,a),Mu(),!1}if(L)return t=io.current,t===null?(r!==zi&&(t=Error(i(423),{cause:r}),Ki(bi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=bi(r,n),a=tc(e.stateNode,r,a),qa(e,a),Xl!==4&&(Xl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==zi&&(e=Error(i(422),{cause:r}),Ki(bi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=bi(o,n),nu===null?nu=[o]:nu.push(o),Xl!==4&&(Xl=2),t===null)return!0;r=bi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=tc(n.stateNode,r,e),qa(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(cu===null||!cu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=nc(a),rc(a,e,n,r),qa(n,a),!1}n=n.return}while(n!==null);return!1}var ac=Error(i(461)),oc=!1;function sc(e,t,n,r){t.child=e===null?Ba(t,null,n,r):za(t,e.child,n,r)}function cc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return na(t),r=To(e,t,n,o,a,i),s=ko(),e!==null&&!oc?(Ao(e,t,i),Mc(e,t,i)):(L&&s&&Mi(t),t.flags|=1,sc(e,t,r,i),t.child)}function lc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!di(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,uc(e,t,a,r,i)):(e=mi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Nc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Tr:n,n(o,r)&&e.ref===t.ref)return Mc(e,t,i)}return t.flags|=1,e=fi(a,r),e.ref=t.ref,e.return=t,t.child=e}function uc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Tr(a,r)&&e.ref===t.ref){if(oc=!1,t.pendingProps=r=a,Nc(e,i))e.flags&131072&&(oc=!0);else return t.lanes=e.lanes,Mc(e,t,i)}}return vc(e,t,n,r,i)}function dc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return pc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&xa(t,a===null?null:a.cachePool),a===null?no():to(t,a),co(t);else return r=t.lanes=536870912,pc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&xa(t,null),no(),lo(t)):(xa(t,a.cachePool),to(t,a),lo(t),t.memoizedState=null);return sc(e,t,i,n),t.child}function fc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function pc(e,t,n,r,i){var a=ba();return a=a===null?null:{parent:R._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&xa(t,null),no(),co(t),e!==null&&ea(e,t,r,!0),t.childLanes=i,null}function mc(e,t){return t=Dc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function hc(e,t,n){return za(t,e.child,null,n),e=mc(t,t.pendingProps),e.flags|=2,uo(t),t.memoizedState=null,e}function gc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(L){if(r.mode===`hidden`)return e=mc(t,r),t.lanes=536870912,fc(null,e);if(so(t),(e=Ii)?(e=df(e,Ri),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Di===null?null:{id:Oi,overflow:ki},retryLane:536870912,hydrationErrors:null},n=_i(e),n.return=t,t.child=n,Fi=t,Ii=null)):e=null,e===null)throw Bi(t);return t.lanes=536870912,null}return mc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(so(t),a){if(t.flags&256)t.flags&=-257,t=hc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(oc||ea(e,t,n,!1),a=(n&e.childLanes)!==0,oc||a){if(r=Ul,r!==null&&(s=nt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ai(e,s),bu(r,e,s),ac;Mu(),t=hc(e,t,n)}else e=o.treeContext,Ii=hf(s.nextSibling),Fi=t,L=!0,Li=null,Ri=!1,e!==null&&Pi(t,e),t=mc(t,r),t.flags|=4096;return t}return e=fi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function _c(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function vc(e,t,n,r,i){return na(t),n=To(e,t,n,r,void 0,i),r=ko(),e!==null&&!oc?(Ao(e,t,i),Mc(e,t,i)):(L&&r&&Mi(t),t.flags|=1,sc(e,t,n,i),t.child)}function yc(e,t,n,r,i,a){return na(t),t.updateQueue=null,n=Do(t,r,n,i),Eo(e),r=ko(),e!==null&&!oc?(Ao(e,t,a),Mc(e,t,a)):(L&&r&&Mi(t),t.flags|=1,sc(e,t,n,a),t.child)}function bc(e,t,n,r,i){if(na(t),t.stateNode===null){var a=ci,o=n.contextType;typeof o==`object`&&o&&(a=ra(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ks,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ha(t),o=n.contextType,a.context=typeof o==`object`&&o?ra(o):ci,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Gs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ks.enqueueReplaceState(a,a.state,null),Xa(t,r,a,i),Ya(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ys(n,s);a.props=c;var l=a.context,u=n.contextType;o=ci,typeof u==`object`&&u&&(o=ra(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Js(t,a,r,o),Va=!1;var f=t.memoizedState;a.state=f,Xa(t,r,a,i),Ya(),l=t.memoizedState,s||f!==l||Va?(typeof d==`function`&&(Gs(t,n,d,r),l=t.memoizedState),(c=Va||qs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ua(e,t),o=t.memoizedProps,u=Ys(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ci,typeof l==`object`&&l&&(c=ra(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Js(t,a,r,c),Va=!1,f=t.memoizedState,a.state=f,Xa(t,r,a,i),Ya();var p=t.memoizedState;o!==d||f!==p||Va||e!==null&&e.dependencies!==null&&ta(e.dependencies)?(typeof s==`function`&&(Gs(t,n,s,r),p=t.memoizedState),(u=Va||qs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ta(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,_c(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=za(t,e.child,null,i),t.child=za(t,null,n,i)):sc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Mc(e,t,i),e}function xc(e,t,n,r){return Wi(),t.flags|=256,sc(e,t,n,r),t.child}var Sc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cc(e){return{baseLanes:e,cachePool:Sa()}}function wc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=eu),e}function Tc(e,t,n){var r=t.pendingProps,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(fo.current&2)),s&&(a=!0,t.flags&=-129),s=!!(t.flags&32),t.flags&=-33,e===null){if(L){if(a?oo(t):lo(t),(e=Ii)?(e=df(e,Ri),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Di===null?null:{id:Oi,overflow:ki},retryLane:536870912,hydrationErrors:null},n=_i(e),n.return=t,t.child=n,Fi=t,Ii=null)):e=null,e===null)throw Bi(t);return pf(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(lo(t),a=t.mode,c=Dc({mode:`hidden`,children:c},a),r=hi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Cc(n),r.childLanes=wc(e,s,n),t.memoizedState=Sc,fc(null,r)):(oo(t),Ec(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(oo(t),t.flags&=-257,t=Oc(e,t,n)):t.memoizedState===null?(lo(t),c=r.fallback,a=t.mode,r=Dc({mode:`visible`,children:r.children},a),c=hi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,za(t,e.child,null,n),r=t.child,r.memoizedState=Cc(n),r.childLanes=wc(e,s,n),t.memoizedState=Sc,t=fc(null,r)):(lo(t),t.child=e.child,t.flags|=128,t=null);else if(oo(t),pf(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Ki({value:r,source:null,stack:null}),t=Oc(e,t,n)}else if(oc||ea(e,t,n,!1),s=(n&e.childLanes)!==0,oc||s){if(s=Ul,s!==null&&(r=nt(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ai(e,r),bu(s,e,r),ac;ff(c)||Mu(),t=Oc(e,t,n)}else ff(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Ii=hf(c.nextSibling),Fi=t,L=!0,Li=null,Ri=!1,e!==null&&Pi(t,e),t=Ec(t,r.children),t.flags|=4096);return t}return a?(lo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=fi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=hi(c,a,n,null),c.flags|=2):c=fi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,fc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Cc(n):(a=c.cachePool,a===null?a=Sa():(l=R._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=wc(e,s,n),t.memoizedState=Sc,fc(e.child,r)):(oo(t),n=e.child,e=n.sibling,n=fi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Ec(e,t){return t=Dc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Dc(e,t){return e=ui(22,e,null,t),e.lanes=0,e}function Oc(e,t,n){return za(t,e.child,null,n),e=Ec(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Qi(e.return,t,n)}function Ac(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function jc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=fo.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,I(fo,o),sc(e,t,r,n),r=L?wi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&kc(e,n,t);else if(e.tag===19)kc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&po(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ac(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&po(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ac(t,!0,n,null,a,r);break;case`together`:Ac(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Mc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Zl|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(ea(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=fi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=fi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Nc(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&ta(e)))}function Pc(e,t,n){switch(t.tag){case 3:de(t,t.stateNode.containerInfo),Xi(t,R,e.memoizedState.cache),Wi();break;case 27:case 5:pe(t);break;case 4:de(t,t.stateNode.containerInfo);break;case 10:Xi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,so(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(oo(t),e=Mc(e,t,n),e===null?null:e.sibling):Tc(e,t,n):(oo(t),t.flags|=128,null);oo(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=(ea(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return jc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),I(fo,fo.current),r)break;return null;case 22:return t.lanes=0,dc(e,t,n,t.pendingProps);case 24:Xi(t,R,e.memoizedState.cache)}return Mc(e,t,n)}function Fc(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)oc=!0;else{if(!Nc(e,n)&&!(t.flags&128))return oc=!1,Pc(e,t,n);oc=!!(e.flags&131072)}}else oc=!1,L&&t.flags&1048576&&ji(t,wi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=ka(t.elementType),t.type=e,typeof e==`function`)di(e)?(r=Ys(e,r),t.tag=1,t=bc(null,t,e,r,n)):(t.tag=0,t=vc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=cc(null,t,e,r,n);break a}if(a===D){t.tag=14,t=lc(null,t,e,r,n);break a}}throw t=M(e)||e,Error(i(306,t,``))}}return t;case 0:return vc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Ys(r,t.pendingProps),bc(e,t,r,a,n);case 3:a:{if(de(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ua(e,t),Xa(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Xi(t,R,r),r!==o.cache&&$i(t,[R],n,!0),Ya(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=xc(e,t,r,n);break a}if(r!==a){a=bi(Error(i(424)),t),Ki(a),t=xc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(Ii=hf(e.firstChild),Fi=t,L=!0,Li=null,Ri=!0,n=Ba(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Wi(),r===a){t=Mc(e,t,n);break a}sc(e,t,r,n)}t=t.child}return t;case 26:return _c(e,t),e===null?(n=Ff(t.type,null,t.pendingProps,null))?t.memoizedState=n:L||(n=t.type,e=t.pendingProps,r=qd(le.current).createElement(n),r[ct]=t,r[lt]=e,Vd(r,n,e),xt(r),t.stateNode=r):t.memoizedState=Ff(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return pe(t),e===null&&L&&(r=t.stateNode=vf(t.type,t.pendingProps,le.current),Fi=t,Ri=!0,a=Ii,af(t.type)?(gf=a,Ii=hf(r.firstChild)):Ii=a),sc(e,t,t.pendingProps.children,n),_c(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&L&&((a=r=Ii)&&(r=lf(r,t.type,t.pendingProps,Ri),r===null?a=!1:(t.stateNode=r,Fi=t,Ii=hf(r.firstChild),Ri=!1,a=!0)),a||Bi(t)),pe(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Xd(a,o)?r=null:s!==null&&Xd(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=To(e,t,Oo,null,null,n),ip._currentValue=a),_c(e,t),sc(e,t,r,n),t.child;case 6:return e===null&&L&&((e=n=Ii)&&(n=uf(n,t.pendingProps,Ri),n===null?e=!1:(t.stateNode=n,Fi=t,Ii=null,e=!0)),e||Bi(t)),null;case 13:return Tc(e,t,n);case 4:return de(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=za(t,null,r,n):sc(e,t,r,n),t.child;case 11:return cc(e,t,t.type,t.pendingProps,n);case 7:return sc(e,t,t.pendingProps,n),t.child;case 8:return sc(e,t,t.pendingProps.children,n),t.child;case 12:return sc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Xi(t,t.type,r.value),sc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,na(t),a=ra(a),r=r(a),t.flags|=1,sc(e,t,r,n),t.child;case 14:return lc(e,t,t.type,t.pendingProps,n);case 15:return uc(e,t,t.type,t.pendingProps,n);case 19:return jc(e,t,n);case 31:return gc(e,t,n);case 22:return dc(e,t,n,t.pendingProps);case 24:return na(t),r=ra(R),e===null?(a=ba(),a===null&&(a=Ul,o=la(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ha(t),Xi(t,R,a)):((e.lanes&n)!==0&&(Ua(e,t),Xa(t,null,null,n),Ya()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Xi(t,R,r),r!==a.cache&&$i(t,[R],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Xi(t,R,r))),sc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Ic(e){e.flags|=4}function Lc(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(ku())e.flags|=8192;else throw Aa=Ea,wa}}else e.flags&=-16777217}function Rc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Xf(t)){if(ku())e.flags|=8192;else throw Aa=Ea,wa}}function zc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Xe(),e.lanes|=t,tu|=t)}function Bc(e,t){if(!L)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Vc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Hc(e,t,n){var r=t.pendingProps;switch(Ni(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vc(t),null;case 1:return Vc(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Zi(R),fe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ui(t)?Ic(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Gi())),Vc(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Ic(t),o===null?(Vc(t),Lc(t,a,null,r,n)):(Vc(t),Rc(t,o))):o?o===e.memoizedState?(Vc(t),t.flags&=-16777217):(Ic(t),Vc(t),Rc(t,o)):(e=e.memoizedProps,e!==r&&Ic(t),Vc(t),Lc(t,a,e,r,n)),null;case 27:if(me(t),n=le.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Vc(t),null}e=se.current,Ui(t)?Vi(t,e):(e=vf(a,r,n),t.stateNode=e,Ic(t))}return Vc(t),null;case 5:if(me(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Vc(t),null}if(o=se.current,Ui(t))Vi(t,o);else{var s=qd(le.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[ct]=t,o[lt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Vd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Ic(t)}}return Vc(t),Lc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=le.current,Ui(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Fi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[ct]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Rd(e.nodeValue,n)),e||Bi(t,!0)}else e=qd(e).createTextNode(r),e[ct]=t,t.stateNode=e}return Vc(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ui(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[ct]=t}else Wi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Vc(t),e=!1}else n=Gi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(uo(t),t):(uo(t),null);if(t.flags&128)throw Error(i(558))}return Vc(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ui(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[ct]=t}else Wi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Vc(t),a=!1}else a=Gi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(uo(t),t):(uo(t),null)}return uo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),zc(t,t.updateQueue),Vc(t),null);case 4:return fe(),e===null&&Od(t.stateNode.containerInfo),Vc(t),null;case 10:return Zi(t.type),Vc(t),null;case 19:if(oe(fo),r=t.memoizedState,r===null)return Vc(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)Bc(r,!1);else{if(Xl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=po(e),o!==null){for(t.flags|=128,Bc(r,!1),e=o.updateQueue,t.updateQueue=e,zc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)pi(n,e),n=n.sibling;return I(fo,fo.current&1|2),L&&Ai(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&De()>ou&&(t.flags|=128,a=!0,Bc(r,!1),t.lanes=4194304)}}else{if(!a){if(e=po(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,zc(t,e),Bc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!L)return Vc(t),null}else 2*De()-r.renderingStartTime>ou&&n!==536870912&&(t.flags|=128,a=!0,Bc(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(Vc(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=De(),e.sibling=null,n=fo.current,I(fo,a?n&1|2:n&1),L&&Ai(t,r.treeForkCount),e);case 22:case 23:return uo(t),ro(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Vc(t),t.subtreeFlags&6&&(t.flags|=8192)):Vc(t),n=t.updateQueue,n!==null&&zc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&oe(ya),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Zi(R),Vc(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Uc(e,t){switch(Ni(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zi(R),fe(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return me(t),null;case 31:if(t.memoizedState!==null){if(uo(t),t.alternate===null)throw Error(i(340));Wi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(uo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Wi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return oe(fo),null;case 4:return fe(),null;case 10:return Zi(t.type),null;case 22:case 23:return uo(t),ro(),e!==null&&oe(ya),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Zi(R),null;case 25:return null;default:return null}}function Wc(e,t){switch(Ni(t),t.tag){case 3:Zi(R),fe();break;case 26:case 27:case 5:me(t);break;case 4:fe();break;case 31:t.memoizedState!==null&&uo(t);break;case 13:uo(t);break;case 19:oe(fo);break;case 10:Zi(t.type);break;case 22:case 23:uo(t),ro(),e!==null&&oe(ya);break;case 24:Zi(R)}}function Gc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Xu(t,t.return,e)}}function Kc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Xu(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Xu(t,t.return,e)}}function qc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Qa(t,n)}catch(t){Xu(e,e.return,t)}}}function Jc(e,t,n){n.props=Ys(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Xu(e,t,n)}}function Yc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Xu(e,t,n)}}function Xc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Xu(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Xu(e,t,n)}else n.current=null}}function Zc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Xu(e,e.return,t)}}function Qc(e,t,n){try{var r=e.stateNode;Hd(r,e.type,n,t),r[lt]=t}catch(t){Xu(e,e.return,t)}}function $c(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&af(e.type)||e.tag===4}function el(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||$c(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&af(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=tn));else if(r!==4&&(r===27&&af(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(tl(e,t,n),e=e.sibling;e!==null;)tl(e,t,n),e=e.sibling}function nl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&af(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(nl(e,t,n),e=e.sibling;e!==null;)nl(e,t,n),e=e.sibling}function rl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Vd(t,r,n),t[ct]=e,t[lt]=n}catch(t){Xu(e,e.return,t)}}var il=!1,al=!1,ol=!1,sl=typeof WeakSet==`function`?WeakSet:Set,cl=null;function ll(e,t){if(e=e.containerInfo,Gd=pp,e=kr(e),Ar(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Kd={focusedElem:e,selectionRange:n},pp=!1,cl=t;cl!==null;)if(t=cl,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,cl=e;else for(;cl!==null;){switch(t=cl,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Ys(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Xu(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)cf(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:cf(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,cl=e;break}cl=t.return}}function ul(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Tl(e,n),r&4&&Gc(5,n);break;case 1:if(Tl(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Xu(n,n.return,e)}else{var i=Ys(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Xu(n,n.return,e)}}}r&64&&qc(n),r&512&&Yc(n,n.return);break;case 3:if(Tl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Qa(e,t)}catch(e){Xu(n,n.return,e)}}break;case 27:t===null&&r&4&&rl(n);case 26:case 5:Tl(e,n),t===null&&r&4&&Zc(n),r&512&&Yc(n,n.return);break;case 12:Tl(e,n);break;case 31:Tl(e,n),r&4&&gl(e,n);break;case 13:Tl(e,n),r&4&&_l(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=ed.bind(null,n),mf(e,n))));break;case 22:if(r=n.memoizedState!==null||il,!r){t=t!==null&&t.memoizedState!==null||al,i=il;var a=al;il=r,(al=t)&&!a?Dl(e,n,!!(n.subtreeFlags&8772)):Tl(e,n),il=i,al=a}break;case 30:break;default:Tl(e,n)}}function dl(e){var t=e.alternate;t!==null&&(e.alternate=null,dl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&gt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var fl=null,pl=!1;function ml(e,t,n){for(n=n.child;n!==null;)hl(e,t,n),n=n.sibling}function hl(e,t,n){if(Le&&typeof Le.onCommitFiberUnmount==`function`)try{Le.onCommitFiberUnmount(Ie,n)}catch{}switch(n.tag){case 26:al||Xc(n,t),ml(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:al||Xc(n,t);var r=fl,i=pl;af(n.type)&&(fl=n.stateNode,pl=!1),ml(e,t,n),yf(n.stateNode),fl=r,pl=i;break;case 5:al||Xc(n,t);case 6:if(r=fl,i=pl,fl=null,ml(e,t,n),fl=r,pl=i,fl!==null){if(pl)try{(fl.nodeType===9?fl.body:fl.nodeName===`HTML`?fl.ownerDocument.body:fl).removeChild(n.stateNode)}catch(e){Xu(n,t,e)}else try{fl.removeChild(n.stateNode)}catch(e){Xu(n,t,e)}}break;case 18:fl!==null&&(pl?(e=fl,of(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),zp(e)):of(fl,n.stateNode));break;case 4:r=fl,i=pl,fl=n.stateNode.containerInfo,pl=!0,ml(e,t,n),fl=r,pl=i;break;case 0:case 11:case 14:case 15:Kc(2,n,t),al||Kc(4,n,t),ml(e,t,n);break;case 1:al||(Xc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Jc(n,t,r)),ml(e,t,n);break;case 21:ml(e,t,n);break;case 22:al=(r=al)||n.memoizedState!==null,ml(e,t,n),al=r;break;default:ml(e,t,n)}}function gl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{zp(e)}catch(e){Xu(t,t.return,e)}}}function _l(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{zp(e)}catch(e){Xu(t,t.return,e)}}function vl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new sl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new sl),t;default:throw Error(i(435,e.tag))}}function yl(e,t){var n=vl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=td.bind(null,e,t);t.then(r,r)}})}function bl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(af(c.type)){fl=c.stateNode,pl=!1;break a}break;case 5:fl=c.stateNode,pl=!1;break a;case 3:case 4:fl=c.stateNode.containerInfo,pl=!0;break a}c=c.return}if(fl===null)throw Error(i(160));hl(o,s,a),fl=null,pl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Sl(t,e),t=t.sibling}var xl=null;function Sl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:bl(t,e),Cl(e),r&4&&(Kc(3,e,e.return),Gc(3,e),Kc(5,e,e.return));break;case 1:bl(t,e),Cl(e),r&512&&(al||n===null||Xc(n,n.return)),r&64&&il&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=xl;if(bl(t,e),Cl(e),r&512&&(al||n===null||Xc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null){if(r===null){if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[ht]||o[ct]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Vd(o,r,n),o[ct]=e,xt(o),r=o;break a;case`link`:var s=qf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Vd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=qf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Vd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[ct]=e,xt(o),r=o}e.stateNode=r}else Jf(a,e.type,e.stateNode)}else e.stateNode=Hf(a,r,e.memoizedProps)}else o===r?r===null&&e.stateNode!==null&&Qc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Jf(a,e.type,e.stateNode):Hf(a,r,e.memoizedProps))}break;case 27:bl(t,e),Cl(e),r&512&&(al||n===null||Xc(n,n.return)),n!==null&&r&4&&Qc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(bl(t,e),Cl(e),r&512&&(al||n===null||Xc(n,n.return)),e.flags&32){a=e.stateNode;try{qt(a,``)}catch(t){Xu(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Qc(e,a,n===null?a:n.memoizedProps)),r&1024&&(ol=!0);break;case 6:if(bl(t,e),Cl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Xu(e,e.return,t)}}break;case 3:if(Kf=null,a=xl,xl=Sf(t.containerInfo),bl(t,e),xl=a,Cl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{zp(t.containerInfo)}catch(t){Xu(e,e.return,t)}ol&&(ol=!1,wl(e));break;case 4:r=xl,xl=Sf(e.stateNode.containerInfo),bl(t,e),Cl(e),xl=r;break;case 12:bl(t,e),Cl(e);break;case 31:bl(t,e),Cl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,yl(e,r)));break;case 13:bl(t,e),Cl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(iu=De()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,yl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=il,d=al;if(il=u||a,al=d||l,bl(t,e),al=d,il=u,Cl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||il||al||El(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Xu(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Xu(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?sf(m,!0):sf(l.stateNode,!1)}catch(e){Xu(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,yl(e,n))));break;case 19:bl(t,e),Cl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,yl(e,r)));break;case 30:break;case 21:break;default:bl(t,e),Cl(e)}}function Cl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if($c(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;nl(e,el(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(qt(o,``),n.flags&=-33),nl(e,el(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;tl(e,el(e),s);break;default:throw Error(i(161))}}catch(t){Xu(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function wl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;wl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Tl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ul(e,t.alternate,t),t=t.sibling}function El(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Kc(4,t,t.return),El(t);break;case 1:Xc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Jc(t,t.return,n),El(t);break;case 27:yf(t.stateNode);case 26:case 5:Xc(t,t.return),El(t);break;case 22:t.memoizedState===null&&El(t);break;case 30:El(t);break;default:El(t)}e=e.sibling}}function Dl(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Dl(i,a,n),Gc(4,a);break;case 1:if(Dl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Xu(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Za(c[i],s)}catch(e){Xu(r,r.return,e)}}n&&o&64&&qc(a),Yc(a,a.return);break;case 27:rl(a);case 26:case 5:Dl(i,a,n),n&&r===null&&o&4&&Zc(a),Yc(a,a.return);break;case 12:Dl(i,a,n);break;case 31:Dl(i,a,n),n&&o&4&&gl(i,a);break;case 13:Dl(i,a,n),n&&o&4&&_l(i,a);break;case 22:a.memoizedState===null&&Dl(i,a,n),Yc(a,a.return);break;case 30:break;default:Dl(i,a,n)}t=t.sibling}}function Ol(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ua(n))}function kl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ua(e))}function Al(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)jl(e,t,n,r),t=t.sibling}function jl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Al(e,t,n,r),i&2048&&Gc(9,t);break;case 1:Al(e,t,n,r);break;case 3:Al(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ua(e)));break;case 12:if(i&2048){Al(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Xu(t,t.return,e)}}else Al(e,t,n,r);break;case 31:Al(e,t,n,r);break;case 13:Al(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Al(e,t,n,r):(a._visibility|=2,Ml(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?Al(e,t,n,r):V(e,t),i&2048&&Ol(o,t);break;case 24:Al(e,t,n,r),i&2048&&kl(t.alternate,t);break;default:Al(e,t,n,r)}}function Ml(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ml(a,o,s,c,i),Gc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ml(a,o,s,c,i)):u._visibility&2?Ml(a,o,s,c,i):V(a,o),i&&l&2048&&Ol(o.alternate,o);break;case 24:Ml(a,o,s,c,i),i&&l&2048&&kl(o.alternate,o);break;default:Ml(a,o,s,c,i)}t=t.sibling}}function V(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:V(n,r),i&2048&&Ol(r.alternate,r);break;case 24:V(n,r),i&2048&&kl(r.alternate,r);break;default:V(n,r)}t=t.sibling}}var Nl=8192;function Pl(e,t,n){if(e.subtreeFlags&Nl)for(e=e.child;e!==null;)Fl(e,t,n),e=e.sibling}function Fl(e,t,n){switch(e.tag){case 26:Pl(e,t,n),e.flags&Nl&&e.memoizedState!==null&&Zf(n,xl,e.memoizedState,e.memoizedProps);break;case 5:Pl(e,t,n);break;case 3:case 4:var r=xl;xl=Sf(e.stateNode.containerInfo),Pl(e,t,n),xl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Nl,Nl=16777216,Pl(e,t,n),Nl=r):Pl(e,t,n));break;default:Pl(e,t,n)}}function Il(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ll(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];cl=r,Bl(r,e)}Il(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Rl(e),e=e.sibling}function Rl(e){switch(e.tag){case 0:case 11:case 15:Ll(e),e.flags&2048&&Kc(9,e,e.return);break;case 3:Ll(e);break;case 12:Ll(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,zl(e)):Ll(e);break;default:Ll(e)}}function zl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];cl=r,Bl(r,e)}Il(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Kc(8,t,t.return),zl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,zl(t));break;default:zl(t)}e=e.sibling}}function Bl(e,t){for(;cl!==null;){var n=cl;switch(n.tag){case 0:case 11:case 15:Kc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ua(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,cl=r;else a:for(n=e;cl!==null;){r=cl;var i=r.sibling,a=r.return;if(dl(r),r===n){cl=null;break a}if(i!==null){i.return=a,cl=i;break a}cl=a}}}var Vl={getCacheForType:function(e){var t=ra(R),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ra(R).controller.signal}},Hl=typeof WeakMap==`function`?WeakMap:Map,H=0,Ul=null,U=null,W=0,Wl=0,Gl=null,Kl=!1,ql=!1,Jl=!1,Yl=0,Xl=0,Zl=0,Ql=0,$l=0,eu=0,tu=0,nu=null,G=null,ru=!1,iu=0,au=0,ou=1/0,su=null,cu=null,lu=0,uu=null,du=null,fu=0,pu=0,mu=null,hu=null,gu=0,_u=null;function vu(){return H&2&&W!==0?W&-W:N.T===null?at():_d()}function yu(){if(eu===0){if(!(W&536870912)||L){var e=We;We<<=1,!(We&3932160)&&(We=262144),eu=e}else eu=536870912}return e=io.current,e!==null&&(e.flags|=32),eu}function bu(e,t,n){(e===Ul&&(Wl===2||Wl===9)||e.cancelPendingCommit!==null)&&(Du(e,0),wu(e,W,eu,!1)),Qe(e,n),(!(H&2)||e!==Ul)&&(e===Ul&&(!(H&2)&&(Ql|=n),Xl===4&&wu(e,W,eu,!1)),ld(e))}function xu(e,t,n){if(H&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||Je(e,t),a=r?Fu(e,t):Nu(e,t,!0),o=r;do{if(a===0){ql&&!r&&wu(e,t,0,!1);break}if(n=e.current.alternate,o&&!Cu(n)){a=Nu(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=nu;var l=c.current.memoizedState.isDehydrated;if(l&&(Du(c,s).flags|=256),s=Nu(c,s,!1),s!==2){if(Jl&&!l){c.errorRecoveryDisabledLanes|=o,Ql|=o,a=4;break a}o=G,G=a,o!==null&&(G===null?G=o:G.push.apply(G,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Du(e,0),wu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:wu(r,t,eu,!Kl);break a;case 2:G=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=iu+300-De(),10<a)){if(wu(r,t,eu,!Kl),qe(r,0,!0)!==0)break a;fu=t,r.timeoutHandle=$d(Su.bind(null,r,n,G,su,ru,t,eu,Ql,tu,Kl,o,`Throttled`,-0,0),a);break a}Su(r,n,G,su,ru,t,eu,Ql,tu,Kl,o,null,-0,0)}break}while(1);ld(e)}function Su(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:tn},Fl(t,a,d);var m=(a&62914560)===a?iu-De():(a&4194048)===a?au-De():0;if(m=$f(d,m),m!==null){fu=a,e.cancelPendingCommit=m(Hu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),wu(e,a,o,!l);return}}Hu(e,t,a,n,r,i,o,s,c)}function Cu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!wr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wu(e,t,n,r){t&=~$l,t&=~Ql,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-ze(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&et(e,n,t)}function Tu(){return H&6?!0:(ud(0,!1),!1)}function Eu(){if(U!==null){if(Wl===0)var e=U.return;else e=U,Yi=Ji=null,jo(e),Na=null,Pa=0,e=U;for(;e!==null;)Wc(e.alternate,e),e=e.return;U=null}}function Du(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,ef(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),fu=0,Eu(),Ul=e,U=n=fi(e.current,null),W=t,Wl=0,Gl=null,Kl=!1,ql=Je(e,t),Jl=!1,tu=eu=$l=Ql=Zl=Xl=0,G=nu=null,ru=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-ze(r),a=1<<i;t|=e[i],r&=~a}return Yl=t,ni(),n}function Ou(e,t){z=null,N.H=Vs,t===Ca||t===Ta?(t=ja(),Wl=3):t===wa?(t=ja(),Wl=4):Wl=t===ac?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Gl=t,U===null&&(Xl=1,$s(e,bi(t,e.current)))}function ku(){var e=io.current;return e===null?!0:(W&4194048)===W?ao===null:(W&62914560)===W||W&536870912?e===ao:!1}function Au(){var e=N.H;return N.H=Vs,e===null?Vs:e}function ju(){var e=N.A;return N.A=Vl,e}function Mu(){Xl=4,Kl||(W&4194048)!==W&&io.current!==null||(ql=!0),!(Zl&134217727)&&!(Ql&134217727)||Ul===null||wu(Ul,W,eu,!1)}function Nu(e,t,n){var r=H;H|=2;var i=Au(),a=ju();(Ul!==e||W!==t)&&(su=null,Du(e,t)),t=!1;var o=Xl;a:do try{if(Wl!==0&&U!==null){var s=U,c=Gl;switch(Wl){case 8:Eu(),o=6;break a;case 3:case 2:case 9:case 6:io.current===null&&(t=!0);var l=Wl;if(Wl=0,Gl=null,zu(e,s,c,l),n&&ql){o=0;break a}break;default:l=Wl,Wl=0,Gl=null,zu(e,s,c,l)}}Pu(),o=Xl;break}catch(t){Ou(e,t)}while(1);return t&&e.shellSuspendCounter++,Yi=Ji=null,H=r,N.H=i,N.A=a,U===null&&(Ul=null,W=0,ni()),o}function Pu(){for(;U!==null;)Lu(U)}function Fu(e,t){var n=H;H|=2;var r=Au(),a=ju();Ul!==e||W!==t?(su=null,ou=De()+500,Du(e,t)):ql=Je(e,t);a:do try{if(Wl!==0&&U!==null){t=U;var o=Gl;b:switch(Wl){case 1:Wl=0,Gl=null,zu(e,t,o,1);break;case 2:case 9:if(Da(o)){Wl=0,Gl=null,Ru(t);break}t=function(){Wl!==2&&Wl!==9||Ul!==e||(Wl=7),ld(e)},o.then(t,t);break a;case 3:Wl=7;break a;case 4:Wl=5;break a;case 7:Da(o)?(Wl=0,Gl=null,Ru(t)):(Wl=0,Gl=null,zu(e,t,o,7));break;case 5:var s=null;switch(U.tag){case 26:s=U.memoizedState;case 5:case 27:var c=U;if(s?Xf(s):c.stateNode.complete){Wl=0,Gl=null;var l=c.sibling;if(l!==null)U=l;else{var u=c.return;u===null?U=null:(U=u,Bu(u))}break b}}Wl=0,Gl=null,zu(e,t,o,5);break;case 6:Wl=0,Gl=null,zu(e,t,o,6);break;case 8:Eu(),Xl=6;break a;default:throw Error(i(462))}}Iu();break}catch(t){Ou(e,t)}while(1);return Yi=Ji=null,N.H=r,N.A=a,H=n,U===null?(Ul=null,W=0,ni(),Xl):0}function Iu(){for(;U!==null&&!Te();)Lu(U)}function Lu(e){var t=Fc(e.alternate,e,Yl);e.memoizedProps=e.pendingProps,t===null?Bu(e):U=t}function Ru(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=yc(n,t,t.pendingProps,t.type,void 0,W);break;case 11:t=yc(n,t,t.pendingProps,t.type.render,t.ref,W);break;case 5:jo(t);default:Wc(n,t),t=U=pi(t,Yl),t=Fc(n,t,Yl)}e.memoizedProps=e.pendingProps,t===null?Bu(e):U=t}function zu(e,t,n,r){Yi=Ji=null,jo(t),Na=null,Pa=0;var i=t.return;try{if(ic(e,i,t,n,W)){Xl=1,$s(e,bi(n,e.current)),U=null;return}}catch(t){if(i!==null)throw U=i,t;Xl=1,$s(e,bi(n,e.current)),U=null;return}t.flags&32768?(L||r===1?e=!0:ql||W&536870912?e=!1:(Kl=e=!0,(r===2||r===9||r===3||r===6)&&(r=io.current,r!==null&&r.tag===13&&(r.flags|=16384))),Vu(t,e)):Bu(t)}function Bu(e){var t=e;do{if(t.flags&32768){Vu(t,Kl);return}e=t.return;var n=Hc(t.alternate,t,Yl);if(n!==null){U=n;return}if(t=t.sibling,t!==null){U=t;return}U=t=e}while(t!==null);Xl===0&&(Xl=5)}function Vu(e,t){do{var n=Uc(e.alternate,e);if(n!==null){n.flags&=32767,U=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){U=e;return}U=e=n}while(e!==null);Xl=6,U=null}function Hu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do qu();while(lu!==0);if(H&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ti,$e(e,n,o,s,c,l),e===Ul&&(U=Ul=null,W=0),du=t,uu=e,fu=n,pu=o,mu=a,hu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,nd(je,function(){return Ju(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=N.T,N.T=null,a=P.p,P.p=2,s=H,H|=4;try{ll(e,t,n)}finally{H=s,P.p=a,N.T=r}}lu=1,Uu(),Wu(),Gu()}}function Uu(){if(lu===1){lu=0;var e=uu,t=du,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=N.T,N.T=null;var r=P.p;P.p=2;var i=H;H|=4;try{Sl(t,e);var a=Kd,o=kr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Or(s.ownerDocument.documentElement,s)){if(c!==null&&Ar(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Dr(s,h),v=Dr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}pp=!!Gd,Kd=Gd=null}finally{H=i,P.p=r,N.T=n}}e.current=t,lu=2}}function Wu(){if(lu===2){lu=0;var e=uu,t=du,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=N.T,N.T=null;var r=P.p;P.p=2;var i=H;H|=4;try{ul(e,t.alternate,t)}finally{H=i,P.p=r,N.T=n}}lu=3}}function Gu(){if(lu===4||lu===3){lu=0,Ee();var e=uu,t=du,n=fu,r=hu;t.subtreeFlags&10256||t.flags&10256?lu=5:(lu=0,du=uu=null,Ku(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(cu=null),it(n),t=t.stateNode,Le&&typeof Le.onCommitFiberRoot==`function`)try{Le.onCommitFiberRoot(Ie,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=N.T,i=P.p,P.p=2,N.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{N.T=t,P.p=i}}fu&3&&qu(),ld(e),i=e.pendingLanes,n&261930&&i&42?e===_u?gu++:(gu=0,_u=e):gu=0,ud(0,!1)}}function Ku(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ua(t)))}function qu(){return Uu(),Wu(),Gu(),Ju()}function Ju(){if(lu!==5)return!1;var e=uu,t=pu;pu=0;var n=it(fu),r=N.T,a=P.p;try{P.p=32>n?32:n,N.T=null,n=mu,mu=null;var o=uu,s=fu;if(lu=0,du=uu=null,fu=0,H&6)throw Error(i(331));var c=H;if(H|=4,Rl(o.current),jl(o,o.current,s,n),H=c,ud(0,!1),Le&&typeof Le.onPostCommitFiberRoot==`function`)try{Le.onPostCommitFiberRoot(Ie,o)}catch{}return!0}finally{P.p=a,N.T=r,Ku(e,t)}}function Yu(e,t,n){t=bi(n,t),t=tc(e.stateNode,t,2),e=Ga(e,t,2),e!==null&&(Qe(e,2),ld(e))}function Xu(e,t,n){if(e.tag===3)Yu(e,e,n);else for(;t!==null;){if(t.tag===3){Yu(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(cu===null||!cu.has(r))){e=bi(n,e),n=nc(2),r=Ga(t,n,2),r!==null&&(rc(n,r,t,e),Qe(r,2),ld(r));break}}t=t.return}}function Zu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Hl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Jl=!0,i.add(n),e=Qu.bind(null,e,t,n),t.then(e,e))}function Qu(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ul===e&&(W&n)===n&&(Xl===4||Xl===3&&(W&62914560)===W&&300>De()-iu?!(H&2)&&Du(e,0):$l|=n,tu===W&&(tu=0)),ld(e)}function $u(e,t){t===0&&(t=Xe()),e=ai(e,t),e!==null&&(Qe(e,t),ld(e))}function ed(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),$u(e,n)}function td(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),$u(e,n)}function nd(e,t){return Ce(e,t)}var rd=null,id=null,ad=!1,od=!1,sd=!1,cd=0;function ld(e){e!==id&&e.next===null&&(id===null?rd=id=e:id=id.next=e),od=!0,ad||(ad=!0,gd())}function ud(e,t){if(!sd&&od){sd=!0;do for(var n=!1,r=rd;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-ze(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,hd(r,a))}else a=W,a=qe(r,r===Ul?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Je(r,a)||(n=!0,hd(r,a))}r=r.next}while(n);sd=!1}}function dd(){fd()}function fd(){od=ad=!1;var e=0;cd!==0&&Qd()&&(e=cd);for(var t=De(),n=null,r=rd;r!==null;){var i=r.next,a=pd(r,t);a===0?(r.next=null,n===null?rd=i:n.next=i,i===null&&(id=n)):(n=r,(e!==0||a&3)&&(od=!0)),r=i}lu!==0&&lu!==5||ud(e,!1),cd!==0&&(cd=0)}function pd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-ze(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Ye(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Ul,n=W,n=qe(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Wl===2||Wl===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&we(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Je(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&we(r),it(n)){case 2:case 8:n=Ae;break;case 32:n=je;break;case 268435456:n=Ne;break;default:n=je}return r=md.bind(null,e),n=Ce(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&we(r),e.callbackPriority=2,e.callbackNode=null,2}function md(e,t){if(lu!==0&&lu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(qu()&&e.callbackNode!==n)return null;var r=W;return r=qe(e,e===Ul?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(xu(e,r,t),pd(e,De()),e.callbackNode!=null&&e.callbackNode===n?md.bind(null,e):null)}function hd(e,t){if(qu())return null;xu(e,t,!0)}function gd(){nf(function(){H&6?Ce(ke,dd):fd()})}function _d(){if(cd===0){var e=pa;e===0&&(e=Ue,Ue<<=1,!(Ue&261888)&&(Ue=256)),cd=e}return cd}function vd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:en(``+e)}function yd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function bd(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=vd((i[lt]||null).action),o=r.submitter;o&&(t=(t=o[lt]||null)?vd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Cn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(cd!==0){var e=o?yd(i,o):new FormData(i);Ds(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?yd(i,o):new FormData(i),Ds(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var xd=0;xd<Xr.length;xd++){var Sd=Xr[xd];Zr(Sd.toLowerCase(),`on`+(Sd[0].toUpperCase()+Sd.slice(1)))}Zr(Hr,`onAnimationEnd`),Zr(Ur,`onAnimationIteration`),Zr(Wr,`onAnimationStart`),Zr(`dblclick`,`onDoubleClick`),Zr(`focusin`,`onFocus`),Zr(`focusout`,`onBlur`),Zr(Gr,`onTransitionRun`),Zr(Kr,`onTransitionStart`),Zr(qr,`onTransitionCancel`),Zr(Jr,`onTransitionEnd`),Tt(`onMouseEnter`,[`mouseout`,`mouseover`]),Tt(`onMouseLeave`,[`mouseout`,`mouseover`]),Tt(`onPointerEnter`,[`pointerout`,`pointerover`]),Tt(`onPointerLeave`,[`pointerout`,`pointerover`]),wt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),wt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),wt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),wt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),wt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),wt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var Cd=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),wd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(Cd));function Td(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Qr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Qr(e)}i.currentTarget=null,a=c}}}}function K(e,t){var n=t[dt];n===void 0&&(n=t[dt]=new Set);var r=e+`__bubble`;n.has(r)||(kd(t,e,2,!1),n.add(r))}function Ed(e,t,n){var r=0;t&&(r|=4),kd(n,e,r,t)}var Dd=`_reactListening`+Math.random().toString(36).slice(2);function Od(e){if(!e[Dd]){e[Dd]=!0,St.forEach(function(t){t!==`selectionchange`&&(wd.has(t)||Ed(t,!1,e),Ed(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Dd]||(t[Dd]=!0,Ed(`selectionchange`,!1,t))}}function kd(e,t,n,r){switch(bp(t)){case 2:var i=mp;break;case 8:i=hp;break;default:i=gp}n=i.bind(null,t,n,e),i=void 0,!fn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Ad(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=_t(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}ln(function(){var r=a,i=rn(n),s=[];a:{var c=Yr.get(e);if(c!==void 0){var l=Cn,u=e;switch(e){case`keypress`:if(vn(n)===0)break a;case`keydown`:case`keyup`:l=Vn;break;case`focusin`:u=`focus`,l=Mn;break;case`focusout`:u=`blur`,l=Mn;break;case`beforeblur`:case`afterblur`:l=Mn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=An;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=jn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Un;break;case Hr:case Ur:case Wr:l=Nn;break;case Jr:l=Wn;break;case`scroll`:case`scrollend`:l=Tn;break;case`wheel`:l=Gn;break;case`copy`:case`cut`:case`paste`:l=Pn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Hn;break;case`toggle`:case`beforetoggle`:l=Kn}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=un(m,p),g!=null&&d.push(jd(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==nn&&(u=n.relatedTarget||n.fromElement)&&(_t(u)||u[ut]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?_t(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=An,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Hn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:yt(l),h=u==null?c:yt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,_t(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Nd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Pd(s,c,l,d,!1),u!==null&&f!==null&&Pd(s,f,u,d,!0)}}a:{if(c=r?yt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=fr;else if(or(c)){if(pr)v=Sr;else{v=br;var y=yr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&Zt(r.elementType)&&(v=fr):v=xr;if(v&&=v(e,r)){sr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Ut(c,`number`,c.value)}switch(y=r?yt(r):window,e){case`focusin`:(or(y)||y.contentEditable===`true`)&&(Mr=y,Nr=r,Pr=null);break;case`focusout`:Pr=Nr=Mr=null;break;case`mousedown`:Fr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Fr=!1,Ir(s,n,i);break;case`selectionchange`:if(jr)break;case`keydown`:case`keyup`:Ir(s,n,i)}var b;if(Jn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else nr?er(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Zn&&n.locale!==`ko`&&(nr||x!==`onCompositionStart`?x===`onCompositionEnd`&&nr&&(b=_n()):(mn=i,hn=`value`in mn?mn.value:mn.textContent,nr=!0)),y=Md(r,x),0<y.length&&(x=new Fn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=tr(n),b!==null&&(x.data=b)))),(b=Xn?rr(e,n):ir(e,n))&&(x=Md(r,`onBeforeInput`),0<x.length&&(y=new Fn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),bd(s,e,r,n,i)}Td(s,t)})}function jd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Md(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=un(e,n),i!=null&&r.unshift(jd(e,i,a)),i=un(e,t),i!=null&&r.push(jd(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Nd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Pd(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=un(n,a),l!=null&&o.unshift(jd(n,l,c))):i||(l=un(n,a),l!=null&&o.push(jd(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Fd=/\r\n?/g,Id=/\u0000|\uFFFD/g;function Ld(e){return(typeof e==`string`?e:``+e).replace(Fd,`
`).replace(Id,``)}function Rd(e,t){return t=Ld(t),Ld(e)===t}function zd(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&qt(e,``+r);break;case`className`:jt(e,`class`,r);break;case`tabIndex`:jt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:jt(e,n,r);break;case`style`:Xt(e,r,o);break;case`data`:if(t!==`object`){jt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=en(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&zd(e,t,`name`,a.name,a,null),zd(e,t,`formEncType`,a.formEncType,a,null),zd(e,t,`formMethod`,a.formMethod,a,null),zd(e,t,`formTarget`,a.formTarget,a,null)):(zd(e,t,`encType`,a.encType,a,null),zd(e,t,`method`,a.method,a,null),zd(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=en(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=tn);break;case`onScroll`:r!=null&&K(`scroll`,e);break;case`onScrollEnd`:r!=null&&K(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=en(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:K(`beforetoggle`,e),K(`toggle`,e),At(e,`popover`,r);break;case`xlinkActuate`:Mt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Mt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Mt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Mt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Mt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Mt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Mt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Mt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Mt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:At(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=Qt.get(n)||n,At(e,n,r))}}function Bd(e,t,n,r,a,o){switch(n){case`style`:Xt(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&qt(e,``+r);break;case`onScroll`:r!=null&&K(`scroll`,e);break;case`onScrollEnd`:r!=null&&K(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=tn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Ct.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[lt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):At(e,n,r)}}}function Vd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:K(`error`,e),K(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:zd(e,t,o,s,n,null)}}a&&zd(e,t,`srcSet`,n.srcSet,n,null),r&&zd(e,t,`src`,n.src,n,null);return;case`input`:K(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:zd(e,t,r,d,n,null)}}Ht(e,o,c,l,u,s,a,!1);return;case`select`:for(a in K(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:zd(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Wt(e,!!r,n,!0):Wt(e,!!r,t,!1);return;case`textarea`:for(s in K(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:zd(e,t,s,c,n,null)}Kt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:zd(e,t,l,r,n,null)}return;case`dialog`:K(`beforetoggle`,e),K(`toggle`,e),K(`cancel`,e),K(`close`,e);break;case`iframe`:case`object`:K(`load`,e);break;case`video`:case`audio`:for(r=0;r<Cd.length;r++)K(Cd[r],e);break;case`image`:K(`error`,e),K(`load`,e);break;case`details`:K(`toggle`,e);break;case`embed`:case`source`:case`link`:K(`error`,e),K(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:zd(e,t,u,r,n,null)}return;default:if(Zt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Bd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&zd(e,t,c,r,n,null))}function Hd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||zd(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&zd(e,t,p,m,r,f)}}Vt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||zd(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&zd(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Wt(e,!!n,n?[]:``,!1):Wt(e,!!n,t,!0)):Wt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:zd(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&zd(e,t,s,a,r,o)}Gt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:zd(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:zd(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&zd(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:zd(e,t,u,p,r,m)}return;default:if(Zt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Bd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Bd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&zd(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||zd(e,t,f,p,r,m)}function Ud(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Wd(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Ud(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Ud(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Gd=null,Kd=null;function qd(e){return e.nodeType===9?e:e.ownerDocument}function Jd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Yd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Xd(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Zd=null;function Qd(){var e=window.event;return e&&e.type===`popstate`?e!==Zd&&(Zd=e,!0):(Zd=null,!1)}var $d=typeof setTimeout==`function`?setTimeout:void 0,ef=typeof clearTimeout==`function`?clearTimeout:void 0,tf=typeof Promise==`function`?Promise:void 0,nf=typeof queueMicrotask==`function`?queueMicrotask:tf===void 0?$d:function(e){return tf.resolve(null).then(e).catch(rf)};function rf(e){setTimeout(function(){throw e})}function af(e){return e===`head`}function of(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),zp(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)yf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,yf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[ht]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&yf(e.ownerDocument.body)}n=i}while(n);zp(t)}function sf(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function cf(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:cf(n),gt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function lf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[ht])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=hf(e.nextSibling),e===null)break}return null}function uf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=hf(e.nextSibling),e===null))return null;return e}function df(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=hf(e.nextSibling),e===null))return null;return e}function ff(e){return e.data===`$?`||e.data===`$~`}function pf(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function mf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function hf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var gf=null;function _f(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return hf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function q(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function vf(e,t,n){switch(t=qd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function yf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);gt(e)}var bf=new Map,xf=new Set;function Sf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Cf=P.d;P.d={f:wf,r:Tf,D:Of,C:kf,L:Af,m:jf,X:Nf,S:Mf,M:Pf};function wf(){var e=Cf.f(),t=Tu();return e||t}function Tf(e){var t=vt(e);t!==null&&t.tag===5&&t.type===`form`?ks(t):Cf.r(e)}var Ef=typeof document>`u`?null:document;function Df(e,t,n){var r=Ef;if(r&&typeof t==`string`&&t){var i=Bt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),xf.has(i)||(xf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Vd(t,`link`,e),xt(t),r.head.appendChild(t)))}}function Of(e){Cf.D(e),Df(`dns-prefetch`,e,null)}function kf(e,t){Cf.C(e,t),Df(`preconnect`,e,t)}function Af(e,t,n){Cf.L(e,t,n);var r=Ef;if(r&&e&&t){var i=`link[rel="preload"][as="`+Bt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Bt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Bt(n.imageSizes)+`"]`)):i+=`[href="`+Bt(e)+`"]`;var a=i;switch(t){case`style`:a=If(e);break;case`script`:a=Bf(e)}bf.has(a)||(e=m({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),bf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Lf(a))||t===`script`&&r.querySelector(Vf(a))||(t=r.createElement(`link`),Vd(t,`link`,e),xt(t),r.head.appendChild(t)))}}function jf(e,t){Cf.m(e,t);var n=Ef;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Bt(r)+`"][href="`+Bt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Bf(e)}if(!bf.has(a)&&(e=m({rel:`modulepreload`,href:e},t),bf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Vf(a)))return}r=n.createElement(`link`),Vd(r,`link`,e),xt(r),n.head.appendChild(r)}}}function Mf(e,t,n){Cf.S(e,t,n);var r=Ef;if(r&&e){var i=bt(r).hoistableStyles,a=If(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Lf(a)))s.loading=5;else{e=m({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=bf.get(a))&&Wf(e,n);var c=o=r.createElement(`link`);xt(c),Vd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Uf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Nf(e,t){Cf.X(e,t);var n=Ef;if(n&&e){var r=bt(n).hoistableScripts,i=Bf(e),a=r.get(i);a||(a=n.querySelector(Vf(i)),a||(e=m({src:e,async:!0},t),(t=bf.get(i))&&Gf(e,t),a=n.createElement(`script`),xt(a),Vd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Pf(e,t){Cf.M(e,t);var n=Ef;if(n&&e){var r=bt(n).hoistableScripts,i=Bf(e),a=r.get(i);a||(a=n.querySelector(Vf(i)),a||(e=m({src:e,async:!0,type:`module`},t),(t=bf.get(i))&&Gf(e,t),a=n.createElement(`script`),xt(a),Vd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Ff(e,t,n,r){var a=(a=le.current)?Sf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=If(n.href),n=bt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=If(n.href);var o=bt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Lf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),bf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},bf.set(e,n),o||zf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Bf(n),n=bt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function If(e){return`href="`+Bt(e)+`"`}function Lf(e){return`link[rel="stylesheet"][`+e+`]`}function Rf(e){return m({},e,{"data-precedence":e.precedence,precedence:null})}function zf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Vd(t,`link`,n),xt(t),e.head.appendChild(t))}function Bf(e){return`[src="`+Bt(e)+`"]`}function Vf(e){return`script[async]`+e}function Hf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Bt(n.href)+`"]`);if(r)return t.instance=r,xt(r),r;var a=m({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),xt(r),Vd(r,`style`,a),Uf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=If(n.href);var o=e.querySelector(Lf(a));if(o)return t.state.loading|=4,t.instance=o,xt(o),o;r=Rf(n),(a=bf.get(a))&&Wf(r,a),o=(e.ownerDocument||e).createElement(`link`),xt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Vd(o,`link`,r),t.state.loading|=4,Uf(o,n.precedence,e),t.instance=o;case`script`:return o=Bf(n.src),(a=e.querySelector(Vf(o)))?(t.instance=a,xt(a),a):(r=n,(a=bf.get(o))&&(r=m({},n),Gf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),xt(a),Vd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Uf(r,n.precedence,e));return t.instance}function Uf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Wf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Gf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Kf=null;function qf(e,t,n){if(Kf===null){var r=new Map,i=Kf=new Map;i.set(n,r)}else i=Kf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[ht]||a[ct]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Jf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Yf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Xf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Zf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=If(r.href),a=t.querySelector(Lf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=ep.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,xt(a);return}a=t.ownerDocument||t,r=Rf(r),(i=bf.get(i))&&Wf(r,i),a=a.createElement(`link`),xt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Vd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=ep.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Qf=0;function $f(e,t){return e.stylesheets&&e.count===0&&np(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&np(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Qf===0&&(Qf=62500*Wd());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&np(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Qf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function ep(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)np(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var tp=null;function np(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,tp=new Map,t.forEach(rp,e),tp=null,ep.call(e))}function rp(e,t){if(!(t.state.loading&4)){var n=tp.get(e);if(n)var r=n.get(null);else{n=new Map,tp.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=ep.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var ip={$$typeof:C,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function ap(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ze(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ze(0),this.hiddenUpdates=Ze(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function op(e,t,n,r,i,a,o,s,c,l,u,d){return e=new ap(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=ui(3,null,null,t),e.current=a,a.stateNode=e,t=la(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ha(a),e}function sp(e){return e?(e=ci,e):ci}function cp(e,t,n,r,i,a){i=sp(i),r.context===null?r.context=i:r.pendingContext=i,r=Wa(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ga(e,r,t),n!==null&&(bu(n,e,t),Ka(n,e,t))}function lp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function up(e,t){lp(e,t),(e=e.alternate)&&lp(e,t)}function dp(e){if(e.tag===13||e.tag===31){var t=ai(e,67108864);t!==null&&bu(t,e,67108864),up(e,67108864)}}function fp(e){if(e.tag===13||e.tag===31){var t=vu();t=rt(t);var n=ai(e,t);n!==null&&bu(n,e,t),up(e,t)}}var pp=!0;function mp(e,t,n,r){var i=N.T;N.T=null;var a=P.p;try{P.p=2,gp(e,t,n,r)}finally{P.p=a,N.T=i}}function hp(e,t,n,r){var i=N.T;N.T=null;var a=P.p;try{P.p=8,gp(e,t,n,r)}finally{P.p=a,N.T=i}}function gp(e,t,n,r){if(pp){var i=_p(r);if(i===null)Ad(e,t,r,vp,n),kp(e,r);else if(jp(i,e,t,n,r))r.stopPropagation();else if(kp(e,r),t&4&&-1<Op.indexOf(e)){for(;i!==null;){var a=vt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Ke(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-ze(o);s.entanglements[1]|=c,o&=~c}ld(a),!(H&6)&&(ou=De()+500,ud(0,!1))}}break;case 31:case 13:s=ai(a,2),s!==null&&bu(s,a,2),Tu(),up(a,2)}if(a=_p(r),a===null&&Ad(e,t,r,vp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Ad(e,t,r,null,n)}}function _p(e){return e=rn(e),yp(e)}var vp=null;function yp(e){if(vp=null,e=_t(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return vp=e,null}function bp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Oe()){case ke:return 2;case Ae:return 8;case je:case Me:return 32;case Ne:return 268435456;default:return 32}default:return 32}}var xp=!1,Sp=null,Cp=null,wp=null,Tp=new Map,Ep=new Map,Dp=[],Op=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function kp(e,t){switch(e){case`focusin`:case`focusout`:Sp=null;break;case`dragenter`:case`dragleave`:Cp=null;break;case`mouseover`:case`mouseout`:wp=null;break;case`pointerover`:case`pointerout`:Tp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:Ep.delete(t.pointerId)}}function Ap(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=vt(t),t!==null&&dp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function jp(e,t,n,r,i){switch(t){case`focusin`:return Sp=Ap(Sp,e,t,n,r,i),!0;case`dragenter`:return Cp=Ap(Cp,e,t,n,r,i),!0;case`mouseover`:return wp=Ap(wp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Tp.set(a,Ap(Tp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,Ep.set(a,Ap(Ep.get(a)||null,e,t,n,r,i)),!0}return!1}function Mp(e){var t=_t(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ot(e.priority,function(){fp(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ot(e.priority,function(){fp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Np(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=_p(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);nn=r,n.target.dispatchEvent(r),nn=null}else return t=vt(n),t!==null&&dp(t),e.blockedOn=n,!1;t.shift()}return!0}function Pp(e,t,n){Np(e)&&n.delete(t)}function Fp(){xp=!1,Sp!==null&&Np(Sp)&&(Sp=null),Cp!==null&&Np(Cp)&&(Cp=null),wp!==null&&Np(wp)&&(wp=null),Tp.forEach(Pp),Ep.forEach(Pp)}function Ip(e,n){e.blockedOn===n&&(e.blockedOn=null,xp||(xp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Fp)))}var Lp=null;function Rp(e){Lp!==e&&(Lp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Lp===e&&(Lp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(yp(r||n)===null)continue;break}var a=vt(n);a!==null&&(e.splice(t,3),t-=3,Ds(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function zp(e){function t(t){return Ip(t,e)}Sp!==null&&Ip(Sp,e),Cp!==null&&Ip(Cp,e),wp!==null&&Ip(wp,e),Tp.forEach(t),Ep.forEach(t);for(var n=0;n<Dp.length;n++){var r=Dp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Dp.length&&(n=Dp[0],n.blockedOn===null);)Mp(n),n.blockedOn===null&&Dp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[lt]||null;if(typeof a==`function`)o||Rp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[lt]||null)s=o.formAction;else if(yp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Rp(n)}}}function Bp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Vp(e){this._internalRoot=e}Hp.prototype.render=Vp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;cp(n,vu(),e,t,null,null)},Hp.prototype.unmount=Vp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;cp(e.current,2,null,e,null,null),Tu(),t[ut]=null}};function Hp(e){this._internalRoot=e}Hp.prototype.unstable_scheduleHydration=function(e){if(e){var t=at();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Dp.length&&t!==0&&t<Dp[n].priority;n++);Dp.splice(n,0,e),n===0&&Mp(e)}};var Up=n.version;if(Up!==`19.2.8`)throw Error(i(527,Up,`19.2.8`));P.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:f(e),e=e===null?null:e.stateNode,e};var Wp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:N,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Gp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gp.isDisabled&&Gp.supportsFiber)try{Ie=Gp.inject(Wp),Le=Gp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Xs,s=Zs,c=Qs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=op(e,1,!1,null,null,n,r,null,o,s,c,Bp),e[ut]=t.current,Od(e),new Vp(t)}})),_=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()})),v=l(d(),1),y=_(),b=`modulepreload`,x=function(e){return`/`+e},S={},C=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=x(t,n),t=s(t),t in S)return;S[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:b,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},w=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,T=/^[\\/]{2}/;function E(e,t){return t+e.replace(/\\/g,`/`)}var D=`popstate`;function O(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function ee(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return M(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:ne(t)}return P(t,n,null,e)}function k(e,t){if(e===!1||e==null)throw Error(t)}function A(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function j(){return Math.random().toString(36).substring(2,10)}function te(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function M(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?N(t):t,state:n,key:t&&t.key||r||j(),mask:i}}function ne({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function N(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function P(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=O(e)?e:M(h.location,e,t);n&&n(r,e),l=u()+1;let d=te(r,l),f=h.createHref(r.mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=O(e)?e:M(h.location,e,t);n&&n(r,e),l=u();let i=te(r,l),d=h.createHref(r.mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return F(i,e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(D,d),c=e,()=>{i.removeEventListener(D,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function F(e,t,n=!1){let r=`http://localhost`;e&&(r=e.location.origin===`null`?e.location.href:e.location.origin),k(r,`No window.location.(origin|href) available to create URL`);let i=typeof t==`string`?t:ne(t);return i=i.replace(/ $/,`%20`),!n&&T.test(i)&&(i=r+i),new URL(i,r)}function re(e,t,n=`/`){return ie(e,t,n,!1)}function ie(e,t,n,r,i){let a=Se((typeof t==`string`?N(t):t).pathname||`/`,n);if(a==null)return null;let o=i??ae(e),s=null,c=xe(a);for(let e=0;s==null&&e<o.length;++e)s=_e(o[e],c,r);return s}function ae(e){let t=oe(e);return se(t),t}function oe(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;k(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Ae([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(k(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),oe(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:he(l,e.index),routesMeta:u.map((e,t)=>{let[n,r]=be(e.relativePath,e.caseSensitive,t===u.length-1);return{...e,matcher:n,compiledParams:r}})})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of I(e.path))a(e,t,!0,n)}),t}function I(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=I(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function se(e){e.sort((e,t)=>e.score===t.score?ge(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var ce=/^:[\w-]+$/,le=3,ue=2,de=1,fe=10,pe=-2,me=e=>e===`*`;function he(e,t){let n=e.split(`/`),r=n.length;return n.some(me)&&(r+=pe),t&&(r+=ue),n.filter(e=>!me(e)).reduce((e,t)=>e+(ce.test(t)?le:t===``?de:fe),r)}function ge(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function _e(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u={path:s.relativePath,caseSensitive:s.caseSensitive,end:c},d=s.matcher&&s.compiledParams?ye(u,l,s.matcher,s.compiledParams):ve(u,l),f=s.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=ve({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Ae([a,d.pathname]),pathnameBase:Me(Ae([a,d.pathnameBase])),route:f}),d.pathnameBase!==`/`&&(a=Ae([a,d.pathnameBase]))}return o}function ve(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=be(e.path,e.caseSensitive,e.end);return ye(e,t,n,r)}function ye(e,t,n,r){let i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return e[t]=n&&!i?void 0:(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function be(e,t=!1,n=!0){A(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function xe(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return A(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Se(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}function Ce(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?N(e):e,a;return n?(n=ke(n),a=n.startsWith(`/`)?we(n.substring(1),`/`):we(n,t)):a=t,{pathname:a,search:Ne(r),hash:Pe(i)}}function we(e,t){let n=je(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function Te(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ee(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function De(e){let t=Ee(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Oe(e,t,n,r=!1){let i;typeof e==`string`?i=N(e):(i={...e},k(!i.pathname||!i.pathname.includes(`?`),Te(`?`,`pathname`,`search`,i)),k(!i.pathname||!i.pathname.includes(`#`),Te(`#`,`pathname`,`hash`,i)),k(!i.search||!i.search.includes(`#`),Te(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=Ce(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var ke=e=>e.replace(/[\\/]{2,}/g,`/`),Ae=e=>ke(e.join(`/`)),je=e=>e.replace(/\/+$/,``),Me=e=>je(e).replace(/^\/*/,`/`),Ne=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Pe=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,Fe=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Ie(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function Le(e){return Ae(e.map(e=>e.route.path).filter(Boolean))||`/`}var Re=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function ze(e,t){let n=e;if(typeof n!=`string`||!w.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(Re)try{let e=new URL(window.location.href),r=T.test(n)?new URL(E(n,e.protocol)):new URL(n),a=Se(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{A(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var Be=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(Be);var Ve=[`GET`,...Be];new Set(Ve);var He=[`about:`,`blob:`,`chrome:`,`chrome-untrusted:`,`content:`,`data:`,`devtools:`,`file:`,`filesystem:`,`javascript:`];function Ue(e){try{return He.includes(new URL(e).protocol)}catch{return!1}}var We=v.createContext(null);We.displayName=`DataRouter`;var Ge=v.createContext(null);Ge.displayName=`DataRouterState`;var Ke=v.createContext(!1);function qe(){return v.useContext(Ke)}var Je=v.createContext({isTransitioning:!1});Je.displayName=`ViewTransition`;var Ye=v.createContext(new Map);Ye.displayName=`Fetchers`;var Xe=v.createContext(null);Xe.displayName=`Await`;var Ze=v.createContext(null);Ze.displayName=`Navigation`;var Qe=v.createContext(null);Qe.displayName=`Location`;var $e=v.createContext({outlet:null,matches:[],isDataRoute:!1});$e.displayName=`Route`;var et=v.createContext(null);et.displayName=`RouteError`;var tt=`REACT_ROUTER_ERROR`,nt=`REDIRECT`,rt=`ROUTE_ERROR_RESPONSE`;function it(e){if(e.startsWith(`${tt}:${nt}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function at(e){if(e.startsWith(`${tt}:${rt}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new Fe(t.status,t.statusText,t.data)}catch{}}function ot(e,{relative:t}={}){k(st(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=v.useContext(Ze),{hash:i,pathname:a,search:o}=pt(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Ae([n,a])),r.createHref({pathname:s,search:o,hash:i})}function st(){return v.useContext(Qe)!=null}function ct(){return k(st(),`useLocation() may be used only in the context of a <Router> component.`),v.useContext(Qe).location}var lt=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function ut(e){v.useContext(Ze).static||v.useLayoutEffect(e)}function dt(){let{isDataRoute:e}=v.useContext($e);return e?At():ft()}function ft(){k(st(),`useNavigate() may be used only in the context of a <Router> component.`);let e=v.useContext(We),{basename:t,navigator:n}=v.useContext(Ze),{matches:r}=v.useContext($e),{pathname:i}=ct(),a=JSON.stringify(De(r)),o=v.useRef(!1);return ut(()=>{o.current=!0}),v.useCallback((r,s={})=>{if(A(o.current,lt),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Oe(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Ae([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}v.createContext(null);function pt(e,{relative:t}={}){let{matches:n}=v.useContext($e),{pathname:r}=ct(),i=JSON.stringify(De(n));return v.useMemo(()=>Oe(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function mt(e,t){return ht(e,t)}function ht(e,t,n){k(st(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=v.useContext(Ze),{matches:i}=v.useContext($e),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;Mt(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=ct(),d;if(t){let e=typeof t==`string`?N(t):t;k(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):re(e,{pathname:p});A(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),A(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=St(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Ae([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Ae([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?v.createElement(Qe.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,mask:void 0,...d},navigationType:`POP`}},h):h}function gt(){let e=kt(),t=Ie(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=v.createElement(v.Fragment,null,v.createElement(`p`,null,`💿 Hey developer 👋`),v.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,v.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,v.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),v.createElement(v.Fragment,null,v.createElement(`h2`,null,`Unexpected Application Error!`),v.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?v.createElement(`pre`,{style:i},n):null,o)}var _t=v.createElement(gt,null),vt=class extends v.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=at(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:v.createElement($e.Provider,{value:this.props.routeContext},v.createElement(et.Provider,{value:e,children:this.props.component}));return this.context?v.createElement(bt,{error:e},t):t}};vt.contextType=Ke;var yt=new WeakMap;function bt({children:e,error:t}){let{basename:n}=v.useContext(Ze);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=it(t.digest);if(e){let r=yt.get(t);if(r)throw r;let i=ze(e.location,n),a=i.absoluteURL||i.to;if(Ue(a))throw Error(`Invalid redirect location`);if(Re&&!yt.get(t)){if(i.isExternal||e.reloadDocument)window.location.href=a;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw yt.set(t,n),n}}return v.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${a}`})}}return e}function xt({routeContext:e,match:t,children:n}){let r=v.useContext(We);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),v.createElement($e.Provider,{value:e},n)}function St(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);k(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:Le(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||_t,o&&(s<0&&c===0?(Mt(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?v.createElement(n.route.Component,null):n.route.element?n.route.element:e,v.createElement(xt,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?v.createElement(vt,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function Ct(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function wt(e){let t=v.useContext(We);return k(t,Ct(e)),t}function Tt(e){let t=v.useContext(Ge);return k(t,Ct(e)),t}function Et(e){let t=v.useContext($e);return k(t,Ct(e)),t}function Dt(e){let t=Et(e),n=t.matches[t.matches.length-1];return k(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Ot(){return Dt(`useRouteId`)}function kt(){let e=v.useContext(et),t=Tt(`useRouteError`),n=Dt(`useRouteError`);return e===void 0?t.errors?.[n]:e}function At(){let{router:e}=wt(`useNavigate`),t=Dt(`useNavigate`),n=v.useRef(!1);return ut(()=>{n.current=!0}),v.useCallback(async(r,i={})=>{A(n.current,lt),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var jt={};function Mt(e,t,n){!t&&!jt[e]&&(jt[e]=!0,A(!1,n))}v.memo(Nt);function Nt({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:a}){return ht(e,void 0,{manifest:t,state:r,isStatic:i,onError:a,future:n})}function Pt({to:e,replace:t,state:n,relative:r}){k(st(),`<Navigate> may be used only in the context of a <Router> component.`);let{static:i}=v.useContext(Ze);A(!i,`<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.`);let{matches:a}=v.useContext($e),{pathname:o}=ct(),s=dt(),c=Oe(e,De(a),o,r===`path`),l=JSON.stringify(c);return v.useEffect(()=>{s(JSON.parse(l),{replace:t,state:n,relative:r})},[s,l,r,t,n]),null}function Ft(e){k(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function It({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,useTransitions:o}){k(!st(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=v.useMemo(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=N(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,mask:m}=n,h=v.useMemo(()=>{let e=Se(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return A(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:v.createElement(Ze.Provider,{value:c},v.createElement(Qe.Provider,{children:t,value:h}))}function Lt({children:e,location:t}){return mt(Rt(e),t)}v.Component;function Rt(e,t=[]){let n=[];return v.Children.forEach(e,(e,r)=>{if(!v.isValidElement(e))return;let i=[...t,r];if(e.type===v.Fragment){n.push.apply(n,Rt(e.props.children,i));return}k(e.type===Ft,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),k(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Rt(e.props.children,i)),n.push(a)}),n}var zt=`get`,Bt=`application/x-www-form-urlencoded`;function Vt(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Ht(e){return Vt(e)&&e.tagName.toLowerCase()===`button`}function Ut(e){return Vt(e)&&e.tagName.toLowerCase()===`form`}function Wt(e){return Vt(e)&&e.tagName.toLowerCase()===`input`}function Gt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Kt(e,t){return e.button===0&&(!t||t===`_self`)&&!Gt(e)}function qt(e=``){return new URLSearchParams(typeof e==`string`||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(e=>[n,e]):[[n,r]])},[]))}function Jt(e,t){let n=qt(e);return t&&t.forEach((e,r)=>{n.has(r)||t.getAll(r).forEach(e=>{n.append(r,e)})}),n}var Yt=null;function Xt(){if(Yt===null)try{new FormData(document.createElement(`form`),0),Yt=!1}catch{Yt=!0}return Yt}var Zt=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function Qt(e){return e!=null&&!Zt.has(e)?(A(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Bt}"`),null):e}function $t(e,t){let n,r,i,a,o;if(Ut(e)){let o=e.getAttribute(`action`);r=o?Se(o,t):null,n=e.getAttribute(`method`)||zt,i=Qt(e.getAttribute(`enctype`))||Bt,a=new FormData(e)}else if(Ht(e)||Wt(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?Se(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||zt,i=Qt(e.getAttribute(`formenctype`))||Qt(o.getAttribute(`enctype`))||Bt,a=new FormData(o,e),!Xt()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Vt(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=zt,r=null,i=Bt,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);function en(e,t){if(e===!1||e==null)throw Error(t)}function tn(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return i.pathname=n?i.pathname.endsWith(`/`)?`${i.pathname}_.${r}`:`${i.pathname}.${r}`:i.pathname===`/`?`_root.${r}`:t&&Se(i.pathname,t)===`/`?`${je(t)}/_root.${r}`:`${je(i.pathname)}.${r}`,i}async function nn(e,t){if(e.id in t)return t[e.id];try{let n=await C(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function rn(e){return e!=null&&typeof e.page==`string`}function an(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function on(e,t,n){return dn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await nn(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(an).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function sn(e,t,n,r,i,a){let o=(e,t)=>!n[t]||e.route.id!==n[t].route.id,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function cn(e,t,{includeHydrateFallback:n}={}){return ln(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function ln(e){return[...new Set(e)]}function un(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function dn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!rn(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(un(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function fn(){let e=v.useContext(We);return en(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function pn(){let e=v.useContext(Ge);return en(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var mn=v.createContext(void 0);mn.displayName=`FrameworkContext`;function hn(){let e=v.useContext(mn);return en(e,`You must render this element inside a <HydratedRouter> element`),e}function gn(e,t){let n=v.useContext(mn),[r,i]=v.useState(!1),[a,o]=v.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=v.useRef(null);v.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),v.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:_n(s,p),onBlur:_n(c,m),onMouseEnter:_n(l,p),onMouseLeave:_n(u,m),onTouchStart:_n(d,p)}]:[a,f,{}]:[!1,f,{}]}function _n(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function vn({page:e,...t}){let n=qe(),{nonce:r}=hn(),{router:i}=fn(),a=v.useMemo(()=>re(i.routes,e,i.basename),[i.routes,e,i.basename]);return a?(t.nonce==null&&r&&(t={...t,nonce:r}),n?v.createElement(bn,{page:e,matches:a,...t}):v.createElement(xn,{page:e,matches:a,...t})):null}function yn(e){let{manifest:t,routeModules:n}=hn(),[r,i]=v.useState([]);return v.useEffect(()=>{let r=!1;return on(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function bn({page:e,matches:t,...n}){let r=ct(),{future:i}=hn(),{basename:a}=fn(),o=v.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=tn(e,a,i.v8_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.v8_trailingSlashAwareDataRequests,e,r,t]);return v.createElement(v.Fragment,null,o.map(e=>v.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function xn({page:e,matches:t,...n}){let r=ct(),{future:i,manifest:a,routeModules:o}=hn(),{basename:s}=fn(),{loaderData:c,matches:l}=pn(),u=v.useMemo(()=>sn(e,t,l,a,r,`data`),[e,t,l,a,r]),d=v.useMemo(()=>sn(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=v.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=tn(e,s,i.v8_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.v8_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=v.useMemo(()=>cn(d,a),[d,a]),m=yn(d);return v.createElement(v.Fragment,null,f.map(e=>v.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>v.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>v.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function Sn(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}v.Component;var Cn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{Cn&&(window.__reactRouterVersion=`7.18.2`)}catch{}function wn({basename:e,children:t,useTransitions:n,window:r}){let i=v.useRef();i.current??=ee({window:r,v5Compat:!0});let a=i.current,[o,s]=v.useState({action:a.action,location:a.location}),c=v.useCallback(e=>{n===!1?s(e):v.startTransition(()=>s(e))},[n]);return v.useLayoutEffect(()=>a.listen(c),[a,c]),v.createElement(It,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}var Tn=v.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,useTransitions:_}=v.useContext(Ze),y=typeof l==`string`&&w.test(l),b=ze(l,h);l=b.to;let x=ot(l,{relative:r}),S=ct(),C=null;if(o){let e=Oe(o,[],S.mask?S.mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Ae([h,e.pathname])),C=g.createHref(e)}let[T,E,D]=gn(n,p),O=An(l,{replace:a,mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,defaultShouldRevalidate:f,useTransitions:_});function ee(t){e&&e(t),t.defaultPrevented||O(t)}let k=!(b.isExternal||i),A=v.createElement(`a`,{...p,...D,href:(k?C:void 0)||b.absoluteURL||x,onClick:k?ee:e,ref:Sn(m,E),target:c,"data-discover":!y&&t===`render`?`true`:void 0});return T&&!y?v.createElement(v.Fragment,null,A,v.createElement(vn,{page:x})):A});Tn.displayName=`Link`;var En=v.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=pt(a,{relative:c.relative}),d=ct(),f=v.useContext(Ge),{navigator:p,basename:m}=v.useContext(Ze),h=f!=null&&In(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,y=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),y=y?y.toLowerCase():null,g=g.toLowerCase()),y&&m&&(y=Se(y,m)||y);let b=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,x=_===g||!r&&_.startsWith(g)&&_.charAt(b)===`/`,S=y!=null&&(y===g||!r&&y.startsWith(g)&&y.charAt(g.length)===`/`),C={isActive:x,isPending:S,isTransitioning:h},w=x?e:void 0,T;T=typeof n==`function`?n(C):[n,x?`active`:null,S?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let E=typeof i==`function`?i(C):i;return v.createElement(Tn,{...c,"aria-current":w,className:T,ref:l,style:E,to:a,viewTransition:o},typeof s==`function`?s(C):s)});En.displayName=`NavLink`;var Dn=v.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=zt,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m)=>{let{useTransitions:h}=v.useContext(Ze),g=Pn(),_=Fn(s,{relative:l}),y=o.toLowerCase()===`get`?`get`:`post`,b=typeof s==`string`&&w.test(s);return v.createElement(`form`,{ref:m,method:y,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f});h&&n!==!1?v.startTransition(()=>p()):p()},...p,"data-discover":!b&&e===`render`?`true`:void 0})});Dn.displayName=`Form`;function On(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function kn(e){let t=v.useContext(We);return k(t,On(e)),t}function An(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c,useTransitions:l}={}){let u=dt(),d=ct(),f=pt(e,{relative:o});return v.useCallback(p=>{if(Kt(p,t)){p.preventDefault();let t=n===void 0?ne(d)===ne(f):n,m=()=>u(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c});l?v.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}function jn(e){A(typeof URLSearchParams<`u`,"You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let t=v.useRef(qt(e)),n=v.useRef(!1),r=ct(),i=v.useMemo(()=>Jt(r.search,n.current?null:t.current),[r.search]),a=dt();return[i,v.useCallback((e,t)=>{let r=qt(typeof e==`function`?e(new URLSearchParams(i)):e);n.current=!0,a(`?`+r,t)},[a,i])]}var Mn=0,Nn=()=>`__${String(++Mn)}__`;function Pn(){let{router:e}=kn(`useSubmit`),{basename:t}=v.useContext(Ze),n=Ot(),r=e.fetch,i=e.navigate;return v.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=$t(e,t);if(a.navigate===!1){let e=a.fetcherKey||Nn();await r(e,n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync})}else await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Fn(e,{relative:t}={}){let{basename:n}=v.useContext(Ze),r=v.useContext($e);k(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...pt(e||`.`,{relative:t})},o=ct();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Ae([n,a.pathname])),ne(a)}function In(e,{relative:t}={}){let n=v.useContext(Je);k(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=kn(`useViewTransitionState`),i=pt(e,{relative:t});if(!n.isTransitioning)return!1;let a=Se(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Se(n.nextLocation.pathname,r)||n.nextLocation.pathname;return ve(i.pathname,o)!=null||ve(i.pathname,a)!=null}var Ln=`---\r
title: 1. Login & Open Shift\r
section: USER GUIDELINES\r
order: 2\r
isSubTopic: false\r
parentTopic: ''\r
language: en\r
---\r
\r
`,Rn=`---\r
title: 1.1 System Setup Before Login\r
section: USER GUIDELINES\r
order: 1.1\r
isSubTopic: true\r
parentTopic: 1. Login & Open Shift\r
language: en\r
---\r
\r
Before accessing the POS system, complete the required setup in the Management Hub/Backoffice. This includes:\r
\r
\\>Create the required **Roles** for staff.\r
\r
Before using the POS system, the required staff, roles, POS devices and other settings must be configured in the **Management Hub.**\r
\r
Don’t  know how to access the Management Hub, *[Click Here to learn how to access the Management Hub](http://localhost:5173/docs?id=How-to-access-Management-Hub).*\r
\r
**Create Roles**\r
\r
1\\.	In the Management Hub, scroll down to **Employee** and select **Roles**. The Roles page will display all roles that have already been created.\r
\r
![](</admin/1. Login & Open Shift/1.1(1).png>)\r
\r
2\\.	Click **New Role** to create a new role.\r
\r
![](</admin/1. Login & Open Shift/test.png>)\r
\r
3\\.	Enter the **Role Name** ( e.g. Staff).\r
\r
![](</admin/1. Login & Open Shift/1.1(3).png>)\r
\r
4\\.	Set the permissions for the role under the **Management Hub** and **POS App** sections.\r
\r
Each permission controls what the assigned staff can access or perform.\r
\r
![](</admin/1. Login & Open Shift/1.1(4).png>)\r
\r
**POS App**\r
\r
To enable a permission, **toggle the button on**. To prevent the staff from using a permission, **toggle the button off**.\r
\r
![](</admin/1. Login & Open Shift/Screenshot-2026-09-28-172614.png>)\r
\r
**Management Hub**\r
\r
![](</admin/1. Login & Open Shift/Screenshot-2026-09-28-172601.png>)\r
\r
5\\.	Review all permissions and make sure they match the staff member's responsibilities.\r
\r
**Note:** For example, if staff should not be allowed to open the cash drawer without making a sale, keep **Open Cash Drawer Without Making Sale turned off.**\r
\r
![](</admin/1. Login & Open Shift/1.1(5).png>)\r
\r
6\\.	Click **Create** to create the role. A confirmation message will appear when the role has been successfully created\r
\r
![](</admin/1. Login & Open Shift/2.png>)\r
\r
**Manage Existing Roles**\r
\r
After creating a role, the role will appear on the Roles dashboard.\r
\r
•	Use the **Search** bar to find a specific role by name.\r
\r
![](</admin/1. Login & Open Shift/3.png>)\r
\r
•	Click **Edit** on a role to modify its permissions.\r
\r
![](</admin/1. Login & Open Shift/4.png>)\r
\r
•	Update the required permissions and **Save** the changes.\r
\r
![](</admin/1. Login & Open Shift/5.png>)\r
\r
\\>	Create **Staff IDs** and assign the appropriate roles.\r
\r
Creating Staff Account\r
\r
1\\.	Go to **Employee > Staff**. Here, you can view all staff accounts that have already been created.\r
\r
![](</admin/1. Login & Open Shift/1.1(10).png>)\r
\r
2\\.	Click ‘New Staff’\r
\r
![](</admin/1. Login & Open Shift/6.png>)\r
\r
3\\.	Select the staff member's **Role** (e.g. **Staff**). Then, enter the staff member's **Name**.\r
\r
![](</admin/1. Login & Open Shift/1.1(12).png>)\r
\r
4\\.	If the selected role has **POS Access** enabled, a **POS PIN** will be required.\r
\r
**Note:** Each staff account must have a different POS PIN.\r
\r
![](</admin/1. Login & Open Shift/1.1(13).png>)\r
\r
5\\.	 Enter a **6-digit PIN** that the staff member can remember.\r
\r
![](</admin/1. Login & Open Shift/1.1(14).png>)\r
\r
6\\.	Optionally, enter the staff member's **Email** and **Phone No**.\r
\r
**Note: If Management Hub Access** is enabled for the selected role, the staff member's **Email** and **Password** will be required.\r
\r
![](</admin/1. Login & Open Shift/1.1(15).png>)\r
\r
7\\.	Select the **Outlet** where the staff member is assigned.\r
\r
![](</admin/1. Login & Open Shift/1.1(16).png>)\r
\r
8\\.	Check the details and click **Create** to create the staff account. After the account is created, you will be redirected to the **Staff Dashboard**.\r
\r
![](</admin/1. Login & Open Shift/7.png>)\r
\r
**Manage Staff**\r
\r
In the **Staff Dashboard**, you can:\r
\r
•	Search for a staff member by their **Name**.\r
\r
![](</admin/1. Login & Open Shift/1.1(20).png>)\r
\r
•	Use the Filter button to filter staff by their **Role**.\r
\r
![](</admin/1. Login & Open Shift/1.1(19).png>)\r
\r
•	Remove a staff member's active shift if necessary. If you need to forcefully close a staff member's active shift.\r
\r
![](</admin/1. Login & Open Shift/8.png>)\r
\r
\\>	Register the **POS Device** that will be used.\r
\r
A **POS Device** must be selected before starting a shift. Each device must have a registered POS Device to use the Mysztech POS.\r
\r
1\\.	Go to Settings > POS Devices. Here, you can view all registered POS Device.\r
\r
![](</admin/1. Login & Open Shift/1.1(21).png>)\r
\r
2\\.	Click New Pos Device.\r
\r
![](</admin/1. Login & Open Shift/9.png>)\r
\r
3\\.	Enter a **Code Number** (e.g. **001, 002**). Then, enter a **Name** for the POS Device (e.g. **Main POS**).\r
\r
**Note:** The **Code Number** must be unique for each POS Device. This unique code will be used in the receipt number.\r
\r
![](</admin/1. Login & Open Shift/1.1(23).png>)\r
\r
4\\.	Select the **Outlet** where the POS Device will be used.\r
\r
![](</admin/1. Login & Open Shift/1.1(24).png>)\r
\r
5\\.	Click **Create** and you have successfully created a POS Device.\r
\r
![](</admin/1. Login & Open Shift/10.png>)\r
\r
**Manage POS Devices**\r
\r
You can manage your registered POS Devices from the **POS Devices** page.\r
\r
•	Use the **Search Bar** to search for a specific POS Device.\r
\r
![](</admin/1. Login & Open Shift/11.png>)\r
\r
•	Click **Filter** to filter POS Devices by **Outlet**. Turn on **Activated Only** to display only activated POS Devices.\r
\r
![](</admin/1. Login & Open Shift/1.1(27).png>)\r
\r
•	Select a POS Device and click **Edit** to update its details.\r
\r
![](</admin/1. Login & Open Shift/12.png>)\r
\r
•	Select a POS Device and click **Delete** to remove it.\r
\r
![](</admin/1. Login & Open Shift/13.png>)\r
\r
•	If a POS Device is activated, you can deactivate it by clicking **Edit** and changing its status.\r
\r
**Note:** You can only deactivate an active POS Device.\r
\r
![](</admin/1. Login & Open Shift/14.png>)\r
\r
\\>Create an Outlet for your shop.\r
\r
Creating an outlet is important because the **outlet name and address will be displayed on your receipts**. This setup needs to be done in the Management Hub.\r
\r
Don’t know how to access Management Hub? *[Click Here to learn how to access Management Hub.](http://localhost:5173/docs?id=How-to-access-Management-Hub)*\r
\r
1\\.	Go to **Outlet > Outlets**. Here, you can see all the outlets that have already been registered.\r
\r
![](</admin/1. Login & Open Shift/Picture86.png>)\r
\r
2\\.	Click **New Outlet** to create a new outlet.\r
\r
![](</admin/1. Login & Open Shift/1.png>)\r
\r
3\\.	Enter the **Outlet Name** and **Phone Number**.\r
\r
![](</admin/1. Login & Open Shift/Picture87.png>)\r
\r
4\\.	Enter the **Address** of the outlet.\r
\r
![](</admin/1. Login & Open Shift/Picture88.png>)\r
\r
5\\.	Enter the **Postcode**.\r
\r
![](</admin/1. Login & Open Shift/Picture89.png>)\r
\r
6\\.	Select the **Country**. By default, it is set to Malaysia.\r
\r
![](</admin/1. Login & Open Shift/Picture90.png>)\r
\r
7\\.	Select the **State** and **City**.\r
\r
![](</admin/1. Login & Open Shift/Picture91.png>)\r
\r
8\\.	In the **Description** box, you can leave any additional notes if needed.\r
\r
![](</admin/1. Login & Open Shift/Picture92.png>)\r
\r
9\\.	Check that all the information entered is correct and Click **Create**.\r
\r
![](</admin/1. Login & Open Shift/2.png>)\r
\r
10\\.	Your **Outlet** has now been successfully created.\r
\r
![](</admin/1. Login & Open Shift/Picture93.png>)\r
\r
11\\.	Optional: You can use the **Search button** to search for an outlet by name. You can also use the Filter button to filter outlets by City, State, or Country.\r
\r
![](</admin/1. Login & Open Shift/3.png>)\r
`,zn=`---\r
title: 1.2 Login & Open Shift\r
section: USER GUIDELINES\r
order: 1.2\r
isSubTopic: true\r
parentTopic: 1. Login & Open Shift\r
language: en\r
---\r
\r
Use these steps when opening the POS application for the first time or when signing in again.\r
\r
1\\.	Open the Mysztech POS application on the tablet or POS device.\r
\r
![](</admin/1. Login & Open Shift/1.2(1).png>)\r
\r
2\\.	Enter the license key and select **Activate**.\r
\r
![](</admin/1. Login & Open Shift/1.2(2).jpg>)\r
\r
3\\.	Enter your email address and password and click Sign In to your account to continue.\r
\r
![](</admin/1. Login & Open Shift/1.2(3).jpg>)\r
\r
4\\.	Select your store from the dropdown list and choose Choose Store.\r
\r
![](</admin/1. Login & Open Shift/1.2(4).jpg>)![](</admin/1. Login & Open Shift/1.2(5).jpg>)\r
\r
5\\.	Select Next.\r
\r
![](</admin/1. Login & Open Shift/1.2(6).png>)\r
\r
6\\.	Select your POS device type from the dropdown list.\r
\r
![](</admin/1. Login & Open Shift/1.2(7).jpg>)![](</admin/1. Login & Open Shift/1.2(8).jpg>)\r
\r
7\\.	Select Next.\r
\r
![](</admin/1. Login & Open Shift/1.2(6).png>)\r
\r
8\\.	Enter your 6-digit PIN to authenticate Time Clock.\r
\r
![](</admin/1. Login & Open Shift/1.2(9).jpg>)\r
\r
9\\.	Click OK to start your current shift.\r
\r
![](</admin/1. Login & Open Shift/1.2(10).jpg>)\r
\r
10\\.	Enter your 6 digit PIN to CLOCK-IN to your current shift.\r
\r
![](</admin/1. Login & Open Shift/1.2(11).jpg>)\r
\r
11\\.	Select Clock In button to proceed.\r
\r
![](</admin/1. Login & Open Shift/1.2(12).jpg>)\r
\r
12\\.	Select Open Shift button to open your current shift.\r
\r
![](</admin/1. Login & Open Shift/1.2(13).jpg>)\r
\r
13\\.	Check the details, then press Confirm to continue.\r
\r
![](</admin/1. Login & Open Shift/1.2(14).jpg>)\r
\r
14\\.	Enter the starting cash amount in the cash drawer, then press OK.\r
\r
![](</admin/1. Login & Open Shift/1.2(15).jpg>)\r
\r
15\\.	Select Open Shift button to continue.\r
\r
![](</admin/1. Login & Open Shift/1.2(16).jpg>)\r
\r
16\\.	Wait for **“Syncing Data”** to reach 100%. Once it disappears, you can start making sales.\r
\r
![](</admin/1. Login & Open Shift/1.2(17).jpg>)\r
`,Bn=`---\r
title: 1.1 Printer and Cash Drawer\r
section: SUPPORT\r
order: 1.1\r
isSubTopic: true\r
parentTopic: 1.Troubleshooting\r
language: en\r
---\r
\r
If the printer or cash drawer is not working properly, follow the steps for the printer connection type you are using.\r
\r
**Bluetooth Printer:**\r
\r
1\\.	Make sure the **printer is powered on** and has enough **paper roll**.\r
\r
2\\.	On the **POS System**, click the **Menu** icon at the top left.\r
\r
3\\.	Go to **Settings > Printers**.\r
\r
4\\.	Find and select the **Bluetooth printer** from the list of connected printers.\r
\r
5\\.	Click **Scan for Device** and select your printer. (Note: Check your printer mac address by doing self-test, Turn off the printer. Press and hold the **FEED** button, then turn on the printer.Release the **FEED** button when the printer starts printing.)\r
\r
6\\.	Make sure the **Paper Width** is correct. Select **58mm** or **80mm.**\r
\r
7\\.	Enable the **Cash Drawer** toggle if you are using a cash drawer.\r
\r
8\\.	Make sure **Print Receipt and Bills** is enabled.\r
\r
9\\.	Click **Print Test** to check if the printer and cash drawer are working correctly.\r
\r
10\\.	If the test is successful, click **Save.**\r
\r
**Ethernet (LAN) Printer:**\r
\r
1\\.	Make sure the printer is powered on and has enough **paper roll.**\r
\r
2\\.	Make sure the printer and router are connected using a **LAN cable** and connected to the **2.4G network**.\r
\r
3\\.	On the **POS System**, click the **Menu** icon at the top left.\r
\r
4\\.	Go to **Settings > Printers**.\r
\r
5\\.	Find and select the **Ethernet printer** from the list of connected printers.\r
\r
6\\.	Make sure the **Connection Type** is set to Ethernet.\r
\r
7\\.	Check that the **Printer IP Address** is correct.\r
\r
8\\.	Make sure the **Paper Width** is correct. Select **58mm or 80mm.**\r
\r
9\\. Enable the **Cash Drawer** toggle if you are using a cash drawer.\r
\r
10\\. Make sure **Print Receipt** **and Bills** is enabled.\r
\r
11\\. Click **Print Test** to check if the printer and cash drawer are working correctly.\r
\r
12\\. If the test is successful, click **Save**.\r
\r
**USB Printer**\r
\r
1\\.	Make sure the **POS device is powered on**, then turn on the printer.\r
\r
2\\.	Make sure the printer has enough **paper roll**.\r
\r
3\\.	A pop-up will appear on the POS device asking for permission to use the printer. Click Allow.\r
\r
4\\.	If the pop-up does not appear, **turn the printer off and on again**, then check for the pop-up.\r
\r
5\\.	On the **POS System**, click the **Menu** icon at the top left.\r
\r
6\\.	Go to **Settings > Printers**.\r
\r
7\\.	Find and select the **USB printer** from the list of connected printers.\r
\r
8\\.	Make sure the **Paper Width** is correct. Select 58mm or 80mm.\r
\r
9\\.	Enable the Cash Drawer toggle if you are using a cash drawer.\r
\r
10\\.	Make sure **Print Receipt and Bills** is enabled.\r
\r
11\\.	Click **Print** Test to check if the printer and cash drawer are working correctly.\r
\r
12\\.	If the test is successful, click **Save.**\r
`,Vn=`---\r
title: 1.2 Close Staff's Previous Shift\r
section: SUPPORT\r
order: 1.2\r
isSubTopic: true\r
parentTopic: 1.Troubleshooting\r
language: en\r
---\r
\r
If a staff member cannot log in because their previous shift was not close, you can close shift from Management Hub.\r
\r
1\\.	Go to **Management Hub > Dashboard > Shift.**\r
\r
2\\.	Find the staff member who cannot log in.\r
\r
3\\.	Click **view icon** for the staff member.\r
\r
4\\.	A **Shift report** pop-up will appear.\r
\r
5\\.	Click close **shift button**.\r
\r
6\\.	A pop-up actual cash amount will appear, and you will need to enter the cash amount and click **close shift button**.\r
\r
7\\.	The staff member can now log in to the **POS System**.\r
`,Hn=`---\r
title: 1.3 Customer Display Stuck\r
section: SUPPORT\r
order: 1.3\r
isSubTopic: true\r
parentTopic: 1.Troubleshooting\r
language: en\r
---\r
\r
If the **Customer Display** is stuck or not responding, follow these steps (This can only be done if the roles have access to change the settings):\r
\r
1\\.	Go to **Settings > Customer Display**.\r
\r
2\\.	Click **Stop Display**.\r
\r
3\\.	Go to **Customer Display** and start the display again.\r
`,Un=`---\r
title: 1.4 POS Device Not Showing Up\r
section: SUPPORT\r
order: 1.4\r
isSubTopic: true\r
parentTopic: 1.Troubleshooting\r
language: en\r
---\r
\r
If the POS device does not show up, follow these steps:\r
\r
1\\.	Log in to **Management Hub**.\r
\r
2\\.	Go to **Dashboard > Shifts**.\r
\r
3\\.	Find the shift related to the POS device and click the **eye icon** to view the shift details.\r
\r
4\\.	Click **Close Shift** to close the shift.\r
\r
5\\.	Go to **Settings > POS Devices**.\r
\r
6\\.	Find the POS device and click **Edit**.\r
\r
7\\.	Disable the **Activated** button.\r
\r
8\\.	Click **Save Changes** to save the settings.\r
`,Wn=`---\r
title: 1.5 POS Device Lagging\r
section: SUPPORT\r
order: 1.5\r
isSubTopic: true\r
parentTopic: 1.Troubleshooting\r
language: en\r
---\r
\r
If the **POS device is lagging or responding slowly**, follow these steps:\r
\r
1\\.	Restart the **POS device**.\r
\r
2\\.	Wait for the device to turn on completely.\r
\r
3\\.	Open the POS System again and check if the device is working properly.\r
`,Gn=`---\r
title: 2. Logout & Close Shift\r
section: USER GUIDELINES\r
order: 2\r
language: en\r
---\r
\r
`,Kn=`---\r
title: 2.1 Close Shift\r
section: USER GUIDELINES\r
order: 2.1\r
isSubTopic: true\r
parentTopic: 2. Logout & Close Shift\r
language: en\r
---\r
\r
There are two ways to close a shift: through the **POS System** or **Management Hub.**\r
\r
**Recommended:** Close the shift directly from the **POS System**.\r
\r
A. Close Shift from **POS System**\r
\r
1\\.	Open the Menu tab (on top- left – corner).\r
\r
&#x20;![](</admin/2. Logout & Close Shift/Picture2-1.jpg>)\r
\r
2\\.	Select Shift button.\r
\r
![](</admin/2. Logout & Close Shift/2.1/2.1(2).jpg>)\r
\r
3\\.	Select Close Shift button to continue.\r
\r
![](</admin/2. Logout & Close Shift/2.1/2.1(3).png>)\r
\r
4\\.	Press Actual Cash Amount button (RM 0.00).\r
\r
![](</admin/2. Logout & Close Shift/2.1/2.1(4).png>)\r
\r
5\\.	Calculate total amount in cash drawer correctly, then enter the actual cash amount and press OK.\r
\r
![](</admin/2. Logout & Close Shift/2.1/2.1(5).png>)\r
\r
6\\.	Enable Print Report and Print Sold Items button (if you want to print out current shift’s sales report and sold item), then select Close Shift.\r
\r
![](</admin/2. Logout & Close Shift/2.1/2.1(6).png>)\r
\r
7\\.	You have successfully completed the close shift process.\r
\r
![](</admin/2. Logout & Close Shift/2.1/2.1(7).png>)\r
\r
B. Close Shift from **Management Hub**\r
\r
**Note:** When selecting a shift, check the **Closing Time** column. If a shift appears without a closing time, it means that the shift has not been closed yet.\r
\r
Don’t know how to access Management Hub, *[click here to learn how to access Management Hub](http://localhost:5173/docs?id=How-to-access-Management-Hub)*\r
\r
1\\.	This section displays the shifts list. To close shift in the management hub, click the filter button located at the top right.\r
\r
![](</admin/2. Logout & Close Shift/2.1/2.1(8).png>)\r
\r
2\\.	In the filter section, you can select any desired criteria and then click the apply button.\r
\r
![](</admin/2. Logout & Close Shift/2.1/2.1(9).png>)\r
\r
3\\.	To view the details of a specific shift, you must click on the eye icons.\r
\r
![](</admin/2. Logout & Close Shift/2.1/2.1(10).png>)\r
\r
4\\.	To close the selected shift,click on the close shift button.\r
\r
![](</admin/2. Logout & Close Shift/2.1/2.1(11).png>)\r
\r
5\\.	Insert the actual cash amount into the provided field and then click close shift button.\r
\r
![](</admin/2. Logout & Close Shift/2.1/2.1(12).png>)\r
\r
6\\.	Once completed, the system will display a notification indicating that the shift has been closed successfully.\r
\r
![](</admin/2. Logout & Close Shift/2.1/2.1(13).png>)\r
\r
7\\.	To export the shift report, click on the export button located at the top right corner, select desired criteria, and then click the export button.\r
\r
![](</admin/2. Logout & Close Shift/2.1/2.1(14).png>)\r
\r
8\\.	Once the export is completed, the system will display a confirmation notification and you can download the report.\r
\r
![](</admin/2. Logout & Close Shift/2.1/1.png>)\r
`,qn=`---\r
title: 2.2 Attendance Records\r
section: USER GUIDELINES\r
order: 2.2\r
isSubTopic: true\r
parentTopic: 2. Logout & Close Shift\r
language: en\r
---\r
\r
The **Attendance** section keeps a record of staff attendance. Every time a staff member **clocks in** and **closes their shift**, the system records the **opening time, closing time**, and other relevant attendance details.\r
\r
**View Attendance Records**\r
\r
1\\.	Go to **Employee > Attendance**. Here, you can view all recorded attendance records.\r
\r
![](</admin/2. Logout & Close Shift/2.1/2.1(16).png>)\r
\r
2\\.	Use the **Search** button to search for a specific attendance record.\r
\r
![](</admin/2. Logout & Close Shift/2.1/2.1(17).png>)\r
\r
3\\.	Click **Filter** to filter the records by **Outlet.**\r
\r
![](</admin/2. Logout & Close Shift/2.1/2.png>)\r
\r
![](</admin/2. Logout & Close Shift/2.1/2.1(19).png>)\r
\r
4\\.	Scroll down to view **the total number of results.**\r
\r
![](</admin/2. Logout & Close Shift/2.1/3.png>)\r
\r
5\\.	Use the **Per Page** option to choose how many records are displayed on each page. You can choose **10, 50, 100, or 200** records per page.\r
\r
![](</admin/2. Logout & Close Shift/2.1/2.1(21).png>)\r
\r
6\\.	Use the page numbers at the bottom to move between pages, such as **Page 1, 2, 3, 4, 5,** and so on.\r
\r
![](</admin/2. Logout & Close Shift/2.1/2.1(22).png>)\r
`,Jn=`---\r
title: 2.3 Logout\r
section: USER GUIDELINES\r
order: 2.3\r
isSubTopic: true\r
parentTopic: 2. Logout & Close Shift\r
language: en\r
---\r
\r
1\\.	Press the logout button at the bottom right to log out.\r
\r
![](</admin/2. Logout & Close Shift/2.1/Picture94.jpg>)\r
\r
2\\.	Press Confirm button to continue.\r
\r
![](</admin/2. Logout & Close Shift/2.1/Picture95.jpg>)\r
\r
3\\.	You have successfully logged out of your account.\r
\r
![](</admin/2. Logout & Close Shift/2.1/Picture96.jpg>)\r
`,Yn=`---\r
title: 3. Restaurant Table Layout\r
section: USER GUIDELINES\r
order: 3\r
language: en\r
---\r
\r
`,Xn=`---\r
title: 3.1 Create a Section\r
section: USER GUIDELINES\r
order: 3.1\r
isSubTopic: true\r
parentTopic: 3. Restaurant Table Layout\r
language: en\r
---\r
\r
1\\.	Select the Layout icon at the bottom of the page.\r
\r
![](</admin/3. Restaurant Table Layout/3.1/3.1(1).png>)\r
\r
2\\.	Select Edit button at the top right to create a section.\r
\r
![](</admin/3. Restaurant Table Layout/3.1/3.1(2).png>)\r
\r
3\\.	Select + Add Section button.\r
\r
![](</admin/3. Restaurant Table Layout/3.1/3.1(3).png>)\r
\r
4\\.	Select the Save button at the top right to save changes.\r
\r
![](</admin/3. Restaurant Table Layout/3.1/3.1(4).png>)\r
\r
5\\.	 You have successfully created a section.\r
\r
![](</admin/3. Restaurant Table Layout/3.1/3.1(5).png>)\r
`,Zn=`---\r
title: 3.2 Delete a Section\r
section: USER GUIDELINES\r
order: 3.2\r
isSubTopic: true\r
parentTopic: 3. Restaurant Table Layout\r
language: en\r
---\r
\r
1\\.	Select Edit button at top right.\r
\r
&#x20;![](</admin/3. Restaurant Table Layout/Picture3-6.jpg>)\r
\r
2\\.	Select the Edit button for the section you want to delete ( e.g. Section 5).\r
\r
![](</admin/3. Restaurant Table Layout/Picture3-7.jpg>)\r
\r
3\\.	Select the delete button to delete the section you want to delete.\r
\r
&#x20;![](</admin/3. Restaurant Table Layout/Picture3-8.jpg>)\r
\r
4\\.	Select the save button at the top right to save changes you made.\r
\r
&#x20;![](</admin/3. Restaurant Table Layout/Picture3-9.jpg>)\r
\r
5\\.	You have successfully deleted the section (e.g. Section 5  no longer exist).\r
\r
![](</admin/3. Restaurant Table Layout/Picture3-10.jpg>)\r
`,Qn=`---\r
title: 3.3 Update a Section\r
section: USER GUIDELINES\r
order: 3.3\r
isSubTopic: true\r
parentTopic: 3. Restaurant Table Layout\r
language: en\r
---\r
\r
1\\.	Select the section you want to update, then press the Edit button at the top right .\r
\r
(e.g. Section 5).\r
\r
&#x20;![](</admin/3. Restaurant Table Layout/Picture3-11.jpg>)\r
\r
2\\.	Select the Edit button (pencil icon) to make changes to the selected section.\r
\r
&#x20;![](</admin/3. Restaurant Table Layout/Picture3-12.jpg>)\r
\r
3\\.	Tap Name Field (Section 5), delete it, and type your new name.\r
\r
![](</admin/3. Restaurant Table Layout/Picture3-13.jpg>)\r
\r
4\\.	After typing your new name (e.g. OUTDOOR), select the Save button to see the changes.\r
\r
![](</admin/3. Restaurant Table Layout/Picture3-14.jpg>)\r
\r
![](</admin/3. Restaurant Table Layout/Picture3-15.jpg>)\r
\r
5\\.	Select Background Texture, then choose Mosaic. The background will show a mosaic effect.\r
\r
![](</admin/3. Restaurant Table Layout/Picture3-16.jpg>)![](</admin/3. Restaurant Table Layout/Picture3-17.jpg>)\r
\r
6\\.	Select Background Texture, then choose Wood. The background will show a wood effect.\r
\r
![](</admin/3. Restaurant Table Layout/Picture3-18.jpg>)![](</admin/3. Restaurant Table Layout/Picture3-19.jpg>)\r
\r
7\\.	Press Choose Color to change the background color.\r
\r
&#x20;![](</admin/3. Restaurant Table Layout/Picture3-20.jpg>)\r
\r
8\\.	Adjust sliders (Hue, Saturation, and Brightness), then press Select to apply the color.\r
\r
![](</admin/3. Restaurant Table Layout/Picture3-21.jpg>)\r
\r
9\\.	Select Save button to apply the background color.\r
\r
&#x20;![](</admin/3. Restaurant Table Layout/Picture3-22.jpg>)\r
\r
10\\.	Select the Save button to apply the changes. You have successfully changed your background colour.\r
\r
![](</admin/3. Restaurant Table Layout/Picture3-23.jpg>)\r
`,$n=`---\r
title: 3.4 Add a Table\r
section: USER GUIDELINES\r
order: 3.4\r
isSubTopic: true\r
parentTopic: 3. Restaurant Table Layout\r
language: en\r
---\r
\r
1\\.	 Select the section where you want to add table, then press the Edit button at the top right.\r
\r
![](</admin/3. Restaurant Table Layout/Picture3-24.jpg>)\r
\r
2\\.	Pick the table shape you like, then drag it into the section where you want the table.\r
\r
&#x20;![](</admin/3. Restaurant Table Layout/Picture3-25.jpg>)\r
\r
3\\.	Click on the table u just dragged, to edit the table.\r
\r
![](</admin/3. Restaurant Table Layout/Picture3-26.jpg>)\r
\r
4\\.	Type the table name, turn on Available if the table is ready, add the number of seats, and write notes in Remarks.\r
\r
![](</admin/3. Restaurant Table Layout/Picture3-27.jpg>)\r
\r
5\\.	Check the info you typed to make sure it’s correct, then press Save.\r
\r
![](</admin/3. Restaurant Table Layout/Picture3-28.jpg>)\r
\r
6\\.	You made a table. Now add more tables in any shape you like, until your section layout is complete.\r
\r
![](</admin/3. Restaurant Table Layout/Picture3-29.jpg>)\r
\r
7\\.	Tap the brush button below to add graphics or designs to your layout.\r
\r
![](</admin/3. Restaurant Table Layout/Picture3-30.jpg>)\r
\r
8\\.	Drag any decorative item from the bar below and drop it into your section to decorate the layout.\r
\r
&#x20;![](</admin/3. Restaurant Table Layout/Picture3-31.jpg>)\r
\r
9\\.	Drag a horizontal line (or any item) into your layout to divide tables into sections. Use these items as dividers or decorations to design your section the way you like.\r
\r
![](</admin/3. Restaurant Table Layout/Picture3-32.jpg>)\r
\r
10\\.	After you finish your design, press the Save button at the top right to keep the layout you made.\r
\r
![](</admin/3. Restaurant Table Layout/Picture3-33.jpg>)\r
\r
11\\.	You have successfully created your table layout.\r
\r
&#x20;![](</admin/3. Restaurant Table Layout/Picture3-34.jpg>)\r
`,er=`---\r
title: 3.5 Delete a Table\r
section: USER GUIDELINES\r
order: 3.5\r
isSubTopic: true\r
parentTopic: 3. Restaurant Table Layout\r
language: en\r
---\r
\r
1\\.	Press the **Edit** button at the top right.\r
\r
![](</admin/3. Restaurant Table Layout/chapter33.png>)\r
\r
2\\.	Select the table you want to delete.\r
\r
![](</admin/3. Restaurant Table Layout/44.png>)\r
\r
3\\.	Press the **Delete** button to permanently delete the table.\r
\r
![](</admin/3. Restaurant Table Layout/33.png>)\r
\r
4\\.	Press **Save** to save your changes.\r
\r
![](</admin/3. Restaurant Table Layout/22.png>)\r
\r
5\\.	You have successfully deleted a table.\r
\r
![](</admin/3. Restaurant Table Layout/11.png>)\r
`,tr=`---\r
title: 4. Sales Screen and Items\r
section: USER GUIDELINES\r
order: 4\r
language: en\r
---\r
\r
`,nr=`---\r
title: 4.1 Sales Screen Layout\r
section: USER GUIDELINES\r
order: 4.1\r
isSubTopic: true\r
parentTopic: 4. Sales Screen and Items\r
language: en\r
---\r
\r
The **Sales Screen** shows the categories and items that staff use to take customer orders.\r
\r
**If the categories and items are already AVAILABLE**, you can directly proceed to **4.1 Sales Screen Layout**. \r
\r
**If the categories and items are NOT AVAILABLE**, the Sales Screen may appear blank. In this case, you can directly proceed to **4.2 Items Creation**.\r
\r
1\\.	This is the Sales Screen Layout. It shows all categories (clipped buttons without pictures) and the items inside each category (flat buttons with pictures). Tap a category or item to see more.\r
\r
![](</admin/4. Sales Screen and Items/4.1/Picture1-4.1.png>)\r
\r
2\\.	When you press an item (example: Teh O), the screen shows the price (RM 1.50). You must choose one variant (Hot or Cold). Add ons show modifiers (Ais lebih, Kurang Ais, Kurang manis) — you can choose more than one. Below that is the comment section, where you can write notes.\r
\r
![](</admin/4. Sales Screen and Items/4.1/Picture2-4.1.png>)\r
\r
3\\.	After you select a variant, you may also choose modifiers (optional) and write a comment (optional). Then press the Save button at the top right.\r
\r
![](</admin/4. Sales Screen and Items/4.1/Picture3-4.1.png>)\r
\r
4\\.	You have saved an item order. Now go to categories. Tap any category (clipped, colorful button). For example, tap SUP.\r
\r
![](</admin/4. Sales Screen and Items/4.1/Picture4-4.1.png>)\r
\r
5\\.	Now you can see items inside the category, such as Sup Sayur, Sup Ayam, and others. Tap any item you want. For example, tap Sup Campur.\r
\r
![](</admin/4. Sales Screen and Items/4.1/Picture5-4.1.png>)\r
`,rr=`---\r
title: 4.2 Category Creation\r
section: USER GUIDELINES\r
order: 4.2\r
isSubTopic: true\r
parentTopic: 4. Sales Screen and Items\r
language: en\r
---\r
\r
1\\. Press the New Category button to create a category.\r
\r
![](</admin/4. Sales Screen and Items/4.2/Picture1-4.2.png>)\r
\r
2\\. Type the name of your category in the box, then choose the color you prefer.\r
\r
![](</admin/4. Sales Screen and Items/4.2/Picture2-4.2.png>)\r
\r
3\\. After checking what you entered, press the Create button to finish making the category.\r
\r
![](</admin/4. Sales Screen and Items/4.2/Picture3-4.2.png>)\r
\r
4\\. You have successfully created a category. Check the category list to verify that the new category has been created.\r
\r
![](</admin/4. Sales Screen and Items/4.2/Picture4-4.2.jpg>)\r
`,ir=`---\r
title: 4.3  Items Creation\r
section: USER GUIDELINES\r
order: 4.3\r
isSubTopic: true\r
parentTopic: 4. Sales Screen and Items\r
language: en\r
---\r
\r
Items can be added to the system in two ways: manually or by importing an Excel file.\r
\r
**A. Manual Item Creation.**\r
\r
1\\.	This section shows the item list. To create a new item, click the New Item button at the top right.\r
\r
![](</admin/4. Sales Screen and Items/4.3/Picture1-4.3.png>)\r
\r
2\\.	On this page, you can add an item by typing its name in the Name box.\r
\r
![](</admin/4. Sales Screen and Items/4.3/Picture2-4.3.png>)\r
\r
3\\.	After adding a name (e.g., TEH O), you can choose a category and description if you want, then select “Sold by Item” for fixed price or “Measurement” for price by weight/volume, enter the item’s price, or leave the price empty if the item has variants. \r
\r
![](</admin/4. Sales Screen and Items/4.3 baru/no3.png>)\r
\r
4\\.	After entering the item name, turn on "Enable Outlet-Specific Pricing" if you want to set different prices for the item at different outlets.\r
\r
Note: This feature is useful for businesses with multiple branches, allowing you to set different prices for the same item at each outlet without creating duplicate items.\r
\r
![](</admin/4. Sales Screen and Items/4.3 baru/no4baru.png>)\r
\r
**Skip this step and jump to step 7 if your item has no variants.**\r
\r
Two Ways to Add Variants (on Item Creation Page)\r
\r
* **Option A – Use Predefined Variants**\r
\r
👉 Select from the list of variants that were already created earlier (e.g., Size = Small, Medium, Large). Best when you want consistency across many items.\r
\r
*[Click Here to Create Predefined Variants](http://localhost:5173/docs?id=How-to-Add-Predefined-Variant)*\r
\r
* **Option B – Create New Variants for This Item**\r
\r
👉 Add variant options directly in the Variants section below (e.g., TEH O = Hot, Cold). Best when the variant is unique to this item.\r
\r
**Continue on this page and add variant options directly under the Variants section**\r
\r
&#x20;5\\. If the item is linked to a weighing scale, enter the SKU code in the SKU field. If the item has a barcode, enter the barcode number in the Barcode field.\r
\r
**Note:** Enter the SKU code in 5 digits to match the PLU code. For example, if the PLU code is 1, the SKU code should be 00001.\r
\r
![](</admin/4. Sales Screen and Items/4.3 baru/no5.png>)\r
\r
6\\. Turn on the "Enable Inventory Tracking" button if you want to track the stock quantity of this item.\r
\r
**Note:** If this option is not enabled, you will not be able to add or manage stock for this item.\r
\r
![](</admin/4. Sales Screen and Items/4.3 baru/no6.png>)\r
\r
7\\. The Low Stock Threshold field allows you to set a minimum stock quantity for an item. When the remaining stock reaches or falls below this quantity, a reminder will appear during the purchasing process to notify you to restock the item.\r
\r
**Example:** If you set the Low Stock Threshold to 3, a reminder will appear when the item's remaining stock reaches 3 units or fewer.\r
\r
**Note:** You can dismiss the reminder and proceed to payment if you wish to continue without restocking.\r
\r
![](</admin/4. Sales Screen and Items/4.3 baru/no7.png>)\r
\r
8\\.	Scroll down to the Variants section and turn on the button to enable variants (variants mean different versions of the same item, like Hot or Cold)\r
\r
**Skip this step and jump to step 7 if your item has no variants.**\r
\r
![](</admin/4. Sales Screen and Items/4.3 baru/no8.png>)\r
\r
9\\.	In the Outlet section, select the outlet where you want this item to be available and displayed.\r
\r
![](</admin/4. Sales Screen and Items/4.3 baru/no9.png>)\r
\r
10\\. After selecting the outlets, a new section will appear below. Enter the selling price for the item at each selected outlet. You can set different prices for different outlets according to your business needs.\r
\r
**Note:** You can set different prices for the same item at each outlet without creating duplicate items.\r
\r
![](</admin/4. Sales Screen and Items/4.3 baru/no10.png>)\r
\r
11\\. You can set an image or choose a shape and color that you prefer in the **Representation on POS** section. This is the visual appearance that will show up in the POS system for the item, so pick the style that best represents it.\r
\r
![](</admin/4. Sales Screen and Items/4.3 baru/no11.png>)\r
\r
12\\. To set an image for the item, enable the Use Image button in the Representation on POS section, then either select an image from your files or drag and drop it into the field. Remember, the supported file formats are PNG, JPEG, and JPG. This image will be the visual shown in the POS system for the item.\r
\r
**Skip this step if you don’t want to use images and prefer shapes instead.**\r
\r
![](</admin/4. Sales Screen and Items/4.3 baru/no12.png>)\r
\r
13\\. To set shapes and color, select a shape such as Square, Circle, or Triangle, then choose the color you prefer. After confirming your choice, click the Create button at the top to finalize and create the item.\r
\r
![](</admin/4. Sales Screen and Items/4.3 baru/no13.png>)\r
\r
14\\.	You have successfully created an item.\r
\r
![](</admin/4. Sales Screen and Items/4.3 baru/no14.png>)\\\r
Click the link below to create a modifier. *[Click Here to Create Predefined Modifiers](http://localhost:5173/docs?id=How-to-add-Predefined-Modifiers)*\r
`,ar=`---\r
title: "4.4 Item Placement in POS"\r
section: USER GUIDELINES\r
order: 4.4\r
isSubTopic: true\r
parentTopic: 4. Sales Screen and Items\r
language: en\r
---\r
\r
1\\.	Back in the MYSZTECH POS system, select the page where you want to add the item, then do a long press on the layout to begin placing it.\r
\r
![](</admin/4. Sales Screen and Items/4.4/Picture1-4.4.png>)\r
\r
2\\.	Press the ‘+’ button at the spot in the layout where you want the item to be added.\r
\r
![](</admin/4. Sales Screen and Items/4.4/Picture2-4.4.png>)\r
\r
3\\.	Search for the item or category by its name and select it to add it into the layout.\r
\r
![](</admin/4. Sales Screen and Items/4.4/Picture3-4.4.png>)\r
\r
4\\.	Click the button at the bottom to save the changes and confirm the item has been added to the POS layout.\r
\r
![](</admin/4. Sales Screen and Items/4.4/Picture4-4.4.png>)\r
\r
5\\.	You have successfully added the item or category to the POS layout.\r
\r
![](</admin/4. Sales Screen and Items/4.4/Picture5-4.4.png>)\r
`,or=`---\r
title: How to Add Predefined Variant\r
section: USER GUIDELINES\r
order: 4.5\r
isSubTopic: true\r
parentTopic: 4. Sales Screen and Items\r
language: en\r
---\r
\r
Predefined variants are options (like Size = Small, Medium, Large) that were created earlier in the Backoffice (Management Hub), and on the Item Creation Page you can select them directly instead of making new ones.\r
\r
*[Click Here to know how to access Management Hub](http://localhost:5173/docs?id=How-to-access-Management-Hub)*\r
\r
1\\.	Scroll down in the sidebar, find Variants under the Item section, click it, and go into the Variants page.\r
\r
![](</admin/4. Sales Screen and Items/How to add predefined Variant/Picture1-variant.png>)\r
\r
2\\.	Click the "+ New Variant" blue button to start creating a new variant.\r
\r
&#x20;![](</admin/4. Sales Screen and Items/How to add predefined Variant/Picture10-variant.png>)\r
\r
3\\.	Start by creating a general name for the variant you are setting up; this name is only for you to recognize and manage it, and it will not appear in the POS system.\r
\r
**Options and Variant Options**\r
\r
* **Options**\r
  * Each option has two parts:\r
    * **Option Name** → The label (e.g., Size, Cup Material).\r
    * **Option Values** → The choices under that label (e.g., Small, Large, Plastic, Glass).\r
\r
\r
  * The values you type here will automatically be assigned to the Variant Option’s Name, and the system will generate all possible combinations.\r
  * Example: Size (Small, Large) + Cup Material (Plastic, Glass) = 4 Variant Options (Small/Plastic, Small/Glass, Large/Plastic, Large/Glass).\r
* **Variant Options**\r
  * This section shows the combinations created from your Option Values.\r
  * Each combination can have its own price, cost, SKU, and barcode.\r
\r
\r
**Reminder for Users**\r
\r
If this feels too technical or confusing, you can **skip filling in Option Values** and instead **add Variant Options manually** in the Variant Options section. This way, you only create the exact variants you need without worrying about automatic combinations.\r
\r
Reminder: This method is useful if you **find the automatic combinations confusing** or if you only need a few specific variants. It gives **you direct control to create exactly the variants you want** without relying on the Options setup.\r
\r
4\\. Start by adding an Option Name (for example, Size) and then type the Option Value (for example, Small). Click the "Add to option Values" button if you want to add more values such as Medium or Large add the values.\r
\r
Note: Each value you add here will automatically appear in the Variant Options section, where you can set price, cost, SKU, and barcode for each combination.![](</admin/4. Sales Screen and Items/How to add predefined Variant/Picture4-variant.png>)\r
\r
5\\. For example, if you add values “Medium, Large” as Option Values, you will see 3 rows appear in the Variant Options section because you entered 3 option values (Small, Medium, Large).\r
\r
![](</admin/4. Sales Screen and Items/How to add predefined Variant/Picture5-variant.png>)\r
\r
6\\.  If you want to add more options, click the “Add to options” button and repeat the same step. If you don’t need more options, go to the Variant Options section and add a price for every variant listed.\r
\r
Note: The price field is required, so don’t leave it empty. If the price is zero, type RM0 to avoid errors.\r
\r
![](</admin/4. Sales Screen and Items/How to add predefined Variant/Picture6-variant.png>)\r
\r
7\\. Scroll down and you will find the Outlet section. Select the outlet where you want this variant to be available, then click the Create button at the top right.\r
\r
Note: Make sure you choose the correct outlet before creating, because the variant will only be active in the outlet you select.\r
\r
![](</admin/4. Sales Screen and Items/How to add predefined Variant/Picture7-variant.png>)\r
\r
8\\. You successfully created a variant. You can verify it by searching for the variant name in the system.\r
\r
Note: Always double-check the name you entered to confirm the variant is saved correctly and linked to the right outlet.\r
\r
![](</admin/4. Sales Screen and Items/How to add predefined Variant/Picture8-variant.png>)\r
`,sr=`---\r
title: How to access Management Hub\r
section: USER GUIDELINES\r
order: 1\r
isSubTopic: false\r
parentTopic: ''\r
language: en\r
---\r
\r
The **Management Hub**, also called the **Backoffice**, is the main control panel for Mysztech POS. It gives users one place to manage and control the system, including its settings, products, users, orders, and reports. By using the Management Hub, users can keep POS information organized, make updates, and review important business details. Always check changes before saving, and ask a system administrator for help when needed.\r
\r
To access the Management Hub, you can log in directly using the link below:\r
\r
[https://mysztech.com/login](https://mysztech.com/login)\r
\r
Alternatively, you can access the Management Hub directly from the POS system by following these steps:\r
\r
1\\.	Press the Menu button (three lines) at the top left.\r
\r
![](</admin/4. Sales Screen and Items/How to access Management Hub/Picture1-management.jpg>)\r
\r
2\\.	Select Management Hub to go to the Backoffice of Mysztech POS to proceed further.\r
\r
![](</admin/4. Sales Screen and Items/How to access Management Hub/Picture2-management.jpg>)![](</admin/4. Sales Screen and Items/How to access Management Hub/Picture3-management.jpg>)\r
\r
3\\.	Press Sign In button to proceed further.\r
\r
![](</admin/4. Sales Screen and Items/How to access Management Hub/Picture4-management.jpg>)\r
\r
4\\.	Enter your email address and password, then click Sign In to access the Backoffice.\r
\r
![](</admin/4. Sales Screen and Items/How to access Management Hub/Picture5-management.jpg>)\r
\r
5\\.	You have logged in to the Backoffice of Mysztech POS.\r
\r
![](</admin/4. Sales Screen and Items/How to access Management Hub/Picture6-management.jpg>)\r
`,cr=`---\r
title: How to add Predefined Modifiers\r
section: USER GUIDELINES\r
order: 4.6\r
isSubTopic: true\r
parentTopic: 4. Sales Screen and Items\r
language: en\r
---\r
\r
A **Predefined Modifier** is a ready made customization option (like “Low Sugar,” “More Ice,” “Less Ice”) that was created earlier in the Backoffice. Its purpose in the POS system is to save time and ensure consistency, because staff can quickly reuse the same modifier across multiple items.\r
\r
*[Click Here to know how to access Management Hub](http://localhost:5173/docs?id=How-to-access-Management-Hub)*\r
\r
1\\.	Scroll down in the sidebar, find Modifiers under the Item section, click it, and go into the Modifiers page.\r
\r
![](</admin/4. Sales Screen and Items/How to add Predefined Modifiers/Picture1-Modifiers.png>)\r
\r
2\\.	Click the "+ New Modifier" blue button to start creating a new modifier.\r
\r
![](</admin/4. Sales Screen and Items/How to add Predefined Modifiers/Picture2-Modifiers.png>)\r
\r
3\\.	Start by creating a general name for the modifier you are setting up; this name is only for you to recognize and manage it, and it will not appear in the POS system.\r
\r
![](</admin/4. Sales Screen and Items/How to add Predefined Modifiers/Picture3-Modifiers.png>)\r
\r
4\\.	Then, select as many categories as you want (you can choose more than one) where you want this modifier to appear.\r
\r
Turn on the “Apply to all items under the selected categories” button so the modifier will automatically display for every item inside those categories.\r
\r
**Note: This ensures consistency and saves time, since you don’t need to manually attach the modifier to each item one by one.**\r
\r
![](</admin/4. Sales Screen and Items/How to add Predefined Modifiers/Picture4-Modifiers.png>)\r
\r
5\\.	Type in the modifier’s Name, Price (required), and Cost (optional).\r
\r
If you have more than one modifier, click the “Add modifier option” button below — this will insert an empty row for you to add additional modifiers.\r
\r
**Note: Always enter a value in the Price field (even RM0 if free) to prevent system errors.**\r
\r
![](</admin/4. Sales Screen and Items/How to add Predefined Modifiers/Picture5-Modifiers.png>)\r
\r
6\\.	Scroll down to the Outlets section and select the outlets where you want this modifier to appear.\r
\r
Click the “Select all outlets” button to automatically select every outlet at once, making the process faster and effortless.\r
\r
![](</admin/4. Sales Screen and Items/How to add Predefined Modifiers/Picture6-Modifiers.png>)\r
\r
7\\.	Reconfirm everything you entered — the modifier name, price, cost, and selected outlets.\r
\r
Once all details are correct, press the Create button to save the modifier.\r
\r
![](</admin/4. Sales Screen and Items/How to add Predefined Modifiers/Picture7-Modifiers.png>)\r
\r
8\\.	You have successfully created a modifier. You can verify it by searching for the modifier’s name in the **Modifiers** section.\r
\r
![](</admin/4. Sales Screen and Items/How to add Predefined Modifiers/Picture8-Modifiers.png>)\r
\r
9\\.	After you have created the modifier, go to the Modifiers section, select Add Modifier, then search for the modifier you just created (e.g. Beverages Add Ons) and choose it to attach it to the item.\r
\r
![](</admin/4. Sales Screen and Items/How to add Predefined Modifiers/Picture9-Modifiers.png>)\r
\r
10\\. In the Required Option section, you can set how many modifiers must be selected for the item. This step is optional, so you can leave it blank if not needed. If you don’t set anything, just double check the modifier name you entered, then scroll down to the Representation on POS section to continue.\r
\r
![](</admin/4. Sales Screen and Items/How to add Predefined Modifiers/Picture10-Modifiers.png>)\r
\r
11\\. You can set an image or choose a shape and color that you prefer in the Representation on POS section. This is the visual appearance that will show up in the POS system for the item, so pick the style that best represents it.\r
\r
![](</admin/4. Sales Screen and Items/How to add Predefined Modifiers/Picture11-Modifiers.png>)\r
\r
12\\. To set an image for the item, enable the Use Image button in the Representation on POS section, then either select an image from your files or drag and drop it into the field. Remember, the supported file formats are PNG, JPEG, and JPG. This image will be the visual shown in the POS system for the item.\r
\r
**Skip this step if you don’t want to use images and prefer shapes instead.**\r
\r
![](</admin/4. Sales Screen and Items/How to add Predefined Modifiers/Picture12-Modifiers.png>)\r
\r
13\\. To set shapes and color, select a shape such as Square, Circle, or Triangle, then choose the color you prefer. After confirming your choice, click the Create button at the top to finalize and create the item.\r
\r
![](</admin/4. Sales Screen and Items/How to add Predefined Modifiers/Picture13-Modifiers.png>)\r
\r
14\\. You have successfully created an item.\r
\r
![](</admin/4. Sales Screen and Items/How to add Predefined Modifiers/Picture14-Modifiers.png>)\r
`,lr=`---\r
title: 5. Manage Orders\r
section: USER GUIDELINES\r
order: 5\r
language: en\r
---\r
\r
`,ur=`---\r
title: 5.3 Order Methods\r
section: USER GUIDELINES\r
order: 5.3\r
isSubTopic: true\r
parentTopic: 5. Manage Orders\r
language: en\r
---\r
\r
\\>If the Order Method is set to Order by **Table**:\r
\r
**A.	Assign an Existing Order to a Table**\r
\r
**Skip this step if you want to save a new order for the table.**\r
\r
1\\.	If the order method is set by Table, click the Table Layout button at the bottom to open the table selection screen. This allows you to assign the order to a specific table before proceeding.\r
\r
![](</admin/5. ManageOrders/5.3/123.png>)\r
\r
2\\.	Select the table where you want to assign the order.\r
\r
![](</admin/5. ManageOrders/5.3/1.png>)\r
\r
3\\.	Enter a name and add a comment if needed.  tap **Assign Order** and select the order you want to assign to assign an existing order to this table.\r
\r
![](</admin/5. ManageOrders/5.3/2.png>)\r
\r
4\\.	Search for the order you want to assign to the table, then tap **Assign** to assign the order to the table.\r
\r
![](</admin/5. ManageOrders/5.3/3.png>)\r
\r
5\\.	The order has been assigned to the table. Tap the table to view the order.\r
\r
![](</admin/5. ManageOrders/5.3/4.png>)\r
\r
**B.	Create a New Order for a Table**\r
\r
1\\.	Select the table (e.g., **T4**).\r
\r
![](</admin/5. ManageOrders/5.3/5.png>)\r
\r
2\\.	You can add a comment if needed, then tap **Save Order** to continue taking the customer's order.\r
\r
![](</admin/5. ManageOrders/5.3/6.png>)\r
\r
3\\.	You will be returned to the **Order Layout** page, where all items and categories are displayed. You can take the customer's order simply by pressing an item and pressing **Save** if prompted.\r
\r
![](</admin/5. ManageOrders/5.3/7.png>)\r
\r
**Reminder:** When adding an item with a **Variant** and **Modifier**, you must select **one Variant** (e.g., **HOT** or **COLD**).\r
\r
**Modifier** is optional, and you can select more than one Modifier if needed. Once done, tap **Save** to continue.\r
\r
![](</admin/5. ManageOrders/5.3/8.png>)\r
\r
4\\.	After taking the order, tap the **Save** button to save the order.\r
\r
**Note:** When you tap **Save**, the order will be submitted and sent to the printer assigned to each item's department.\r
\r
For example:\r
\r
•	**Nasi Goreng → Kitchen Printer**\r
\r
**•	Teh → Beverages Printer**\r
\r
![](</admin/5. ManageOrders/5.3/9.png>)\r
\r
5\\.	You have successfully created an order for the table. To verify the order, go to the **Table Layout** and tap the table.\r
\r
![](</admin/5. ManageOrders/5.3/10.png>)\r
\r
\\>	If the Order Method is set to Custom Order :\r
\r
1\\.	Take the order as usual, then tap the **Save** button at the bottom of the screen to save the order.\r
\r
![](</admin/5. ManageOrders/5.3/11.png>)\r
\r
2\\.	Tap the **Pencil** button to create a **Custom Order**\r
\r
![](</admin/5. ManageOrders/5.3/7z.png>)\r
\r
3\\.	You can add a **Comment** if needed (optional), then tap **Save** to save the order.\r
\r
**Note:** When you tap **Save**, the order will be submitted and sent to the printer assigned to each item's department.\r
\r
For example:\r
\r
**•	Nasi Goreng → Kitchen Printer**\r
\r
**•	Teh → Beverages Printer**\r
\r
![](</admin/5. ManageOrders/5.3/12.png>)\r
\r
4\\.	 This is the order you have just created.\r
\r
![](</admin/5. ManageOrders/5.3/13.png>)\r
\r
\\>	If the Order Method is set to Order Number :\r
\r
**Open Order** must be added and configured in the **Management Hub** before it can be used on the POS device.\r
\r
Don't know how to access Management Hub? *[Click here to learn how to access Management Hub.](http://localhost:5173/docs?id=How-to-access-Management-Hub)*\r
\r
Open Order Setup – **Management Hub**\r
\r
1\\.	Go to Outlets and select Open Orders.\r
\r
![](</admin/5. ManageOrders/5.3/14.png>)\r
\r
2\\.	Select the Outlet where you want to manage the Open Orders (e.g. GD Café). Make sure the Active button is toggled on to enable Open Orders.\r
\r
![](</admin/5. ManageOrders/5.3/15.png>)\r
\r
3\\.	You will see the list of existing Open Orders if any have already been created.  **Press New Open Order** to create a new Open Order.\r
\r
![](</admin/5. ManageOrders/5.3/8z.png>)\r
\r
4\\.	Enter a **name** for the Open Order (e.g., 101). In the Remark section, you can enter the NFC Card Number if you are using NFC Order Cards, or the Barcode of the Order Card if you are using Barcode Order Cards.\r
\r
![](</admin/5. ManageOrders/5.3/16.png>)\r
\r
5\\.	After entering the required information, press Create to save the Open Order.\r
\r
![](</admin/5. ManageOrders/5.3/9z.png>)\r
\r
6\\.	To edit an existing Open Order, select the Open Order and press Edit. Make the required changes and press Save Changes.\r
\r
![](</admin/5. ManageOrders/5.3/17.png>)\r
\r
7\\.	To delete an Open Order, select the Open Order and press Delete button.\r
\r
![](</admin/5. ManageOrders/5.3/18.png>)\r
\r
8\\.	You can use the Search bar to quickly find a specific Open Order.\r
\r
![](</admin/5. ManageOrders/5.3/19.png>)\r
\r
9\\.	To change the order of the Open Orders, press the **Reordering button** and drag and drop the Open Order numbers into your preferred order (e.g., 101, 102, 103).\r
\r
![](</admin/5. ManageOrders/5.3/10z.png>)\r
\r
Open Order – **POS Device**\r
\r
1\\.	Take the order as usual, then tap the Save button at the bottom of the screen.\r
\r
The system will display the available Order Numbers for you to choose from.\r
\r
![](</admin/5. ManageOrders/5.3/11z.png>)\r
\r
2\\.	Select an available **Order Number** (e.g., **104**) to save the order.\r
\r
![](</admin/5. ManageOrders/5.3/20.png>)\r
\r
**Note:** When you tap **Save**, the order will be submitted and sent to the printer assigned to each item's department.\r
\r
For example:\r
\r
**Nasi Goreng → Kitchen Printer**\r
\r
**Teh → Beverages Printer**\r
\r
3\\.	The order has been saved to **Order No. 104**. To verify the order, tap **Open Order**. You will see Order No. 104 with the assigned items.\r
\r
![](</admin/5. ManageOrders/5.3/21.png>)\r
`,dr=`---\r
title: 5.1 Order Options\r
section: USER GUIDELINES\r
order: 5.1\r
isSubTopic: true\r
parentTopic: 5. Manage Orders\r
language: en\r
---\r
\r
Before selecting an **Order Option** on the POS system, you must first create the available order options in the **Management Hub.**\r
\r
**Don't know how to access Management Hub?** *[Click here to learn how to access Management Hub.](http://localhost:5173/docs?id=How-to-access-Management-Hub)*\r
\r
**Create Order Options in Management Hub**\r
\r
1\\.	Go to the **Outlet** section in the Management Hub and go to  **Order Options.**\r
\r
![](</admin/5. ManageOrders/5.1/5.1(1).png>)\r
\r
2\\.	Select the **Outlet** where you want to create the order option (e.g. GD Cafe).\r
\r
![](</admin/5. ManageOrders/5.1/5.1(2).png>)\r
\r
3\\.	You will see the existing order options for the selected outlet, if any have already been created.\r
\r
![](</admin/5. ManageOrders/5.1/5.1(3).png>)\r
\r
4\\.	Press **New Order Option** to create a new order option.\r
\r
![](</admin/5. ManageOrders/5.1/1.png>)\r
\r
5\\.	Enter the name of the order option (e.g., **Dine In** or **Take Away**) and press **Create**.\r
\r
![](</admin/5. ManageOrders/5.1/5.1(4).png>)\r
\r
6\\.	The new order option has now been created successfully and will be available for selection on the POS system.\r
\r
![](</admin/5. ManageOrders/5.1/5.1(5).png>)\r
\r
Before creating an order, select the Order Type and Order Method. The manual lists these service options:\r
\r
•	Dine-In — customer eats at the outlet.\r
\r
•	Takeaway — customer takes the order away.\r
\r
•	Pickup — customer collects the order.\r
\r
![](</admin/5. ManageOrders/5.1/5.1(6).png>)\r
`,fr=`---\r
title: 5.2 Customer Orders\r
section: USER GUIDELINES\r
order: 5.2\r
isSubTopic: true\r
parentTopic: 5. Manage Orders\r
language: en\r
---\r
\r
Customers can be managed from both the **POS device** and the **Management Hub.**\r
\r
\\>Add Customer from **Pos Device**:\r
\r
1\\.	Click the **Customer icon** and then select the customer from the list. This ensures the order is linked to the correct customer profile in the POS system.\r
\r
![](</admin/5. ManageOrders/5.2/1.png>)\r
\r
2\\.	If the customer is not listed, click the **Add** button, then type in their **name** and **phone number**. Once done, click the Save button at the top right to store the new customer in the system.\r
\r
![](</admin/5. ManageOrders/5.2/2.png>)\r
\r
3\\.	You have added the customer. You can now verify the customer’s name in the list and proceed to select them to continue with the order.\r
\r
![](</admin/5. ManageOrders/5.2/3b.png>)\r
\r
4\\.	Select the **Add to Order** button to continue with choosing a customer. If you need to edit the customer’s information, press the **Edit** button (pencil like icon) to make changes.\r
\r
![](</admin/5. ManageOrders/5.2/6.png>)\r
\r
5\\.	You have selected a customer to take orders. You can now continue taking orders as usual within the POS system.\r
\r
![](</admin/5. ManageOrders/5.2/5b.png>)\r
\r
6\\.	If you want to remove the customer, click the **Customer icon** and then select the **Remove From Order** button. This will detach the customer from the current order so you can proceed without linking it to their profile.\r
\r
![](</admin/5. ManageOrders/5.2/6.png>)\r
\r
\\>	Add Customer from **Management Hub:**\r
\r
The Management Hub provides additional options for managing customer records, including **creating, viewing, editing, exporting, and deleting customers.**\r
\r
**Don't know how to access Management Hub?** *[Click here to learn how to access Management Hub.](http://localhost:5173/docs?id=How-to-access-Management-Hub)*\r
\r
1\\.	Go to the **Customer** section in the Management Hub. You will see the list of customers created in the system.\r
\r
![](</admin/5. ManageOrders/5.2/7.png>)\r
\r
2\\.	Press **New Customer** to create a new customer and enter the required customer information.\r
\r
![](</admin/5. ManageOrders/5.2/2z.png>)\r
\r
3\\.	Enter the customer's **Name** (required). The remaining fields are optional. Press **Create** to save changes.\r
\r
**Note:** You can note their **Phone Number** for better customer tracking.\r
\r
![](</admin/5. ManageOrders/5.2/8.png>)\r
\r
4\\.	You have successfully created a **Customer.** Select a customer from the list to **view** their customer details.\r
\r
![](</admin/5. ManageOrders/5.2/3z.png>)\r
\r
5\\.	To export customer records, select the required customer records or columns and press **Export**. Choose the available file format to download the customer data.\r
\r
![](</admin/5. ManageOrders/5.2/4z.png>)\r
\r
6\\.	To update the customer's information, select the customer and press **Edit**. Make the necessary changes and save them.\r
\r
![](</admin/5. ManageOrders/5.2/5.png>)\r
\r
7\\.	To remove a customer from the system, select the customer and press Delete. Confirm the deletion when prompted.\r
\r
![](</admin/5. ManageOrders/5.2/9.png>)\r
\r
8\\.	The customer (e.g., Adam) has been successfully deleted. You will no longer see Adam in the customer list.\r
\r
![](</admin/5. ManageOrders/5.2/10.png>)\r
`,pr=`---\r
title: 5.4 Update Order\r
section: USER GUIDELINES\r
order: 5.4\r
isSubTopic: true\r
parentTopic: 5. Manage Orders\r
language: en\r
---\r
\r
**Update Order** allows you to make changes to an order that has already been created. You can add items, remove items, or change the quantity.\r
\r
There are two ways to update an order:\r
\r
**A. Update Order by Table**\r
\r
To edit an order using the table:\r
\r
1\\.	Tap the table where you saved the order, then tap **Edit Order** to update the order.\r
\r
![](</admin/5. ManageOrders/5.4/5.png>)\r
\r
2\\.	You will be returned to the **Order Layout** page. You can now make any changes to the order. Once you are done, tap **Save** to save the changes.\r
\r
![](</admin/5. ManageOrders/5.4/4.png>)\r
\r
**Example:** If the customer changes Teh Hot Kurang Manis to Teh Cold and wants it served in a bowl (Mangkuk), tap Teh Hot, select Cold, enter "Mangkuk" in the Comment section, then tap Save.\r
\r
![](</admin/5. ManageOrders/5.4/3.png>)\r
\r
3\\.	You will see that the Teh item has been updated with the changes you made. Tap the **Save** button at the bottom to save the changes to the table.\r
\r
**Note:** When you tap **Save**, the order will be submitted and sent to the printer assigned to each item's department.\r
\r
For example:\r
\r
•	**Nasi Goreng → Kitchen Printer**\r
\r
**•	Teh → Beverages Printer**\r
\r
![](</admin/5. ManageOrders/5.4/4.png>)\r
\r
4\\.	You have successfully updated the order by table. You can see the changes on the **Table Layout** page.\r
\r
![](</admin/5. ManageOrders/5.4/5.png>)\r
\r
**B. Update Order through Open Order**\r
\r
To edit an order using Open Order:\r
\r
1\\.	Tap **Open Order.**\r
\r
![](</admin/5. ManageOrders/5.4/6.png>)\r
\r
2\\.	Select the order you want to edit. If you are not sure which order to select, check the **Comment** you added when creating the order (e.g., "**Make it Faster**").\r
\r
![](</admin/5. ManageOrders/5.4/7.png>)\r
\r
3\\.	Make the changes to the order.\r
\r
![](</admin/5. ManageOrders/5.4/8.png>)\r
\r
**Example:** If the customer changes **Teh Hot** to **Teh Cold** and wants it served in a bowl (Mangkuk), tap **Teh Hot**, select **Cold**, enter **"Mangkuk"** in the **Comment** section, then tap Save.\r
\r
![](</admin/5. ManageOrders/5.4/9.png>)\r
\r
4\\.	You will see that the Teh item has been updated with the changes you made. Tap the **Save** button at the bottom to save the changes.\r
\r
**Note:** When you tap **Save**, the order will be submitted and sent to the printer assigned to each item's department.\r
\r
For example:\r
\r
**•	Nasi Goreng → Kitchen Printer**\r
\r
**•	Teh → Beverages Printer**\r
\r
![](</admin/5. ManageOrders/5.4/10.png>)\r
\r
5\\.	You have successfully updated the order through **Open Order**.\r
\r
![](</admin/5. ManageOrders/5.4/11.png>)\r
`,mr=`---\r
title: 5.5 Submit Order\r
section: USER GUIDELINES\r
order: 5.5\r
isSubTopic: true\r
parentTopic: 5. Manage Orders\r
language: en\r
---\r
\r
An order is submitted when you tap Save after taking or editing an order.\r
\r
When the order is saved, the system will send each item to the printer assigned to its department.\r
\r
**Order Printing Flow**\r
\r
The system checks the items in the order and sends them to the correct department printer.\r
\r
For example:\r
\r
**Order:**\r
\r
•	Nasi Goreng\r
\r
•	Teh Cold\r
\r
**Printing:**\r
\r
•	Nasi Goreng → **Kitchen Printer**\r
\r
•	Teh Cold → **Beverages Printer**\r
\r
This allows each department to receive only the items they need to prepare.\r
\r
**Example of the Order Flow**\r
\r
1\\.	Take the customer's order.\r
\r
![](</admin/5. ManageOrders/5.4/1.png>)\r
\r
2\\.	Tap **Save** button.\r
\r
![](</admin/5. ManageOrders/5.5/1a.png>)\r
\r
3\\.	You can choose to create an order using an **Order Number** or a **Custom Order**.\r
\r
**Order Number:** Tap any available order number to save the order under that order number (e.g. Order Number 101).\r
\r
![](</admin/5. ManageOrders/5.5/2.png>)\r
\r
**Custom Order:** Press the **Edit** button (pencil icon) to create a custom order and press Save.\r
\r
![](</admin/5. ManageOrders/5.5/2a.png>)\r
\r
**Note:** Each item is sent to its assigned department printer. The **Kitchen** receives the food items.The **Beverages** department receives the drink items. The order will only be printed to a department if the item has been assigned to a printer for that department.\r
`,hr=`---\r
title: 5.6 Move Order\r
section: USER GUIDELINES\r
order: 5.6\r
isSubTopic: true\r
parentTopic: 5. Manage Orders\r
language: en\r
---\r
\r
The **Move Order** function allows you to move an order from one receipt to another receipt.\r
\r
This is useful when customers want to combine their orders and make **one payment** instead of paying separately.\r
\r
**Example**\r
\r
When two separate orders need to be paid together, you can move order from a receipt  to the other receipt.\r
\r
For example, **Customer A** wants to pay for **Customer B’s** order as well. Instead of making two separate payments, move the other order of **Customer B** to the **Customer A's** receipt. Both orders will then be combined into one bill.\r
\r
**Steps to Move an Order**\r
\r
1\\.	Go to **Open Order**.\r
\r
![](</admin/5. ManageOrders/5.6/3a.png>)\r
\r
2\\.	Select the square checkbox to the left of the **Order Number** you want to move. Do not click the order number itself, as that will only open the order.\r
\r
**Example:** To move **Order No. 102** to **Order No. 101**, select the checkbox to the left of **Order No. 102** first.\r
\r
![](</admin/5. ManageOrders/5.6/1.png>)\r
\r
3\\.	Tap **Move** at the top (right-arrow button) to move the selected order.\r
\r
![](</admin/5. ManageOrders/5.6/4a.png>)\r
\r
4\\.	Select the **Order Number** you want to move the selected order to (e.g., **Order No. 101**).\r
\r
![](</admin/5. ManageOrders/5.6/2.png>)\r
\r
5\\.	Tap **Confirm** to move **Order No. 102** to **Order No. 10**1 and proceed.\r
\r
![](</admin/5. ManageOrders/5.6/3.png>)\r
\r
6\\.	You have successfully moved the order to another order. To verify, go to **Open Order** and tap the order number you moved it to (e.g., **Order No. 101**).\r
\r
![](</admin/5. ManageOrders/5.6/4.png>)\r
`,gr=`---\r
title: 5.7 Delete Order\r
section: USER GUIDELINES\r
order: 5.7\r
isSubTopic: true\r
parentTopic: 5. Manage Orders\r
language: en\r
---\r
\r
There are several ways to remove or close an order depending on what you want to do.\r
\r
**A. Delete an Order**\r
\r
Use this when you want to completely delete an order that has already been taken.\r
\r
1\\.	Go to **Open Order.**\r
\r
![](</admin/5. ManageOrders/5.7/5a.png>)\r
\r
2\\.	Select the **square box** next to the order you want to delete.\r
\r
![](</admin/5. ManageOrders/5.7/1.png>)\r
\r
3\\.	Tap the **Delete** icon at the top.\r
\r
![](</admin/5. ManageOrders/5.7/6a.png>)\r
\r
4\\.	After that, tap **Confirm** to remove the order from the active order list.\r
\r
Note : When deleting an order, tick **Print Void Receipt** if you want the kitchen printer to print a cancellation notice. This lets the kitchen staff know that the order has been cancelled and should not be prepared.\r
\r
![](</admin/5. ManageOrders/5.7/2.png>)\r
\r
5\\.	The order has been removed from the **Active Order List**. Notice that **Order No. 101** is no longer displayed.\r
\r
![](</admin/5. ManageOrders/5.7/3.png>)\r
\r
**Another way to delete an order:**\r
\r
1\\.	Go to **Open Order** and select the order you want to delete (e.g. Order No.101).\r
\r
![](</admin/5. ManageOrders/5.7/4.png>)\r
\r
2\\.	Tap the **3-dot menu** at the top.\r
\r
![](</admin/5. ManageOrders/5.7/7a.png>)\r
\r
3\\.	Select **Void Order**.\r
\r
![](</admin/5. ManageOrders/5.7/5.png>)\r
\r
4\\.	Tap **Void** to confirm.\r
\r
![](</admin/5. ManageOrders/5.7/6.png>)\r
\r
**B. Remove an Item from an Order**\r
\r
Use this when you only want to remove one item from an order.\r
\r
**Steps:**\r
\r
1\\.	Swipe the item to the **right**.\r
\r
![](</admin/5. ManageOrders/5.7/7.png>)\r
\r
2\\.	The item will be removed from the order.\r
\r
![](</admin/5. ManageOrders/5.7/8.png>)\r
\r
3\\.	Tap **Save** to save the changes.\r
\r
![](</admin/5. ManageOrders/5.7/8a.png>)\r
\r
**C. Close an Order Without Making Changes**\r
\r
Use this when you accidentally open an order from **Open Order** and do not make any changes.\r
\r
**Note: Close Order** does not delete the order. It only closes the order and removes it from the current order display.\r
\r
**Steps:**\r
\r
1\\.	Tap the **3-dot menu** at the top.\r
\r
![](</admin/5. ManageOrders/5.7/9a.png>)\r
\r
2\\.	Tap **Close Order.**\r
\r
![](</admin/5. ManageOrders/5.7/9.png>)\r
\r
3\\.	Tap **Close** to close the order.\r
\r
![](</admin/5. ManageOrders/5.7/10.png>)\r
\r
4\\.	You have successfully closed the order. You can verify that the order is still available in the **Open Order List.**\r
\r
![](</admin/5. ManageOrders/5.7/11.png>)\r
\r
**D. Remove an Order from a Table**\r
\r
Use this when an order was assigned to the **wrong table.**\r
\r
Note: Removing an order from a table does **not** delete the order. It only removes the table assignment. The order can still be found in **Open Order.**\r
\r
**Steps:**\r
\r
1\\.	Go to **Table Layout.**\r
\r
![](</admin/5. ManageOrders/5.7/10a.png>)\r
\r
2\\.	Select the table with the order (e.g. T3).\r
\r
![](</admin/5. ManageOrders/5.7/12.png>)\r
\r
3\\.	Tap **Unlink button** at the top, beside **Close button.**\r
\r
![](</admin/5. ManageOrders/5.7/11a.png>)\r
\r
4\\.	The order has been removed from the table (e.g., T3).\r
\r
![](</admin/5. ManageOrders/5.7/13.png>)\r
\r
You can verify the order by going to **Open Order.**\r
`,_r=`---\r
title: 5.8 Charge Order\r
section: USER GUIDELINES\r
order: 5.8\r
isSubTopic: true\r
parentTopic: 5. Manage Orders\r
language: en\r
---\r
\r
The **Charge Order** function is used to proceed to the **Payment** page and complete payment for an order.\r
\r
There are **3 ways** to proceed to the Payment page, depending on the **order type.**\r
\r
**A. Charge a New Order**\r
\r
Use this method when the order has just been taken and has **not been saved yet.**\r
\r
This is useful for shops that use a **"Pay First, Eat Later"** system.\r
\r
**Steps:**\r
\r
1\\.	Take the customer's order.\r
\r
![](</admin/5. ManageOrders/5.8/1.png>)\r
\r
2\\.	Tap **Charge** at the bottom.\r
\r
![](</admin/5. ManageOrders/5.8/12a.png>)\r
\r
3\\.	You will be taken to the **Payment** page.\r
\r
![](</admin/5. ManageOrders/5.8/2.png>)\r
\r
**B. Charge an Order from Open Order**\r
\r
Use this method when the order has already been saved.\r
\r
**Steps:**\r
\r
1\\.	Go to **Open Order.**\r
\r
![](</admin/5. ManageOrders/5.8/3.png>)\r
\r
2\\.	Select the order you want to charge.\r
\r
![](</admin/5. ManageOrders/5.8/4.png>)\r
\r
3\\.	Open the order and Tap **Charge.**\r
\r
![](</admin/5. ManageOrders/5.8/13a.png>)\r
\r
4\\.	You will be taken to the **Payment** page.\r
\r
![](</admin/5. ManageOrders/5.8/5.png>)\r
\r
**C. Charge an Order by Table**\r
\r
Use this method when the shop takes orders by table and collects payment by table.\r
\r
**Steps:**\r
\r
1\\.	Go to **Table Layout.**\r
\r
![](</admin/5. ManageOrders/5.8/14a.png>)\r
\r
2\\.	Select the table that needs to make payment (e.g. T3).\r
\r
![](</admin/5. ManageOrders/5.8/6.png>)\r
\r
3\\.	Tap **Charge.**\r
\r
![](</admin/5. ManageOrders/5.8/7.png>)\r
\r
4\\.	You will be taken to the **Payment** page.\r
\r
![](</admin/5. ManageOrders/5.8/8.png>)\r
\r
**Payment Page**\r
\r
After tapping **Charge,** you will be taken to the **Payment** page. You can use the following options to complete the payment.\r
\r
**1. Enter Received Cash**\r
\r
•	For **cash payment,** you can enter the amount received from the customer manually. You can also use the preset amount buttons on the side, such as **RM5, RM10,** or **RM50**, to enter the amount quickly.\r
\r
![](</admin/5. ManageOrders/5.8/15a.png>)\r
\r
•	If the customer gives the exact amount, tap Exact Amount.\r
\r
![](</admin/5. ManageOrders/5.8/16a.png>)\r
\r
**2. Select Payment Type**\r
\r
Select the payment method used by the customer.\r
\r
Available payment types may include: CASH, QR, TOUCH N GO, ONLINE BANKING\r
\r
![](</admin/5. ManageOrders/5.8/9.png>)\r
\r
**3. Adjustment**\r
\r
•	The **Adjustment** option allows you to give a discount to the order.\r
\r
![](</admin/5. ManageOrders/5.8/17a.png>)\r
\r
You can apply a discount by **Value** or **Percentage.**\r
\r
**Adjustment by Value**\r
\r
1\\.	Select **Value.**\r
\r
**Note:** The adjustment is set to **Value** by default. The toggle is **OFF** for Value and **ON** for Percentage.\r
\r
![](</admin/5. ManageOrders/5.8/18a.png>)\r
\r
2\\.	Enter the adjustment amount (e.g., **RM2**) press Save.\r
\r
![](</admin/5. ManageOrders/5.8/10.png>)\r
\r
3\\.	The adjustment will be deducted from the total amount.\r
\r
![](</admin/5. ManageOrders/5.8/19a.png>)\r
\r
**Adjustment by Percentage**\r
\r
1\\.	Select **Percentage.**\r
\r
![](</admin/5. ManageOrders/5.8/20a.png>)\r
\r
2\\.	Enter the adjustment percentage (e.g. 10%) and press Save.\r
\r
![](</admin/5. ManageOrders/5.8/11.png>)\r
\r
3\\.	The system will calculate the adjustment based on the receipt total and deduct it from the amount due.\r
\r
![](</admin/5. ManageOrders/5.8/21a.png>)\r
\r
**4.	Discount Creation**\r
\r
Discount settings must be created and configured in the Backoffice. Once the discount has been set up in the Backoffice, it will automatically be displayed in the POS system when applicable. Discount creation and configuration cannot be done directly from the POS system.\r
\r
Don't know how to access Management Hub? *[Click here to learn how to access Management Hub.](http://localhost:5173/docs?id=How-to-access-Management-Hub)*\r
\r
1\\.	Scroll down to the **Discount** section.\r
\r
![](</admin/5. ManageOrders/5.8/12.png>)\r
\r
2\\.	Press the **New Discount** button to create a new discount.\r
\r
![](</admin/5. ManageOrders/5.8/13.png>)\r
\r
3\\.	Enter a name for the discount (e.g., **Opening Promotion**).\r
\r
![](</admin/5. ManageOrders/5.8/14.png>)\r
\r
4\\.	Under **Apply**, select how the discount should be applied (e.g. **Apply discount to selected categories**).\r
\r
•	**Apply discount to the whole order**\r
\r
**•	Apply discount to selected items**\r
\r
**•	Apply discount to selected categories**\r
\r
**•	Don't apply**\r
\r
![](</admin/5. ManageOrders/5.8/15.png>)\r
\r
5\\.	Under **Type**, select either **Percentage** or **Amount**. Enter the discount value based on the selected type:\r
\r
•	**Percentage:** Enter the discount percentage.\r
\r
•	**Amount:** Enter the discount amount.\r
\r
![](</admin/5. ManageOrders/5.8/16.png>)\r
\r
6\\.	Under **Valid From – Valid To**, select the **Start Date** and **End Date** for the discount.\r
\r
![](</admin/5. ManageOrders/5.8/17.png>)\r
\r
7\\.	Select the **Outlet(s)** where the discount will be available.\r
\r
![](</admin/5. ManageOrders/5.8/18.png>)\r
\r
8\\.	Scroll down to view the available selection list:\r
\r
•	If you selected **Apply discount to selected items**, the **Items List** will be displayed.\r
\r
•	If you selected **Apply discount to selected categories**, the **Category List** will be displayed.\r
\r
•	If you selected **Apply discount to the whole order** or **Don't apply**, no item or category list will be displayed.\r
\r
![](</admin/5. ManageOrders/5.8/19.png>)\r
\r
9\\.	Select the items or categories you want the discount to apply to (e.g., **Teh O or Beverages**).\r
\r
![](</admin/5. ManageOrders/5.8/20.png>)\r
\r
10\\.	After confirming all the discount settings, press **Create**.\r
\r
![](</admin/5. ManageOrders/5.8/22a.png>)\r
\r
11\\.	The newly created discount will now be displayed in the **Discount** section.\r
\r
![](</admin/5. ManageOrders/5.8/21.png>)\r
\r
12\\.	Return to the **POS system** and charge an order. The discount will automatically appear when the order meets the discount conditions.\r
\r
![](</admin/5. ManageOrders/5.8/23a.png>)\r
\r
**5.	Tax Creation**\r
\r
Tax cannot be added while charging an order or processing a payment on the POS device. Tax creation and configuration must be done separately in the Management Hub.\r
\r
Don't know how to access Management Hub?\r
\r
1\\.	Go to Settings and select Tax. You will see a list of all taxes that have been created in the system, if any.\r
\r
![](</admin/5. ManageOrders/5.8/22.png>)\r
\r
2\\.	Press New Tax to create a new tax.\r
\r
![](</admin/5. ManageOrders/5.8/24a.png>)\r
\r
3\\.	Enter a Tax Name and Tax Rate (e.g., 6%).\r
\r
![](</admin/5. ManageOrders/5.8/23.png>)\r
\r
4\\.	Select the **Tax Type:** **Added** or **Included.**\r
\r
**Note:** The main difference is that **Added** increases the final price, while **Included** keeps the displayed price unchanged and calculates the tax portion from within the price.\r
\r
**Note – Added:** The tax is added on top of the item's original price. For example, an item priced at **RM10.00** with 6% tax will have a final price of **RM10.60.**\r
\r
**Note – Included:** The tax is already included in the displayed item price. For example, an item priced at **RM10.00** with 6% tax remains **RM10.00**, with approximately **RM0.57** representing the tax portion.\r
\r
![](</admin/5. ManageOrders/5.8/24.png>)\r
\r
5\\.	Under Apply, select how the tax should be applied:\r
\r
o	Apply tax to all new and existing items\r
\r
o	Apply tax to selected items\r
\r
o	Apply tax to selected categories\r
\r
o	Don't apply\r
\r
![](</admin/5. ManageOrders/5.8/25.png>)\r
\r
**Note:** If you select Apply tax to selected items or Apply tax to selected categories, you can select the specific items or categories that the tax should apply to.\r
\r
6\\.	Under Tax Application Depends on Order Option, select Yes or No depending on whether the tax application should vary based on the selected Order Option.\r
\r
![](</admin/5. ManageOrders/5.8/26.png>)\r
\r
7\\.	Select the Outlet(s) where the tax should be applied.\r
\r
![](</admin/5. ManageOrders/5.8/27.png>)\r
\r
8\\.	Scroll down to the **Items/Categories to Select** section and the **Order Option to Select** section.  Select the items/categories and order options that you preferred.\r
\r
![](</admin/5. ManageOrders/5.8/28.png>)\r
\r
![](</admin/5. ManageOrders/5.8/29.png>)\r
\r
**Note:** These sections will be displayed if you select **Apply tax to selected items/categories** or choose **Yes** for **Tax Application Depends on Order Option.**\r
\r
9\\.	Review all the tax settings and confirm that the information is correct.  Create to save the tax.\r
\r
![](</admin/5. ManageOrders/5.8/25a.png>)\r
\r
10\\.	The new tax will now be created and applied according to the settings you have configured.\r
\r
![](</admin/5. ManageOrders/5.8/30.png>)\r
\r
11\\.	Return to the POS system and charge an order. The tax will be automatically applied when the order meets the tax conditions you have configured.\r
\r
![](</admin/5. ManageOrders/5.8/26a.png>)\r
\r
**6.	Payment Type Creation**\r
\r
Before making a payment, you need to create a **Payment Type** in Management Hub. The Payment Type will then be available for selection when making a payment in POS System.\r
\r
If you do not know how to **Hub**. access Management Hub,\r
\r
1\\.	Go to **Settings**.\r
\r
![](</admin/5. ManageOrders/5.8/31.png>)\r
\r
2\\.	Select **Payment Types**. You will see a list of all Payment Types that have been created, if already have created.\r
\r
![](</admin/5. ManageOrders/5.8/32.png>)\r
\r
3\\.	Click **New Payment Type** to create a new Payment Type.\r
\r
![](</admin/5. ManageOrders/5.8/33.png>)\r
\r
4\\.	Select the Payment Type:\r
\r
o	**Card** – for card payments.\r
\r
o	**Cheque** – for cheque payments.\r
\r
o	**Other** – for other payment methods such as cash, online transfer, or QR payment.\r
\r
![](</admin/5. ManageOrders/5.8/34.png>)\r
\r
5\\.	Enter the **Payment Type Name**. For example, Cash, Online Transfer, or QR Payment.\r
\r
![](</admin/5. ManageOrders/5.8/35.png>)\r
\r
6\\.	Select **Yes** or **No** for **Auto Rounding**.\r
\r
![](</admin/5. ManageOrders/5.8/36.png>)\r
\r
7\\.	Select the **Outlet** where the Payment Type will be used. Check that all the information is correct. Click **Create** to save the Payment Type.\r
\r
![](</admin/5. ManageOrders/5.8/37.png>)\r
\r
8\\.	The new Payment Type will now appear in the Payment Types dashboard.\r
\r
![](</admin/5. ManageOrders/5.8/38.png>)\r
\r
9\\.	From the dashboard, you can **enable or disable Auto Rounding** for a Payment Type.\r
\r
![](</admin/5. ManageOrders/5.8/39.png>)\r
\r
10\\.	Use the Search Bar to quickly find a Payment Type by its name.\r
\r
![](</admin/5. ManageOrders/5.8/40.png>)\r
\r
11\\.	Use the Filter button to filter Payment Types by category or outlet.\r
\r
![](</admin/5. ManageOrders/5.8/41.png>)\r
\r
12\\.	To delete a Payment Type, click **Edit** on the Payment Type you want to remove. Click **Delete Payment Type**.\r
\r
![](</admin/5. ManageOrders/5.8/42.png>)\r
\r
13\\.	Click **Save Changes** to confirm the deletion.\r
\r
![](</admin/5. ManageOrders/5.8/43.png>)\r
\r
14\\.	Return to the **POS system** and charge an order. You will see the payment type you created (e.g., **Card Debit**) available as a payment option.\r
\r
![](</admin/5. ManageOrders/5.8/44.png>)\r
\r
**7.	Split Payment**\r
\r
**Split Payment** allows a customer to pay for an order using different payments or to divide the order between multiple people.\r
\r
There are two ways to split a payment:\r
\r
**A. Split by Item**\r
\r
Use this when different customers want to pay for different items from the same order.\r
\r
**Example:**\r
\r
One customer pays for **Roti Canai,** while another customer pays for **Teh O**\r
\r
**Steps:**\r
\r
1\\.	Select **Split Payment** button.\r
\r
![](</admin/5. ManageOrders/5.8/27a.png>)\r
\r
2\\.	Select **Split by Item**.\r
\r
![](</admin/5. ManageOrders/5.8/45.png>)\r
\r
3\\.	Select the items to be paid for (e.g. Select **NG Paprik Ayam** and Teh O) and press Charge to pay.\r
\r
![](</admin/5. ManageOrders/5.8/28a.png>)\r
\r
4\\.	Select the payment type and complete the payment.\r
\r
**Note:** You can optionally add an **Adjustment** if needed.\r
\r
![](</admin/5. ManageOrders/5.8/46.png>)\r
\r
5\\.	After the first payment is completed, **Continue Split Payment** will appear if there are items left to pay.\r
\r
![](</admin/5. ManageOrders/5.8/47.png>)\r
\r
6\\.	Tap **Continue Split Payment** to pay for the remaining items and press Charge.\r
\r
![](</admin/5. ManageOrders/5.8/29a.png>)\r
\r
7\\.	Repeat until all items have been paid.\r
\r
![](/admin/Screenshot-2026-09-21-144351.png)\r
\r
**B. Split by Amount**\r
\r
Use this when the total amount is shared between different payments.\r
\r
**Example:**\r
\r
The total is **RM20.** The customer wants to pay **RM10 by Cash** and **RM10 by QR.**\r
\r
You can:\r
\r
•	Use **Quick Split** to divide the amount equally, such as by **2** or **3**.\r
\r
•	Enter the amount manually.\r
\r
**Steps:**\r
\r
1\\.	Select **Split Payment.**\r
\r
![](</admin/5. ManageOrders/5.8/49.png>)\r
\r
2\\.	Select **Split by Amount.**\r
\r
![](</admin/5. ManageOrders/5.8/50.png>)\r
\r
3\\.	Enter or select the amount to be paid and press Charge.\r
\r
**Note :** Use **Quick Split** to divide the amount equally, such as by **2** or **3**.\r
\r
![](</admin/5. ManageOrders/5.8/30a.png>)\r
\r
4\\.	Select the payment type and press Charge to complete the payment.\r
\r
![](</admin/5. ManageOrders/5.8/51.png>)\r
\r
5\\.	If there is still an unpaid amount, **Continue Split Payment** will appear. Tap **Continue Split Payment** and complete the remaining payment.\r
\r
![](</admin/5. ManageOrders/5.8/52.png>)\r
\r
6\\.	Enter the amount you want to pay for this transaction, then press **Charge**. Continue until the full amount has been paid.\r
\r
**Note:** In the **Payment History** section, the amount already paid will be displayed (e.g., **RM10 by Cash**). You can select the **Full** button to pay the remaining balance in the current transaction.\r
\r
![](</admin/5. ManageOrders/5.8/53.png>)\r
\r
**5. Print Receipt**\r
\r
The **Print** option allows you to choose whether to print the receipt.\r
\r
•	**ON** → Receipt will be printed.\r
\r
![](</admin/5. ManageOrders/5.8/31a.png>)\r
\r
•	**OFF** → Receipt will not be printed.\r
\r
![](</admin/5. ManageOrders/5.8/32a.png>)\r
\r
Toggle the **Print** button according to your preference.\r
\r
**Completing the Payment**\r
\r
After all payment details have been entered:\r
\r
1\\.	Tap **Charge** to complete the payment. For **cash payment**, the cash drawer will open automatically.\r
\r
![](</admin/5. ManageOrders/5.8/33a.png>)\r
\r
2\\.	The system will display the **change** to be returned to the customer. **Payment Successfull** message will appear once the payment is completed.\r
\r
**Note:** You can optionally scan the **QR cod**e to receive a digital receipt for your order.\r
\r
![](</admin/5. ManageOrders/5.8/54.png>)\r
\r
After payment is successful, you can optionally:\r
\r
**•	Print the receipt.**\r
\r
![](</admin/5. ManageOrders/5.8/34a.png>)\r
\r
•	**Send the receipt by email** by pressing **Send Receipt to Email**. Enter your email address, then press **Send** to send the receipt to your email.\r
\r
![](</admin/5. ManageOrders/5.8/35a.png>)\r
\r
•	You have successfully completed the payment. Press **New Sale** to start taking a new order.\r
\r
![](</admin/5. ManageOrders/5.8/56.png>)\r
`,vr=`---\r
title: 6. Manage Receipts\r
section: USER GUIDELINES\r
order: 6\r
language: en\r
---\r
\r
`,yr=`---\r
title: 6.1 Start Charging the Order\r
section: USER GUIDELINES\r
order: 6.1\r
isSubTopic: true\r
parentTopic: 6. Manage Receipts\r
language: en\r
---\r
\r
You can view and manage all completed receipts from the **Receipt** section.\r
\r
**To View a Receipt**\r
\r
1\\.	Press the Menu button.\r
\r
![](</admin/6. Manage Receipts/6.1/1.png>)\r
\r
2\\.	Select the Receipt tab.\r
\r
![](</admin/6. Manage Receipts/6.1/Picture2-6.1.png>)\r
\r
3\\.	A list of all completed receipts will be displayed.\r
\r
![](</admin/6. Manage Receipts/6.1/Picture3-6.1.png>)\r
\r
4\\.	Select any receipt to view the items included in the order.\r
\r
![](</admin/6. Manage Receipts/6.1/Picture4-6.1.png>)\r
\r
**Filter Receipts**\r
\r
Press the Filter button to filter receipts based on the following options:\r
\r
![](</admin/6. Manage Receipts/6.1/2.png>)\r
\r
**Date Range**\r
\r
1\\.	Press **Select Date Range** and select the Start Date and End Date.\r
\r
![](</admin/6. Manage Receipts/6.1/Picture6-6.1.png>)\r
\r
2\\.	Adjust the **Start Time** and **End Time** for more precise filtering. Then, press Ok to confirm.\r
\r
![](</admin/6. Manage Receipts/6.1/Picture7-6.1.png>)\r
\r
**Payment Type**\r
\r
1\\.	Press **Select Payment Type.**\r
\r
![](</admin/6. Manage Receipts/6.1/Picture8-6.1.png>)\r
\r
2\\.	Select the **Payment Type** you want to filter (e.g. Cash)  and close the tab.\r
\r
![](</admin/6. Manage Receipts/6.1/Picture9-6.1.png>)\r
\r
**Order Option — such as Dine In or Take Away**\r
\r
1\\.	Press **Select Order Option.**\r
\r
![](</admin/6. Manage Receipts/6.1/Picture10-6.1.png>)\r
\r
2\\.	Select the **Order Option** you want to filter (e.g. **Dine In** or **Take Away**) and close the tab.\r
\r
![](</admin/6. Manage Receipts/6.1/Picture11-6.1.png>)\r
\r
3\\.	After confirming your selections, press **Apply Filter** to apply the changes and view the filtered receipts.\r
\r
**Search by Receipt ID**\r
\r
**Note:** You can also search for a specific receipt using its Receipt ID. A unique **Receipt ID** is automatically generated and assigned to receipts.\r
\r
![](</admin/6. Manage Receipts/6.1/4.png>)\r
\r
**Receipt Options**\r
\r
After selecting a receipt, you can optionally:\r
\r
**Send Receipt to Email** — send the receipt to an email address.\r
\r
1\\.	Tap Send Receipt to Email and enter your email address.\r
\r
![](</admin/6. Manage Receipts/6.1/5.png>)\r
\r
2\\.	The receipt will be sent to the email address provided.\r
\r
![](</admin/6. Manage Receipts/6.1/Picture15-6.1.png>)\r
\r
**Print Receipt** —  Optionally, you can print the receipt again by pressing the **Print Receipt** button.\r
\r
![](</admin/6. Manage Receipts/6.1/6.png>)\r
`,br=`---\r
title: 6.3 Perform Refund\r
section: USER GUIDELINES\r
order: 6.3\r
isSubTopic: true\r
parentTopic: 6. Manage Receipts\r
language: en\r
---\r
\r
The **Refund** function allows you to refund selected items from a completed receipt.\r
\r
**To Process a Refund**\r
\r
1\\.	Press the **Menu** button.\r
\r
![](</admin/6. Manage Receipts/6.3/15.png>)\r
\r
2\\.	Select **Refund**.\r
\r
![](</admin/6. Manage Receipts/6.2/Picture2-6.2.png>)\r
\r
3\\.	Select the **item** you want to refund (e.g. **NG Paprik Ayam**).\r
\r
Note: If only 1 out of 2 **NG Paprik Ayam** orders need to be refunded, tap **NG Paprik Ayam** just once to select the item.\r
\r
![](</admin/6. Manage Receipts/6.2/Picture3-6.2.png>)\r
\r
4\\.	Select the appropriate **Payment Type** (e.g. Cash).\r
\r
![](</admin/6. Manage Receipts/6.2/Picture4-6.2.png>)\r
\r
5\\.	Press **Refund button** to complete the refund. The Refund Amount is displayed.\r
\r
![](</admin/6. Manage Receipts/6.2/Picture5-6.2.png>)\r
\r
6\\.	After the refund is completed, a **Refunded Receipt** will be generated with a refund label. Optionally,  press **Print Receipt** to print the refunded receipt **OR** press **Send Receipt to Email** to send the refunded receipt to your email address.\r
\r
![](</admin/6. Manage Receipts/6.2/Picture6-6.2.png>)\r
`,xr=`---\r
title: 6.2 Receipt Management on Management Hub\r
section: USER GUIDELINES\r
order: 6.2\r
isSubTopic: true\r
parentTopic: 6. Manage Receipts\r
language: en\r
---\r
\r
You can manage receipts from both the **POS device** and the **Management Hub**. The Management Hub is mainly used for **reports, documents, and settings**, while the receipt management features on the POS device are used to:\r
\r
* View past receipts\r
* Perform refunds\r
* Change the payment type\r
* Manage receipt settings\r
\r
Don't know how to access Management Hub? *[Click here to learn how to access Management Hub.](http://localhost:5173/docs?id=How-to-access-Management-Hub)*\r
\r
**View and Manage Receipts**\r
\r
1\\.	Go to the **Dashboard** on the Management Hub and find and select the **Receipt** section.\r
\r
![](</admin/6. Manage Receipts/6.4/Picture1-6.2.png>)\r
\r
2\\.	You will see all receipts created from your POS system. Optionally, you can filter receipts using different options, such as: **Date, Time, Month, Year, Outlet, Staff, Order Option, POS Device, and Customer.**\r
\r
Note:  Press the **Filter** icon to filter receipts based on your preferred criteria and press **Apply.**\r
\r
![](</admin/6. Manage Receipts/6.4/Picture2-6.2.png>)\r
\r
3\\.	Press Export button to to export your receipt. You can export the receipt records in **CSV or Excel format.**\r
\r
![](</admin/6. Manage Receipts/6.2/7.png>)\r
\r
4\\.	Select the columns you want to include in the export (e.g., **Receipt No. and Order Type**), then press **Export**.\r
\r
![](</admin/6. Manage Receipts/6.4/Picture4-6.2.png>)\r
\r
5\\.	You will receive a notification once the export is complete. Press the **Notification** button to view the completed export.\r
\r
![](</admin/6. Manage Receipts/6.2/8.png>)\r
\r
6\\.	Select either **CSV or Excel** format to download the exported receipt records.\r
\r
![](</admin/6. Manage Receipts/6.4/Picture6-6.2.png>)\r
\r
7\\.	You can select a receipt to **view** its details.\r
\r
![](</admin/6. Manage Receipts/6.2/9.png>)\r
\r
8\\.	You can view the receipt details from the selected receipt.\r
\r
![](</admin/6. Manage Receipts/6.4/Picture8-6.2.png>)\r
\r
9\\.	Scroll down. Optionally, you can **send the receipt or invoice to an email address**. Press **Preview Receipt** or **Preview Invoice** to view the receipt or invoice in **PDF format**.\r
\r
![](</admin/6. Manage Receipts/6.4/Picture9-6.2.png>)\r
\r
10\\.	Enter the customer's **email address** and select **Send Receipt** to send the receipt to the customer's email.\r
\r
![](</admin/6. Manage Receipts/6.2/10.png>)\r
\r
11\\.	Or, select **Send Invoice** to send the invoice to the customer's email.\r
\r
![](</admin/6. Manage Receipts/6.2/11.png>)\r
\r
12\\.	Press **Preview Receipt** to view the receipt before sending.\r
\r
![](</admin/6. Manage Receipts/6.2/12.png>)\r
\r
13\\.	You can now view the receipt details.\r
\r
![](</admin/6. Manage Receipts/6.2/Pict.png>)\r
\r
14\\.	Press **Preview Invoice** to view the invoice.\r
\r
![](</admin/6. Manage Receipts/6.2/13.png>)\r
\r
15\\.	You can now view the invoice details.\r
\r
![](</admin/6. Manage Receipts/6.2/Picture2.png>)\r
\r
16\\.	You can also **cancel a receipt** when required.\r
\r
**Note:** Cancelling a receipt will not delete it from the system. The receipt will remain in the **Receipt List** with the **Type** labelled as **“Cancel”**.\r
\r
![](</admin/6. Manage Receipts/6.2/14.png>)\r
\r
17\\.	Optionally, you can search for an **Invoice No.** using the search bar.\r
\r
![](</admin/6. Manage Receipts/6.2/Picture3.png>)\r
`,Sr=`---\r
title: 6.4 Change Payment Type\r
section: USER GUIDELINES\r
order: 6.4\r
isSubTopic: true\r
parentTopic: 6. Manage Receipts\r
language: en\r
---\r
\r
The Change Payment Type function allows you to correct the payment method recorded on a completed receipt.\r
\r
**When to Use Change Payment Type**\r
\r
A customer initially says they will pay by **Cash**, so the receipt is created with Cash as the payment type. However, the customer later checks their wallet and finds that they do not have enough cash. They decide to pay using **QR** instead.\r
\r
In this situation, you can change the payment type on the receipt from **Cash** to **QR.**\r
\r
**Important:** The payment type should be updated to match the actual payment method used. This helps maintain accurate and efficient payment tracking.\r
\r
**To Change the Payment Type**\r
\r
1\\.	Press the **Menu** button.\r
\r
![](</admin/6. Manage Receipts/6.4/16.png>)\r
\r
2\\.	Select **Change Payment Type.**\r
\r
![](</admin/6. Manage Receipts/6.3/Picture2-6.3.png>)\r
\r
3\\.	Select the correct **Payment Type**. For example, if the original payment type was Cash and the customer paid by **QR**, select **QR** and press **Save**.\r
\r
![](</admin/6. Manage Receipts/6.3/Picture3-6.3.png>)\r
\r
4\\.	You have successfully changed the payment type of the receipt. You can verify the change by checking the updated **Payment Type** on the receipt.\r
\r
![](</admin/6. Manage Receipts/6.3/Picture4-6.3.png>)\r
`,Cr=`---\r
title: 6.5 Receipt Settings\r
section: USER GUIDELINES\r
order: 6.5\r
isSubTopic: true\r
parentTopic: 6. Manage Receipts\r
language: en\r
---\r
\r
Receipt settings can be configured from the Management Hub.\r
\r
**Don't know how to access Management Hub?** *[Click here to learn how to access Management Hub.](http://localhost:5173/docs?id=How-to-access-Management-Hub)*\r
\r
1\\.	Go to **Settings** in the Management Hub and find and select **Receipt Settings.**\r
\r
![](</admin/6. Manage Receipts/6.5/Picture1-6.5.png>)\r
\r
2\\.	Choose your **Outlet**.\r
\r
![](</admin/6. Manage Receipts/6.5/Picture2-6.5.png>)\r
\r
3\\.	Press the **Upload** button under the receipt logo section and select the logo file from your device to add your shop logo to printed receipts.\r
\r
**Note**: Allowed file: jpg, jpeg, png (max 10MB). Will be compressed and converted to grayscale for optimal printing.\r
\r
![](</admin/6. Manage Receipts/6.5/Picture3-6.5.png>)\r
\r
4\\.	Press the **Upload** button under the **Email Logo** section and select the logo file you want to use to add a logo for emailed receipts.\r
\r
**Note**: Allowed file: jpg, jpeg, png.\r
\r
![](</admin/6. Manage Receipts/6.5/Picture4-6.5.png>)\r
\r
5\\.	To customize the receipt header and receipt footer, enter or edit the required information in the **Receipt Header** section and **Receipt Footer** section.\r
\r
![](</admin/6. Manage Receipts/6.5/Picture5-6.5.png>)\r
\r
6\\. Press **Save** to save and apply the changes.\r
\r
![](</admin/6. Manage Receipts/6.5/17.png>)\r
`,wr=`---\r
title: 7. Settings\r
section: USER GUIDELINES\r
order: 7\r
language: en\r
---\r
\r
`,Tr=`---\r
title: 7.1 Printers Settings\r
section: USER GUIDELINES\r
order: 7.1\r
isSubTopic: true\r
parentTopic: 7. Settings\r
language: en\r
---\r
\r
Before connecting a printer, you need to create a **Department Printer** in Management Hub. The Department Printer is used to select where the order should be printed.\r
\r
1\\.	Log in to **Management Hub**.\r
\r
Note: If you do not know how to access Management Hub, *[click here to learn how to access Management Hub.](http://localhost:5173/docs?id=How-to-access-Management-Hub)*\r
\r
![](/admin/7.Settings/1.png)\r
\r
2\\.	Go to **Settings > Department Printers.**\r
\r
![](/admin/7.Settings/2.png)\r
\r
3\\.	Click **New Department Printer** to create a new Department Printer.\r
\r
![](/admin/7.Settings/3.png)\r
\r
4\\.	Enter the **Department Printer Name** and select the **categories** that you want to print.\r
\r
![](/admin/7.Settings/4.png)\r
\r
5\\.	Check the information and click **Create** to save the Department Printer.\r
\r
![](/admin/7.Settings/5.png)\r
\r
6\\.	Go back to the **POS System** and go to **Settings > Printers.**\r
\r
![](/admin/7.Settings/6.png)\r
\r
7\\.	Click the **+ (Plus)** button to add a new printer.\r
\r
![](/admin/7.Settings/7.png)\r
\r
8\\.	Select the **Connection Type** of your printer: **Bluetooth, Ethernet, or USB**. For a Bluetooth printer, enter the **Printer Name**, click **Scan for Printer**, and select your printer.\r
\r
![](/admin/7.Settings/8.png)\r
\r
9\\.	For an **Ethernet** printer, enter the **Printer Name, Printer Model, and Printer IP Address.**\r
\r
![](/admin/7.Settings/9.png)\r
\r
10\\.	For a **USB** printer, enter the **Printer Name and Printer Model**, click Scan for Printer, and select your printer.\r
\r
![](/admin/7.Settings/10.png)\r
\r
11\\.	Select the **Paper Width**. You can choose **58mm** or **80mm**.\r
\r
![](/admin/7.Settings/11.png)\r
\r
12\\. Turn on the Cash Drawer button if the printer is connected to a cash drawer.\r
\r
![](/admin/7.Settings/7.1new/no12.png)\r
\r
13\\. Choose whether to **enable or disable Print Receipt and Bills.**\r
\r
![](/admin/7.Settings/7.1new/no13.png)\r
\r
14\\. Choose whether to **enable or disable Automatically Print Receipt.**\r
\r
![](/admin/7.Settings/7.1new/no14.png)\r
\r
15\\. Choose whether to **enable or disable Print Orders.**\r
\r
![](/admin/7.Settings/7.1new/no15.png)\r
\r
16\\. If Print Orders is enabled, select the Department Printer that you created earlier. \r
\r
![](/admin/7.Settings/7.1new/no16.png)\r
\r
17\\.	To check the print receipt queue, go to **Settings > Print Receipt Queue.**\r
\r
![](/admin/7.Settings/17.png)\r
\r
18\\.	The print receipt queue is divided into **All, Success, Pending, Processing, and Failed**. Click a section to view the print queues under that section.\r
\r
![](/admin/7.Settings/18.png)\r
\r
19\\.	To delete a print queue, **select the print queue first**, then click **Bulk Delete.**\r
\r
![](/admin/7.Settings/19.png)\r
\r
20\\.	To print a receipt again, **select the print queue first**, then click **Bulk Reprint.**\r
\r
![](/admin/7.Settings/20.png)\r
`,Er=`---\r
title: 7.2 Customer Display Settings\r
section: USER GUIDELINES\r
order: 7.2\r
isSubTopic: true\r
parentTopic: 7. Settings\r
language: en\r
---\r
\r
You can set up the customer display from both **Management Hub** and the **POS System**. Management Hub provides more options for creating and managing slideshows, while the POS System provides the basic customer display settings.\r
\r
1\\.	Go to **Management Hub**.\r
\r
![](/admin/7.Settings/7.2/1.png)\r
\r
2\\.	Go to **Settings > Slideshows**. You will see a list of all slideshows that have been created.\r
\r
![](/admin/7.Settings/7.2/2.png)\r
\r
3\\.	Click **New Slideshow** to create a new slideshow.\r
\r
![](/admin/7.Settings/7.2/3.png)\r
\r
4\\.	Select the **Outlet** where you want to use the slideshow.\r
\r
![](/admin/7.Settings/7.2/4.png)\r
\r
5\\.	Enter the **Title** for the slideshow.\r
\r
![](/admin/7.Settings/7.2/5.png)\r
\r
6\\.	Enter a **Description.** This is optional.\r
\r
![](/admin/7.Settings/7.2/6.png)\r
\r
7\\.	Enter a **Greetings** message for customers.\r
\r
![](/admin/7.Settings/7.2/7.png)\r
\r
8\\.	Enter a **Feedback Description**. This is optional.\r
\r
![](/admin/7.Settings/7.2/8.png)\r
\r
9\\.	Add a **Promotional Link** if you want to show a promotion.\r
\r
![](/admin/7.Settings/7.2/9.png)\r
\r
10\\.	Add an **Image** if you want to show an image on the customer display.\r
\r
![](/admin/7.Settings/7.2/10.png)\r
\r
11\\.	Add a **Payment Page Image** if you want to show an image on the payment page.\r
\r
![](/admin/7.Settings/7.2/11.png)\r
\r
12\\.	Check the information and save the slideshow.\r
\r
![](/admin/7.Settings/7.2/12.png)\r
\r
13\\.	Go to the **POS System**.\r
\r
![](/admin/7.Settings/7.2/13.png)\r
\r
14\\.	Go to **Settings > Customer Display.**\r
\r
![](/admin/7.Settings/7.2/14.png)\r
\r
15\\.	The POS System also allows you to set the **Title, Description, Greeting, Feedback Description, and Promotion Link.**\r
\r
**Note:** The POS System has fewer settings than Management Hub.\r
\r
![](/admin/7.Settings/7.2/15.png)\r
\r
16\\.	Click **Save & Show Secondary Display** to save the settings and show the customer display.\r
\r
![](/admin/7.Settings/7.2/16.png)\r
\r
17\\.	Click **Stop Display** if you want to stop showing the customer display.\r
\r
![](/admin/7.Settings/7.2/17.png)\r
`,Dr=`---\r
title: 7.3 Permissions\r
section: USER GUIDELINES\r
order: 7.3\r
isSubTopic: true\r
parentTopic: 7. Settings\r
language: en\r
---\r
\r
1\\.	Go to **Settings > Permission**. View the permissions that are granted in the POS System. The permissions are **view-only** and cannot be enabled or disabled from the POS System. To enable or disable permissions, you can manage them in **Management Hub.**\r
\r
![](/admin/7.Settings/7.3/7.4/7.5/1.png)\r
`,Or=`---\r
title: 7.4 System Configuration\r
section: USER GUIDELINES\r
order: 7.4\r
isSubTopic: true\r
parentTopic: 7. Settings\r
language: en\r
---\r
\r
1\\.	Go to **Settings > System Config.**\r
\r
![](/admin/7.Settings/7.3/7.4/7.5/2.png)\r
\r
2\\.	You can view the system configuration and the **App Version** to check which version the POS System is using.\r
\r
![](/admin/7.Settings/7.3/7.4/7.5/3.png)\r
\r
3\\.	**Main Device** – Enable or disable this option to set the device as the main POS device for the outlet.\r
\r
![](/admin/7.Settings/7.3/7.4/7.5/4.png)\r
\r
4\\.	**Force Sync** – Click **Force Sync** to sync all data with the server. This will download all data, including images.\r
\r
![](/admin/7.Settings/7.3/7.4/7.5/5.png)\r
\r
5\\.	**Realtime Status** – Check whether the POS System is connected or not.\r
\r
![](/admin/7.Settings/7.3/7.4/7.5/6.png)\r
\r
6\\.	**Pending Changes to Cloud –** Check the last sync time and whether all data has been synced. You can also click **Start** or **Stop** to control the sync.\r
\r
![](/admin/7.Settings/7.3/7.4/7.5/7.png)\r
\r
7\\.	**Print Queue Monitoring** – Check if there are any pending print jobs. You can also **Start** or **Stop** print queue monitoring.\r
\r
![](/admin/7.Settings/7.3/7.4/7.5/8.png)\r
\r
8\\.	**Debug Mode** – Use this to record app logs to help find and diagnose issues. Click **Start Recording** to start recording.\r
\r
![](/admin/7.Settings/7.3/7.4/7.5/9.png)\r
\r
9\\.	After recording, click **Stop & Report** to report a bug. Describe the issue in the provided box and click **Submit Report** to send the report.\r
\r
![](/admin/7.Settings/7.3/7.4/7.5/10.png)\r
\r
10\\.	**Internet Speed** – Click **Test Speed** to check the internet speed.\r
\r
![](/admin/7.Settings/7.3/7.4/7.5/11.png)\r
\r
11\\.	**Cleanup Data** – Click **Cleanup Data** to remove corrupted or leftover data. Your **orders, receipts, and settings will not be affected.**\r
\r
![](/admin/7.Settings/7.3/7.4/7.5/12.png)\r
`,kr=`---\r
title: 7.5 Features on Management Hub\r
section: USER GUIDELINES\r
order: 7.5\r
isSubTopic: true\r
parentTopic: 7. Settings\r
language: en\r
---\r
\r
Don’t know how to access Management Hub, *[click here to learn how to access Management Hub](http://localhost:5173/docs?id=How-to-access-Management-Hub)*\r
\r
1\\.	Go to Settings > Features. Here, you can turn different features on or off based on your business needs.\r
\r
![](/admin/7.Settings/7.3/7.4/7.5/13\\(7.5\\).png)\r
\r
2\\.	**Time Clock**\r
\r
Turn on Time Clock to track staff clock-in and clock-out times and calculate their total working hours.\r
\r
![](/admin/7.Settings/7.3/7.4/7.5/7.5.1w.png)\r
\r
3\\.	**Open Orders**\r
\r
Turn on Open Orders to allow staff to save and edit orders before completing the payment.\r
\r
![](/admin/7.Settings/7.3/7.4/7.5/2w.png)\r
\r
4\\.	**Department Printers**\r
\r
Use Department Printers to send orders to different printers or displays based on the department, such as Kitchen, Beverages, and others.\r
\r
![](/admin/7.Settings/7.3/7.4/7.5/3w.png)\r
\r
5\\.	**Order Options**\r
\r
Turn on Order Options to allow orders to be marked as Dine In, Online, or Delivery.\r
\r
![](/admin/7.Settings/7.3/7.4/7.5/4w.png)\r
\r
6\\.	**Layout Management**\r
\r
Turn Layout Management on or off to control whether the layout management feature is available on the POS device.\r
\r
![](/admin/7.Settings/7.3/7.4/7.5/5w.png)\r
`,Ar=`---\r
title: 8. Inventory Management & Logs\r
section: USER GUIDELINES\r
order: 8\r
language: en\r
---\r
\r
`,jr=`---\r
title: 8.1 How to Setup Inventory\r
section: USER GUIDELINES\r
order: 8.1\r
isSubTopic: true\r
parentTopic: 8. Inventory Management & Logs\r
language: en\r
---\r
\r
Inventory Management and Logs need to be set up in the **Management Hub.**\r
\r
Don’t know how to access **Management Hub** ?  [Click Here to learn how to access Management Hub.](http://localhost:5173/docs?id=How-to-access-Management-Hub)\r
\r
1\\.	Go to **Inventory > Inventories** to view your inventory items.\r
\r
![](</admin/8.Invenory Management Logs/8.1/1.png>)\r
\r
2\\.	If an item does not appear in the inventory list, check whether **Inventory Tracking** is enabled for that item. Go to **Items** and select the item.\r
\r
![](</admin/8.Invenory Management Logs/8.1/8.0.1.png>)\r
\r
3\\.	Turn on the **Inventory Tracking** button (e.g. Coffee).\r
\r
![](</admin/8.Invenory Management Logs/8.1/8.0.2.png>)\r
\r
4\\.	Return to **Inventory > Inventories**. The item will now appear in the inventory list.\r
\r
**Note**: If an item has **variants**, each variant will be listed separately in the inventory. For example, **Coffee with Large, Medium, and Small** variants will appear as separate items, with each variant having its own inventory quantity.\r
\r
![](</admin/8.Invenory Management Logs/8.1/8.0.3.png>)\r
`,Mr=`---\r
title: 8.2 Suppliers\r
section: USER GUIDELINES\r
order: 8.2\r
isSubTopic: true\r
parentTopic: 8. Inventory Management & Logs\r
language: en\r
---\r
\r
You can manage your outlet’s suppliers from the **Suppliers** page. This setup needs to be done in the **Management Hub.**\r
\r
Don’t know how to access Management Hub ?[ *Click Here to learn how to access Management Hub.*](http://localhost:5173/docs?id=How-to-access-Management-Hub)\r
\r
1\\.	Go to **Inventory > Suppliers**. This page will display all the registered suppliers.\r
\r
![](</admin/8.Invenory Management Logs/8.2/1.png>)\r
\r
2\\.	Click **New Supplier** to create a new supplier.\r
\r
![](</admin/8.Invenory Management Logs/8.2/8.1.1.png>)\r
\r
3\\.	Enter the supplier’s **Name** and **Business Registration Number.**\r
\r
![](</admin/8.Invenory Management Logs/8.2/2.png>)\r
\r
4\\.	Enter their **Email** and **Phone Number.**\r
\r
![](</admin/8.Invenory Management Logs/8.2/3.png>)\r
\r
5\\.	Select the **Settlement Type:**\r
\r
o	**Cash**\r
\r
o	**Credit**\r
\r
o	**N/A** if other types apply.\r
\r
![](</admin/8.Invenory Management Logs/8.2/4.png>)\r
\r
6\\.	Optionally, enter the supplier’s **Address** and add any notes in the **Description** box.\r
\r
![](</admin/8.Invenory Management Logs/8.2/5.png>)\r
\r
7\\.	Select the **Outlet** that the supplier supplies.\r
\r
![](</admin/8.Invenory Management Logs/8.2/6.png>)\r
\r
8\\.	Check the details and click **Create.**\r
\r
![](</admin/8.Invenory Management Logs/8.2/7.png>)\r
\r
9\\.	Your supplier has been successfully created.\r
\r
![](</admin/8.Invenory Management Logs/8.2/8.1.2.png>)\r
\r
10\\.	You can also use the **Search** button to search for a supplier by name.\r
\r
![](</admin/8.Invenory Management Logs/8.2/8.1.3.png>)\r
\r
11\\.	The **Column Adjustment** button allows you to choose which columns to display, such as **Name, Email, and Phone Number**. Click **Apply Columns** to save your selection.\r
\r
![](</admin/8.Invenory Management Logs/8.2/8.1.4.png>)\r
`,Nr=`---\r
title: 8.4 Inventory Adjustments\r
section: USER GUIDELINES\r
order: 8.4\r
isSubTopic: true\r
parentTopic: 8. Inventory Management & Logs\r
language: en\r
---\r
\r
Go to **Inventory > Inventories**. Here, you can view and manage all your inventory items.\r
\r
**Viewing Stock Details**\r
\r
1\\.	Select an item from the inventory list.\r
\r
![](</admin/8.Invenory Management Logs/8.3/1.png>)\r
\r
2\\.	Click the **Actions** button on the right.\r
\r
![](</admin/8.Invenory Management Logs/8.4/8.2.1.png>)\r
\r
3\\.	You will see 3 options:\r
\r
**o	Stock Details**\r
\r
**o	Adjust Stock**\r
\r
**o	History**\r
\r
![](</admin/8.Invenory Management Logs/8.4/8.2.2.png>)\r
\r
4\\.	Select **Stock Details.**\r
\r
![](</admin/8.Invenory Management Logs/8.4/8.2.3.png>)\r
\r
5\\.	A small tab will open on the same page, showing the quantity available at each outlet.\r
\r
For example:\r
\r
•	Jason Cafe – 5\r
\r
•	GD CAFE – 21\r
\r
![](</admin/8.Invenory Management Logs/8.3/2.png>)\r
\r
**Adjusting Stock by Item**\r
\r
There are two ways to adjust stock. The first way is to adjust the stock directly from the selected item.\r
\r
1\\.	Click the **Adjust Stock** button for the item.\r
\r
![](</admin/8.Invenory Management Logs/8.4/8.2.4.png>)\r
\r
2\\.	Under **Stock Details**, select the **Adjustment Type:**\r
\r
o	Stock Adjustment\r
\r
o	Stock In\r
\r
o	Stock Out\r
\r
![](</admin/8.Invenory Management Logs/8.3/3.png>)\r
\r
3\\.	The **Item Name** will be automatically filled in.\r
\r
![](</admin/8.Invenory Management Logs/8.3/4.png>)\r
\r
4\\.	Select the **Outlet.**\r
\r
![](</admin/8.Invenory Management Logs/8.3/5.png>)\r
\r
5\\.	Select a predefined **Reason** for the adjustment, such as **Receiving Item.**\r
\r
![](</admin/8.Invenory Management Logs/8.3/6.png>)\r
\r
6\\.	In the **Notes** box, you can add any additional notes if needed. This is **optional.**\r
\r
![](</admin/8.Invenory Management Logs/8.3/7.png>)\r
\r
7\\.	Scroll down to the **Adjustment Details** section. Select a **Supplier** if needed. This is **optional.**\r
\r
![](</admin/8.Invenory Management Logs/8.3/8.png>)\r
\r
8\\.	The **Measurement Type** will be automatically applied based on the item.\r
\r
![](</admin/8.Invenory Management Logs/8.4/8.2.5.png>)\r
\r
9\\.	The **Current Quantity** will be displayed.\r
\r
![](</admin/8.Invenory Management Logs/8.4/8.2.6.png>)\r
\r
10\\.	Enter the quantity in the quantity field (e.g. 10).\r
\r
![](</admin/8.Invenory Management Logs/8.3/9.png>)\r
\r
11\\.	The **Quantity After Adjustment** will be calculated automatically based on the current quantity and the quantity entered.\r
\r
![](</admin/8.Invenory Management Logs/8.4/8.2.7.png>)\r
\r
12\\.	Enter the **Unit Cost** if required.\r
\r
**Note:** Unit Cost can only be added for St**ock In** and **Stock Out**. Unit Cost cannot be set for **Stock Adjustment.**\r
\r
![](</admin/8.Invenory Management Logs/8.4/8.2.8.png>)\r
\r
13\\.	The **Total Cost** will be calculated automatically based on the **Unit Cost** and the **Added Quantity.**\r
\r
![](</admin/8.Invenory Management Logs/8.4/8.2.9.png>)\r
\r
14\\.	Check all the details and click **Submit.**\r
\r
![](</admin/8.Invenory Management Logs/8.4/8.2.10.png>)\r
\r
15\\.	Your stock has been successfully updated.\r
\r
![](</admin/8.Invenory Management Logs/8.4/8.2.11.png>)\r
\r
**Adjusting Stock from the Inventory Dashboard**\r
\r
You can also adjust stock directly from the main inventory dashboard.\r
\r
1\\.	Click the **Adjust Stock** button.\r
\r
![](</admin/8.Invenory Management Logs/8.4/8.2.12.png>)\r
\r
2\\.	Select the **Adjustment Type:**\r
\r
o	Stock In\r
\r
o	Stock Out\r
\r
o	Stock Adjustment\r
\r
![](</admin/8.Invenory Management Logs/8.3/10.png>)\r
\r
3\\.	Manually select the **Item** from the list.\r
\r
![](</admin/8.Invenory Management Logs/8.3/11.png>)\r
\r
4\\.	Select the **Outlet.**\r
\r
![](</admin/8.Invenory Management Logs/8.3/12.png>)\r
\r
5\\.	Select the predefined Reason for the adjustment.\r
\r
![](</admin/8.Invenory Management Logs/8.3/13.png>)\r
\r
6\\.	Add any additional information in the **Notes** box if needed. This is **optional**.\r
\r
![](</admin/8.Invenory Management Logs/8.3/14.png>)\r
\r
7\\.	Under **Adjustment Details**, select a **Supplier** if needed. This is optional.\r
\r
![](</admin/8.Invenory Management Logs/8.3/15.png>)\r
\r
8\\.	The **Measurement Type** will be automatically applied based on the item's criteria.\r
\r
![](</admin/8.Invenory Management Logs/8.4/8.2.13.png>)\r
\r
9\\.	The **Current Quantity** will be displayed.\r
\r
![](</admin/8.Invenory Management Logs/8.4/8.2.14.png>)\r
\r
10\\.	Enter the quantity in the **Quantity Added/Removed/Counted Quantity** section.\r
\r
![](</admin/8.Invenory Management Logs/8.3/16.png>)\r
\r
11\\.	The **Quantity After Adjustment** will be calculated and updated automatically.\r
\r
![](</admin/8.Invenory Management Logs/8.3/17.png>)\r
\r
12\\.	Enter the **Unit Cost** if required.\r
\r
![](</admin/8.Invenory Management Logs/8.3/18.png>)\r
\r
13\\.	The **Total Cost** will be calculated automatically based on the Unit Cost and total quantity.\r
\r
![](</admin/8.Invenory Management Logs/8.3/19.png>)\r
\r
14\\.	Check all the details and click **Submit.**\r
\r
![](</admin/8.Invenory Management Logs/8.4/8.2.15.png>)\r
\r
15\\.	Your stock has been successfully adjusted.\r
\r
![](</admin/8.Invenory Management Logs/8.4/8.2.16.png>)\r
\r
**Recalculate Stock**\r
\r
If there is a delay in the inventory quantity or the quantity does not match the actual stock, you can use the **Recalculate Stock** button.\r
\r
![](</admin/8.Invenory Management Logs/8.4/8.2.17.png>)\r
\r
Click **Recalculate Stock** to recalculate the stock quantities across all outlets simultaneously.\r
\r
![](</admin/8.Invenory Management Logs/8.3/20.png>)\r
\r
**Searching and Filtering Inventory**\r
\r
You can use the **Search** button to search for an item by:\r
\r
•	Item Name\r
\r
![](</admin/8.Invenory Management Logs/8.4/8.2.18.png>)\r
\r
•	Barcode\r
\r
![](</admin/8.Invenory Management Logs/8.4/8.2.19.png>)\r
\r
•	SKU Code\r
\r
![](</admin/8.Invenory Management Logs/8.4/8.2.20.png>)\r
\r
You can also use the **Filter** button to filter the inventory list by:\r
\r
•	Outlet\r
\r
![](</admin/8.Invenory Management Logs/8.3/21.png>)\r
\r
•	Category\r
\r
![](</admin/8.Invenory Management Logs/8.3/22.png>)\r
\r
**Customizing Columns**\r
\r
The **Column Modifier** button allows you to choose which columns are displayed on the inventory dashboard.\r
\r
1\\.	Click **Column Modifier.**\r
\r
![](</admin/8.Invenory Management Logs/8.4/8.2.21.png>)\r
\r
2\\.	Select or deselect the columns you want to display and click **Apply Columns** to save your changes.\r
\r
![](</admin/8.Invenory Management Logs/8.4/8.2.22.png>)\r
\r
3\\.	 You have successfully adjusted the columns.\r
\r
**Note:** Click Reset to return the columns to their default settings.\r
\r
![](</admin/8.Invenory Management Logs/8.3/23.png>)\r
\r
**Inventory List and Page Navigation**\r
\r
Scroll down to view the total inventory results.You can choose how many rows to display per page using the **Per Page** option:\r
\r
•	10\r
\r
•	50\r
\r
•	100\r
\r
![](</admin/8.Invenory Management Logs/8.3/24.png>)\r
\r
If there are multiple pages, use the **page numbers** at the bottom to navigate through the inventory list.\r
\r
![](</admin/8.Invenory Management Logs/8.4/8.2.23.png>)\r
`,Pr=`---\r
title: 8.3 Inventory History\r
section: USER GUIDELINES\r
order: 8.3\r
isSubTopic: true\r
parentTopic: 8. Inventory Management & Logs\r
language: en\r
---\r
\r
Inventory History allows you to view the changes, updates, and modifications made to inventory items.\r
\r
There are **2 ways** to view Inventory History:\r
\r
**1. From Inventories**\r
\r
1\\.	Go to **Inventory > Inventories.**\r
\r
![](</admin/8.Invenory Management Logs/8.3/1.png>)\r
\r
2\\.	Select an item and click **Actions.**\r
\r
![](</admin/8.Invenory Management Logs/8.3/8.3.1.png>)\r
\r
3\\.	Select **History** to view the item's history.\r
\r
![](</admin/8.Invenory Management Logs/8.3/8.3.2.png>)\r
\r
4\\.	You will be redirected to the **Inventory History** page.\r
\r
![](</admin/8.Invenory Management Logs/8.3/Picture1.png>)\r
\r
**2. From Inventory History**\r
\r
1\\.	Go to **Inventory > Inventory History**. This dashboard shows all inventory changes made to different items and outlets, including the details of each change.\r
\r
![](</admin/8.Invenory Management Logs/8.4/3.png>)\r
\r
2\\.	Use the **Search** button to search by **Item, Barcode, or SKU.**\r
\r
![](</admin/8.Invenory Management Logs/8.3/8.3.3.png>)\r
\r
3\\.	Use the **Filter** button to filter the history based on the available criteria.\r
\r
![](</admin/8.Invenory Management Logs/8.4/4.png>)\r
\r
•	Transaction Type\r
\r
•	Predefined Reason\r
\r
•	Outlet\r
\r
•	Supplier\r
\r
•	Employee\r
\r
•	Custom Time Period\r
\r
Click **Apply Filters** to apply the selected filters or **Reset** to return to the default settings.\r
\r
![](</admin/8.Invenory Management Logs/8.3/8.3.4.png>)\r
\r
You can also use **Column Adjustment** to choose which columns to display.\r
\r
![](</admin/8.Invenory Management Logs/8.3/8.3.5.png>)\r
\r
&#x20;Use the **Per Page** option to select how many records to display (10, 50, or 100) and use the page numbers to navigate through the results.\r
\r
![](</admin/8.Invenory Management Logs/8.3/8.3.6.png>)\r
`,Fr=`---\r
title: 8.5 Deleted Order\r
section: USER GUIDELINES\r
order: 8.5\r
isSubTopic: true\r
parentTopic: 8. Inventory Management & Logs\r
language: en\r
---\r
\r
You can use Deleted Order to view orders that have been deleted from the Open Orders list.\r
\r
If you do not know how to access Management Hub, ***[click here to learn how to access management hub](http://localhost:5173/docs?id=How-to-access-Management-Hub)***\r
\r
1\\.	Log in Management hub.\r
\r
Note: If you do not know how to access Management Hub, ***click here to learn how to access management hub***\r
\r
![](</admin/8.Invenory Management Logs/8.5/8.4(1).png>)\r
\r
2\\.	Go to **Logs > Deleted Order**.You can view a list of all deleted orders from the **Open Orders** list.\r
\r
![](</admin/8.Invenory Management Logs/8.4(2).png>)\r
\r
3\\. Use the **Search Bar** to search for a deleted order by **Outlet, POS Device, Order Number, Item, or Staff.**\r
\r
![](</admin/8.Invenory Management Logs/8.5/8.4.1.png>)\r
\r
4\\. You can also click the **Filter** icon to filter the deleted orders by **POS Device, Outlet, Staff, Deleted From date, and Deleted Until date.**\r
\r
![](</admin/8.Invenory Management Logs/8.5/8.4.2.png>)\r
\r
5\\. After selecting the required filters, check the details and click Apply Filters to view the results.\r
\r
![](</admin/8.Invenory Management Logs/8.5/8.4.3.png>)\r
`,Ir=`---\r
title: 8.6 Cash Drawer Logs\r
section: USER GUIDELINES\r
order: 8.6\r
isSubTopic: true\r
parentTopic: 8. Inventory Management & Logs\r
language: en\r
---\r
\r
You can use Cash Drawer Logs to view the cash drawer activity recorded in the system.\r
\r
1\\.	Go to **Management Hub > Logs > Cash Drawer Logs**.You can view a list of all **Cash Drawer Logs**.\r
\r
![](</admin/8.Invenory Management Logs/8.6/1.png>)\r
\r
2\\. Use the **Search Bar** to search for a log by **POS Device, Staff Name, or Activity.**\r
\r
![](</admin/8.Invenory Management Logs/8.6/8.5.1.png>)\r
\r
3\\.	You can also click the **Filter** icon to filter the logs by **POS Device, Date From, and Date Until.**\r
\r
![](</admin/8.Invenory Management Logs/8.6/8.5.2.png>)\r
\r
4\\.	After selecting the required filters, check the details and click **Apply Filters** to view the results.\r
\r
![](</admin/8.Invenory Management Logs/8.6/8.5.3.png>)\r
`,Lr=`---\r
title: 8.7 Import History\r
section: USER GUIDELINES\r
order: 8.7\r
isSubTopic: true\r
parentTopic: 8. Inventory Management & Logs\r
language: en\r
---\r
\r
Import History allows you to check the files that were imported into the system, such as files imported from the **Items** section.\r
\r
1\\.	Go to **Logs > Import History**. You can view a list of all imported files.\r
\r
![](</admin/8.Invenory Management Logs/8.7/2.png>)\r
\r
2\\. Use the Search Bar to search for an import.\r
\r
![](</admin/8.Invenory Management Logs/8.7/8.6.1.png>)\r
\r
3\\. Click the Filter button to filter the import history.\r
\r
![](</admin/8.Invenory Management Logs/8.7/8.6.2.png>)\r
\r
4\\. Filter the import history by **Import Type** and **Status**. You can enable or disable **Has Failures** to show or hide imports that have failed items. Check the selected filters and click **Apply Filters** to view the results.\r
\r
![](</admin/8.Invenory Management Logs/8.7/8.6.3.png>)\r
\r
5\\.	Click the **Columns** button, then tick the boxes for the columns you want to show. Columns that are not selected will not be shown in the list.\r
\r
![](</admin/8.Invenory Management Logs/8.7/3.png>)\r
\r
6\\.	The selected columns will appear in the import history list. You can click on the list for more detail.\r
\r
![](</admin/8.Invenory Management Logs/8.7/8.6.4.png>)\r
\r
7\\.	Here you can view the detail information import and you can click the download failed rows to download the detail.\r
\r
![](</admin/8.Invenory Management Logs/8.7/8.6.5.png>)\r
`,Rr=`---\r
title: Release Note\r
section: PROLOGUE\r
order: 1\r
language: en\r
---\r
`,zr=`---\r
title: Upgrade Guide\r
section: PROLOGUE\r
order: 2\r
language: en\r
---\r
\r
**Pre-Upgrade Prerequisites**\r
\r
* **Data Sync:** Ensure your device is connected to the internet and all offline sales transactions have been fully synced to the cloud server.\r
* **OS Requirement:** Android 10 or higher is recommended for optimal stability and performance.\r
* **Free Storage:** Ensure at least 100 MB of free storage space is available on your device.\r
\r
**Step-by-Step Upgrade Process:**\r
\r
Via Google Play Store:\r
\r
* Open the Google Play Store app on your POS terminal.\r
* Search for **Mysztech POS**.\r
* Tap the Download button.\r
* Wait for the download and installation to complete.\r
* Launch the app.\r
\r
**Post-Upgrade Checklist:**\r
\r
* **Re-login Check:** Log back into your account if prompted by the system.\r
* **Hardware Test:** Perform a quick test print and verify cash drawer connection.\r
* **Catalog Check:** Verify that item lists, prices, and stock counts display accurately.\r
`,Br=`---\r
version: 2.2.2\r
releaseDate: "2026-09-24"\r
---\r
\r
**What's New:**\r
\r
* Items in each sales category now sorted A–Z.\r
* Zoom and pan the Table Layout; smoother table dragging.\r
* Expired discounts no longer applied.\r
* Smoother menu and New Sale.\r
\r
**Bug Fix:**\r
\r
* Fixed stock resetting to 0 after restart.\r
* Fixed order number stuck "pending" on waiter devices.\r
* Fixed refund receipt not printing.\r
* Fixed duplicate and false cancel kitchen tickets.\r
* Fixed receipt logo printing blank.\r
`,Vr=`---\r
version: 2.2.3\r
releaseDate: '2026-09-25'\r
---\r
\r
**What's new:**\r
\r
\\- Allow negative stock\r
\r
\\- Improve load items performance\r
`,Hr=`---\r
version: 2.2.4\r
releaseDate: '2026-09-26'\r
---\r
\r
**What's new:**\r
\r
\\- Sell even when stock is insufficient\r
\r
\\- Low-stock warning after an order\r
\r
\\- Cash drawer toggle moved to top of Printer Options\r
\r
\\- Faster item picker\r
\r
\\- Fixed refund PIN dialog and blank refund screen\r
`,Ur=`---\r
version: 2.2.5\r
releaseDate: '2026-10-07'\r
---\r
\r
**What's new:**\r
\r
\\- Improved kitchen printer processing after payment\r
\r
\\- Fixed Wi-Fi printer and cash drawer issues during settlement\r
\r
\\- Added a Digital Receipt button after settlement, allowing users to request and display the receipt QR code when needed.\r
`,Wr=`---\r
version: 2.2.6\r
releaseDate: '2026-10-09'\r
---\r
\r
**What's new:**\r
\r
* Fix open orders sometimes showing an incorrect total or missing items when reopened\r
`,Gr=`---\r
version: 2.2.7\r
releaseDate: '2026-10-16'\r
---\r
\r
**What's new:**\r
\r
\\- customers can scan their Digital Receipt QR code directly from the customer display\r
\r
\\- improved the customer display when starting a new sale or continuing a split payment\r
\r
\\- fixed an issue where the rounded payment total could appear incorrectly when showing the payment QR code\r
`,Kr=`---\r
version: 2.3.0\r
releaseDate: '2026-10-26'\r
---\r
\r
**What's new:**\\\r
\\\r
\\- added support for item prices that can be different at each outlet\r
\r
\\- added portrait mode, so you can now use the app on vertically held screens\r
\r
\\- updated sales, payments, shifts, settings, receipts, and open orders for portrait mode\r
\r
\\- improved the app's reliability when syncing updates or handling connection issues\r
\r
\\- added smoother screen changes and small visual improvements throughout the app\r
`,qr=`---\r
version: 2.3.1\r
releaseDate: '2026-10-26'\r
---\r
\r
**What's new:**\r
\r
\\- Portrait mode is now available, so you can use the app on vertically held screens.\r
\r
\\- Sales, payments, shifts, settings, receipts, and open orders have been updated for portrait mode.\r
\r
\\- Items can now have different prices at each outlet.\r
\r
\\- Improved reliability, smoother navigation, and small visual improvements.\r
`,Jr=`---
version: 2.3.2
releaseDate: '2026-10-28'
---

**What's new:**

\\- added an in-app User Guideline with a QR code and quick link to help documentation

\\- improved device selection and sign-in so the app remembers the selected device after restarting

\\- improved staff clock-out and session handling for a more reliable time-clock experience

\\- improved printer settings management

\\- fixed the green focus border that could appear after scanning with an RFID or card reader
`,Yr={};function Xr(e){let t=Yr[e];if(t)return t;t=Yr[e]=[];for(let e=0;e<128;e++){let n=String.fromCharCode(e);t.push(n)}for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t[r]=`%`+(`0`+r.toString(16).toUpperCase()).slice(-2)}return t}function Zr(e,t){typeof t!=`string`&&(t=Zr.defaultChars);let n=Xr(t);return e.replace(/(%[a-f0-9]{2})+/gi,function(e){let t=``;for(let r=0,i=e.length;r<i;r+=3){let a=parseInt(e.slice(r+1,r+3),16);if(a<128){t+=n[a];continue}if((a&224)==192&&r+3<i){let n=parseInt(e.slice(r+4,r+6),16);if((n&192)==128){let e=a<<6&1984|n&63;t+=e<128?`��`:String.fromCharCode(e),r+=3;continue}}if((a&240)==224&&r+6<i){let n=parseInt(e.slice(r+4,r+6),16),i=parseInt(e.slice(r+7,r+9),16);if((n&192)==128&&(i&192)==128){let e=a<<12&61440|n<<6&4032|i&63;t+=e<2048||e>=55296&&e<=57343?`���`:String.fromCharCode(e),r+=6;continue}}if((a&248)==240&&r+9<i){let n=parseInt(e.slice(r+4,r+6),16),i=parseInt(e.slice(r+7,r+9),16),o=parseInt(e.slice(r+10,r+12),16);if((n&192)==128&&(i&192)==128&&(o&192)==128){let e=a<<18&1835008|n<<12&258048|i<<6&4032|o&63;e<65536||e>1114111?t+=`����`:(e-=65536,t+=String.fromCharCode(55296+(e>>10),56320+(e&1023))),r+=9;continue}}t+=`�`}return t})}Zr.defaultChars=`;/?:@&=+$,#`,Zr.componentChars=``;var Qr={};function $r(e){let t=Qr[e];if(t)return t;t=Qr[e]=[];for(let e=0;e<128;e++){let n=String.fromCharCode(e);/^[0-9a-z]$/i.test(n)?t.push(n):t.push(`%`+(`0`+e.toString(16).toUpperCase()).slice(-2))}for(let n=0;n<e.length;n++)t[e.charCodeAt(n)]=e[n];return t}function ei(e,t,n){typeof t!=`string`&&(n=t,t=ei.defaultChars),n===void 0&&(n=!0);let r=$r(t),i=``;for(let t=0,a=e.length;t<a;t++){let o=e.charCodeAt(t);if(n&&o===37&&t+2<a&&/^[0-9a-f]{2}$/i.test(e.slice(t+1,t+3))){i+=e.slice(t,t+3),t+=2;continue}if(o<128){i+=r[o];continue}if(o>=55296&&o<=57343){if(o>=55296&&o<=56319&&t+1<a){let n=e.charCodeAt(t+1);if(n>=56320&&n<=57343){i+=encodeURIComponent(e[t]+e[t+1]),t++;continue}}i+=`%EF%BF%BD`;continue}i+=encodeURIComponent(e[t])}return i}ei.defaultChars=`;/?:@&=+$,-_.!~*'()#`,ei.componentChars=`-_.!~*'()`;function ti(e){let t=``;return t+=e.protocol||``,t+=e.slashes?`//`:``,t+=e.auth?e.auth+`@`:``,e.hostname&&e.hostname.indexOf(`:`)!==-1?t+=`[`+e.hostname+`]`:t+=e.hostname||``,t+=e.port?`:`+e.port:``,t+=e.pathname||``,t+=e.search||``,t+=e.hash||``,t}function ni(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}var ri=/^([a-z0-9.+-]+:)/i,ii=/:[0-9]*$/,ai=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,oi=[`%`,`/`,`?`,`;`,`#`,`'`,`{`,`}`,`|`,`\\`,`^`,"`",`<`,`>`,`"`,"`",` `,`\r`,`
`,`	`],si=[`/`,`?`,`#`],ci=255,li=/^[+a-z0-9A-Z_-]{0,63}$/,ui=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,di={javascript:!0,"javascript:":!0},fi={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function pi(e,t){if(e&&e instanceof ni)return e;let n=new ni;return n.parse(e,t),n}ni.prototype.parse=function(e,t){let n,r,i,a=e;if(a=a.trim(),!t&&e.split(`#`).length===1){let e=ai.exec(a);if(e)return this.pathname=e[1],e[2]&&(this.search=e[2]),this}let o=ri.exec(a);if(o&&(o=o[0],n=o.toLowerCase(),this.protocol=o,a=a.substr(o.length)),(t||o||a.match(/^\/\/[^@\/]+@[^@\/]+/))&&(i=a.substr(0,2)===`//`,i&&!(o&&di[o])&&(a=a.substr(2),this.slashes=!0)),!di[o]&&(i||o&&!fi[o])){let e=-1;for(let t=0;t<si.length;t++)r=a.indexOf(si[t]),r!==-1&&(e===-1||r<e)&&(e=r);let t,n;n=e===-1?a.lastIndexOf(`@`):a.lastIndexOf(`@`,e),n!==-1&&(t=a.slice(0,n),a=a.slice(n+1),this.auth=t),e=-1;for(let t=0;t<oi.length;t++)r=a.indexOf(oi[t]),r!==-1&&(e===-1||r<e)&&(e=r);e===-1&&(e=a.length),a[e-1]===`:`&&e--;let i=a.slice(0,e);a=a.slice(e),this.parseHost(i),this.hostname=this.hostname||``;let o=this.hostname[0]===`[`&&this.hostname[this.hostname.length-1]===`]`;if(!o){let e=this.hostname.split(/\./);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n&&!n.match(li)){let r=``;for(let e=0,t=n.length;e<t;e++)n.charCodeAt(e)>127?r+=`x`:r+=n[e];if(!r.match(li)){let r=e.slice(0,t),i=e.slice(t+1),o=n.match(ui);o&&(r.push(o[1]),i.unshift(o[2])),i.length&&(a=i.join(`.`)+a),this.hostname=r.join(`.`);break}}}}this.hostname.length>ci&&(this.hostname=``),o&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}let s=a.indexOf(`#`);s!==-1&&(this.hash=a.substr(s),a=a.slice(0,s));let c=a.indexOf(`?`);return c!==-1&&(this.search=a.substr(c),a=a.slice(0,c)),a&&(this.pathname=a),fi[n]&&this.hostname&&!this.pathname&&(this.pathname=``),this},ni.prototype.parseHost=function(e){let t=ii.exec(e);t&&(t=t[0],t!==`:`&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)};var mi=s({decode:()=>Zr,encode:()=>ei,format:()=>ti,parse:()=>pi}),hi=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,gi=/[\0-\x1F\x7F-\x9F]/,_i=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,vi=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,yi=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,bi=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,xi=s({Any:()=>hi,Cc:()=>gi,Cf:()=>_i,P:()=>vi,S:()=>yi,Z:()=>bi}),Si=new Uint16Array(`ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻\xA0ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌`.split(``).map(e=>e.charCodeAt(0))),Ci=new Uint16Array(`Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢`.split(``).map(e=>e.charCodeAt(0))),wi=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),Ti=String.fromCodePoint??function(e){let t=``;return e>65535&&(e-=65536,t+=String.fromCharCode(e>>>10&1023|55296),e=56320|e&1023),t+=String.fromCharCode(e),t};function Ei(e){return e>=55296&&e<=57343||e>1114111?65533:wi.get(e)??e}var Di;(function(e){e[e.NUM=35]=`NUM`,e[e.SEMI=59]=`SEMI`,e[e.EQUALS=61]=`EQUALS`,e[e.ZERO=48]=`ZERO`,e[e.NINE=57]=`NINE`,e[e.LOWER_A=97]=`LOWER_A`,e[e.LOWER_F=102]=`LOWER_F`,e[e.LOWER_X=120]=`LOWER_X`,e[e.LOWER_Z=122]=`LOWER_Z`,e[e.UPPER_A=65]=`UPPER_A`,e[e.UPPER_F=70]=`UPPER_F`,e[e.UPPER_Z=90]=`UPPER_Z`})(Di||={});var Oi=32,ki;(function(e){e[e.VALUE_LENGTH=49152]=`VALUE_LENGTH`,e[e.BRANCH_LENGTH=16256]=`BRANCH_LENGTH`,e[e.JUMP_TABLE=127]=`JUMP_TABLE`})(ki||={});function Ai(e){return e>=Di.ZERO&&e<=Di.NINE}function ji(e){return e>=Di.UPPER_A&&e<=Di.UPPER_F||e>=Di.LOWER_A&&e<=Di.LOWER_F}function Mi(e){return e>=Di.UPPER_A&&e<=Di.UPPER_Z||e>=Di.LOWER_A&&e<=Di.LOWER_Z||Ai(e)}function Ni(e){return e===Di.EQUALS||Mi(e)}var Pi;(function(e){e[e.EntityStart=0]=`EntityStart`,e[e.NumericStart=1]=`NumericStart`,e[e.NumericDecimal=2]=`NumericDecimal`,e[e.NumericHex=3]=`NumericHex`,e[e.NamedEntity=4]=`NamedEntity`})(Pi||={});var Fi;(function(e){e[e.Legacy=0]=`Legacy`,e[e.Strict=1]=`Strict`,e[e.Attribute=2]=`Attribute`})(Fi||={});var Ii=class{constructor(e,t,n){this.decodeTree=e,this.emitCodePoint=t,this.errors=n,this.state=Pi.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=Fi.Strict}startEntity(e){this.decodeMode=e,this.state=Pi.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(e,t){switch(this.state){case Pi.EntityStart:return e.charCodeAt(t)===Di.NUM?(this.state=Pi.NumericStart,this.consumed+=1,this.stateNumericStart(e,t+1)):(this.state=Pi.NamedEntity,this.stateNamedEntity(e,t));case Pi.NumericStart:return this.stateNumericStart(e,t);case Pi.NumericDecimal:return this.stateNumericDecimal(e,t);case Pi.NumericHex:return this.stateNumericHex(e,t);case Pi.NamedEntity:return this.stateNamedEntity(e,t)}}stateNumericStart(e,t){return t>=e.length?-1:(e.charCodeAt(t)|Oi)===Di.LOWER_X?(this.state=Pi.NumericHex,this.consumed+=1,this.stateNumericHex(e,t+1)):(this.state=Pi.NumericDecimal,this.stateNumericDecimal(e,t))}addToNumericResult(e,t,n,r){if(t!==n){let i=n-t;this.result=this.result*r**+i+parseInt(e.substr(t,i),r),this.consumed+=i}}stateNumericHex(e,t){let n=t;for(;t<e.length;){let r=e.charCodeAt(t);if(Ai(r)||ji(r))t+=1;else return this.addToNumericResult(e,n,t,16),this.emitNumericEntity(r,3)}return this.addToNumericResult(e,n,t,16),-1}stateNumericDecimal(e,t){let n=t;for(;t<e.length;){let r=e.charCodeAt(t);if(Ai(r))t+=1;else return this.addToNumericResult(e,n,t,10),this.emitNumericEntity(r,2)}return this.addToNumericResult(e,n,t,10),-1}emitNumericEntity(e,t){var n;if(this.consumed<=t)return(n=this.errors)==null||n.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(e===Di.SEMI)this.consumed+=1;else if(this.decodeMode===Fi.Strict)return 0;return this.emitCodePoint(Ei(this.result),this.consumed),this.errors&&(e!==Di.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(e,t){let{decodeTree:n}=this,r=n[this.treeIndex],i=(r&ki.VALUE_LENGTH)>>14;for(;t<e.length;t++,this.excess++){let a=e.charCodeAt(t);if(this.treeIndex=Li(n,r,this.treeIndex+Math.max(1,i),a),this.treeIndex<0)return this.result===0||this.decodeMode===Fi.Attribute&&(i===0||Ni(a))?0:this.emitNotTerminatedNamedEntity();if(r=n[this.treeIndex],i=(r&ki.VALUE_LENGTH)>>14,i!==0){if(a===Di.SEMI)return this.emitNamedEntityData(this.treeIndex,i,this.consumed+this.excess);this.decodeMode!==Fi.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var e;let{result:t,decodeTree:n}=this,r=(n[t]&ki.VALUE_LENGTH)>>14;return this.emitNamedEntityData(t,r,this.consumed),(e=this.errors)==null||e.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(e,t,n){let{decodeTree:r}=this;return this.emitCodePoint(t===1?r[e]&~ki.VALUE_LENGTH:r[e+1],n),t===3&&this.emitCodePoint(r[e+2],n),n}end(){var e;switch(this.state){case Pi.NamedEntity:return this.result!==0&&(this.decodeMode!==Fi.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case Pi.NumericDecimal:return this.emitNumericEntity(0,2);case Pi.NumericHex:return this.emitNumericEntity(0,3);case Pi.NumericStart:return(e=this.errors)==null||e.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case Pi.EntityStart:return 0}}};function L(e){let t=``,n=new Ii(e,e=>t+=Ti(e));return function(e,r){let i=0,a=0;for(;(a=e.indexOf(`&`,a))>=0;){t+=e.slice(i,a),n.startEntity(r);let o=n.write(e,a+1);if(o<0){i=a+n.end();break}i=a+o,a=o===0?i+1:i}let o=t+e.slice(i);return t=``,o}}function Li(e,t,n,r){let i=(t&ki.BRANCH_LENGTH)>>7,a=t&ki.JUMP_TABLE;if(i===0)return a!==0&&r===a?n:-1;if(a){let t=r-a;return t<0||t>=i?-1:e[n+t]-1}let o=n,s=o+i-1;for(;o<=s;){let t=o+s>>>1,n=e[t];if(n<r)o=t+1;else if(n>r)s=t-1;else return e[t+i]}return-1}var Ri=L(Si);L(Ci);function zi(e,t=Fi.Legacy){return Ri(e,t)}function Bi(e){return Ri(e,Fi.Strict)}var Vi=s({arrayReplaceAt:()=>qi,asciiTrim:()=>ha,assign:()=>Ki,escapeHtml:()=>oa,escapeRE:()=>ca,fromCodePoint:()=>Yi,has:()=>Gi,isMdAsciiPunct:()=>fa,isPunctChar:()=>ua,isPunctCharCode:()=>da,isSpace:()=>R,isString:()=>Ui,isValidEntityCode:()=>Ji,isWhiteSpace:()=>la,lib:()=>ga,normalizeReference:()=>pa,unescapeAll:()=>ta,unescapeMd:()=>ea});function Hi(e){return Object.prototype.toString.call(e)}function Ui(e){return Hi(e)===`[object String]`}var Wi=Object.prototype.hasOwnProperty;function Gi(e,t){return Wi.call(e,t)}function Ki(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){if(t){if(typeof t!=`object`)throw TypeError(t+`must be object`);Object.keys(t).forEach(function(n){e[n]=t[n]})}}),e}function qi(e,t,n){return[].concat(e.slice(0,t),n,e.slice(t+1))}function Ji(e){return!(e>=55296&&e<=57343||e>=64976&&e<=65007||(e&65535)==65535||(e&65535)==65534||e>=0&&e<=8||e===11||e>=14&&e<=31||e>=127&&e<=159||e>1114111)}function Yi(e){if(e>65535){e-=65536;let t=55296+(e>>10),n=56320+(e&1023);return String.fromCharCode(t,n)}return String.fromCharCode(e)}var Xi=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,Zi=RegExp(Xi.source+`|&([a-z#][a-z0-9]{1,31});`,`gi`),Qi=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function $i(e,t){if(t.charCodeAt(0)===35&&Qi.test(t)){let n=t[1].toLowerCase()===`x`?parseInt(t.slice(2),16):parseInt(t.slice(1),10);return Ji(n)?Yi(n):e}let n=zi(e);return n===e?e:n}function ea(e){return e.indexOf(`\\`)<0?e:e.replace(Xi,`$1`)}function ta(e){return e.indexOf(`\\`)<0&&e.indexOf(`&`)<0?e:e.replace(Zi,function(e,t,n){return t||$i(e,n)})}var na=/[&<>"]/,ra=/[&<>"]/g,ia={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`};function aa(e){return ia[e]}function oa(e){return na.test(e)?e.replace(ra,aa):e}var sa=/[.?*+^$[\]\\(){}|-]/g;function ca(e){return e.replace(sa,`\\$&`)}function R(e){switch(e){case 9:case 32:return!0}return!1}function la(e){if(e>=8192&&e<=8202)return!0;switch(e){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function ua(e){return vi.test(e)||yi.test(e)}function da(e){return ua(Yi(e))}function fa(e){switch(e){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function pa(e){return e=e.trim().replace(/\s+/g,` `),e.toLowerCase().toUpperCase()}function ma(e){return e===32||e===9||e===10||e===13}function ha(e){let t=0;for(;t<e.length&&ma(e.charCodeAt(t));t++);let n=e.length-1;for(;n>=t&&ma(e.charCodeAt(n));n--);return e.slice(t,n+1)}var ga={mdurl:mi,ucmicro:xi};function _a(e,t,n){let r,i,a,o,s=e.posMax,c=e.pos;for(e.pos=t+1,r=1;e.pos<s;){if(a=e.src.charCodeAt(e.pos),a===93&&(r--,r===0)){i=!0;break}if(o=e.pos,e.md.inline.skipToken(e),a===91){if(o===e.pos-1)r++;else if(n)return e.pos=c,-1}}let l=-1;return i&&(l=e.pos),e.pos=c,l}function va(e,t,n){let r,i=t,a={ok:!1,pos:0,str:``};if(e.charCodeAt(i)===60){for(i++;i<n;){if(r=e.charCodeAt(i),r===10||r===60)return a;if(r===62)return a.pos=i+1,a.str=ta(e.slice(t+1,i)),a.ok=!0,a;if(r===92&&i+1<n){i+=2;continue}i++}return a}let o=0;for(;i<n&&(r=e.charCodeAt(i),!(r===32||r<32||r===127));){if(r===92&&i+1<n){if(e.charCodeAt(i+1)===32){i++;continue}i+=2;continue}if(r===40&&(o++,o>32))return a;if(r===41){if(o===0)break;o--}i++}return t===i||o!==0?a:(a.str=ta(e.slice(t,i)),a.pos=i,a.ok=!0,a)}function ya(e,t,n,r){let i,a=t,o={ok:!1,can_continue:!1,pos:0,str:``,marker:0};if(r)o.str=r.str,o.marker=r.marker;else{if(a>=n)return o;let r=e.charCodeAt(a);if(r!==34&&r!==39&&r!==40)return o;t++,a++,r===40&&(r=41),o.marker=r}for(;a<n;){if(i=e.charCodeAt(a),i===o.marker)return o.pos=a+1,o.str+=ta(e.slice(t,a)),o.ok=!0,o;if(i===40&&o.marker===41)return o;i===92&&a+1<n&&a++,a++}return o.can_continue=!0,o.str+=ta(e.slice(t,a)),o}var ba=s({parseLinkDestination:()=>va,parseLinkLabel:()=>_a,parseLinkTitle:()=>ya}),xa={};xa.code_inline=function(e,t,n,r,i){let a=e[t];return`<code`+i.renderAttrs(a)+`>`+oa(a.content)+`</code>`},xa.code_block=function(e,t,n,r,i){let a=e[t];return`<pre`+i.renderAttrs(a)+`><code>`+oa(e[t].content)+`</code></pre>
`},xa.fence=function(e,t,n,r,i){let a=e[t],o=a.info?ta(a.info).trim():``,s=``,c=``;if(o){let e=o.split(/(\s+)/g);s=e[0],c=e.slice(2).join(``)}let l;if(l=n.highlight&&n.highlight(a.content,s,c)||oa(a.content),l.indexOf(`<pre`)===0)return l+`
`;if(o){let e=a.attrIndex(`class`),t=a.attrs?a.attrs.slice():[];e<0?t.push([`class`,n.langPrefix+s]):(t[e]=t[e].slice(),t[e][1]+=` `+n.langPrefix+s);let r={attrs:t};return`<pre><code${i.renderAttrs(r)}>${l}</code></pre>\n`}return`<pre><code${i.renderAttrs(a)}>${l}</code></pre>\n`},xa.image=function(e,t,n,r,i){let a=e[t];return a.attrs[a.attrIndex(`alt`)][1]=i.renderInlineAsText(a.children,n,r),i.renderToken(e,t,n)},xa.hardbreak=function(e,t,n){return n.xhtmlOut?`<br />
`:`<br>
`},xa.softbreak=function(e,t,n){return n.breaks?n.xhtmlOut?`<br />
`:`<br>
`:`
`},xa.text=function(e,t){return oa(e[t].content)},xa.html_block=function(e,t){return e[t].content},xa.html_inline=function(e,t){return e[t].content};function Sa(){this.rules=Ki({},xa)}Sa.prototype.renderAttrs=function(e){let t,n,r;if(!e.attrs)return``;for(r=``,t=0,n=e.attrs.length;t<n;t++)r+=` `+oa(e.attrs[t][0])+`="`+oa(e.attrs[t][1])+`"`;return r},Sa.prototype.renderToken=function(e,t,n){let r=e[t],i=``;if(r.hidden)return``;r.block&&r.nesting!==-1&&t&&e[t-1].hidden&&(i+=`
`),i+=(r.nesting===-1?`</`:`<`)+r.tag,i+=this.renderAttrs(r),r.nesting===0&&n.xhtmlOut&&(i+=` /`);let a=!1;if(r.block&&(a=!0,r.nesting===1&&t+1<e.length)){let n=e[t+1];(n.type===`inline`||n.hidden||n.nesting===-1&&n.tag===r.tag)&&(a=!1)}return i+=a?`>
`:`>`,i},Sa.prototype.renderInline=function(e,t,n){let r=``,i=this.rules;for(let a=0,o=e.length;a<o;a++){let o=e[a].type;i[o]===void 0?r+=this.renderToken(e,a,t):r+=i[o](e,a,t,n,this)}return r},Sa.prototype.renderInlineAsText=function(e,t,n){let r=``;for(let i=0,a=e.length;i<a;i++)switch(e[i].type){case`text`:r+=e[i].content;break;case`image`:r+=this.renderInlineAsText(e[i].children,t,n);break;case`html_inline`:case`html_block`:r+=e[i].content;break;case`softbreak`:case`hardbreak`:r+=`
`}return r},Sa.prototype.render=function(e,t,n){let r=``,i=this.rules;for(let a=0,o=e.length;a<o;a++){let o=e[a].type;o===`inline`?r+=this.renderInline(e[a].children,t,n):i[o]===void 0?r+=this.renderToken(e,a,t,n):r+=i[o](e,a,t,n,this)}return r};function Ca(){this.__rules__=[],this.__cache__=null}Ca.prototype.__find__=function(e){for(let t=0;t<this.__rules__.length;t++)if(this.__rules__[t].name===e)return t;return-1},Ca.prototype.__compile__=function(){let e=this,t=[``];e.__rules__.forEach(function(e){e.enabled&&e.alt.forEach(function(e){t.indexOf(e)<0&&t.push(e)})}),e.__cache__={},t.forEach(function(t){e.__cache__[t]=[],e.__rules__.forEach(function(n){n.enabled&&(t&&n.alt.indexOf(t)<0||e.__cache__[t].push(n.fn))})})},Ca.prototype.at=function(e,t,n){let r=this.__find__(e),i=n||{};if(r===-1)throw Error(`Parser rule not found: `+e);this.__rules__[r].fn=t,this.__rules__[r].alt=i.alt||[],this.__cache__=null},Ca.prototype.before=function(e,t,n,r){let i=this.__find__(e),a=r||{};if(i===-1)throw Error(`Parser rule not found: `+e);this.__rules__.splice(i,0,{name:t,enabled:!0,fn:n,alt:a.alt||[]}),this.__cache__=null},Ca.prototype.after=function(e,t,n,r){let i=this.__find__(e),a=r||{};if(i===-1)throw Error(`Parser rule not found: `+e);this.__rules__.splice(i+1,0,{name:t,enabled:!0,fn:n,alt:a.alt||[]}),this.__cache__=null},Ca.prototype.push=function(e,t,n){let r=n||{};this.__rules__.push({name:e,enabled:!0,fn:t,alt:r.alt||[]}),this.__cache__=null},Ca.prototype.enable=function(e,t){Array.isArray(e)||(e=[e]);let n=[];return e.forEach(function(e){let r=this.__find__(e);if(r<0){if(t)return;throw Error(`Rules manager: invalid rule name `+e)}this.__rules__[r].enabled=!0,n.push(e)},this),this.__cache__=null,n},Ca.prototype.enableOnly=function(e,t){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(e){e.enabled=!1}),this.enable(e,t)},Ca.prototype.disable=function(e,t){Array.isArray(e)||(e=[e]);let n=[];return e.forEach(function(e){let r=this.__find__(e);if(r<0){if(t)return;throw Error(`Rules manager: invalid rule name `+e)}this.__rules__[r].enabled=!1,n.push(e)},this),this.__cache__=null,n},Ca.prototype.getRules=function(e){return this.__cache__===null&&this.__compile__(),this.__cache__[e]||[]};function wa(e,t,n){this.type=e,this.tag=t,this.attrs=null,this.map=null,this.nesting=n,this.level=0,this.children=null,this.content=``,this.markup=``,this.info=``,this.meta=null,this.block=!1,this.hidden=!1}wa.prototype.attrIndex=function(e){if(!this.attrs)return-1;let t=this.attrs;for(let n=0,r=t.length;n<r;n++)if(t[n][0]===e)return n;return-1},wa.prototype.attrPush=function(e){this.attrs?this.attrs.push(e):this.attrs=[e]},wa.prototype.attrSet=function(e,t){let n=this.attrIndex(e),r=[e,t];n<0?this.attrPush(r):this.attrs[n]=r},wa.prototype.attrGet=function(e){let t=this.attrIndex(e),n=null;return t>=0&&(n=this.attrs[t][1]),n},wa.prototype.attrJoin=function(e,t){let n=this.attrIndex(e);n<0?this.attrPush([e,t]):this.attrs[n][1]=this.attrs[n][1]+` `+t};function Ta(e,t,n){this.src=e,this.env=n,this.tokens=[],this.inlineMode=!1,this.md=t}Ta.prototype.Token=wa;var Ea=/\r\n?|\n/g,Da=/\0/g;function Oa(e){let t;t=e.src.replace(Ea,`
`),t=t.replace(Da,`�`),e.src=t}function ka(e){let t;e.inlineMode?(t=new e.Token(`inline`,``,0),t.content=e.src,t.map=[0,1],t.children=[],e.tokens.push(t)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}function Aa(e){let t=e.tokens;for(let n=0,r=t.length;n<r;n++){let r=t[n];r.type===`inline`&&e.md.inline.parse(r.content,e.md,e.env,r.children)}}function ja(e){return/^<a[>\s]/i.test(e)}function Ma(e){return/^<\/a\s*>/i.test(e)}function Na(e){let t=e.tokens;if(e.md.options.linkify)for(let n=0,r=t.length;n<r;n++){if(t[n].type!==`inline`||!e.md.linkify.pretest(t[n].content))continue;let r=t[n].children,i=[],a=0;for(let t=r.length-1;t>=0;t--){let n=r[t];if(n.type===`link_close`){for(t--;r[t].level!==n.level&&r[t].type!==`link_open`;)t--;continue}if(n.type===`html_inline`&&(ja(n.content)&&a>0&&a--,Ma(n.content)&&a++),!(a>0)&&n.type===`text`&&e.md.linkify.test(n.content)){let a=n.content,o=e.md.linkify.match(a),s=[],c=n.level,l=0;o.length>0&&o[0].index===0&&t>0&&r[t-1].type===`text_special`&&(o=o.slice(1));for(let t=0;t<o.length;t++){let n=o[t].url,r=e.md.normalizeLink(n);if(!e.md.validateLink(r))continue;let i=o[t].text;i=o[t].schema?o[t].schema===`mailto:`&&!/^mailto:/i.test(i)?e.md.normalizeLinkText(`mailto:`+i).replace(/^mailto:/,``):e.md.normalizeLinkText(i):e.md.normalizeLinkText(`http://`+i).replace(/^http:\/\//,``);let u=o[t].index;if(u>l){let t=new e.Token(`text`,``,0);t.content=a.slice(l,u),t.level=c,s.push(t)}let d=new e.Token(`link_open`,`a`,1);d.attrs=[[`href`,r]],d.level=c++,d.markup=`linkify`,d.info=`auto`,s.push(d);let f=new e.Token(`text`,``,0);f.content=i,f.level=c,s.push(f);let p=new e.Token(`link_close`,`a`,-1);p.level=--c,p.markup=`linkify`,p.info=`auto`,s.push(p),l=o[t].lastIndex}if(l<a.length){let t=new e.Token(`text`,``,0);t.content=a.slice(l),t.level=c,s.push(t)}i.push({index:t,nodes:s})}}if(i.length>0){let e=r.length;for(let t of i)e+=t.nodes.length-1;let a=Array(e),o=0,s=0;i.reverse();for(let e=0;e<r.length;e++){let t=i[o];if(t?.index===e){for(let e of t.nodes)a[s++]=e;o++}else a[s++]=r[e]}t[n].children=a}}}var Pa=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,Fa=/\((c|tm|r)\)/i,Ia=/\((c|tm|r)\)/gi,La={c:`©`,r:`®`,tm:`™`};function Ra(e,t){return La[t.toLowerCase()]}function za(e){let t=0;for(let n=e.length-1;n>=0;n--){let r=e[n];r.type===`text`&&!t&&(r.content=r.content.replace(Ia,Ra)),r.type===`link_open`&&r.info===`auto`&&t--,r.type===`link_close`&&r.info===`auto`&&t++}}function Ba(e){let t=0;for(let n=e.length-1;n>=0;n--){let r=e[n];r.type===`text`&&!t&&Pa.test(r.content)&&(r.content=r.content.replace(/\+-/g,`±`).replace(/\.{2,}/g,`…`).replace(/([?!])…/g,`$1..`).replace(/([?!]){4,}/g,`$1$1$1`).replace(/,{2,}/g,`,`).replace(/(^|[^-])---(?=[^-]|$)/gm,`$1—`).replace(/(^|\s)--(?=\s|$)/gm,`$1–`).replace(/(^|[^-\s])--(?=[^-\s]|$)/gm,`$1–`)),r.type===`link_open`&&r.info===`auto`&&t--,r.type===`link_close`&&r.info===`auto`&&t++}}function Va(e){let t;if(e.md.options.typographer)for(t=e.tokens.length-1;t>=0;t--)e.tokens[t].type===`inline`&&(Fa.test(e.tokens[t].content)&&za(e.tokens[t].children),Pa.test(e.tokens[t].content)&&Ba(e.tokens[t].children))}var Ha=/['"]/,Ua=/['"]/g,Wa=`’`;function Ga(e,t,n,r){e[t]||(e[t]=[]),e[t].push({pos:n,ch:r})}function Ka(e,t){let n=``,r=0;t.sort((e,t)=>e.pos-t.pos);for(let i=0;i<t.length;i++){let a=t[i];n+=e.slice(r,a.pos)+a.ch,r=a.pos+1}return n+e.slice(r)}function qa(e,t){let n,r=[],i={};for(let a=0;a<e.length;a++){let o=e[a],s=e[a].level;for(n=r.length-1;n>=0&&!(r[n].level<=s);n--);if(r.length=n+1,o.type!==`text`)continue;let c=o.content,l=0,u=c.length;OUTER:for(;l<u;){Ua.lastIndex=l;let o=Ua.exec(c);if(!o)break;let d=!0,f=!0;l=o.index+1;let p=o[0]===`'`,m=32;if(o.index-1>=0)m=c.charCodeAt(o.index-1);else for(n=a-1;n>=0&&e[n].type!==`softbreak`&&e[n].type!==`hardbreak`;n--)if(e[n].content){m=e[n].content.charCodeAt(e[n].content.length-1);break}let h=32;if(l<u)h=c.charCodeAt(l);else for(n=a+1;n<e.length&&e[n].type!==`softbreak`&&e[n].type!==`hardbreak`;n++)if(e[n].content){h=e[n].content.charCodeAt(0);break}let g=fa(m)||da(m),_=fa(h)||da(h),v=la(m),y=la(h);if(y?d=!1:_&&(v||g||(d=!1)),v?f=!1:g&&(y||_||(f=!1)),h===34&&o[0]===`"`&&m>=48&&m<=57&&(f=d=!1),d&&f&&(d=g,f=_),!d&&!f){p&&Ga(i,a,o.index,Wa);continue}if(f)for(n=r.length-1;n>=0;n--){let e=r[n];if(r[n].level<s)break;if(e.single===p&&r[n].level===s){e=r[n];let s,c;p?(s=t.md.options.quotes[2],c=t.md.options.quotes[3]):(s=t.md.options.quotes[0],c=t.md.options.quotes[1]),Ga(i,a,o.index,c),Ga(i,e.token,e.pos,s),r.length=n;continue OUTER}}d?r.push({token:a,pos:o.index,single:p,level:s}):f&&p&&Ga(i,a,o.index,Wa)}}Object.keys(i).forEach(function(t){e[t].content=Ka(e[t].content,i[t])})}function Ja(e){if(e.md.options.typographer)for(let t=e.tokens.length-1;t>=0;t--)e.tokens[t].type!==`inline`||!Ha.test(e.tokens[t].content)||qa(e.tokens[t].children,e)}function Ya(e){let t,n,r=e.tokens,i=r.length;for(let e=0;e<i;e++){if(r[e].type!==`inline`)continue;let i=r[e].children,a=i.length;for(t=0;t<a;t++)i[t].type===`text_special`&&(i[t].type=`text`);for(t=n=0;t<a;t++)i[t].type===`text`&&t+1<a&&i[t+1].type===`text`?i[t+1].content=i[t].content+i[t+1].content:(t!==n&&(i[n]=i[t]),n++);t!==n&&(i.length=n)}}var Xa=[[`normalize`,Oa],[`block`,ka],[`inline`,Aa],[`linkify`,Na],[`replacements`,Va],[`smartquotes`,Ja],[`text_join`,Ya]];function Za(){this.ruler=new Ca;for(let e=0;e<Xa.length;e++)this.ruler.push(Xa[e][0],Xa[e][1])}Za.prototype.process=function(e){let t=this.ruler.getRules(``);for(let n=0,r=t.length;n<r;n++)t[n](e)},Za.prototype.State=Ta;function Qa(e,t,n,r){this.src=e,this.md=t,this.env=n,this.tokens=r,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType=`root`,this.level=0;let i=this.src;for(let e=0,t=0,n=0,r=0,a=i.length,o=!1;t<a;t++){let s=i.charCodeAt(t);if(!o){if(R(s)){n++,s===9?r+=4-r%4:r++;continue}o=!0}(s===10||t===a-1)&&(s!==10&&t++,this.bMarks.push(e),this.eMarks.push(t),this.tShift.push(n),this.sCount.push(r),this.bsCount.push(0),o=!1,n=0,r=0,e=t+1)}this.bMarks.push(i.length),this.eMarks.push(i.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}Qa.prototype.push=function(e,t,n){let r=new wa(e,t,n);return r.block=!0,n<0&&this.level--,r.level=this.level,n>0&&this.level++,this.tokens.push(r),r},Qa.prototype.isEmpty=function(e){return this.bMarks[e]+this.tShift[e]>=this.eMarks[e]},Qa.prototype.skipEmptyLines=function(e){for(let t=this.lineMax;e<t&&!(this.bMarks[e]+this.tShift[e]<this.eMarks[e]);e++);return e},Qa.prototype.skipSpaces=function(e){for(let t=this.src.length;e<t&&R(this.src.charCodeAt(e));e++);return e},Qa.prototype.skipSpacesBack=function(e,t){if(e<=t)return e;for(;e>t;)if(!R(this.src.charCodeAt(--e)))return e+1;return e},Qa.prototype.skipChars=function(e,t){for(let n=this.src.length;e<n&&this.src.charCodeAt(e)===t;e++);return e},Qa.prototype.skipCharsBack=function(e,t,n){if(e<=n)return e;for(;e>n;)if(t!==this.src.charCodeAt(--e))return e+1;return e},Qa.prototype.getLines=function(e,t,n,r){if(e>=t)return``;let i=Array(t-e);for(let a=0,o=e;o<t;o++,a++){let e=0,s=this.bMarks[o],c=s,l;for(l=o+1<t||r?this.eMarks[o]+1:this.eMarks[o];c<l&&e<n;){let t=this.src.charCodeAt(c);if(R(t))t===9?e+=4-(e+this.bsCount[o])%4:e++;else if(c-s<this.tShift[o])e++;else break;c++}e>n?i[a]=Array(e-n+1).join(` `)+this.src.slice(c,l):i[a]=this.src.slice(c,l)}return i.join(``)},Qa.prototype.Token=wa;var $a=65536;function eo(e,t){let n=e.bMarks[t]+e.tShift[t],r=e.eMarks[t];return e.src.slice(n,r)}function to(e){let t=[],n=e.length,r=0,i=e.charCodeAt(r),a=!1,o=0,s=``;for(;r<n;)i===124&&(a?(s+=e.substring(o,r-1),o=r):(t.push(s+e.substring(o,r)),s=``,o=r+1)),a=i===92,r++,i=e.charCodeAt(r);return t.push(s+e.substring(o)),t}function no(e,t,n,r){if(t+2>n)return!1;let i=t+1;if(e.sCount[i]<e.blkIndent||e.sCount[i]-e.blkIndent>=4)return!1;let a=e.bMarks[i]+e.tShift[i];if(a>=e.eMarks[i])return!1;let o=e.src.charCodeAt(a++);if(o!==124&&o!==45&&o!==58||a>=e.eMarks[i])return!1;let s=e.src.charCodeAt(a++);if(s!==124&&s!==45&&s!==58&&!R(s)||o===45&&R(s))return!1;for(;a<e.eMarks[i];){let t=e.src.charCodeAt(a);if(t!==124&&t!==45&&t!==58&&!R(t))return!1;a++}let c=eo(e,t+1),l=c.split(`|`),u=[];for(let e=0;e<l.length;e++){let t=l[e].trim();if(!t){if(e===0||e===l.length-1)continue;return!1}if(!/^:?-+:?$/.test(t))return!1;t.charCodeAt(t.length-1)===58?u.push(t.charCodeAt(0)===58?`center`:`right`):t.charCodeAt(0)===58?u.push(`left`):u.push(``)}if(c=eo(e,t).trim(),c.indexOf(`|`)===-1||e.sCount[t]-e.blkIndent>=4)return!1;l=to(c),l.length&&l[0]===``&&l.shift(),l.length&&l[l.length-1]===``&&l.pop();let d=l.length;if(d===0||d!==u.length)return!1;if(r)return!0;let f=e.parentType;e.parentType=`table`;let p=e.md.block.ruler.getRules(`blockquote`),m=e.push(`table_open`,`table`,1),h=[t,0];m.map=h;let g=e.push(`thead_open`,`thead`,1);g.map=[t,t+1];let _=e.push(`tr_open`,`tr`,1);_.map=[t,t+1];for(let t=0;t<l.length;t++){let n=e.push(`th_open`,`th`,1);u[t]&&(n.attrs=[[`style`,`text-align:`+u[t]]]);let r=e.push(`inline`,``,0);r.content=l[t].trim(),r.children=[],e.push(`th_close`,`th`,-1)}e.push(`tr_close`,`tr`,-1),e.push(`thead_close`,`thead`,-1);let v,y=0;for(i=t+2;i<n&&!(e.sCount[i]<e.blkIndent);i++){let r=!1;for(let t=0,a=p.length;t<a;t++)if(p[t](e,i,n,!0)){r=!0;break}if(r||(c=eo(e,i).trim(),!c)||e.sCount[i]-e.blkIndent>=4||(l=to(c),l.length&&l[0]===``&&l.shift(),l.length&&l[l.length-1]===``&&l.pop(),y+=d-l.length,y>$a))break;if(i===t+2){let n=e.push(`tbody_open`,`tbody`,1);n.map=v=[t+2,0]}let a=e.push(`tr_open`,`tr`,1);a.map=[i,i+1];for(let t=0;t<d;t++){let n=e.push(`td_open`,`td`,1);u[t]&&(n.attrs=[[`style`,`text-align:`+u[t]]]);let r=e.push(`inline`,``,0);r.content=l[t]?l[t].trim():``,r.children=[],e.push(`td_close`,`td`,-1)}e.push(`tr_close`,`tr`,-1)}return v&&(e.push(`tbody_close`,`tbody`,-1),v[1]=i),e.push(`table_close`,`table`,-1),h[1]=i,e.parentType=f,e.line=i,!0}function ro(e,t,n){if(e.sCount[t]-e.blkIndent<4)return!1;let r=t+1,i=r;for(;r<n;){if(e.isEmpty(r)){r++;continue}if(e.sCount[r]-e.blkIndent>=4){r++,i=r;continue}break}e.line=i;let a=e.push(`code_block`,`code`,0);return a.content=e.getLines(t,i,4+e.blkIndent,!1)+`
`,a.map=[t,e.line],!0}function io(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||i+3>a)return!1;let o=e.src.charCodeAt(i);if(o!==126&&o!==96)return!1;let s=i;i=e.skipChars(i,o);let c=i-s;if(c<3)return!1;let l=e.src.slice(s,i),u=e.src.slice(i,a);if(o===96&&u.indexOf(String.fromCharCode(o))>=0)return!1;if(r)return!0;let d=t,f=!1;for(;d++,!(d>=n||(i=s=e.bMarks[d]+e.tShift[d],a=e.eMarks[d],i<a&&e.sCount[d]<e.blkIndent));)if(e.src.charCodeAt(i)===o&&!(e.sCount[d]-e.blkIndent>=4)&&(i=e.skipChars(i,o),!(i-s<c)&&(i=e.skipSpaces(i),!(i<a)))){f=!0;break}c=e.sCount[t],e.line=d+ +!!f;let p=e.push(`fence`,`code`,0);return p.info=u,p.content=e.getLines(t+1,d,c,!0),p.markup=l,p.map=[t,e.line],!0}function ao(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t],o=e.lineMax;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(i)!==62)return!1;if(r)return!0;let s=[],c=[],l=[],u=[],d=e.md.block.ruler.getRules(`blockquote`),f=e.parentType;e.parentType=`blockquote`;let p=!1,m;for(m=t;m<n;m++){let t=e.sCount[m]<e.blkIndent;if(i=e.bMarks[m]+e.tShift[m],a=e.eMarks[m],i>=a)break;if(e.src.charCodeAt(i++)===62&&!t){let t=e.sCount[m]+1,n,r;e.src.charCodeAt(i)===32?(i++,t++,r=!1,n=!0):e.src.charCodeAt(i)===9?(n=!0,(e.bsCount[m]+t)%4==3?(i++,t++,r=!1):r=!0):n=!1;let o=t;for(s.push(e.bMarks[m]),e.bMarks[m]=i;i<a;){let t=e.src.charCodeAt(i);if(R(t))t===9?o+=4-(o+e.bsCount[m]+ +!!r)%4:o++;else break;i++}p=i>=a,c.push(e.bsCount[m]),e.bsCount[m]=e.sCount[m]+1+ +!!n,l.push(e.sCount[m]),e.sCount[m]=o-t,u.push(e.tShift[m]),e.tShift[m]=i-e.bMarks[m];continue}if(p)break;let r=!1;for(let t=0,i=d.length;t<i;t++)if(d[t](e,m,n,!0)){r=!0;break}if(r){e.lineMax=m,e.blkIndent!==0&&(s.push(e.bMarks[m]),c.push(e.bsCount[m]),u.push(e.tShift[m]),l.push(e.sCount[m]),e.sCount[m]-=e.blkIndent);break}s.push(e.bMarks[m]),c.push(e.bsCount[m]),u.push(e.tShift[m]),l.push(e.sCount[m]),e.sCount[m]=-1}let h=e.blkIndent;e.blkIndent=0;let g=e.push(`blockquote_open`,`blockquote`,1);g.markup=`>`;let _=[t,0];g.map=_,e.md.block.tokenize(e,t,m);let v=e.push(`blockquote_close`,`blockquote`,-1);v.markup=`>`,e.lineMax=o,e.parentType=f,_[1]=e.line;for(let n=0;n<u.length;n++)e.bMarks[n+t]=s[n],e.tShift[n+t]=u[n],e.sCount[n+t]=l[n],e.bsCount[n+t]=c[n];return e.blkIndent=h,!0}function oo(e,t,n,r){let i=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let a=e.bMarks[t]+e.tShift[t],o=e.src.charCodeAt(a++);if(o!==42&&o!==45&&o!==95)return!1;let s=1;for(;a<i;){let t=e.src.charCodeAt(a++);if(t!==o&&!R(t))return!1;t===o&&s++}if(s<3)return!1;if(r)return!0;e.line=t+1;let c=e.push(`hr`,`hr`,0);return c.map=[t,e.line],c.markup=Array(s+1).join(String.fromCharCode(o)),!0}function so(e,t){let n=e.eMarks[t],r=e.bMarks[t]+e.tShift[t],i=e.src.charCodeAt(r++);return i!==42&&i!==45&&i!==43||r<n&&!R(e.src.charCodeAt(r))?-1:r}function co(e,t){let n=e.bMarks[t]+e.tShift[t],r=e.eMarks[t],i=n;if(i+1>=r)return-1;let a=e.src.charCodeAt(i++);if(a<48||a>57)return-1;for(;;){if(i>=r)return-1;if(a=e.src.charCodeAt(i++),a>=48&&a<=57){if(i-n>=10)return-1;continue}if(a===41||a===46)break;return-1}return i<r&&(a=e.src.charCodeAt(i),!R(a))?-1:i}function lo(e,t){let n=e.level+2;for(let r=t+2,i=e.tokens.length-2;r<i;r++)e.tokens[r].level===n&&e.tokens[r].type===`paragraph_open`&&(e.tokens[r+2].hidden=!0,e.tokens[r].hidden=!0,r+=2)}function uo(e,t,n,r){let i,a,o,s,c=t,l=!0;if(e.sCount[c]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[c]-e.listIndent>=4&&e.sCount[c]<e.blkIndent)return!1;let u=!1;r&&e.parentType===`paragraph`&&e.sCount[c]>=e.blkIndent&&(u=!0);let d,f,p;if((p=co(e,c))>=0){if(d=!0,o=e.bMarks[c]+e.tShift[c],f=Number(e.src.slice(o,p-1)),u&&f!==1)return!1}else if((p=so(e,c))>=0)d=!1;else return!1;if(u&&e.skipSpaces(p)>=e.eMarks[c])return!1;if(r)return!0;let m=e.src.charCodeAt(p-1),h=e.tokens.length;d?(s=e.push(`ordered_list_open`,`ol`,1),f!==1&&(s.attrs=[[`start`,f]])):s=e.push(`bullet_list_open`,`ul`,1);let g=[c,0];s.map=g,s.markup=String.fromCharCode(m);let _=!1,v=e.md.block.ruler.getRules(`list`),y=e.parentType;for(e.parentType=`list`;c<n;){a=p,i=e.eMarks[c];let t=e.sCount[c]+p-(e.bMarks[c]+e.tShift[c]),r=t;for(;a<i;){let t=e.src.charCodeAt(a);if(t===9)r+=4-(r+e.bsCount[c])%4;else if(t===32)r++;else break;a++}let u=a,f;f=u>=i?1:r-t,f>4&&(f=1);let h=t+f;s=e.push(`list_item_open`,`li`,1),s.markup=String.fromCharCode(m);let g=[c,0];s.map=g,d&&(s.info=e.src.slice(o,p-1));let y=e.tight,b=e.tShift[c],x=e.sCount[c],S=e.listIndent;if(e.listIndent=e.blkIndent,e.blkIndent=h,e.tight=!0,e.tShift[c]=u-e.bMarks[c],e.sCount[c]=r,u>=i&&e.isEmpty(c+1)?e.line=Math.min(e.line+2,n):e.md.block.tokenize(e,c,n,!0),(!e.tight||_)&&(l=!1),_=e.line-c>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=S,e.tShift[c]=b,e.sCount[c]=x,e.tight=y,s=e.push(`list_item_close`,`li`,-1),s.markup=String.fromCharCode(m),c=e.line,g[1]=c,c>=n||e.sCount[c]<e.blkIndent||e.sCount[c]-e.blkIndent>=4)break;let C=!1;for(let t=0,r=v.length;t<r;t++)if(v[t](e,c,n,!0)){C=!0;break}if(C)break;if(d){if(p=co(e,c),p<0)break;o=e.bMarks[c]+e.tShift[c]}else if(p=so(e,c),p<0)break;if(m!==e.src.charCodeAt(p-1))break}return s=d?e.push(`ordered_list_close`,`ol`,-1):e.push(`bullet_list_close`,`ul`,-1),s.markup=String.fromCharCode(m),g[1]=c,e.line=c,e.parentType=y,l&&lo(e,h),!0}function fo(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t],o=t+1;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(i)!==91)return!1;function s(t){let n=e.lineMax;if(t>=n||e.isEmpty(t))return null;let r=!1;if(e.sCount[t]-e.blkIndent>3&&(r=!0),e.sCount[t]<0&&(r=!0),!r){let r=e.md.block.ruler.getRules(`reference`),i=e.parentType;e.parentType=`reference`;let a=!1;for(let i=0,o=r.length;i<o;i++)if(r[i](e,t,n,!0)){a=!0;break}if(e.parentType=i,a)return null}let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];return e.src.slice(i,a+1)}let c=e.src.slice(i,a+1);a=c.length;let l=-1;for(i=1;i<a;i++){let e=c.charCodeAt(i);if(e===91)return!1;if(e===93){l=i;break}if(e===10){let e=s(o);e!==null&&(c+=e,a=c.length,o++)}else if(e===92&&(i++,i<a&&c.charCodeAt(i)===10)){let e=s(o);e!==null&&(c+=e,a=c.length,o++)}}if(l<0||c.charCodeAt(l+1)!==58)return!1;for(i=l+2;i<a;i++){let e=c.charCodeAt(i);if(e===10){let e=s(o);e!==null&&(c+=e,a=c.length,o++)}else if(!R(e))break}let u=e.md.helpers.parseLinkDestination(c,i,a);if(!u.ok)return!1;let d=e.md.normalizeLink(u.str);if(!e.md.validateLink(d))return!1;i=u.pos;let f=i,p=o,m=i;for(;i<a;i++){let e=c.charCodeAt(i);if(e===10){let e=s(o);e!==null&&(c+=e,a=c.length,o++)}else if(!R(e))break}let h=e.md.helpers.parseLinkTitle(c,i,a);for(;h.can_continue;){let t=s(o);if(t===null)break;c+=t,i=a,a=c.length,o++,h=e.md.helpers.parseLinkTitle(c,i,a,h)}let g;for(i<a&&m!==i&&h.ok?(g=h.str,i=h.pos):(g=``,i=f,o=p);i<a&&R(c.charCodeAt(i));)i++;if(i<a&&c.charCodeAt(i)!==10&&g)for(g=``,i=f,o=p;i<a&&R(c.charCodeAt(i));)i++;if(i<a&&c.charCodeAt(i)!==10)return!1;let _=pa(c.slice(1,l));return _?r?!0:(e.env.references===void 0&&(e.env.references={}),e.env.references[_]===void 0&&(e.env.references[_]={title:g,href:d}),e.line=o,!0):!1}var po=`address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul`.split(`.`),mo=RegExp(`^(?:<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^"'=<>\`\\x00-\\x20]+|'[^']*'|"[^"]*"))?)*\\s*\\/?>|<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>|<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->|<[?][\\s\\S]*?[?]>|<![A-Za-z][^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)`),z=RegExp(`^(?:<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^"'=<>\`\\x00-\\x20]+|'[^']*'|"[^"]*"))?)*\\s*\\/?>|<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>)`),B=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Za-z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[RegExp(`^</?(`+po.join(`|`)+`)(?=(\\s|/?>|$))`,`i`),/^$/,!0],[RegExp(z.source+`\\s*$`),/^$/,!1]];function ho(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(i)!==60)return!1;let o=e.src.slice(i,a),s=0;for(;s<B.length&&!B[s][0].test(o);s++);if(s===B.length)return!1;if(r)return B[s][2];let c=t+1,l=B[s][1].test(``);if(!B[s][1].test(o)){for(;c<n&&!(e.sCount[c]<e.blkIndent&&(l||!e.isEmpty(c)));c++)if(i=e.bMarks[c]+e.tShift[c],a=e.eMarks[c],o=e.src.slice(i,a),B[s][1].test(o)){o.length!==0&&c++;break}}e.line=c;let u=e.push(`html_block`,``,0);return u.map=[t,c],u.content=e.getLines(t,c,e.blkIndent,!0),!0}function go(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let o=e.src.charCodeAt(i);if(o!==35||i>=a)return!1;let s=1;for(o=e.src.charCodeAt(++i);o===35&&i<a&&s<=6;)s++,o=e.src.charCodeAt(++i);if(s>6||i<a&&!R(o))return!1;if(r)return!0;a=e.skipSpacesBack(a,i);let c=e.skipCharsBack(a,35,i);c>i&&R(e.src.charCodeAt(c-1))&&(a=c),e.line=t+1;let l=e.push(`heading_open`,`h`+String(s),1);l.markup=`########`.slice(0,s),l.map=[t,e.line];let u=e.push(`inline`,``,0);u.content=ha(e.src.slice(i,a)),u.map=[t,e.line],u.children=[];let d=e.push(`heading_close`,`h`+String(s),-1);return d.markup=`########`.slice(0,s),!0}function _o(e,t,n){let r=e.md.block.ruler.getRules(`paragraph`);if(e.sCount[t]-e.blkIndent>=4)return!1;let i=e.parentType;e.parentType=`paragraph`;let a=0,o,s=t+1;for(;s<n&&!e.isEmpty(s);s++){if(e.sCount[s]-e.blkIndent>3)continue;if(e.sCount[s]>=e.blkIndent){let t=e.bMarks[s]+e.tShift[s],n=e.eMarks[s];if(t<n&&(o=e.src.charCodeAt(t),(o===45||o===61)&&(t=e.skipChars(t,o),t=e.skipSpaces(t),t>=n))){a=o===61?1:2;break}}if(e.sCount[s]<0)continue;let t=!1;for(let i=0,a=r.length;i<a;i++)if(r[i](e,s,n,!0)){t=!0;break}if(t)break}if(!a)return e.parentType=i,!1;let c=ha(e.getLines(t,s,e.blkIndent,!1));e.line=s+1;let l=e.push(`heading_open`,`h`+String(a),1);l.markup=String.fromCharCode(o),l.map=[t,e.line];let u=e.push(`inline`,``,0);u.content=c,u.map=[t,e.line-1],u.children=[];let d=e.push(`heading_close`,`h`+String(a),-1);return d.markup=String.fromCharCode(o),e.parentType=i,!0}function vo(e,t,n){let r=e.md.block.ruler.getRules(`paragraph`),i=e.parentType,a=t+1;for(e.parentType=`paragraph`;a<n&&!e.isEmpty(a);a++){if(e.sCount[a]-e.blkIndent>3||e.sCount[a]<0)continue;let t=!1;for(let i=0,o=r.length;i<o;i++)if(r[i](e,a,n,!0)){t=!0;break}if(t)break}let o=ha(e.getLines(t,a,e.blkIndent,!1));e.line=a;let s=e.push(`paragraph_open`,`p`,1);s.map=[t,e.line];let c=e.push(`inline`,``,0);return c.content=o,c.map=[t,e.line],c.children=[],e.push(`paragraph_close`,`p`,-1),e.parentType=i,!0}var yo=[[`table`,no,[`paragraph`,`reference`]],[`code`,ro],[`fence`,io,[`paragraph`,`reference`,`blockquote`,`list`]],[`blockquote`,ao,[`paragraph`,`reference`,`blockquote`,`list`]],[`hr`,oo,[`paragraph`,`reference`,`blockquote`,`list`]],[`list`,uo,[`paragraph`,`reference`,`blockquote`]],[`reference`,fo],[`html_block`,ho,[`paragraph`,`reference`,`blockquote`]],[`heading`,go,[`paragraph`,`reference`,`blockquote`]],[`lheading`,_o],[`paragraph`,vo]];function bo(){this.ruler=new Ca;for(let e=0;e<yo.length;e++)this.ruler.push(yo[e][0],yo[e][1],{alt:(yo[e][2]||[]).slice()})}bo.prototype.tokenize=function(e,t,n){let r=this.ruler.getRules(``),i=r.length,a=e.md.options.maxNesting,o=t,s=!1;for(;o<n&&(e.line=o=e.skipEmptyLines(o),!(o>=n||e.sCount[o]<e.blkIndent));){if(e.level>=a){e.line=n;break}let t=e.line,c=!1;for(let a=0;a<i;a++)if(c=r[a](e,o,n,!1),c){if(t>=e.line)throw Error(`block rule didn't increment state.line`);break}if(!c)throw Error(`none of the block rules matched`);e.tight=!s,e.isEmpty(e.line-1)&&(s=!0),o=e.line,o<n&&e.isEmpty(o)&&(s=!0,o++,e.line=o)}},bo.prototype.parse=function(e,t,n,r){if(!e)return;let i=new this.State(e,t,n,r);this.tokenize(i,i.line,i.lineMax)},bo.prototype.State=Qa;function xo(e,t,n,r){this.src=e,this.env=n,this.md=t,this.tokens=r,this.tokens_meta=Array(r.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending=``,this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}xo.prototype.pushPending=function(){let e=new wa(`text`,``,0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending=``,e},xo.prototype.push=function(e,t,n){this.pending&&this.pushPending();let r=new wa(e,t,n),i=null;return n<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),r.level=this.level,n>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],i={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(r),this.tokens_meta.push(i),r},xo.prototype.scanDelims=function(e,t){let n=this.posMax,r=this.src.charCodeAt(e),i;if(e===0)i=32;else if(e===1)i=this.src.charCodeAt(0),(i&63488)==55296&&(i=65533);else if(i=this.src.charCodeAt(e-1),(i&64512)==56320){let t=this.src.charCodeAt(e-2);i=(t&64512)==55296?65536+(t-55296<<10)+(i-56320):65533}else(i&64512)==55296&&(i=65533);let a=e;for(;a<n&&this.src.charCodeAt(a)===r;)a++;let o=a-e,s=a<n?this.src.charCodeAt(a):32;if((s&64512)==55296){let e=this.src.charCodeAt(a+1);s=(e&64512)==56320?65536+(s-55296<<10)+(e-56320):65533}else(s&64512)==56320&&(s=65533);let c=fa(i)||da(i),l=fa(s)||da(s),u=la(i),d=la(s),f=!d&&(!l||u||c),p=!u&&(!c||d||l);return{can_open:f&&(t||!p||c),can_close:p&&(t||!f||l),length:o}},xo.prototype.Token=wa;function So(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function Co(e,t){let n=e.pos;for(;n<e.posMax&&!So(e.src.charCodeAt(n));)n++;return n!==e.pos&&(t||(e.pending+=e.src.slice(e.pos,n)),e.pos=n,!0)}function wo(e){return e>=65&&e<=90||e>=97&&e<=122}function To(e){return e>=65&&e<=90||e>=97&&e<=122||e>=48&&e<=57||e===43||e===45||e===46}function Eo(e,t){if(!e.md.options.linkify||e.linkLevel>0)return!1;let n=e.pos,r=e.posMax;if(n+3>r||e.src.charCodeAt(n)!==58||e.src.charCodeAt(n+1)!==47||e.src.charCodeAt(n+2)!==47)return!1;let i=n-Math.min(10,e.pending.length,n),a=n;for(;a>i&&To(e.src.charCodeAt(a-1));)a--;if(a===n||!wo(e.src.charCodeAt(a)))return!1;let o=n-a,s=e.md.linkify.matchAtStart(e.src.slice(a));if(!s)return!1;let c=s.url;if(c.length<=o)return!1;let l=c.length;for(;l>0&&c.charCodeAt(l-1)===42;)l--;l!==c.length&&(c=c.slice(0,l));let u=e.md.normalizeLink(c);if(!e.md.validateLink(u))return!1;if(!t){e.pending=e.pending.slice(0,-o);let t=e.push(`link_open`,`a`,1);t.attrs=[[`href`,u]],t.markup=`linkify`,t.info=`auto`;let n=e.push(`text`,``,0);n.content=e.md.normalizeLinkText(c);let r=e.push(`link_close`,`a`,-1);r.markup=`linkify`,r.info=`auto`}return e.pos+=c.length-o,!0}function Do(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==10)return!1;let r=e.pending.length-1,i=e.posMax;if(!t){if(r>=0&&e.pending.charCodeAt(r)===32){if(r>=1&&e.pending.charCodeAt(r-1)===32){let t=r-1;for(;t>=1&&e.pending.charCodeAt(t-1)===32;)t--;e.pending=e.pending.slice(0,t),e.push(`hardbreak`,`br`,0)}else e.pending=e.pending.slice(0,-1),e.push(`softbreak`,`br`,0)}else e.push(`softbreak`,`br`,0)}for(n++;n<i&&R(e.src.charCodeAt(n));)n++;return e.pos=n,!0}var Oo=[];for(let e=0;e<256;e++)Oo.push(0);`\\!"#$%&'()*+,./:;<=>?@[]^_\`{|}~-`.split(``).forEach(function(e){Oo[e.charCodeAt(0)]=1});function ko(e,t){let n=e.pos,r=e.posMax;if(e.src.charCodeAt(n)!==92||(n++,n>=r))return!1;let i=e.src.charCodeAt(n);if(i===10){for(t||e.push(`hardbreak`,`br`,0),n++;n<r&&(i=e.src.charCodeAt(n),R(i));)n++;return e.pos=n,!0}if(i===32){if(!t){let t=e.push(`text_special`,``,0);t.content=`\\`,t.markup=`\\`,t.info=`escape`}return e.pos=n,!0}let a=e.src[n];if(i>=55296&&i<=56319&&n+1<r){let t=e.src.charCodeAt(n+1);t>=56320&&t<=57343&&(a+=e.src[n+1],n++)}let o=`\\`+a;if(!t){let t=e.push(`text_special`,``,0);t.content=i<256&&Oo[i]!==0?a:o,t.markup=o,t.info=`escape`}return e.pos=n+1,!0}function Ao(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==96)return!1;let r=n;n++;let i=e.posMax;for(;n<i&&e.src.charCodeAt(n)===96;)n++;let a=e.src.slice(r,n),o=a.length;if(e.backticksScanned&&(e.backticks[o]||0)<=r)return t||(e.pending+=a),e.pos+=o,!0;let s=n,c;for(;(c=e.src.indexOf("`",s))!==-1;){for(s=c+1;s<i&&e.src.charCodeAt(s)===96;)s++;let r=s-c;if(r===o){if(!t){let t=e.push(`code_inline`,`code`,0);t.markup=a,t.content=e.src.slice(n,c).replace(/\n/g,` `).replace(/^ (.+) $/,`$1`)}return e.pos=s,!0}e.backticks[r]=c}return e.backticksScanned=!0,t||(e.pending+=a),e.pos+=o,!0}function jo(e,t){let n=e.pos,r=e.src.charCodeAt(n);if(t||r!==126)return!1;let i=e.scanDelims(e.pos,!0),a=i.length,o=String.fromCharCode(r);if(a<2)return!1;let s;a%2&&(s=e.push(`text`,``,0),s.content=o,a--);for(let t=0;t<a;t+=2)s=e.push(`text`,``,0),s.content=o+o,e.delimiters.push({marker:r,length:0,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close});return e.pos+=i.length,!0}function Mo(e,t){let n,r=[],i=t.length;for(let a=0;a<i;a++){let i=t[a];if(i.marker!==126||i.end===-1)continue;let o=t[i.end];n=e.tokens[i.token],n.type=`s_open`,n.tag=`s`,n.nesting=1,n.markup=`~~`,n.content=``,n=e.tokens[o.token],n.type=`s_close`,n.tag=`s`,n.nesting=-1,n.markup=`~~`,n.content=``,e.tokens[o.token-1].type===`text`&&e.tokens[o.token-1].content===`~`&&r.push(o.token-1)}for(;r.length;){let t=r.pop(),i=t+1;for(;i<e.tokens.length&&e.tokens[i].type===`s_close`;)i++;i--,t!==i&&(n=e.tokens[i],e.tokens[i]=e.tokens[t],e.tokens[t]=n)}}function No(e){let t=e.tokens_meta,n=e.tokens_meta.length;Mo(e,e.delimiters);for(let r=0;r<n;r++)t[r]&&t[r].delimiters&&Mo(e,t[r].delimiters)}var Po={tokenize:jo,postProcess:No};function Fo(e,t){let n=e.pos,r=e.src.charCodeAt(n);if(t||r!==95&&r!==42)return!1;let i=e.scanDelims(e.pos,r===42);for(let t=0;t<i.length;t++){let t=e.push(`text`,``,0);t.content=String.fromCharCode(r),e.delimiters.push({marker:r,length:i.length,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close})}return e.pos+=i.length,!0}function Io(e,t){let n=t.length;for(let r=n-1;r>=0;r--){let n=t[r];if(n.marker!==95&&n.marker!==42||n.end===-1)continue;let i=t[n.end],a=r>0&&t[r-1].end===n.end+1&&t[r-1].marker===n.marker&&t[r-1].token===n.token-1&&t[n.end+1].token===i.token+1,o=String.fromCharCode(n.marker),s=e.tokens[n.token];s.type=a?`strong_open`:`em_open`,s.tag=a?`strong`:`em`,s.nesting=1,s.markup=a?o+o:o,s.content=``;let c=e.tokens[i.token];c.type=a?`strong_close`:`em_close`,c.tag=a?`strong`:`em`,c.nesting=-1,c.markup=a?o+o:o,c.content=``,a&&(e.tokens[t[r-1].token].content=``,e.tokens[t[n.end+1].token].content=``,r--)}}function Lo(e){let t=e.tokens_meta,n=e.tokens_meta.length;Io(e,e.delimiters);for(let r=0;r<n;r++)t[r]&&t[r].delimiters&&Io(e,t[r].delimiters)}var Ro={tokenize:Fo,postProcess:Lo};function zo(e,t){let n,r,i,a,o=``,s=``,c=e.pos,l=!0;if(e.src.charCodeAt(e.pos)!==91)return!1;let u=e.pos,d=e.posMax,f=e.pos+1,p=e.md.helpers.parseLinkLabel(e,e.pos,!0);if(p<0)return!1;let m=p+1;if(m<d&&e.src.charCodeAt(m)===40){for(l=!1,m++;m<d&&(n=e.src.charCodeAt(m),!(!R(n)&&n!==10));m++);if(m>=d)return!1;if(c=m,i=e.md.helpers.parseLinkDestination(e.src,m,e.posMax),i.ok){for(o=e.md.normalizeLink(i.str),e.md.validateLink(o)?m=i.pos:o=``,c=m;m<d&&(n=e.src.charCodeAt(m),!(!R(n)&&n!==10));m++);if(i=e.md.helpers.parseLinkTitle(e.src,m,e.posMax),m<d&&c!==m&&i.ok)for(s=i.str,m=i.pos;m<d&&(n=e.src.charCodeAt(m),!(!R(n)&&n!==10));m++);}(m>=d||e.src.charCodeAt(m)!==41)&&(l=!0),m++}if(l){if(e.env.references===void 0)return!1;if(m<d&&e.src.charCodeAt(m)===91?(c=m+1,m=e.md.helpers.parseLinkLabel(e,m),m>=0?r=e.src.slice(c,m++):m=p+1):m=p+1,r||=e.src.slice(f,p),a=e.env.references[pa(r)],!a)return e.pos=u,!1;o=a.href,s=a.title}if(!t){e.pos=f,e.posMax=p;let t=e.push(`link_open`,`a`,1),n=[[`href`,o]];t.attrs=n,s&&n.push([`title`,s]),e.linkLevel++,e.md.inline.tokenize(e),e.linkLevel--,e.push(`link_close`,`a`,-1)}return e.pos=m,e.posMax=d,!0}function Bo(e,t){let n,r,i,a,o,s,c,l,u=``,d=e.pos,f=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91)return!1;let p=e.pos+2,m=e.md.helpers.parseLinkLabel(e,e.pos+1,!1);if(m<0)return!1;if(a=m+1,a<f&&e.src.charCodeAt(a)===40){for(a++;a<f&&(n=e.src.charCodeAt(a),!(!R(n)&&n!==10));a++);if(a>=f)return!1;for(l=a,s=e.md.helpers.parseLinkDestination(e.src,a,e.posMax),s.ok&&(u=e.md.normalizeLink(s.str),e.md.validateLink(u)?a=s.pos:u=``),l=a;a<f&&(n=e.src.charCodeAt(a),!(!R(n)&&n!==10));a++);if(s=e.md.helpers.parseLinkTitle(e.src,a,e.posMax),a<f&&l!==a&&s.ok)for(c=s.str,a=s.pos;a<f&&(n=e.src.charCodeAt(a),!(!R(n)&&n!==10));a++);else c=``;if(a>=f||e.src.charCodeAt(a)!==41)return e.pos=d,!1;a++}else{if(e.env.references===void 0)return!1;if(a<f&&e.src.charCodeAt(a)===91?(l=a+1,a=e.md.helpers.parseLinkLabel(e,a),a>=0?i=e.src.slice(l,a++):a=m+1):a=m+1,i||=e.src.slice(p,m),o=e.env.references[pa(i)],!o)return e.pos=d,!1;u=o.href,c=o.title}if(!t){r=e.src.slice(p,m);let t=[];e.md.inline.parse(r,e.md,e.env,t);let n=e.push(`image`,`img`,0),i=[[`src`,u],[`alt`,``]];n.attrs=i,n.children=t,n.content=r,c&&i.push([`title`,c])}return e.pos=a,e.posMax=f,!0}var Vo=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,Ho=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function Uo(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==60)return!1;let r=e.pos,i=e.posMax;for(;;){if(++n>=i)return!1;let t=e.src.charCodeAt(n);if(t===60)return!1;if(t===62)break}let a=e.src.slice(r+1,n);if(Ho.test(a)){let n=e.md.normalizeLink(a);if(!e.md.validateLink(n))return!1;if(!t){let t=e.push(`link_open`,`a`,1);t.attrs=[[`href`,n]],t.markup=`autolink`,t.info=`auto`;let r=e.push(`text`,``,0);r.content=e.md.normalizeLinkText(a);let i=e.push(`link_close`,`a`,-1);i.markup=`autolink`,i.info=`auto`}return e.pos+=a.length+2,!0}if(Vo.test(a)){let n=e.md.normalizeLink(`mailto:`+a);if(!e.md.validateLink(n))return!1;if(!t){let t=e.push(`link_open`,`a`,1);t.attrs=[[`href`,n]],t.markup=`autolink`,t.info=`auto`;let r=e.push(`text`,``,0);r.content=e.md.normalizeLinkText(a);let i=e.push(`link_close`,`a`,-1);i.markup=`autolink`,i.info=`auto`}return e.pos+=a.length+2,!0}return!1}function Wo(e){return/^<a[>\s]/i.test(e)}function Go(e){return/^<\/a\s*>/i.test(e)}function Ko(e){let t=e|32;return t>=97&&t<=122}function qo(e,t){if(!e.md.options.html)return!1;let n=e.posMax,r=e.pos;if(e.src.charCodeAt(r)!==60||r+2>=n)return!1;let i=e.src.charCodeAt(r+1);if(i!==33&&i!==63&&i!==47&&!Ko(i))return!1;let a=e.src.slice(r).match(mo);if(!a)return!1;if(!t){let t=e.push(`html_inline`,``,0);t.content=a[0],Wo(t.content)&&e.linkLevel++,Go(t.content)&&e.linkLevel--}return e.pos+=a[0].length,!0}var Jo=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,Yo=/^&([a-z][a-z0-9]{1,31});/i;function Xo(e,t){let n=e.pos,r=e.posMax;if(e.src.charCodeAt(n)!==38||n+1>=r)return!1;if(e.src.charCodeAt(n+1)===35){let r=e.src.slice(n).match(Jo);if(r){if(!t){let t=r[1][0].toLowerCase()===`x`?parseInt(r[1].slice(1),16):parseInt(r[1],10),n=e.push(`text_special`,``,0);n.content=Ji(t)?Yi(t):Yi(65533),n.markup=r[0],n.info=`entity`}return e.pos+=r[0].length,!0}}else{let r=e.src.slice(n).match(Yo);if(r){let n=Bi(r[0]);if(n!==r[0]){if(!t){let t=e.push(`text_special`,``,0);t.content=n,t.markup=r[0],t.info=`entity`}return e.pos+=r[0].length,!0}}}return!1}function Zo(e){let t={},n=e.length;if(!n)return;let r=0,i=-2,a=[];for(let o=0;o<n;o++){let n=e[o];if(a.push(0),(e[r].marker!==n.marker||i!==n.token-1)&&(r=o),i=n.token,n.length=n.length||0,!n.close)continue;t.hasOwnProperty(n.marker)||(t[n.marker]=[-1,-1,-1,-1,-1,-1]);let s=t[n.marker][(n.open?3:0)+n.length%3],c=r-a[r]-1,l=c;for(;c>s;c-=a[c]+1){let t=e[c];if(t.marker===n.marker&&t.open&&t.end<0){let r=!1;if((t.close||n.open)&&(t.length+n.length)%3==0&&(t.length%3!=0||n.length%3!=0)&&(r=!0),!r){let r=c>0&&!e[c-1].open?a[c-1]+1:0;a[o]=o-c+r,a[c]=r,n.open=!1,t.end=o,t.close=!1,l=-1,i=-2;break}}}l!==-1&&(t[n.marker][(n.open?3:0)+(n.length||0)%3]=l)}}function Qo(e){let t=e.tokens_meta,n=e.tokens_meta.length;Zo(e.delimiters);for(let e=0;e<n;e++)t[e]&&t[e].delimiters&&Zo(t[e].delimiters)}function $o(e){let t,n,r=0,i=e.tokens,a=e.tokens.length;for(t=n=0;t<a;t++)i[t].nesting<0&&r--,i[t].level=r,i[t].nesting>0&&r++,i[t].type===`text`&&t+1<a&&i[t+1].type===`text`?i[t+1].content=i[t].content+i[t+1].content:(t!==n&&(i[n]=i[t]),n++);t!==n&&(i.length=n)}var es=[[`text`,Co],[`linkify`,Eo],[`newline`,Do],[`escape`,ko],[`backticks`,Ao],[`strikethrough`,Po.tokenize],[`emphasis`,Ro.tokenize],[`link`,zo],[`image`,Bo],[`autolink`,Uo],[`html_inline`,qo],[`entity`,Xo]],ts=[[`balance_pairs`,Qo],[`strikethrough`,Po.postProcess],[`emphasis`,Ro.postProcess],[`fragments_join`,$o]];function ns(){this.ruler=new Ca;for(let e=0;e<es.length;e++)this.ruler.push(es[e][0],es[e][1]);this.ruler2=new Ca;for(let e=0;e<ts.length;e++)this.ruler2.push(ts[e][0],ts[e][1])}ns.prototype.skipToken=function(e){let t=e.pos,n=this.ruler.getRules(``),r=n.length,i=e.md.options.maxNesting,a=e.cache;if(a[t]!==void 0){e.pos=a[t];return}let o=!1;if(e.level<i){for(let i=0;i<r;i++)if(e.level++,o=n[i](e,!0),e.level--,o){if(t>=e.pos)throw Error(`inline rule didn't increment state.pos`);break}}else e.pos=e.posMax;o||e.pos++,a[t]=e.pos},ns.prototype.tokenize=function(e){let t=this.ruler.getRules(``),n=t.length,r=e.posMax,i=e.md.options.maxNesting;for(;e.pos<r;){let a=e.pos,o=!1;if(e.level<i){for(let r=0;r<n;r++)if(o=t[r](e,!1),o){if(a>=e.pos)throw Error(`inline rule didn't increment state.pos`);break}}if(o){if(e.pos>=r)break;continue}e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()},ns.prototype.parse=function(e,t,n,r){let i=new this.State(e,t,n,r);this.tokenize(i);let a=this.ruler2.getRules(``),o=a.length;for(let e=0;e<o;e++)a[e](i)},ns.prototype.State=xo;function rs(e){let t={};e||={},t.src_Any=hi.source,t.src_Cc=gi.source,t.src_Z=bi.source,t.src_P=vi.source,t.src_ZPCc=[t.src_Z,t.src_P,t.src_Cc].join(`|`),t.src_ZCc=[t.src_Z,t.src_Cc].join(`|`);let n=`[><｜]`;return t.src_pseudo_letter=`(?:(?!${n}|${t.src_ZPCc})${t.src_Any})`,t.src_ip4=`(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)`,t.src_auth=`(?:(?:(?!${t.src_ZCc}|[@/\\[\\]()]).){1,50}@)?`,t.src_port=`(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?`,t.src_host_terminator=`(?=$|${n}|${t.src_ZPCc})(?!${e[`---`]?`-(?!--)|`:`-|`}_|:\\d|\\.-|\\.(?!$|${t.src_ZPCc}))`,t.src_path=`(?:[/?#](?:(?!${t.src_ZCc}|${n}|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!${t.src_ZCc}|\\]).)*\\]|\\((?:(?!${t.src_ZCc}|[)]).)*\\)|\\{(?:(?!${t.src_ZCc}|[}]).)*\\}|\\"(?:(?!${t.src_ZCc}|["]).)+\\"|\\'(?:(?!${t.src_ZCc}|[']).)+\\'|\\'(?=${t.src_pseudo_letter}|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!${t.src_ZCc}|[.]|$)|`+(e[`---`]?`\\-(?!--(?:[^-]|$))(?:-*)|`:`\\-+|`)+`,(?!${t.src_ZCc}|$)|;(?!${t.src_ZCc}|$)|\\!+(?!${t.src_ZCc}|[!]|$)|\\?(?!${t.src_ZCc}|[?]|$))+|\\/)?`,t.src_email_name=`[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]{0,63}`,t.src_xn=`xn--[a-z0-9\\-]{1,59}`,t.src_domain_root=`(?:`+t.src_xn+`|${t.src_pseudo_letter}{1,63})`,t.src_domain=`(?:`+t.src_xn+`|(?:${t.src_pseudo_letter})|(?:${t.src_pseudo_letter}(?:-|${t.src_pseudo_letter}){0,61}${t.src_pseudo_letter}))`,t.src_host=`(?:(?:(?:(?:${t.src_domain})\\.)*${t.src_domain}))`,t.tpl_host_fuzzy=`(?:`+t.src_ip4+`|(?:(?:(?:${t.src_domain})\\.)+(?:%TLDS%)))`,t.tpl_host_no_ip_fuzzy=`(?:(?:(?:${t.src_domain})\\.)+(?:%TLDS%))`,t.src_host_strict=t.src_host+t.src_host_terminator,t.tpl_host_fuzzy_strict=t.tpl_host_fuzzy+t.src_host_terminator,t.src_host_port_strict=t.src_host+t.src_port+t.src_host_terminator,t.tpl_host_port_fuzzy_strict=t.tpl_host_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_port_no_ip_fuzzy_strict=t.tpl_host_no_ip_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_fuzzy_test=`localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:${t.src_ZPCc}|>|$))`,t.tpl_email_fuzzy=`(^|${n}|"|\\(|${t.src_ZCc})(${t.src_email_name}@${t.tpl_host_fuzzy_strict})`,t.tpl_link_fuzzy=`(^|(?![.:/\\-_@])(?:[$+<=>^\`|\uff5c]|${t.src_ZPCc}))((?![$+<=>^\`|\uff5c])${t.tpl_host_port_fuzzy_strict}${t.src_path})`,t.tpl_link_no_ip_fuzzy=`(^|(?![.:/\\-_@])(?:[$+<=>^\`|\uff5c]|${t.src_ZPCc}))((?![$+<=>^\`|\uff5c])${t.tpl_host_port_no_ip_fuzzy_strict}${t.src_path})`,t}function is(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){t&&Object.keys(t).forEach(function(n){e[n]=t[n]})}),e}function as(e){return Object.prototype.toString.call(e)}function os(e){return as(e)===`[object String]`}function ss(e){return as(e)===`[object Object]`}function cs(e){return as(e)===`[object RegExp]`}function ls(e){return as(e)===`[object Function]`}function us(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,`\\$&`)}var ds={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function fs(e){return Object.keys(e||{}).reduce(function(e,t){return e||ds.hasOwnProperty(t)},!1)}var ps={"http:":{validate:function(e,t,n){let r=e.slice(t);return n.re.http||(n.re.http=RegExp(`^\\/\\/${n.re.src_auth}${n.re.src_host_port_strict}${n.re.src_path}`,`i`)),n.re.http.test(r)?r.match(n.re.http)[0].length:0}},"https:":`http:`,"ftp:":`http:`,"//":{validate:function(e,t,n){let r=e.slice(t);return n.re.no_http||(n.re.no_http=RegExp(`^`+n.re.src_auth+`(?:localhost|(?:(?:${n.re.src_domain})\\.)+${n.re.src_domain_root})`+n.re.src_port+n.re.src_host_terminator+n.re.src_path,`i`)),n.re.no_http.test(r)?t>=3&&e[t-3]===`:`||t>=3&&e[t-3]===`/`?0:r.match(n.re.no_http)[0].length:0}},"mailto:":{validate:function(e,t,n){let r=e.slice(t);return n.re.mailto||(n.re.mailto=RegExp(`^${n.re.src_email_name}@${n.re.src_host_strict}`,`i`)),n.re.mailto.test(r)?r.match(n.re.mailto)[0].length:0}}},ms=`a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]`,hs=`biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф`.split(`|`);function gs(e){return function(t,n){let r=t.slice(n);return e.test(r)?r.match(e)[0].length:0}}function _s(){return function(e,t){t.normalize(e)}}function vs(e){let t=e.re=rs(e.__opts__),n=e.__tlds__.slice();e.onCompile(),e.__tlds_replaced__||n.push(ms),n.push(t.src_xn),t.src_tlds=n.join(`|`);function r(e){return e.replace(`%TLDS%`,t.src_tlds)}t.email_fuzzy=RegExp(r(t.tpl_email_fuzzy),`i`),t.email_fuzzy_global=RegExp(r(t.tpl_email_fuzzy),`ig`),t.link_fuzzy=RegExp(r(t.tpl_link_fuzzy),`i`),t.link_fuzzy_global=RegExp(r(t.tpl_link_fuzzy),`ig`),t.link_no_ip_fuzzy=RegExp(r(t.tpl_link_no_ip_fuzzy),`i`),t.link_no_ip_fuzzy_global=RegExp(r(t.tpl_link_no_ip_fuzzy),`ig`),t.host_fuzzy_test=RegExp(r(t.tpl_host_fuzzy_test),`i`);let i=[];e.__compiled__={};function a(e,t){throw Error(`(LinkifyIt) Invalid schema "${e}": ${t}`)}Object.keys(e.__schemas__).forEach(function(t){let n=e.__schemas__[t];if(n===null)return;let r={validate:null,link:null};if(e.__compiled__[t]=r,ss(n)){cs(n.validate)?r.validate=gs(n.validate):ls(n.validate)?r.validate=n.validate:a(t,n),ls(n.normalize)?r.normalize=n.normalize:n.normalize?a(t,n):r.normalize=_s();return}if(os(n)){i.push(t);return}a(t,n)}),i.forEach(function(t){e.__compiled__[e.__schemas__[t]]&&(e.__compiled__[t].validate=e.__compiled__[e.__schemas__[t]].validate,e.__compiled__[t].normalize=e.__compiled__[e.__schemas__[t]].normalize)}),e.__compiled__[``]={validate:null,normalize:_s()};let o=Object.keys(e.__compiled__).filter(function(t){return t.length>0&&e.__compiled__[t]}).map(us).join(`|`);e.re.schema_test=RegExp(`(^|(?!_)(?:[><\uff5c]|${t.src_ZPCc}))(${o})`,`i`),e.re.schema_search=RegExp(`(^|(?!_)(?:[><\uff5c]|${t.src_ZPCc}))(${o})`,`ig`),e.re.schema_at_start=RegExp(`^${e.re.schema_search.source}`,`i`),e.re.pretest=RegExp(`(${e.re.schema_test.source})|(${e.re.host_fuzzy_test.source})|@`,`i`)}function ys(e,t,n,r){let i=e.slice(n,r);this.schema=t.toLowerCase(),this.index=n,this.lastIndex=r,this.raw=i,this.text=i,this.url=i}function bs(e,t){if(!(this instanceof bs))return new bs(e,t);t||fs(e)&&(t=e,e={}),this.__opts__=is({},ds,t),this.__schemas__=is({},ps,e),this.__compiled__={},this.__tlds__=hs,this.__tlds_replaced__=!1,this.re={},vs(this)}bs.prototype.add=function(e,t){return this.__schemas__[e]=t,vs(this),this},bs.prototype.set=function(e){return this.__opts__=is(this.__opts__,e),this},bs.prototype.test=function(e){if(!e.length)return!1;let t,n;if(this.re.schema_test.test(e)){for(n=this.re.schema_search,n.lastIndex=0;(t=n.exec(e))!==null;)if(this.testSchemaAt(e,t[2],n.lastIndex))return!0}return!!(this.__opts__.fuzzyLink&&this.__compiled__[`http:`]&&e.search(this.re.host_fuzzy_test)>=0&&e.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy)!==null||this.__opts__.fuzzyEmail&&this.__compiled__[`mailto:`]&&e.indexOf(`@`)>=0&&e.match(this.re.email_fuzzy)!==null)},bs.prototype.pretest=function(e){return this.re.pretest.test(e)},bs.prototype.testSchemaAt=function(e,t,n){return this.__compiled__[t.toLowerCase()]?this.__compiled__[t.toLowerCase()].validate(e,n,this):0},bs.prototype.match=function(e){let t=[],n=[],r=[],i=[],a,o,s;function c(e,t){return e?t?e.index===t.index?e.lastIndex>=t.lastIndex?e:t:e.index<t.index?e:t:e:t}if(!e.length)return null;if(this.re.schema_test.test(e))for(s=this.re.schema_search,s.lastIndex=0;(a=s.exec(e))!==null;)o=this.testSchemaAt(e,a[2],s.lastIndex),o&&n.push({schema:a[2],index:a.index+a[1].length,lastIndex:a.index+a[0].length+o});if(this.__opts__.fuzzyLink&&this.__compiled__[`http:`])for(s=this.__opts__.fuzzyIP?this.re.link_fuzzy_global:this.re.link_no_ip_fuzzy_global,s.lastIndex=0;(a=s.exec(e))!==null;)r.push({schema:``,index:a.index+a[1].length,lastIndex:a.index+a[0].length});if(this.__opts__.fuzzyEmail&&this.__compiled__[`mailto:`])for(s=this.re.email_fuzzy_global,s.lastIndex=0;(a=s.exec(e))!==null;)i.push({schema:`mailto:`,index:a.index+a[1].length,lastIndex:a.index+a[0].length});let l=[0,0,0],u=0;for(;;){let a=[n[l[0]],i[l[1]],r[l[2]]],o=c(c(a[0],a[1]),a[2]);if(!o)break;if(o===a[0]?l[0]++:o===a[1]?l[1]++:l[2]++,o.index<u)continue;let s=new ys(e,o.schema,o.index,o.lastIndex);this.__compiled__[s.schema].normalize(s,this),t.push(s),u=o.lastIndex}return t.length?t:null},bs.prototype.matchAtStart=function(e){if(!e.length)return null;let t=this.re.schema_at_start.exec(e);if(!t)return null;let n=this.testSchemaAt(e,t[2],t[0].length);if(!n)return null;let r=new ys(e,t[2],t.index+t[1].length,t.index+t[0].length+n);return this.__compiled__[r.schema].normalize(r,this),r},bs.prototype.tlds=function(e,t){return e=Array.isArray(e)?e:[e],t?(this.__tlds__=this.__tlds__.concat(e).sort().filter(function(e,t,n){return e!==n[t-1]}).reverse(),vs(this),this):(this.__tlds__=e.slice(),this.__tlds_replaced__=!0,vs(this),this)},bs.prototype.normalize=function(e){e.schema||(e.url=`http://${e.url}`),e.schema===`mailto:`&&!/^mailto:/i.test(e.url)&&(e.url=`mailto:${e.url}`)},bs.prototype.onCompile=function(){};var xs=2147483647,Ss=36,Cs=1,ws=26,Ts=38,Es=700,Ds=72,Os=128,ks=`-`,As=/^xn--/,js=/[^\0-\x7F]/,Ms=/[\x2E\u3002\uFF0E\uFF61]/g,Ns={overflow:`Overflow: input needs wider integers to process`,"not-basic":`Illegal input >= 0x80 (not a basic code point)`,"invalid-input":`Invalid input`},Ps=35,Fs=Math.floor,Is=String.fromCharCode;function Ls(e){throw RangeError(Ns[e])}function Rs(e,t){let n=[],r=e.length;for(;r--;)n[r]=t(e[r]);return n}function zs(e,t){let n=e.split(`@`),r=``;n.length>1&&(r=n[0]+`@`,e=n[1]),e=e.replace(Ms,`.`);let i=Rs(e.split(`.`),t).join(`.`);return r+i}function Bs(e){let t=[],n=0,r=e.length;for(;n<r;){let i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){let r=e.charCodeAt(n++);(r&64512)==56320?t.push(((i&1023)<<10)+(r&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}var Vs=e=>String.fromCodePoint(...e),Hs=function(e){return e>=48&&e<58?26+(e-48):e>=65&&e<91?e-65:e>=97&&e<123?e-97:Ss},Us=function(e,t){return e+22+75*(e<26)-((t!=0)<<5)},Ws=function(e,t,n){let r=0;for(e=n?Fs(e/Es):e>>1,e+=Fs(e/t);e>455;r+=Ss)e=Fs(e/Ps);return Fs(r+36*e/(e+Ts))},Gs=function(e){let t=[],n=e.length,r=0,i=Os,a=Ds,o=e.lastIndexOf(ks);o<0&&(o=0);for(let n=0;n<o;++n)e.charCodeAt(n)>=128&&Ls(`not-basic`),t.push(e.charCodeAt(n));for(let s=o>0?o+1:0;s<n;){let o=r;for(let t=1,i=Ss;;i+=Ss){s>=n&&Ls(`invalid-input`);let o=Hs(e.charCodeAt(s++));o>=Ss&&Ls(`invalid-input`),o>Fs((xs-r)/t)&&Ls(`overflow`),r+=o*t;let c=i<=a?Cs:i>=a+ws?ws:i-a;if(o<c)break;let l=Ss-c;t>Fs(xs/l)&&Ls(`overflow`),t*=l}let c=t.length+1;a=Ws(r-o,c,o==0),Fs(r/c)>xs-i&&Ls(`overflow`),i+=Fs(r/c),r%=c,t.splice(r++,0,i)}return String.fromCodePoint(...t)},Ks=function(e){let t=[];e=Bs(e);let n=e.length,r=Os,i=0,a=Ds;for(let n of e)n<128&&t.push(Is(n));let o=t.length,s=o;for(o&&t.push(ks);s<n;){let n=xs;for(let t of e)t>=r&&t<n&&(n=t);let c=s+1;n-r>Fs((xs-i)/c)&&Ls(`overflow`),i+=(n-r)*c,r=n;for(let n of e)if(n<r&&++i>xs&&Ls(`overflow`),n===r){let e=i;for(let n=Ss;;n+=Ss){let r=n<=a?Cs:n>=a+ws?ws:n-a;if(e<r)break;let i=e-r,o=Ss-r;t.push(Is(Us(r+i%o,0))),e=Fs(i/o)}t.push(Is(Us(e,0))),a=Ws(i,c,s===o),i=0,++s}++i,++r}return t.join(``)},qs={version:`2.3.1`,ucs2:{decode:Bs,encode:Vs},decode:Gs,encode:Ks,toASCII:function(e){return zs(e,function(e){return js.test(e)?`xn--`+Ks(e):e})},toUnicode:function(e){return zs(e,function(e){return As.test(e)?Gs(e.slice(4).toLowerCase()):e})}},Js={default:{options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:`language-`,linkify:!1,typographer:!1,quotes:`“”‘’`,highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},zero:{options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:`language-`,linkify:!1,typographer:!1,quotes:`“”‘’`,highlight:null,maxNesting:20},components:{core:{rules:[`normalize`,`block`,`inline`,`text_join`]},block:{rules:[`paragraph`]},inline:{rules:[`text`],rules2:[`balance_pairs`,`fragments_join`]}}},commonmark:{options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:`language-`,linkify:!1,typographer:!1,quotes:`“”‘’`,highlight:null,maxNesting:20},components:{core:{rules:[`normalize`,`block`,`inline`,`text_join`]},block:{rules:[`blockquote`,`code`,`fence`,`heading`,`hr`,`html_block`,`lheading`,`list`,`reference`,`paragraph`]},inline:{rules:[`autolink`,`backticks`,`emphasis`,`entity`,`escape`,`html_inline`,`image`,`link`,`newline`,`text`],rules2:[`balance_pairs`,`emphasis`,`fragments_join`]}}}},Ys=/^(vbscript|javascript|file|data):/,Xs=/^data:image\/(gif|png|jpeg|webp);/;function Zs(e){let t=e.trim().toLowerCase();return!Ys.test(t)||Xs.test(t)}var Qs=[`http:`,`https:`,`mailto:`];function $s(e){let t=pi(e,!0);if(t.hostname&&(!t.protocol||Qs.indexOf(t.protocol)>=0))try{t.hostname=qs.toASCII(t.hostname)}catch{}return ei(ti(t))}function ec(e){let t=pi(e,!0);if(t.hostname&&(!t.protocol||Qs.indexOf(t.protocol)>=0))try{t.hostname=qs.toUnicode(t.hostname)}catch{}return Zr(ti(t),Zr.defaultChars+`%`)}function tc(e,t){if(!(this instanceof tc))return new tc(e,t);t||Ui(e)||(t=e||{},e=`default`),this.inline=new ns,this.block=new bo,this.core=new Za,this.renderer=new Sa,this.linkify=new bs,this.validateLink=Zs,this.normalizeLink=$s,this.normalizeLinkText=ec,this.utils=Vi,this.helpers=Ki({},ba),this.options={},this.configure(e),t&&this.set(t)}tc.prototype.set=function(e){return Ki(this.options,e),this},tc.prototype.configure=function(e){let t=this;if(Ui(e)){let t=e;if(e=Js[t],!e)throw Error('Wrong `markdown-it` preset "'+t+`", check name`)}if(!e)throw Error("Wrong `markdown-it` preset, can't be empty");return e.options&&t.set(e.options),e.components&&Object.keys(e.components).forEach(function(n){e.components[n].rules&&t[n].ruler.enableOnly(e.components[n].rules),e.components[n].rules2&&t[n].ruler2.enableOnly(e.components[n].rules2)}),this},tc.prototype.enable=function(e,t){let n=[];Array.isArray(e)||(e=[e]),[`core`,`block`,`inline`].forEach(function(t){n=n.concat(this[t].ruler.enable(e,!0))},this),n=n.concat(this.inline.ruler2.enable(e,!0));let r=e.filter(function(e){return n.indexOf(e)<0});if(r.length&&!t)throw Error(`MarkdownIt. Failed to enable unknown rule(s): `+r);return this},tc.prototype.disable=function(e,t){let n=[];Array.isArray(e)||(e=[e]),[`core`,`block`,`inline`].forEach(function(t){n=n.concat(this[t].ruler.disable(e,!0))},this),n=n.concat(this.inline.ruler2.disable(e,!0));let r=e.filter(function(e){return n.indexOf(e)<0});if(r.length&&!t)throw Error(`MarkdownIt. Failed to disable unknown rule(s): `+r);return this},tc.prototype.use=function(e){let t=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,t),this},tc.prototype.parse=function(e,t){if(typeof e!=`string`)throw Error(`Input data should be a String`);let n=new this.core.State(e,this,t);return this.core.process(n),n.tokens},tc.prototype.render=function(e,t){return t||={},this.renderer.render(this.parse(e,t),this.options,t)},tc.prototype.parseInline=function(e,t){let n=new this.core.State(e,this,t);return n.inlineMode=!0,this.core.process(n),n.tokens},tc.prototype.renderInline=function(e,t){return t||={},this.renderer.render(this.parseInline(e,t),this.options,t)};var nc=new tc({html:!1,linkify:!0}),rc=Object.assign({"../../content/guidelines/1.Login_OpenShift/1-Login--Open-Shift.md":Ln,"../../content/guidelines/1.Login_OpenShift/11-System-Setup-Before-Login.md":Rn,"../../content/guidelines/1.Login_OpenShift/12.md":zn,"../../content/guidelines/1.Troubleshooting/11-Printer-and-Cash-Drawer.md":Bn,"../../content/guidelines/1.Troubleshooting/12-Close-Staffs-Previous-Shift.md":Vn,"../../content/guidelines/1.Troubleshooting/13-Customer-Display-Stuck.md":Hn,"../../content/guidelines/1.Troubleshooting/14-POS-Device-Not-Showing-Up.md":Un,"../../content/guidelines/1.Troubleshooting/15-POS-Device-Lagging.md":Wn,"../../content/guidelines/2.Logout_CloseShift/2-Logout--Close-Shift.md":Gn,"../../content/guidelines/2.Logout_CloseShift/21-Close-Shift.md":Kn,"../../content/guidelines/2.Logout_CloseShift/22-Attendance-Records.md":qn,"../../content/guidelines/2.Logout_CloseShift/22-Logout.md":Jn,"../../content/guidelines/3.RestaurantTableLayout/3-Restaurant-Table-Layout.md":Yn,"../../content/guidelines/3.RestaurantTableLayout/31-Create-a-Section.md":Xn,"../../content/guidelines/3.RestaurantTableLayout/32-Delete-a-Section.md":Zn,"../../content/guidelines/3.RestaurantTableLayout/33-Update-a-Section.md":Qn,"../../content/guidelines/3.RestaurantTableLayout/34-Add-a-Table.md":$n,"../../content/guidelines/3.RestaurantTableLayout/35-Delete-a-Table.md":er,"../../content/guidelines/4.SalesScreenAndItems/4-Sales-Screen-and-Items.md":tr,"../../content/guidelines/4.SalesScreenAndItems/41-Sales-Screen-Layout.md":nr,"../../content/guidelines/4.SalesScreenAndItems/42-Category-Creation.md":rr,"../../content/guidelines/4.SalesScreenAndItems/43--Items-Creation.md":ir,"../../content/guidelines/4.SalesScreenAndItems/44Item-Placement-in-POS.md":ar,"../../content/guidelines/4.SalesScreenAndItems/How-to-Add-Predefined-Variant.md":or,"../../content/guidelines/4.SalesScreenAndItems/How-to-access-Management-Hub.md":sr,"../../content/guidelines/4.SalesScreenAndItems/How-to-add-Predefined-Modifiers.md":cr,"../../content/guidelines/5.ManageOrders/5-Manage-Orders.md":lr,"../../content/guidelines/5.ManageOrders/51-Choose-the-Order-Type.md":ur,"../../content/guidelines/5.ManageOrders/51-Order-Options.md":dr,"../../content/guidelines/5.ManageOrders/52-Update-Order.md":fr,"../../content/guidelines/5.ManageOrders/54-Move-Order.md":pr,"../../content/guidelines/5.ManageOrders/55-Delete-Order.md":mr,"../../content/guidelines/5.ManageOrders/56-Move-Order.md":hr,"../../content/guidelines/5.ManageOrders/57-Delete-Order.md":gr,"../../content/guidelines/5.ManageOrders/58-Change-Order.md":_r,"../../content/guidelines/6.ManageReceipts/6-Manage-Receipts.md":vr,"../../content/guidelines/6.ManageReceipts/61-Start-Charging-the-Order.md":yr,"../../content/guidelines/6.ManageReceipts/62-Perform-Refund.md":br,"../../content/guidelines/6.ManageReceipts/62-Receipt-Management-on-Management-Hub.md":xr,"../../content/guidelines/6.ManageReceipts/63-Change-Payment-Type.md":Sr,"../../content/guidelines/6.ManageReceipts/65-Receipt-Settings.md":Cr,"../../content/guidelines/7.Settings/7-Settings.md":wr,"../../content/guidelines/7.Settings/71-Printers-Settings.md":Tr,"../../content/guidelines/7.Settings/72-Customer-Display-Settings.md":Er,"../../content/guidelines/7.Settings/73-Permissions.md":Dr,"../../content/guidelines/7.Settings/74-System-Configuration.md":Or,"../../content/guidelines/7.Settings/75-Features-on-Management-Hub.md":kr,"../../content/guidelines/8.InventoryManagementLogs/80-Inventory-Management--Logs.md":Ar,"../../content/guidelines/8.InventoryManagementLogs/81-How-to-Setup-Inventory.md":jr,"../../content/guidelines/8.InventoryManagementLogs/81-Suppliers.md":Mr,"../../content/guidelines/8.InventoryManagementLogs/82-Inventory-Adjustments.md":Nr,"../../content/guidelines/8.InventoryManagementLogs/83-Inventory-History.md":Pr,"../../content/guidelines/8.InventoryManagementLogs/84-Deleted-Order.md":Fr,"../../content/guidelines/8.InventoryManagementLogs/85-Cash-Drawer-Logs.md":Ir,"../../content/guidelines/8.InventoryManagementLogs/86-Import-History.md":Lr,"../../content/guidelines/PROLOGUE/Release-Note.md":Rr,"../../content/guidelines/PROLOGUE/Upgrade-Guide.md":zr}),ic=Object.assign({"../../content/release-notes/2.2.2.md":Br,"../../content/release-notes/2.2.3.md":Vr,"../../content/release-notes/2.2.4.md":Hr,"../../content/release-notes/2.2.5.md":Ur,"../../content/release-notes/2.2.6.md":Wr,"../../content/release-notes/2.2.7.md":Gr,"../../content/release-notes/2.3.0.md":Kr,"../../content/release-notes/2.3.1.md":qr,"../../content/release-notes/2.3.2.md":Jr}),ac=e=>{let t=e.trim().replace(/^['"]|['"]$/g,``);return t===`true`?!0:t===`false`?!1:t!==``&&!Number.isNaN(Number(t))?Number(t):t},oc=(e,t)=>{let n=t.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/),r={},i=n?n[2]:t;n&&n[1].split(/\r?\n/).forEach(e=>{let t=e.indexOf(`:`);if(t===-1)return;let n=e.slice(0,t).trim(),i=e.slice(t+1);r[n]=ac(i)});let a=e.split(`/`).pop().replace(/\.md$/,``);return{...r,body:i,_sys:{filename:a}}},sc=Object.entries(rc).map(([e,t])=>oc(e,t)).sort((e,t)=>(e.order||99)-(t.order||99)),cc=/^\d+\.\d+\.\d+$/,lc=/^\d{4}-\d{2}-\d{2}$/,uc=e=>{if(typeof e!=`string`||!lc.test(e))return!1;let[t,n,r]=e.split(`-`).map(Number),i=new Date(Date.UTC(t,n-1,r));return i.getUTCFullYear()===t&&i.getUTCMonth()===n-1&&i.getUTCDate()===r},dc=(e,t)=>{let n=t.releaseDate.localeCompare(e.releaseDate);if(n!==0)return n;let r=e.version.split(`.`).map(Number),i=t.version.split(`.`).map(Number);for(let e=0;e<r.length;e+=1)if(r[e]!==i[e])return i[e]-r[e];return 0},fc=Object.entries(ic).map(([e,t])=>oc(e,t)),pc=new Set;fc.forEach(e=>{if(!cc.test(e.version||``))throw Error(`Release note ${e._sys.filename} must have a semantic version such as 2.2.2.`);if(!uc(e.releaseDate))throw Error(`Release note ${e.version} must have a valid ISO releaseDate (YYYY-MM-DD).`);if(pc.has(e.version))throw Error(`Duplicate release-note version: ${e.version}.`);pc.add(e.version)});var mc=fc.sort(dc),hc=e=>nc.render((e||``).replaceAll(`http://localhost:5173`,``));function gc(e,t){return function(){return e.apply(t,arguments)}}var{toString:_c}=Object.prototype,{getPrototypeOf:vc}=Object,{iterator:yc,toStringTag:bc}=Symbol,xc=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Sc=(e,t)=>{let n=e,r=[];for(;n!=null&&n!==Object.prototype;){if(r.indexOf(n)!==-1)return!1;if(r.push(n),xc(n,t))return!0;n=vc(n)}return!1},Cc=(e,t)=>e!=null&&Sc(e,t)?e[t]:void 0,wc=(e=>t=>{let n=_c.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Tc=e=>(e=e.toLowerCase(),t=>wc(t)===e),Ec=e=>t=>typeof t===e,{isArray:Dc}=Array,Oc=Ec(`undefined`);function kc(e){return e!==null&&!Oc(e)&&e.constructor!==null&&!Oc(e.constructor)&&Nc(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}var Ac=Tc(`ArrayBuffer`);function jc(e){let t;return t=typeof ArrayBuffer<`u`&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&Ac(e.buffer),t}var Mc=Ec(`string`),Nc=Ec(`function`),Pc=Ec(`number`),Fc=e=>typeof e==`object`&&!!e,Ic=e=>e===!0||e===!1,Lc=e=>{if(!Fc(e))return!1;let t=vc(e);return(t===null||t===Object.prototype||vc(t)===null)&&!Sc(e,bc)&&!Sc(e,yc)},Rc=e=>{if(!Fc(e)||kc(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},zc=Tc(`Date`),Bc=Tc(`File`),Vc=e=>!!(e&&e.uri!==void 0),Hc=e=>e&&e.getParts!==void 0,Uc=Tc(`Blob`),Wc=Tc(`FileList`),Gc=Tc(`Set`),Kc=e=>Fc(e)&&Nc(e.pipe);function qc(){return typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{}}var Jc=qc(),Yc=Jc.FormData===void 0?void 0:Jc.FormData,Xc=e=>{if(!e)return!1;if(Yc&&e instanceof Yc)return!0;let t=vc(e);if(!t||t===Object.prototype||!Nc(e.append))return!1;let n=wc(e);return n===`formdata`||n===`object`&&Nc(e.toString)&&e.toString()===`[object FormData]`},Zc=Tc(`URLSearchParams`),[Qc,$c,el,tl]=[`ReadableStream`,`Request`,`Response`,`Headers`].map(Tc),nl=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,``);function rl(e,t,{allOwnKeys:n=!1}={}){if(e==null)return;let r,i;if(typeof e!=`object`&&(e=[e]),Dc(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{if(kc(e))return;let i=n?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length,o;for(r=0;r<a;r++)o=i[r],t.call(null,e[o],o,e)}}function il(e,t){if(kc(e))return null;t=t.toLowerCase();let n=Object.keys(e),r=n.length,i;for(;r-->0;)if(i=n[r],t===i.toLowerCase())return i;return null}var al=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:global,ol=e=>!Oc(e)&&e!==al;function sl(...e){let{caseless:t,skipUndefined:n}=ol(this)&&this||{},r={},i=(e,i)=>{if(i===`__proto__`||i===`constructor`||i===`prototype`)return;let a=t&&typeof i==`string`&&il(r,i)||i,o=xc(r,a)?r[a]:void 0;Lc(o)&&Lc(e)?r[a]=sl(o,e):Lc(e)?r[a]=sl({},e):Dc(e)?r[a]=e.slice():(!n||!Oc(e))&&(r[a]=e)};for(let t=0,n=e.length;t<n;t++){let n=e[t];if(!n||kc(n)||(rl(n,i),typeof n!=`object`||Dc(n)))continue;let r=Object.getOwnPropertySymbols(n);for(let e=0;e<r.length;e++){let t=r[e];yl.call(n,t)&&i(n[t],t)}}return r}var cl=(e,t,n,{allOwnKeys:r}={})=>(rl(t,(t,r)=>{n&&Nc(t)?Object.defineProperty(e,r,{__proto__:null,value:gc(t,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,r,{__proto__:null,value:t,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),e),ll=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),ul=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),Object.defineProperty(e.prototype,"constructor",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{__proto__:null,value:t.prototype}),n&&Object.assign(e.prototype,n)},dl=(e,t,n,r)=>{let i,a,o,s={};if(t||={},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),a=i.length;a-->0;)o=i[a],(!r||r(o,e,t))&&!s[o]&&(t[o]=e[o],s[o]=!0);e=n!==!1&&vc(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},fl=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;let r=e.indexOf(t,n);return r!==-1&&r===n},pl=e=>{if(!e)return null;if(Dc(e))return e;let t=e.length;if(!Pc(t))return null;let n=Array(t);for(;t-->0;)n[t]=e[t];return n},ml=(e=>t=>e&&t instanceof e)(typeof Uint8Array<`u`&&vc(Uint8Array)),hl=(e,t)=>{let n=(e&&e[yc]).call(e),r;for(;(r=n.next())&&!r.done;){let n=r.value;t.call(e,n[0],n[1])}},gl=(e,t)=>{let n,r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},_l=Tc(`HTMLFormElement`),vl=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,n){return t.toUpperCase()+n}),{propertyIsEnumerable:yl}=Object.prototype,bl=Tc(`RegExp`),xl=(e,t)=>{let n=Object.getOwnPropertyDescriptors(e),r={};rl(n,(n,i)=>{let a;(a=t(n,i,e))!==!1&&(r[i]=a||n)}),Object.defineProperties(e,r)},Sl=e=>{xl(e,(t,n)=>{if(Nc(e)&&[`arguments`,`caller`,`callee`].includes(n))return!1;let r=e[n];if(Nc(r)){if(t.enumerable=!1,`writable`in t){t.writable=!1;return}t.set||=()=>{throw Error(`Can not rewrite read-only method '`+n+`'`)}}})},Cl=(e,t)=>{let n={},r=e=>{e.forEach(e=>{n[e]=!0})};return Dc(e)?r(e):r(String(e).split(t)),n},wl=()=>{},Tl=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function El(e){return!!(e&&Nc(e.append)&&e[bc]===`FormData`&&e[yc])}var Dl=e=>{let t=new WeakSet,n=e=>{if(Fc(e)){if(t.has(e))return;if(kc(e))return e;if(!(`toJSON`in e)){t.add(e);let r;if(Gc(e)){r=[];for(let t of e){let e=n(t);!Oc(e)&&r.push(e)}}else r=Dc(e)?[]:{},rl(e,(e,t)=>{let i=n(e);!Oc(i)&&(r[t]=i)});return t.delete(e),r}}return e};return n(e)},Ol=Tc(`AsyncFunction`),kl=e=>e&&(Fc(e)||Nc(e))&&Nc(e.then)&&Nc(e.catch),Al=((e,t)=>e?setImmediate:t?((e,t)=>(al.addEventListener(`message`,({source:n,data:r})=>{n===al&&r===e&&t.length&&t.shift()()},!1),n=>{t.push(n),al.postMessage(e,`*`)}))(`axios@${Math.random()}`,[]):e=>setTimeout(e))(typeof setImmediate==`function`,Nc(al.postMessage)),jl=typeof queueMicrotask<`u`?queueMicrotask.bind(al):typeof process<`u`&&process.nextTick||Al,Ml=e=>e!=null&&Nc(e[yc]),V={isArray:Dc,isArrayBuffer:Ac,isBuffer:kc,isFormData:Xc,isArrayBufferView:jc,isString:Mc,isNumber:Pc,isBoolean:Ic,isObject:Fc,isPlainObject:Lc,isEmptyObject:Rc,isReadableStream:Qc,isRequest:$c,isResponse:el,isHeaders:tl,isUndefined:Oc,isDate:zc,isFile:Bc,isReactNativeBlob:Vc,isReactNative:Hc,isBlob:Uc,isRegExp:bl,isFunction:Nc,isStream:Kc,isURLSearchParams:Zc,isTypedArray:ml,isFileList:Wc,forEach:rl,merge:sl,extend:cl,trim:nl,stripBOM:ll,inherits:ul,toFlatObject:dl,kindOf:wc,kindOfTest:Tc,endsWith:fl,toArray:pl,forEachEntry:hl,matchAll:gl,isHTMLForm:_l,hasOwnProperty:xc,hasOwnProp:xc,hasOwnInPrototypeChain:Sc,getSafeProp:Cc,reduceDescriptors:xl,freezeMethods:Sl,toObjectSet:Cl,toCamelCase:vl,noop:wl,toFiniteNumber:Tl,findKey:il,global:al,isContextDefined:ol,isSpecCompliantForm:El,toJSONObject:Dl,isAsyncFn:Ol,isThenable:kl,setImmediate:Al,asap:jl,isIterable:Ml,isSafeIterable:e=>e!=null&&Sc(e,yc)&&Ml(e)},Nl=V.toObjectSet([`age`,`authorization`,`content-length`,`content-type`,`etag`,`expires`,`from`,`host`,`if-modified-since`,`if-unmodified-since`,`last-modified`,`location`,`max-forwards`,`proxy-authorization`,`referer`,`retry-after`,`user-agent`]),Pl=e=>{let t={},n,r,i;return e&&e.split(`
`).forEach(function(e){i=e.indexOf(`:`),n=e.substring(0,i).trim().toLowerCase(),r=e.substring(i+1).trim();let a=V.hasOwnProp(t,n);!n||a&&V.hasOwnProp(Nl,n)||(n===`set-cookie`?a?t[n].push(r):t[n]=[r]:t[n]=a?t[n]+`, `+r:r)}),t};function Fl(e){let t=0,n=e.length;for(;t<n;){let n=e.charCodeAt(t);if(n!==9&&n!==32)break;t+=1}for(;n>t;){let t=e.charCodeAt(n-1);if(t!==9&&t!==32)break;--n}return t===0&&n===e.length?e:e.slice(t,n)}var Il=RegExp(`[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+`,`g`),Ll=RegExp(`[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+`,`g`);function Rl(e,t){return V.isArray(e)?e.map(e=>Rl(e,t)):Fl(String(e).replace(t,``))}var zl=e=>Rl(e,Il),Bl=e=>Rl(e,Ll);function Vl(e){let t=Object.create(null);return V.forEach(e.toJSON(),(e,n)=>{t[n]=Bl(e)}),t}var Hl=Symbol(`internals`);function H(e){return e&&String(e).trim().toLowerCase()}function Ul(e){return e===!1||e==null?e:V.isArray(e)?e.map(Ul):zl(String(e))}function U(e){let t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g,r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}var W=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function Wl(e){let t=0,n=e.length;for(;t<n;){let n=e.charCodeAt(t);if(n!==9&&n!==32)break;t+=1}for(;n>t;){let t=e.charCodeAt(n-1);if(t!==9&&t!==32)break;--n}return t===0&&n===e.length?e:e.slice(t,n)}function Gl(e){let t=e.length-1;if(t<1||e.charCodeAt(0)!==34||e.charCodeAt(t)!==34)return e;let n=``;for(let r=1;r<t;r++){let i=e.charCodeAt(r);if(i===34||i===92&&(r+=1,r>=t))return e;n+=e[r]}return n}function Kl(e){let t=Object.create(null),n=String(e),r=0,i=!1,a=!1;function o(e){let i=Wl(n.slice(r,e)),a=i.indexOf(`=`);if(a<1)return;let o=Wl(i.slice(0,a));if(!W.test(o))return;let s=o.toLowerCase();if(s===`__proto__`||s===`constructor`||s===`prototype`)return;let c=Wl(i.slice(a+1));t[s]=Gl(c)}for(let e=0;e<n.length;e++){let t=n.charCodeAt(e);i?a?a=!1:t===92?a=!0:t===34&&(i=!1):t===34?i=!0:(t===44||t===59)&&(o(e),r=e+1)}return o(n.length),t}var ql=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Jl(e,t,n,r,i){if(V.isFunction(r))return r.call(this,t,n);if(i&&(t=n),V.isString(t)){if(V.isString(r))return t.indexOf(r)!==-1;if(V.isRegExp(r))return r.test(t)}}function Yl(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,n)=>t.toUpperCase()+n)}function Xl(e,t){let n=V.toCamelCase(` `+t);[`get`,`set`,`has`].forEach(r=>{Object.defineProperty(e,r+n,{__proto__:null,value:function(e,n,i){return this[r].call(this,t,e,n,i)},configurable:!0})})}var Zl=class{constructor(e){e&&this.set(e)}set(e,t,n){let r=this;function i(e,t,n){let i=H(t);if(!i)return;let a=V.findKey(r,i);(!a||r[a]===void 0||n===!0||n===void 0&&r[a]!==!1)&&(r[a||t]=Ul(e))}let a=(e,t)=>V.forEach(e,(e,n)=>i(e,n,t));if(V.isPlainObject(e)||e instanceof this.constructor)a(e,t);else if(V.isString(e)&&(e=e.trim())&&!ql(e))a(Pl(e),t);else if(V.isObject(e)&&V.isSafeIterable(e)){let n=Object.create(null),r,i;for(let t of e){if(!V.isArray(t))throw TypeError(`Object iterator must return a key-value pair`);i=t[0],V.hasOwnProp(n,i)?(r=n[i],n[i]=V.isArray(r)?[...r,t[1]]:[r,t[1]]):n[i]=t[1]}a(n,t)}else e!=null&&i(t,e,n);return this}get(e,t){if(e=H(e),e){let n=V.findKey(this,e);if(n){let e=this[n];if(!t)return e;if(t===!0)return U(e);if(V.isFunction(t))return t.call(this,e,n);if(V.isRegExp(t))return t.exec(e);throw TypeError(`parser must be boolean|regexp|function`)}}}has(e,t){if(e=H(e),e){let n=V.findKey(this,e);return!!(n&&this[n]!==void 0&&(!t||Jl(this,this[n],n,t)))}return!1}delete(e,t){let n=this,r=!1;function i(e){if(e=H(e),e){let i=V.findKey(n,e);i&&(!t||Jl(n,n[i],i,t))&&(delete n[i],r=!0)}}return V.isArray(e)?e.forEach(i):i(e),r}clear(e){let t=Object.keys(this),n=t.length,r=!1;for(;n--;){let i=t[n];(!e||Jl(this,this[i],i,e,!0))&&(delete this[i],r=!0)}return r}normalize(e){let t=this,n={};return V.forEach(this,(r,i)=>{let a=V.findKey(n,i);if(a){t[a]=Ul(r),delete t[i];return}let o=e?Yl(i):String(i).trim();o!==i&&delete t[i],t[o]=Ul(r),n[o]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){let t=Object.create(null);return V.forEach(this,(n,r)=>{n!=null&&n!==!1&&(t[r]=e&&V.isArray(n)?n.join(`, `):n)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+`: `+t).join(`
`)}getSetCookie(){let e=this.get(`set-cookie`);return V.isArray(e)?e:e==null||e===!1?[]:[e]}get[Symbol.toStringTag](){return`AxiosHeaders`}static from(e){return e instanceof this?e:new this(e)}static parseParameters(e){return Kl(e)}static concat(e,...t){let n=new this(e);return t.forEach(e=>n.set(e)),n}static accessor(e){let t=(this[Hl]=this[Hl]={accessors:{}}).accessors,n=this.prototype;function r(e){let r=H(e);t[r]||(Xl(n,e),t[r]=!0)}return V.isArray(e)?e.forEach(r):r(e),this}};Zl.accessor([`Content-Type`,`Content-Length`,`Accept`,`Accept-Encoding`,`User-Agent`,`Authorization`]),V.reduceDescriptors(Zl.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}}),V.freezeMethods(Zl);var Ql=`[REDACTED ****]`;function $l(e){if(V.hasOwnProp(e,`toJSON`))return!0;let t=Object.getPrototypeOf(e);for(;t&&t!==Object.prototype;){if(V.hasOwnProp(t,`toJSON`))return!0;t=Object.getPrototypeOf(t)}return!1}function eu(e,t){let n=new Set(t.map(e=>String(e).toLowerCase())),r=[],i=e=>{if(typeof e!=`object`||!e||V.isBuffer(e))return e;if(r.indexOf(e)!==-1)return;e instanceof Zl&&(e=e.toJSON()),r.push(e);let t;if(V.isArray(e))t=[],e.forEach((e,n)=>{let r=i(e);V.isUndefined(r)||(t[n]=r)});else{if(!V.isPlainObject(e)&&$l(e))return r.pop(),e;t=Object.create(null);for(let[r,a]of Object.entries(e)){let e=n.has(r.toLowerCase())?Ql:i(a);V.isUndefined(e)||(t[r]=e)}}return r.pop(),t};return i(e)}function tu(e){try{return String(e)}catch{return``}}function nu(e){return e.errors.map(e=>{try{return e&&e.message?tu(e.message):tu(e)}catch{return``}}).filter(Boolean).join(`; `)||e.name||`AggregateError`}var G=class e extends Error{static from(t,n,r,i,a,o){let s=t.message;!s&&V.isArray(t.errors)&&t.errors.length&&(s=nu(t));let c=new e(s,n||t.code,r,i,a);return Object.defineProperty(c,"cause",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),c.name=t.name,t.status!=null&&c.status==null&&(c.status=t.status),o&&Object.assign(c,o),c}constructor(e,t,n,r,i){super(e),Object.defineProperty(this,"message",{__proto__:null,value:e,enumerable:!0,writable:!0,configurable:!0}),this.name=`AxiosError`,this.isAxiosError=!0,t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status)}toJSON(){let e=this.config,t=e&&V.hasOwnProp(e,`redact`)?e.redact:void 0,n=V.isArray(t)&&t.length>0?eu(e,t):V.toJSONObject(e);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:n,code:this.code,status:this.status}}};G.ERR_BAD_OPTION_VALUE=`ERR_BAD_OPTION_VALUE`,G.ERR_BAD_OPTION=`ERR_BAD_OPTION`,G.ECONNABORTED=`ECONNABORTED`,G.ETIMEDOUT=`ETIMEDOUT`,G.ECONNREFUSED=`ECONNREFUSED`,G.ERR_NETWORK=`ERR_NETWORK`,G.ERR_FR_TOO_MANY_REDIRECTS=`ERR_FR_TOO_MANY_REDIRECTS`,G.ERR_DEPRECATED=`ERR_DEPRECATED`,G.ERR_BAD_RESPONSE=`ERR_BAD_RESPONSE`,G.ERR_BAD_REQUEST=`ERR_BAD_REQUEST`,G.ERR_CANCELED=`ERR_CANCELED`,G.ERR_NOT_SUPPORT=`ERR_NOT_SUPPORT`,G.ERR_INVALID_URL=`ERR_INVALID_URL`,G.ERR_FORM_DATA_DEPTH_EXCEEDED=`ERR_FORM_DATA_DEPTH_EXCEEDED`;function ru(e){return V.isPlainObject(e)||V.isArray(e)}function iu(e){return V.endsWith(e,`[]`)?e.slice(0,-2):e}function au(e,t,n){return e?e.concat(t).map(function(e,t){return e=iu(e),!n&&t?`[`+e+`]`:e}).join(n?`.`:``):t}function ou(e){return V.isArray(e)&&!e.some(ru)}var su=V.toFlatObject(V,{},null,function(e){return/^is[A-Z]/.test(e)});function cu(e,t,n){if(!V.isObject(e))throw TypeError(`target must be an object`);t||=new FormData,n=V.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(e,t){return!V.isUndefined(t[e])});let r=n.metaTokens,i=n.visitor||m,a=n.dots,o=n.indexes,s=n.Blob||typeof Blob<`u`&&Blob,c=n.maxDepth===void 0?100:n.maxDepth,l=s&&V.isSpecCompliantForm(t),u=[];if(!V.isFunction(i))throw TypeError(`visitor must be a function`);function d(e){if(e===null)return``;if(V.isDate(e))return e.toISOString();if(V.isBoolean(e))return e.toString();if(!l&&V.isBlob(e))throw new G(`Blob is not supported. Use a Buffer instead.`);if(V.isArrayBuffer(e)||V.isTypedArray(e)){if(l&&typeof s==`function`)return new s([e]);throw new G(`Blob is not supported. Use a Buffer instead.`,G.ERR_NOT_SUPPORT)}return e}function f(e){if(e>c)throw new G(`Object is too deeply nested (`+e+` levels). Max depth: `+c,G.ERR_FORM_DATA_DEPTH_EXCEEDED)}function p(e,t){if(c===1/0)return JSON.stringify(e);let n=[];return JSON.stringify(e,function(e,r){if(!V.isObject(r))return r;for(;n.length&&n[n.length-1]!==this;)n.pop();return n.push(r),f(t+n.length-1),r})}function m(e,n,i){let s=e;if(V.isReactNative(t)&&V.isReactNativeBlob(e))return t.append(au(i,n,a),d(e)),!1;if(e&&!i&&typeof e==`object`){if(V.endsWith(n,`{}`))n=r?n:n.slice(0,-2),e=p(e,1);else if(V.isArray(e)&&ou(e)||(V.isFileList(e)||V.endsWith(n,`[]`))&&(s=V.toArray(e)))return n=iu(n),s.forEach(function(e,r){!(V.isUndefined(e)||e===null)&&t.append(o===!0?au([n],r,a):o===null?n:n+`[]`,d(e))}),!1}return ru(e)?!0:(t.append(au(i,n,a),d(e)),!1)}let h=Object.assign(su,{defaultVisitor:m,convertValue:d,isVisitable:ru});function g(e,n,r=0){if(!V.isUndefined(e)){if(f(r),u.indexOf(e)!==-1)throw Error(`Circular reference detected in `+n.join(`.`));u.push(e),V.forEach(e,function(e,a){(!(V.isUndefined(e)||e===null)&&i.call(t,e,V.isString(a)?a.trim():a,n,h))===!0&&g(e,n?n.concat(a):[a],r+1)}),u.pop()}}if(!V.isObject(e))throw TypeError(`data must be an object`);return g(e),t}function lu(e){let t={"!":`%21`,"'":`%27`,"(":`%28`,")":`%29`,"~":`%7E`,"%20":`+`};return encodeURIComponent(e).replace(/[!'()~]|%20/g,function(e){return t[e]})}function uu(e,t){this._pairs=[],e&&cu(e,this,t)}var du=uu.prototype;du.append=function(e,t){this._pairs.push([e,t])},du.toString=function(e){let t=e?t=>e.call(this,t,lu):lu;return this._pairs.map(function(e){return t(e[0])+`=`+t(e[1])},``).join(`&`)};function fu(e){return encodeURIComponent(e).replace(/%3A/gi,`:`).replace(/%24/g,`$`).replace(/%2C/gi,`,`).replace(/%20/g,`+`)}function pu(e,t,n){if(!t)return e;e||=``;let r=V.isFunction(n)?{serialize:n}:n,i=V.getSafeProp(r,`encode`)||fu,a=V.getSafeProp(r,`serialize`),o;if(o=a?a(t,r):V.isURLSearchParams(t)?t.toString():new uu(t,r).toString(i),o){let t=e.indexOf(`#`);t!==-1&&(e=e.slice(0,t)),e+=(e.indexOf(`?`)===-1?`?`:`&`)+o}return e}var mu=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&=[]}forEach(e){V.forEach(this.handlers,function(t){t!==null&&e(t)})}},hu={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},gu={isBrowser:!0,classes:{URLSearchParams:typeof URLSearchParams<`u`?URLSearchParams:uu,FormData:typeof FormData<`u`?FormData:null,Blob:typeof Blob<`u`?Blob:null},protocols:[`http`,`https`,`file`,`blob`,`url`,`data`]},_u=s({hasBrowserEnv:()=>vu,hasStandardBrowserEnv:()=>bu,hasStandardBrowserWebWorkerEnv:()=>xu,navigator:()=>yu,origin:()=>Su}),vu=typeof window<`u`&&typeof document<`u`,yu=typeof navigator==`object`&&navigator||void 0,bu=vu&&(!yu||[`ReactNative`,`NativeScript`,`NS`].indexOf(yu.product)<0),xu=typeof WorkerGlobalScope<`u`&&self instanceof WorkerGlobalScope&&typeof self.importScripts==`function`,Su=vu&&window.location.href||`http://localhost`,Cu={..._u,...gu};function wu(e,t){return cu(e,new Cu.classes.URLSearchParams,{visitor:function(e,t,n,r){return Cu.isNode&&V.isBuffer(e)?(this.append(t,e.toString(`base64`)),!1):r.defaultVisitor.apply(this,arguments)},...t})}var Tu=100;function Eu(e){if(e>Tu)throw new G(`FormData field is too deeply nested (`+e+` levels). Max depth: `+Tu,G.ERR_FORM_DATA_DEPTH_EXCEEDED)}function Du(e){let t=[],n=/[^.[\]]+|\[([^.[\]]*)]/g,r;for(;(r=n.exec(e))!==null;)Eu(t.length),t.push(r[0]===`[]`?``:r[1]||r[0]);return t}function Ou(e){let t={},n=Object.keys(e),r,i=n.length,a;for(r=0;r<i;r++)a=n[r],t[a]=e[a];return t}function ku(e){function t(e,n,r,i){Eu(i);let a=e[i++];if(a===`__proto__`)return!0;let o=Number.isFinite(+a),s=i>=e.length;return a=!a&&V.isArray(r)?r.length:a,s?(V.hasOwnProp(r,a)?r[a]=V.isArray(r[a])?r[a].concat(n):[r[a],n]:r[a]=n,!o):((!V.hasOwnProp(r,a)||!V.isObject(r[a]))&&(r[a]=[]),t(e,n,r[a],i)&&V.isArray(r[a])&&(r[a]=Ou(r[a])),!o)}if(V.isFormData(e)&&V.isFunction(e.entries)){let n={};return V.forEachEntry(e,(e,r)=>{t(Du(e),r,n,0)}),n}return null}var Au=(e,t)=>e!=null&&V.hasOwnProp(e,t)?e[t]:void 0;function ju(e,t,n){if(V.isString(e))try{return(t||JSON.parse)(e),V.trim(e)}catch(e){if(e.name!==`SyntaxError`)throw e}return(n||JSON.stringify)(e)}var Mu={transitional:hu,adapter:[`xhr`,`http`,`fetch`],transformRequest:[function(e,t){let n=t.getContentType()||``,r=n.indexOf(`application/json`)>-1,i=V.isObject(e);if(i&&V.isHTMLForm(e)&&(e=new FormData(e)),V.isFormData(e))return r?JSON.stringify(ku(e)):e;if(V.isArrayBuffer(e)||V.isBuffer(e)||V.isStream(e)||V.isFile(e)||V.isBlob(e)||V.isReadableStream(e))return e;if(V.isArrayBufferView(e))return e.buffer;if(V.isURLSearchParams(e))return t.setContentType(`application/x-www-form-urlencoded;charset=utf-8`,!1),e.toString();let a;if(i){let t=Au(this,`formSerializer`);if(n.indexOf(`application/x-www-form-urlencoded`)>-1)return wu(e,t).toString();if((a=V.isFileList(e))||n.indexOf(`multipart/form-data`)>-1){let n=Au(this,`env`),r=n&&n.FormData;return cu(a?{"files[]":e}:e,r&&new r,t)}}return i||r?(t.setContentType(`application/json`,!1),ju(e)):e}],transformResponse:[function(e){let t=Au(this,`transitional`)||Mu.transitional,n=t&&t.forcedJSONParsing,r=Au(this,`responseType`),i=r===`json`;if(V.isResponse(e)||V.isReadableStream(e))return e;if(e&&V.isString(e)&&(n&&!r||i)){let n=!(t&&t.silentJSONParsing)&&i;try{return JSON.parse(e,Au(this,`parseReviver`))}catch(e){if(n)throw e.name===`SyntaxError`?G.from(e,G.ERR_BAD_RESPONSE,this,null,Au(this,`response`)):e}}return e}],timeout:0,xsrfCookieName:`XSRF-TOKEN`,xsrfHeaderName:`X-XSRF-TOKEN`,maxContentLength:-1,maxBodyLength:-1,env:{FormData:Cu.classes.FormData,Blob:Cu.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:`application/json, text/plain, */*`,"Content-Type":void 0}}};V.forEach([`delete`,`get`,`head`,`post`,`put`,`patch`,`query`],e=>{Mu.headers[e]={}});function Nu(e,t){let n=this||Mu,r=t||n,i=Zl.from(r.headers),a=r.data;return V.forEach(e,function(e){a=e.call(n,a,i.normalize(),t?t.status:void 0)}),i.normalize(),a}function Pu(e){return!!(e&&e.__CANCEL__)}var Fu=class extends G{constructor(e,t,n){super(e??`canceled`,G.ERR_CANCELED,t,n),this.name=`CanceledError`,this.__CANCEL__=!0}};function Iu(e,t,n){let r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new G(`Request failed with status code `+n.status,n.status>=400&&n.status<500?G.ERR_BAD_REQUEST:G.ERR_BAD_RESPONSE,n.config,n.request,n))}function Lu(e){let t=/^([-+\w]{1,25}):(?:\/\/)?/.exec(e);return t&&t[1]||``}function Ru(e,t){e||=10;let n=Array(e),r=Array(e),i=0,a=0,o;return t=t===void 0?1e3:t,function(s){let c=Date.now(),l=r[a];o||=c,n[i]=s,r[i]=c;let u=a,d=0;for(;u!==i;)d+=n[u++],u%=e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),c-o<t)return;let f=l&&c-l;return f?Math.round(d*1e3/f):void 0}}function zu(e,t){let n=0,r=1e3/t,i,a,o=(t,r=Date.now())=>{n=r,i=null,a&&=(clearTimeout(a),null),e(...t)};return[(...e)=>{let t=Date.now(),s=t-n;s>=r?o(e,t):(i=e,a||=setTimeout(()=>{a=null,o(i)},r-s))},()=>i&&o(i)]}var Bu=(e,t,n=3)=>{let r=0,i=Ru(50,250);return zu(n=>{if(!n||typeof n.loaded!=`number`)return;let a=n.loaded,o=n.lengthComputable?n.total:void 0,s=Math.max(0,o==null?a:Math.min(a,o)),c=Math.max(0,s-r),l=i(c);r=Math.max(r,s),e({loaded:s,total:o,progress:o?s/o:void 0,bytes:c,rate:l||void 0,estimated:l&&o?(o-s)/l:void 0,event:n,lengthComputable:o!=null,[t?`download`:`upload`]:!0})},n)},Vu=(e,t)=>{let n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Hu=(e,t=V.asap)=>(...n)=>t(()=>e(...n)),Uu=Cu.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,Cu.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(Cu.origin),Cu.navigator&&/(msie|trident)/i.test(Cu.navigator.userAgent)):()=>!0,Wu=Cu.hasStandardBrowserEnv?{write(e,t,n,r,i,a,o){if(typeof document>`u`)return;let s=[`${e}=${encodeURIComponent(t)}`];V.isNumber(n)&&s.push(`expires=${new Date(n).toUTCString()}`),V.isString(r)&&s.push(`path=${r}`),V.isString(i)&&s.push(`domain=${i}`),a===!0&&s.push(`secure`),V.isString(o)&&s.push(`SameSite=${o}`),document.cookie=s.join(`; `)},read(e){if(typeof document>`u`)return null;let t=document.cookie.split(`;`);for(let n=0;n<t.length;n++){let r=t[n].replace(/^\s+/,``),i=r.indexOf(`=`);if(i!==-1&&r.slice(0,i)===e)try{return decodeURIComponent(r.slice(i+1))}catch{return r.slice(i+1)}}return null},remove(e){this.write(e,``,Date.now()-864e5,`/`)}}:{write(){},read(){return null},remove(){}};function Gu(e){return typeof e==`string`&&/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Ku(e,t){if(!t)return e;let n=e.length;for(;n>0&&e.charCodeAt(n-1)===47;)n--;return e.slice(0,n)+`/`+t.replace(/^\/+/,``)}var qu=/^https?:(?!\/\/)/i,Ju=/[\t\n\r]/g;function Yu(e){let t=0;for(;t<e.length&&e.charCodeAt(t)<=32;)t++;return e.slice(t)}function Xu(e){return Yu(e).replace(Ju,``)}function Zu(e){return e&&e.replace(/(^|&)([^=&]*=)?[^&]+/g,(e,t,n=``)=>`${t}${n}${Ql}`)}function Qu(e){let t=e.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${Ql}@`),n=t.indexOf(`#`),r=(n===-1?t:t.slice(0,n)).replace(/([?&][^=&#]*=)[^&#]*/g,`$1${Ql}`);return n===-1?r:`${r}#${Zu(t.slice(n+1))}`}function $u(e,t){if(typeof e==`string`){let n=Xu(e);if(qu.test(n))throw new G(`Invalid URL ${JSON.stringify(Qu(n))}: missing "//" after protocol`,G.ERR_INVALID_URL,t)}}function ed(e,t,n,r){$u(t,r);let i=!Gu(t);return e&&(i||n===!1)?($u(e,r),Ku(e,t)):t}var td=e=>e instanceof Zl?{...e}:e,nd=e=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(e).concat(Object.getOwnPropertySymbols(e).filter(t=>Object.getOwnPropertyDescriptor(e,t).enumerable)):Object.keys(e);function rd(e,t){e||={},t||={};let n=Object.create(null);Object.defineProperty(n,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function r(e,t,n,r){return V.isPlainObject(e)&&V.isPlainObject(t)?V.merge.call({caseless:r},e,t):V.isPlainObject(t)?V.merge({},t):V.isArray(t)?t.slice():t}function i(e,t,n,i){if(!V.isUndefined(t))return r(e,t,n,i);if(!V.isUndefined(e))return r(void 0,e,n,i)}function a(e,t){if(!V.isUndefined(t))return r(void 0,t)}function o(e,t){if(!V.isUndefined(t))return r(void 0,t);if(!V.isUndefined(e))return r(void 0,e)}function s(n){let r=V.hasOwnProp(t,`transitional`)?t.transitional:void 0;if(!V.isUndefined(r)){if(V.isPlainObject(r)){if(V.hasOwnProp(r,n))return r[n]}else return}let i=V.hasOwnProp(e,`transitional`)?e.transitional:void 0;if(V.isPlainObject(i)&&V.hasOwnProp(i,n))return i[n]}function c(n,i,a){if(V.hasOwnProp(t,a))return r(n,i);if(V.hasOwnProp(e,a))return r(void 0,n)}let l={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,allowedSocketPaths:o,responseEncoding:o,validateStatus:c,headers:(e,t,n)=>i(td(e),td(t),n,!0)};return V.forEach(nd({...e,...t}),function(r){if(r===`__proto__`||r===`constructor`||r===`prototype`)return;let a=V.hasOwnProp(l,r)?l[r]:i,o=a(V.hasOwnProp(e,r)?e[r]:void 0,V.hasOwnProp(t,r)?t[r]:void 0,r);V.isUndefined(o)&&a!==c||(n[r]=o)}),V.hasOwnProp(t,`validateStatus`)&&V.isUndefined(t.validateStatus)&&s(`validateStatusUndefinedResolves`)===!1&&(V.hasOwnProp(e,`validateStatus`)?n.validateStatus=r(void 0,e.validateStatus):delete n.validateStatus),n}var id=[`content-type`,`content-length`];function ad(e,t,n){if(n!==`content-only`){e.set(t);return}Object.entries(t||{}).forEach(([t,n])=>{id.includes(t.toLowerCase())&&e.set(t,n)})}var od=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(e,t)=>String.fromCharCode(parseInt(t,16)));function sd(e){let t=rd({},e),n=e=>V.hasOwnProp(t,e)?t[e]:void 0,r=n(`data`),i=n(`withXSRFToken`),a=n(`xsrfHeaderName`),o=n(`xsrfCookieName`),s=n(`headers`),c=n(`auth`),l=n(`baseURL`),u=n(`allowAbsoluteUrls`),d=n(`url`);if(t.headers=s=Zl.from(s),t.url=pu(ed(l,d,u,t),n(`params`),n(`paramsSerializer`)),c){let t=V.getSafeProp(c,`username`)||``,n=V.getSafeProp(c,`password`)||``;try{s.set(`Authorization`,`Basic `+btoa(t+`:`+(n?od(n):``)))}catch(t){throw G.from(t,G.ERR_BAD_OPTION_VALUE,e)}}if(V.isFormData(r)&&(Cu.hasStandardBrowserEnv||Cu.hasStandardBrowserWebWorkerEnv||V.isReactNative(r)?s.setContentType(void 0):V.isFunction(r.getHeaders)&&ad(s,r.getHeaders(),n(`formDataHeaderPolicy`))),Cu.hasStandardBrowserEnv&&(V.isFunction(i)&&(i=i(t)),i===!0||i==null&&Uu(t.url))){let e=a&&o&&Wu.read(o);e&&s.set(a,e)}return t}var cd=typeof XMLHttpRequest<`u`&&function(e){return new Promise(function(t,n){let r=sd(e),i=r.data,a=Zl.from(r.headers).normalize(),{responseType:o,onUploadProgress:s,onDownloadProgress:c}=r,l,u,d,f,p;function m(){f&&f(),p&&p(),r.cancelToken&&r.cancelToken.unsubscribe(l),r.signal&&r.signal.removeEventListener(`abort`,l)}let h=new XMLHttpRequest;h.open(r.method.toUpperCase(),r.url,!0),h.timeout=r.timeout;function g(){if(!h)return;let r=Zl.from(`getAllResponseHeaders`in h&&h.getAllResponseHeaders());Iu(function(e){t(e),m()},function(e){n(e),m()},{data:!o||o===`text`||o===`json`?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:r,config:e,request:h}),h=null}`onloadend`in h?h.onloadend=g:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.startsWith(`file:`))||setTimeout(g)},h.onabort=function(){h&&=(n(new G(`Request aborted`,G.ECONNABORTED,e,h)),m(),null)},h.onerror=function(t){let r=new G(t&&t.message?t.message:`Network Error`,G.ERR_NETWORK,e,h);r.event=t||null,n(r),m(),h=null},h.ontimeout=function(){let t=r.timeout?`timeout of `+r.timeout+`ms exceeded`:`timeout exceeded`,i=r.transitional||hu;r.timeoutErrorMessage&&(t=r.timeoutErrorMessage),n(new G(t,i.clarifyTimeoutError?G.ETIMEDOUT:G.ECONNABORTED,e,h)),m(),h=null},i===void 0&&a.setContentType(null),`setRequestHeader`in h&&V.forEach(Vl(a),function(e,t){h.setRequestHeader(t,e)}),V.isUndefined(r.withCredentials)||(h.withCredentials=!!r.withCredentials),o&&o!==`json`&&(h.responseType=r.responseType),c&&([d,p]=Bu(c,!0),h.addEventListener(`progress`,d)),s&&h.upload&&([u,f]=Bu(s),h.upload.addEventListener(`progress`,u),h.upload.addEventListener(`loadend`,f)),(r.cancelToken||r.signal)&&(l=t=>{h&&=(n(!t||t.type?new Fu(null,e,h):t),h.abort(),m(),null)},r.cancelToken&&r.cancelToken.subscribe(l),r.signal&&(r.signal.aborted?l():r.signal.addEventListener(`abort`,l)));let _=Lu(r.url);if(_&&!Cu.protocols.includes(_)){n(new G(`Unsupported protocol `+_+`:`,G.ERR_BAD_REQUEST,e)),m();return}h.send(i||null)})},ld=(e,t)=>{if(e=e?e.filter(Boolean):[],!t&&!e.length)return;let n=new AbortController,r=!1,i=function(e){if(!r){r=!0,o();let t=e instanceof Error?e:this.reason;n.abort(t instanceof G?t:new Fu(t instanceof Error?t.message:t))}},a=t&&setTimeout(()=>{a=null,i(new G(`timeout of ${t}ms exceeded`,G.ETIMEDOUT))},t),o=()=>{e&&=(a&&clearTimeout(a),a=null,e.forEach(e=>{e.unsubscribe?e.unsubscribe(i):e.removeEventListener(`abort`,i)}),null)};e.forEach(e=>{if(!r){if(e.aborted){i.call(e);return}e.addEventListener(`abort`,i,{once:!0})}});let{signal:s}=n;return s.unsubscribe=()=>V.asap(o),s},ud=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,i;for(;r<n;)i=r+t,yield e.slice(r,i),r=i},dd=async function*(e,t){for await(let n of fd(e))yield*ud(n,t)},fd=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}let t=e.getReader();try{for(;;){let{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}},pd=(e,t,n,r)=>{let i=dd(e,t),a=0,o,s=e=>{o||(o=!0,r&&r(e))};return new ReadableStream({async pull(e){try{let{done:t,value:r}=await i.next();if(t){s(),e.close();return}let o=r.byteLength;n&&n(a+=o),e.enqueue(new Uint8Array(r))}catch(e){throw s(e),e}},cancel(e){return s(e),i.return()}},{highWaterMark:2})},md=e=>e>=48&&e<=57||e>=65&&e<=70||e>=97&&e<=102,hd=(e,t,n)=>t+2<n&&md(e.charCodeAt(t+1))&&md(e.charCodeAt(t+2)),gd=e=>e<=57?e-48:(e&223)-55,_d=e=>e>=65&&e<=90||e>=97&&e<=122||e>=48&&e<=57||e===43||e===47||e===45||e===95,vd=e=>e===9||e===10||e===12||e===13||e===32,yd=e=>{let t=Math.floor(e/4),n=e%4;return t*3+(n===2?1:n===3?2:0)},bd=e=>{let t=e.length,n=0;return t>0&&e.charCodeAt(t-1)===61&&(n++,t>1&&e.charCodeAt(t-2)===61&&n++),Math.floor((t-n)*3/4)},xd=e=>{let t=e.length,n=0,r=0,i=!1;for(let a=0;a<t;a++){let o=e.charCodeAt(a);if(o===37&&hd(e,a,t)&&(o=gd(e.charCodeAt(a+1))*16+gd(e.charCodeAt(a+2)),a+=2),!vd(o)){if(o===61){r++;continue}if(!_d(o)||r>0){i=!0;continue}n++}}return i||r>2||r>0&&(n+r)%4!=0||n%4==1?bd(e):yd(n)},Sd=(e,t)=>{if(!e||typeof e!=`string`||!e.startsWith(`data:`))return 0;let n=e.indexOf(`,`);if(n<0)return 0;let r=e.slice(5,n),i=e.slice(n+1);if(/;base64/i.test(r))return t(i);let a=0;for(let e=0,t=i.length;e<t;e++){let n=i.charCodeAt(e);if(n===37&&hd(i,e,t))a+=1,e+=2;else if(n<128)a+=1;else if(n<2048)a+=2;else if(n>=55296&&n<=56319&&e+1<t){let t=i.charCodeAt(e+1);t>=56320&&t<=57343?(a+=4,e++):a+=3}else a+=3}return a};function Cd(e){let t=typeof e==`string`?e.indexOf(`#`):-1;return Sd(t===-1?e:e.slice(0,t),xd)}var wd=`1.19.0`,Td=65536,{isFunction:K}=V,Ed=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(e,t)=>String.fromCharCode(parseInt(t,16))),Dd=e=>{if(!V.isString(e))return e;try{return decodeURIComponent(e)}catch{return e}},Od=(e,...t)=>{try{return!!e(...t)}catch{return!1}},kd=e=>{let t=e.indexOf(`://`),n=e;return t!==-1&&(n=n.slice(t+3)),n.includes(`@`)||n.includes(`:`)},Ad=e=>{let t=V.global!==void 0&&V.global!==null?V.global:globalThis,{ReadableStream:n,TextEncoder:r}=t;e=V.merge.call({skipUndefined:!0},{Request:t.Request,Response:t.Response},e);let{fetch:i,Request:a,Response:o}=e,s=i?K(i):typeof fetch==`function`,c=K(a),l=K(o);if(!s)return!1;let u=s&&K(n),d=s&&(typeof r==`function`?(e=>t=>e.encode(t))(new r):async e=>new Uint8Array(await new a(e).arrayBuffer())),f=c&&u&&Od(()=>{let e=!1,t=new a(Cu.origin,{body:new n,method:`POST`,get duplex(){return e=!0,`half`}}),r=t.headers.has(`Content-Type`);return t.body!=null&&t.body.cancel(),e&&!r}),p=l&&u&&Od(()=>V.isReadableStream(new o(``).body)),m={stream:p&&(e=>e.body)};s&&[`text`,`arrayBuffer`,`blob`,`formData`,`stream`].forEach(e=>{!m[e]&&(m[e]=(t,n)=>{let r=t&&t[e];if(r)return r.call(t);throw new G(`Response type '${e}' is not supported`,G.ERR_NOT_SUPPORT,n)})});let h=async e=>{if(e==null)return 0;if(V.isBlob(e))return e.size;if(V.isSpecCompliantForm(e))return(await new a(Cu.origin,{method:`POST`,body:e}).arrayBuffer()).byteLength;if(V.isArrayBufferView(e)||V.isArrayBuffer(e))return e.byteLength;if(V.isURLSearchParams(e)&&(e+=``),V.isString(e))return(await d(e)).byteLength},g=async(e,t)=>V.toFiniteNumber(e.getContentLength())??h(t);return async e=>{let{url:t,method:n,data:s,signal:l,cancelToken:d,timeout:_,onDownloadProgress:v,onUploadProgress:y,responseType:b,headers:x,withCredentials:S=`same-origin`,fetchOptions:C,maxContentLength:w,maxBodyLength:T}=sd(e),E=V.isNumber(w)&&w>-1,D=V.isNumber(T)&&T>-1,O=t=>V.hasOwnProp(e,t)?e[t]:void 0,ee=i||fetch;b=b?(b+``).toLowerCase():`text`;let k=ld([l,d&&d.toAbortSignal()],_),A=null,j=k&&k.unsubscribe&&(()=>{k.unsubscribe()}),te,M=null,ne=()=>new G(`Request body larger than maxBodyLength limit`,G.ERR_BAD_REQUEST,e,A);try{let i,l=O(`auth`);if(l&&(i={username:V.getSafeProp(l,`username`)||``,password:V.getSafeProp(l,`password`)||``}),kd(t)){let e=new URL(t,Cu.origin);!i&&(e.username||e.password)&&(i={username:Dd(e.username),password:Dd(e.password)}),(e.username||e.password)&&(e.username=``,e.password=``,t=e.href)}if(i&&(x.delete(`authorization`),x.set(`Authorization`,`Basic `+btoa(Ed((i.username||``)+`:`+(i.password||``))))),E&&typeof t==`string`&&t.startsWith(`data:`)&&Cd(t)>w)throw new G(`maxContentLength size of `+w+` exceeded`,G.ERR_BAD_RESPONSE,e,A);if(D&&n!==`get`&&n!==`head`){let e=await h(s);if(typeof e==`number`&&isFinite(e)&&(te=e,e>T))throw ne()}let d=D&&(V.isReadableStream(s)||V.isStream(s)),_=(e,t,n)=>pd(e,Td,e=>{if(D&&e>T)throw M=ne();t&&t(e)},n);if(f&&n!==`get`&&n!==`head`&&(y||d)){if(te??=await g(x,s),te!==0||d){let e=new a(t,{method:`POST`,body:s,duplex:`half`}),n;if(V.isFormData(s)&&(n=e.headers.get(`content-type`))&&x.setContentType(n),e.body){let[t,n]=y&&Vu(te,Bu(Hu(y)))||[];s=_(e.body,t,n)}}}else if(d&&!c&&u&&n!==`get`&&n!==`head`)s=_(s);else if(d&&c&&!f&&n!==`get`&&n!==`head`)throw new G(`Stream request bodies are not supported by the current fetch implementation`,G.ERR_NOT_SUPPORT,e,A);V.isString(S)||(S=S?`include`:`omit`);let N=c&&`credentials`in a.prototype;if(V.isFormData(s)){let e=x.getContentType();e&&/^multipart\/form-data/i.test(e)&&!/boundary=/i.test(e)&&x.delete(`content-type`)}x.set(`User-Agent`,`axios/`+wd,!1);let P={...C,signal:k,method:n.toUpperCase(),headers:Vl(x.normalize()),body:s,duplex:`half`,credentials:N?S:void 0};A=c&&new a(t,P);let F=await(c?ee(A,C):ee(t,P)),re=Zl.from(F.headers);if(E){let t=V.toFiniteNumber(re.getContentLength());if(t!=null&&t>w)throw new G(`maxContentLength size of `+w+` exceeded`,G.ERR_BAD_RESPONSE,e,A)}let ie=p&&(b===`stream`||b===`response`);if(p&&F.body&&(v||E||ie&&j)){let t={};[`status`,`statusText`,`headers`].forEach(e=>{t[e]=F[e]});let n=V.toFiniteNumber(re.getContentLength()),[r,i]=v&&Vu(n,Bu(Hu(v),!0))||[],a=0;F=new o(pd(F.body,Td,t=>{if(E&&(a=t,a>w))throw new G(`maxContentLength size of `+w+` exceeded`,G.ERR_BAD_RESPONSE,e,A);r&&r(t)},()=>{i&&i(),j&&j()}),t)}b||=`text`;let ae=await m[V.findKey(m,b)||`text`](F,e);if(E&&!p&&!ie){let t;if(ae!=null&&(typeof ae.byteLength==`number`?t=ae.byteLength:typeof ae.size==`number`?t=ae.size:typeof ae==`string`&&(t=typeof r==`function`?new r().encode(ae).byteLength:ae.length)),typeof t==`number`&&t>w)throw new G(`maxContentLength size of `+w+` exceeded`,G.ERR_BAD_RESPONSE,e,A)}return!ie&&j&&j(),await new Promise((t,n)=>{Iu(t,n,{data:ae,headers:Zl.from(F.headers),status:F.status,statusText:F.statusText,config:e,request:A})})}catch(t){if(j&&j(),k&&k.aborted&&k.reason instanceof G){let n=k.reason;throw n.config=e,A&&(n.request=A),t!==n&&Object.defineProperty(n,"cause",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),n}if(M)throw A&&!M.request&&(M.request=A),M;if(t instanceof G)throw A&&!t.request&&(t.request=A),t;if(t&&t.name===`TypeError`&&/Load failed|fetch/i.test(t.message)){let n=new G(`Network Error`,G.ERR_NETWORK,e,A,t&&t.response);throw Object.defineProperty(n,"cause",{__proto__:null,value:t.cause||t,writable:!0,enumerable:!1,configurable:!0}),n}throw G.from(t,t&&t.code,e,A,t&&t.response)}}},jd=new Map,Md=e=>{let t=e&&e.env||{},{fetch:n,Request:r,Response:i}=t,a=[r,i,n],o=a.length,s,c,l=jd;for(;o--;)s=a[o],c=l.get(s),c===void 0&&l.set(s,c=o?new Map:Ad(t)),l=c;return c};Md();var Nd={http:null,xhr:cd,fetch:{get:Md}};V.forEach(Nd,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{__proto__:null,value:t})}catch{}Object.defineProperty(e,"adapterName",{__proto__:null,value:t})}});var Pd=e=>`- ${e}`,Fd=e=>V.isFunction(e)||e===null||e===!1;function Id(e,t){e=V.isArray(e)?e:[e];let{length:n}=e,r,i,a={};for(let o=0;o<n;o++){r=e[o];let n;if(i=r,!Fd(r)&&(i=Nd[(n=String(r)).toLowerCase()],i===void 0))throw new G(`Unknown adapter '${n}'`);if(i&&(V.isFunction(i)||(i=i.get(t))))break;a[n||`#`+o]=i}if(!i){let e=Object.entries(a).map(([e,t])=>`adapter ${e} `+(t===!1?`is not supported by the environment`:`is not available in the build`));throw new G(`There is no suitable adapter to dispatch the request `+(n?e.length>1?`since :
`+e.map(Pd).join(`
`):` `+Pd(e[0]):`as no adapter specified`),G.ERR_NOT_SUPPORT)}return i}var Ld={getAdapter:Id,adapters:Nd};function Rd(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Fu(null,e)}function zd(e){return Rd(e),e.headers=Zl.from(e.headers),e.data=Nu.call(e,e.transformRequest),[`post`,`put`,`patch`].indexOf(e.method)!==-1&&e.headers.setContentType(`application/x-www-form-urlencoded`,!1),Ld.getAdapter(e.adapter||Mu.adapter,e)(e).then(function(t){Rd(e),e.response=t;try{t.data=Nu.call(e,e.transformResponse,t)}finally{delete e.response}return t.headers=Zl.from(t.headers),t},function(t){if(!Pu(t)&&(Rd(e),t&&t.response)){e.response=t.response;try{t.response.data=Nu.call(e,e.transformResponse,t.response)}finally{delete e.response}t.response.headers=Zl.from(t.response.headers)}return Promise.reject(t)})}var Bd={};[`object`,`boolean`,`number`,`function`,`string`,`symbol`].forEach((e,t)=>{Bd[e]=function(n){return typeof n===e||`a`+(t<1?`n `:` `)+e}});var Vd={};Bd.transitional=function(e,t,n){function r(e,t){return`[Axios v`+wd+`] Transitional option '`+e+`'`+t+(n?`. `+n:``)}return(n,i,a)=>{if(e===!1)throw new G(r(i,` has been removed`+(t?` in `+t:``)),G.ERR_DEPRECATED);return t&&!Vd[i]&&(Vd[i]=!0,console.warn(r(i,` has been deprecated since v`+t+` and will be removed in the near future`))),!e||e(n,i,a)}},Bd.spelling=function(e){return(t,n)=>(console.warn(`${n} is likely a misspelling of ${e}`),!0)};function Hd(e,t,n){if(typeof e!=`object`||!e)throw new G(`options must be an object`,G.ERR_BAD_OPTION_VALUE);let r=Object.keys(e),i=r.length;for(;i-->0;){let a=r[i],o=Object.prototype.hasOwnProperty.call(t,a)?t[a]:void 0;if(o){let t=e[a],n=t===void 0||o(t,a,e);if(n!==!0)throw new G(`option `+a+` must be `+n,G.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new G(`Unknown option `+a,G.ERR_BAD_OPTION)}}var Ud={assertOptions:Hd,validators:Bd},Wd=Ud.validators,Gd=class{constructor(e){this.defaults=e||{},this.interceptors={request:new mu,response:new mu}}async request(e,t){try{return await this._request(e,t)}catch(e){if(e instanceof Error){let t={};Error.captureStackTrace?Error.captureStackTrace(t):t=Error();let n=(()=>{if(!t.stack)return``;let e=t.stack.indexOf(`
`);return e===-1?``:t.stack.slice(e+1)})();try{if(!e.stack)e.stack=n;else if(n){let t=n.indexOf(`
`),r=t===-1?-1:n.indexOf(`
`,t+1),i=r===-1?``:n.slice(r+1);String(e.stack).endsWith(i)||(e.stack+=`
`+n)}}catch{}}throw e}}_request(e,t){typeof e==`string`?(t||={},t.url=e):t=e||{},t=rd(this.defaults,t);let{transitional:n,paramsSerializer:r,headers:i}=t;n!==void 0&&Ud.assertOptions(n,{silentJSONParsing:Wd.transitional(Wd.boolean),forcedJSONParsing:Wd.transitional(Wd.boolean),clarifyTimeoutError:Wd.transitional(Wd.boolean),legacyInterceptorReqResOrdering:Wd.transitional(Wd.boolean),advertiseZstdAcceptEncoding:Wd.transitional(Wd.boolean),validateStatusUndefinedResolves:Wd.transitional(Wd.boolean)},!1),r!=null&&(V.isFunction(r)?t.paramsSerializer={serialize:r}:Ud.assertOptions(r,{encode:Wd.function,serialize:Wd.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls===void 0?t.allowAbsoluteUrls=!0:t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls),Ud.assertOptions(t,{baseUrl:Wd.spelling(`baseURL`),withXsrfToken:Wd.spelling(`withXSRFToken`)},!0),t.method=(t.method||this.defaults.method||`get`).toLowerCase();let a=i&&V.merge(i.common,i[t.method]);i&&V.forEach([`delete`,`get`,`head`,`post`,`put`,`patch`,`query`,`common`],e=>{delete i[e]}),t.headers=Zl.concat(a,i);let o=[],s=!0;this.interceptors.request.forEach(function(e){if(typeof e.runWhen==`function`&&e.runWhen(t)===!1)return;s&&=e.synchronous;let n=t.transitional||hu;n&&n.legacyInterceptorReqResOrdering?o.unshift(e.fulfilled,e.rejected):o.push(e.fulfilled,e.rejected)});let c=[];this.interceptors.response.forEach(function(e){c.push(e.fulfilled,e.rejected)});let l,u=0,d;if(!s){let e=[zd.bind(this),void 0];for(e.unshift(...o),e.push(...c),d=e.length,l=Promise.resolve(t);u<d;)l=l.then(e[u++],e[u++]);return l}d=o.length;let f=t;for(;u<d;){let e=o[u++],t=o[u++];try{f=e?e(f):f}catch(e){if(!t){l=Promise.reject(e);break}try{let n=t.call(this,e);V.isThenable(n)&&(l=Promise.resolve(n).then(()=>zd.call(this,f)))}catch(e){l=Promise.reject(e)}break}}if(!l)try{l=zd.call(this,f)}catch(e){l=Promise.reject(e)}for(u=0,d=c.length;u<d;)l=l.then(c[u++],c[u++]);return l}getUri(e){return e=rd(this.defaults,e),pu(ed(e.baseURL,e.url,e.allowAbsoluteUrls,e),e.params,e.paramsSerializer)}};V.forEach([`delete`,`get`,`head`,`options`],function(e){Gd.prototype[e]=function(t,n){return this.request(rd(n||{},{method:e,url:t,data:n&&V.hasOwnProp(n,`data`)?n.data:void 0}))}}),V.forEach([`post`,`put`,`patch`,`query`],function(e){function t(t){return function(n,r,i){return this.request(rd(i||{},{method:e,headers:t?{"Content-Type":`multipart/form-data`}:{},url:n,data:r}))}}Gd.prototype[e]=t(),e!==`query`&&(Gd.prototype[e+`Form`]=t(!0))});var Kd=class e{constructor(e){if(typeof e!=`function`)throw TypeError(`executor must be a function.`);let t;this.promise=new Promise(function(e){t=e});let n=this;this.promise.then(e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-->0;)n._listeners[t](e);n._listeners=null}),this.promise.then=e=>{let t,r=new Promise(e=>{n.subscribe(e),t=e}).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e(function(e,r,i){n.reason||(n.reason=new Fu(e,r,i),t(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;let t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){let e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let t;return{token:new e(function(e){t=e}),cancel:t}}};function qd(e){return function(t){return e.apply(null,t)}}function Jd(e){return V.isObject(e)&&e.isAxiosError===!0}var Yd={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Yd).forEach(([e,t])=>{Yd[t]=e});function Xd(e){let t=new Gd(e),n=gc(Gd.prototype.request,t);return V.extend(n,Gd.prototype,t,{allOwnKeys:!0}),V.extend(n,t,null,{allOwnKeys:!0}),n.create=function(t){return Xd(rd(e,t))},n}var Zd=Xd(Mu);Zd.Axios=Gd,Zd.CanceledError=Fu,Zd.CancelToken=Kd,Zd.isCancel=Pu,Zd.VERSION=wd,Zd.toFormData=cu,Zd.AxiosError=G,Zd.Cancel=Zd.CanceledError,Zd.all=function(e){return Promise.all(e)},Zd.spread=qd,Zd.isAxiosError=Jd,Zd.mergeConfig=rd,Zd.AxiosHeaders=Zl,Zd.formToJSON=e=>ku(V.isHTMLForm(e)?new FormData(e):e),Zd.getAdapter=Ld.getAdapter,Zd.HttpStatusCode=Yd,Zd.default=Zd;var Qd=Zd.create({baseURL:`http://192.168.1.38:1337/api`}),$d=(e=`en`)=>Qd.get(`/what-to-dos?locale=${e}&populate=*`),ef=(e=`en`)=>Qd.get(`/what-not-to-dos?locale=${e}&populate=*`),tf={black:`#000`,white:`#fff`},nf={50:`#ffebee`,100:`#ffcdd2`,200:`#ef9a9a`,300:`#e57373`,400:`#ef5350`,500:`#f44336`,600:`#e53935`,700:`#d32f2f`,800:`#c62828`,900:`#b71c1c`,A100:`#ff8a80`,A200:`#ff5252`,A400:`#ff1744`,A700:`#d50000`},rf={50:`#f3e5f5`,100:`#e1bee7`,200:`#ce93d8`,300:`#ba68c8`,400:`#ab47bc`,500:`#9c27b0`,600:`#8e24aa`,700:`#7b1fa2`,800:`#6a1b9a`,900:`#4a148c`,A100:`#ea80fc`,A200:`#e040fb`,A400:`#d500f9`,A700:`#aa00ff`},af={50:`#e3f2fd`,100:`#bbdefb`,200:`#90caf9`,300:`#64b5f6`,400:`#42a5f5`,500:`#2196f3`,600:`#1e88e5`,700:`#1976d2`,800:`#1565c0`,900:`#0d47a1`,A100:`#82b1ff`,A200:`#448aff`,A400:`#2979ff`,A700:`#2962ff`},of={50:`#e1f5fe`,100:`#b3e5fc`,200:`#81d4fa`,300:`#4fc3f7`,400:`#29b6f6`,500:`#03a9f4`,600:`#039be5`,700:`#0288d1`,800:`#0277bd`,900:`#01579b`,A100:`#80d8ff`,A200:`#40c4ff`,A400:`#00b0ff`,A700:`#0091ea`},sf={50:`#e8f5e9`,100:`#c8e6c9`,200:`#a5d6a7`,300:`#81c784`,400:`#66bb6a`,500:`#4caf50`,600:`#43a047`,700:`#388e3c`,800:`#2e7d32`,900:`#1b5e20`,A100:`#b9f6ca`,A200:`#69f0ae`,A400:`#00e676`,A700:`#00c853`},cf={50:`#fff3e0`,100:`#ffe0b2`,200:`#ffcc80`,300:`#ffb74d`,400:`#ffa726`,500:`#ff9800`,600:`#fb8c00`,700:`#f57c00`,800:`#ef6c00`,900:`#e65100`,A100:`#ffd180`,A200:`#ffab40`,A400:`#ff9100`,A700:`#ff6d00`},lf={50:`#fafafa`,100:`#f5f5f5`,200:`#eeeeee`,300:`#e0e0e0`,400:`#bdbdbd`,500:`#9e9e9e`,600:`#757575`,700:`#616161`,800:`#424242`,900:`#212121`,A100:`#f5f5f5`,A200:`#eeeeee`,A400:`#bdbdbd`,A700:`#616161`};function uf(e,...t){let n=new URL(`https://mui.com/production-error/?code=${e}`);return t.forEach(e=>n.searchParams.append(`args[]`,e)),`Minified MUI error #${e}; visit ${n} for the full message.`}var df=`$$material`;function ff(){return ff=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ff.apply(null,arguments)}function pf(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function mf(e){var t=document.createElement(`style`);return t.setAttribute(`data-emotion`,e.key),e.nonce!==void 0&&t.setAttribute(`nonce`,e.nonce),t.appendChild(document.createTextNode(``)),t.setAttribute(`data-s`,``),t}var hf=function(){function e(e){var t=this;this._insertTag=function(e){var n=t.tags.length===0?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling;t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=e.speedy===void 0||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(mf(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=pf(t);try{n.insertRule(e,n.cssRules.length)}catch{}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){return e.parentNode?.removeChild(e)}),this.tags=[],this.ctr=0},e}(),gf=`-ms-`,_f=`-moz-`,q=`-webkit-`,vf=`comm`,yf=`rule`,bf=`decl`,xf=`@import`,Sf=`@keyframes`,Cf=`@layer`,wf=Math.abs,Tf=String.fromCharCode,Ef=Object.assign;function Df(e,t){return Mf(e,0)^45?(((t<<2^Mf(e,0))<<2^Mf(e,1))<<2^Mf(e,2))<<2^Mf(e,3):0}function Of(e){return e.trim()}function kf(e,t){return(e=t.exec(e))?e[0]:e}function Af(e,t,n){return e.replace(t,n)}function jf(e,t){return e.indexOf(t)}function Mf(e,t){return e.charCodeAt(t)|0}function Nf(e,t,n){return e.slice(t,n)}function Pf(e){return e.length}function Ff(e){return e.length}function If(e,t){return t.push(e),e}function Lf(e,t){return e.map(t).join(``)}var Rf=1,zf=1,Bf=0,Vf=0,Hf=0,Uf=``;function Wf(e,t,n,r,i,a,o){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:Rf,column:zf,length:o,return:``}}function Gf(e,t){return Ef(Wf(``,null,null,``,null,null,0),e,{length:-e.length},t)}function Kf(){return Hf}function qf(){return Hf=Vf>0?Mf(Uf,--Vf):0,zf--,Hf===10&&(zf=1,Rf--),Hf}function Jf(){return Hf=Vf<Bf?Mf(Uf,Vf++):0,zf++,Hf===10&&(zf=1,Rf++),Hf}function Yf(){return Mf(Uf,Vf)}function Xf(){return Vf}function Zf(e,t){return Nf(Uf,e,t)}function Qf(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function $f(e){return Rf=zf=1,Bf=Pf(Uf=e),Vf=0,[]}function ep(e){return Uf=``,e}function tp(e){return Of(Zf(Vf-1,ip(e===91?e+2:e===40?e+1:e)))}function np(e){for(;(Hf=Yf())&&Hf<33;)Jf();return Qf(e)>2||Qf(Hf)>3?``:` `}function rp(e,t){for(;--t&&Jf()&&!(Hf<48||Hf>102||Hf>57&&Hf<65||Hf>70&&Hf<97););return Zf(e,Xf()+(t<6&&Yf()==32&&Jf()==32))}function ip(e){for(;Jf();)switch(Hf){case e:return Vf;case 34:case 39:e!==34&&e!==39&&ip(Hf);break;case 40:e===41&&ip(e);break;case 92:Jf();break}return Vf}function ap(e,t){for(;Jf()&&e+Hf!==57&&(e+Hf!==84||Yf()!==47););return`/*`+Zf(t,Vf-1)+`*`+Tf(e===47?e:Jf())}function op(e){for(;!Qf(Yf());)Jf();return Zf(e,Vf)}function sp(e){return ep(cp(``,null,null,null,[``],e=$f(e),0,[0],e))}function cp(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=Jf()){case 40:if(m!=108&&Mf(C,d-1)==58){jf(C+=Af(tp(v),`&`,`&\f`),`&\f`)!=-1&&(_=-1);break}case 34:case 39:case 91:C+=tp(v);break;case 9:case 10:case 13:case 32:C+=np(m);break;case 92:C+=rp(Xf()-1,7);continue;case 47:switch(Yf()){case 42:case 47:If(up(ap(Jf(),Xf()),t,n),c);break;default:C+=`/`}break;case 123*h:s[l++]=Pf(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=Af(C,/\f/g,``)),p>0&&Pf(C)-d&&If(p>32?dp(C+`;`,r,n,d-1):dp(Af(C,` `,``)+`;`,r,n,d-2),c);break;case 59:C+=`;`;default:if(If(S=lp(C,t,n,l,u,i,s,y,b=[],x=[],d),a),v===123){if(u===0)cp(C,t,S,S,b,a,d,s,x);else switch(f===99&&Mf(C,3)===110?100:f){case 100:case 108:case 109:case 115:cp(e,S,S,r&&If(lp(e,S,S,0,0,i,s,y,i,b=[],d),x),i,x,d,s,r?b:x);break;default:cp(C,S,S,S,[``],x,0,s,x)}}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+Pf(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&qf()==125)continue}switch(C+=Tf(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(Pf(C)-1)*_,_=1;break;case 64:Yf()===45&&(C+=tp(Jf())),f=Yf(),u=d=Pf(y=C+=op(Xf())),v++;break;case 45:m===45&&Pf(C)==2&&(h=0)}}return a}function lp(e,t,n,r,i,a,o,s,c,l,u){for(var d=i-1,f=i===0?a:[``],p=Ff(f),m=0,h=0,g=0;m<r;++m)for(var _=0,v=Nf(e,d+1,d=wf(h=o[m])),y=e;_<p;++_)(y=Of(h>0?f[_]+` `+v:Af(v,/&\f/g,f[_])))&&(c[g++]=y);return Wf(e,t,n,i===0?yf:s,c,l,u)}function up(e,t,n){return Wf(e,t,n,vf,Tf(Kf()),Nf(e,2,-2),0)}function dp(e,t,n,r){return Wf(e,t,n,bf,Nf(e,0,r),Nf(e,r+1,-1),r)}function fp(e,t){for(var n=``,r=Ff(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||``;return n}function pp(e,t,n,r){switch(e.type){case Cf:if(e.children.length)break;case xf:case bf:return e.return=e.return||e.value;case vf:return``;case Sf:return e.return=e.value+`{`+fp(e.children,r)+`}`;case yf:e.value=e.props.join(`,`)}return Pf(n=fp(e.children,r))?e.return=e.value+`{`+n+`}`:``}function mp(e){var t=Ff(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function hp(e){return function(t){t.root||(t=t.return)&&e(t)}}function gp(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var _p=function(e,t,n){for(var r=0,i=0;r=i,i=Yf(),r===38&&i===12&&(t[n]=1),!Qf(i);)Jf();return Zf(e,Vf)},vp=function(e,t){var n=-1,r=44;do switch(Qf(r)){case 0:r===38&&Yf()===12&&(t[n]=1),e[n]+=_p(Vf-1,t,n);break;case 2:e[n]+=tp(r);break;case 4:if(r===44){e[++n]=Yf()===58?`&\f`:``,t[n]=e[n].length;break}default:e[n]+=Tf(r)}while(r=Jf());return e},yp=function(e,t){return ep(vp($f(e),t))},bp=new WeakMap,xp=function(e){if(!(e.type!==`rule`||!e.parent||e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;n.type!==`rule`;)if(n=n.parent,!n)return;if(!(e.props.length===1&&t.charCodeAt(0)!==58&&!bp.get(n))&&!r){bp.set(e,!0);for(var i=[],a=yp(t,i),o=n.props,s=0,c=0;s<a.length;s++)for(var l=0;l<o.length;l++,c++)e.props[c]=i[s]?a[s].replace(/&\f/g,o[l]):o[l]+` `+a[s]}}},Sp=function(e){if(e.type===`decl`){var t=e.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(e.return=``,e.value=``)}};function Cp(e,t){switch(Df(e,t)){case 5103:return q+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return q+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return q+e+_f+e+gf+e+e;case 6828:case 4268:return q+e+gf+e+e;case 6165:return q+e+gf+`flex-`+e+e;case 5187:return q+e+Af(e,/(\w+).+(:[^]+)/,q+`box-$1$2`+gf+`flex-$1$2`)+e;case 5443:return q+e+gf+`flex-item-`+Af(e,/flex-|-self/,``)+e;case 4675:return q+e+gf+`flex-line-pack`+Af(e,/align-content|flex-|-self/,``)+e;case 5548:return q+e+gf+Af(e,`shrink`,`negative`)+e;case 5292:return q+e+gf+Af(e,`basis`,`preferred-size`)+e;case 6060:return q+`box-`+Af(e,`-grow`,``)+q+e+gf+Af(e,`grow`,`positive`)+e;case 4554:return q+Af(e,/([^-])(transform)/g,`$1`+q+`$2`)+e;case 6187:return Af(Af(Af(e,/(zoom-|grab)/,q+`$1`),/(image-set)/,q+`$1`),e,``)+e;case 5495:case 3959:return Af(e,/(image-set\([^]*)/,q+"$1$`$1");case 4968:return Af(Af(e,/(.+:)(flex-)?(.*)/,q+`box-pack:$3`+gf+`flex-pack:$3`),/s.+-b[^;]+/,`justify`)+q+e+e;case 4095:case 3583:case 4068:case 2532:return Af(e,/(.+)-inline(.+)/,q+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Pf(e)-1-t>6)switch(Mf(e,t+1)){case 109:if(Mf(e,t+4)!==45)break;case 102:return Af(e,/(.+:)(.+)-([^]+)/,`$1`+q+`$2-$3$1`+_f+(Mf(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~jf(e,`stretch`)?Cp(Af(e,`stretch`,`fill-available`),t)+e:e}break;case 4949:if(Mf(e,t+1)!==115)break;case 6444:switch(Mf(e,Pf(e)-3-(~jf(e,`!important`)&&10))){case 107:return Af(e,`:`,`:`+q)+e;case 101:return Af(e,/(.+:)([^;!]+)(;|!.+)?/,`$1`+q+(Mf(e,14)===45?`inline-`:``)+`box$3$1`+q+`$2$3$1`+gf+`$2box$3`)+e}break;case 5936:switch(Mf(e,t+11)){case 114:return q+e+gf+Af(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return q+e+gf+Af(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return q+e+gf+Af(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}return q+e+gf+e+e}return e}var wp=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case bf:e.return=Cp(e.value,e.length);break;case Sf:return fp([Gf(e,{value:Af(e.value,`@`,`@`+q)})],r);case yf:if(e.length)return Lf(e.props,function(t){switch(kf(t,/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:return fp([Gf(e,{props:[Af(t,/:(read-\w+)/,`:`+_f+`$1`)]})],r);case`::placeholder`:return fp([Gf(e,{props:[Af(t,/:(plac\w+)/,`:`+q+`input-$1`)]}),Gf(e,{props:[Af(t,/:(plac\w+)/,`:`+_f+`$1`)]}),Gf(e,{props:[Af(t,/:(plac\w+)/,gf+`input-$1`)]})],r)}return``})}}],Tp=function(e){var t=e.key;if(t===`css`){var n=document.querySelectorAll(`style[data-emotion]:not([data-s])`);Array.prototype.forEach.call(n,function(e){e.getAttribute(`data-emotion`).indexOf(` `)!==-1&&(document.head.appendChild(e),e.setAttribute(`data-s`,``))})}var r=e.stylisPlugins||wp,i={},a,o=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll(`style[data-emotion^="`+t+` "]`),function(e){for(var t=e.getAttribute(`data-emotion`).split(` `),n=1;n<t.length;n++)i[t[n]]=!0;o.push(e)});var s,c=[xp,Sp],l,u=[pp,hp(function(e){l.insert(e)})],d=mp(c.concat(r,u)),f=function(e){return fp(sp(e),d)};s=function(e,t,n,r){l=n,f(e?e+`{`+t.styles+`}`:t.styles),r&&(p.inserted[t.name]=!0)};var p={key:t,sheet:new hf({key:t,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:i,registered:{},insert:s};return p.sheet.hydrate(o),p},Ep=o((e=>{var t=typeof Symbol==`function`&&Symbol.for,n=t?Symbol.for(`react.element`):60103,r=t?Symbol.for(`react.portal`):60106,i=t?Symbol.for(`react.fragment`):60107,a=t?Symbol.for(`react.strict_mode`):60108,o=t?Symbol.for(`react.profiler`):60114,s=t?Symbol.for(`react.provider`):60109,c=t?Symbol.for(`react.context`):60110,l=t?Symbol.for(`react.async_mode`):60111,u=t?Symbol.for(`react.concurrent_mode`):60111,d=t?Symbol.for(`react.forward_ref`):60112,f=t?Symbol.for(`react.suspense`):60113,p=t?Symbol.for(`react.suspense_list`):60120,m=t?Symbol.for(`react.memo`):60115,h=t?Symbol.for(`react.lazy`):60116,g=t?Symbol.for(`react.block`):60121,_=t?Symbol.for(`react.fundamental`):60117,v=t?Symbol.for(`react.responder`):60118,y=t?Symbol.for(`react.scope`):60119;function b(e){if(typeof e==`object`&&e){var t=e.$$typeof;switch(t){case n:switch(e=e.type,e){case l:case u:case i:case o:case a:case f:return e;default:switch(e&&=e.$$typeof,e){case c:case d:case h:case m:case s:return e;default:return t}}case r:return t}}}function x(e){return b(e)===u}e.AsyncMode=l,e.ConcurrentMode=u,e.ContextConsumer=c,e.ContextProvider=s,e.Element=n,e.ForwardRef=d,e.Fragment=i,e.Lazy=h,e.Memo=m,e.Portal=r,e.Profiler=o,e.StrictMode=a,e.Suspense=f,e.isAsyncMode=function(e){return x(e)||b(e)===l},e.isConcurrentMode=x,e.isContextConsumer=function(e){return b(e)===c},e.isContextProvider=function(e){return b(e)===s},e.isElement=function(e){return typeof e==`object`&&!!e&&e.$$typeof===n},e.isForwardRef=function(e){return b(e)===d},e.isFragment=function(e){return b(e)===i},e.isLazy=function(e){return b(e)===h},e.isMemo=function(e){return b(e)===m},e.isPortal=function(e){return b(e)===r},e.isProfiler=function(e){return b(e)===o},e.isStrictMode=function(e){return b(e)===a},e.isSuspense=function(e){return b(e)===f},e.isValidElementType=function(e){return typeof e==`string`||typeof e==`function`||e===i||e===u||e===o||e===a||e===f||e===p||typeof e==`object`&&!!e&&(e.$$typeof===h||e.$$typeof===m||e.$$typeof===s||e.$$typeof===c||e.$$typeof===d||e.$$typeof===_||e.$$typeof===v||e.$$typeof===y||e.$$typeof===g)},e.typeOf=b})),Dp=o(((e,t)=>{t.exports=Ep()})),Op=o(((e,t)=>{var n=Dp(),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};s[n.ForwardRef]=a,s[n.Memo]=o;function c(e){return n.isMemo(e)?o:s[e.$$typeof]||r}var l=Object.defineProperty,u=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,m=Object.prototype;function h(e,t,n){if(typeof t!=`string`){if(m){var r=p(t);r&&r!==m&&h(e,r,n)}var a=u(t);d&&(a=a.concat(d(t)));for(var o=c(e),s=c(t),g=0;g<a.length;++g){var _=a[g];if(!i[_]&&!(n&&n[_])&&!(s&&s[_])&&!(o&&o[_])){var v=f(t,_);try{l(e,_,v)}catch{}}}}return e}t.exports=h}));function kp(e,t,n){var r=``;return n.split(` `).forEach(function(n){e[n]===void 0?n&&(r+=n+` `):t.push(e[n]+`;`)}),r}var Ap=function(e,t,n){var r=e.key+`-`+t.name;n===!1&&e.registered[r]===void 0&&(e.registered[r]=t.styles)},jp=function(e,t,n){Ap(e,t,n);var r=e.key+`-`+t.name;if(e.inserted[t.name]===void 0){var i=t;do e.insert(t===i?`.`+r:``,i,e.sheet,!0),i=i.next;while(i!==void 0)}};function Mp(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Np={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Pp=/[A-Z]|^ms/g,Fp=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Ip=function(e){return e.charCodeAt(1)===45},Lp=function(e){return e!=null&&typeof e!=`boolean`},Rp=gp(function(e){return Ip(e)?e:e.replace(Pp,`-$&`).toLowerCase()}),zp=function(e,t){switch(e){case`animation`:case`animationName`:if(typeof t==`string`)return t.replace(Fp,function(e,t,n){return Up={name:t,styles:n,next:Up},t})}return Np[e]!==1&&!Ip(e)&&typeof t==`number`&&t!==0?t+`px`:t};function Bp(e,t,n){if(n==null)return``;var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case`boolean`:return``;case`object`:var i=n;if(i.anim===1)return Up={name:i.name,styles:i.styles,next:Up},i.name;var a=n;if(a.styles!==void 0){var o=a.next;if(o!==void 0)for(;o!==void 0;)Up={name:o.name,styles:o.styles,next:Up},o=o.next;return a.styles+`;`}return Vp(e,t,n);case`function`:if(e!==void 0){var s=Up,c=n(e);return Up=s,Bp(e,t,c)}}var l=n;if(t==null)return l;var u=t[l];return u===void 0?l:u}function Vp(e,t,n){var r=``;if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Bp(e,t,n[i])+`;`;else for(var a in n){var o=n[a];if(typeof o!=`object`){var s=o;t!=null&&t[s]!==void 0?r+=a+`{`+t[s]+`}`:Lp(s)&&(r+=Rp(a)+`:`+zp(a,s)+`;`)}else if(Array.isArray(o)&&typeof o[0]==`string`&&(t==null||t[o[0]]===void 0))for(var c=0;c<o.length;c++)Lp(o[c])&&(r+=Rp(a)+`:`+zp(a,o[c])+`;`);else{var l=Bp(e,t,o);switch(a){case`animation`:case`animationName`:r+=Rp(a)+`:`+l+`;`;break;default:r+=a+`{`+l+`}`}}}return r}var Hp=/label:\s*([^\s;{]+)\s*(;|$)/g,Up;function Wp(e,t,n){if(e.length===1&&typeof e[0]==`object`&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,i=``;Up=void 0;var a=e[0];a==null||a.raw===void 0?(r=!1,i+=Bp(n,t,a)):i+=a[0];for(var o=1;o<e.length;o++)i+=Bp(n,t,e[o]),r&&(i+=a[o]);Hp.lastIndex=0;for(var s=``,c;(c=Hp.exec(i))!==null;)s+=`-`+c[1];return{name:Mp(i)+s,styles:i,next:Up}}var Gp=function(e){return e()},Kp=v.useInsertionEffect?v.useInsertionEffect:!1,qp=Kp||Gp,Jp=Kp||v.useLayoutEffect,Yp=v.createContext(typeof HTMLElement<`u`?Tp({key:`css`}):null);Yp.Provider;var Xp=function(e){return(0,v.forwardRef)(function(t,n){return e(t,(0,v.useContext)(Yp),n)})},Zp=v.createContext({}),Qp={}.hasOwnProperty,$p=`__EMOTION_TYPE_PLEASE_DO_NOT_USE__`,em=function(e,t){var n={};for(var r in t)Qp.call(t,r)&&(n[r]=t[r]);return n[$p]=e,n},tm=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return Ap(t,n,r),qp(function(){return jp(t,n,r)}),null},nm=Xp(function(e,t,n){var r=e.css;typeof r==`string`&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[$p],a=[r],o=``;typeof e.className==`string`?o=kp(t.registered,a,e.className):e.className!=null&&(o=e.className+` `);var s=Wp(a,void 0,v.useContext(Zp));o+=t.key+`-`+s.name;var c={};for(var l in e)Qp.call(e,l)&&l!==`css`&&l!==$p&&(c[l]=e[l]);return c.className=o,n&&(c.ref=n),v.createElement(v.Fragment,null,v.createElement(tm,{cache:t,serialized:s,isStringTag:typeof i==`string`}),v.createElement(i,c))});Op();var rm=function(e,t){var n=arguments;if(t==null||!Qp.call(t,`css`))return v.createElement.apply(void 0,n);var r=n.length,i=Array(r);i[0]=nm,i[1]=em(e,t);for(var a=2;a<r;a++)i[a]=n[a];return v.createElement.apply(null,i)};(function(e){var t;t||=e.JSX||={}})(rm||={});var im=Xp(function(e,t){var n=e.styles,r=Wp([n],void 0,v.useContext(Zp)),i=v.useRef();return Jp(function(){var e=t.key+`-global`,n=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),a=!1,o=document.querySelector(`style[data-emotion="`+e+` `+r.name+`"]`);return t.sheet.tags.length&&(n.before=t.sheet.tags[0]),o!==null&&(a=!0,o.setAttribute(`data-emotion`,e),n.hydrate([o])),i.current=[n,a],function(){n.flush()}},[t]),Jp(function(){var e=i.current,n=e[0];if(e[1]){e[1]=!1;return}r.next!==void 0&&jp(t,r.next,!0),n.tags.length&&(n.before=n.tags[n.tags.length-1].nextElementSibling,n.flush()),t.insert(``,r,n,!1)},[t,r.name]),null});function am(){return Wp([...arguments])}function om(){var e=am.apply(void 0,arguments),t=`animation-`+e.name;return{name:t,styles:`@keyframes `+t+`{`+e.styles+`}`,anim:1,toString:function(){return`_EMO_`+this.name+`_`+this.styles+`_EMO_`}}}var sm=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,cm=gp(function(e){return sm.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),lm=function(e){return e!==`theme`},um=function(e){return typeof e==`string`&&e.charCodeAt(0)>96?cm:lm},dm=function(e,t,n){var r;if(t){var i=t.shouldForwardProp;r=e.__emotion_forwardProp&&i?function(t){return e.__emotion_forwardProp(t)&&i(t)}:i}return typeof r!=`function`&&n&&(r=e.__emotion_forwardProp),r},fm=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return Ap(t,n,r),qp(function(){return jp(t,n,r)}),null},pm=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,a,o;n!==void 0&&(a=n.label,o=n.target);var s=dm(t,n,r),c=s||um(i),l=!c(`as`);return function(){var u=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(a!==void 0&&d.push(`label:`+a+`;`),u[0]==null||u[0].raw===void 0)d.push.apply(d,u);else{var f=u[0];d.push(f[0]);for(var p=u.length,m=1;m<p;m++)d.push(u[m],f[m])}var h=Xp(function(e,t,n){var r=l&&e.as||i,a=``,u=[],f=e;if(e.theme==null){for(var p in f={},e)f[p]=e[p];f.theme=v.useContext(Zp)}typeof e.className==`string`?a=kp(t.registered,u,e.className):e.className!=null&&(a=e.className+` `);var m=Wp(d.concat(u),t.registered,f);a+=t.key+`-`+m.name,o!==void 0&&(a+=` `+o);var h=l&&s===void 0?um(r):c,g={};for(var _ in e)l&&_===`as`||h(_)&&(g[_]=e[_]);return g.className=a,n&&(g.ref=n),v.createElement(v.Fragment,null,v.createElement(fm,{cache:t,serialized:m,isStringTag:typeof r==`string`}),v.createElement(r,g))});return h.displayName=a===void 0?`Styled(`+(typeof i==`string`?i:i.displayName||i.name||`Component`)+`)`:a,h.defaultProps=t.defaultProps,h.__emotion_real=h,h.__emotion_base=i,h.__emotion_styles=d,h.__emotion_forwardProp=s,Object.defineProperty(h,"toString",{value:function(){return`.`+o}}),h.withComponent=function(t,r){return e(t,ff({},n,r,{shouldForwardProp:dm(h,r,!0)})).apply(void 0,d)},h}},mm=`a.abbr.address.area.article.aside.audio.b.base.bdi.bdo.big.blockquote.body.br.button.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.keygen.label.legend.li.link.main.map.mark.marquee.menu.menuitem.meta.meter.nav.noscript.object.ol.optgroup.option.output.p.param.picture.pre.progress.q.rp.rt.ruby.s.samp.script.section.select.small.source.span.strong.style.sub.summary.sup.table.tbody.td.textarea.tfoot.th.thead.time.title.tr.track.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.foreignObject.g.image.line.linearGradient.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.text.tspan`.split(`.`),hm=pm.bind(null);mm.forEach(function(e){hm[e]=hm(e)});var gm=o((e=>{var t=Symbol.for(`react.transitional.element`);function n(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.jsx=n,e.jsxs=n})),J=o(((e,t)=>{t.exports=gm()}))();function _m(e){return e==null||Object.keys(e).length===0}function vm(e){let{styles:t,defaultTheme:n={}}=e;return(0,J.jsx)(im,{styles:typeof t==`function`?e=>t(_m(e)?n:e):t})}function ym(e,t){return hm(e,t)}function bm(e,t){Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))}var xm=[];function Sm(e){return xm[0]=e,Wp(xm)}var Cm=o((e=>{var t=Symbol.for(`react.fragment`),n=Symbol.for(`react.strict_mode`),r=Symbol.for(`react.profiler`),i=Symbol.for(`react.consumer`),a=Symbol.for(`react.context`),o=Symbol.for(`react.forward_ref`),s=Symbol.for(`react.suspense`),c=Symbol.for(`react.suspense_list`),l=Symbol.for(`react.memo`),u=Symbol.for(`react.lazy`),d=Symbol.for(`react.client.reference`);e.isValidElementType=function(e){return!!(typeof e==`string`||typeof e==`function`||e===t||e===r||e===n||e===s||e===c||typeof e==`object`&&e&&(e.$$typeof===u||e.$$typeof===l||e.$$typeof===a||e.$$typeof===i||e.$$typeof===o||e.$$typeof===d||e.getModuleId!==void 0))}})),wm=o(((e,t)=>{t.exports=Cm()}))();function Tm(e){if(typeof e!=`object`||!e)return!1;let t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Em(e){if(v.isValidElement(e)||(0,wm.isValidElementType)(e)||!Tm(e))return e;let t={};return Object.keys(e).forEach(n=>{t[n]=Em(e[n])}),t}function Dm(e,t,n={clone:!0}){let r=n.clone?{...e}:e;return Tm(e)&&Tm(t)&&Object.keys(t).forEach(i=>{v.isValidElement(t[i])||(0,wm.isValidElementType)(t[i])?r[i]=t[i]:Tm(t[i])&&Object.prototype.hasOwnProperty.call(e,i)&&Tm(e[i])?r[i]=Dm(e[i],t[i],n):n.clone?r[i]=Tm(t[i])?Em(t[i]):t[i]:r[i]=t[i]}),r}var Om=e=>{let t=Object.keys(e).map(t=>({key:t,val:e[t]}))||[];return t.sort((e,t)=>e.val-t.val),t.reduce((e,t)=>({...e,[t.key]:t.val}),{})};function km(e){let{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n=`px`,step:r=5,...i}=e,a=Om(t),o=Object.keys(a);function s(e){return`@media (min-width:${typeof t[e]==`number`?t[e]:e}${n})`}function c(e){return`@media (max-width:${(typeof t[e]==`number`?t[e]:e)-r/100}${n})`}function l(e,i){let a=o.indexOf(i);return`@media (min-width:${typeof t[e]==`number`?t[e]:e}${n}) and (max-width:${(a!==-1&&typeof t[o[a]]==`number`?t[o[a]]:i)-r/100}${n})`}function u(e){return o.indexOf(e)+1<o.length?l(e,o[o.indexOf(e)+1]):s(e)}function d(e){let t=o.indexOf(e);return t===0?s(o[1]):t===o.length-1?c(o[t]):l(e,o[o.indexOf(e)+1]).replace(`@media`,`@media not all and`)}let f=[];for(let e=0;e<o.length;e+=1)f.push(s(o[e]));return{keys:o,values:a,up:s,down:c,between:l,only:u,not:d,unit:n,internal_mediaKeys:f,...i}}var Am=/min-width:\s*([0-9.]+)/;function jm(e,t){if(!e.containerQueries||!Mm(t))return t;let n=[];for(let e in t)e.startsWith(`@container`)&&n.push(e);n.sort((e,t)=>(e.match(Am)?.[1]||0)-+(t.match(Am)?.[1]||0));let r=t;for(let e=0;e<n.length;e+=1){let t=n[e],i=r[t];delete r[t],r[t]=i}return r}function Mm(e){for(let t in e)if(t.startsWith(`@container`))return!0;return!1}function Nm(e,t){return t===`@`||t.startsWith(`@`)&&(e.some(e=>t.startsWith(`@${e}`))||!!t.match(/^@\d/))}function Pm(e,t){let n=t.match(/^@([^/]+)?\/?(.+)?$/);if(!n)return null;let[,r,i]=n,a=Number.isNaN(+r)?r||0:+r;return e.containerQueries(i).up(a)}function Fm(e){let t=(e,t)=>e.replace(`@media`,t?`@container ${t}`:`@container`);function n(n,r){n.up=(...n)=>t(e.breakpoints.up(...n),r),n.down=(...n)=>t(e.breakpoints.down(...n),r),n.between=(...n)=>t(e.breakpoints.between(...n),r),n.only=(...n)=>t(e.breakpoints.only(...n),r),n.not=(...n)=>{let i=t(e.breakpoints.not(...n),r);return i.includes(`not all and`)?i.replace(`not all and `,``).replace(`min-width:`,`width<`).replace(`max-width:`,`width>`).replace(`and`,`or`):i}}let r={},i=e=>(n(r,e),r);return n(i),{...e,containerQueries:i}}var Im={borderRadius:4};function Lm(e){if(e==null)return!0;for(let t in e)return!1;return!0}function Rm(e,t){let n=Array.isArray(t),r=Array.isArray(e);return Um(t)?t:Wm(e)?Gm(t):n&&r?Vm(e,t):n===r?Km(e,t):Gm(t)}function zm(e){let t=0,n=e.length,r=Array(n);for(t=0;t<n;t+=1)r[t]=Gm(e[t]);return r}function Bm(e){let t={};for(let n in e)n!==`__proto__`&&n!==`constructor`&&n!==`prototype`&&(t[n]=Gm(e[n]));return t}function Vm(e,t){let n=e.length;for(let r=0;r<t.length;r+=1)e[n+r]=Gm(t[r]);return e}function Hm(e){return typeof e==`object`&&!!e&&!(e instanceof RegExp)&&!(e instanceof Date)}function Um(e){return typeof e!=`object`||!e}function Wm(e){return typeof e!=`object`||!e||e instanceof RegExp||e instanceof Date}function Gm(e){return Hm(e)?Array.isArray(e)?zm(e):Bm(e):e}function Km(e,t){for(let n in t)n!==`__proto__`&&n!==`constructor`&&n!==`prototype`&&(e[n]=n in e?Rm(e[n],t[n]):Gm(t[n]));return e}var qm={},Jm={xs:0,sm:600,md:900,lg:1200,xl:1536},Ym=km({values:Jm}),Xm={containerQueries:e=>({up:t=>{let n=typeof t==`number`?t:Jm[t]||t;return typeof n==`number`&&(n=`${n}px`),e?`@container ${e} (min-width:${n})`:`@container (min-width:${n})`}})};function Zm(e,t,n){let r={};return Qm(r,e.theme,t,(e,t,i)=>{let a=n(t,i);e?r[e]=a:Rm(r,a)})}function Qm(e,t,n,r){if(t??=qm,Array.isArray(n)){let i=t.breakpoints??Ym;for(let t=0;t<n.length;t+=1)$m(e,i.up(i.keys[t]),n[t],void 0,r);return e}if(typeof n==`object`){let i=t.breakpoints??Ym,a=i.values??Jm;for(let o in n)if(Nm(i.keys,o)){let i=Pm(t.containerQueries?t:Xm,o);i&&$m(e,i,n[o],o,r)}else if(o in a)$m(e,i.up(o),n[o],o,r);else{let t=o;e[t]=n[t]}return e}return r(void 0,n),e}function $m(e,t,n,r,i){e[t]??={},i(t,n,r)}function eh(e=Ym){let{internal_mediaKeys:t}=e,n={};for(let e=0;e<t.length;e+=1)n[t[e]]={};return n}function th(e,t){let n=e.internal_mediaKeys;for(let e=0;e<n.length;e+=1){let r=n[e];Lm(t[r])&&delete t[r]}return t}function nh(e,t){if(Array.isArray(t))return!0;if(typeof t==`object`&&t){for(let n=0;n<e.keys.length;n+=1)if(e.keys[n]in t)return!0;let n=Object.keys(t);for(let t=0;t<n.length;t+=1)if(Nm(e.keys,n[t]))return!0}return!1}function rh(e){if(typeof e!=`string`)throw Error(uf(7));return e.charAt(0).toUpperCase()+e.slice(1)}function ih(e,t,n,r){let i;return i=typeof e==`function`?e(n):Array.isArray(e)?e[n]||n:typeof n==`string`&&ah(e,n,!0,r)||n,t&&(i=t(i,n,e)),i}function ah(e,t,n=!0,r=void 0){if(!e||!t)return null;let i=t.split(`.`);if(e.vars&&n){let t=oh(e.vars,i,r);if(t!=null)return t}return oh(e,i,r)}function oh(e,t,n=void 0){let r,i=e,a=0;for(;a<t.length;){if(i==null)return i;r=i,i=i[t[a]],a+=1}if(n&&i===void 0){let e=t[t.length-1],i=`${n}${e==="default"?``:rh(e)}`;return r?.[i]}return i}function sh(e){let{prop:t,cssProperty:n=e.prop,themeKey:r,transform:i}=e,a=e=>{if(e[t]==null)return null;let a=e[t],o=e.theme,s=ah(o,r)||{};return Zm(e,a,e=>{let r=ih(s,i,e,t);return n===!1?r:{[n]:r}})};return a.propTypes={},a.filterProps=[t],a}var ch={internal_cache:{}},lh={m:`margin`,p:`padding`},uh={t:`Top`,r:`Right`,b:`Bottom`,l:`Left`,x:[`Left`,`Right`],y:[`Top`,`Bottom`]},dh={marginX:`mx`,marginY:`my`,paddingX:`px`,paddingY:`py`},fh={};for(let e in lh)fh[e]=[lh[e]];for(let e in lh)for(let t in uh){let n=lh[e],r=uh[t],i=Array.isArray(r)?r.map(e=>n+e):[n+r];fh[e+t]=i}for(let e in dh)fh[e]=fh[dh[e]];var ph=new Set([`m`,`mt`,`mr`,`mb`,`ml`,`mx`,`my`,`margin`,`marginTop`,`marginRight`,`marginBottom`,`marginLeft`,`marginX`,`marginY`,`marginInline`,`marginInlineStart`,`marginInlineEnd`,`marginBlock`,`marginBlockStart`,`marginBlockEnd`]),mh=new Set([`p`,`pt`,`pr`,`pb`,`pl`,`px`,`py`,`padding`,`paddingTop`,`paddingRight`,`paddingBottom`,`paddingLeft`,`paddingX`,`paddingY`,`paddingInline`,`paddingInlineStart`,`paddingInlineEnd`,`paddingBlock`,`paddingBlockStart`,`paddingBlockEnd`]);[...ph,...mh];function hh(e,t,n,r){let i=ah(e,t,!0)??n;return typeof i==`number`||typeof i==`string`?e=>typeof e==`string`?e:typeof i==`string`?i.startsWith(`var(`)&&e===0?0:i.startsWith(`var(`)&&e===1?i:`calc(${e} * ${i})`:i*e:Array.isArray(i)?e=>{if(typeof e==`string`)return e;let t=i[Math.abs(e)];return e>=0?t:typeof t==`number`?-t:typeof t==`string`&&t.startsWith(`var(`)?`calc(-1 * ${t})`:`-${t}`}:typeof i==`function`?i:()=>void 0}function gh(e){return hh(e,`spacing`,8,`spacing`)}function _h(e,t){return typeof t==`string`||t==null?t:e(t)}var vh=[``];function yh(e,t){let n=e.theme??ch,r=n?.internal_cache?.unarySpacing??gh(n),i={};for(let n in e){if(!t.has(n))continue;let a=fh[n]??(vh[0]=n,vh),o=e[n];Qm(i,e.theme,o,(e,t)=>{let n=e?i[e]:i;for(let e=0;e<a.length;e+=1)n[a[e]]=_h(r,t)})}return i}function bh(e){return yh(e,ph)}bh.propTypes={},bh.filterProps=ph;var xh=bh;function Sh(e){return yh(e,mh)}Sh.propTypes={},Sh.filterProps=mh;var Ch=Sh;function wh(e=8,t=gh({spacing:e})){if(e.mui)return e;let n=(...e)=>(e.length===0?[1]:e).map(e=>{let n=t(e);return typeof n==`number`?`${n}px`:n}).join(` `);return n.mui=!0,n}function Th(...e){let t=e.reduce((e,t)=>(t.filterProps.forEach(n=>{e[n]=t}),e),{}),n=e=>{let n={};for(let r in e)t[r]&&Rm(n,t[r](e));return n};return n.propTypes={},n.filterProps=e.reduce((e,t)=>e.concat(t.filterProps),[]),n}function Eh(e){return typeof e==`number`?`${e}px solid`:e}function Dh(e,t){return sh({prop:e,themeKey:`borders`,transform:t})}var Oh=Dh(`border`,Eh),kh=Dh(`borderTop`,Eh),Ah=Dh(`borderRight`,Eh),jh=Dh(`borderBottom`,Eh),Mh=Dh(`borderLeft`,Eh),Nh=Dh(`borderColor`),Ph=Dh(`borderTopColor`),Fh=Dh(`borderRightColor`),Ih=Dh(`borderBottomColor`),Lh=Dh(`borderLeftColor`),Rh=Dh(`outline`,Eh),zh=Dh(`outlineColor`),Bh=e=>{if(e.borderRadius!==void 0&&e.borderRadius!==null){let t=hh(e.theme,`shape.borderRadius`,4,`borderRadius`);return Zm(e,e.borderRadius,e=>({borderRadius:_h(t,e)}))}return null};Bh.propTypes={},Bh.filterProps=[`borderRadius`],Th(Oh,kh,Ah,jh,Mh,Nh,Ph,Fh,Ih,Lh,Bh,Rh,zh);var Vh=e=>{if(e.gap!==void 0&&e.gap!==null){let t=hh(e.theme,`spacing`,8,`gap`);return Zm(e,e.gap,e=>({gap:_h(t,e)}))}return null};Vh.propTypes={},Vh.filterProps=[`gap`];var Hh=e=>{if(e.columnGap!==void 0&&e.columnGap!==null){let t=hh(e.theme,`spacing`,8,`columnGap`);return Zm(e,e.columnGap,e=>({columnGap:_h(t,e)}))}return null};Hh.propTypes={},Hh.filterProps=[`columnGap`];var Uh=e=>{if(e.rowGap!==void 0&&e.rowGap!==null){let t=hh(e.theme,`spacing`,8,`rowGap`);return Zm(e,e.rowGap,e=>({rowGap:_h(t,e)}))}return null};Uh.propTypes={},Uh.filterProps=[`rowGap`],Th(Vh,Hh,Uh,sh({prop:`gridColumn`}),sh({prop:`gridRow`}),sh({prop:`gridAutoFlow`}),sh({prop:`gridAutoColumns`}),sh({prop:`gridAutoRows`}),sh({prop:`gridTemplateColumns`}),sh({prop:`gridTemplateRows`}),sh({prop:`gridTemplateAreas`}),sh({prop:`gridArea`}));function Wh(e,t){return t===`grey`?t:e}Th(sh({prop:`color`,themeKey:`palette`,transform:Wh}),sh({prop:`bgcolor`,cssProperty:`backgroundColor`,themeKey:`palette`,transform:Wh}),sh({prop:`backgroundColor`,themeKey:`palette`,transform:Wh}));var Gh=Jm;function Kh(e){return e<=1&&e!==0?`${e*100}%`:e}var qh=sh({prop:`width`,transform:Kh}),Jh=e=>e.maxWidth!==void 0&&e.maxWidth!==null?Zm(e,e.maxWidth,t=>{let n=e.theme?.breakpoints?.values?.[t]||Gh[t];return n?e.theme?.breakpoints?.unit===`px`?{maxWidth:n}:{maxWidth:`${n}${e.theme.breakpoints.unit}`}:{maxWidth:Kh(t)}}):null;Jh.filterProps=[`maxWidth`];var Yh=sh({prop:`minWidth`,transform:Kh}),Xh=sh({prop:`height`,transform:Kh}),Zh=sh({prop:`maxHeight`,transform:Kh}),Qh=sh({prop:`minHeight`,transform:Kh});sh({prop:`size`,cssProperty:`width`,transform:Kh}),sh({prop:`size`,cssProperty:`height`,transform:Kh}),Th(qh,Jh,Yh,Xh,Zh,Qh,sh({prop:`boxSizing`}));var $h={border:{themeKey:`borders`,transform:Eh},borderTop:{themeKey:`borders`,transform:Eh},borderRight:{themeKey:`borders`,transform:Eh},borderBottom:{themeKey:`borders`,transform:Eh},borderLeft:{themeKey:`borders`,transform:Eh},borderColor:{themeKey:`palette`},borderTopColor:{themeKey:`palette`},borderRightColor:{themeKey:`palette`},borderBottomColor:{themeKey:`palette`},borderLeftColor:{themeKey:`palette`},outline:{themeKey:`borders`,transform:Eh},outlineColor:{themeKey:`palette`},borderRadius:{themeKey:`shape.borderRadius`,style:Bh},color:{themeKey:`palette`,transform:Wh},bgcolor:{themeKey:`palette`,cssProperty:`backgroundColor`,transform:Wh},backgroundColor:{themeKey:`palette`,transform:Wh},p:{style:Ch},pt:{style:Ch},pr:{style:Ch},pb:{style:Ch},pl:{style:Ch},px:{style:Ch},py:{style:Ch},padding:{style:Ch},paddingTop:{style:Ch},paddingRight:{style:Ch},paddingBottom:{style:Ch},paddingLeft:{style:Ch},paddingX:{style:Ch},paddingY:{style:Ch},paddingInline:{style:Ch},paddingInlineStart:{style:Ch},paddingInlineEnd:{style:Ch},paddingBlock:{style:Ch},paddingBlockStart:{style:Ch},paddingBlockEnd:{style:Ch},m:{style:xh},mt:{style:xh},mr:{style:xh},mb:{style:xh},ml:{style:xh},mx:{style:xh},my:{style:xh},margin:{style:xh},marginTop:{style:xh},marginRight:{style:xh},marginBottom:{style:xh},marginLeft:{style:xh},marginX:{style:xh},marginY:{style:xh},marginInline:{style:xh},marginInlineStart:{style:xh},marginInlineEnd:{style:xh},marginBlock:{style:xh},marginBlockStart:{style:xh},marginBlockEnd:{style:xh},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:Vh},rowGap:{style:Uh},columnGap:{style:Hh},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:`zIndex`},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:`shadows`},width:{transform:Kh},maxWidth:{style:Jh},minWidth:{transform:Kh},height:{transform:Kh},maxHeight:{transform:Kh},minHeight:{transform:Kh},boxSizing:{},font:{themeKey:`font`},fontFamily:{themeKey:`typography`},fontSize:{themeKey:`typography`},fontStyle:{themeKey:`typography`},fontWeight:{themeKey:`typography`},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:`typography`}},eg={};function tg(){function e(t){if(!t.sx)return null;let{sx:n,theme:r=eg,nested:i}=t,a=r.unstable_sxConfig??$h,o={sx:null,theme:r,nested:!0};function s(n){let s=n;if(typeof n==`function`)s=n(r);else if(typeof n!=`object`)return n;if(!s)return null;let c=r.breakpoints??Ym,l=eh(c);for(let n in s){let i=ig(s[n],r);if(i!=null){if(typeof i!=`object`){rg(l,n,i,r,a);continue}if(a[n]){rg(l,n,i,r,a);continue}nh(c,i)?Qm(l,t.theme,i,(e,t)=>{l[e][n]=t}):(o.sx=i,l[n]=e(o))}}return!i&&r.modularCssLayers?{"@layer sx":jm(r,th(c,l))}:jm(r,th(c,l))}return Array.isArray(n)?n.map(s):s(n)}return e.filterProps=[`sx`],e}var ng=tg();function rg(e,t,n,r,i){let a=i[t];if(!a){e[t]=n;return}if(n==null)return;let{themeKey:o}=a;if(o===`typography`&&n===`inherit`){e[t]=n;return}let{style:s}=a;if(s){Rm(e,s({[t]:n,theme:r}));return}let{cssProperty:c=t,transform:l}=a,u=ah(r,o);Qm(e,r,n,(n,r)=>{let i=ih(u,l,r,t);c===!1?Rm(n?e[n]:e,i):n?e[n][c]=i:e[c]=i})}function ig(e,t){return typeof e==`function`?e(t):e}function ag(e,t){let n=this;if(n.vars){if(!n.colorSchemes?.[e]||typeof n.getColorSchemeSelector!=`function`)return{};let r=n.getColorSchemeSelector(e);return r===`&`?t:((r.includes(`data-`)||r.includes(`.`))&&(r=`*:where(${r.replace(/\s*&$/,``)}) &`),{[r]:t})}return n.palette.mode===e?t:{}}function og(e={},...t){let{breakpoints:n={},palette:r={},spacing:i,shape:a={},...o}=e,s=km(n),c=wh(i),l=Dm({breakpoints:s,direction:`ltr`,components:{},palette:{mode:`light`,...r},spacing:c,shape:{...Im,...a}},o);return l=Fm(l),l.applyStyles=ag,l=t.reduce((e,t)=>Dm(e,t),l),l.unstable_sxConfig={...$h,...o?.unstable_sxConfig},l.unstable_sx=function(e){return ng({sx:e,theme:this})},l.internal_cache={},l}function sg(e){return Object.keys(e).length===0}function cg(e=null){let t=v.useContext(Zp);return!t||sg(t)?e:t}var lg=og();function ug(e=lg){return cg(e)}function dg(e){let t=Sm(e);return e!==t&&t.styles?(t.styles.match(/^@layer\s+[^{]*$/)||(t.styles=`@layer global{${t.styles}}`),t):e}function fg({styles:e,themeId:t,defaultTheme:n={}}){let r=ug(n),i=t&&r[t]||r,a=typeof e==`function`?e(i):e;return i.modularCssLayers&&(a=Array.isArray(a)?a.map(e=>dg(typeof e==`function`?e(i):e)):dg(a)),(0,J.jsx)(vm,{styles:a})}var pg=e=>e,mg=(()=>{let e=pg;return{configure(t){e=t},generate(t){return e(t)},reset(){e=pg}}})();function hg(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`){if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=hg(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n)}return r}function Y(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=hg(e))&&(r&&(r+=` `),r+=t);return r}function gg(e={}){let{themeId:t,defaultTheme:n,defaultClassName:r=`MuiBox-root`,generateClassName:i}=e,a=ym(`div`,{shouldForwardProp:e=>e!==`theme`&&e!==`sx`&&e!==`as`})(ng);return v.forwardRef(function(e,o){let s=ug(n),{className:c,component:l=`div`,...u}=e;return(0,J.jsx)(a,{as:l,ref:o,className:Y(c,i?i(r):r),theme:t&&s[t]||s,...u})})}var _g={active:`active`,checked:`checked`,completed:`completed`,disabled:`disabled`,error:`error`,expanded:`expanded`,focused:`focused`,focusVisible:`focusVisible`,open:`open`,readOnly:`readOnly`,required:`required`,selected:`selected`};function vg(e,t,n=`Mui`){let r=_g[t];return r?`${n}-${r}`:`${mg.generate(e)}-${t}`}function yg(e,t,n=`Mui`){let r={};return t.forEach(t=>{r[t]=vg(e,t,n)}),r}function bg(e){let{variants:t,...n}=e,r={variants:t,style:Sm(n),isProcessed:!0};return r.style===n||t&&t.forEach(e=>{typeof e.style!=`function`&&(e.style=Sm(e.style))}),r}var xg=og();function Sg(e){return e!==`ownerState`&&e!==`theme`&&e!==`sx`&&e!==`as`}function Cg(e,t){return t&&e&&typeof e==`object`&&e.styles&&!e.styles.startsWith(`@layer`)&&(e.styles=`@layer ${t}{${String(e.styles)}}`),e}function wg(e){return e?(t,n)=>n[e]:null}function Tg(e,t,n){e.theme=Lm(e.theme)?n:e.theme[t]||e.theme}function Eg(e,t,n){let r=typeof t==`function`?t(e):t;if(Array.isArray(r))return r.flatMap(t=>Eg(e,t,n));if(Array.isArray(r?.variants)){let t;if(r.isProcessed)t=n?Cg(r.style,n):r.style;else{let{variants:e,...i}=r;t=n?Cg(Sm(i),n):i}return Dg(e,r.variants,[t],n)}return r?.isProcessed?n?Cg(Sm(r.style),n):r.style:n?Cg(Sm(r),n):r}function Dg(e,t,n=[],r=void 0){let i;variantLoop:for(let a=0;a<t.length;a+=1){let o=t[a];if(typeof o.props==`function`){if(i??={...e,...e.ownerState,ownerState:e.ownerState},!o.props(i))continue}else for(let t in o.props)if(e[t]!==o.props[t]&&e.ownerState?.[t]!==o.props[t])continue variantLoop;typeof o.style==`function`?(i??={...e,...e.ownerState,ownerState:e.ownerState},n.push(r?Cg(Sm(o.style(i)),r):o.style(i))):n.push(r?Cg(Sm(o.style),r):o.style)}return n}function Og(e={}){let{themeId:t,defaultTheme:n=xg,rootShouldForwardProp:r=Sg,slotShouldForwardProp:i=Sg}=e;function a(e){Tg(e,t,n)}return(e,t={})=>{bm(e,e=>e.filter(e=>e!==ng));let{name:n,slot:o,skipVariantsResolver:s,skipSx:c,overridesResolver:l=wg(Ag(o)),...u}=t,d=n&&n.startsWith(`Mui`)||o?`components`:`custom`,f=s===void 0?o&&o!==`Root`&&o!==`root`||!1:s,p=c||!1,m=Sg;o===`Root`||o===`root`?m=r:o?m=i:kg(e)&&(m=void 0);let h=ym(e,{shouldForwardProp:m,label:void 0,...u}),g=e=>{if(e.__emotion_real===e)return e;if(typeof e==`function`)return function(t){return Eg(t,e,t.theme.modularCssLayers?d:void 0)};if(Tm(e)){let t=bg(e);return function(e){return t.variants?Eg(e,t,e.theme.modularCssLayers?d:void 0):e.theme.modularCssLayers?Cg(t.style,d):t.style}}return e},_=(...t)=>{let r=[],i=t.map(g),o=[];if(r.push(a),n&&l&&o.push(function(e){let t=e.theme.components?.[n]?.styleOverrides;if(!t)return null;let r={};for(let n in t)r[n]=Eg(e,t[n],e.theme.modularCssLayers?`theme`:void 0);return l(e,r)}),n&&!f&&o.push(function(e){let t=e.theme?.components?.[n]?.variants;return t?Dg(e,t,[],e.theme.modularCssLayers?`theme`:void 0):null}),p||o.push(ng),Array.isArray(i[0])){let e=i.shift(),t=Array(r.length).fill(``),n=Array(o.length).fill(``),a;a=[...t,...e,...n],a.raw=[...t,...e.raw,...n],r.unshift(a)}let s=[...r,...i,...o],c=h(...s);return e.muiName&&(c.muiName=e.muiName),c};return h.withConfig&&(_.withConfig=h.withConfig),_}}function kg(e){return typeof e==`string`&&e.charCodeAt(0)>96}function Ag(e){return e&&e.charAt(0).toLowerCase()+e.slice(1)}function jg(e,t,n=!1){let r={...t};for(let i in e)if(Object.prototype.hasOwnProperty.call(e,i)){let a=i;if(a===`components`||a===`slots`)r[a]={...e[a],...r[a]};else if(a===`componentsProps`||a===`slotProps`){let i=e[a],o=t[a];if(!o)r[a]=i||{};else if(!i)r[a]=o;else{r[a]={...o};for(let e in i)if(Object.prototype.hasOwnProperty.call(i,e)){let t=e;r[a][t]=jg(i[t],o[t],n)}}}else a===`className`&&n&&t.className!==void 0?r.className=Y(e?.className,t?.className):a===`style`&&n&&t.style?r.style={...e?.style,...t?.style}:r[a]===void 0&&(r[a]=e[a])}return r}var Mg=typeof window<`u`?v.useLayoutEffect:v.useEffect;function Ng(e,t=-(2**53-1),n=2**53-1){return Math.max(t,Math.min(e,n))}function Pg(e,t=0,n=1){return Ng(e,t,n)}function Fg(e){e=e.slice(1);let t=RegExp(`.{1,${e.length>=6?2:1}}`,`g`),n=e.match(t);return n&&n[0].length===1&&(n=n.map(e=>e+e)),n?`rgb${n.length===4?`a`:``}(${n.map((e,t)=>t<3?parseInt(e,16):Math.round(parseInt(e,16)/255*1e3)/1e3).join(`, `)})`:``}function Ig(e){if(e.type)return e;if(e.charAt(0)===`#`)return Ig(Fg(e));let t=e.indexOf(`(`),n=e.substring(0,t);if(![`rgb`,`rgba`,`hsl`,`hsla`,`color`].includes(n))throw Error(uf(9,e));let r=e.substring(t+1,e.length-1),i;if(n===`color`){if(r=r.split(` `),i=r.shift(),r.length===4&&r[3].charAt(0)===`/`&&(r[3]=r[3].slice(1)),![`srgb`,`display-p3`,`a98-rgb`,`prophoto-rgb`,`rec-2020`].includes(i))throw Error(uf(10,i))}else r=r.split(`,`);return r=r.map(e=>parseFloat(e)),{type:n,values:r,colorSpace:i}}var Lg=e=>{let t=Ig(e);return t.values.slice(0,3).map((e,n)=>t.type.includes(`hsl`)&&n!==0?`${e}%`:e).join(` `)},Rg=(e,t)=>{try{return Lg(e)}catch{return e}};function zg(e){let{type:t,colorSpace:n}=e,{values:r}=e;return t.includes(`rgb`)?r=r.map((e,t)=>t<3?parseInt(e,10):e):t.includes(`hsl`)&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),r=t.includes(`color`)?`${n} ${r.join(` `)}`:`${r.join(`, `)}`,`${t}(${r})`}function Bg(e){e=Ig(e);let{values:t}=e,n=t[0],r=t[1]/100,i=t[2]/100,a=r*Math.min(i,1-i),o=(e,t=(e+n/30)%12)=>i-a*Math.max(Math.min(t-3,9-t,1),-1),s=`rgb`,c=[Math.round(o(0)*255),Math.round(o(8)*255),Math.round(o(4)*255)];return e.type===`hsla`&&(s+=`a`,c.push(t[3])),zg({type:s,values:c})}function Vg(e){e=Ig(e);let t=e.type===`hsl`||e.type===`hsla`?Ig(Bg(e)).values:e.values;return t=t.map(t=>(e.type!==`color`&&(t/=255),t<=.03928?t/12.92:((t+.055)/1.055)**2.4)),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function Hg(e,t){let n=Vg(e),r=Vg(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function Ug(e,t){return e=Ig(e),t=Pg(t),(e.type===`rgb`||e.type===`hsl`)&&(e.type+=`a`),e.type===`color`?e.values[3]=`/${t}`:e.values[3]=t,zg(e)}function Wg(e,t,n){try{return Ug(e,t)}catch{return e}}function Gg(e,t){if(e=Ig(e),t=Pg(t),e.type.includes(`hsl`))e.values[2]*=1-t;else if(e.type.includes(`rgb`)||e.type.includes(`color`))for(let n=0;n<3;n+=1)e.values[n]*=1-t;return zg(e)}function Kg(e,t,n){try{return Gg(e,t)}catch{return e}}function qg(e,t){if(e=Ig(e),t=Pg(t),e.type.includes(`hsl`))e.values[2]+=(100-e.values[2])*t;else if(e.type.includes(`rgb`))for(let n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;else if(e.type.includes(`color`))for(let n=0;n<3;n+=1)e.values[n]+=(1-e.values[n])*t;return zg(e)}function Jg(e,t,n){try{return qg(e,t)}catch{return e}}function Yg(e,t=.15){return Vg(e)>.5?Gg(e,t):qg(e,t)}function Xg(e,t,n){try{return Yg(e,t)}catch{return e}}var Zg=v.createContext(),Qg=()=>v.useContext(Zg)??!1,$g=v.createContext(void 0);function e_(e){let{theme:t,name:n,props:r}=e;if(!t||!t.components||!t.components[n])return r;let i=t.components[n];return i.defaultProps?jg(i.defaultProps,r,t.components.mergeClassNameAndStyle):!i.styleOverrides&&!i.variants?jg(i,r,t.components.mergeClassNameAndStyle):r}function t_({props:e,name:t}){return e_({props:e,name:t,theme:{components:v.useContext($g)}})}var n_=0;function r_(e){let[t,n]=v.useState(e),r=e||t;return v.useEffect(()=>{t??(n_+=1,n(`mui-${n_}`))},[t]),r}var i_={...v}.useId;function a_(e){if(i_!==void 0){let t=i_();return e??t}return r_(e)}var o_={theme:void 0};function s_(e){let t,n;return function(r){let i=t;return(i===void 0||r.theme!==n)&&(o_.theme=r.theme,i=bg(e(o_)),t=i,n=r.theme),i}}function c_(e=``){function t(...n){if(!n.length)return``;let r=n[0];return typeof r==`string`&&!r.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)?`, var(--${e?`${e}-`:``}${r}${t(...n.slice(1))})`:`, ${r}`}return(n,...r)=>`var(--${e?`${e}-`:``}${n}${t(...r)})`}var l_=new Set([`__proto__`,`constructor`,`prototype`]),u_=(e,t,n,r=[])=>{let i=e;for(let e=0;e<t.length;e+=1){let a=t[e];if(l_.has(a))break;e===t.length-1?Array.isArray(i)?i[Number(a)]=n:i&&typeof i==`object`&&(i[a]=n):i&&typeof i==`object`&&(i[a]||(i[a]=r.includes(a)?[]:{}),i=i[a])}},d_=(e,t,n)=>{function r(e,i=[],a=[]){Object.entries(e).forEach(([e,o])=>{(!n||n&&!n([...i,e]))&&o!=null&&(typeof o==`object`&&Object.keys(o).length>0?r(o,[...i,e],Array.isArray(o)?[...a,e]:a):t([...i,e],o,a))})}r(e)},f_=(e,t)=>typeof t==`number`?[`lineHeight`,`fontWeight`,`opacity`,`zIndex`].some(t=>e.includes(t))||e[e.length-1].toLowerCase().includes(`opacity`)?t:`${t}px`:t;function p_(e,t){let{prefix:n,shouldSkipGeneratingVar:r}=t||{},i={},a={},o={};return d_(e,(e,t,s)=>{if((typeof t==`string`||typeof t==`number`)&&(!r||!r(e,t))){let r=`--${n?`${n}-`:``}${e.join(`-`)}`,c=f_(e,t);Object.assign(i,{[r]:c}),u_(a,e,`var(${r})`,s),u_(o,e,`var(${r}, ${c})`,s)}},e=>e[0]===`vars`),{css:i,vars:a,varsWithDefaults:o}}function m_(e,t={}){let{getSelector:n=_,disableCssColorScheme:r,colorSchemeSelector:i,enableContrastVars:a}=t,{colorSchemes:o={},components:s,defaultColorScheme:c=`light`,...l}=e,{vars:u,css:d,varsWithDefaults:f}=p_(l,t),p=f,m={},{[c]:h,...g}=o;if(Object.entries(g||{}).forEach(([e,n])=>{let{vars:r,css:i,varsWithDefaults:a}=p_(n,t);p=Dm(p,a),m[e]={css:i,vars:r}}),h){let{css:e,vars:n,varsWithDefaults:r}=p_(h,t);p=Dm(p,r),m[c]={css:e,vars:n}}function _(t,n){let r=i;if(i===`class`&&(r=`.%s`),i===`data`&&(r=`[data-%s]`),i?.startsWith(`data-`)&&!i.includes(`%s`)&&(r=`[${i}="%s"]`),t){if(r===`media`)return e.defaultColorScheme===t?`:root`:{[`@media (prefers-color-scheme: ${o[t]?.palette?.mode||t})`]:{":root":n}};if(r)return e.defaultColorScheme===t?`:root, ${r.replace(`%s`,String(t))}`:r.replace(`%s`,String(t))}return`:root`}return{vars:p,generateThemeVars:()=>{let e={...u};return Object.entries(m).forEach(([,{vars:t}])=>{e=Dm(e,t)}),e},generateStyleSheets:()=>{let t=[],i=e.defaultColorScheme||`light`;function s(e,n){Object.keys(n).length&&t.push(typeof e==`string`?{[e]:{...n}}:e)}s(n(void 0,{...d}),d);let{[i]:c,...l}=m;if(c){let{css:e}=c,t=o[i]?.palette?.mode,a=!r&&t?{colorScheme:t,...e}:{...e};s(n(i,{...a}),a)}return Object.entries(l).forEach(([e,{css:t}])=>{let i=o[e]?.palette?.mode,a=!r&&i?{colorScheme:i,...t}:{...t};s(n(e,{...a}),a)}),a&&t.push({":root":{"--__l-threshold":`0.7`,"--__l":`clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)`,"--__a":`clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)`}}),t}}}function h_(e){return function(t){return e===`media`?`@media (prefers-color-scheme: ${t})`:e?e.startsWith(`data-`)&&!e.includes(`%s`)?`[${e}="${t}"] &`:e===`class`?`.${t} &`:e===`data`?`[data-${t}] &`:`${e.replace(`%s`,t)} &`:`&`}}function g_(e,t,n=void 0){let r={};for(let i in e){let a=e[i],o=``,s=!0;for(let e=0;e<a.length;e+=1){let r=a[e];r&&(o+=(s===!0?``:` `)+t(r),s=!1,n&&n[r]&&(o+=` `+n[r]))}r[i]=o}return r}function __(){return{text:{primary:`rgba(0, 0, 0, 0.87)`,secondary:`rgba(0, 0, 0, 0.6)`,disabled:`rgba(0, 0, 0, 0.38)`},divider:`rgba(0, 0, 0, 0.12)`,background:{paper:tf.white,default:tf.white},action:{active:`rgba(0, 0, 0, 0.54)`,hover:`rgba(0, 0, 0, 0.04)`,hoverOpacity:.04,selected:`rgba(0, 0, 0, 0.08)`,selectedOpacity:.08,disabled:`rgba(0, 0, 0, 0.26)`,disabledBackground:`rgba(0, 0, 0, 0.12)`,disabledOpacity:.38,focus:`rgba(0, 0, 0, 0.12)`,focusOpacity:.12,activatedOpacity:.12}}}var v_=__();function y_(){return{text:{primary:tf.white,secondary:`rgba(255, 255, 255, 0.7)`,disabled:`rgba(255, 255, 255, 0.5)`,icon:`rgba(255, 255, 255, 0.5)`},divider:`rgba(255, 255, 255, 0.12)`,background:{paper:`#121212`,default:`#121212`},action:{active:tf.white,hover:`rgba(255, 255, 255, 0.08)`,hoverOpacity:.08,selected:`rgba(255, 255, 255, 0.16)`,selectedOpacity:.16,disabled:`rgba(255, 255, 255, 0.3)`,disabledBackground:`rgba(255, 255, 255, 0.12)`,disabledOpacity:.38,focus:`rgba(255, 255, 255, 0.12)`,focusOpacity:.12,activatedOpacity:.24}}}var b_=y_();function x_(e,t,n,r){let i=r.light||r,a=r.dark||r*1.5;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:t===`light`?e.light=qg(e.main,i):t===`dark`&&(e.dark=Gg(e.main,a)))}function S_(e,t,n,r,i){let a=i.light||i,o=i.dark||i*1.5;t[n]||(t.hasOwnProperty(r)?t[n]=t[r]:n===`light`?t.light=`color-mix(in ${e}, ${t.main}, #fff ${(a*100).toFixed(0)}%)`:n===`dark`&&(t.dark=`color-mix(in ${e}, ${t.main}, #000 ${(o*100).toFixed(0)}%)`))}function C_(e=`light`){return e===`dark`?{main:af[200],light:af[50],dark:af[400]}:{main:af[700],light:af[400],dark:af[800]}}function w_(e=`light`){return e===`dark`?{main:rf[200],light:rf[50],dark:rf[400]}:{main:rf[500],light:rf[300],dark:rf[700]}}function T_(e=`light`){return e===`dark`?{main:nf[500],light:nf[300],dark:nf[700]}:{main:nf[700],light:nf[400],dark:nf[800]}}function E_(e=`light`){return e===`dark`?{main:of[400],light:of[300],dark:of[700]}:{main:of[700],light:of[500],dark:of[900]}}function D_(e=`light`){return e===`dark`?{main:sf[400],light:sf[300],dark:sf[700]}:{main:sf[800],light:sf[500],dark:sf[900]}}function O_(e=`light`){return e===`dark`?{main:cf[400],light:cf[300],dark:cf[700]}:{main:`#ed6c02`,light:cf[500],dark:cf[900]}}function k_(e){return`oklch(from ${e} var(--__l) 0 h / var(--__a))`}function A_(e){let{mode:t=`light`,contrastThreshold:n=3,tonalOffset:r=.2,colorSpace:i,...a}=e,o=e.primary||C_(t),s=e.secondary||w_(t),c=e.error||T_(t),l=e.info||E_(t),u=e.success||D_(t),d=e.warning||O_(t);function f(e){return i?k_(e):Hg(e,b_.text.primary)>=n?b_.text.primary:v_.text.primary}let p=({color:e,name:t,mainShade:n=500,lightShade:a=300,darkShade:o=700})=>{if(e={...e},!e.main&&e[n]&&(e.main=e[n]),!e.hasOwnProperty(`main`))throw Error(uf(11,t?` (${t})`:``,n));if(typeof e.main!=`string`)throw Error(uf(12,t?` (${t})`:``,JSON.stringify(e.main)));return i?(S_(i,e,`light`,a,r),S_(i,e,`dark`,o,r)):(x_(e,`light`,a,r),x_(e,`dark`,o,r)),e.contrastText||(e.contrastText=f(e.main)),e},m;return t===`light`?m=__():t===`dark`&&(m=y_()),Dm({common:{...tf},mode:t,primary:p({color:o,name:`primary`}),secondary:p({color:s,name:`secondary`,mainShade:`A400`,lightShade:`A200`,darkShade:`A700`}),error:p({color:c,name:`error`}),warning:p({color:d,name:`warning`}),info:p({color:l,name:`info`}),success:p({color:u,name:`success`}),grey:lf,contrastThreshold:n,getContrastText:f,augmentColor:p,tonalOffset:r,...m},a)}function j_(e){let t={};return Object.entries(e).forEach(e=>{let[n,r]=e;typeof r==`object`&&(t[n]=`${r.fontStyle?`${r.fontStyle} `:``}${r.fontVariant?`${r.fontVariant} `:``}${r.fontWeight?`${r.fontWeight} `:``}${r.fontStretch?`${r.fontStretch} `:``}${r.fontSize||``}${r.lineHeight?`/${r.lineHeight} `:``}${r.fontFamily||``}`)}),t}function M_(e,t){return{toolbar:{minHeight:56,[e.up(`xs`)]:{"@media (orientation: landscape)":{minHeight:48}},[e.up(`sm`)]:{minHeight:64}},...t}}function N_(e){return Math.round(e*1e5)/1e5}var P_={textTransform:`uppercase`},F_=`"Roboto", "Helvetica", "Arial", sans-serif`;function I_(e,t){let{fontFamily:n=F_,fontSize:r=14,fontWeightLight:i=300,fontWeightRegular:a=400,fontWeightMedium:o=500,fontWeightBold:s=700,htmlFontSize:c=16,allVariants:l,pxToRem:u,...d}=typeof t==`function`?t(e):t,f=r/14,p=u||(e=>`${e/c*f}rem`),m=(e,t,r,i,a)=>({fontFamily:n,fontWeight:e,fontSize:p(t),lineHeight:r,...n===F_?{letterSpacing:`${N_(i/t)}em`}:{},...a,...l});return Dm({htmlFontSize:c,pxToRem:p,fontFamily:n,fontSize:r,fontWeightLight:i,fontWeightRegular:a,fontWeightMedium:o,fontWeightBold:s,h1:m(i,96,1.167,-1.5),h2:m(i,60,1.2,-.5),h3:m(a,48,1.167,0),h4:m(a,34,1.235,.25),h5:m(a,24,1.334,0),h6:m(o,20,1.6,.15),subtitle1:m(a,16,1.75,.15),subtitle2:m(o,14,1.57,.1),body1:m(a,16,1.5,.15),body2:m(a,14,1.43,.15),button:m(o,14,1.75,.4,P_),caption:m(a,12,1.66,.4),overline:m(a,12,2.66,1,P_),inherit:{fontFamily:`inherit`,fontWeight:`inherit`,fontSize:`inherit`,lineHeight:`inherit`,letterSpacing:`inherit`}},d,{clone:!1})}var L_=.2,R_=.14,z_=.12;function B_(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${L_})`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${R_})`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${z_})`].join(`,`)}var V_=[`none`,B_(0,2,1,-1,0,1,1,0,0,1,3,0),B_(0,3,1,-2,0,2,2,0,0,1,5,0),B_(0,3,3,-2,0,3,4,0,0,1,8,0),B_(0,2,4,-1,0,4,5,0,0,1,10,0),B_(0,3,5,-1,0,5,8,0,0,1,14,0),B_(0,3,5,-1,0,6,10,0,0,1,18,0),B_(0,4,5,-2,0,7,10,1,0,2,16,1),B_(0,5,5,-3,0,8,10,1,0,3,14,2),B_(0,5,6,-3,0,9,12,1,0,3,16,2),B_(0,6,6,-3,0,10,14,1,0,4,18,3),B_(0,6,7,-4,0,11,15,1,0,4,20,3),B_(0,7,8,-4,0,12,17,2,0,5,22,4),B_(0,7,8,-4,0,13,19,2,0,5,24,4),B_(0,7,9,-4,0,14,21,2,0,5,26,4),B_(0,8,9,-5,0,15,22,2,0,6,28,5),B_(0,8,10,-5,0,16,24,2,0,6,30,5),B_(0,8,11,-5,0,17,26,2,0,6,32,5),B_(0,9,11,-5,0,18,28,2,0,7,34,6),B_(0,9,12,-6,0,19,29,2,0,7,36,6),B_(0,10,13,-6,0,20,31,3,0,8,38,7),B_(0,10,13,-6,0,21,33,3,0,8,40,7),B_(0,10,14,-6,0,22,35,3,0,8,42,7),B_(0,11,14,-7,0,23,36,3,0,9,44,8),B_(0,11,15,-7,0,24,38,3,0,9,46,8)],H_=[`all`],U_={},W_={easeInOut:`cubic-bezier(0.4, 0, 0.2, 1)`,easeOut:`cubic-bezier(0.0, 0, 0.2, 1)`,easeIn:`cubic-bezier(0.4, 0, 1, 1)`,sharp:`cubic-bezier(0.4, 0, 0.6, 1)`},G_={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function K_(e){return`${Math.round(e)}ms`}function q_(e){if(!e)return 0;let t=e/36;return Math.min(Math.round((4+15*t**.25+t/5)*10),3e3)}function J_(e){let t={...e};delete t.reducedMotion;let n={...W_,...t.easing},r={...G_,...t.duration};return{getAutoHeightDuration:q_,create:t.create??((e=H_,t=U_)=>{let{duration:i=r.standard,easing:a=n.easeInOut,delay:o=0,...s}=t;return(Array.isArray(e)?e:[e]).map(e=>`${e} ${typeof i==`string`?i:K_(i)} ${a} ${typeof o==`string`?o:K_(o)}`).join(`,`)}),...t,easing:n,duration:r}}var Y_={};function X_(e=Y_){return{reducedMotion:`never`,...e}}var Z_={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};function Q_(e){return Tm(e)||e===void 0||typeof e==`string`||typeof e==`boolean`||typeof e==`number`||Array.isArray(e)}function $_(e={}){let t={...e};function n(e){let t=Object.entries(e);for(let r=0;r<t.length;r++){let[i,a]=t[r];!Q_(a)||i.startsWith(`unstable_`)||i.startsWith(`internal_`)?delete e[i]:Tm(a)&&(e[i]={...a},n(e[i]))}}return n(t),`import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t,null,2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.motion = { reducedMotion: 'never', ...theme.motion };
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`}function ev(e){return typeof e==`number`?`${(e*100).toFixed(0)}%`:`calc((${e}) * 100%)`}var tv=e=>{if(!Number.isNaN(+e))return+e;let t=e.match(/\d*\.?\d+/g);if(!t)return 0;let n=0;for(let e=0;e<t.length;e+=1)n+=+t[e];return n};function nv(e){Object.assign(e,{alpha(t,n){let r=this||e;return r.colorSpace?`oklch(from ${t} l c h / ${typeof n==`string`?`calc(${n})`:n})`:r.vars?`rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g,`var(--$1Channel)`)} / ${typeof n==`string`?`calc(${n})`:n})`:Ug(t,tv(n))},lighten(t,n){let r=this||e;return r.colorSpace?`color-mix(in ${r.colorSpace}, ${t}, #fff ${ev(n)})`:qg(t,n)},darken(t,n){let r=this||e;return r.colorSpace?`color-mix(in ${r.colorSpace}, ${t}, #000 ${ev(n)})`:Gg(t,n)}})}function rv(e={},...t){let{breakpoints:n,mixins:r={},spacing:i,palette:a={},motion:o={},transitions:s={},typography:c={},shape:l,colorSpace:u,...d}=e;if(e.vars&&e.generateThemeVars===void 0)throw Error(uf(22));let f=A_({...a,colorSpace:u}),p=og(e),m=Dm(p,{mixins:M_(p.breakpoints,r),palette:f,shadows:V_.slice(),typography:I_(f,c),motion:X_(o),transitions:J_(s),zIndex:{...Z_}});return m=Dm(m,d),m=t.reduce((e,t)=>Dm(e,t),m),delete m.transitions.reducedMotion,m.unstable_sxConfig={...$h,...d?.unstable_sxConfig},m.unstable_sx=function(e){return ng({sx:e,theme:this})},m.toRuntimeSource=$_,nv(m),m}function iv(e){let t;return t=e<1?5.11916*e**2:4.5*Math.log(e+1)+2,Math.round(t*10)/1e3}var av=[...Array(25)].map((e,t)=>{if(t===0)return`none`;let n=iv(t);return`linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`});function ov(e){return{inputPlaceholder:e===`dark`?.5:.42,inputUnderline:e===`dark`?.7:.42,switchTrackDisabled:e===`dark`?.2:.12,switchTrack:e===`dark`?.3:.38}}function sv(e){return e===`dark`?av:[]}function cv(e){let{palette:t={mode:`light`},opacity:n,overlays:r,colorSpace:i,...a}=e,o=A_({...t,colorSpace:i});return{palette:o,opacity:{...ov(o.mode),...n},overlays:r||sv(o.mode),...a}}function lv(e){return e[0]===`motion`||!!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/)||!!e[0].match(/sxConfig$/)||e[0]===`palette`&&!!e[1]?.match(/(mode|contrastThreshold|tonalOffset)/)}var uv=e=>[...[...Array(25)].map((t,n)=>`--${e?`${e}-`:``}overlays-${n}`),`--${e?`${e}-`:``}palette-AppBar-darkBg`,`--${e?`${e}-`:``}palette-AppBar-darkColor`],dv=e=>(t,n)=>{let r=e.rootSelector||`:root`,i=e.colorSchemeSelector,a=i;if(i===`class`&&(a=`.%s`),i===`data`&&(a=`[data-%s]`),i?.startsWith(`data-`)&&!i.includes(`%s`)&&(a=`[${i}="%s"]`),e.defaultColorScheme===t){if(t===`dark`){let i={};return uv(e.cssVarPrefix).forEach(e=>{i[e]=n[e],delete n[e]}),a===`media`?{[r]:n,"@media (prefers-color-scheme: dark)":{[r]:i}}:a?{[a.replace(`%s`,t)]:i,[`${r}, ${a.replace(`%s`,t)}`]:n}:{[r]:{...n,...i}}}if(a&&a!==`media`)return`${r}, ${a.replace(`%s`,String(t))}`}else if(t){if(a===`media`)return{[`@media (prefers-color-scheme: ${String(t)})`]:{[r]:n}};if(a)return a.replace(`%s`,String(t))}return r};function fv(e,t){t.forEach(t=>{e[t]||(e[t]={})})}function X(e,t,n){!e[t]&&n&&(e[t]=n)}function pv(e){return typeof e!=`string`||!e.startsWith(`hsl`)?e:Bg(e)}function mv(e,t){`${t}Channel`in e||(e[`${t}Channel`]=Rg(pv(e[t]),`MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`))}function hv(e){return typeof e==`number`?`${e}px`:typeof e==`string`||typeof e==`function`||Array.isArray(e)?e:`8px`}var gv=e=>{try{return e()}catch{}},_v=(e=`mui`)=>c_(e);function vv(e,t,n,r,i){if(!n)return;n=n===!0?{}:n;let a=i===`dark`?`dark`:`light`;if(!r){t[i]=cv({...n,palette:{mode:a,...n?.palette},colorSpace:e});return}let{palette:o,...s}=rv({...r,palette:{mode:a,...n?.palette},colorSpace:e});return t[i]={...n,palette:o,opacity:{...ov(a),...n?.opacity},overlays:n?.overlays||sv(a)},s}function yv(e={},...t){let{colorSchemes:n={light:!0},defaultColorScheme:r,disableCssColorScheme:i=!1,cssVarPrefix:a=`mui`,nativeColor:o=!1,shouldSkipGeneratingVar:s=lv,colorSchemeSelector:c=n.light&&n.dark?`media`:void 0,rootSelector:l=`:root`,...u}=e,d=Object.keys(n)[0],f=r||(n.light&&d!==`light`?`light`:d),p=_v(a),{[f]:m,light:h,dark:g,..._}=n,v={..._},y=m;if((f===`dark`&&!(`dark`in n)||f===`light`&&!(`light`in n))&&(y=!0),!y)throw Error(uf(21,f));let b;o&&(b=`oklch`);let x=vv(b,v,y,u,f);h&&!v.light&&vv(b,v,h,void 0,`light`),g&&!v.dark&&vv(b,v,g,void 0,`dark`);let S={defaultColorScheme:f,...x,cssVarPrefix:a,colorSchemeSelector:c,rootSelector:l,getCssVar:p,colorSchemes:v,font:{...j_(x.typography),...x.font},spacing:hv(u.spacing)};Object.keys(S.colorSchemes).forEach(e=>{let t=S.colorSchemes[e].palette,n=e=>{let n=e.split(`-`),r=n[1],i=n[2];return p(e,t[r][i])};t.mode===`light`&&(X(t.common,`background`,`#fff`),X(t.common,`onBackground`,`#000`)),t.mode===`dark`&&(X(t.common,`background`,`#000`),X(t.common,`onBackground`,`#fff`));function r(e,t,n){if(b){let r;return e===Wg&&(r=`transparent ${((1-n)*100).toFixed(0)}%`),e===Kg&&(r=`#000 ${(n*100).toFixed(0)}%`),e===Jg&&(r=`#fff ${(n*100).toFixed(0)}%`),`color-mix(in ${b}, ${t}, ${r})`}return e(t,n)}if(fv(t,[`Alert`,`AppBar`,`Avatar`,`Button`,`Chip`,`FilledInput`,`LinearProgress`,`Skeleton`,`Slider`,`SnackbarContent`,`SpeedDialAction`,`StepConnector`,`StepContent`,`Switch`,`TableCell`,`Tooltip`]),t.mode===`light`){X(t.Alert,`errorColor`,r(Kg,o?p(`palette-error-light`):t.error.light,.6)),X(t.Alert,`infoColor`,r(Kg,o?p(`palette-info-light`):t.info.light,.6)),X(t.Alert,`successColor`,r(Kg,o?p(`palette-success-light`):t.success.light,.6)),X(t.Alert,`warningColor`,r(Kg,o?p(`palette-warning-light`):t.warning.light,.6)),X(t.Alert,`errorFilledBg`,n(`palette-error-main`)),X(t.Alert,`infoFilledBg`,n(`palette-info-main`)),X(t.Alert,`successFilledBg`,n(`palette-success-main`)),X(t.Alert,`warningFilledBg`,n(`palette-warning-main`)),X(t.Alert,`errorFilledColor`,gv(()=>t.getContrastText(t.error.main))),X(t.Alert,`infoFilledColor`,gv(()=>t.getContrastText(t.info.main))),X(t.Alert,`successFilledColor`,gv(()=>t.getContrastText(t.success.main))),X(t.Alert,`warningFilledColor`,gv(()=>t.getContrastText(t.warning.main))),X(t.Alert,`errorStandardBg`,r(Jg,o?p(`palette-error-light`):t.error.light,.9)),X(t.Alert,`infoStandardBg`,r(Jg,o?p(`palette-info-light`):t.info.light,.9)),X(t.Alert,`successStandardBg`,r(Jg,o?p(`palette-success-light`):t.success.light,.9)),X(t.Alert,`warningStandardBg`,r(Jg,o?p(`palette-warning-light`):t.warning.light,.9)),X(t.Alert,`errorIconColor`,n(`palette-error-main`)),X(t.Alert,`infoIconColor`,n(`palette-info-main`)),X(t.Alert,`successIconColor`,n(`palette-success-main`)),X(t.Alert,`warningIconColor`,n(`palette-warning-main`)),X(t.AppBar,`defaultBg`,n(`palette-grey-100`)),X(t.Avatar,`defaultBg`,n(`palette-grey-400`)),X(t.Button,`inheritContainedBg`,n(`palette-grey-300`)),X(t.Button,`inheritContainedHoverBg`,n(`palette-grey-A100`)),X(t.Chip,`defaultBorder`,n(`palette-grey-400`)),X(t.Chip,`defaultAvatarColor`,n(`palette-grey-700`)),X(t.Chip,`defaultIconColor`,n(`palette-grey-700`)),X(t.FilledInput,`bg`,`rgba(0, 0, 0, 0.06)`),X(t.FilledInput,`hoverBg`,`rgba(0, 0, 0, 0.09)`),X(t.FilledInput,`disabledBg`,`rgba(0, 0, 0, 0.12)`),X(t.LinearProgress,`primaryBg`,r(Jg,o?p(`palette-primary-main`):t.primary.main,.62)),X(t.LinearProgress,`secondaryBg`,r(Jg,o?p(`palette-secondary-main`):t.secondary.main,.62)),X(t.LinearProgress,`errorBg`,r(Jg,o?p(`palette-error-main`):t.error.main,.62)),X(t.LinearProgress,`infoBg`,r(Jg,o?p(`palette-info-main`):t.info.main,.62)),X(t.LinearProgress,`successBg`,r(Jg,o?p(`palette-success-main`):t.success.main,.62)),X(t.LinearProgress,`warningBg`,r(Jg,o?p(`palette-warning-light`):t.warning.main,.62)),X(t.Skeleton,`bg`,b?r(Wg,o?p(`palette-text-primary`):t.text.primary,.11):`rgba(${n(`palette-text-primaryChannel`)} / 0.11)`),X(t.Slider,`primaryTrack`,r(Jg,o?p(`palette-primary-main`):t.primary.main,.62)),X(t.Slider,`secondaryTrack`,r(Jg,o?p(`palette-secondary-main`):t.secondary.main,.62)),X(t.Slider,`errorTrack`,r(Jg,o?p(`palette-error-main`):t.error.main,.62)),X(t.Slider,`infoTrack`,r(Jg,o?p(`palette-info-main`):t.info.main,.62)),X(t.Slider,`successTrack`,r(Jg,o?p(`palette-success-main`):t.success.main,.62)),X(t.Slider,`warningTrack`,r(Jg,o?p(`palette-warning-main`):t.warning.main,.62));let e=b?r(Kg,o?p(`palette-background-default`):t.background.default,.6825):Xg(t.background.default,.8);X(t.SnackbarContent,`bg`,e),X(t.SnackbarContent,`color`,gv(()=>b?b_.text.primary:t.getContrastText(e))),X(t.SpeedDialAction,`fabHoverBg`,Xg(t.background.paper,.15)),X(t.StepConnector,`border`,n(`palette-grey-400`)),X(t.StepContent,`border`,n(`palette-grey-400`)),X(t.Switch,`defaultColor`,n(`palette-common-white`)),X(t.Switch,`defaultDisabledColor`,n(`palette-grey-100`)),X(t.Switch,`primaryDisabledColor`,r(Jg,o?p(`palette-primary-main`):t.primary.main,.62)),X(t.Switch,`secondaryDisabledColor`,r(Jg,o?p(`palette-secondary-main`):t.secondary.main,.62)),X(t.Switch,`errorDisabledColor`,r(Jg,o?p(`palette-error-main`):t.error.main,.62)),X(t.Switch,`infoDisabledColor`,r(Jg,o?p(`palette-info-main`):t.info.main,.62)),X(t.Switch,`successDisabledColor`,r(Jg,o?p(`palette-success-main`):t.success.main,.62)),X(t.Switch,`warningDisabledColor`,r(Jg,o?p(`palette-warning-main`):t.warning.main,.62)),X(t.TableCell,`border`,r(Jg,Wg(o?p(`palette-divider`):t.divider,1),.88)),X(t.Tooltip,`bg`,r(Wg,o?p(`palette-grey-700`):t.grey[700],.92))}if(t.mode===`dark`){X(t.Alert,`errorColor`,r(Jg,o?p(`palette-error-light`):t.error.light,.6)),X(t.Alert,`infoColor`,r(Jg,o?p(`palette-info-light`):t.info.light,.6)),X(t.Alert,`successColor`,r(Jg,o?p(`palette-success-light`):t.success.light,.6)),X(t.Alert,`warningColor`,r(Jg,o?p(`palette-warning-light`):t.warning.light,.6)),X(t.Alert,`errorFilledBg`,n(`palette-error-dark`)),X(t.Alert,`infoFilledBg`,n(`palette-info-dark`)),X(t.Alert,`successFilledBg`,n(`palette-success-dark`)),X(t.Alert,`warningFilledBg`,n(`palette-warning-dark`)),X(t.Alert,`errorFilledColor`,gv(()=>t.getContrastText(t.error.dark))),X(t.Alert,`infoFilledColor`,gv(()=>t.getContrastText(t.info.dark))),X(t.Alert,`successFilledColor`,gv(()=>t.getContrastText(t.success.dark))),X(t.Alert,`warningFilledColor`,gv(()=>t.getContrastText(t.warning.dark))),X(t.Alert,`errorStandardBg`,r(Kg,o?p(`palette-error-light`):t.error.light,.9)),X(t.Alert,`infoStandardBg`,r(Kg,o?p(`palette-info-light`):t.info.light,.9)),X(t.Alert,`successStandardBg`,r(Kg,o?p(`palette-success-light`):t.success.light,.9)),X(t.Alert,`warningStandardBg`,r(Kg,o?p(`palette-warning-light`):t.warning.light,.9)),X(t.Alert,`errorIconColor`,n(`palette-error-main`)),X(t.Alert,`infoIconColor`,n(`palette-info-main`)),X(t.Alert,`successIconColor`,n(`palette-success-main`)),X(t.Alert,`warningIconColor`,n(`palette-warning-main`)),X(t.AppBar,`defaultBg`,n(`palette-grey-900`)),X(t.AppBar,`darkBg`,n(`palette-background-paper`)),X(t.AppBar,`darkColor`,n(`palette-text-primary`)),X(t.Avatar,`defaultBg`,n(`palette-grey-600`)),X(t.Button,`inheritContainedBg`,n(`palette-grey-800`)),X(t.Button,`inheritContainedHoverBg`,n(`palette-grey-700`)),X(t.Chip,`defaultBorder`,n(`palette-grey-700`)),X(t.Chip,`defaultAvatarColor`,n(`palette-grey-300`)),X(t.Chip,`defaultIconColor`,n(`palette-grey-300`)),X(t.FilledInput,`bg`,`rgba(255, 255, 255, 0.09)`),X(t.FilledInput,`hoverBg`,`rgba(255, 255, 255, 0.13)`),X(t.FilledInput,`disabledBg`,`rgba(255, 255, 255, 0.12)`),X(t.LinearProgress,`primaryBg`,r(Kg,o?p(`palette-primary-main`):t.primary.main,.5)),X(t.LinearProgress,`secondaryBg`,r(Kg,o?p(`palette-secondary-main`):t.secondary.main,.5)),X(t.LinearProgress,`errorBg`,r(Kg,o?p(`palette-error-main`):t.error.main,.5)),X(t.LinearProgress,`infoBg`,r(Kg,o?p(`palette-info-main`):t.info.main,.5)),X(t.LinearProgress,`successBg`,r(Kg,o?p(`palette-success-main`):t.success.main,.5)),X(t.LinearProgress,`warningBg`,r(Kg,o?p(`palette-warning-main`):t.warning.main,.5)),X(t.Skeleton,`bg`,b?r(Wg,o?p(`palette-text-primary`):t.text.primary,.13):`rgba(${n(`palette-text-primaryChannel`)} / 0.13)`),X(t.Slider,`primaryTrack`,r(Kg,o?p(`palette-primary-main`):t.primary.main,.5)),X(t.Slider,`secondaryTrack`,r(Kg,o?p(`palette-secondary-main`):t.secondary.main,.5)),X(t.Slider,`errorTrack`,r(Kg,o?p(`palette-error-main`):t.error.main,.5)),X(t.Slider,`infoTrack`,r(Kg,o?p(`palette-info-main`):t.info.main,.5)),X(t.Slider,`successTrack`,r(Kg,o?p(`palette-success-main`):t.success.main,.5)),X(t.Slider,`warningTrack`,r(Kg,o?p(`palette-warning-light`):t.warning.main,.5));let e=b?r(Jg,o?p(`palette-background-default`):t.background.default,.985):Xg(t.background.default,.98);X(t.SnackbarContent,`bg`,e),X(t.SnackbarContent,`color`,gv(()=>b?v_.text.primary:t.getContrastText(e))),X(t.SpeedDialAction,`fabHoverBg`,Xg(t.background.paper,.15)),X(t.StepConnector,`border`,n(`palette-grey-600`)),X(t.StepContent,`border`,n(`palette-grey-600`)),X(t.Switch,`defaultColor`,n(`palette-grey-300`)),X(t.Switch,`defaultDisabledColor`,n(`palette-grey-600`)),X(t.Switch,`primaryDisabledColor`,r(Kg,o?p(`palette-primary-main`):t.primary.main,.55)),X(t.Switch,`secondaryDisabledColor`,r(Kg,o?p(`palette-secondary-main`):t.secondary.main,.55)),X(t.Switch,`errorDisabledColor`,r(Kg,o?p(`palette-error-main`):t.error.main,.55)),X(t.Switch,`infoDisabledColor`,r(Kg,o?p(`palette-info-main`):t.info.main,.55)),X(t.Switch,`successDisabledColor`,r(Kg,o?p(`palette-success-main`):t.success.main,.55)),X(t.Switch,`warningDisabledColor`,r(Kg,o?p(`palette-warning-light`):t.warning.main,.55)),X(t.TableCell,`border`,r(Kg,Wg(o?p(`palette-divider`):t.divider,1),.68)),X(t.Tooltip,`bg`,r(Wg,o?p(`palette-grey-700`):t.grey[700],.92))}o||(mv(t.background,`default`),mv(t.background,`paper`),mv(t.common,`background`),mv(t.common,`onBackground`),mv(t,`divider`)),Object.keys(t).forEach(e=>{let n=t[e];e!==`tonalOffset`&&!o&&n&&typeof n==`object`&&(n.main&&X(t[e],`mainChannel`,Rg(pv(n.main))),n.light&&X(t[e],`lightChannel`,Rg(pv(n.light))),n.dark&&X(t[e],`darkChannel`,Rg(pv(n.dark))),n.contrastText&&X(t[e],`contrastTextChannel`,Rg(pv(n.contrastText))),e===`text`&&(mv(t[e],`primary`),mv(t[e],`secondary`)),e===`action`&&(n.active&&mv(t[e],`active`),n.selected&&mv(t[e],`selected`)))})}),S=t.reduce((e,t)=>Dm(e,t),S);let C={prefix:a,disableCssColorScheme:i,shouldSkipGeneratingVar:s,getSelector:dv(S),enableContrastVars:o},{vars:w,generateThemeVars:T,generateStyleSheets:E}=m_(S,C);return S.vars=w,Object.entries(S.colorSchemes[S.defaultColorScheme]).forEach(([e,t])=>{S[e]=t}),S.generateThemeVars=T,S.generateStyleSheets=E,S.generateSpacing=function(){return wh(u.spacing,gh(this))},S.getColorSchemeSelector=h_(c),S.spacing=S.generateSpacing(),S.shouldSkipGeneratingVar=s,S.unstable_sxConfig={...$h,...u?.unstable_sxConfig},S.unstable_sx=function(e){return ng({sx:e,theme:this})},S.internal_cache={},S.toRuntimeSource=$_,S}function bv(e,t,n){e.colorSchemes&&n&&(e.colorSchemes[t]={...n!==!0&&n,palette:A_({...n===!0?{}:n.palette,mode:t})})}function xv(e={},...t){let{palette:n,cssVariables:r=!1,colorSchemes:i=n?void 0:{light:!0},defaultColorScheme:a=n?.mode,...o}=e,s=a||`light`,c=i?.[s],l={...i,...n?{[s]:{...typeof c!=`boolean`&&c,palette:n}}:void 0};if(r===!1){if(!(`colorSchemes`in e))return rv(e,...t);let r=n;`palette`in e||l[s]&&(l[s]===!0?s===`dark`&&(r={mode:`dark`}):r=l[s].palette);let i=rv({...e,palette:r},...t);return i.defaultColorScheme=s,i.colorSchemes=l,i.palette.mode===`light`&&(i.colorSchemes.light={...l.light!==!0&&l.light,palette:i.palette},bv(i,`dark`,l.dark)),i.palette.mode===`dark`&&(i.colorSchemes.dark={...l.dark!==!0&&l.dark,palette:i.palette},bv(i,`light`,l.light)),i}return!n&&!(`light`in l)&&s===`light`&&(l.light=!0),yv({...o,colorSchemes:l,defaultColorScheme:s,...typeof r!=`boolean`&&r},...t)}function Sv(e){return typeof e==`string`}function Cv(e,t=166){let n;function r(...r){clearTimeout(n),n=setTimeout(()=>{e.apply(this,r)},t)}return r.clear=()=>{clearTimeout(n)},r}function wv(...e){let t=v.useRef(void 0),n=v.useCallback(t=>{let n=e.map(e=>{if(e==null)return null;if(typeof e==`function`){let n=e,r=n(t);return typeof r==`function`?r:()=>{n(null)}}return e.current=t,()=>{e.current=null}});return()=>{n.forEach(e=>e?.())}},e);return v.useMemo(()=>e.every(e=>e==null)?null:e=>{t.current&&=(t.current(),void 0),e!=null&&(t.current=n(e))},e)}function Tv(e){let t=v.useRef(e);return Mg(()=>{t.current=e}),v.useRef((...e)=>(0,t.current)(...e)).current}function Ev(e){return e&&e.ownerDocument||document}function Dv(e){return Ev(e).defaultView||window}function Ov(e){return parseInt(e,10)||0}var kv={shadow:{visibility:`hidden`,position:`absolute`,overflow:`hidden`,height:0,top:0,left:0,transform:`translateZ(0)`}};function Av(e){for(let t in e)return!1;return!0}function jv(e){return Av(e)||e.outerHeightStyle===0&&!e.overflowing}var Mv=v.forwardRef(function(e,t){let{onChange:n,maxRows:r,minRows:i=1,style:a,value:o,...s}=e,{current:c}=v.useRef(o!=null),l=v.useRef(null),u=wv(t,l),d=v.useRef(null),f=v.useRef(null),p=v.useCallback(()=>{let t=l.current,n=f.current;if(!t||!n)return;let a=Dv(t).getComputedStyle(t);if(a.width===`0px`)return{outerHeightStyle:0,overflowing:!1};n.style.width=a.width,n.value=t.value||e.placeholder||`x`,n.value.slice(-1)===`
`&&(n.value+=` `);let o=a.boxSizing,s=Ov(a.paddingBottom)+Ov(a.paddingTop),c=Ov(a.borderBottomWidth)+Ov(a.borderTopWidth),u=n.scrollHeight;n.value=`x`;let d=n.scrollHeight,p=u;return i&&(p=Math.max(Number(i)*d,p)),r&&(p=Math.min(Number(r)*d,p)),p=Math.max(p,d),{outerHeightStyle:p+(o===`border-box`?s+c:0),overflowing:Math.abs(p-u)<=1}},[r,i,e.placeholder]),m=Tv(()=>{let e=l.current,t=p();if(!e||!t||jv(t))return!1;let n=t.outerHeightStyle;return d.current!=null&&d.current!==n}),h=v.useCallback(()=>{let e=l.current,t=p();if(!e||!t||jv(t))return;let n=t.outerHeightStyle;d.current!==n&&(d.current=n,e.style.height=`${n}px`),e.style.overflow=t.overflowing?`hidden`:``},[p]),g=v.useRef(-1);return Mg(()=>{let e=Cv(h),t=l?.current;if(!t)return;let n=Dv(t);n.addEventListener(`resize`,e);let r;return typeof ResizeObserver<`u`&&(r=new ResizeObserver(()=>{m()&&(r.unobserve(t),cancelAnimationFrame(g.current),h(),g.current=requestAnimationFrame(()=>{r.observe(t)}))}),r.observe(t)),()=>{e.clear(),cancelAnimationFrame(g.current),n.removeEventListener(`resize`,e),r&&r.disconnect()}},[p,h,m]),Mg(()=>{h()}),(0,J.jsxs)(v.Fragment,{children:[(0,J.jsx)(`textarea`,{value:o,onChange:e=>{c||h();let t=e.target,r=t.value.length,i=t.value.endsWith(`
`),a=t.selectionStart===r;i&&a&&t.setSelectionRange(r,r),n&&n(e)},ref:u,rows:i,style:a,...s}),(0,J.jsx)(`textarea`,{"aria-hidden":!0,className:e.className,readOnly:!0,ref:f,tabIndex:-1,style:{...kv.shadow,...a,paddingTop:0,paddingBottom:0}})]})}),Nv=v.createContext(void 0);function Pv({props:e,states:t}){let n=v.useContext(Nv),r={};return t.forEach(t=>{let i=e[t];r[t]=i===void 0&&n?n[t]:i}),[r,n]}var Fv=xv();function Iv(){let e=ug(Fv);return e.$$material||e}function Lv(e){return(0,J.jsx)(fg,{...e,defaultTheme:Fv,themeId:df})}function Rv(e){return e!==`ownerState`&&e!==`theme`&&e!==`sx`&&e!==`as`}var zv=e=>Rv(e)&&e!==`classes`,Z=Og({themeId:df,defaultTheme:Fv,rootShouldForwardProp:zv});function Bv(e){return function(t){return(0,J.jsx)(Lv,{styles:typeof e==`function`?n=>e({theme:n,...t}):e})}}var Vv=s_;function Hv(e){return t_(e)}var Uv=rh,Wv=wv,Gv=Mg,Kv=Ev;function qv(e){let t=e.activeElement;for(;t?.shadowRoot?.activeElement!=null;)t=t.shadowRoot.activeElement;return t}var Jv=qv;function Yv(e){return e!=null&&!(Array.isArray(e)&&e.length===0)}function Xv(e,t=!1){return e&&(Yv(e.value)&&e.value!==``||t&&Yv(e.defaultValue)&&e.defaultValue!==``)}function Zv(e){return vg(`MuiInputBase`,e)}var Qv=yg(`MuiInputBase`,[`root`,`formControl`,`focused`,`disabled`,`adornedStart`,`adornedEnd`,`error`,`sizeSmall`,`multiline`,`colorSecondary`,`fullWidth`,`hiddenLabel`,`readOnly`,`input`,`inputTypeSearch`]),$v={transition:`none`};function ey(e,t){return e===`always`?t:e===`system`?{"@media (prefers-reduced-motion: reduce)":t}:null}var ty=e=>e.scrollTop,ny={offsetX:0,offsetY:0},ry={},iy=[`all`],ay={},oy={matrix:[4,5],matrix3d:[12,13],translate:[0,1],translate3d:[0,1],translateX:[0,null],translateY:[null,0]};function sy(e){let t=parseFloat(e??``);return Number.isNaN(t)?0:t}function cy(e){let t=e.match(/^(matrix|matrix3d|translate|translate3d|translateX|translateY)\((.+)\)$/);return t?{type:t[1],values:t[2].split(`,`).map(sy)}:null}function ly(e,t){return t===null?0:e[t]||0}function uy(e){if(!e||e===`none`)return ny;let t=cy(e);if(!t)return ny;let{type:n,values:r}=t,i=oy[n];return i?{offsetX:ly(r,i[0]),offsetY:ly(r,i[1])}:ny}function dy(e,t){return n=>{if(t){let r=e.current;n===void 0?t(r):t(r,n)}}}function fy(e,t,n,r,i,a){let o=e===`exited`&&!t?r:n[e]||n.exited;return i||a?{...o,...i,...a}:o}function py(e,t){let{timeout:n,easing:r,style:i=ry}=e;return{duration:i.transitionDuration??(typeof n==`number`?n:n[t.mode]||0),easing:i.transitionTimingFunction??(typeof r==`object`?r[t.mode]:r),delay:i.transitionDelay}}function my(e,t){let n=t??$v;return ey(e.motion?.reducedMotion,n)}function hy(e,t=iy,n=ay){let r=e.transitions?.create?.(t,n),i=my(e);if(r===void 0)return i??ry;let a={transition:r};return i?{...a,...i}:a}var gy,_y=`mui-auto-fill`,vy=`mui-auto-fill-cancel`,yy=(e,t)=>{let{ownerState:n}=e;return[t.root,n.formControl&&t.formControl,n.startAdornment&&t.adornedStart,n.endAdornment&&t.adornedEnd,n.error&&t.error,n.size===`small`&&t.sizeSmall,n.multiline&&t.multiline,n.color&&t[`color${Uv(n.color)}`],n.fullWidth&&t.fullWidth,n.hiddenLabel&&t.hiddenLabel]},by=(e,t)=>{let{ownerState:n}=e;return[t.input,n.type===`search`&&t.inputTypeSearch]},xy=e=>{let{classes:t,color:n,disabled:r,error:i,endAdornment:a,focused:o,formControl:s,fullWidth:c,hiddenLabel:l,multiline:u,readOnly:d,size:f,startAdornment:p,type:m}=e;return g_({root:[`root`,`color${Uv(n)}`,r&&`disabled`,i&&`error`,c&&`fullWidth`,o&&`focused`,s&&`formControl`,f&&f!==`medium`&&`size${Uv(f)}`,u&&`multiline`,p&&`adornedStart`,a&&`adornedEnd`,l&&`hiddenLabel`,d&&`readOnly`],input:[`input`,r&&`disabled`,m===`search`&&`inputTypeSearch`,d&&`readOnly`]},Zv,t)},Sy=Z(`div`,{name:`MuiInputBase`,slot:`Root`,overridesResolver:yy})(Vv(({theme:e})=>({...e.typography.body1,color:(e.vars||e).palette.text.primary,lineHeight:`1.4375em`,boxSizing:`border-box`,position:`relative`,cursor:`text`,display:`inline-flex`,alignItems:`center`,[`&.${Qv.disabled}`]:{color:(e.vars||e).palette.text.disabled,cursor:`default`},variants:[{props:({ownerState:e})=>e.multiline,style:{padding:`4px 0 5px`}},{props:({ownerState:e,size:t})=>e.multiline&&t===`small`,style:{paddingTop:1}},{props:({ownerState:e})=>e.fullWidth,style:{width:`100%`}}]}))),Cy=Z(`input`,{name:`MuiInputBase`,slot:`Input`,overridesResolver:by})(Vv(({theme:e})=>{let t=e.palette.mode===`light`,n={color:`currentColor`,...e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:t?.42:.5},...hy(e,`opacity`,{duration:e.transitions.duration.shorter})},r={opacity:`0 !important`},i=e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:t?.42:.5};return{font:`inherit`,letterSpacing:`inherit`,color:`currentColor`,padding:`4px 0 5px`,border:0,boxSizing:`content-box`,background:`none`,height:`1.4375em`,margin:0,WebkitTapHighlightColor:`transparent`,display:`block`,minWidth:0,width:`100%`,"&::-webkit-input-placeholder":n,"&::-moz-placeholder":n,"&::-ms-input-placeholder":n,"&:focus":{outline:0},"&:invalid":{boxShadow:`none`},"&::-webkit-search-decoration":{WebkitAppearance:`none`},[`label[data-shrink=false] + .${Qv.formControl} &`]:{"&::-webkit-input-placeholder":r,"&::-moz-placeholder":r,"&::-ms-input-placeholder":r,"&:focus::-webkit-input-placeholder":i,"&:focus::-moz-placeholder":i,"&:focus::-ms-input-placeholder":i},[`&.${Qv.disabled}`]:{opacity:1,WebkitTextFillColor:(e.vars||e).palette.text.disabled},variants:[{props:({ownerState:e})=>!e.disableInjectingGlobalStyles,style:{animationName:vy,animationDuration:`10ms`,"&:-webkit-autofill":{animationDuration:`5000s`,animationName:_y}}},{props:{size:`small`},style:{paddingTop:1}},{props:({ownerState:e})=>e.multiline,style:{height:`auto`,resize:`none`,padding:0,paddingTop:0}},{props:{type:`search`},style:{MozAppearance:`textfield`}}]}})),wy=Bv({[`@keyframes ${_y}`]:{from:{animationName:_y}},[`@keyframes ${vy}`]:{from:{animationName:vy}}}),Ty=v.forwardRef(function(e,t){let n=Hv({props:e,name:`MuiInputBase`}),{"aria-describedby":r,"aria-label":i,autoComplete:a,autoFocus:o,className:s,color:c,defaultValue:l,disabled:u,disableInjectingGlobalStyles:d,endAdornment:f,error:p,fullWidth:m=!1,id:h,inputComponent:g=`input`,inputProps:_={},inputRef:y,margin:b,maxRows:x,minRows:S,multiline:C=!1,name:w,onBlur:T,onChange:E,onClick:D,onFocus:O,onKeyDown:ee,onKeyUp:k,placeholder:A,readOnly:j,renderSuffix:te,rows:M,size:ne,slotProps:N={},slots:P={},startAdornment:F,type:re=`text`,value:ie,...ae}=n,oe=_.value==null?ie:_.value,{current:I}=v.useRef(oe!=null),se=v.useRef(),ce=v.useCallback(e=>{},[]),le=Wv(se,y,_.ref,ce),[ue,de]=v.useState(!1),[fe,pe]=Pv({props:n,states:[`color`,`disabled`,`error`,`hiddenLabel`,`size`,`required`,`filled`]});fe.focused=pe?pe.focused:ue,v.useEffect(()=>{!pe&&u&&ue&&(de(!1),T&&T())},[pe,u,ue,T]);let me=pe&&pe.onFilled,he=pe&&pe.onEmpty,ge=v.useCallback(e=>{Xv(e)?me&&me():he&&he()},[me,he]);Gv(()=>{I&&ge({value:oe})},[oe,ge,I]),Gv(()=>{if(!o)return;let e=se.current;if(!e)return;let t=Kv(e),n=Jv(t),r=n==null||n===t.body||n===t.documentElement;e===n?pe&&pe.onFocus?pe.onFocus():de(!0):r&&e.focus()},[o]);let _e=e=>{O&&O(e),_.onFocus&&_.onFocus(e),pe&&pe.onFocus?pe.onFocus(e):de(!0)},ve=e=>{T&&T(e),_.onBlur&&_.onBlur(e),pe&&pe.onBlur?pe.onBlur(e):de(!1)},ye=(e,...t)=>{if(!I){let t=e.target||se.current;if(t==null)throw Error(uf(1));ge({value:t.value})}_.onChange&&_.onChange(e,...t),E&&E(e,...t)};v.useEffect(()=>{ge(se.current)},[]);let be=e=>{se.current&&e.currentTarget===e.target&&se.current.focus(),D&&D(e)},xe=g,Se=_;C&&xe===`input`&&(Se=M?{type:void 0,minRows:M,maxRows:M,...Se}:{type:void 0,maxRows:x,minRows:S,...Se},xe=Mv);let Ce=e=>{ge(e.animationName===vy?se.current:{value:`x`})};v.useEffect(()=>{pe&&pe.setAdornedStart(!!F)},[pe,F]);let we={...n,color:fe.color||`primary`,disabled:fe.disabled,endAdornment:f,error:fe.error,focused:fe.focused,formControl:pe,fullWidth:m,hiddenLabel:fe.hiddenLabel,multiline:C,size:fe.size,startAdornment:F,type:re},Te=xy(we),Ee=P.root||Sy,De=N.root||{},Oe=P.input||Cy;return Se={...Se,...N.input},(0,J.jsxs)(v.Fragment,{children:[!d&&typeof wy==`function`&&(gy||=(0,J.jsx)(wy,{})),(0,J.jsxs)(Ee,{...De,ref:t,onClick:be,...ae,...!Sv(Ee)&&{ownerState:{...we,...De.ownerState}},className:Y(Te.root,De.className,s,j&&`MuiInputBase-readOnly`),children:[F,(0,J.jsx)(Nv.Provider,{value:null,children:(0,J.jsx)(Oe,{"aria-invalid":fe.error,"aria-describedby":r,"aria-label":i,autoComplete:a,autoFocus:o,defaultValue:l,disabled:fe.disabled,id:h,onAnimationStart:Ce,name:w,placeholder:A,readOnly:j,required:fe.required,rows:M,value:oe,onKeyDown:ee,onKeyUp:k,type:re,...Se,...!Sv(Oe)&&{as:xe,ownerState:{...we,...Se.ownerState}},ref:le,className:Y(Te.input,Se.className,j&&`MuiInputBase-readOnly`),onBlur:ve,onChange:ye,onFocus:_e})}),f,te?te({...fe,startAdornment:F}):null]})]})}),Ey=yg(`MuiListItemButton`,[`root`,`focusVisible`,`dense`,`alignItemsFlexStart`,`disabled`,`divider`,`gutters`,`selected`]);function Dy(...e){return e.reduce((e,t)=>t==null?e:function(...n){e.apply(this,n),t.apply(this,n)},()=>{})}function Oy(e){return vg(`MuiSvgIcon`,e)}yg(`MuiSvgIcon`,[`root`,`colorPrimary`,`colorSecondary`,`colorAction`,`colorError`,`colorDisabled`,`fontSizeInherit`,`fontSizeSmall`,`fontSizeMedium`,`fontSizeLarge`]);var ky=e=>{let{color:t,fontSize:n,classes:r}=e;return g_({root:[`root`,t!==`inherit`&&`color${Uv(t)}`,`fontSize${Uv(n)}`]},Oy,r)},Ay=Z(`svg`,{name:`MuiSvgIcon`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,n.color!==`inherit`&&t[`color${Uv(n.color)}`],t[`fontSize${Uv(n.fontSize)}`]]}})(Vv(({theme:e})=>({userSelect:`none`,width:`1em`,height:`1em`,display:`inline-block`,flexShrink:0,...hy(e,`fill`,{duration:(e.vars??e).transitions?.duration?.shorter}),variants:[{props:e=>!e.hasSvgAsChild,style:{fill:`currentColor`}},{props:{fontSize:`inherit`},style:{fontSize:`inherit`}},{props:{fontSize:`small`},style:{fontSize:e.typography?.pxToRem?.(20)||`1.25rem`}},{props:{fontSize:`medium`},style:{fontSize:e.typography?.pxToRem?.(24)||`1.5rem`}},{props:{fontSize:`large`},style:{fontSize:e.typography?.pxToRem?.(35)||`2.1875rem`}},...Object.entries((e.vars??e).palette).filter(([,e])=>e&&e.main).map(([t])=>({props:{color:t},style:{color:(e.vars??e).palette?.[t]?.main}})),{props:{color:`action`},style:{color:(e.vars??e).palette?.action?.active}},{props:{color:`disabled`},style:{color:(e.vars??e).palette?.action?.disabled}},{props:{color:`inherit`},style:{color:void 0}}]}))),jy=v.forwardRef(function(e,t){let n=Hv({props:e,name:`MuiSvgIcon`}),{children:r,className:i,color:a=`inherit`,component:o=`svg`,fontSize:s=`medium`,htmlColor:c,inheritViewBox:l=!1,titleAccess:u,viewBox:d=`0 0 24 24`,...f}=n,p=v.isValidElement(r)&&r.type===`svg`,m={...n,color:a,component:o,fontSize:s,instanceFontSize:e.fontSize,inheritViewBox:l,viewBox:d,hasSvgAsChild:p},h={};l||(h.viewBox=d);let g=ky(m);return(0,J.jsxs)(Ay,{as:o,className:Y(g.root,i),focusable:`false`,color:c,"aria-hidden":!u||void 0,role:u?`img`:void 0,ref:t,...h,...f,...p&&r.props,ownerState:m,children:[p?r.props.children:r,u?(0,J.jsx)(`title`,{children:u}):null]})});jy.muiName=`SvgIcon`;function My(e,t){function n(t,n){return(0,J.jsx)(jy,{"data-testid":void 0,ref:n,...t,children:e})}return n.muiName=jy.muiName,v.memo(v.forwardRef(n))}var Ny=Cv,Py=Dv;function Fy(e,t){typeof e==`function`?e(t):e&&(e.current=t)}var Iy=a_,Ly=Tv;function Ry(e,t){let n=e.charCodeAt(2);return e[0]===`o`&&e[1]===`n`&&n>=65&&n<=90&&typeof t==`function`}function zy(e,t){if(!e)return t;function n(e,t){let n={};return Object.keys(t).forEach(r=>{Ry(r,t[r])&&typeof e[r]==`function`&&(n[r]=(...n)=>{e[r](...n),t[r](...n)})}),n}if(typeof e==`function`||typeof t==`function`)return r=>{let i=typeof t==`function`?t(r):t,a=typeof e==`function`?e({...r,...i}):e,o=Y(r?.className,i?.className,a?.className),s=n(a,i);return{...i,...a,...s,...!!o&&{className:o},...i?.style&&a?.style&&{style:{...i.style,...a.style}},...i?.sx&&a?.sx&&{sx:[...Array.isArray(i.sx)?i.sx:[i.sx],...Array.isArray(a.sx)?a.sx:[a.sx]]}}};let r=t,i=n(e,r),a=Y(r?.className,e?.className);return{...t,...e,...i,...!!a&&{className:a},...r?.style&&e?.style&&{style:{...r.style,...e.style}},...r?.sx&&e?.sx&&{sx:[...Array.isArray(r.sx)?r.sx:[r.sx],...Array.isArray(e.sx)?e.sx:[e.sx]]}}}var By={};function Vy(e,t){let n=v.useRef(By);return n.current===By&&(n.current=e(t)),n}function Hy(e){let t=Vy(()=>Uy(e)).current;return t.next=e,Mg(t.effect),t}function Uy(e){let t={current:e,next:e,effect:()=>{t.current=t.next}};return t}var Wy=v.createContext(null);function Gy(e){if(e==null)return{appear:void 0,enter:void 0,exit:void 0};if(typeof e==`number`)return{appear:e,enter:e,exit:e};let t=e.enter,n=e.exit;return{appear:e.appear===void 0?t:e.appear,enter:t,exit:n}}function Ky(e){if(e.autoTimeout!=null)return e.autoTimeout;let t=Gy(e.timeout);return e.currentStatus===`entering`?e.isAppearing?t.appear??t.enter??null:t.enter??null:t.exit??null}function qy(e){let{in:t=!1,appear:n=!1,enter:r=!0,exit:i=!0,mountOnEnter:a=!1,unmountOnExit:o=!1,timeout:s,addEndListener:c,reduceMotion:l=!1,getAutoTimeout:u,nodeRef:d,onEnter:f,onEntering:p,onEntered:m,onExit:h,onExiting:g,onExited:_,children:y,...b}=e,x=v.useContext(Wy),S=x&&!x.isMounting?r:n,[C,w]=v.useState(()=>t?S?`exited`:`entered`:a||o?`unmounted`:`exited`),T=v.useRef(C);T.current=C,t&&C===`unmounted`&&(T.current=`exited`,w(`exited`));let E=v.useRef(t&&S),D=v.useRef(!1),O=v.useRef(null),ee=v.useRef(C),k=v.useRef(!1),A=v.useRef(l),j=Hy({timeout:s,addEndListener:c,reduceMotion:l,getAutoTimeout:u,onEnter:f,onEntering:p,onEntered:m,onExit:h,onExiting:g,onExited:_,enter:r,exit:i,mountOnEnter:a,unmountOnExit:o,nodeRef:d,parentGroup:x}),te=v.useCallback(()=>{O.current!==null&&(O.current.cancel(),O.current=null)},[]),M=v.useCallback(e=>{let t=!0,n=()=>{t&&(t=!1,O.current=null,e())};return n.cancel=()=>{t=!1},O.current=n,n},[]),ne=v.useCallback((e,t)=>{let n,r=()=>{n!==void 0&&(clearTimeout(n),n=void 0)},i=M(()=>{r(),T.current=e,w(e)}),a=i.cancel;i.cancel=()=>{r(),a()};let o=j.current.nodeRef.current,s=j.current.addEndListener,c=j.current.getAutoTimeout!==void 0,l=j.current.getAutoTimeout?.(),u=Ky({currentStatus:t,isAppearing:k.current,timeout:j.current.timeout,autoTimeout:l}),d=A.current,f=u??(d&&c?0:null),p=e=>{n=setTimeout(i,e)};if(!o){p(0);return}if(s){f!=null&&p(d?0:f),s.length>=2?s(o,i):s(i);return}p(d?0:u??0)},[M,j]),N=v.useCallback(e=>{let t=j.current,n=t.parentGroup?t.parentGroup.isMounting:e;if(k.current=n,!e&&!t.enter){T.current=`entered`,w(`entered`);return}A.current=t.reduceMotion,t.onEnter?.(n),T.current=`entering`,w(`entering`)},[j]),P=v.useCallback(()=>{let e=j.current;if(!e.exit){T.current=`exited`,w(`exited`);return}A.current=e.reduceMotion,e.onExit?.(),T.current=`exiting`,w(`exiting`)},[j]),F=v.useCallback((e,t)=>{if(te(),t===`entering`){let t=j.current;if(t.mountOnEnter||t.unmountOnExit){let e=t.nodeRef.current;e&&ty(e)}N(e)}else P()},[te,N,P,j]);return Mg(()=>(D.current=!0,E.current&&(E.current=!1,F(!0,`entering`)),()=>{D.current=!1,te()}),[te,F]),Mg(()=>{if(!D.current)return;let e=T.current;t?e!==`entering`&&e!==`entered`&&F(!1,`entering`):e===`entering`||e===`entered`?F(!1,`exiting`):e===`exited`&&o&&(T.current=`unmounted`,w(`unmounted`))},[t,C,o,F]),Mg(()=>{if(C===`unmounted`||ee.current===`unmounted`){ee.current=C;return}let e=ee.current!==C;e&&(ee.current=C);let t=j.current;C===`entering`?(e&&t.onEntering?.(k.current),O.current===null&&T.current===C&&ne(`entered`,`entering`)):C===`exiting`?(e&&t.onExiting?.(),O.current===null&&T.current===C&&ne(`exited`,`exiting`)):C===`entered`&&e?t.onEntered?.(k.current):C===`exited`&&e&&t.onExited?.()},[j,ne,C]),C===`unmounted`?null:(0,J.jsx)(Wy.Provider,{value:null,children:y(C,b)})}var Jy=`(prefers-reduced-motion: reduce)`,Yy=0,Xy=`0ms`,Zy=()=>{},Qy=()=>!1,$y=()=>!0,eb=()=>Zy;function tb(e){let[t,n]=v.useState(()=>({enabled:e,matches:e?null:!1})),r=t.matches;return t.enabled!==e&&(r=null,e||(r=!1)),Mg(()=>{let r=t=>{n(n=>n.enabled===e&&n.matches===t?n:{enabled:e,matches:t})};if(!e){t.enabled&&r(!1);return}if(typeof window>`u`||typeof window.matchMedia!=`function`){r(!1);return}let i=window.matchMedia(Jy),a=()=>{r(i.matches)};return a(),i.addEventListener(`change`,a),()=>{i.removeEventListener(`change`,a)}},[e,t.enabled]),r}var nb={...v}.useSyncExternalStore;function rb(e){let t=e?$y:Qy,[n,r]=v.useMemo(()=>{if(!e||typeof window>`u`||typeof window.matchMedia!=`function`)return[Qy,eb];let t=window.matchMedia(Jy);return[()=>t.matches,e=>(t.addEventListener(`change`,e),()=>{t.removeEventListener(`change`,e)})]},[e]);return nb(r,n,t)}var ib=nb===void 0?tb:rb;function ab(e,t){let n=ib(!t&&e===`system`),r=!t&&(e===`always`||e===`system`&&n!==!1);return v.useMemo(()=>({shouldReduceMotion:r,getTransitionTiming(e){return r?{duration:Yy,delay:Xy}:e}}),[r])}function ob(e,t,n){return e===void 0||Sv(e)?t:{...t,ownerState:{...t.ownerState,...n}}}function sb(e,t,n){return typeof e==`function`?e(t,n):e}function cb(e){if(e===void 0)return{};let t={};for(let n of Object.keys(e))Ry(n,e[n])&&(t[n]=e[n]);return t}function lb(e){if(e===void 0)return{};let t={};return Object.keys(e).filter(t=>!(t.match(/^on[A-Z]/)&&typeof e[t]==`function`)).forEach(n=>{t[n]=e[n]}),t}function ub(e){let{getSlotProps:t,additionalProps:n,externalSlotProps:r,externalForwardedProps:i,className:a}=e;if(!t){let e=Y(n?.className,a,i?.className,r?.className),t={...n?.style,...i?.style,...r?.style},o={...n,...i,...r};return e.length>0&&(o.className=e),Object.keys(t).length>0&&(o.style=t),{props:o,internalRef:void 0}}let o=cb({...i,...r}),s=lb(r),c=lb(i),l=t(o),u=Y(l?.className,n?.className,a,i?.className,r?.className),d={...l?.style,...n?.style,...i?.style,...r?.style},f={...l,...n,...c,...s};return u.length>0&&(f.className=u),Object.keys(d).length>0&&(f.style=d),{props:f,internalRef:l.ref}}function db(e,t){let{className:n,elementType:r,ownerState:i,externalForwardedProps:a,internalForwardedProps:o,shouldForwardComponentProp:s=!1,...c}=t,{component:l,slots:u={[e]:void 0},slotProps:d={[e]:void 0},...f}=a,p=u[e]||r,m=sb(d[e],i),{props:{component:h,...g},internalRef:_}=ub({className:n,...c,externalForwardedProps:e===`root`?f:void 0,externalSlotProps:m}),v=wv(_,m?.ref,t.ref),y=e===`root`?h||l:h;return[p,ob(p,{...e===`root`&&!l&&!u[e]&&o,...e!==`root`&&!u[e]&&o,...g,...y&&!s&&{as:y},...y&&s&&{component:y},ref:v},i)]}function fb(e){return vg(`MuiPaper`,e)}yg(`MuiPaper`,`root.rounded.outlined.elevation.elevation0.elevation1.elevation2.elevation3.elevation4.elevation5.elevation6.elevation7.elevation8.elevation9.elevation10.elevation11.elevation12.elevation13.elevation14.elevation15.elevation16.elevation17.elevation18.elevation19.elevation20.elevation21.elevation22.elevation23.elevation24`.split(`.`));var pb=e=>{let{square:t,elevation:n,variant:r,classes:i}=e;return g_({root:[`root`,r,!t&&`rounded`,r===`elevation`&&`elevation${n}`]},fb,i)},mb=Z(`div`,{name:`MuiPaper`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,n.variant===`elevation`&&t[`elevation${n.elevation}`]]}})(Vv(({theme:e})=>({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,...hy(e,`box-shadow`),variants:[{props:({ownerState:e})=>!e.square,style:{borderRadius:e.shape.borderRadius}},{props:{variant:`outlined`},style:{border:`1px solid ${(e.vars||e).palette.divider}`}},{props:{variant:`elevation`},style:{boxShadow:`var(--Paper-shadow)`,backgroundImage:`var(--Paper-overlay)`}}]}))),hb=v.forwardRef(function(e,t){let n=Hv({props:e,name:`MuiPaper`}),r=Iv(),{className:i,component:a=`div`,elevation:o=1,square:s=!1,variant:c=`elevation`,...l}=n,u={...n,component:a,elevation:o,square:s,variant:c},d=pb(u);return(0,J.jsx)(mb,{as:a,ownerState:u,className:Y(d.root,i),ref:t,...l,style:{...c===`elevation`&&{"--Paper-shadow":(r.vars||r).shadows[o],...r.vars&&{"--Paper-overlay":r.vars.overlays?.[o]},...!r.vars&&r.palette.mode===`dark`&&{"--Paper-overlay":`linear-gradient(${Ug(`#fff`,iv(o))}, ${Ug(`#fff`,iv(o))})`}},...l.style}})});function gb(e){try{return e.matches(`:focus-visible`)}catch{}return!1}function _b(e){let{focusableWhenDisabled:t,disabled:n,composite:r=!1,tabIndex:i=0,isNativeButton:a}=e,o=r&&t!==!1,s=r&&t===!1;return v.useMemo(()=>{let e={onKeyDown(e){n&&t&&e.key!==`Tab`&&e.preventDefault()}};return r||(e.tabIndex=i,!a&&n&&(e.tabIndex=t?i:-1)),(a&&(t||o)||!a&&n)&&(e[`aria-disabled`]=n),a&&(!t||s)&&(e.disabled=n),e},[r,n,t,o,s,a,i])}var vb={};function yb(e){let{nativeButton:t,nativeButtonProp:n,internalNativeButton:r=t,allowInferredHostMismatch:i=!1,disabled:a,type:o,hasFormAction:s=!1,tabIndex:c=0,focusableWhenDisabled:l,stopEventPropagation:u=!1,onBeforeKeyDown:d,onBeforeKeyUp:f}=e,p=v.useRef(null),m=l===!0,h=_b({focusableWhenDisabled:m,disabled:a,isNativeButton:t,tabIndex:c}),g=v.useCallback(()=>{let e=p.current;return e==null?t:e.tagName===`BUTTON`||!!(e.tagName===`A`&&e.href)},[t]),_=v.useMemo(()=>{let e=m?{}:{tabIndex:a?-1:c};return t?(e.type=o===void 0&&!s?`button`:o,m||(e.disabled=a)):(e.role=`button`,!m&&a&&(e[`aria-disabled`]=a)),m?{...e,...h}:e},[a,m,h,s,t,c,o]);return{getButtonProps:v.useCallback((e=vb)=>{let{onClick:t,onKeyDown:n,onKeyUp:r,...i}=e,o=e=>{if(u&&e.stopPropagation(),a){e.preventDefault();return}t?.(e)},s=e=>{if(m&&h.onKeyDown(e),!a&&(d?.(e),n?.(e),!(e.target!==e.currentTarget||g()))){if(e.key===` `){e.preventDefault();return}e.key===`Enter`&&(e.preventDefault(),e.currentTarget.click())}},c=e=>{a||(f?.(e),r?.(e),e.target===e.currentTarget&&!g()&&e.key===` `&&!e.defaultPrevented&&e.currentTarget.click())};return{..._,...i,onClick:o,onKeyDown:s,onKeyUp:c}},[_,a,m,h,g,d,f,u]),rootRef:p}}var bb=class e{static create(){return new e}static use(){let t=Vy(e.create).current,[n,r]=v.useState(!1);return t.shouldMount=n,t.setShouldMount=r,v.useEffect(t.mountEffect,[n]),t}constructor(){this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}mount(){return this.mounted||(this.mounted=Sb(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}mountEffect=()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())};start(...e){this.mount().then(()=>this.ref.current?.start(...e))}stop(...e){this.mount().then(()=>this.ref.current?.stop(...e))}pulsate(...e){this.mount().then(()=>this.ref.current?.pulsate(...e))}};function xb(){return bb.use()}function Sb(){let e,t,n=new Promise((n,r)=>{e=n,t=r});return n.resolve=e,n.reject=t,n}var Cb=[];function wb(e){v.useEffect(e,Cb)}var Tb=class e{static create(){return new e}currentId=null;start(e,t){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,t()},e)}clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)};disposeEffect=()=>this.clear};function Eb(){let e=Vy(Tb.create).current;return wb(e.disposeEffect),e}function Db(e){let{className:t,classes:n,pulsate:r=!1,rippleX:i,rippleY:a,rippleSize:o,in:s,onExited:c,timeout:l}=e,[u,d]=v.useState(!1),f=Eb(),p=v.useRef(!1),m=v.useRef(c);m.current=c;let h=c!=null,g=Y(t,n.ripple,n.rippleVisible,r&&n.ripplePulsate),_={width:o,height:o,top:-(o/2)+a,left:-(o/2)+i},y=Y(n.child,u&&n.childLeaving,r&&n.childPulsate);return!s&&!u&&d(!0),v.useEffect(()=>{!s&&h?p.current||(p.current=!0,f.start(l,()=>{p.current=!1,m.current?.()})):(p.current=!1,f.clear())},[f,h,s,l]),(0,J.jsx)(`span`,{className:g,style:_,children:(0,J.jsx)(`span`,{className:y})})}var Ob=yg(`MuiTouchRipple`,[`root`,`ripple`,`rippleVisible`,`ripplePulsate`,`child`,`childLeaving`,`childPulsate`]),kb=550,Ab={},jb=[],Mb=()=>{};function Nb(e,t){let n=new Set(t),r=new Map,i=[];for(let t of e)n.has(t)?i.length>0&&(r.set(t,i),i=[]):i.push(t);let a=[];for(let e of t){let t=r.get(e);t&&a.push(...t),a.push(e)}return a.push(...i),a}function Pb({event:e,element:t,center:n}){let r=t?t.getBoundingClientRect():{width:0,height:0,left:0,top:0},i,a;if(n||e===void 0||e.clientX===0&&e.clientY===0||!e.clientX&&!e.touches)i=Math.round(r.width/2),a=Math.round(r.height/2);else{let{clientX:t,clientY:n}=e.touches&&e.touches.length>0?e.touches[0]:e;i=Math.round(t-r.left),a=Math.round(n-r.top)}let o;if(n)o=Math.sqrt((2*r.width**2+r.height**2)/3),o%2==0&&(o+=1);else{let e=Math.max(Math.abs((t?t.clientWidth:0)-i),i)*2+2,n=Math.max(Math.abs((t?t.clientHeight:0)-a),a)*2+2;o=Math.sqrt(e**2+n**2)}return{rippleX:i,rippleY:a,rippleSize:o}}var Fb=om`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,Ib=om`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,Lb=om`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`;function Rb(e){if(e.motion.reducedMotion===`always`)return null;let t=am`
    &.${Ob.rippleVisible} {
      animation-name: ${Fb};
      animation-duration: ${kb}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    &.${Ob.ripplePulsate} {
      animation-duration: ${e.transitions.duration.shorter}ms;
    }

    & .${Ob.childLeaving} {
      animation-name: ${Ib};
      animation-duration: ${kb}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    & .${Ob.childPulsate} {
      animation-name: ${Lb};
      animation-duration: 2500ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
      animation-iteration-count: infinite;
      animation-delay: 200ms;
    }
  `;return e.motion.reducedMotion===`system`?am`
      @media (prefers-reduced-motion: no-preference) {
        ${t}
      }
    `:t}var zb=Z(`span`,{name:`MuiTouchRipple`,slot:`Root`})({overflow:`hidden`,pointerEvents:`none`,position:`absolute`,zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:`inherit`}),Bb=Z(Db,{name:`MuiTouchRipple`,slot:`Ripple`})`
  opacity: 0;
  position: absolute;

  &.${Ob.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
  }

  /*
   * Order matters: 'child', 'childLeaving' and 'childPulsate' apply to the same
   * element with equal specificity, so the later rule wins. 'child' must come
   * before 'childLeaving' so the leaving 'opacity: 0' takes precedence. A focus
   * (pulsate) ripple keeps 'pulsateKeyframe' (no opacity animation) on exit, so
   * it relies on this static 'opacity: 0' to disappear on blur instead of
   * lingering until removal.
   */
  & .${Ob.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Ob.childLeaving} {
    opacity: 0;
  }

  & .${Ob.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
  }

  ${({theme:e})=>Rb(e)}
`,Vb=v.forwardRef(function(e,t){let n=Hv({props:e,name:`MuiTouchRipple`}),r=ab(Iv().motion.reducedMotion,!1),{center:i=!1,classes:a=Ab,className:o,...s}=n,[c,l]=v.useState({items:jb,order:jb}),u=c.items,d=v.useRef(0),f=v.useRef(null),p=v.useRef(!1);wb(()=>(p.current=!0,()=>{p.current=!1})),v.useEffect(()=>{f.current&&=(f.current(),null)},[u]);let m=v.useRef(!1),h=Eb(),g=v.useRef(null),_=v.useRef(null),y=Ly(e=>{p.current&&l(t=>{let n=t.items.filter(t=>t.key!==e);return{items:n,order:Nb(t.order.filter(t=>t!==e),n.filter(e=>!e.exiting).map(e=>e.key))}})}),b=Ly(e=>{let{pulsate:t,rippleX:n,rippleY:r,rippleSize:i,cb:a}=e,o=d.current;d.current+=1,l(e=>{let a=[...e.items,{key:o,pulsate:t,rippleX:n,rippleY:r,rippleSize:i,exiting:!1}];return{items:a,order:Nb(e.order,a.filter(e=>!e.exiting).map(e=>e.key))}}),f.current=a}),x=Ly((e=Ab,t=Ab,n=Mb)=>{let{pulsate:r=!1,center:a=i||t.pulsate,fakeElement:o=!1}=t;if(e?.type===`mousedown`&&m.current){m.current=!1;return}e?.type===`touchstart`&&(m.current=!0);let{rippleX:s,rippleY:c,rippleSize:l}=Pb({event:e,element:o?null:_.current,center:a});e?.touches?g.current===null&&(g.current=()=>{b({pulsate:r,rippleX:s,rippleY:c,rippleSize:l,cb:n})},h.start(80,()=>{g.current&&=(g.current(),null)})):b({pulsate:r,rippleX:s,rippleY:c,rippleSize:l,cb:n})}),S=Ly(()=>{x(Ab,{pulsate:!0})}),C=Ly((e,t)=>{if(h.clear(),e?.type===`touchend`&&g.current){g.current(),g.current=null,h.start(0,()=>{C(e,t)});return}g.current=null,l(e=>{let t=e.items.findIndex(e=>!e.exiting);if(t===-1)return e;let n=e.items.slice();return n[t]={...n[t],exiting:!0},{items:n,order:Nb(e.order,n.filter(e=>!e.exiting).map(e=>e.key))}}),f.current=t});v.useImperativeHandle(t,()=>({pulsate:S,start:x,stop:C}),[S,x,C]);let w=new Map(u.map(e=>[e.key,e])),T=c.order.map(e=>w.get(e)).filter(Boolean);return(0,J.jsx)(zb,{className:Y(Ob.root,a.root,o),ref:_,...s,children:T.map(e=>(0,J.jsx)(Bb,{classes:{ripple:Y(a.ripple,Ob.ripple),rippleVisible:Y(a.rippleVisible,Ob.rippleVisible),ripplePulsate:Y(a.ripplePulsate,Ob.ripplePulsate),child:Y(a.child,Ob.child),childLeaving:Y(a.childLeaving,Ob.childLeaving),childPulsate:Y(a.childPulsate,Ob.childPulsate)},timeout:r.shouldReduceMotion?0:kb,pulsate:e.pulsate,rippleX:e.rippleX,rippleY:e.rippleY,rippleSize:e.rippleSize,in:!e.exiting,onExited:()=>y(e.key)},e.key))})});function Hb(e){return vg(`MuiButtonBase`,e)}var Ub=yg(`MuiButtonBase`,[`root`,`disabled`,`focusVisible`]),Wb=e=>{let{disabled:t,focusVisible:n,focusVisibleClassName:r,suppressFocusVisible:i,classes:a}=e,o=g_({root:[`root`,t&&`disabled`,n&&!i&&`focusVisible`]},Hb,a);return n&&!i&&r&&(o.root+=` ${r}`),o},Gb=Z(`button`,{name:`MuiButtonBase`,slot:`Root`})({display:`inline-flex`,alignItems:`center`,justifyContent:`center`,position:`relative`,boxSizing:`border-box`,WebkitTapHighlightColor:`transparent`,backgroundColor:`transparent`,outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:`pointer`,userSelect:`none`,verticalAlign:`middle`,MozAppearance:`none`,WebkitAppearance:`none`,textDecoration:`none`,color:`inherit`,"&::-moz-focus-inner":{borderStyle:`none`},[`&.${Ub.disabled}`]:{pointerEvents:`none`,cursor:`default`},"@media print":{colorAdjust:`exact`}}),Kb=v.forwardRef(function(e,t){let n=Hv({props:e,name:`MuiButtonBase`}),{action:r,centerRipple:i=!1,children:a,className:o,component:s=`button`,disabled:c=!1,disableRipple:l=!1,disableTouchRipple:u=!1,focusRipple:d=!1,focusVisibleClassName:f,focusableWhenDisabled:p,suppressFocusVisible:m=!1,internalNativeButton:h,LinkComponent:g=`a`,nativeButton:_,onBlur:y,onClick:b,onContextMenu:x,onDragLeave:S,onFocus:C,onFocusVisible:w,onKeyDown:T,onKeyUp:E,onMouseDown:D,onMouseLeave:O,onMouseUp:ee,onTouchEnd:k,onTouchMove:A,onTouchStart:j,tabIndex:te=0,TouchRippleProps:M,touchRippleRef:ne,type:N,...P}=n,F=!!(P.href||P.to),re=!!P.formAction,ie=s;ie===`button`&&F&&(ie=g);let ae=typeof ie==`string`?ie===`button`:h??!1,oe=_??ae,I=xb(),se=Wv(I.ref,ne),[ce,le]=v.useState(!1);(c||m)&&ce&&le(!1);let ue=Ly(e=>{d&&!e.repeat&&ce&&e.key===` `&&I.stop(e,()=>{I.start(e)})}),de=Ly(e=>{d&&e.key===` `&&ce&&!e.defaultPrevented&&I.stop(e,()=>{I.pulsate(e)})}),{getButtonProps:fe,rootRef:pe}=yb({nativeButton:oe,nativeButtonProp:_,internalNativeButton:ae,allowInferredHostMismatch:F||typeof ie==`string`,disabled:c,type:N,hasFormAction:re,tabIndex:te,onBeforeKeyDown:ue,onBeforeKeyUp:de}),{onClick:me,onKeyDown:he,onKeyUp:ge,..._e}=fe({onClick:b,onKeyDown:T,onKeyUp:E});v.useImperativeHandle(r,()=>({focusVisible:()=>{le(!0),pe.current.focus()}}),[pe]);let ve=I.shouldMount&&!l&&!c;v.useEffect(()=>{ce&&d&&!l&&I.pulsate()},[l,d,ce,I]);let ye=qb(I,`start`,D,u),be=qb(I,`stop`,x,u),xe=qb(I,`stop`,S,u),Se=qb(I,`stop`,ee,u),Ce=qb(I,`stop`,e=>{ce&&e.preventDefault(),O&&O(e)},u),we=qb(I,`start`,j,u),Te=qb(I,`stop`,k,u),Ee=qb(I,`stop`,A,u),De=qb(I,`stop`,e=>{gb(e.target)||le(!1),y&&y(e)},!1),Oe=Ly(e=>{pe.current||=e.currentTarget,!m&&gb(e.target)&&(le(!0),w&&w(e)),C&&C(e)}),ke={};F&&(ke.tabIndex=c?-1:te,c&&(ke[`aria-disabled`]=c),ke.type=N);let Ae=Wv(t,pe),je={...n,centerRipple:i,component:s,disabled:c,disableRipple:l,disableTouchRipple:u,focusRipple:d,suppressFocusVisible:m,tabIndex:te,focusVisible:ce},Me=Wb(je);return(0,J.jsxs)(Gb,{as:ie,className:Y(Me.root,o),ownerState:je,onBlur:De,onClick:me,onContextMenu:be,onFocus:Oe,onKeyDown:he,onKeyUp:ge,onMouseDown:ye,onMouseLeave:Ce,onMouseUp:Se,onDragLeave:xe,onTouchEnd:Te,onTouchMove:Ee,onTouchStart:we,ref:Ae,...F?ke:_e,...P,children:[a,ve?(0,J.jsx)(Vb,{ref:se,center:i,...M}):null]})});function qb(e,t,n,r=!1){return Ly(i=>(n&&n(i),r||e[t](i),!0))}function Jb(e){return typeof e.main==`string`}function Yb(e,t=[]){if(!Jb(e))return!1;for(let n of t)if(!e.hasOwnProperty(n)||typeof e[n]!=`string`)return!1;return!0}function Xb(e=[]){return([,t])=>t&&Yb(t,e)}function Zb(e){return vg(`MuiCircularProgress`,e)}yg(`MuiCircularProgress`,[`root`,`determinate`,`indeterminate`,`colorPrimary`,`colorSecondary`,`svg`,`track`,`circle`,`circleDisableShrink`]);var Qb=44,$b=om`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,ex=om`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`,tx=typeof $b==`string`?null:am`
        animation: ${$b} 1.4s linear infinite;
      `,nx=typeof ex==`string`?null:am`
        animation: ${ex} 1.4s ease-in-out infinite;
      `,rx=e=>{let{classes:t,variant:n,color:r,disableShrink:i}=e;return g_({root:[`root`,n,`color${Uv(r)}`],svg:[`svg`],track:[`track`],circle:[`circle`,i&&`circleDisableShrink`]},Zb,t)},ix=Z(`span`,{name:`MuiCircularProgress`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],t[`color${Uv(n.color)}`]]}})(Vv(({theme:e})=>{let t=my(e,{animation:`none`});return{display:`inline-block`,variants:[{props:{variant:`determinate`},style:{...hy(e,`transform`)}},{props:{variant:`indeterminate`},style:tx||{animation:`${$b} 1.4s linear infinite`}},...t?[{props:{variant:`indeterminate`},style:t}]:[],...Object.entries(e.palette).filter(Xb()).map(([t])=>({props:{color:t},style:{color:(e.vars||e).palette[t].main}}))]}})),ax=Z(`svg`,{name:`MuiCircularProgress`,slot:`Svg`})({display:`block`}),ox=Z(`circle`,{name:`MuiCircularProgress`,slot:`Circle`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.circle,n.disableShrink&&t.circleDisableShrink]}})(Vv(({theme:e})=>{let t=my(e,{animation:`none`});return{stroke:`currentColor`,variants:[{props:{variant:`determinate`},style:{...hy(e,`stroke-dashoffset`)}},{props:{variant:`indeterminate`},style:{strokeDasharray:`80px, 200px`,strokeDashoffset:0}},{props:({ownerState:e})=>e.variant===`indeterminate`&&!e.disableShrink,style:nx||{animation:`${ex} 1.4s ease-in-out infinite`}},...t?[{props:({ownerState:e})=>e.variant===`indeterminate`&&!e.disableShrink,style:t}]:[]]}})),sx=Z(`circle`,{name:`MuiCircularProgress`,slot:`Track`})(Vv(({theme:e})=>({stroke:`currentColor`,opacity:(e.vars||e).palette.action.activatedOpacity}))),cx=v.forwardRef(function(e,t){let n=Hv({props:e,name:`MuiCircularProgress`}),{className:r,color:i=`primary`,disableShrink:a=!1,enableTrackSlot:o=!1,min:s,max:c,size:l=40,style:u,thickness:d=3.6,value:f=n.min??0,variant:p=`indeterminate`,...m}=n,h=s??0,g=c??100,_={...n,color:i,disableShrink:a,size:l,thickness:d,value:f,variant:p,enableTrackSlot:o},v=rx(_),y={},b={},x={};if(p===`determinate`){let e=2*Math.PI*((Qb-d)/2),t=g-h;y.strokeDasharray=e.toFixed(3),y.strokeDashoffset=t>0?`${((g-f)/t*e).toFixed(3)}px`:`${e.toFixed(3)}px`,b.transform=`rotate(-90deg)`,x[`aria-valuenow`]=f,x[`aria-valuemin`]=h,x[`aria-valuemax`]=g}return(0,J.jsx)(ix,{className:Y(v.root,r),style:{width:l,height:l,...b,...u},ownerState:_,ref:t,role:`progressbar`,...x,...m,children:(0,J.jsxs)(ax,{className:v.svg,ownerState:_,viewBox:`${Qb/2} ${Qb/2} ${Qb} ${Qb}`,children:[o?(0,J.jsx)(sx,{className:v.track,ownerState:_,cx:Qb,cy:Qb,r:(Qb-d)/2,fill:`none`,strokeWidth:d,"aria-hidden":`true`}):null,(0,J.jsx)(ox,{className:v.circle,style:y,ownerState:_,cx:Qb,cy:Qb,r:(Qb-d)/2,fill:`none`,strokeWidth:d})]})})});function lx(e){return vg(`MuiIconButton`,e)}var ux=yg(`MuiIconButton`,[`root`,`disabled`,`colorInherit`,`colorPrimary`,`colorSecondary`,`colorError`,`colorInfo`,`colorSuccess`,`colorWarning`,`edgeStart`,`edgeEnd`,`sizeSmall`,`sizeMedium`,`sizeLarge`,`loading`,`loadingIndicator`,`loadingWrapper`]),dx=e=>{let{classes:t,disabled:n,color:r,edge:i,size:a,loading:o}=e;return g_({root:[`root`,o&&`loading`,n&&`disabled`,r!=="default"&&`color${Uv(r)}`,i&&`edge${Uv(i)}`,`size${Uv(a)}`],loadingIndicator:[`loadingIndicator`],loadingWrapper:[`loadingWrapper`]},lx,t)},fx=Z(Kb,{name:`MuiIconButton`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,n.loading&&t.loading,n.color!=="default"&&t[`color${Uv(n.color)}`],n.edge&&t[`edge${Uv(n.edge)}`],t[`size${Uv(n.size)}`]]}})(Vv(({theme:e})=>({textAlign:`center`,flex:`0 0 auto`,fontSize:e.typography.pxToRem(24),padding:8,borderRadius:`50%`,color:(e.vars||e).palette.action.active,...hy(e,`background-color`,{duration:e.transitions.duration.shortest}),variants:[{props:e=>!e.disableRipple,style:{"--IconButton-hoverBg":e.alpha((e.vars||e).palette.action.active,(e.vars||e).palette.action.hoverOpacity),"&:hover":{backgroundColor:`var(--IconButton-hoverBg)`,"@media (hover: none)":{backgroundColor:`transparent`}}}},{props:{edge:`start`},style:{marginLeft:-12}},{props:{edge:`start`,size:`small`},style:{marginLeft:-3}},{props:{edge:`end`},style:{marginRight:-12}},{props:{edge:`end`,size:`small`},style:{marginRight:-3}}]})),Vv(({theme:e})=>({variants:[{props:{color:`inherit`},style:{color:`inherit`}},...Object.entries(e.palette).filter(Xb()).map(([t])=>({props:{color:t},style:{color:(e.vars||e).palette[t].main,"--IconButton-hoverBg":e.alpha((e.vars||e).palette[t].main,(e.vars||e).palette.action.hoverOpacity)}})),{props:{size:`small`},style:{padding:5,fontSize:e.typography.pxToRem(18)}},{props:{size:`large`},style:{padding:12,fontSize:e.typography.pxToRem(28)}}],[`&.${ux.disabled}`]:{backgroundColor:`transparent`,color:(e.vars||e).palette.action.disabled},[`&.${ux.loading}`]:{color:`transparent`}}))),px=Z(`span`,{name:`MuiIconButton`,slot:`LoadingIndicator`})(({theme:e})=>({display:`none`,position:`absolute`,visibility:`visible`,top:`50%`,left:`50%`,transform:`translate(-50%, -50%)`,color:(e.vars||e).palette.action.disabled,variants:[{props:{loading:!0},style:{display:`flex`}}]})),mx=v.forwardRef(function(e,t){let n=Hv({props:e,name:`MuiIconButton`}),{edge:r=!1,children:i,className:a,color:o=`default`,disabled:s=!1,disableFocusRipple:c=!1,size:l=`medium`,id:u,loading:d=null,loadingIndicator:f,...p}=n,m=Iy(u),h=f??(0,J.jsx)(cx,{"aria-labelledby":m,color:`inherit`,size:16}),g={...n,edge:r,color:o,disabled:s,disableFocusRipple:c,loading:d,loadingIndicator:h,size:l},_=dx(g);return(0,J.jsxs)(fx,{id:d?m:u,className:Y(_.root,a),centerRipple:!0,internalNativeButton:!0,focusRipple:!c,disabled:s||d,ref:t,...p,ownerState:g,children:[typeof d==`boolean`&&(0,J.jsx)(`span`,{className:_.loadingWrapper,style:{display:`contents`},children:(0,J.jsx)(px,{className:_.loadingIndicator,ownerState:g,children:d&&h})}),i]})});function hx(e){return vg(`MuiTypography`,e)}var gx=yg(`MuiTypography`,[`root`,`h1`,`h2`,`h3`,`h4`,`h5`,`h6`,`subtitle1`,`subtitle2`,`body1`,`body2`,`inherit`,`button`,`caption`,`overline`,`alignLeft`,`alignRight`,`alignCenter`,`alignJustify`,`noWrap`,`gutterBottom`]),_x=e=>{let{align:t,gutterBottom:n,noWrap:r,variant:i,classes:a}=e;return g_({root:[`root`,i,e.align!==`inherit`&&`align${Uv(t)}`,n&&`gutterBottom`,r&&`noWrap`]},hx,a)},vx=Z(`span`,{name:`MuiTypography`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,n.variant&&t[n.variant],n.align!==`inherit`&&t[`align${Uv(n.align)}`],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom]}})(Vv(({theme:e})=>({margin:0,variants:[{props:{variant:`inherit`},style:{font:`inherit`,lineHeight:`inherit`,letterSpacing:`inherit`}},...Object.entries(e.typography).filter(([e,t])=>e!==`inherit`&&t&&typeof t==`object`).map(([e,t])=>({props:{variant:e},style:t})),...Object.entries(e.palette).filter(Xb()).map(([t])=>({props:{color:t},style:{color:(e.vars||e).palette[t].main}})),...Object.entries(e.palette?.text||{}).filter(([,e])=>typeof e==`string`).map(([t])=>({props:{color:`text${Uv(t)}`},style:{color:(e.vars||e).palette.text[t]}})),{props:({ownerState:e})=>e.align!==`inherit`,style:{textAlign:`var(--Typography-textAlign)`}},{props:({ownerState:e})=>e.noWrap,style:{overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`}},{props:({ownerState:e})=>e.gutterBottom,style:{marginBottom:`0.35em`}}]}))),yx={h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,h5:`h5`,h6:`h6`,subtitle1:`h6`,subtitle2:`h6`,body1:`p`,body2:`p`,inherit:`p`},Q=v.forwardRef(function(e,t){let n=Hv({props:e,name:`MuiTypography`}),{color:r,align:i=`inherit`,className:a,component:o,gutterBottom:s=!1,noWrap:c=!1,variant:l=`body1`,variantMapping:u=yx,...d}=n,f={...n,align:i,color:r,className:a,component:o,gutterBottom:s,noWrap:c,variant:l,variantMapping:u},p=o||u[l]||yx[l]||`span`,m=_x(f);return(0,J.jsx)(vx,{as:p,ref:t,className:Y(m.root,a),...d,ownerState:f,style:{...i!==`inherit`&&{"--Typography-textAlign":i},...d.style}})});function bx(e,t){if(!e||!t)return!1;if(e.contains(t))return!0;let n=t.getRootNode?.();if(n&&n instanceof ShadowRoot){let n=t;for(;n;){if(e===n)return!0;n=n.parentNode??n.host??null}}return!1}function xx(e){return e?.props?.ref||null}var Sx=l(h(),1);function Cx(e){return typeof e==`function`?e():e}var wx=v.forwardRef(function(e,t){let{children:n,container:r,disablePortal:i=!1}=e,[a,o]=v.useState(null),s=wv(v.isValidElement(n)?xx(n):null,t);if(Mg(()=>{i||o(Cx(r)||document.body)},[r,i]),Mg(()=>{if(a&&!i)return Fy(t,a),()=>{Fy(t,null)}},[t,a,i]),i){if(v.isValidElement(n)){let e={ref:s};return v.cloneElement(n,e)}return n}return a&&Sx.createPortal(n,a)}),Tx={entering:{opacity:1},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0}},Ex={opacity:0,visibility:`hidden`},Dx=v.forwardRef(function(e,t){let n=Iv(),r={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:i,appear:a=!0,children:o,disablePrefersReducedMotion:s=!1,easing:c,in:l,onEnter:u,onEntered:d,onEntering:f,onExit:p,onExited:m,onExiting:h,style:g,timeout:_=r,...y}=e,b=ab(n.motion.reducedMotion,s),x=v.useRef(null),S=Wv(x,xx(o),t),C=dy(x,f),w=dy(x,(e,t)=>{b.shouldReduceMotion||ty(e);let r=py({style:g,timeout:_,easing:c},{mode:`enter`}),i=b.getTransitionTiming({duration:r.duration,delay:r.delay});e.style.transition=n.transitions.create(`opacity`,{duration:i.duration,easing:r.easing,delay:i.delay}),u&&u(e,t)}),T=dy(x,d),E=dy(x,h),D=dy(x,e=>{let t=py({style:g,timeout:_,easing:c},{mode:`exit`}),r=b.getTransitionTiming({duration:t.duration,delay:t.delay});e.style.transition=n.transitions.create(`opacity`,{duration:r.duration,easing:t.easing,delay:r.delay}),p&&p(e)}),O=dy(x,e=>{e.style.transition=``,m&&m(e)});return(0,J.jsx)(qy,{appear:a,in:l,nodeRef:x,onEnter:w,onEntered:T,onEntering:C,onExit:D,onExited:O,onExiting:E,addEndListener:i?e=>{i(x.current,e)}:void 0,reduceMotion:b.shouldReduceMotion,timeout:_,...y,children:(e,{ownerState:t,...n})=>{let r=fy(e,l,Tx,Ex,g,o.props.style);return v.cloneElement(o,{style:r,ref:S,...n})}})});function Ox(e){return vg(`MuiBackdrop`,e)}yg(`MuiBackdrop`,[`root`,`invisible`]);var kx=e=>{let{classes:t,invisible:n}=e;return g_({root:[`root`,n&&`invisible`]},Ox,t)},Ax=Z(`div`,{name:`MuiBackdrop`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})({position:`fixed`,display:`flex`,alignItems:`center`,justifyContent:`center`,right:0,bottom:0,top:0,left:0,backgroundColor:`rgba(0, 0, 0, 0.5)`,WebkitTapHighlightColor:`transparent`,variants:[{props:{invisible:!0},style:{backgroundColor:`transparent`}}]}),jx=v.forwardRef(function(e,t){let n=Hv({props:e,name:`MuiBackdrop`}),{children:r,className:i,component:a=`div`,invisible:o=!1,open:s,slotProps:c={},slots:l={},transitionDuration:u,...d}=n,f={...n,component:a,invisible:o},p=kx(f),m={component:a,slots:l,slotProps:c},[h,g]=db(`root`,{elementType:Ax,externalForwardedProps:m,className:Y(p.root,i),ownerState:f}),[_,v]=db(`transition`,{elementType:Dx,externalForwardedProps:m,ownerState:f});return(0,J.jsx)(_,{in:s,timeout:u,...d,...v,children:(0,J.jsx)(h,{...g,ref:t,children:r})})}),Mx=yg(`MuiBox`,[`root`]),$=gg({themeId:df,defaultTheme:xv(),defaultClassName:Mx.root,generateClassName:mg.generate});function Nx(e){return vg(`MuiButton`,e)}var Px=yg(`MuiButton`,`root.text.outlined.contained.disableElevation.focusVisible.disabled.colorInherit.colorPrimary.colorSecondary.colorSuccess.colorError.colorInfo.colorWarning.sizeMedium.sizeSmall.sizeLarge.fullWidth.startIcon.endIcon.icon.loading.loadingWrapper.loadingIconPlaceholder.loadingIndicator.loadingPositionCenter.loadingPositionStart.loadingPositionEnd`.split(`.`)),Fx=v.createContext({}),Ix=v.createContext(void 0),Lx=e=>{let{color:t,disableElevation:n,fullWidth:r,size:i,variant:a,loading:o,loadingPosition:s,classes:c}=e,l=g_({root:[`root`,o&&`loading`,a,`size${Uv(i)}`,`color${Uv(t)}`,n&&`disableElevation`,r&&`fullWidth`,o&&`loadingPosition${Uv(s)}`],startIcon:[`icon`,`startIcon`],endIcon:[`icon`,`endIcon`],loadingIndicator:[`loadingIndicator`],loadingWrapper:[`loadingWrapper`]},Nx,c);return{...c,...l}},Rx=[{props:{size:`small`},style:{"& > *:nth-of-type(1)":{fontSize:18}}},{props:{size:`medium`},style:{"& > *:nth-of-type(1)":{fontSize:20}}},{props:{size:`large`},style:{"& > *:nth-of-type(1)":{fontSize:22}}}],zx=Z(Kb,{shouldForwardProp:e=>zv(e)||e===`classes`,name:`MuiButton`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],t[`size${Uv(n.size)}`],n.color===`inherit`&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth,n.loading&&t.loading]}})(Vv(({theme:e})=>{let t=e.palette.mode===`light`?e.palette.grey[300]:e.palette.grey[800],n=e.palette.mode===`light`?e.palette.grey.A100:e.palette.grey[700];return{...e.typography.button,minWidth:64,padding:`6px 16px`,border:0,borderRadius:(e.vars||e).shape.borderRadius,...hy(e,[`background-color`,`box-shadow`,`border-color`,`color`],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:`none`},[`&.${Px.disabled}`]:{color:(e.vars||e).palette.action.disabled},variants:[{props:{variant:`contained`},style:{color:`var(--variant-containedColor)`,backgroundColor:`var(--variant-containedBg)`,boxShadow:(e.vars||e).shadows[2],"&:hover":{boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2]}},"&:active":{boxShadow:(e.vars||e).shadows[8]},[`&.${Px.focusVisible}`]:{boxShadow:(e.vars||e).shadows[6]},[`&.${Px.disabled}`]:{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground}}},{props:{variant:`outlined`},style:{padding:`5px 15px`,border:`1px solid currentColor`,borderColor:`var(--variant-outlinedBorder, currentColor)`,backgroundColor:`var(--variant-outlinedBg)`,color:`var(--variant-outlinedColor)`,[`&.${Px.disabled}`]:{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`}}},{props:{variant:`text`},style:{padding:`6px 8px`,color:`var(--variant-textColor)`,backgroundColor:`var(--variant-textBg)`}},...Object.entries(e.palette).filter(Xb()).map(([t])=>({props:{color:t},style:{"--variant-textColor":(e.vars||e).palette[t].main,"--variant-outlinedColor":(e.vars||e).palette[t].main,"--variant-outlinedBorder":e.alpha((e.vars||e).palette[t].main,.5),"--variant-containedColor":(e.vars||e).palette[t].contrastText,"--variant-containedBg":(e.vars||e).palette[t].main,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":(e.vars||e).palette[t].dark,"--variant-textBg":e.alpha((e.vars||e).palette[t].main,(e.vars||e).palette.action.hoverOpacity),"--variant-outlinedBorder":(e.vars||e).palette[t].main,"--variant-outlinedBg":e.alpha((e.vars||e).palette[t].main,(e.vars||e).palette.action.hoverOpacity)}}}})),{props:{color:`inherit`},style:{color:`inherit`,borderColor:`currentColor`,"--variant-containedBg":e.vars?e.vars.palette.Button.inheritContainedBg:t,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":e.vars?e.vars.palette.Button.inheritContainedHoverBg:n,"--variant-textBg":e.alpha((e.vars||e).palette.text.primary,(e.vars||e).palette.action.hoverOpacity),"--variant-outlinedBg":e.alpha((e.vars||e).palette.text.primary,(e.vars||e).palette.action.hoverOpacity)}}}},{props:{size:`small`,variant:`text`},style:{padding:`4px 5px`,fontSize:e.typography.pxToRem(13)}},{props:{size:`large`,variant:`text`},style:{padding:`8px 11px`,fontSize:e.typography.pxToRem(15)}},{props:{size:`small`,variant:`outlined`},style:{padding:`3px 9px`,fontSize:e.typography.pxToRem(13)}},{props:{size:`large`,variant:`outlined`},style:{padding:`7px 21px`,fontSize:e.typography.pxToRem(15)}},{props:{size:`small`,variant:`contained`},style:{padding:`4px 10px`,fontSize:e.typography.pxToRem(13)}},{props:{size:`large`,variant:`contained`},style:{padding:`8px 22px`,fontSize:e.typography.pxToRem(15)}},{props:{disableElevation:!0},style:{boxShadow:`none`,"&:hover":{boxShadow:`none`},[`&.${Px.focusVisible}`]:{boxShadow:`none`},"&:active":{boxShadow:`none`},[`&.${Px.disabled}`]:{boxShadow:`none`}}},{props:{fullWidth:!0},style:{width:`100%`}},{props:{loadingPosition:`center`},style:{...hy(e,[`background-color`,`box-shadow`,`border-color`],{duration:e.transitions.duration.short}),[`&.${Px.loading}`]:{color:`transparent`}}}]}})),Bx=Z(`span`,{name:`MuiButton`,slot:`StartIcon`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.startIcon,n.loading&&t.startIconLoadingStart]}})(({theme:e})=>({display:`inherit`,alignItems:`center`,marginRight:8,marginLeft:-4,"&::before":{content:`"\\200b"`,width:0,overflow:`hidden`},variants:[{props:{size:`small`},style:{marginLeft:-2}},{props:{loadingPosition:`start`,loading:!0},style:{...hy(e,[`opacity`],{duration:e.transitions.duration.short}),opacity:0}},{props:{loadingPosition:`start`,loading:!0,fullWidth:!0},style:{marginRight:-8}},...Rx]})),Vx=Z(`span`,{name:`MuiButton`,slot:`EndIcon`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.endIcon,n.loading&&t.endIconLoadingEnd]}})(({theme:e})=>({display:`inherit`,marginRight:-4,marginLeft:8,variants:[{props:{size:`small`},style:{marginRight:-2}},{props:{loadingPosition:`end`,loading:!0},style:{...hy(e,[`opacity`],{duration:e.transitions.duration.short}),opacity:0}},{props:{loadingPosition:`end`,loading:!0,fullWidth:!0},style:{marginLeft:-8}},...Rx]})),Hx=Z(`span`,{name:`MuiButton`,slot:`LoadingIndicator`})(({theme:e})=>({display:`none`,position:`absolute`,visibility:`visible`,variants:[{props:{loading:!0},style:{display:`flex`}},{props:{loadingPosition:`start`},style:{left:14}},{props:{loadingPosition:`start`,size:`small`},style:{left:10}},{props:{variant:`text`,loadingPosition:`start`},style:{left:6}},{props:{loadingPosition:`center`},style:{left:`50%`,transform:`translate(-50%)`,color:(e.vars||e).palette.action.disabled}},{props:{loadingPosition:`end`},style:{right:14}},{props:{loadingPosition:`end`,size:`small`},style:{right:10}},{props:{variant:`text`,loadingPosition:`end`},style:{right:6}},{props:{loadingPosition:`start`,fullWidth:!0},style:{position:`relative`,left:-10}},{props:{loadingPosition:`end`,fullWidth:!0},style:{position:`relative`,right:-10}}]})),Ux=Z(`span`,{name:`MuiButton`,slot:`LoadingIconPlaceholder`})({display:`inline-block`,width:`1em`,height:`1em`}),Wx=v.forwardRef(function(e,t){let n=v.useContext(Fx),r=v.useContext(Ix),i=Hv({props:jg(n,e),name:`MuiButton`}),{children:a,color:o=`primary`,component:s=`button`,className:c,disabled:l=!1,disableElevation:u=!1,disableFocusRipple:d=!1,endIcon:f,focusVisibleClassName:p,fullWidth:m=!1,id:h,loading:g=null,loadingIndicator:_,loadingPosition:y=`center`,size:b=`medium`,startIcon:x,type:S,variant:C=`text`,...w}=i,T=Iy(h),E=_??(0,J.jsx)(cx,{"aria-labelledby":T,color:`inherit`,size:16}),D={...i,color:o,component:s,disabled:l,disableElevation:u,disableFocusRipple:d,fullWidth:m,loading:g,loadingIndicator:E,loadingPosition:y,size:b,type:S,variant:C},O=Lx(D),ee=(x||g&&y===`start`)&&(0,J.jsx)(Bx,{className:O.startIcon,ownerState:D,children:x||(0,J.jsx)(Ux,{className:O.loadingIconPlaceholder,ownerState:D})}),k=(f||g&&y===`end`)&&(0,J.jsx)(Vx,{className:O.endIcon,ownerState:D,children:f||(0,J.jsx)(Ux,{className:O.loadingIconPlaceholder,ownerState:D})}),A=r||``,j=typeof g==`boolean`?(0,J.jsx)(`span`,{className:O.loadingWrapper,style:{display:`contents`},children:g&&(0,J.jsx)(Hx,{className:O.loadingIndicator,ownerState:D,children:E})}):null,{root:te,...M}=O;return(0,J.jsxs)(zx,{ownerState:D,className:Y(n.className,O.root,c,A),component:s,disabled:l||g,focusRipple:!d,focusVisibleClassName:Y(O.focusVisible,p),ref:t,internalNativeButton:!0,type:S,id:g?T:h,...w,classes:M,children:[ee,y!==`end`&&j,a,y===`end`&&j,k]})});function Gx(e){return e.substring(2).toLowerCase()}function Kx(e,t){return t.documentElement.clientWidth<e.clientX||t.documentElement.clientHeight<e.clientY}function qx(e){let{children:t,disableReactTree:n=!1,mouseEvent:r=`onClick`,onClickAway:i,touchEvent:a=`onTouchEnd`}=e,o=v.useRef(!1),s=v.useRef(null),c=v.useRef(!1),l=v.useRef(!1);v.useEffect(()=>(setTimeout(()=>{c.current=!0},0),()=>{c.current=!1}),[]);let u=wv(xx(t),s),d=Tv(e=>{let t=l.current;l.current=!1;let r=Ev(s.current);if(!c.current||!s.current||`clientX`in e&&Kx(e,r))return;if(o.current){o.current=!1;return}let a;a=e.composedPath?e.composedPath().includes(s.current):!bx(r.documentElement,e.target)||bx(s.current,e.target),!a&&(n||!t)&&i(e)}),f=e=>n=>{l.current=!0;let r=t.props[e];r&&r(n)},p={ref:u};return a!==!1&&(p[a]=f(a)),v.useEffect(()=>{if(a!==!1){let e=Gx(a),t=Ev(s.current),n=()=>{o.current=!0};return t.addEventListener(e,d),t.addEventListener(`touchmove`,n),()=>{t.removeEventListener(e,d),t.removeEventListener(`touchmove`,n)}}},[d,a]),r!==!1&&(p[r]=f(r)),v.useEffect(()=>{if(r!==!1){let e=Gx(r),t=Ev(s.current);return t.addEventListener(e,d),()=>{t.removeEventListener(e,d)}}},[d,r]),v.cloneElement(t,p)}var Jx=typeof Bv({})==`function`,Yx=(e,t)=>({WebkitFontSmoothing:`antialiased`,MozOsxFontSmoothing:`grayscale`,boxSizing:`border-box`,WebkitTextSizeAdjust:`100%`,...t&&!e.vars&&{colorScheme:e.palette.mode}}),Xx=e=>({color:(e.vars||e).palette.text.primary,...e.typography.body1,backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),Zx=(e,t=!1)=>{let n={};t&&e.colorSchemes&&typeof e.getColorSchemeSelector==`function`&&Object.entries(e.colorSchemes).forEach(([t,r])=>{let i=e.getColorSchemeSelector(t);i.startsWith(`@`)?n[i]={":root":{colorScheme:r.palette?.mode}}:n[i.replace(/\s*&/,``)]={colorScheme:r.palette?.mode}});let r={html:Yx(e,t),"*, *::before, *::after":{boxSizing:`inherit`},"strong, b":{fontWeight:e.typography.fontWeightBold},body:{margin:0,...Xx(e),"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}},...n},i=e.components?.MuiCssBaseline?.styleOverrides;return i&&(r=[r,i]),r},Qx=`mui-ecs`,$x=e=>{let t=Zx(e,!1),n=Array.isArray(t)?t[0]:t;return!e.vars&&n&&(n.html[`:root:has(${Qx})`]={colorScheme:e.palette.mode}),e.colorSchemes&&Object.entries(e.colorSchemes).forEach(([t,r])=>{let i=e.getColorSchemeSelector(t);i.startsWith(`@`)?n[i]={[`:root:not(:has(.${Qx}))`]:{colorScheme:r.palette?.mode}}:n[i.replace(/\s*&/,``)]={[`&:not(:has(.${Qx}))`]:{colorScheme:r.palette?.mode}}}),t},eS=Bv(Jx?({theme:e,enableColorScheme:t})=>Zx(e,t):({theme:e})=>$x(e));function tS(e){let{children:t,enableColorScheme:n=!1}=Hv({props:e,name:`MuiCssBaseline`});return(0,J.jsxs)(v.Fragment,{children:[Jx&&(0,J.jsx)(eS,{enableColorScheme:n}),!Jx&&!n&&(0,J.jsx)(`span`,{className:Qx,style:{display:`none`}}),t]})}function nS(e=window){let t=e.document.documentElement.clientWidth;return e.innerWidth-t}function rS(e){let t=Ev(e);return e===t.body||e===t.documentElement?Dv(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function iS(e,t){t?e.setAttribute(`aria-hidden`,`true`):e.removeAttribute(`aria-hidden`)}function aS(e){return parseFloat(Dv(e).getComputedStyle(e).paddingRight)||0}function oS(e){let t=[`TEMPLATE`,`SCRIPT`,`STYLE`,`LINK`,`MAP`,`META`,`NOSCRIPT`,`PICTURE`,`COL`,`COLGROUP`,`PARAM`,`SLOT`,`SOURCE`,`TRACK`].includes(e.tagName),n=e.tagName===`INPUT`&&e.getAttribute(`type`)===`hidden`;return t||n}function sS(e,t,n,r,i){let a=[t,n,...r];[].forEach.call(e.children,e=>{let t=!a.includes(e),n=!oS(e);t&&n&&iS(e,i)})}function cS(e,t){let n=[],r=e.container;if(!t.disableScrollLock){let e;if(r.parentNode instanceof DocumentFragment)e=Ev(r).body;else{let t=r.parentElement,n=Dv(r);e=t?.nodeName===`HTML`&&n.getComputedStyle(t).overflowY===`scroll`?t:r}if(rS(e)){let t=nS(Dv(e));n.push({value:e.style.paddingRight,property:`padding-right`,el:e}),e.style.paddingRight=`${aS(e)+t}px`;let i=Ev(r).querySelectorAll(`.mui-fixed`);[].forEach.call(i,e=>{n.push({value:e.style.paddingRight,property:`padding-right`,el:e}),e.style.paddingRight=`${aS(e)+t}px`})}n.push({value:e.style.overflow,property:`overflow`,el:e},{value:e.style.overflowX,property:`overflow-x`,el:e},{value:e.style.overflowY,property:`overflow-y`,el:e}),e.style.overflow=`hidden`}return()=>{n.forEach(({value:e,el:t,property:n})=>{e?t.style.setProperty(n,e):t.style.removeProperty(n)})}}function lS(e){let t=[];return[].forEach.call(e.children,e=>{e.getAttribute(`aria-hidden`)===`true`&&t.push(e)}),t}var uS=class{constructor(){this.modals=[],this.containers=[]}add(e,t){let n=this.modals.indexOf(e);if(n!==-1)return n;n=this.modals.length,this.modals.push(e),e.modalRef&&iS(e.modalRef,!1);let r=lS(t);sS(t,e.mount,e.modalRef,r,!0);let i=this.containers.findIndex(e=>e.container===t);return i===-1?(this.containers.push({modals:[e],container:t,restore:null,hiddenSiblings:r}),n):(this.containers[i].modals.push(e),n)}mount(e,t){let n=this.containers.findIndex(t=>t.modals.includes(e)),r=this.containers[n];r.restore||=cS(r,t)}remove(e,t=!0){let n=this.modals.indexOf(e);if(n===-1)return n;let r=this.containers.findIndex(t=>t.modals.includes(e)),i=this.containers[r];if(i.modals.splice(i.modals.indexOf(e),1),this.modals.splice(n,1),i.modals.length===0)i.restore&&i.restore(),e.modalRef&&iS(e.modalRef,t),sS(i.container,e.mount,e.modalRef,i.hiddenSiblings,!1),this.containers.splice(r,1);else{let e=i.modals[i.modals.length-1];e.modalRef&&iS(e.modalRef,!1)}return n}isTopModal(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}},dS=bx,fS=`data-mui-focusable`;function pS(e){return e?e.hasAttribute(`data-mui-focusable`)?e:e.querySelector(`[${fS}]`):null}var mS=[`input`,`select`,`textarea`,`a[href]`,`button`,`[tabindex]`,`audio[controls]`,`video[controls]`,`[contenteditable]:not([contenteditable="false"])`].join(`,`);function hS(e){let t=parseInt(e.getAttribute(`tabindex`)||``,10);return Number.isNaN(t)?e.contentEditable===`true`||(e.nodeName===`AUDIO`||e.nodeName===`VIDEO`||e.nodeName===`DETAILS`)&&e.getAttribute(`tabindex`)===null?0:e.tabIndex:t}function gS(e){if(e.tagName!==`INPUT`||e.type!==`radio`||!e.name)return!1;let t=t=>e.ownerDocument.querySelector(`input[type="radio"]${t}`),n=t(`[name="${e.name}"]:checked`);return n||=t(`[name="${e.name}"]`),n!==e}function _S(e){return!(e.disabled||e.tagName===`INPUT`&&e.type===`hidden`||gS(e))}function vS(e){let t=[],n=[];return Array.from(e.querySelectorAll(mS)).forEach((e,r)=>{let i=hS(e);i===-1||!_S(e)||(i===0?t.push(e):n.push({documentOrder:r,tabIndex:i,node:e}))}),n.sort((e,t)=>e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex).map(e=>e.node).concat(t)}function yS(){return!0}function bS(e){let{children:t,disableAutoFocus:n=!1,disableEnforceFocus:r=!1,disableRestoreFocus:i=!1,getTabbable:a=vS,isEnabled:o=yS,open:s}=e,c=v.useRef(!1),l=v.useRef(null),u=v.useRef(null),d=v.useRef(null),f=v.useRef(null),p=v.useRef(!1),m=v.useRef(null),h=wv(xx(t),m),g=v.useRef(null);v.useEffect(()=>{!s||!m.current||(p.current=!n)},[n,s]),v.useEffect(()=>{if(c.current=!1,!s||!m.current)return;let e=Jv(Ev(m.current)),t=pS(m.current)??m.current;return dS(m.current,e)||(t.hasAttribute(`tabIndex`)||t.setAttribute(`tabIndex`,`-1`),p.current&&t.focus()),()=>{!i&&d.current&&(c.current=!0,d.current.focus(),d.current=null)}},[s]),v.useEffect(()=>{if(!s||!m.current)return;let e=Ev(m.current),t=t=>{if(g.current=t,r||!o()||t.key!==`Tab`)return;let n=m.current,i=Jv(e);if(n===null)return;let s=pS(n);if(i===n||i===s){let e=a(n);if(e.length===0)return;t.preventDefault(),t.shiftKey?e[e.length-1].focus():e[0].focus();return}if(dS(n,i)){let e=a(n),r=e.indexOf(i);if(r===-1||!e.some(e=>hS(e)>0))return;t.preventDefault();let o=0;o=t.shiftKey?r<=0?e.length-1:r-1:r===e.length-1?0:r+1,e[o].focus()}},n=()=>{let t=m.current;if(t===null)return;let n=Jv(e);if(!e.hasFocus()||!o()||c.current){c.current=!1;return}if(dS(t,n)||r&&n!==l.current&&n!==u.current)return;if(n!==f.current)f.current=null;else if(f.current!==null)return;if(!p.current)return;let i=[];if((n===l.current||n===u.current)&&(i=a(m.current)),i.length>0){let e=!!(g.current?.shiftKey&&g.current?.key===`Tab`),t=i[0],n=i[i.length-1];typeof t!=`string`&&typeof n!=`string`&&(e?n.focus():t.focus())}else t.focus()};e.addEventListener(`focusin`,n),e.addEventListener(`keydown`,t,!0);let i=setInterval(()=>{let t=Jv(e);t&&t.tagName===`BODY`&&n()},50);return()=>{clearInterval(i),e.removeEventListener(`focusin`,n),e.removeEventListener(`keydown`,t,!0)}},[n,r,i,o,s,a]);let _=e=>{d.current===null&&(d.current=e.relatedTarget),p.current=!0,f.current=e.target;let n=t.props.onFocus;n&&n(e)},y=e=>{d.current===null&&(d.current=e.relatedTarget),p.current=!0};return(0,J.jsxs)(v.Fragment,{children:[(0,J.jsx)(`div`,{tabIndex:s?0:-1,onFocus:y,ref:l,"data-testid":`sentinelStart`}),v.cloneElement(t,{ref:h,onFocus:_}),(0,J.jsx)(`div`,{tabIndex:s?0:-1,onFocus:y,ref:u,"data-testid":`sentinelEnd`})]})}function xS(e){return typeof e==`function`?e():e}function SS(e){return e?e.props.hasOwnProperty(`in`):!1}var CS=()=>{},wS=new uS;function TS(e){let{container:t,disableScrollLock:n=!1,closeAfterTransition:r=!1,onTransitionEnter:i,onTransitionExited:a,children:o,onClose:s,open:c,rootRef:l}=e,u=v.useRef({}),d=v.useRef(null),f=v.useRef(null),p=v.useRef(null),m=wv(p,l),[h,g]=v.useState(!c),_=SS(o),y=!0;(e[`aria-hidden`]===`false`||e[`aria-hidden`]===!1)&&(y=!1);let b=()=>Ev(d.current),x=()=>(u.current.modalRef=p.current,u.current.mount=d.current,u.current),S=()=>{wS.mount(x(),{disableScrollLock:n}),p.current&&(p.current.scrollTop=0)},C=Tv(()=>{let e=xS(t)||b().body;wS.add(x(),e),p.current&&S()}),w=()=>wS.isTopModal(x()),T=Tv(e=>{d.current=e,e&&(f.current=e,c&&w()?S():p.current&&iS(p.current,y))}),E=v.useCallback(()=>{wS.remove(x(),y)},[y]);v.useEffect(()=>()=>{E()},[E]),v.useEffect(()=>{c?C():(!_||!r)&&E()},[c,E,_,r,C]);let D=e=>t=>{e.onKeyDown?.(t),!(t.key!==`Escape`||t.which===229||!w())&&(t.stopPropagation(),s&&s(t,`escapeKeyDown`))},O=e=>t=>{e.onClick?.(t),t.target===t.currentTarget&&s&&s(t,`backdropClick`)};return{getRootProps:(t={})=>{let n=cb(e);delete n.onTransitionEnter,delete n.onTransitionExited;let r={...n,...t};return{role:`presentation`,...r,onKeyDown:D(r),ref:m}},getBackdropProps:(e={})=>{let t=e;return{"aria-hidden":!0,...t,onClick:O(t),open:c}},getTransitionProps:()=>({onEnter:Dy(()=>{g(!1),i&&i()},o?.props.onEnter??CS),onExited:Dy(()=>{g(!0),a&&a(),r&&E()},o?.props.onExited??CS)}),rootRef:m,portalRef:T,portalContainer:!c&&_&&!h?f.current??t:t,isTopModal:w,exited:h,hasTransition:_}}function ES(e){return vg(`MuiModal`,e)}yg(`MuiModal`,[`root`,`hidden`,`backdrop`]);var DS=e=>{let{open:t,exited:n,classes:r}=e;return g_({root:[`root`,!t&&n&&`hidden`],backdrop:[`backdrop`]},ES,r)},OS=Z(`div`,{name:`MuiModal`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})(Vv(({theme:e})=>({position:`fixed`,zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0,variants:[{props:({ownerState:e})=>!e.open&&e.exited,style:{visibility:`hidden`}}]}))),kS=Z(jx,{name:`MuiModal`,slot:`Backdrop`})({zIndex:-1}),AS=v.forwardRef(function(e,t){let n=Hv({name:`MuiModal`,props:e}),{classes:r,className:i,closeAfterTransition:a=!1,children:o,container:s,component:c,disableAutoFocus:l=!1,disableEnforceFocus:u=!1,disablePortal:d=!1,disableRestoreFocus:f=!1,disableScrollLock:p=!1,hideBackdrop:m=!1,keepMounted:h=!1,onClose:g,onTransitionEnter:_,onTransitionExited:y,open:b,slotProps:x={},slots:S={},theme:C,...w}=n,T={...n,closeAfterTransition:a,disableAutoFocus:l,disableEnforceFocus:u,disablePortal:d,disableRestoreFocus:f,disableScrollLock:p,hideBackdrop:m,keepMounted:h},{getRootProps:E,getBackdropProps:D,getTransitionProps:O,portalRef:ee,portalContainer:k,isTopModal:A,exited:j,hasTransition:te}=TS({...T,rootRef:t}),M={...T,exited:j},ne=DS(M),N={};if(o.props.tabIndex===void 0&&(N.tabIndex=`-1`),te){let{onEnter:e,onExited:t}=O();N.onEnter=e,N.onExited=t}let P={slots:S,slotProps:x},[F,re]=db(`root`,{ref:t,elementType:OS,externalForwardedProps:{...P,...w,component:c},getSlotProps:E,ownerState:M,className:Y(i,ne?.root,!M.open&&M.exited&&ne?.hidden)}),[ie,ae]=db(`backdrop`,{elementType:kS,externalForwardedProps:P,shouldForwardComponentProp:!0,getSlotProps:e=>D({...e,onClick:t=>{e?.onClick&&e.onClick(t)}}),className:ne?.backdrop,ownerState:M});return!h&&!b&&(!te||j)?null:(0,J.jsx)(wx,{ref:ee,container:k,disablePortal:d,children:(0,J.jsxs)(F,{...re,children:[m?null:(0,J.jsx)(ie,{...ae}),(0,J.jsx)(bS,{disableEnforceFocus:u,disableAutoFocus:l,disableRestoreFocus:f,isEnabled:A,open:b,children:v.cloneElement(o,N)})]})})});function jS(e){return vg(`MuiDialog`,e)}yg(`MuiDialog`,[`root`,`backdrop`,`scrollPaper`,`scrollBody`,`container`,`paper`,`paperWidthFalse`,`paperWidthXs`,`paperWidthSm`,`paperWidthMd`,`paperWidthLg`,`paperWidthXl`,`paperFullWidth`,`paperFullScreen`]);var MS=v.createContext({}),NS=Z(jx,{name:`MuiDialog`,slot:`Backdrop`})({zIndex:-1}),PS=e=>{let{classes:t,scroll:n,maxWidth:r,fullWidth:i,fullScreen:a}=e;return g_({root:[`root`],backdrop:[`backdrop`],container:[`container`,`scroll${Uv(n)}`],paper:[`paper`,`paperWidth${Uv(String(r))}`,i&&`paperFullWidth`,a&&`paperFullScreen`]},jS,t)},FS=Z(AS,{name:`MuiDialog`,slot:`Root`})({"@media print":{position:`absolute !important`}}),IS=Z(`div`,{name:`MuiDialog`,slot:`Container`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.container,t[`scroll${Uv(n.scroll)}`]]}})({height:`100%`,"@media print":{height:`auto`},outline:0,variants:[{props:{scroll:`paper`},style:{display:`flex`,justifyContent:`center`,alignItems:`center`}},{props:{scroll:`body`},style:{overflowY:`auto`,overflowX:`hidden`,textAlign:`center`,"&::after":{content:`""`,display:`inline-block`,verticalAlign:`middle`,height:`100%`,width:`0`}}}]}),LS=Z(hb,{name:`MuiDialog`,slot:`Paper`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.paper,t[`paperWidth${Uv(String(n.maxWidth))}`],n.fullWidth&&t.paperFullWidth,n.fullScreen&&t.paperFullScreen]}})(Vv(({theme:e})=>({margin:32,position:`relative`,overflowY:`auto`,outline:0,"@media print":{overflowY:`visible`,boxShadow:`none`},variants:[{props:{scroll:`paper`},style:{display:`flex`,flexDirection:`column`,maxHeight:`calc(100% - 64px)`}},{props:{scroll:`body`},style:{display:`inline-block`,verticalAlign:`middle`,textAlign:`initial`}},{props:({ownerState:e})=>!e.maxWidth,style:{maxWidth:`calc(100% - 64px)`}},{props:{maxWidth:`xs`},style:{maxWidth:e.breakpoints.unit===`px`?Math.max(e.breakpoints.values.xs,444):`max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`}},{props:{maxWidth:`xs`,scroll:`body`},style:{[e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+64)]:{maxWidth:`calc(100% - 64px)`}}},...Object.keys(e.breakpoints.values).filter(e=>e!==`xs`).map(t=>({props:{maxWidth:t},style:{maxWidth:`${e.breakpoints.values[t]}${e.breakpoints.unit}`}})),...Object.keys(e.breakpoints.values).filter(e=>e!==`xs`).map(t=>({props:{maxWidth:t,scroll:`body`},style:{[e.breakpoints.down(e.breakpoints.values[t]+64)]:{maxWidth:`calc(100% - 64px)`}}})),{props:({ownerState:e})=>e.fullWidth,style:{width:`calc(100% - 64px)`}},{props:({ownerState:e})=>e.fullScreen,style:{margin:0,width:`100%`,maxWidth:`100%`,height:`100%`,maxHeight:`none`,borderRadius:0}},{props:({ownerState:e})=>e.fullScreen&&e.scroll===`body`,style:{margin:0,maxWidth:`100%`}}]}))),RS=v.forwardRef(function(e,t){let n=Hv({props:e,name:`MuiDialog`}),r=Iv(),i={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{"aria-describedby":a,"aria-labelledby":o,"aria-modal":s=!0,children:c,className:l,fullScreen:u=!1,fullWidth:d=!1,maxWidth:f=`sm`,onClick:p,onClose:m,open:h,PaperComponent:g=hb,role:_=`dialog`,scroll:y=`paper`,slots:b={},slotProps:x={},transitionDuration:S=i,...C}=n,w={...n,fullScreen:u,fullWidth:d,maxWidth:f,scroll:y},T=PS(w),E=v.useRef(),D=e=>{E.current=e.target===e.currentTarget},O=e=>{p&&p(e),E.current&&(E.current=null,m&&m(e,`backdropClick`))},ee=a_(o),k=v.useMemo(()=>({titleId:ee}),[ee]),A={slots:b,slotProps:x},[j,te]=db(`root`,{elementType:FS,shouldForwardComponentProp:!0,externalForwardedProps:A,ownerState:w,className:Y(T.root,l),ref:t}),[M,ne]=db(`backdrop`,{elementType:NS,shouldForwardComponentProp:!0,externalForwardedProps:A,ownerState:w,className:T.backdrop}),[N,P]=db(`paper`,{elementType:LS,shouldForwardComponentProp:!0,externalForwardedProps:A,ownerState:w,className:T.paper,additionalProps:{elevation:24,role:_,"aria-describedby":a,"aria-labelledby":ee,"aria-modal":s,tabIndex:-1,[fS]:``}}),[F,re]=db(`container`,{elementType:IS,externalForwardedProps:A,ownerState:w,className:T.container}),[ie,ae]=db(`transition`,{elementType:Dx,externalForwardedProps:A,ownerState:w,additionalProps:{appear:!0,in:h,timeout:S,role:`presentation`}});return(0,J.jsx)(j,{closeAfterTransition:!0,slots:{backdrop:M},slotProps:{backdrop:{transitionDuration:S,...ne}},onClose:m,open:h,onClick:O,...te,...C,children:(0,J.jsx)(ie,{...ae,children:(0,J.jsx)(F,{onMouseDown:D,...re,children:(0,J.jsx)(N,{as:g,...P,children:(0,J.jsx)(MS.Provider,{value:k,children:c})})})})})}),zS={visibility:`hidden`},BS={};function VS(e){return typeof e==`string`&&/^translate\(.+,\s*.+\)$/.test(e)}function HS(e,t,n,r=BS){let{resetInlineTransform:i=!0}=r,a=n&&n.getBoundingClientRect(),o=Py(t),s,c;if(i){let e=t.style.transform,n=t.style.transition;t.style.transition=``,t.style.transform=``,s=t.getBoundingClientRect(),c=o.getComputedStyle(t).getPropertyValue(`transform`),t.style.transform=e,t.style.transition=n}else s=t.getBoundingClientRect(),c=o.getComputedStyle(t).getPropertyValue(`transform`);let{offsetX:l,offsetY:u}=uy(c);return e===`left`?a?`translateX(${a.right+l-s.left}px)`:`translateX(${o.innerWidth+l-s.left}px)`:e===`right`?a?`translateX(-${s.right-a.left-l}px)`:`translateX(-${s.left+s.width-l}px)`:e===`up`?a?`translateY(${a.bottom+u-s.top}px)`:`translateY(${o.innerHeight+u-s.top}px)`:a?`translateY(-${s.top-a.top+s.height-u}px)`:`translateY(-${s.top+s.height-u}px)`}function US(e){return typeof e==`function`?e():e}function WS(e,t,n,r){let i=HS(e,t,US(n),r);i&&(t.style.transform=i)}var GS=v.forwardRef(function(e,t){let n=Iv(),r={enter:n.transitions.easing.easeOut,exit:n.transitions.easing.sharp},i={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:a,appear:o=!0,children:s,container:c,disablePrefersReducedMotion:l=!1,direction:u=`down`,easing:d=r,in:f,onEnter:p,onEntered:m,onEntering:h,onExit:g,onExited:_,onExiting:y,style:b,timeout:x=i,...S}=e,C=ab(n.motion.reducedMotion,l),w=v.useRef(null),T=v.useRef(!1),E=Wv(xx(s),w,t),D=dy(w,(e,t)=>{WS(u,e,c),C.shouldReduceMotion||ty(e),p&&p(e,t)}),O=dy(w,(e,t)=>{let r=py({timeout:x,style:b,easing:d},{mode:`enter`}),i=C.getTransitionTiming({duration:r.duration,delay:r.delay});e.style.transition=n.transitions.create(`transform`,{duration:i.duration,easing:r.easing,delay:i.delay}),e.style.transform=`none`,h&&h(e,t)}),ee=dy(w,m),k=dy(w,y),A=dy(w,e=>{let t=py({timeout:x,style:b,easing:d},{mode:`exit`}),r=C.getTransitionTiming({duration:t.duration,delay:t.delay});e.style.transition=n.transitions.create(`transform`,{duration:r.duration,easing:t.easing,delay:r.delay});let i=VS(e.style.transform);T.current=i,WS(u,e,c,{resetInlineTransform:!i}),g&&g(e)}),j=dy(w,e=>{T.current=!1,e.style.transition=``,_&&_(e)}),te=a?e=>{a(w.current,e)}:void 0,M=v.useCallback(()=>{w.current&&WS(u,w.current,c)},[u,c]);return v.useEffect(()=>{if(f||u===`down`||u===`right`)return;let e=Ny(()=>{w.current&&WS(u,w.current,c)}),t=Py(w.current);return t.addEventListener(`resize`,e),()=>{e.clear(),t.removeEventListener(`resize`,e)}},[u,f,c]),v.useEffect(()=>{!f&&!T.current&&M()},[f,M]),(0,J.jsx)(qy,{nodeRef:w,onEnter:D,onEntered:ee,onEntering:O,onExit:A,onExited:j,onExiting:k,addEndListener:te,appear:o,in:f,reduceMotion:C.shouldReduceMotion,timeout:x,...S,children:(e,{ownerState:t,...n})=>{let r;return r=e===`exited`&&!f?b||s.props.style?{visibility:`hidden`,...b,...s.props.style}:zS:b&&s.props.style?{...b,...s.props.style}:b||s.props.style,v.cloneElement(s,{ref:E,style:r,...n})}})});function KS(e){return vg(`MuiDrawer`,e)}yg(`MuiDrawer`,[`root`,`docked`,`paper`,`anchorLeft`,`anchorRight`,`anchorTop`,`anchorBottom`,`modal`]);var qS=(e,t)=>{let{ownerState:n}=e;return[t.root,(n.variant===`permanent`||n.variant===`persistent`)&&t.docked,n.variant===`temporary`&&t.modal]},JS=e=>{let{classes:t,anchor:n,variant:r}=e;return g_({root:[`root`,`anchor${Uv(n)}`],docked:[(r===`permanent`||r===`persistent`)&&`docked`],modal:[`modal`],paper:[`paper`]},KS,t)},YS=Z(AS,{name:`MuiDrawer`,slot:`Root`,overridesResolver:qS})(Vv(({theme:e})=>({zIndex:(e.vars||e).zIndex.drawer}))),XS=Z(`div`,{shouldForwardProp:zv,name:`MuiDrawer`,slot:`Docked`,skipVariantsResolver:!1,overridesResolver:qS})({flex:`0 0 auto`}),ZS=Z(hb,{name:`MuiDrawer`,slot:`Paper`})(Vv(({theme:e})=>({overflowY:`auto`,display:`flex`,flexDirection:`column`,height:`100%`,flex:`1 0 auto`,zIndex:(e.vars||e).zIndex.drawer,WebkitOverflowScrolling:`touch`,position:`fixed`,top:0,outline:0,variants:[{props:{anchor:`left`},style:{left:0}},{props:{anchor:`top`},style:{top:0,left:0,right:0,height:`auto`,maxHeight:`100%`}},{props:{anchor:`right`},style:{right:0}},{props:{anchor:`bottom`},style:{top:`auto`,left:0,bottom:0,right:0,height:`auto`,maxHeight:`100%`}},{props:({ownerState:e})=>e.anchor===`left`&&e.variant!==`temporary`,style:{borderRight:`1px solid ${(e.vars||e).palette.divider}`}},{props:({ownerState:e})=>e.anchor===`top`&&e.variant!==`temporary`,style:{borderBottom:`1px solid ${(e.vars||e).palette.divider}`}},{props:({ownerState:e})=>e.anchor===`right`&&e.variant!==`temporary`,style:{borderLeft:`1px solid ${(e.vars||e).palette.divider}`}},{props:({ownerState:e})=>e.anchor===`bottom`&&e.variant!==`temporary`,style:{borderTop:`1px solid ${(e.vars||e).palette.divider}`}}]}))),QS={left:`right`,right:`left`,top:`down`,bottom:`up`};function $S(e){return[`left`,`right`].includes(e)}function eC({direction:e},t){return e===`rtl`&&$S(t)?QS[t]:t}var tC=v.forwardRef(function(e,t){let n=Hv({props:e,name:`MuiDrawer`}),r=Iv(),i=Qg(),a={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{anchor:o=`left`,children:s,className:c,elevation:l=16,hideBackdrop:u=!1,ModalProps:d={},onClose:f,open:p=!1,transitionDuration:m=a,variant:h=`temporary`,slots:g={},slotProps:_={},...y}=n,b=v.useRef(!1),x=v.useRef(null),S=Wv(t,x);v.useEffect(()=>{b.current=!0},[]);let C=v.useCallback(()=>x.current,[]),w=eC({direction:i?`rtl`:`ltr`},o),T=o,E={...n,anchor:T,elevation:l,open:p,variant:h,...y},D=JS(E),O={slots:g,slotProps:{..._,backdrop:zy(_.backdrop,{transitionDuration:m})}},[ee,k]=db(`root`,{ref:S,elementType:YS,className:Y(D.root,D.modal,c),shouldForwardComponentProp:!0,ownerState:E,externalForwardedProps:{...O,...y,...d},additionalProps:{closeAfterTransition:!0,open:p,onClose:f,hideBackdrop:u,slots:{backdrop:O.slots.backdrop},slotProps:{backdrop:O.slotProps.backdrop}}}),[A,j]=db(`paper`,{elementType:ZS,shouldForwardComponentProp:!0,className:D.paper,ownerState:E,externalForwardedProps:O,additionalProps:{elevation:h===`temporary`?l:0,square:!0,...h===`temporary`&&{role:`dialog`,"aria-modal":`true`,"data-mui-focusable":``,tabIndex:-1}}}),[te,M]=db(`docked`,{elementType:XS,ref:S,className:Y(D.root,D.docked,c),ownerState:E,externalForwardedProps:O,additionalProps:y}),[ne,N]=db(`transition`,{elementType:GS,ownerState:E,externalForwardedProps:O,additionalProps:{in:p,direction:QS[w],timeout:m,appear:b.current,...h===`temporary`&&(g.transition==null||g.transition===GS)&&{container:C}}}),P=(0,J.jsx)(A,{...j,children:s});if(h===`permanent`)return(0,J.jsx)(te,{...M,children:P});let F=(0,J.jsx)(ne,{...N,children:P});return h===`persistent`?(0,J.jsx)(te,{...M,children:F}):(0,J.jsx)(ee,{...k,children:F})});function nC(e){return vg(`MuiLink`,e)}var rC=yg(`MuiLink`,[`root`,`underlineNone`,`underlineHover`,`underlineAlways`,`button`,`focusVisible`]),iC=({theme:e,ownerState:t})=>{let n=t.color;if(`colorSpace`in e&&e.colorSpace){let r=ah(e,`palette.${n}.main`)||ah(e,`palette.${n}`)||t.color;return e.alpha(r,.4)}let r=ah(e,`palette.${n}.main`,!1)||ah(e,`palette.${n}`,!1)||t.color,i=ah(e,`palette.${n}.mainChannel`)||ah(e,`palette.${n}Channel`);return`vars`in e&&i?`rgba(${i} / 0.4)`:Ug(r,.4)},aC={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},oC=e=>{let{classes:t,component:n,focusVisible:r,underline:i}=e;return g_({root:[`root`,`underline${Uv(i)}`,n===`button`&&`button`,r&&`focusVisible`]},nC,t)},sC=Z(Q,{name:`MuiLink`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[`underline${Uv(n.underline)}`],n.component===`button`&&t.button]}})(Vv(({theme:e})=>({variants:[{props:{underline:`none`},style:{textDecoration:`none`}},{props:{underline:`hover`},style:{textDecoration:`none`,"&:hover":{textDecoration:`underline`}}},{props:{underline:`always`},style:{textDecoration:`underline`,"&:hover":{textDecorationColor:`inherit`}}},{props:({underline:e,ownerState:t})=>e===`always`&&t.color!==`inherit`,style:{textDecorationColor:`var(--Link-underlineColor)`}},{props:({underline:e,ownerState:t})=>e===`always`&&t.color===`inherit`,style:e.colorSpace?{textDecorationColor:e.alpha(`currentColor`,.4)}:null},...Object.entries(e.palette).filter(Xb()).map(([t])=>({props:{underline:`always`,color:t},style:{"--Link-underlineColor":e.alpha((e.vars||e).palette[t].main,.4)}})),{props:{underline:`always`,color:`textPrimary`},style:{"--Link-underlineColor":e.alpha((e.vars||e).palette.text.primary,.4)}},{props:{underline:`always`,color:`textSecondary`},style:{"--Link-underlineColor":e.alpha((e.vars||e).palette.text.secondary,.4)}},{props:{underline:`always`,color:`textDisabled`},style:{"--Link-underlineColor":(e.vars||e).palette.text.disabled}},{props:{component:`button`},style:{position:`relative`,WebkitTapHighlightColor:`transparent`,backgroundColor:`transparent`,outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:`pointer`,userSelect:`none`,verticalAlign:`middle`,MozAppearance:`none`,WebkitAppearance:`none`,"&::-moz-focus-inner":{borderStyle:`none`},[`&.${rC.focusVisible}`]:{outline:`auto`}}}]}))),cC=v.forwardRef(function(e,t){let n=Hv({props:e,name:`MuiLink`}),r=Iv(),{className:i,color:a=`primary`,component:o=`a`,onBlur:s,onFocus:c,TypographyClasses:l,underline:u=`always`,variant:d=`inherit`,sx:f,...p}=n,[m,h]=v.useState(!1),g=e=>{gb(e.target)||h(!1),s&&s(e)},_=e=>{gb(e.target)&&h(!0),c&&c(e)},y={...n,color:a,component:o,focusVisible:m,underline:u,variant:d},b=oC(y);return(0,J.jsx)(sC,{color:a,className:Y(b.root,i),classes:l,component:o,onBlur:g,onFocus:_,ref:t,ownerState:y,variant:d,...p,sx:[...aC[a]===void 0?[{color:a}]:[],...Array.isArray(f)?f:[f]],style:{...p.style,...u===`always`&&a!==`inherit`&&!aC[a]&&{"--Link-underlineColor":iC({theme:r,ownerState:y})}}})}),lC=v.createContext({});function uC(e){return vg(`MuiList`,e)}yg(`MuiList`,[`root`,`padding`,`dense`,`subheader`]);var dC=e=>{let{classes:t,disablePadding:n,dense:r,subheader:i}=e;return g_({root:[`root`,!n&&`padding`,r&&`dense`,i&&`subheader`]},uC,t)},fC=Z(`ul`,{name:`MuiList`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,!n.disablePadding&&t.padding,n.dense&&t.dense,n.subheader&&t.subheader]}})({listStyle:`none`,margin:0,padding:0,position:`relative`,variants:[{props:({ownerState:e})=>!e.disablePadding,style:{paddingTop:8,paddingBottom:8}},{props:({ownerState:e})=>e.subheader,style:{paddingTop:0,isolation:`isolate`}}]}),pC=v.forwardRef(function(e,t){let n=Hv({props:e,name:`MuiList`}),{children:r,className:i,component:a=`ul`,dense:o=!1,disablePadding:s=!1,subheader:c,...l}=n,u=v.useMemo(()=>({dense:o}),[o]),d={...n,component:a,dense:o,disablePadding:s},f=dC(d);return(0,J.jsx)(lC.Provider,{value:u,children:(0,J.jsxs)(fC,{as:a,className:Y(f.root,i),ref:t,ownerState:d,...l,children:[c,r]})})});function mC(e){return vg(`MuiListItem`,e)}yg(`MuiListItem`,[`root`,`dense`,`alignItemsFlexStart`,`divider`,`gutters`,`padding`,`secondaryAction`]);function hC(e){return vg(`MuiListItemSecondaryAction`,e)}yg(`MuiListItemSecondaryAction`,[`root`,`disableGutters`]);var gC=e=>{let{disableGutters:t,classes:n}=e;return g_({root:[`root`,t&&`disableGutters`]},hC,n)},_C=Z(`div`,{name:`MuiListItemSecondaryAction`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,n.disableGutters&&t.disableGutters]}})({position:`absolute`,right:16,top:`50%`,transform:`translateY(-50%)`,variants:[{props:({ownerState:e})=>e.disableGutters,style:{right:0}}]}),vC=v.forwardRef(function(e,t){let n=Hv({props:e,name:`MuiListItemSecondaryAction`}),{className:r,component:i,...a}=n,o=v.useContext(lC),s={...n,disableGutters:o.disableGutters},c=gC(s);return(0,J.jsx)(_C,{as:i,className:Y(c.root,r),ownerState:s,ref:t,...a})});vC.muiName=`ListItemSecondaryAction`;var yC=(e,t)=>{let{ownerState:n}=e;return[t.root,n.dense&&t.dense,n.alignItems===`flex-start`&&t.alignItemsFlexStart,n.divider&&t.divider,!n.disableGutters&&t.gutters,!n.disablePadding&&t.padding]},bC=e=>{let{alignItems:t,classes:n,dense:r,disableGutters:i,disablePadding:a,divider:o}=e;return g_({root:[`root`,r&&`dense`,!i&&`gutters`,!a&&`padding`,o&&`divider`,t===`flex-start`&&`alignItemsFlexStart`],secondaryAction:[`secondaryAction`]},mC,n)},xC=Z(`div`,{name:`MuiListItem`,slot:`Root`,overridesResolver:yC})(Vv(({theme:e})=>({display:`flex`,justifyContent:`flex-start`,alignItems:`center`,position:`relative`,textDecoration:`none`,width:`100%`,boxSizing:`border-box`,textAlign:`left`,variants:[{props:({ownerState:e})=>!e.disablePadding,style:{paddingTop:8,paddingBottom:8}},{props:({ownerState:e})=>!e.disablePadding&&e.dense,style:{paddingTop:4,paddingBottom:4}},{props:({ownerState:e})=>!e.disablePadding&&!e.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:e})=>!e.disablePadding&&!!e.secondaryAction,style:{paddingRight:48}},{props:({ownerState:e})=>!!e.secondaryAction,style:{[`& > .${Ey.root}`]:{paddingRight:48}}},{props:{alignItems:`flex-start`},style:{alignItems:`flex-start`}},{props:({ownerState:e})=>e.divider,style:{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:`padding-box`}},{props:({ownerState:e})=>e.button,style:{...hy(e,`background-color`,{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:`none`,backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:`transparent`}}}}]}))),SC=Z(vC,{name:`MuiListItem`,slot:`secondaryAction`})({}),CC=v.forwardRef(function(e,t){let n=Hv({props:e,name:`MuiListItem`}),{alignItems:r=`center`,children:i,className:a,component:o=`li`,dense:s=!1,disableGutters:c=!1,disablePadding:l=!1,divider:u=!1,secondaryAction:d,slotProps:f={},slots:p={},...m}=n,h=v.useContext(lC),g=v.useMemo(()=>({dense:s||h.dense||!1,alignItems:r,disableGutters:c}),[r,h.dense,s,c]),_={...n,alignItems:r,dense:g.dense,disableGutters:c,disablePadding:l,divider:u,secondaryAction:d},y=bC(_),b={slots:p,slotProps:f},[x,S]=db(`root`,{ref:t,elementType:xC,externalForwardedProps:{component:o,...b,...m},ownerState:_,className:Y(y.root,a)}),[C,w]=db(`secondaryAction`,{elementType:SC,shouldForwardComponentProp:!0,externalForwardedProps:b,ownerState:_,className:y.secondaryAction});return(0,J.jsx)(lC.Provider,{value:g,children:(0,J.jsxs)(x,{...S,children:[i,d&&(0,J.jsx)(C,{...w,children:d})]})})});function wC(e){return vg(`MuiListItemText`,e)}var TC=yg(`MuiListItemText`,[`root`,`multiline`,`dense`,`inset`,`primary`,`secondary`]),EC=e=>{let{classes:t,inset:n,primary:r,secondary:i,dense:a}=e;return g_({root:[`root`,n&&`inset`,a&&`dense`,r&&i&&`multiline`],primary:[`primary`],secondary:[`secondary`]},wC,t)},DC=Z(`div`,{name:`MuiListItemText`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[{[`& .${TC.primary}`]:t.primary},{[`& .${TC.secondary}`]:t.secondary},t.root,n.inset&&t.inset,n.primary&&n.secondary&&t.multiline,n.dense&&t.dense]}})({flex:`1 1 auto`,minWidth:0,marginTop:4,marginBottom:4,[`.${gx.root}:where(& .${TC.primary})`]:{display:`block`},[`.${gx.root}:where(& .${TC.secondary})`]:{display:`block`},variants:[{props:({ownerState:e})=>e.primary&&e.secondary,style:{marginTop:6,marginBottom:6}},{props:({ownerState:e})=>e.inset,style:{paddingLeft:56}}]}),OC=v.forwardRef(function(e,t){let n=Hv({props:e,name:`MuiListItemText`}),{children:r,className:i,disableTypography:a=!1,inset:o=!1,primary:s,secondary:c,slots:l={},slotProps:u={},...d}=n,{dense:f}=v.useContext(lC),p=s??r,m=c,h={...n,disableTypography:a,inset:o,primary:!!p,secondary:!!m,dense:f},g=EC(h),_={slots:l,slotProps:u},[y,b]=db(`root`,{className:Y(g.root,i),elementType:DC,externalForwardedProps:{..._,...d},ownerState:h,ref:t}),[x,S]=db(`primary`,{className:g.primary,elementType:Q,externalForwardedProps:_,ownerState:h}),[C,w]=db(`secondary`,{className:g.secondary,elementType:Q,externalForwardedProps:_,ownerState:h});return p!=null&&p.type!==Q&&!a&&(p=(0,J.jsx)(x,{variant:f?`body2`:`body1`,component:S?.variant?void 0:`span`,...S,children:p})),m!=null&&m.type!==Q&&!a&&(m=(0,J.jsx)(C,{variant:`body2`,color:`textSecondary`,...w,children:m})),(0,J.jsxs)(y,{...b,children:[p,m]})}),kC=My((0,J.jsx)(`path`,{d:`M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z`}),`Close`),AC=({image:e,onClose:t,isDarkMode:n=!1})=>(0,J.jsxs)(RS,{open:!!e,onClose:t,maxWidth:!1,"aria-label":`Image preview`,PaperProps:{sx:{m:{xs:1,sm:3},width:`fit-content`,maxWidth:`calc(100vw - 16px)`,overflow:`hidden`,bgcolor:n?`#18181b`:`#ffffff`}},children:[(0,J.jsx)(mx,{"aria-label":`Close image preview`,onClick:t,sx:{position:`absolute`,top:8,right:8,zIndex:1,color:`#ffffff`,bgcolor:`rgba(0, 0, 0, 0.56)`,"&:hover":{bgcolor:`rgba(0, 0, 0, 0.76)`}},children:(0,J.jsx)(kC,{})}),e&&(0,J.jsx)($,{component:`img`,src:e.src,alt:e.alt||`Expanded guide image`,sx:{display:`block`,width:`auto`,maxWidth:`100%`,height:`auto`,maxHeight:`calc(100vh - 24px)`,objectFit:`contain`}})]}),jC=My((0,J.jsx)(`path`,{d:`M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z`}),`CheckCircle`),MC=My((0,J.jsx)(`path`,{d:`M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12z`}),`Cancel`),NC=({isDarkMode:e=!1,language:t=`en`})=>{let[n,r]=(0,v.useState)([]),[i,a]=(0,v.useState)([]),[o,s]=(0,v.useState)(!0),[c,l]=(0,v.useState)(null),u=e?`#ffffff`:`#111827`,d=e?`#a1a1aa`:`#4b5563`,f=e?`#4ade80`:`#16a34a`,p=e?`#f87171`:`#dc2626`,m=e?`linear-gradient(145deg, rgba(24, 24, 27, 0.6) 0%, rgba(22, 163, 74, 0.05) 100%)`:`linear-gradient(145deg, #ffffff 0%, #f0fdf4 100%)`,h=e?`linear-gradient(145deg, rgba(24, 24, 27, 0.6) 0%, rgba(220, 38, 38, 0.05) 100%)`:`linear-gradient(145deg, #ffffff 0%, #fef2f2 100%)`,g=e?`rgba(74, 222, 128, 0.15)`:`rgba(22, 163, 74, 0.15)`,_=e?`rgba(248, 113, 113, 0.15)`:`rgba(220, 38, 38, 0.15)`,y=e?`rgba(74, 222, 128, 0.1)`:`rgba(22, 163, 74, 0.08)`,b=e?`rgba(248, 113, 113, 0.1)`:`rgba(220, 38, 38, 0.08)`;(0,v.useEffect)(()=>{(async()=>{s(!0);try{let[e,n]=await Promise.all([$d(t),ef(t)]);r(e.data.data),a(n.data.data),s(!1)}catch(e){console.error(`Ralat ketika menarik data:`,e),s(!1)}})()},[t]);let x=(t,n)=>{if(!t)return null;if(t.type===`paragraph`||t.type===`list-item`)return t.type===`list-item`?(0,J.jsx)(Q,{component:`li`,sx:{mb:`8px`,lineHeight:`1.7`,color:d,fontFamily:`'Inter', sans-serif`,fontSize:`14px`},children:t.children?t.children.map((e,t)=>x(e,t)):``},n):(0,J.jsx)(Q,{paragraph:!0,sx:{mb:`12px`,lineHeight:`1.7`,color:d,fontFamily:`'Inter', sans-serif`,fontSize:`14px`,"&:last-child":{mb:0}},children:t.children?t.children.map((e,t)=>x(e,t)):``},n);if(t.text!==void 0){let e=t.text;return t.bold&&(e=(0,J.jsx)($,{component:`strong`,sx:{color:u,fontWeight:`700`},children:e})),t.italic&&(e=(0,J.jsx)($,{component:`em`,children:e})),(0,J.jsx)(v.Fragment,{children:e},n)}if(t.type===`link`)return(0,J.jsx)(cC,{href:t.url,target:`_blank`,rel:`noopener noreferrer`,sx:{color:e?`#f97316`:`#ea580c`,textDecoration:`underline`},children:t.children?t.children.map((e,t)=>x(e,t)):``},n);if(t.type===`list`){let e=t.format===`ordered`?`ol`:`ul`;return(0,J.jsx)($,{component:e,sx:{pl:`20px`,mb:`16px`,color:d,fontFamily:`'Inter', sans-serif`},children:t.children?t.children.map((e,t)=>x(e,t)):``},n)}if(t.type===`image`){let e=t.image?.url;if(!e)return null;let r=e.startsWith(`http`)?e:`http://localhost:1337${e}`;return(0,J.jsx)($,{component:`button`,type:`button`,"aria-label":`View ${t.image?.alternativeText||`guide image`} at full size`,onClick:()=>l({src:r,alt:t.image?.alternativeText||`Guide Image`}),sx:{display:`block`,width:`100%`,p:0,mt:2,mb:2,border:`1px solid ${g}`,borderRadius:`8px`,overflow:`hidden`,bgcolor:`transparent`,cursor:`zoom-in`,"& img":{display:`block`,width:`100%`,maxWidth:`100%`,height:`auto`,transition:`opacity 0.2s ease`},"&:hover img":{opacity:.88},"&:focus-visible":{outline:`3px solid ${f}`,outlineOffset:`3px`}},children:(0,J.jsx)($,{component:`img`,src:r,alt:t.image?.alternativeText||`Guide Image`})},n)}return null},S=e=>e?typeof e==`string`?(0,J.jsx)(Q,{sx:{color:d,fontSize:`14px`,fontFamily:`'Inter', sans-serif`},children:e}):Array.isArray(e)?(0,J.jsx)($,{children:e.map((e,t)=>x(e,t))}):null:(0,J.jsx)(Q,{sx:{color:d,fontSize:`14px`,fontFamily:`'Inter', sans-serif`},children:t===`ms`?`Tiada Penerangan`:`No description`});return o?(0,J.jsxs)($,{sx:{display:`flex`,justifyContent:`center`,alignItems:`center`,minHeight:`60vh`,flexDirection:`column`,gap:2},children:[(0,J.jsx)(cx,{sx:{color:`#f97316`}}),(0,J.jsx)(Q,{sx:{fontFamily:`'Inter', sans-serif`,color:d},children:t===`ms`?`Memuatkan panduan...`:`Loading guide...`})]}):(0,J.jsxs)($,{sx:{display:`flex`,flexDirection:`column`,justifyContent:`flex-start`,width:`100%`,minHeight:{xs:`auto`,md:`calc(100vh - 200px)`},pb:5},children:[(0,J.jsx)(Q,{variant:`h2`,sx:{mb:2,fontWeight:`800`,fontFamily:`'Sora', Inter`,letterSpacing:`-1px`,color:u,fontSize:{xs:`32px`,md:`42px`},textAlign:`left`},children:t===`ms`?`Panduan Penggunaan`:`Usage Guide`}),(0,J.jsx)(Q,{sx:{fontFamily:`'Inter', sans-serif`,fontSize:`16px`,mb:6,color:d,lineHeight:1.6,textAlign:`left`,maxWidth:`600px`},children:t===`ms`?`Sila patuhi amalan terbaik di bawah ketika mengendalikan sistem POS untuk mengelakkan sebarang ralat atau isu teknikal.`:`Please adhere to the best practices below when handling the POS system to avoid any errors or technical issues.`}),(0,J.jsxs)($,{sx:{display:`flex`,flexDirection:{xs:`column`,lg:`row`},gap:4,justifyContent:`flex-start`,alignItems:`stretch`,width:`100%`,maxWidth:`1000px`},children:[(0,J.jsxs)(hb,{elevation:0,sx:{flex:1,p:{xs:2.5,md:4},borderRadius:`24px`,background:m,border:`1px solid ${g}`,boxShadow:`0 8px 32px ${e?`rgba(0,0,0,0.3)`:`rgba(0,0,0,0.02)`}`,display:`flex`,flexDirection:`column`,position:`relative`,overflow:`hidden`,transition:`all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`,"&:hover":{transform:`translateY(-4px)`,boxShadow:`0 16px 40px ${y}`,borderColor:e?`rgba(74, 222, 128, 0.3)`:`rgba(22, 163, 74, 0.3)`}},children:[(0,J.jsx)($,{sx:{position:`absolute`,top:0,left:0,right:0,height:`4px`,background:f}}),(0,J.jsxs)($,{sx:{display:`flex`,alignItems:`center`,mb:4},children:[(0,J.jsx)($,{sx:{display:`flex`,alignItems:`center`,justifyContent:`center`,width:48,height:48,borderRadius:`14px`,bgcolor:e?`rgba(74, 222, 128, 0.1)`:`rgba(22, 163, 74, 0.1)`,mr:2},children:(0,J.jsx)(jC,{sx:{color:f,fontSize:28}})}),(0,J.jsx)(Q,{variant:`h5`,sx:{fontWeight:`800`,color:u,fontFamily:`'Sora', Inter`},children:`Do's`})]}),(0,J.jsx)($,{sx:{flexGrow:1},children:n.length===0?(0,J.jsx)(Q,{sx:{fontFamily:`'Inter', sans-serif`,color:d,fontStyle:`italic`,textAlign:`center`,py:4},children:t===`ms`?`Tiada panduan diletakkan.`:`No guide provided.`}):n.map((n,r)=>{let i=n.attributes||n,a=i.title||i.Title||(t===`ms`?`Tiada Tajuk`:`No Title`),o=S(i.Content||i.content);return(0,J.jsxs)($,{sx:{display:`flex`,gap:2.5,mb:3.5,"&:last-child":{mb:0}},children:[(0,J.jsx)($,{sx:{minWidth:`32px`,height:`32px`,borderRadius:`50%`,display:`flex`,alignItems:`center`,justifyContent:`center`,bgcolor:e?`rgba(255, 255, 255, 0.05)`:`rgba(0, 0, 0, 0.03)`,color:f,fontWeight:`700`,fontSize:`14px`,fontFamily:`'Sora', Inter`,border:`1px solid ${g}`},children:r+1}),(0,J.jsxs)($,{sx:{pt:.5,flexGrow:1},children:[a!==(t===`ms`?`Tiada Tajuk`:`No Title`)&&(0,J.jsx)(Q,{variant:`subtitle1`,sx:{color:u,fontWeight:`700`,mb:1,fontFamily:`'Inter', sans-serif`,fontSize:`16px`},children:a}),o]})]},n.id)})})]}),(0,J.jsxs)(hb,{elevation:0,sx:{flex:1,p:{xs:2.5,md:4},borderRadius:`24px`,background:h,border:`1px solid ${_}`,boxShadow:`0 8px 32px ${e?`rgba(0,0,0,0.3)`:`rgba(0,0,0,0.02)`}`,display:`flex`,flexDirection:`column`,position:`relative`,overflow:`hidden`,transition:`all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`,"&:hover":{transform:`translateY(-4px)`,boxShadow:`0 16px 40px ${b}`,borderColor:e?`rgba(248, 113, 113, 0.3)`:`rgba(220, 38, 38, 0.3)`}},children:[(0,J.jsx)($,{sx:{position:`absolute`,top:0,left:0,right:0,height:`4px`,background:p}}),(0,J.jsxs)($,{sx:{display:`flex`,alignItems:`center`,mb:4},children:[(0,J.jsx)($,{sx:{display:`flex`,alignItems:`center`,justifyContent:`center`,width:48,height:48,borderRadius:`14px`,bgcolor:e?`rgba(248, 113, 113, 0.1)`:`rgba(220, 38, 38, 0.1)`,mr:2},children:(0,J.jsx)(MC,{sx:{color:p,fontSize:28}})}),(0,J.jsx)(Q,{variant:`h5`,sx:{fontWeight:`800`,color:u,fontFamily:`'Sora', Inter`},children:`Don'ts`})]}),(0,J.jsx)($,{sx:{flexGrow:1},children:i.length===0?(0,J.jsx)(Q,{sx:{fontFamily:`'Inter', sans-serif`,color:d,fontStyle:`italic`,textAlign:`center`,py:4},children:t===`ms`?`Tiada panduan diletakkan.`:`No guide provided.`}):i.map((n,r)=>{let i=n.attributes||n,a=i.title||i.Title||(t===`ms`?`Tiada Tajuk`:`No Title`),o=S(i.Content||i.content);return(0,J.jsxs)($,{sx:{display:`flex`,gap:2.5,mb:3.5,"&:last-child":{mb:0}},children:[(0,J.jsx)($,{sx:{minWidth:`32px`,height:`32px`,borderRadius:`50%`,display:`flex`,alignItems:`center`,justifyContent:`center`,bgcolor:e?`rgba(255, 255, 255, 0.05)`:`rgba(0, 0, 0, 0.03)`,color:p,fontWeight:`700`,fontSize:`14px`,fontFamily:`'Sora', Inter`,border:`1px solid ${_}`},children:r+1}),(0,J.jsxs)($,{sx:{pt:.5,flexGrow:1},children:[a!==(t===`ms`?`Tiada Tajuk`:`No Title`)&&(0,J.jsx)(Q,{variant:`subtitle1`,sx:{color:u,fontWeight:`700`,mb:1,fontFamily:`'Inter', sans-serif`,fontSize:`16px`},children:a}),o]})]},n.id)})})]})]}),(0,J.jsx)(AC,{image:c,onClose:()=>l(null),isDarkMode:e})]})},PC=My((0,J.jsx)(`path`,{d:`M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14`}),`Search`),FC=My((0,J.jsx)(`path`,{d:`M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5M2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1m18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1M11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1m0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1M5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0z`}),`LightMode`),IC=My((0,J.jsx)(`path`,{d:`M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1`}),`DarkMode`),LC=My((0,J.jsx)(`path`,{d:`m12.87 15.07-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2zm-2.62 7 1.62-4.33L19.12 17z`}),`Translate`),RC=My((0,J.jsx)(`path`,{d:`M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z`}),`Menu`),zC=My((0,J.jsx)(`path`,{d:`M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z`}),`ArrowBack`),BC=My([(0,J.jsx)(`path`,{d:`M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2`},`0`),(0,J.jsx)(`path`,{d:`M14 17H7v-2h7zm3-4H7v-2h10zm0-4H7V7h10z`},`1`)],`ArticleOutlined`),VC=My((0,J.jsx)(`path`,{d:`M20 10V8h-4V4h-2v4h-4V4H8v4H4v2h4v4H4v2h4v4h2v-4h4v4h2v-4h4v-2h-4v-4zm-6 4h-4v-4h4z`}),`TagOutlined`),HC=My((0,J.jsx)(`path`,{d:`M14 17H4v2h10zm6-8H4v2h16zM4 15h16v-2H4zM4 5v2h16V5z`}),`SubjectOutlined`),UC=({language:e,onMobileClose:t})=>{let n=sc,[r,i]=(0,v.useState)(null),[a]=jn(),o=a.get(`id`),s=()=>{t&&t()},c=e=>{i(t=>t===e?null:e)},l=n.filter(e=>e.section===`PROLOGUE`),u=n.filter(e=>e.section===`USER GUIDELINES`),d=u.filter(e=>!e.isSubTopic),f=u.filter(e=>e.isSubTopic),p=n.filter(e=>e.section===`SUPPORT`);return(0,J.jsx)($,{component:`nav`,className:`doc-sidebar-nav`,children:(0,J.jsxs)($,{sx:{flexGrow:1},children:[(0,J.jsx)(Q,{className:`sidebar-heading`,sx:{mb:1.5},children:e===`ms`?`PROLOG`:`PROLOGUE`}),(0,J.jsxs)($,{className:`sidebar-list`,sx:{mb:3},children:[l.length===0&&(0,J.jsx)(Q,{className:`sidebar-empty`,children:e===`ms`?`Tiada fail prolog.`:`No prologue files.`}),l.map(e=>{let t=e._sys.filename,n=`/docs?id=${t}`,r=o===t;return(0,J.jsx)(Tn,{to:n,onClick:s,style:{textDecoration:`none`,display:`block`,paddingBottom:`8px`},children:(0,J.jsx)(Q,{className:`sidebar-item ${r?`active-item`:``}`,sx:{fontWeight:r?600:400},children:e.title})},t)})]}),(0,J.jsx)(Q,{className:`sidebar-heading`,sx:{mt:3},children:e===`ms`?`Panduan Pengguna`:`User Guidelines`}),(0,J.jsxs)($,{className:`sidebar-list`,children:[d.length===0&&(0,J.jsx)(Q,{className:`sidebar-empty`,children:e===`ms`?`Tiada topik dijumpai.`:`No topic found.`}),d.map(e=>{let t=e._sys.filename,n=`/docs?id=${t}`,i=o===t,a=f.filter(t=>t.parentTopic===e.title),l=a.length>0,u=a.some(e=>o===e._sys.filename),d=r===t||u;return(0,J.jsxs)(v.Fragment,{children:[(0,J.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`},children:l?(0,J.jsx)(`div`,{onClick:()=>c(t),style:{flexGrow:1,cursor:`pointer`},children:(0,J.jsx)(Q,{className:`sidebar-item ${d?`active-item`:``}`,children:e.title})}):(0,J.jsx)(Tn,{to:n,onClick:s,style:{textDecoration:`none`,flexGrow:1},children:(0,J.jsx)(Q,{className:`sidebar-item ${i?`active-item`:``}`,children:e.title})})}),d&&l&&(0,J.jsx)($,{className:`sidebar-submenu`,sx:{pl:2.5,mt:.5,mb:1,animation:`fadeIn 0.2s ease-in-out`},children:a.map(e=>{let t=e._sys.filename,n=`/docs?id=${t}`,r=o===t;return(0,J.jsx)(Tn,{to:n,onClick:s,style:{textDecoration:`none`,display:`block`,padding:`4px 0`},children:(0,J.jsx)(Q,{className:`sidebar-subitem ${r?`active-subitem`:``}`,sx:{fontSize:`0.95em`,color:r?`#f97316`:`#d1d5db`,transition:`color 0.2s`,"&:hover":{color:`#f97316`}},children:e.title})},t)})})]},t)})]}),(0,J.jsx)(Q,{className:`sidebar-heading sidebar-mt`,children:e===`ms`?`Sokongan`:`Support`}),(0,J.jsx)($,{className:`sidebar-list`,children:p.length>0?p.map(e=>{let t=`/docs?id=${e._sys.filename}`,n=o===e._sys.filename;return(0,J.jsx)(Tn,{to:t,onClick:s,style:{textDecoration:`none`},children:(0,J.jsx)(Q,{className:`sidebar-item ${n?`active-item`:``}`,children:e.title})},e._sys.filename)}):(0,J.jsx)(Tn,{to:`/docs?id=troubleshooting_page`,onClick:s,style:{textDecoration:`none`},children:(0,J.jsx)(Q,{className:`sidebar-item ${o===`troubleshooting_page`?`active-item`:``}`,children:`Troubleshooting`})})})]})})},WC=({theme:e,isDarkMode:t,toggleTheme:n,language:r,toggleLanguage:i,searchTerm:a,setSearchTerm:o,searchFocused:s,setSearchFocused:c,searchResults:l,onSearchResultClick:u,highlightMatch:d,setSearchParams:f,sidebarProps:p,rightToc:m,children:h})=>{let[g,_]=(0,v.useState)(!1),[y,b]=(0,v.useState)(!1),x=()=>_(!g),S=()=>(0,J.jsxs)($,{sx:{p:1},children:[a.length===0&&(0,J.jsx)(Q,{sx:{p:3,textAlign:`center`,color:e.textMuted,fontFamily:`'Inter', sans-serif`,fontSize:`13.5px`},children:r===`ms`?`Taip untuk mula mencari...`:`Type to start searching...`}),a.length>0&&a.length<2&&(0,J.jsx)(Q,{sx:{p:3,textAlign:`center`,color:e.textMuted,fontFamily:`'Inter', sans-serif`,fontSize:`13.5px`},children:r===`ms`?`Taip sekurang-kurangnya 2 huruf...`:`Type at least 2 characters...`}),a.length>=2&&l.length===0&&(0,J.jsxs)(Q,{sx:{p:4,textAlign:`center`,color:e.textMuted,fontFamily:`'Inter', sans-serif`,fontSize:`13.5px`},children:[`Tiada hasil untuk `,(0,J.jsxs)(`strong`,{style:{color:e.textMain},children:[`"`,a,`"`]})]}),(0,J.jsx)(pC,{sx:{pt:0},children:l.map(n=>(0,J.jsxs)(CC,{button:!0,onClick:()=>{u(n),c(!1),b(!1)},sx:{borderRadius:`6px`,mb:.5,p:1.2,display:`flex`,alignItems:`center`,bgcolor:`transparent`,transition:`background 0.1s ease`,"&:hover":{bgcolor:t?`#27272a`:`#f3f4f6`}},children:[(0,J.jsxs)($,{sx:{display:`flex`,alignItems:`center`,justifyContent:`center`,width:32,height:32,borderRadius:`6px`,bgcolor:t?`#18181b`:`#e5e7eb`,color:e.textMuted,mr:2},children:[n.type===`article`&&(0,J.jsx)(BC,{sx:{fontSize:18}}),n.type===`heading`&&(0,J.jsx)(VC,{sx:{fontSize:18}}),n.type===`content`&&(0,J.jsx)(HC,{sx:{fontSize:18}})]}),(0,J.jsx)(OC,{primary:(0,J.jsx)(Q,{sx:{color:e.textMain,fontWeight:n.type===`content`?400:600,fontSize:`14px`,fontFamily:`'Inter', sans-serif`,mb:.2},children:d(n.title)}),secondary:(0,J.jsx)(Q,{sx:{color:e.textMuted,fontSize:`12px`,fontFamily:`'Inter', sans-serif`,display:`-webkit-box`,WebkitLineClamp:1,WebkitBoxOrient:`vertical`,overflow:`hidden`},children:d(n.snippet)})})]},n.id))})]});return(0,J.jsxs)($,{sx:{bgcolor:e.bg,color:e.textBody,minHeight:`100vh`,fontFamily:`'Inter', sans-serif`},children:[(0,J.jsx)(tS,{}),(0,J.jsxs)($,{component:`header`,sx:{position:`sticky`,top:0,zIndex:1100,display:`flex`,alignItems:`center`,justifyContent:`space-between`,height:`64px`,px:{xs:2,md:4},bgcolor:e.headerBg,borderBottom:`1px solid ${e.border}`},children:[(0,J.jsxs)($,{sx:{display:`flex`,alignItems:`center`},children:[(0,J.jsx)(mx,{edge:`start`,onClick:x,sx:{mr:2,display:{md:`none`},color:e.textMain},children:(0,J.jsx)(RC,{})}),(0,J.jsx)($,{component:`img`,src:`/company_banner.png`,alt:`MYSZTECH Logo`,onClick:()=>f({id:`prologue`}),sx:{height:`34px`,cursor:`pointer`,transition:`opacity 0.2s`,"&:hover":{opacity:.8},width:{xs:`150px`,sm:`180px`,md:`248px`},objectFit:`contain`,objectPosition:`left`}})]}),(0,J.jsx)(qx,{onClickAway:()=>c(!1),children:(0,J.jsxs)($,{sx:{position:`relative`,display:{xs:`none`,md:`block`},width:{md:`420px`,lg:`500px`},zIndex:1300},children:[(0,J.jsxs)($,{sx:{display:`flex`,alignItems:`center`,bgcolor:e.searchBg,borderRadius:`8px`,px:2,py:.8,border:`1px solid ${s?t?`#52525b`:`#9ca3af`:`transparent`}`,transition:`border-color 0.15s ease`},children:[(0,J.jsx)(PC,{sx:{color:e.textMuted,fontSize:18,mr:1.5}}),(0,J.jsx)(Ty,{placeholder:r===`ms`?`Cari dokumentasi...`:`Search documentation...`,value:a||``,onChange:e=>o(e.target.value),onFocus:()=>c(!0),sx:{color:e.textMain,flexGrow:1,fontFamily:`'Inter', sans-serif`,fontSize:`14px`}})]}),s&&(0,J.jsx)(hb,{elevation:0,sx:{position:`absolute`,top:`calc(100% + 6px)`,left:0,right:0,bgcolor:t?`#18181b`:`#ffffff`,border:`1px solid ${e.border}`,borderRadius:`8px`,boxShadow:t?`0 10px 25px rgba(0,0,0,0.5)`:`0 10px 25px rgba(0,0,0,0.08)`,maxH:`50vh`,overflowY:`auto`,zIndex:1200},children:S()})]})}),(0,J.jsxs)($,{sx:{display:`flex`,alignItems:`center`,gap:2},children:[(0,J.jsx)(Wx,{onClick:i,startIcon:(0,J.jsx)(LC,{fontSize:`small`}),"aria-label":r===`en`?`Switch website language to Malay`:`Switch website language to English`,title:r===`en`?`Switch to Bahasa Melayu`:`Switch to English`,sx:{minWidth:0,px:1.25,py:.6,borderRadius:`7px`,color:e.textMain,fontFamily:`'Inter', sans-serif`,fontSize:`12px`,fontWeight:600,textTransform:`none`,"&:hover":{bgcolor:t?`#27272a`:`#f3f4f6`},"& .MuiButton-startIcon":{mr:.6}},children:r===`en`?`EN`:`BM`}),(0,J.jsx)(mx,{onClick:n,sx:{color:e.textMain},children:t?(0,J.jsx)(FC,{fontSize:`small`}):(0,J.jsx)(IC,{fontSize:`small`})})]})]}),(0,J.jsxs)($,{sx:{display:`flex`,minHeight:`calc(100vh - 64px)`},children:[(0,J.jsxs)($,{component:`nav`,sx:{width:{md:280},flexShrink:{md:0}},children:[(0,J.jsx)(tC,{variant:`temporary`,open:g,onClose:x,ModalProps:{keepMounted:!0},sx:{display:{xs:`block`,md:`none`},"& .MuiDrawer-paper":{boxSizing:`border-box`,width:280,bgcolor:e.bg,backgroundImage:`none`}},children:p&&(0,J.jsx)(UC,{...p,onMobileClose:x})}),(0,J.jsx)($,{sx:{display:{xs:`none`,md:`block`},height:`100%`},children:p&&(0,J.jsx)(UC,{...p})})]}),(0,J.jsxs)($,{sx:{flexGrow:1,display:`flex`,justifyContent:`flex-start`,alignItems:`flex-start`,minWidth:0},children:[(0,J.jsxs)($,{component:`main`,sx:{p:{xs:2,sm:4,md:6,lg:8},flexGrow:1,width:`100%`,minWidth:0},children:[(0,J.jsxs)($,{onClick:()=>b(!0),sx:{display:{xs:`flex`,md:`none`},mb:4,alignItems:`center`,bgcolor:e.searchBg,borderRadius:`8px`,px:2,py:1,cursor:`pointer`},children:[(0,J.jsx)(PC,{sx:{color:e.textMuted,fontSize:20,mr:1}}),(0,J.jsx)(Q,{sx:{color:e.textMuted,flexGrow:1,fontFamily:`'Inter', sans-serif`,fontSize:`14px`},children:r===`ms`?`Cari topik...`:`Search topic...`})]}),h]}),m&&(0,J.jsx)($,{component:`aside`,sx:{display:{xs:`none`,lg:`block`},width:280,flexShrink:0,p:4,height:`calc(100vh - 64px)`,position:`sticky`,top:`64px`,overflowY:`auto`},children:m})]})]}),(0,J.jsx)(RS,{fullScreen:!0,open:y,onClose:()=>b(!1),PaperProps:{sx:{bgcolor:e.bg,backgroundImage:`none`}},children:(0,J.jsxs)($,{sx:{display:`flex`,flexDirection:`column`,minHeight:`100vh`,bgcolor:e.bg},children:[(0,J.jsxs)($,{sx:{display:`flex`,alignItems:`center`,px:2,py:1.5,borderBottom:`1px solid ${e.border}`,bgcolor:e.headerBg},children:[(0,J.jsx)(mx,{onClick:()=>b(!1),sx:{color:e.textMain,mr:1},children:(0,J.jsx)(zC,{})}),(0,J.jsx)(Ty,{autoFocus:!0,fullWidth:!0,placeholder:r===`ms`?`Cari...`:`Search...`,value:a||``,onChange:e=>o(e.target.value),sx:{color:e.textMain,fontSize:`16px`,fontFamily:`'Inter', sans-serif`}})]}),(0,J.jsx)($,{sx:{overflowY:`auto`,flexGrow:1},children:S()})]})})]})},GC=`Release-Note`,KC=e=>{if(!e)return``;if(typeof e==`string`)return e;if(e.text)return e.text;let t=``;if(Array.isArray(e))for(let n of e)t+=KC(n)+` `;else e.children?t+=KC(e.children):e.props&&e.props.children&&(t+=KC(e.props.children));return t},qC=()=>{let e=sc,[t,n]=(0,v.useState)(!1),[r,i]=(0,v.useState)(``),[a,o]=jn(),s=a.get(`id`),c=a.get(`version`),[l,u]=(0,v.useState)(!0),[d,f]=(0,v.useState)(`en`),[p,m]=(0,v.useState)(null);(0,v.useEffect)(()=>{let e=localStorage.getItem(`mysztech_lang`);(e===`ms`||e===`en`)&&f(e),localStorage.getItem(`mysztech_theme`)===`light`?(u(!1),document.documentElement.setAttribute(`data-theme`,`light`)):document.documentElement.setAttribute(`data-theme`,`dark`)},[]);let h=()=>{let e=d===`en`?`ms`:`en`;f(e),localStorage.setItem(`mysztech_lang`,e),e===`ms`?document.cookie=`googtrans=/en/ms; path=/; SameSite=Lax`:document.cookie=`googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax`,window.location.reload()},g=()=>{let e=!l;u(e),localStorage.setItem(`mysztech_theme`,e?`dark`:`light`),document.documentElement.setAttribute(`data-theme`,e?`dark`:`light`)},_={bg:l?`#111111`:`#ffffff`,sidebarBg:l?`#111111`:`#f9fafb`,headerBg:l?`#111111`:`#ffffff`,searchBg:l?`#1f1f1f`:`#f3f4f6`,textMain:l?`#ffffff`:`#111827`,textBody:l?`#d4d4d8`:`#374151`,textMuted:l?`#a1a1aa`:`#6b7280`,border:l?`#27272a`:`#e5e7eb`,borderHover:l?`#3f3f46`:`#d1d5db`,accent:`#f97316`,accentHover:`#ea580c`,cardBg:l?`#18181b`:`#ffffff`,cardHover:l?`#27272a`:`#f3f4f6`};(0,v.useEffect)(()=>{if(e.length===0)return;let t=s===`troubleshooting_page`||e.some(e=>e._sys.filename===s);(!s||!t)&&o({id:e[0]._sys.filename},{replace:!0})},[!1,s,e,o]);let y=(0,v.useMemo)(()=>{if(r.trim().length<2)return[];let t=r.toLowerCase(),n=[...e.filter(e=>e._sys.filename!==GC),...mc.map(e=>({...e,title:`Release Note ${e.version}`,_sys:{filename:GC},releaseVersion:e.version}))],i=[];return n.forEach(e=>{let n=!1,r=d===`ms`?`Panduan MYSZTECH`:`MYSZTECH Guidelines`,a=`article`;if(e.title&&e.title.toLowerCase().includes(t)&&(n=!0),e.body){let i=KC(e.body),o=i.toLowerCase();if(o.includes(t)){n=!0,a=`content`;let e=o.indexOf(t),s=Math.max(0,e-30),c=Math.min(i.length,e+40+t.length);r=i.substring(s,c).replace(/\s+/g,` `).trim(),s>0&&(r=`...`+r),c<i.length&&(r+=`...`)}}n&&i.push({id:e.releaseVersion?`${e._sys.filename}-${e.releaseVersion}`:e._sys.filename,type:a,articleId:e._sys.filename,releaseVersion:e.releaseVersion,title:e.title,snippet:r})}),i},[r,e,d]),b=e=>!r||!e?e:e.split(RegExp(`(${r})`,`gi`)).map((e,t)=>e.toLowerCase()===r.toLowerCase()?(0,J.jsx)($,{component:`span`,sx:{color:_.accent,fontWeight:`700`},children:e},t):e),x=e=>{o(e.releaseVersion?{id:e.articleId,version:e.releaseVersion}:{id:e.articleId})},S=e=>{e.target instanceof HTMLImageElement&&m({src:e.target.currentSrc||e.target.src,alt:e.target.alt})},C=s===`troubleshooting_page`,w=s===GC,T=w?c?mc.find(e=>e.version===c):mc[0]:null,E=w&&!!c&&!T,D=e=>{o({id:GC,version:e})},O=e=>new Intl.DateTimeFormat(d===`ms`?`ms-MY`:`en-GB`,{day:`numeric`,month:`long`,year:`numeric`}).format(new Date(`${e}T00:00:00`)),ee=e=>(0,J.jsx)($,{className:`tina-content`,onClick:S,sx:{"& img":{maxWidth:`100%`,height:`auto`,borderRadius:`8px`,my:3,mx:`auto`,display:`block`,border:`1px solid ${_.border}`,cursor:`zoom-in`,transition:`opacity 0.2s ease`,"&:hover":{opacity:.88}}},children:(0,J.jsx)($,{dangerouslySetInnerHTML:{__html:hc(e)}})}),k=null;return!C&&!w&&(k=e.find(e=>e._sys.filename===s)||e[0]),(0,J.jsxs)(WC,{theme:_,isDarkMode:l,toggleTheme:g,language:d,toggleLanguage:h,searchTerm:r,setSearchTerm:i,searchFocused:t,setSearchFocused:n,searchResults:y,onSearchResultClick:x,highlightMatch:b,setSearchParams:o,sidebarProps:{language:d,onMobileClose:()=>{}},children:[C?(0,J.jsx)($,{sx:{animation:`fadeIn 0.3s ease-in-out`},children:(0,J.jsx)(NC,{isDarkMode:l,language:d})}):w?(0,J.jsxs)($,{children:[(0,J.jsx)(Q,{variant:`h2`,sx:{fontFamily:`'Sora', sans-serif`,color:_.textMain,fontWeight:`700`,mb:2,letterSpacing:`-1px`,fontSize:{xs:`32px`,md:`42px`},maxWidth:`850px`},children:`Release Note`}),E||mc.length===0?(0,J.jsx)(Q,{sx:{color:_.textMuted,mb:4,fontFamily:`'Inter', sans-serif`},children:mc.length===0?`No release notes are available yet.`:`Release version ${c} is unavailable. Choose a version from the archive below.`}):(0,J.jsxs)($,{sx:{color:_.textBody,fontFamily:`'Inter', sans-serif`,lineHeight:1.8},children:[(0,J.jsxs)(Q,{sx:{color:_.textMain,fontWeight:700,fontSize:`20px`,mb:.5},children:[`Version `,T.version]}),(0,J.jsxs)(Q,{sx:{color:_.textMuted,mb:4},children:[`Released `,O(T.releaseDate)]}),ee(T.body)]}),mc.length>0&&(0,J.jsxs)($,{sx:{mt:6,pt:4,borderTop:`1px solid ${_.border}`,maxWidth:`850px`},children:[(0,J.jsx)(Q,{sx:{color:_.textMain,fontFamily:`'Sora', sans-serif`,fontWeight:700,fontSize:`22px`,mb:2},children:`Release archive`}),(0,J.jsx)($,{sx:{display:`flex`,flexDirection:`column`,gap:1},children:mc.map(e=>{let t=T?.version===e.version;return(0,J.jsxs)($,{component:`button`,type:`button`,onClick:()=>D(e.version),sx:{textAlign:`left`,cursor:`pointer`,width:`100%`,bgcolor:t?_.cardHover:_.cardBg,color:_.textMain,border:`1px solid ${t?_.accent:_.border}`,borderRadius:`8px`,px:2,py:1.5,fontFamily:`'Inter', sans-serif`,"&:hover":{borderColor:_.accent}},children:[(0,J.jsxs)($,{component:`span`,sx:{fontWeight:700},children:[`Version `,e.version]}),(0,J.jsx)($,{component:`span`,sx:{color:_.textMuted,ml:1.5},children:O(e.releaseDate)})]},e.version)})})]})]}):k?(0,J.jsxs)($,{children:[(0,J.jsx)(Q,{variant:`h2`,sx:{fontFamily:`'Sora', sans-serif`,color:_.textMain,fontWeight:`700`,mb:4,letterSpacing:`-1px`,fontSize:{xs:`32px`,md:`42px`},maxWidth:`850px`},children:k.title}),(0,J.jsx)($,{sx:{color:_.textBody,fontFamily:`'Inter', sans-serif`,lineHeight:1.8},children:k.body?ee(k.body):(0,J.jsx)(Q,{sx:{color:_.textMuted,fontStyle:`italic`},children:`Tiada isi kandungan.`})})]}):(0,J.jsx)(Q,{sx:{color:_.textMuted,fontStyle:`italic`},children:`Tiada kandungan dijumpai.`}),(0,J.jsx)(AC,{image:p,onClose:()=>m(null),isDarkMode:l})]})};function JC(){return(0,J.jsx)(wn,{children:(0,J.jsxs)(Lt,{children:[(0,J.jsx)(Ft,{path:`/`,element:(0,J.jsx)(Pt,{to:`/docs`,replace:!0})}),(0,J.jsx)(Ft,{path:`/docs`,element:(0,J.jsx)(qC,{})}),(0,J.jsx)(Ft,{path:`*`,element:(0,J.jsx)(Pt,{to:`/docs`,replace:!0})})]})})}(0,y.createRoot)(document.getElementById(`root`)).render((0,J.jsx)(v.StrictMode,{children:(0,J.jsx)(JC,{})}));