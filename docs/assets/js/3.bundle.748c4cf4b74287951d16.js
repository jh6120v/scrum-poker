(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{706:function(e,t,r){"use strict";r.r(t),function(e){var o,n=r(65),c=r(31),a=r(714),l=r(713);(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;Object(c.c)(n.a,n.c,[{key:"pointSelector",reducer:l.a}]);var s,u,i=a.a;t.default=i,(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&s.register(i,"default","/Users/jamesyu/Documents/my-personal/scrum-poker/src/routes/poker/index.js"),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)}.call(this,r(11)(e))},713:function(e,t,r){"use strict";(function(e){r.d(t,"d",(function(){return f})),r.d(t,"b",(function(){return b})),r.d(t,"c",(function(){return j}));var o,n,c=r(10),a=r.n(c),l=r(19),s=r(31);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(r,!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var d,p,m=Object(l.a)("@@POKER/POINT_SELECTOR"),f=m("POINT_SELECTED_SET"),b=m("POINT_SELECTED_CLEAR"),j=m("POINT_SELECTED_FLIP"),y={isSelect:!1,selected:"",img:1,itemFlip:!0},O=(o={},a()(o,f.type,(function(e,t){var r=t.payload;return i({},e,{isSelect:r.isSelect,selected:r.selected,img:r.img,itemFlip:r.itemFlip})})),a()(o,b.type,(function(e){return i({},e,{isSelect:!1})})),a()(o,j.type,(function(e){return i({},e,{itemFlip:!e.itemFlip})})),o),k=Object(s.a)(y,O),E=k;t.a=E,(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(d.register(m,"actionCreator","/Users/jamesyu/Documents/my-personal/scrum-poker/src/routes/poker/modules/point-selector.js"),d.register(f,"pointSelectedSet","/Users/jamesyu/Documents/my-personal/scrum-poker/src/routes/poker/modules/point-selector.js"),d.register(b,"pointSelectedClear","/Users/jamesyu/Documents/my-personal/scrum-poker/src/routes/poker/modules/point-selector.js"),d.register(j,"pointSelectedFlip","/Users/jamesyu/Documents/my-personal/scrum-poker/src/routes/poker/modules/point-selector.js"),d.register(y,"initialState","/Users/jamesyu/Documents/my-personal/scrum-poker/src/routes/poker/modules/point-selector.js"),d.register(O,"handlers","/Users/jamesyu/Documents/my-personal/scrum-poker/src/routes/poker/modules/point-selector.js"),d.register(k,"reducers","/Users/jamesyu/Documents/my-personal/scrum-poker/src/routes/poker/modules/point-selector.js"),d.register(E,"default","/Users/jamesyu/Documents/my-personal/scrum-poker/src/routes/poker/modules/point-selector.js")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)}).call(this,r(11)(e))},714:function(e,t,r){"use strict";(function(e){var o,n=r(192),c=r.n(n),a=r(0),l=r.n(a),s=r(25),u=r(713),i=r(87),d=r(19),p=r(102);(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);var m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},f=function(){var e=Object(s.d)(),t=Object(a.useState)(!0),r=c()(t,2),o=r[0],n=r[1],m=Object(s.e)((function(e){return e.pointList})).listData,f=Object(s.e)((function(e){return e.pointSelector})),b=f.isSelect,j=f.selected,y=f.img,O=f.itemFlip,k=Object(s.e)((function(e){return e.personal})),E=k.theme,g=k.autoHideCard;Object(a.useEffect)((function(){return e(Object(p.b)()),e(Object(p.d)()),function(){e(Object(u.b)()),n(!0)}}),[e]);var L=Object(a.useCallback)((function(t,r){n(!1),e(Object(u.d)({isSelect:!b,selected:t,img:Object(d.b)(1,13),itemFlip:r})),e(Object(p.e)()),e(Object(p.c)({title:""}))}),[e,b]),v=Object(a.useCallback)((function(){return e(Object(u.c)())}),[e]),C=Object(a.useRef)(),H=Object(a.useCallback)((function(t){C.current.contains(t.target)||(e(Object(u.b)()),e(Object(p.d)()),e(Object(p.b)()))}),[e]);return Object(a.useEffect)((function(){return document.addEventListener("click",H,!0),function(){document.removeEventListener("click",H,!0)}}),[H]),l.a.createElement(i.t,null,l.a.createElement(i.c,{active:b,first:o,duration:400},l.a.createElement(i.h,null,m.map((function(e){return l.a.createElement(i.g,{key:e.point,onClick:function(){return L(e.point,g)}},l.a.createElement(i.d,{borderColor:E.cardList.borderColor},l.a.createElement(i.f,{active:b}),l.a.createElement(i.e,{fontColor:E.cardList.fontColor,bgColor:E.cardList.bgColor},"coffee"===e.point?l.a.createElement(i.b,{width:"80%",height:"50%"}):e.point)))}))),l.a.createElement(i.l,null,l.a.createElement(i.k,{ref:C},l.a.createElement(i.j,{active:!b,onClick:v}),l.a.createElement(i.i,{active:O,duration:400},l.a.createElement(i.q,{className:"img-".concat(y),fontColor:E.cardFront.fontColor,bgColor:E.cardFront.bgColor},l.a.createElement(i.s,null,l.a.createElement(i.r,{active:O}),"coffee"===j?l.a.createElement(i.b,null):j)),l.a.createElement(i.m,{borderColor:E.cardBack.borderColor},l.a.createElement(i.p,null,l.a.createElement(i.o,{active:!O}),l.a.createElement(i.n,{bgColor:E.cardBack.bgColor}))))))))};m(f,"useDispatch{dispatch}\nuseState{[first, setFirst](true)}\nuseSelector{{ listData }}\nuseSelector{{\n        isSelect, selected, img, itemFlip\n    }}\nuseSelector{{ theme, autoHideCard }}\nuseEffect{}\nuseCallback{select}\nuseCallback{flip}\nuseRef{node}\nuseCallback{resume}\nuseEffect{}",(function(){return[s.d,s.e,s.e,s.e]}));var b,j,y=f;t.a=y,(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(b.register(f,"Poker","/Users/jamesyu/Documents/my-personal/scrum-poker/src/routes/poker/containers/poker.js"),b.register(y,"default","/Users/jamesyu/Documents/my-personal/scrum-poker/src/routes/poker/containers/poker.js")),(j="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&j(e)}).call(this,r(11)(e))}}]);