(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{445:function(e,t,r){"use strict";r.r(t),function(e){var o,a=r(453),n=r(55),c=r(54),s=r(456),l=r(451),u=r(452);(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;Object(c.c)(n.a,n.c,[{key:"pointList",reducer:l.a},{key:"pointSelector",reducer:u.a}]),n.b.run(a.a);var i,d,p=s.a;t.default=p,(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&i.register(p,"default","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/index.js"),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&d(e)}.call(this,r(15)(e))},451:function(e,t,r){"use strict";(function(e){r.d(t,"b",(function(){return p})),r.d(t,"c",(function(){return f}));var o,a=r(29),n=r.n(a),c=r(49),s=r(54);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var u,i,d=Object(c.a)("@@POKER/POINT_LIST"),p=d("LIST_DATA_FETCH"),f=d("LIST_DATA_SET"),b={listData:[],cache:!1},m=n()({},f.type,(function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(r,!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,{listData:t.payload.listData,cache:!0})})),j=Object(s.a)(b,m),O=j;t.a=O,(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(u.register(d,"actionCreator","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/modules/point-list.js"),u.register(p,"pointListDataFetch","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/modules/point-list.js"),u.register(f,"pointListDataSet","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/modules/point-list.js"),u.register(b,"initialState","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/modules/point-list.js"),u.register(m,"handlers","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/modules/point-list.js"),u.register(j,"reducers","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/modules/point-list.js"),u.register(O,"default","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/modules/point-list.js")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)}).call(this,r(15)(e))},452:function(e,t,r){"use strict";(function(e){r.d(t,"d",(function(){return b})),r.d(t,"b",(function(){return m})),r.d(t,"c",(function(){return j}));var o,a,n=r(29),c=r.n(n),s=r(49),l=r(54);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(r,!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var d,p,f=Object(s.a)("@@POKER/POINT_SELECTOR"),b=f("POINT_SELECTED_SET"),m=f("POINT_SELECTED_CLEAR"),j=f("POINT_SELECTED_FLIP"),O={isSelect:!1,selected:"",img:1,itemFlip:!0},L=(o={},c()(o,b.type,(function(e,t){var r=t.payload;return i({},e,{isSelect:r.isSelect,selected:r.selected,img:r.img,itemFlip:!0})})),c()(o,m.type,(function(e){return i({},e,{isSelect:!1})})),c()(o,j.type,(function(e){return i({},e,{itemFlip:!e.itemFlip})})),o),k=Object(l.a)(O,L),v=k;t.a=v,(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(d.register(f,"actionCreator","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/modules/point-selector.js"),d.register(b,"pointSelectedSet","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/modules/point-selector.js"),d.register(m,"pointSelectedClear","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/modules/point-selector.js"),d.register(j,"pointSelectedFlip","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/modules/point-selector.js"),d.register(O,"initialState","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/modules/point-selector.js"),d.register(L,"handlers","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/modules/point-selector.js"),d.register(k,"reducers","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/modules/point-selector.js"),d.register(v,"default","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/modules/point-selector.js")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)}).call(this,r(15)(e))},453:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return b}));var o,a=r(36),n=r.n(a),c=r(69),s=r(451),l=r(454);(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);var u,i,d=n.a.mark(f),p=n.a.mark(b);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;function f(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.d)(s.b.type,l.a);case 2:case"end":return e.stop()}}),d)}function b(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.a)([f()]);case 2:case"end":return e.stop()}}),p)}(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(u.register(f,"watchPointListDataFetch","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/sagas/index.js"),u.register(b,"rootSaga","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/sagas/index.js")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)}).call(this,r(15)(e))},454:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return m}));var o,a=r(36),n=r.n(a),c=r(69),s=r(455),l=r(131),u=r(51),i=r(451),d=r(181);(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);var p,f,b=n.a.mark(m);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;function m(){var e;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(c.c)(Object(d.c)());case 3:return t.next=5,Object(c.b)(s.a);case 5:return e=t.sent,t.next=8,Object(c.c)(Object(l.b)({key:u.d,value:e}));case 8:return t.next=10,Object(c.c)(Object(i.c)({listData:e}));case 10:return t.next=12,Object(c.c)(Object(d.b)());case 12:t.next=18;break;case 14:return t.prev=14,t.t0=t.catch(0),t.next=18,Object(c.c)(Object(d.b)());case 18:case"end":return t.stop()}}),b,null,[[0,14]])}(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&p.register(m,"fetchPointListData","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/sagas/poker.js"),(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&f(e)}).call(this,r(15)(e))},455:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return l}));var o,a=r(224),n=r.n(a);r(446);(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var c,s,l=function(){return n.a.create()({url:"https://my-json-server.typicode.com/jh6120v/scrum-poker/point-list",method:"get",responseType:"json",headers:{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/json"}}).then((function(e){return e.data})).catch((function(e){throw e}))};(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&c.register(l,"getPointListDataApi","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/sagas/api/index.js"),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)}).call(this,r(15)(e))},456:function(e,t,r){"use strict";(function(e){var o,a=r(447),n=r.n(a),c=r(0),s=r.n(c),l=r(35),u=r(451),i=r(452),d=r(133),p=r(49),f=r(143);(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);var b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},m=function(){var e=Object(l.d)(),t=Object(c.useState)(!0),r=n()(t,2),o=r[0],a=r[1],b=Object(l.e)((function(e){return e.pointList})),m=b.listData,j=b.cache,O=Object(l.e)((function(e){return e.pointSelector})),L=O.isSelect,k=O.selected,v=O.img,y=O.itemFlip;Object(c.useEffect)((function(){return!1===j&&e(Object(u.b)()),function(){e(Object(i.b)()),a(!0)}}),[e]),Object(c.useEffect)((function(){e(Object(f.b)()),e(Object(f.d)())}),[e]);var g=Object(c.useCallback)((function(t){a(!1),e(Object(i.d)({isSelect:!L,selected:t,img:Object(p.b)(1,13)})),e(Object(f.e)()),e(Object(f.c)({title:""}))}),[e,L]),H=Object(c.useCallback)((function(){return e(Object(i.c)())}),[e]),G=Object(c.useRef)(),D=Object(c.useCallback)((function(t){G.current.contains(t.target)||(e(Object(i.b)()),e(Object(f.d)()),e(Object(f.b)()))}),[e]);return Object(c.useEffect)((function(){return document.addEventListener("click",D,!0),function(){document.removeEventListener("click",D,!0)}}),[D]),s.a.createElement(d.b,{active:L,first:o,duration:400},s.a.createElement(d.g,null,m.map((function(e){return s.a.createElement(d.f,{key:e.point,onClick:function(){return g(e.point)}},s.a.createElement(d.c,null,s.a.createElement(d.e,{active:L}),s.a.createElement(d.d,null,"coffee"===e.point?"☕":e.point)))}))),s.a.createElement(d.k,null,s.a.createElement(d.j,{ref:G},s.a.createElement(d.i,{active:!L,onClick:H}),s.a.createElement(d.h,{active:y,duration:400},s.a.createElement(d.p,{className:"img-".concat(v)},s.a.createElement(d.r,null,s.a.createElement(d.q,{active:y}),"coffee"===k?"☕":k)),s.a.createElement(d.l,null,s.a.createElement(d.o,null,s.a.createElement(d.n,{active:!y}),s.a.createElement(d.m,null)))))))};b(m,"useDispatch{dispatch}\nuseState{[first, setFirst](true)}\nuseSelector{{ listData, cache }}\nuseSelector{{\n        isSelect, selected, img, itemFlip\n    }}\nuseEffect{}\nuseEffect{}\nuseCallback{select}\nuseCallback{flip}\nuseRef{node}\nuseCallback{resume}\nuseEffect{}",(function(){return[l.d,l.e,l.e]}));var j,O,L=m;t.a=L,(j="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(j.register(m,"Poker","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/containers/poker.js"),j.register(L,"default","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/containers/poker.js")),(O="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&O(e)}).call(this,r(15)(e))}}]);