(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{414:function(e,t,r){"use strict";r.r(t),function(e){var n,o=r(420),a=r(63),s=r(72),c=r(424),i=r(418),u=r(419);(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;Object(s.c)(a.a,a.c,[{key:"pointList",reducer:i.a},{key:"pointSelector",reducer:u.a}]),a.b.run(o.a);var l,d,f=c.a;t.default=f,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&l.register(f,"default","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/index.js"),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&d(e)}.call(this,r(19)(e))},418:function(e,t,r){"use strict";(function(e){r.d(t,"b",(function(){return f})),r.d(t,"c",(function(){return p}));var n,o=r(74),a=r.n(o),s=r(71),c=r(72);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var u,l,d=Object(s.a)("@@POKER/POINT_LIST"),f=d("LIST_DATA_FETCH"),p=d("LIST_DATA_SET"),b={listData:[]},m=a()({},p.type,(function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(r,!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,{listData:t.payload.listData})})),g=Object(c.a)(b,m),j=g;t.a=j,(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(u.register(d,"actionCreator","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/modules/point-list.js"),u.register(f,"pointListDataFetch","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/modules/point-list.js"),u.register(p,"pointListDataSet","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/modules/point-list.js"),u.register(b,"initialState","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/modules/point-list.js"),u.register(m,"handlers","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/modules/point-list.js"),u.register(g,"reducers","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/modules/point-list.js"),u.register(j,"default","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/modules/point-list.js")),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&l(e)}).call(this,r(19)(e))},419:function(e,t,r){"use strict";(function(e){r.d(t,"d",(function(){return b})),r.d(t,"b",(function(){return m})),r.d(t,"c",(function(){return g}));var n,o,a=r(74),s=r.n(a),c=r(71),i=r(72);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(r,!0).forEach((function(t){s()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var d,f,p=Object(c.a)("@@POKER/POINT_SELECTOR"),b=p("POINT_SELECTED_SET"),m=p("POINT_SELECTED_CLEAR"),g=p("POINT_SELECTED_FLIP"),j={isSelect:!1,selected:"",img:"1",itemFlip:!0},k=(n={},s()(n,b.type,(function(e,t){var r=t.payload;return l({},e,{isSelect:r.isSelect,selected:r.selected,img:r.img})})),s()(n,m.type,(function(e){return l({},e,{},j)})),s()(n,g.type,(function(e){return l({},e,{itemFlip:!e.itemFlip})})),n),v=Object(i.a)(j,k),y=v;t.a=y,(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(d.register(p,"actionCreator","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/modules/point-selector.js"),d.register(b,"pointSelectedSet","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/modules/point-selector.js"),d.register(m,"pointSelectedClear","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/modules/point-selector.js"),d.register(g,"pointSelectedFlip","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/modules/point-selector.js"),d.register(j,"initialState","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/modules/point-selector.js"),d.register(k,"handlers","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/modules/point-selector.js"),d.register(v,"reducers","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/modules/point-selector.js"),d.register(y,"default","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/modules/point-selector.js")),(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&f(e)}).call(this,r(19)(e))},420:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return b}));var n,o=r(29),a=r.n(o),s=r(62),c=r(418),i=r(421);(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);var u,l,d=a.a.mark(p),f=a.a.mark(b);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;function p(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.d)(c.b.type,i.a);case 2:case"end":return e.stop()}}),d)}function b(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.a)([p()]);case 2:case"end":return e.stop()}}),f)}(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(u.register(p,"watchPointListDataFetch","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/sagas/index.js"),u.register(b,"rootSaga","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/sagas/index.js")),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&l(e)}).call(this,r(19)(e))},421:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return m}));var n,o=r(29),a=r.n(o),s=r(62),c=r(422),i=r(125),u=r(423),l=r(418),d=r(172);(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);var f,p,b=a.a.mark(m);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;function m(){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(s.c)(Object(d.c)());case 3:return t.next=5,Object(s.b)(c.a);case 5:return e=t.sent,t.next=8,Object(s.c)(Object(i.b)({key:u.a,value:e}));case 8:return t.next=10,Object(s.c)(Object(l.c)({listData:e}));case 10:return t.next=12,Object(s.c)(Object(d.b)());case 12:t.next=18;break;case 14:return t.prev=14,t.t0=t.catch(0),t.next=18,Object(s.c)(Object(d.b)());case 18:case"end":return t.stop()}}),b,null,[[0,14]])}(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&f.register(m,"fetchPointListData","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/sagas/poker.js"),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)}).call(this,r(19)(e))},422:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return i}));var n,o=r(196),a=r.n(o);r(415);(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var s,c,i=function(){return a.a.create()({url:"https://my-json-server.typicode.com/jh6120v/scrum-poker/point-list",method:"get",responseType:"json",headers:{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/json"}}).then((function(e){return e.data})).catch((function(e){throw e}))};(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&s.register(i,"getPointListDataApi","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/sagas/api/index.js"),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)}).call(this,r(19)(e))},423:function(e,t,r){"use strict";(function(e){var n;r.d(t,"a",(function(){return s})),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var o,a,s="POINT_LIST_DATA";(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&o.register(s,"POINT_LIST_DATA","/Users/james/Documents/personal-project/scrum-poker/src/constants/index.js"),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&a(e)}).call(this,r(19)(e))},424:function(e,t,r){"use strict";(function(e){var n,o=r(0),a=r.n(o),s=r(49),c=r(418),i=r(419),u=r(425),l=r(71);(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);var d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},f=function(){var e=Object(s.d)();Object(o.useEffect)((function(){e(Object(c.b)())}),[e]);var t=Object(s.e)((function(e){return e.pointList})).listData,r=Object(s.e)((function(e){return e.pointSelector})),n=r.isSelect,d=r.selected,f=r.img,p=r.itemFlip,b=Object(o.useCallback)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";e(Object(i.d)({isSelect:!n,selected:t,img:Object(l.b)(1,13)}))}),[e,n]),m=Object(o.useCallback)((function(){return e(Object(i.b)())}),[e]),g=Object(o.useCallback)((function(){return e(Object(i.c)())}),[e]);return a.a.createElement(u.o,null,a.a.createElement(u.d,{"data-testid":"display_header"},"Scrum Poker"),n?a.a.createElement(u.a,{onClick:function(){return m()}},"Back"):null,a.a.createElement(u.b,null,a.a.createElement(u.e,{active:n},a.a.createElement(u.i,{active:n},t.map((function(e){return a.a.createElement(u.h,{key:e.point,onClick:function(){return b(e.point)}},a.a.createElement(u.f,null,a.a.createElement(u.g,null,"coffee"===e.point?"☕":e.point)))}))),a.a.createElement(u.k,{active:n},a.a.createElement(u.j,{active:p,onClick:g},a.a.createElement(u.n,{active:p,className:"img-".concat(f)},"coffee"===d?"☕":d),a.a.createElement(u.l,{active:p},a.a.createElement(u.m,null)))))),a.a.createElement(u.c,null,"此工具僅供測試用"))};d(f,"useDispatch{dispatch}\nuseEffect{}\nuseSelector{{ listData }}\nuseSelector{{\n        isSelect, selected, img, itemFlip\n    }}\nuseCallback{select}\nuseCallback{clear}\nuseCallback{flip}",(function(){return[s.d,s.e,s.e]}));var p,b,m=f;t.a=m,(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(p.register(f,"Poker","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/containers/poker.js"),p.register(m,"default","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/containers/poker.js")),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&b(e)}).call(this,r(19)(e))},425:function(e,t,r){"use strict";(function(e){r.d(t,"o",(function(){return ne})),r.d(t,"d",(function(){return oe})),r.d(t,"b",(function(){return ae})),r.d(t,"c",(function(){return se})),r.d(t,"e",(function(){return ce})),r.d(t,"i",(function(){return ie})),r.d(t,"k",(function(){return ue})),r.d(t,"h",(function(){return le})),r.d(t,"f",(function(){return de})),r.d(t,"g",(function(){return fe})),r.d(t,"a",(function(){return je})),r.d(t,"j",(function(){return pe})),r.d(t,"n",(function(){return be})),r.d(t,"l",(function(){return me})),r.d(t,"m",(function(){return ge}));var n,o=r(45),a=r.n(o),s=r(38),c=r(426),i=r(427),u=r(429),l=r.n(u),d=r(430),f=r.n(d),p=r(431),b=r.n(p),m=r(432),g=r.n(m),j=r(433),k=r.n(j),v=r(434),y=r.n(v),x=r(435),L=r.n(x),h=r(436),H=r.n(h),G=r(437),O=r.n(G),D=r(438),w=r.n(D),U=r(439),P=r.n(U),S=r(440),E=r.n(S),M=r(441),T=r.n(M),C=r(442),I=r.n(C),_=r(443),F=r.n(_);function z(){var e=a()(["\n  position: fixed;\n  left: 15px;\n  top: 18px;\n  z-index: 3;\n  color: #fff;\n  font-size: 1.2rem;\n  font-family: 'Mansalva', cursive;\n  text-shadow: 1px 1px 2px rgba(29, 29, 31, .7);\n  cursor: pointer;\n"]);return z=function(){return e},e}function A(){var e=a()(["\n  background-image: url(",");\n  background-size: contain;\n"]);return A=function(){return e},e}function N(){var e=a()(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 25px;\n  cursor: pointer;\n  transform: rotateY(180deg);\n  background-color: #fff;\n"]);return N=function(){return e},e}function B(){var e=a()(["\n  display: flex;\n  justify-content: center;\n  border-radius: 25px;\n  cursor: pointer;\n  font-size: 5rem;\n  color: #5bb1d4;\n  text-shadow: 1px 1px 2px rgba(29, 29, 31, .5);\n  padding-top: 17%;\n  background-color: #fff;\n  background-size: contain;\n  background-position: bottom;\n  background-repeat: no-repeat;\n  font-family: 'Orbitron', sans-serif;\n  box-shadow: inset 1px 1px 10px 5px rgba(0,0,0,0.15);\n  &.img-1 {\n    background-image: url(",");\n  }\n  &.img-2 {\n    background-image: url(",");\n  }\n  &.img-3 {\n    background-image: url(",");\n  }\n  &.img-4 {\n    background-image: url(",");\n  }\n  &.img-5 {\n    background-image: url(",");\n  }\n  &.img-6 {\n    background-image: url(",");\n  }\n  &.img-7 {\n    background-image: url(",");\n  }\n  &.img-8 {\n    background-image: url(",");\n  }\n  &.img-9 {\n    background-image: url(",");\n  }\n  &.img-10 {\n    background-image: url(",");\n  }\n  &.img-11 {\n    background-image: url(",");\n  }\n  &.img-12 {\n    background-image: url(",");\n  }\n  &.img-13 {\n    background-image: url(",");\n  }\n"]);return B=function(){return e},e}function R(){var e=a()(['\n  display: flex;\n  width: 90%;\n  height: auto;\n  &:after {\n     content: "";\n     display: block;\n     padding-bottom: 154%; // 高度\n   }\n']);return R=function(){return e},e}function W(){var e=a()(["\n  width: 90%;\n  height: 94%;\n  border-radius: 20%;\n  color: #fff;\n  background-color: #5bb1d4;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-shadow: 1px 1px 2px rgba(29, 29, 31, .7);\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n"]);return W=function(){return e},e}function Y(){var e=a()(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.8rem;\n  border-radius: 10px;\n  background: #fff;\n  cursor: pointer;\n  overflow: hidden;\n"]);return Y=function(){return e},e}function q(){var e=a()(['\n  display: flex;\n  width: 100px;\n  max-width: 22%;\n  margin: 10px 0;\n  &::after {\n    content: "";\n    display: block;\n    padding-bottom: 154%; // 高度\n  }\n']);return q=function(){return e},e}function J(){var e=a()(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  background: #aadff0;\n"]);return J=function(){return e},e}function K(){var e=a()(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-content: center;\n  background: #aadff0;\n"]);return K=function(){return e},e}function X(){var e=a()(["\n    width: 350px;\n    margin: 0 auto;\n  "]);return X=function(){return e},e}function Q(){var e=a()(["\n  height: calc(100vh - 105px);\n  ","\n"]);return Q=function(){return e},e}function V(){var e=a()(["\n  width: 100%;\n  height: 40px;\n  overflow: hidden;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  text-align: center;\n  padding: 10px 0;\n  background-color: #aadff0;\n  color: #fff;\n  text-shadow: 1px 1px 2px rgba(29, 29, 31, .7);\n  font-size: 14px;\n  z-index: 3;\n"]);return V=function(){return e},e}function Z(){var e=a()(["\n  flex-grow: 1;\n  flex-shrink: 1;\n  flex-basis: auto;\n  min-height: 100vh;\n  padding: 65px 20px 40px 20px;\n"]);return Z=function(){return e},e}function $(){var e=a()(["\n  width: 100%;\n  height: 55px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  left: 0;\n  top: 0;\n  font-size: 20px;\n  font-weight: bold;\n  color: #fff;\n  text-align: center;\n  padding: 10px 0;\n  text-shadow: 1px 1px 2px rgba(29, 29, 31, .7);\n  overflow: hidden;\n  background-color: #aadff0;\n  font-family: 'Mansalva', cursive;\n  border-bottom: 0.5px dashed #fff;\n  z-index: 3;\n"]);return $=function(){return e},e}function ee(){var e=a()(["\n  display: flex;\n  max-width: 1200px;\n  min-height: 100%;\n  flex-wrap: wrap;\n  flex-direction: column;\n  margin:0 auto;\n  padding: constant(safe-area-inset-top) constant(safe-area-inset-right) constant(safe-area-inset-bottom) constant(safe-area-inset-left);\n"]);return ee=function(){return e},e}(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var te,re,ne=s.default.div(ee()),oe=s.default.header($()),ae=s.default.div(Z()),se=s.default.footer(V()),ce=Object(s.default)(c.a)(Q(),i.a.xs(X())),ie=Object(s.default)(c.c)(K()),ue=Object(s.default)(c.b)(J()),le=s.default.div(q()),de=s.default.div(Y()),fe=s.default.div(W(),l.a),pe=Object(s.default)(c.a)(R()),be=Object(s.default)(c.c)(B(),b.a,g.a,k.a,y.a,L.a,H.a,O.a,w.a,P.a,E.a,T.a,I.a,F.a),me=Object(s.default)(c.b)(N()),ge=Object(s.default)(fe)(A(),f.a),je=s.default.div(z());(te="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(te.register(ne,"Wrapper","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/styles/index.js"),te.register(oe,"Header","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/styles/index.js"),te.register(ae,"Container","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/styles/index.js"),te.register(se,"Footer","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/styles/index.js"),te.register(ce,"PokerContainer","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/styles/index.js"),te.register(ie,"PokerListWrap","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/styles/index.js"),te.register(ue,"PokerSelectWrap","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/styles/index.js"),te.register(le,"PokerItemWrap","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/styles/index.js"),te.register(de,"PokerItem","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/styles/index.js"),te.register(fe,"PokerItemInner","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/styles/index.js"),te.register(pe,"PokerSelectContainer","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/styles/index.js"),te.register(be,"PokerSelectedItemFront","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/styles/index.js"),te.register(me,"PokerSelectedItemBack","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/styles/index.js"),te.register(ge,"PokerSelectedItemBackInner","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/styles/index.js"),te.register(je,"BackButton","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/styles/index.js")),(re="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&re(e)}).call(this,r(19)(e))},426:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return f})),r.d(t,"c",(function(){return p})),r.d(t,"b",(function(){return b}));var n,o=r(45),a=r.n(o),s=r(38);function c(){var e=a()(["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform: rotateY(180deg);\n  backface-visibility: ",";\n"]);return c=function(){return e},e}function i(){var e=a()(["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  backface-visibility: ",";\n"]);return i=function(){return e},e}function u(){var e=a()(["\n  width: ",";\n  height: ",";\n  transition: all ",";\n  transform: ",";\n  transform-style: preserve-3d;\n  position: relative;\n  z-index: 1;\n"]);return u=function(){return e},e}(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l,d,f=s.default.div(u(),(function(e){return e.width?e.width:"100%"}),(function(e){return e.height?e.height:"100%"}),(function(e){return e.duration?"".concat(e.duration,"ms"):"500ms"}),(function(e){return e.active?"rotateY(180deg)":"none"})),p=s.default.div(i(),(function(e){return e.active?"hidden":"visible"})),b=s.default.div(c(),(function(e){return e.active?"visible":"hidden"}));(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(f,"FlipCard","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/styles/flip-card.js"),l.register(p,"FlipCardFront","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/styles/flip-card.js"),l.register(b,"FlipCardBack","/Users/james/Documents/personal-project/scrum-poker/src/routes/poker/styles/flip-card.js")),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&d(e)}).call(this,r(19)(e))},427:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return d}));var n,o=r(45),a=r.n(o),s=r(38),c=r(428);function i(){var e=a()(["\n      @media (min-width: ",") {\n        ",";\n      }\n    "]);return i=function(){return e},e}(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var u,l,d=Object.keys(c.a).reduce((function(e,t){return e[t]=function(){return Object(s.css)(i(),c.a[t],s.css.apply(void 0,arguments))},e}),{});(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&u.register(d,"respondTo","/Users/james/Documents/personal-project/scrum-poker/src/styles/_mixin.js"),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&l(e)}).call(this,r(19)(e))},428:function(e,t,r){"use strict";(function(e){var n;r.d(t,"a",(function(){return s})),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var o,a,s={xs:"480px",sm:"768px",md:"992px",lg:"1200px"};(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&o.register(s,"breakpoints","/Users/james/Documents/personal-project/scrum-poker/src/styles/_variables.js"),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&a(e)}).call(this,r(19)(e))},429:function(e,t){e.exports="assets/images/i.388c89f4ec945f774e555125e3dc5666.png"},430:function(e,t){e.exports="assets/images/i.5d796004bca82ee6d355e7db378409ac.png"},431:function(e,t){e.exports="assets/images/i.a49f8867f9e0816a1f25ff2eeedc470a.gif"},432:function(e,t){e.exports="assets/images/i.49126dc5137c5cd898d544a6fb5ecca8.gif"},433:function(e,t){e.exports="assets/images/i.3c94ee3f97bd0675cb68941f46cd030d.gif"},434:function(e,t){e.exports="assets/images/i.d9e370b16cc02cc7c46d1916350ab47c.gif"},435:function(e,t){e.exports="assets/images/i.5d6bfc7a2ba673032facbf15acc35e80.gif"},436:function(e,t){e.exports="assets/images/i.55b588adce10746226a89c4bb3311464.gif"},437:function(e,t){e.exports="assets/images/i.04706ac2d7d86886ffc6d056b7e7081b.gif"},438:function(e,t){e.exports="assets/images/i.c525f2817e7afa700c05fb803f960444.gif"},439:function(e,t){e.exports="assets/images/i.b3bdfb95c970902b51f9302f2ca40659.gif"},440:function(e,t){e.exports="assets/images/i.f7b1110769f460bf2d5cc3d67f41224c.gif"},441:function(e,t){e.exports="assets/images/i.1909a4fa9f17e114aa9d47e8a758c118.gif"},442:function(e,t){e.exports="assets/images/i.f6ef49a36574bc5cccbd77314bb3b172.gif"},443:function(e,t){e.exports="assets/images/i.c4351e5bd2565be7f9f7b22434b21d0c.gif"}}]);