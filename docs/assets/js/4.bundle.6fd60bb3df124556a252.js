(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{704:function(e,t,r){"use strict";r.r(t),function(e){var o,c=r(65),n=r(30),a=r(712),l=r(711);(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;Object(n.c)(c.a,c.c,[{key:"pointSelector",reducer:l.a}]);var s,i,u=a.a;t.default=u,(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&s.register(u,"default","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/index.js"),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)}.call(this,r(13)(e))},711:function(e,t,r){"use strict";(function(e){r.d(t,"d",(function(){return m})),r.d(t,"b",(function(){return b})),r.d(t,"c",(function(){return j}));var o,c,n=r(11),a=r.n(n),l=r(27),s=r(30);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(r,!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&c(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var d,p,f=Object(l.a)("@@POKER/POINT_SELECTOR"),m=f("POINT_SELECTED_SET"),b=f("POINT_SELECTED_CLEAR"),j=f("POINT_SELECTED_FLIP"),O={isSelect:!1,selected:"",img:1,itemFlip:!0},k=(o={},a()(o,m.type,(function(e,t){var r=t.payload;return u({},e,{isSelect:r.isSelect,selected:r.selected,img:r.img,itemFlip:r.itemFlip})})),a()(o,b.type,(function(e){return u({},e,{isSelect:!1})})),a()(o,j.type,(function(e){return u({},e,{itemFlip:!e.itemFlip})})),o),E=Object(s.a)(O,k),g=E;t.a=g,(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(d.register(f,"actionCreator","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/modules/point-selector.js"),d.register(m,"pointSelectedSet","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/modules/point-selector.js"),d.register(b,"pointSelectedClear","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/modules/point-selector.js"),d.register(j,"pointSelectedFlip","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/modules/point-selector.js"),d.register(O,"initialState","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/modules/point-selector.js"),d.register(k,"handlers","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/modules/point-selector.js"),d.register(E,"reducers","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/modules/point-selector.js"),d.register(g,"default","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/modules/point-selector.js")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)}).call(this,r(13)(e))},712:function(e,t,r){"use strict";(function(e){var o,c=r(172),n=r.n(c),a=r(0),l=r.n(a),s=r(28),i=r(711),u=r(87),d=r(27),p=r(101);(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);var f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},m=function(){var e=Object(s.d)(),t=Object(a.useState)(!0),r=n()(t,2),o=r[0],c=r[1],f=Object(s.e)((function(e){return e.pointList})).listData,m=Object(s.e)((function(e){return e.pointSelector})),b=m.isSelect,j=m.selected,O=m.img,k=m.itemFlip,E=Object(s.e)((function(e){return e.personal})),g=E.theme,L=E.autoHideCard;Object(a.useEffect)((function(){return e(Object(p.b)()),e(Object(p.d)()),function(){e(Object(i.b)()),c(!0)}}),[e]);var v=Object(a.useCallback)((function(t,r){c(!1),e(Object(i.d)({isSelect:!b,selected:t,img:Object(d.b)(1,13),itemFlip:r})),e(Object(p.e)()),e(Object(p.c)({title:""}))}),[e,b]),C=Object(a.useCallback)((function(){return e(Object(i.c)())}),[e]),y=Object(a.useRef)(),S=Object(a.useCallback)((function(t){y.current.contains(t.target)||(e(Object(i.b)()),e(Object(p.d)()),e(Object(p.b)()))}),[e]);return Object(a.useEffect)((function(){return document.addEventListener("click",S,!0),function(){document.removeEventListener("click",S,!0)}}),[S]),l.a.createElement(u.t,null,l.a.createElement(u.c,{active:b,first:o,duration:400},l.a.createElement(u.h,null,f.map((function(e){return l.a.createElement(u.g,{key:e.point,onClick:function(){return v(e.point,L)}},l.a.createElement(u.d,{borderColor:g.cardList.borderColor},l.a.createElement(u.f,{active:b}),l.a.createElement(u.e,{fontColor:g.cardList.fontColor,bgColor:g.cardList.bgColor},"coffee"===e.point?l.a.createElement(u.b,{width:"80%",height:"50%"}):e.point)))}))),l.a.createElement(u.l,null,l.a.createElement(u.k,{ref:y},l.a.createElement(u.j,{active:!b,onClick:C}),l.a.createElement(u.i,{active:k,duration:400},l.a.createElement(u.q,{className:"img-".concat(O),fontColor:g.cardFront.fontColor,bgColor:g.cardFront.bgColor},l.a.createElement(u.s,null,l.a.createElement(u.r,{active:k}),"coffee"===j?l.a.createElement(u.b,null):j)),l.a.createElement(u.m,{borderColor:g.cardBack.borderColor},l.a.createElement(u.p,null,l.a.createElement(u.o,{active:!k}),l.a.createElement(u.n,{bgColor:g.cardBack.bgColor,fontColor:g.cardBack.fontColor},"Scrum Poker"))))))))};f(m,"useDispatch{dispatch}\nuseState{[first, setFirst](true)}\nuseSelector{{ listData }}\nuseSelector{{\n        isSelect, selected, img, itemFlip\n    }}\nuseSelector{{ theme, autoHideCard }}\nuseEffect{}\nuseCallback{select}\nuseCallback{flip}\nuseRef{node}\nuseCallback{resume}\nuseEffect{}",(function(){return[s.d,s.e,s.e,s.e]}));var b,j,O=m;t.a=O,(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(b.register(m,"Poker","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/containers/poker.js"),b.register(O,"default","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/containers/poker.js")),(j="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&j(e)}).call(this,r(13)(e))}}]);