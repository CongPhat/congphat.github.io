(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{187:function(e,t){},189:function(e,t){},203:function(e,t){},205:function(e,t){},233:function(e,t){},235:function(e,t){},236:function(e,t){},241:function(e,t){},243:function(e,t){},250:function(e,t){},252:function(e,t){},270:function(e,t){},273:function(e,t){},289:function(e,t){},292:function(e,t){},309:function(e,t,n){},310:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(41),c=n.n(o),i=n(30),u=n(78),l=n.n(u),s=n(37),f=n(6),m=n(38),p=n(52),O=n.n(p),d=m.a.LOGIN_BEFORE;function g(){return a.a.createElement("div",{className:j.a.container},a.a.createElement("div",{className:j.a.loadingbar},a.a.createElement("div",{className:j.a.progressbar})))}function b(e){var t=e.map((function(e,t){return a.a.createElement(f.a,{key:t,path:e.path,exact:e.exact,component:e.main})}));return a.a.createElement(f.c,null,t)}var h=n(40),y=n.n(h),v=n(53),j=n.n(v),E=y()({loader:function(){return Promise.all([n.e(3),n.e(5)]).then(n.bind(null,528))},loading:g}),w=[{path:"/login",exact:!0,main:function(e){return e.match,e.location,e.history,a.a.createElement(E,null)}}],L=n(90),P=n.n(L),D=y()({loader:function(){return n.e(4).then(n.bind(null,524))},loading:g}),I=y()({loader:function(){return n.e(7).then(n.bind(null,529))},loading:g}),N=[{path:"/",exact:!0,main:function(e){return e.match,e.location,e.history,a.a.createElement(D,null)}},{path:"/todolist",exact:!0,main:function(e){return e.match,e.location,e.history,a.a.createElement(I,null)}},{path:"",exact:!0,main:function(){return a.a.createElement("div",null,"404")}}],S=function(e){return Object(f.f)((function(t){return t.history,a.a.createElement(a.a.Fragment,null,a.a.createElement("header",null,"login roi ne"),a.a.createElement(e,null))}))}((function(e){return P()(e),a.a.createElement(a.a.Fragment,null,b(N))})),k=function(e){return Object(f.f)((function(t){var n=t.history,o=Object(r.useState)(!1),c=l()(o,2),i=c[0],u=c[1],f=Object(s.c)((function(e){return e.login.privateLogin})),m=Object(s.b)();return Object(r.useEffect)((function(){var e=localStorage.getItem("jwtToken");e?(O.a.defaults.headers.common.Authorization=e,m({type:d})):n.push("/login"),u(!0),console.log(O.a.defaults),O.a.interceptors.response.use((function(e){return e}),(function(e){var t=e.response.status;return console.log(t),Promise.reject(e)}))}),[]),a.a.createElement(a.a.Fragment,null,i&&a.a.createElement(e,{privateLogin:f}))}))}((function(e){var t=e.privateLogin;return a.a.createElement(a.a.Fragment,null,t?a.a.createElement(S,null):b(w))})),x=n(29),F=n(42),G=n.n(F),_=n(152),J=n.n(_),T="ADD_TODO_LIST";function R(e,t){var n,r=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)),r}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){G()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var B={myTodoList:[{id:0,work:"Đi học"},{id:1,work:"Đi làm"}]},Q=n(77),U=n.n(Q);function z(e,t){var n,r=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)),r}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){G()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var K=m.a.LOGIN,X=m.a.LOGIN_BEFORE,Z={privateLogin:!1,dataUser:{name:"",id:""}},q=Object(x.b)({toDoList:function(e,t){var n=0<arguments.length&&void 0!==e?e:B,r=1<arguments.length?t:void 0,a=n.myTodoList;switch(r.type){case T:var o=0===a.length?0:a.length,c=[].concat(J()(a),[{id:o,work:r.value}]);return A(A({},n),{},{myTodoList:c});default:return n}},login:function(e,t){var n=0<arguments.length&&void 0!==e?e:Z,r=1<arguments.length?t:void 0;switch(r.type){case K:var a=r.value,o=JSON.parse(JSON.stringify(U.a.decode(a)));return localStorage.setItem("jwtToken",r.value),Y(Y({},n),{},{privateLogin:!0,dataUser:{name:o.name,id:o.iat}});case X:var c=localStorage.getItem("jwtToken"),i=JSON.parse(JSON.stringify(U.a.decode(c)));return Y(Y({},n),{},{privateLogin:!0,dataUser:{name:i.name,id:i.iat}});default:return n}}}),H=Object(x.c)(q);n(309),c.a.render(a.a.createElement(s.a,{store:H},a.a.createElement(i.a,null,a.a.createElement(k,null))),document.getElementById("root"))},38:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={LOGIN:"LOGIN",LOGIN_BEFORE:"LOGIN_BEFORE"}},53:function(e,t,n){e.exports={container:"_3YIlsylFJGdhDdsLQKjzjJ",loadingbar:"_2HEcyPQUXRZtYAGxzkljDG",progressbar:"_1QDBZ7sIrQR4WA-RL-vxaA","progress-animation":"_3uO4cFKMYaA7SQyq61lxXo"}}},[[310,1,2]]]);