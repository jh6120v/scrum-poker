(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{705:function(e,t,o){"use strict";o.r(t),function(e){var n,a=o(713);(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var r,l,c=a.a;t.default=c,(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&r.register(c,"default","/Users/james/Documents/personal-project/scrum-poker/src/routes/setting/index.js"),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&l(e)}.call(this,o(12)(e))},713:function(e,t,o){"use strict";(function(e){var n,a=o(0),r=o.n(a),l=o(28),c=o(706),s=o.n(c),u=o(703),d=o.n(u),i=o(65),f=o(101),p=o(136),m=o(34),b=o(714),j=o(716);(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);var v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},k=function(){var e=Object(l.d)(),t=Object(l.e)((function(e){return e.personal}));Object(a.useEffect)((function(){e(Object(f.c)({title:"Setting"})),e(Object(f.f)())}),[e]);var o=Object(a.useCallback)((function(e){return i.a.push(e)}),[]),n=Object(a.useCallback)((function(){return e(Object(m.c)())}),[e]),c=Object(a.useCallback)((function(){return e(Object(m.b)())}),[e]),u=Object(a.useCallback)((function(){navigator.share&&navigator.share({title:"Scrum Poker",text:"Capoo Cat Scrum Poker",url:"https://scrum-poker.dailyofjames.com"}).then((function(){})).catch((function(e){}))}),[]),v=Object(b.a)("Are you sure to reset?",Object(a.useCallback)((function(){g(),e(Object(m.f)())}),[e])),k=v.ModelBox,h=v.isShown,G=v.showModal,g=v.hideModal;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.b,null,r.a.createElement(p.a,{isTitle:!0},"CARD SETTINGS"),r.a.createElement(p.a,{onClick:function(){return o("/setting/sequence-list")}},"Sequence Type",r.a.createElement(s.a,{color:"#4f6571"})),r.a.createElement(p.a,{onClick:function(){return o("/setting/theme")}},"Theme",r.a.createElement(s.a,{color:"#4f6571"})),r.a.createElement(p.a,{isTitle:!0},"GENERAL SETTINGS"),r.a.createElement(p.a,{onClick:n},"Keep Screen on",t.keepScreenOn?r.a.createElement(d.a,{color:"#4f6571"}):null),r.a.createElement(p.a,{onClick:c},"Auto-hide Card",t.autoHideCard?r.a.createElement(d.a,{color:"#4f6571"}):null),r.a.createElement(p.a,{isSpace:!0}),r.a.createElement(p.a,{onClick:G},"Reset"),r.a.createElement(p.a,{onClick:u},"Share"),r.a.createElement(p.a,{onClick:function(){return o("/setting/about")}},"About",r.a.createElement(s.a,{color:"#4f6571"})),r.a.createElement(p.c,null,"Version 1.0.0")),r.a.createElement(j.a,{isShow:h},r.a.createElement(k,null)))};v(k,"useDispatch{dispatch}\nuseSelector{personal}\nuseEffect{}\nuseCallback{linkTo}\nuseCallback{keepScreenOn}\nuseCallback{hideCard}\nuseCallback{share}\nuseModel{{\n        ModelBox, isShown, showModal, hideModal\n    }}\nuseCallback{}",(function(){return[l.d,l.e,b.a]}));var h,G,g=k;t.a=g,(h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(h.register(k,"Setting","/Users/james/Documents/personal-project/scrum-poker/src/routes/setting/containers/setting.js"),h.register(g,"default","/Users/james/Documents/personal-project/scrum-poker/src/routes/setting/containers/setting.js")),(G="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&G(e)}).call(this,o(12)(e))},714:function(e,t,o){"use strict";(function(e){o.d(t,"a",(function(){return f}));var n,a=o(172),r=o.n(a),l=o(0),c=o.n(l),s=o(715);(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);var u,d,i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},f=function(e,t){var o=Object(l.useState)(!1),n=r()(o,2),a=n[0],u=n[1],d=Object(l.useCallback)((function(){return u(!0)}),[]),i=Object(l.useCallback)((function(){return u(!1)}),[]);return{ModelBox:function(){return c.a.createElement("div",null,c.a.createElement(s.e,null,c.a.createElement(s.b,null,e),c.a.createElement(s.c,null,c.a.createElement(s.a,{onClick:t},"Confirm"))),c.a.createElement(s.d,{onClick:i}))},isShown:a,showModal:d,hideModal:i}};i(f,"useState{[isShown, setShown](false)}\nuseCallback{showModal}\nuseCallback{hideModal}"),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&u.register(f,"useModel","/Users/james/Documents/personal-project/scrum-poker/src/commons/hooks.js"),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&d(e)}).call(this,o(12)(e))},715:function(e,t,o){"use strict";(function(e){o.d(t,"d",(function(){return m})),o.d(t,"e",(function(){return b})),o.d(t,"b",(function(){return j})),o.d(t,"c",(function(){return v})),o.d(t,"a",(function(){return k}));var n,a=o(3),r=o.n(a),l=o(4);function c(){var e=r()(["\n  padding: 10px 15px;\n  margin: 0 5px;\n  background-color: #5AC9E8;\n  color: #FFF;\n  font-size: .8rem;\n  cursor: pointer;\n  border-radius: 2px;\n"]);return c=function(){return e},e}function s(){var e=r()(["\n  width: 100%;\n  padding: 0 10px;\n  display: flex;\n  justify-content: center;\n"]);return s=function(){return e},e}function u(){var e=r()(["\n  width: 100%;\n  padding: 0 0 20px 0;\n"]);return u=function(){return e},e}function d(){var e=r()(["\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  width: 250px;\n  max-width: 90%;\n  background-color: #fff;\n  z-index: 11;\n  display: flex;\n  flex-direction: column;\n  transform: translateX(-50%) translateY(-50%);\n  border-radius: 5px;\n  padding: 20px 15px 15px;\n  font-family: Arial, serif;\n"]);return d=function(){return e},e}function i(){var e=r()(["\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  background-color: rgba(0,0,0,.3);\n  z-index: 10;\n"]);return i=function(){return e},e}(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var f,p,m=l.default.div(i()),b=l.default.div(d()),j=l.default.div(u()),v=l.default.div(s()),k=l.default.div(c());(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(f.register(m,"ModelShadow","/Users/james/Documents/personal-project/scrum-poker/src/styles/model-style.js"),f.register(b,"ModelWrap","/Users/james/Documents/personal-project/scrum-poker/src/styles/model-style.js"),f.register(j,"ModelContent","/Users/james/Documents/personal-project/scrum-poker/src/styles/model-style.js"),f.register(v,"ModelFooter","/Users/james/Documents/personal-project/scrum-poker/src/styles/model-style.js"),f.register(k,"ConfirmButton","/Users/james/Documents/personal-project/scrum-poker/src/styles/model-style.js")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)}).call(this,o(12)(e))},716:function(e,t,o){"use strict";(function(e){var n,a=o(0),r=o.n(a),l=o(99),c=o.n(l);(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var s,u,d=function(e){return e.isShow?c.a.createPortal(r.a.createElement(r.a.Fragment,null,e.children),document.getElementById("model")):null},i=d;t.a=i,(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(s.register(d,"Model","/Users/james/Documents/personal-project/scrum-poker/src/components/model.js"),s.register(i,"default","/Users/james/Documents/personal-project/scrum-poker/src/components/model.js")),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)}).call(this,o(12)(e))}}]);