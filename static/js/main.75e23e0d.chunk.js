(this["webpackJsonpreact-components"]=this["webpackJsonpreact-components"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},12:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),o=n(4),a=n.n(o),s=(n(10),n.p+"static/media/logo.6ce24c58.svg"),i=(n(11),n(3)),l=(n(12),n(5)),u=n.n(l),d=n(0),p=function(e){var t=e.debounceTime,n=void 0===t?0:t,c=r.a.useRef(),o=r.a.useState([0,0]),a=Object(i.a)(o,2),s=a[0],l=a[1],p=r.a.useState(!1),j=Object(i.a)(p,2),f=j[0],h=j[1],b=u.a.debounce((function(e){f&&l([e.clientX,e.clientY])}),n),g=function(e){return h(!1)};return r.a.useEffect((function(){if(c.current){var e=c.current.offsetWidth,t=c.current.offsetHeight;c.current.style.left="calc(".concat(s[0],"px - ").concat(e,"px/2)"),c.current.style.top="calc(".concat(s[1],"px - ").concat(t,"px/2)")}}),[s]),Object(d.jsx)("div",{className:"draggable__area",style:{width:"100%",height:"100%"},onMouseMove:b,onMouseUp:g,children:Object(d.jsx)("div",{ref:c,className:"draggable__object",onMouseDown:function(e){return h(!0)},onMouseUp:g,style:{cursor:"pointer",position:"absolute"},children:e.children})})};var j=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("header",{className:"App-header",children:[Object(d.jsx)(p,{children:Object(d.jsx)("img",{src:s,className:"App-logo",alt:"logo"})}),Object(d.jsxs)("p",{children:["Edit ",Object(d.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(d.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),o(e),a(e)}))};a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(j,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.75e23e0d.chunk.js.map