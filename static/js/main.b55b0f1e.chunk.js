(this["webpackJsonptext-diff"]=this["webpackJsonptext-diff"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(6),a=n.n(r),o=(n(12),n(13),n(0)),i=function(){return Object(o.jsx)("h1",{className:"text-center pt-2",children:"Text Compare Online"})},l=n(5);n(15),n(16);var u=function(e){e.first;var t=e.setFirst,n=(e.second,e.setSecond);return Object(o.jsx)("div",{className:"col-6 d-flex justify-content-center",children:Object(o.jsx)("button",{className:"buttons ",onClick:function(){Array.from(document.querySelectorAll("textarea")).forEach((function(e){return e.value=""})),t(""),n("")},children:"Clear All "})})},j=n(7);n(17);function d(e,t,n,c,s){if(e.length===n||t.length===c)return"";if(s[n][c])return s[n][c];if(e[n]===t[c])s[n][c]=e[n]+d(e,t,n+1,c+1,s);else{var r=d(e,t,n+1,c,s),a=d(e,t,n,c+1,s);s[n][c]=r.length>a.length?r:a}return s[n][c]}var f=function(e){var t=e.first,n=e.second,c=Object(j.a)(Array(t.length)).map((function(){return Array(n.length)})),s=d(t,n,0,0,c);function r(e,t,n){for(var c=[],s=0,r=0;s<e.length;s++)e[s]===t[r]?(c.push(e[s]),r++):c.push(Object(o.jsx)("span",{className:"diff-".concat(n),children:e[s]},s));return c}return Object(o.jsxs)("div",{className:"d-flex cols pt-1 pb-3",children:[Object(o.jsx)("div",{className:"result-col",children:r(t,s,"red")}),Object(o.jsx)("div",{className:" result-col",children:r(n,s,"green")})]})};n(18);var b=function(e){var t=e.first,n=e.setFirst,c=e.second,s=e.setSecond;return Object(o.jsxs)("div",{className:" d-flex col-6 justify-content-around  ",children:[Object(o.jsx)("button",{className:"buttons ",onClick:function(){n(t.toUpperCase()),s(c.toUpperCase())},children:"To Upper Case"}),Object(o.jsx)("button",{className:"buttons ",onClick:function(){n(t.toLowerCase()),s(c.toLowerCase())},children:"To Lower Case"})]})};function x(e){var t=e.value,n=e.onChange;return Object(o.jsx)("textarea",{cols:"60",rows:"20",value:t,onChange:function(e){return n(e.target.value)}})}var h=function(){var e=Object(c.useState)("let func = function(x, y) {\n  return x + y;\n}"),t=Object(l.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)("var func = function(w, h) {\n  return w * h;\n}"),a=Object(l.a)(r,2),i=a[0],j=a[1];return Object(o.jsxs)("div",{className:"container pt-3",children:[Object(o.jsxs)("div",{className:" row",children:[Object(o.jsx)(u,{first:n,setFirst:s,second:i,setSecond:j}),Object(o.jsx)(b,{first:n,setFirst:s,second:i,setSecond:j})]}),Object(o.jsxs)("div",{className:"d-flex cols pt-4",children:[Object(o.jsx)("div",{className:"input-col",children:Object(o.jsx)(x,{value:n,onChange:function(e){return s(e)}})}),Object(o.jsx)("div",{className:"input-col",children:Object(o.jsx)(x,{value:i,onChange:function(e){return j(e)}})})]}),Object(o.jsx)(f,{first:n,second:i})]})};n(19);var O=function(){return Object(o.jsxs)("div",{className:" app",children:[Object(o.jsx)(i,{}),Object(o.jsx)(h,{})]})};a.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(O,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.b55b0f1e.chunk.js.map