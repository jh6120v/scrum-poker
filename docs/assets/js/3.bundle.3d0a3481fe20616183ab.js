(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{705:function(e,t,n){"use strict";n.r(t),function(e){var o,a=n(713);(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var r,l,c=a.a;t.default=c,(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&r.register(c,"default","/Users/jamesyu/Documents/my-personal/scrum-poker/src/routes/setting/index.js"),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&l(e)}.call(this,n(13)(e))},713:function(e,t,n){"use strict";(function(e){var o,a=n(0),r=n.n(a),l=n(28),c=n(706),u=n.n(c),s=n(703),d=n.n(s),i=n(65),f=n(101),m=n(136),b=n(34),p=n(714),y=n(715),g=n(716);(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);var j="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},k=function(){var e=Object(l.d)(),t=Object(l.e)((function(e){return e.personal})),n=Object(l.e)((function(e){return e.model})).isShow;Object(a.useEffect)((function(){e(Object(f.c)({title:"Setting"})),e(Object(f.f)())}),[e]);var o=Object(a.useCallback)((function(e){return i.a.push(e)}),[]),c=Object(a.useCallback)((function(){return e(Object(b.c)())}),[e]),s=Object(a.useCallback)((function(){return e(Object(b.b)())}),[e]),j=Object(a.useCallback)((function(){navigator.share&&navigator.share({title:"Scrum Poker",text:"Capoo Cat Scrum Poker",url:"https://scrum-poker.dailyofjames.com"}).then((function(){})).catch((function(e){}))}),[]),k=Object(p.a)(),v=k.showModal,h=k.hideModal,G=Object(a.useCallback)((function(){h(),e(Object(b.f)())}),[e,h]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.b,null,r.a.createElement(m.a,{isTitle:!0},"CARD SETTINGS"),r.a.createElement(m.a,{onClick:function(){return o("/setting/sequence-list")}},"Sequence Type",r.a.createElement(u.a,{color:"#4f6571"})),r.a.createElement(m.a,{onClick:function(){return o("/setting/theme")}},"Theme",r.a.createElement(u.a,{color:"#4f6571"})),r.a.createElement(m.a,{isTitle:!0},"GENERAL SETTINGS"),r.a.createElement(m.a,{onClick:c},"Keep Screen on",t.keepScreenOn?r.a.createElement(d.a,{color:"#4f6571"}):null),r.a.createElement(m.a,{onClick:s},"Auto-hide Card",t.autoHideCard?r.a.createElement(d.a,{color:"#4f6571"}):null),r.a.createElement(m.a,{isSpace:!0}),r.a.createElement(m.a,{onClick:v},"Reset"),r.a.createElement(m.a,{onClick:j},"Share"),r.a.createElement(m.a,{onClick:function(){return o("/setting/about")}},"About",r.a.createElement(u.a,{color:"#4f6571"})),r.a.createElement(m.c,null,"Version 0.2.0")),r.a.createElement(g.a,{isShow:n},r.a.createElement(y.d,{onClick:h}),r.a.createElement(y.e,null,r.a.createElement(y.b,null,"Are you sure to reset?"),r.a.createElement(y.c,null,r.a.createElement(y.a,{onClick:G},"Confirm")))))};j(k,"useDispatch{dispatch}\nuseSelector{personal}\nuseSelector{{ isShow }}\nuseEffect{}\nuseCallback{linkTo}\nuseCallback{keepScreenOn}\nuseCallback{hideCard}\nuseCallback{share}\nuseModel{{ showModal, hideModal }}\nuseCallback{onConfirm}",(function(){return[l.d,l.e,l.e,p.a]}));var v,h,G=k;t.a=G,(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(v.register(k,"Setting","/Users/jamesyu/Documents/my-personal/scrum-poker/src/routes/setting/containers/setting.js"),v.register(G,"default","/Users/jamesyu/Documents/my-personal/scrum-poker/src/routes/setting/containers/setting.js")),(h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&h(e)}).call(this,n(13)(e))},714:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return f}));var o,a=n(172),r=n.n(a),l=n(0),c=n(28),u=n(278);(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);var s,d,i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},f=function(){var e=Object(c.d)(),t=Object(l.useState)(!1),n=r()(t,2),o=n[0],a=n[1],s=Object(l.useCallback)((function(){return a(!0)}),[]),d=Object(l.useCallback)((function(){return a(!1)}),[]);return Object(l.useEffect)((function(){e(o?Object(u.c)():Object(u.b)())}),[e,o]),{showModal:s,hideModal:d}};i(f,"useDispatch{dispatch}\nuseState{[isShown, setShown](false)}\nuseCallback{showModal}\nuseCallback{hideModal}\nuseEffect{}",(function(){return[c.d]})),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&s.register(f,"useModel","/Users/jamesyu/Documents/my-personal/scrum-poker/src/commons/hooks.js"),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&d(e)}).call(this,n(13)(e))},715:function(e,t,n){"use strict";(function(e){n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return y})),n.d(t,"b",(function(){return g})),n.d(t,"c",(function(){return j})),n.d(t,"a",(function(){return k}));var o,a=n(3),r=n.n(a),l=n(4);function c(){var e=r()(["\n  background-color: #cccccc;\n  color: #999;\n"]);return c=function(){return e},e}function u(){var e=r()(["\n  padding: 10px 15px;\n  margin: 0 5px;\n  background-color: #5AC9E8;\n  color: #FFF;\n  font-size: .8rem;\n  cursor: pointer;\n  border-radius: 2px;\n"]);return u=function(){return e},e}function s(){var e=r()(["\n  width: 100%;\n  padding: 0 10px;\n  display: flex;\n  justify-content: center;\n"]);return s=function(){return e},e}function d(){var e=r()(["\n  width: 100%;\n  padding: 0 0 20px 0;\n"]);return d=function(){return e},e}function i(){var e=r()(["\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  width: 250px;\n  max-width: 90%;\n  background-color: #fff;\n  z-index: 11;\n  display: flex;\n  flex-direction: column;\n  transform: translateX(-50%) translateY(-50%);\n  border-radius: 5px;\n  padding: 20px 15px 15px;\n  font-family: Arial, serif;\n"]);return i=function(){return e},e}function f(){var e=r()(["\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  background-color: rgba(0,0,0,.3);\n  z-index: 10;\n"]);return f=function(){return e},e}(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var m,b,p=l.default.div(f()),y=l.default.div(i()),g=l.default.div(d()),j=l.default.div(s()),k=l.default.div(u()),v=Object(l.default)(k)(c());(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(m.register(p,"ModelShadow","/Users/jamesyu/Documents/my-personal/scrum-poker/src/styles/dialog-style.js"),m.register(y,"ModelWrap","/Users/jamesyu/Documents/my-personal/scrum-poker/src/styles/dialog-style.js"),m.register(g,"ModelContent","/Users/jamesyu/Documents/my-personal/scrum-poker/src/styles/dialog-style.js"),m.register(j,"ModelFooter","/Users/jamesyu/Documents/my-personal/scrum-poker/src/styles/dialog-style.js"),m.register(k,"ConfirmButton","/Users/jamesyu/Documents/my-personal/scrum-poker/src/styles/dialog-style.js"),m.register(v,"CancelButton","/Users/jamesyu/Documents/my-personal/scrum-poker/src/styles/dialog-style.js")),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&b(e)}).call(this,n(13)(e))},716:function(e,t,n){"use strict";(function(e){var o,a=n(0),r=n.n(a),l=n(99),c=n.n(l);(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var u,s,d=function(e){return e.isShow?c.a.createPortal(r.a.createElement(r.a.Fragment,null,e.children),document.getElementById("model")):null},i=d;t.a=i,(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(u.register(d,"Model","/Users/jamesyu/Documents/my-personal/scrum-poker/src/containers/model.js"),u.register(i,"default","/Users/jamesyu/Documents/my-personal/scrum-poker/src/containers/model.js")),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)}).call(this,n(13)(e))}}]);