(this["webpackJsonplch-color-rotation"]=this["webpackJsonplch-color-rotation"]||[]).push([[0],{64:function(e,a,t){e.exports=t(82)},69:function(e,a,t){},82:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(10),c=t.n(o),l=(t(69),t(5)),i=t(12),m=t(126),u=t(55),s=t(118),g=t(125),p=t(122),b=t(41),h=t(132),f=t(128),d=t(124),E=t(123),v=t(131),j=t(54),C=t.n(j),O=t(23),y=t(129),N=t(53),S=t.n(N),w=t(50),k=t.n(w),x=function(e){return k()(e).rgb().array().map((function(e){return e/255*100}))},H=function(e){return Math.ceil(e/100*255)},T=function(e){var a=Object(i.a)(e,3),t=a[0],n=a[1],r=a[2];return"rgb(".concat(H(t),",").concat(H(n),",").concat(H(r),")")},M=x("rgb(241,133,96)"),A=Object(u.a)({palette:{primary:{main:b.a[600]}}}),W=Object(s.a)((function(e){return{header:{marginBottom:e.spacing(4)},form:{marginBottom:e.spacing(4),"& > *":{margin:e.spacing(1)}},paper:{marginTop:e.spacing(2),padding:e.spacing(2)},colorTitle:{textAlign:"center",marginTop:e.spacing(4)},colors:{display:"flex",flexWrap:"wrap","& > *":{margin:e.spacing(2)}},ball:{width:e.spacing(11),height:e.spacing(11),fontSize:"2.5em"},ballTooltip:{},ballRoot:{textAlign:"center"},ballCaption:{display:"block",maxWidth:"6em"},footer:{marginTop:e.spacing(12)}}})),B=function(e){var a=e.onChangeColor,t=Object(n.useState)("rgb(241,133,96)"),o=Object(i.a)(t,2),c=o[0],l=o[1],m=Object(n.useState)(!1),u=Object(i.a)(m,2),s=u[0],g=u[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{title:"Random color"},r.a.createElement(y.a,{onClick:function(){var e=[0,0,0].map((function(){return Math.ceil(100*Math.random())}));l(T(e)),a(e)}},r.a.createElement(S.a,null))),r.a.createElement(f.a,{id:"color-input",label:"Standard color",error:s,value:c,onChange:function(e){var t=e.target.value;l(t);try{var n=x(t);a(n),s&&g(!1)}catch(r){s||g(!0)}}}))},L=function(e){e.count;var a=e.onChangeCount,t=Object(n.useState)(String(7)),o=Object(i.a)(t,2),c=o[0],l=o[1],m=Object(n.useState)(!1),u=Object(i.a)(m,2),s=u[0],g=u[1];return r.a.createElement(f.a,{id:"count-input",error:s,label:"Count",type:"number",value:c,onChange:function(e){var t=e.target.value;l(t);var n=Number(t);Number.isInteger(n)&&n>0&&n<101?(a(Number(t)),s&&g(!1)):s||g(!0)}})},R=function(e){var a=e.color,t=e.actual,n=W();return r.a.createElement("div",{className:n.ballRoot},r.a.createElement(E.a,{badgeContent:t&&t!==a&&r.a.createElement(v.a,{title:"Actual color is ".concat(t)},r.a.createElement(C.a,{fontSize:"small",color:"primary"}))},r.a.createElement(h.a,{className:n.ball,style:{backgroundColor:a}},"#")),r.a.createElement(d.a,{variant:"caption",className:n.ballCaption,style:{color:a}},a))},z=function(){var e=W();return r.a.createElement("div",{className:e.footer})},I=function(){var e=Object(n.useState)(M),a=Object(i.a)(e,2),t=a[0],o=a[1],c=Object(n.useState)(7),u=Object(i.a)(c,2),s=u[0],b=u[1],h=W();return r.a.createElement(g.a,{theme:A},r.a.createElement(m.a,{maxWidth:"md"},r.a.createElement(p.a,{variant:"outlined",className:h.paper},r.a.createElement("header",{className:h.header},r.a.createElement("h1",null,"Hue rotation: LCH vs HSL")),r.a.createElement("form",{className:h.form,noValidate:!0,autoComplete:"off"},r.a.createElement(B,{onChangeColor:o}),r.a.createElement(L,{count:s,onChangeCount:b}))),r.a.createElement("h2",{className:h.colorTitle},"Hue rotation in LCH color space"),r.a.createElement("div",{className:h.colors},Array.from({length:s}).map((function(e,a){var n=function(e,a){var t=O.rgb2lch.apply(O,Object(l.a)(e)),n=Object(i.a)(t,3),r=n[0],o=n[1],c=n[2],m=O.lch2rgb(r,o,c+a),u=m.map((function(e){return Math.max(0,Math.min(100,e))})),s=Object(i.a)(u,3),g=s[0],p=s[1],b=s[2];return{rgb:T([g,p,b]),actual:T(m)}}(t,360/s*a),o=n.rgb,c=n.actual;return r.a.createElement(R,{color:o,actual:c,key:a})}))),r.a.createElement("h2",{className:h.colorTitle},"Hue rotation in HSL color space"),r.a.createElement("div",{className:h.colors},Array.from({length:s}).map((function(e,a){var n=function(e,a){var t=O.rgb2hsl.apply(O,Object(l.a)(e)),n=(t[0]+a)%360,r=O.hsl2rgb(n,t[1],t[2]);return{rgb:T(r)}}(t,360/s*a).rgb;return r.a.createElement(R,{color:n,key:a})})))),r.a.createElement(z,null))},J=t(127);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J.a,null),r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[64,1,2]]]);
//# sourceMappingURL=main.0504ab82.chunk.js.map