(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{429:function(e,t,o){"use strict";(function(e){o.d(t,"a",function(){return w});var n,r=o(11),a=o.n(r),c=o(28),i=o.n(c),u=o(14),l=o.n(u),s=o(54),d=o.n(s),f=o(0),p=o(71);function b(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)}return o}function v(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?b(Object(o),!0).forEach(function(t){l()(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):b(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);var y,j,w=function(e,t){var o=t||{},n=o.showError,r=void 0===n||n,c=o.showSuccess,u=void 0!==c&&c,l=Object(f.useState)({status:"ready",value:null,error:null}),s=d()(l,2),b=s[0],y=s[1],j=function(e){return y(function(t){return v(v({},t),{},{status:"ready",value:e})}),u&&Object(p.a)({type:"success",notificationProps:{message:(null===e||void 0===e?void 0:e.message)||"Success"}}),Promise.resolve(e)},w=function(e){var t,o;(y(function(t){return v(v({},t),{},{status:"error",error:e})}),r)&&Object(p.a)({type:"error",notificationProps:{message:(null===e||void 0===e?void 0:null===(t=e.response)||void 0===t?void 0:null===(o=t.data)||void 0===o?void 0:o.message)||"Something error"}});return Promise.reject(e)};return v({execute:Object(f.useCallback)(i()(a.a.mark(function t(){var o=arguments;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return y(function(e){return v(v({},e),{},{status:"loading",value:null,error:null})}),t.next=3,e.apply(void 0,o).then(function(e){return j(e)}).catch(function(e){return w(e)});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}},t)})),[e])},b)};("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e})(w,'useState{[ state, setState ]({\r\n        status: "ready",\r\n        value: null,\r\n        error: null,\r\n    })}\nuseCallback{execute}'),(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&y.register(w,"useAsync","D:\\Project\\2020\\inital-project-frontend\\src\\services\\hook.ts"),(j="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&j(e)}).call(this,o(20)(e))},432:function(e,t,o){"use strict";(function(e){var n,r=o(114);(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);var a=function(e,t){for(var o={},n=function(n){o[t[n]]=Object(r.c)(function(o){return o[e][t[n]]})},a=0;a<t.length;a++)n(a);return o};("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e})(a,"useSelector{}",function(){return[r.c]});var c,i,u=a;t.a=u,(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(c.register(a,"useMemoSelector","D:\\Project\\2020\\inital-project-frontend\\src\\shared\\hook\\useMemoSelector.tsx"),c.register(u,"default","D:\\Project\\2020\\inital-project-frontend\\src\\shared\\hook\\useMemoSelector.tsx")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)}).call(this,o(20)(e))},586:function(e,t,o){"use strict";o.r(t),function(e){var n,r=o(10),a=o.n(r),c=o(14),i=o.n(c),u=o(416),l=o.n(u),s=o(432),d=o(195),f=o(0),p=o.n(f),b=o(114),v=o(44),y=o(429);function j(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)}return o}function w(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?j(Object(o),!0).forEach(function(t){i()(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):j(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);var O="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},m=o(587),g=function(e){l()(e);var t=Object(b.b)(),o=Object(s.a)("example",["value","data"]),n=o.value,r=(o.data,Object(y.a)(v.d,{showError:!0,showSuccess:!0})),c=r.execute,i=(r.value,r.status);return p.a.createElement(p.a.Fragment,null,n,a()("button",{onClick:function(){return t(Object(d.c)(5))}},void 0,"TăngP"),a()("button",{onClick:function(){return t(Object(d.a)(5))}},void 0,"GiảmP"),a()("input",{type:"file",onChange:function(e){var t=new FileReader,o=e.target.files[0];t.onload=function(e){var n=t.result,r=w(w({},JSON.parse(n)),{},{TEST:{USA:"TEST",VN:"123"}}),a=new Blob([JSON.stringify(r)],{type:"application/json"});m.saveAs(a,o.name)},t.readAsText(o,"UTF-8")},accept:"json"}),a()("button",{onClick:function(){c({username:"tranduc hung",password:"123123"})}},void 0,"loading"==i?"loading":"Call api"))};O(g,"useDispatch{dispatch}\nuseMemoSelector{{ value, data }}\nuseAsync{{ execute, value: res, status }}",function(){return[b.b,s.a,y.a]});var h,L,H=g;t.default=H,(h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(h.register(g,"Example","D:\\Project\\2020\\inital-project-frontend\\src\\modules\\Example\\index.tsx"),h.register(H,"default","D:\\Project\\2020\\inital-project-frontend\\src\\modules\\Example\\index.tsx")),(L="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&L(e)}.call(this,o(20)(e))},587:function(e,t,o){(function(o){var n,r,a;r=[],void 0===(a="function"==typeof(n=function(){"use strict";function t(e,t,o){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){c(n.response,t,o)},n.onerror=function(){},n.send()}function n(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function r(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(o){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var a="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof o&&o.global===o?o:void 0,c=a.saveAs||("object"!=typeof window||window!==a?function(){}:"download"in HTMLAnchorElement.prototype?function(e,o,c){var i=a.URL||a.webkitURL,u=document.createElement("a");o=o||e.name||"download",u.download=o,u.rel="noopener","string"==typeof e?(u.href=e,u.origin===location.origin?r(u):n(u.href)?t(e,o,c):r(u,u.target="_blank")):(u.href=i.createObjectURL(e),setTimeout(function(){i.revokeObjectURL(u.href)},4e4),setTimeout(function(){r(u)},0))}:"msSaveOrOpenBlob"in navigator?function(e,o,a){if(o=o||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(function(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}(e,a),o);else if(n(e))t(e,o,a);else{var c=document.createElement("a");c.href=e,c.target="_blank",setTimeout(function(){r(c)})}}:function(e,o,n,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof e)return t(e,o,n);var c="application/octet-stream"===e.type,i=/constructor/i.test(a.HTMLElement)||a.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||c&&i)&&"object"==typeof FileReader){var l=new FileReader;l.onloadend=function(){var e=l.result;e=u?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=e:location=e,r=null},l.readAsDataURL(e)}else{var s=a.URL||a.webkitURL,d=s.createObjectURL(e);r?r.location=d:location.href=d,r=null,setTimeout(function(){s.revokeObjectURL(d)},4e4)}});a.saveAs=c.saveAs=c,e.exports=c})?n.apply(t,r):n)||(e.exports=a)}).call(this,o(9))}}]);