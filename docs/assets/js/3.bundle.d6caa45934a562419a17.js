(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{452:function(e,t,r){"use strict";r.r(t),function(e){var o,n=r(53),c=r(29),a=r(460),s=r(136),l=r(459);(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;Object(c.c)(n.a,n.c,[{key:"pointList",reducer:s.a},{key:"pointSelector",reducer:l.a}]);var u,i,d=a.a;t.default=d,(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&u.register(d,"default","/Users/jamesyu/Documents/my-personal/scrum-poker/src/routes/poker/index.js"),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)}.call(this,r(13)(e))},459:function(e,t,r){"use strict";(function(e){r.d(t,"d",(function(){return m})),r.d(t,"b",(function(){return b})),r.d(t,"c",(function(){return j}));var o,n,c=r(17),a=r.n(c),s=r(23),l=r(29);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(r,!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var d,p,f=Object(s.a)("@@POKER/POINT_SELECTOR"),m=f("POINT_SELECTED_SET"),b=f("POINT_SELECTED_CLEAR"),j=f("POINT_SELECTED_FLIP"),y={isSelect:!1,selected:"",img:1,itemFlip:!0},O=(o={},a()(o,m.type,(function(e,t){var r=t.payload;return i({},e,{isSelect:r.isSelect,selected:r.selected,img:r.img,itemFlip:!0})})),a()(o,b.type,(function(e){return i({},e,{isSelect:!1})})),a()(o,j.type,(function(e){return i({},e,{itemFlip:!e.itemFlip})})),o),E=Object(l.a)(y,O),k=E;t.a=k,(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(d.register(f,"actionCreator","/Users/jamesyu/Documents/my-personal/scrum-poker/src/routes/poker/modules/point-selector.js"),d.register(m,"pointSelectedSet","/Users/jamesyu/Documents/my-personal/scrum-poker/src/routes/poker/modules/point-selector.js"),d.register(b,"pointSelectedClear","/Users/jamesyu/Documents/my-personal/scrum-poker/src/routes/poker/modules/point-selector.js"),d.register(j,"pointSelectedFlip","/Users/jamesyu/Documents/my-personal/scrum-poker/src/routes/poker/modules/point-selector.js"),d.register(y,"initialState","/Users/jamesyu/Documents/my-personal/scrum-poker/src/routes/poker/modules/point-selector.js"),d.register(O,"handlers","/Users/jamesyu/Documents/my-personal/scrum-poker/src/routes/poker/modules/point-selector.js"),d.register(E,"reducers","/Users/jamesyu/Documents/my-personal/scrum-poker/src/routes/poker/modules/point-selector.js"),d.register(k,"default","/Users/jamesyu/Documents/my-personal/scrum-poker/src/routes/poker/modules/point-selector.js")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)}).call(this,r(13)(e))},460:function(e,t,r){"use strict";(function(e){var o,n=r(453),c=r.n(n),a=r(0),s=r.n(a),l=r(40),u=r(459),i=r(138),d=r(23),p=r(147);(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);var f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},m=function(){var e=Object(l.d)(),t=Object(a.useState)(!0),r=c()(t,2),o=r[0],n=r[1],f=Object(l.e)((function(e){return e.pointList})).listData,m=Object(l.e)((function(e){return e.pointSelector})),b=m.isSelect,j=m.selected,y=m.img,O=m.itemFlip;Object(a.useEffect)((function(){return function(){e(Object(u.b)()),n(!0)}}),[e]),Object(a.useEffect)((function(){e(Object(p.b)()),e(Object(p.d)())}),[e]);var E=Object(a.useCallback)((function(t){n(!1),e(Object(u.d)({isSelect:!b,selected:t,img:Object(d.b)(1,13)})),e(Object(p.e)()),e(Object(p.c)({title:""}))}),[e,b]),k=Object(a.useCallback)((function(){return e(Object(u.c)())}),[e]),v=Object(a.useRef)(),L=Object(a.useCallback)((function(t){v.current.contains(t.target)||(e(Object(u.b)()),e(Object(p.d)()),e(Object(p.b)()))}),[e]);return Object(a.useEffect)((function(){return document.addEventListener("click",L,!0),function(){document.removeEventListener("click",L,!0)}}),[L]),s.a.createElement(i.t,null,s.a.createElement(i.c,{active:b,first:o,duration:400},s.a.createElement(i.h,null,f.map((function(e){return s.a.createElement(i.g,{key:e.point,onClick:function(){return E(e.point)}},s.a.createElement(i.d,null,s.a.createElement(i.f,{active:b}),s.a.createElement(i.e,null,"coffee"===e.point?s.a.createElement(i.b,{width:"80%",height:"50%"}):e.point)))}))),s.a.createElement(i.l,null,s.a.createElement(i.k,{ref:v},s.a.createElement(i.j,{active:!b,onClick:k}),s.a.createElement(i.i,{active:O,duration:400},s.a.createElement(i.q,{className:"img-".concat(y)},s.a.createElement(i.s,null,s.a.createElement(i.r,{active:O}),"coffee"===j?s.a.createElement(i.b,null):j)),s.a.createElement(i.m,null,s.a.createElement(i.p,null,s.a.createElement(i.o,{active:!O}),s.a.createElement(i.n,null))))))))};f(m,"useDispatch{dispatch}\nuseState{[first, setFirst](true)}\nuseSelector{{ listData }}\nuseSelector{{\n        isSelect, selected, img, itemFlip\n    }}\nuseEffect{}\nuseEffect{}\nuseCallback{select}\nuseCallback{flip}\nuseRef{node}\nuseCallback{resume}\nuseEffect{}",(function(){return[l.d,l.e,l.e]}));var b,j,y=m;t.a=y,(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(b.register(m,"Poker","/Users/jamesyu/Documents/my-personal/scrum-poker/src/routes/poker/containers/poker.js"),b.register(y,"default","/Users/jamesyu/Documents/my-personal/scrum-poker/src/routes/poker/containers/poker.js")),(j="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&j(e)}).call(this,r(13)(e))}}]);