(this.webpackJsonptetris=this.webpackJsonptetris||[]).push([[0],{18:function(n,t,e){},22:function(n,t,e){"use strict";e.r(t);var r,o,c,i,a,u,l=e(0),s=e.n(l),d=e(10),f=e.n(d),b=(e(18),e(2)),p=function(){return Array.from(new Array(20),(function(){return new Array(12).fill([0,"clear"])}))},x=function(n,t,e){for(var r=e.x,o=e.y,c=0;c<n.tetromino.length;c+=1)for(var i=0;i<n.tetromino[c].length;i+=1)if(0!==n.tetromino[c][i]&&(!t[c+n.pos.y+o]||!t[c+n.pos.y+o][i+n.pos.x+r]||"clear"!==t[c+n.pos.y+o][i+n.pos.x+r][1]))return!0;return!1},j=e(4),O=e(3),h=O.a.div(r||(r=Object(j.a)(["\nwidth: auto;\nbackground: rgba(",",0.8);\nborder: ",";\nborder-bottom-color: rgba(",",0.1);\nborder-right-color: rgba(",",1);\nborder-left-color: rgba(",",0.3);\nborder-top-color: rgba(",",1);\n"])),(function(n){return n.color}),(function(n){return 0===n.type?"0px solid":"4px solid"}),(function(n){return n.color}),(function(n){return n.color}),(function(n){return n.color}),(function(n){return n.color})),g={0:{shape:[[0]],color:"0, 0, 0"},I:{shape:[[0,"I",0,0],[0,"I",0,0],[0,"I",0,0],[0,"I",0,0]],color:"80, 227, 230"},J:{shape:[[0,"J",0],[0,"J",0],["J","J",0]],color:"36, 95, 223"},L:{shape:[[0,"L",0],[0,"L",0],[0,"L","L"]],color:"223, 173, 36"},O:{shape:[["O","O"],["O","O"]],color:"223, 217, 36"},S:{shape:[[0,"S","S"],["S","S",0],[0,0,0]],color:"58, 211, 56"},T:{shape:[["T","T","T"],[0,"T",0],[0,0,0]],color:"132, 61, 198"},Z:{shape:[["Z","Z",0],[0,"Z","Z"],[0,0,0]],color:"227, 78, 78"}},m=function(){var n="IJLOSTZ",t=n[Math.floor(Math.random()*n.length)];return g[t]},v=e(1),y=function(n){var t=n.type;return Object(v.jsx)(h,{type:t,color:g[t].color})},w=s.a.memo(y),S=O.a.div(o||(o=Object(j.a)(["\ndisplay: grid;\ngrid-template-rows: repeat(\n    ",",\n    calc(23vw/",")\n);\ngrid-template-columns: repeat(\n    ",", 1fr\n);\ngrid-gap: 1px;\nborder: 2px solid #333;\nwidth: 100%;\nmax-width: 25vw;\nbackground: #111;\n"])),(function(n){return n.height}),(function(n){return n.width}),(function(n){return n.width})),k=function(n){var t=n.stage;return Object(v.jsx)(S,{width:t[0].length,height:t.length,children:t.map((function(n){return n.map((function(n,t){return Object(v.jsx)(w,{type:n[0]},t)}))}))})},I=O.a.div(c||(c=Object(j.a)(["\nbox-sizing: border-box;\ndisplay: flex;\nalign-items: center;\nmargin: 0 0 20px 0;\npadding: 20px;\nborder: 4px solid #333;\nmin-height: 30px;\nwidth: 100%;\nborder-radius: 20px;\ncolor: ",";\nbackground: #000;\nfont-family: Pixel, Arial, Helvetica, sans-serif;\nfont-size: 0.8rem;\n"])),(function(n){return n.gameOver?"red":"#999"})),J=function(n){var t=n.gameOver,e=n.text;return Object(v.jsx)(I,{gameOver:t,children:e})},L=O.a.button(i||(i=Object(j.a)(["\nbox-sizing: border-box;\nmargin: 0 0 20px 0;\npadding: 20px;\nmin-height: 30px;\nwidth: 100%;\nborder-radius: 20px;\nborder: none;\ncolor: white;\nbackground: #333;\nfont-family: Pixel, Arial, Helvetica, sans-serif;\nfont-size: 1rem;\noutline: none;\ncursor: pointer;\n"]))),C=function(n){var t=n.callBack;return Object(v.jsx)(L,{onClick:t,children:"Start Game"})},T=e.p+"static/media/bg.d63cfd51.png",A=O.a.div(a||(a=Object(j.a)(["\nwidth: 100vw;\nheight: 100vh;\nbackground: url(",")  #000;\nbackground-size: cover;\noverflow: hidden;\n"])),T),E=O.a.div(u||(u=Object(j.a)(["\ndisplay: flex;\nalign-items: flex-start;\npadding: 40px;\nmargin: 0 auto;\nmax-width: 900px;\n\naside {\n    width: 100px;\n    max-width: 200px;\n    display: block;\n    padding: 0px 20 px;\n}\n"])));var Z=e(8),z=function(n,t){var e=Object(l.useState)(p()),r=Object(b.a)(e,2),o=r[0],c=r[1],i=Object(l.useState)(0),a=Object(b.a)(i,2),u=a[0],s=a[1];return Object(l.useEffect)((function(){s(0);var e=function(e){var r=e.map((function(n){return n.map((function(n){return"clear"===n[1]?[0,"clear"]:n}))}));return n.tetromino.forEach((function(t,e){t.forEach((function(t,o){0!==t&&(r[e+n.pos.y][o+n.pos.x]=[t,"".concat(n.collided?"merged":"clear")])}))})),n.collided?(t(),function(n){return n.reduce((function(t,e){return-1===e.findIndex((function(n){return 0===n[0]}))?(s((function(n){return n+1})),t.unshift(new Array(n[0].length).fill([0,"clear"])),t):(t.push(e),t)}),[])}(r)):r};c((function(n){return e(n)}))}),[n.collided,n.pos.x,n.pos.y,n.tetromino,t]),[o,c,u]},B=function(){var n=Object(l.useState)(null),t=Object(b.a)(n,2),e=t[0],r=t[1],o=Object(l.useState)(!1),c=Object(b.a)(o,2),i=c[0],a=c[1],u=function(){var n=Object(l.useState)({pos:{x:0,y:0},tetromino:g[0].shape,collided:!1}),t=Object(b.a)(n,2),e=t[0],r=t[1],o=function(n,t){var e=n.map((function(t,e){return n.map((function(n){return n[e]}))}));return t>0?e.map((function(n){return n.reverse()})):e.reverse()},c=Object(l.useCallback)((function(){r({pos:{x:4,y:0},tetromino:m().shape,collided:!1})}),[]);return[e,function(n){var t=n.x,e=n.y,o=n.collided;r((function(n){return Object(Z.a)(Object(Z.a)({},n),{},{pos:{x:n.pos.x+t,y:n.pos.y+e},collided:o})}))},c,function(n,t){var c=JSON.parse(JSON.stringify(e));c.tetromino=o(c.tetromino,t);for(var i=c.pos.x,a=1;x(c,n,{x:0,y:0});)if(c.pos.x+=a,(a=-(a+(a>0?1:-1)))>c.tetromino[0].length)return o(c.tetromino,-t),void(c.pos.x=i);r(c)}]}(),s=Object(b.a)(u,4),d=s[0],f=s[1],j=s[2],O=s[3],h=z(d,j),y=Object(b.a)(h,3),w=y[0],S=y[1],I=function(n){var t=Object(l.useState)(0),e=Object(b.a)(t,2),r=e[0],o=e[1],c=Object(l.useState)(0),i=Object(b.a)(c,2),a=i[0],u=i[1],s=Object(l.useState)(0),d=Object(b.a)(s,2),f=d[0],p=d[1],x=[40,100,300,1200],j=Object(l.useCallback)((function(){n>0&&(o((function(t){return t+x[n-1]*(f+1)})),u((function(t){return t+n})))}),[f,x,n]);return Object(l.useEffect)((function(){j()}),[j,n,r]),[r,o,a,u,f,p]}(y[2]),L=Object(b.a)(I,6),T=L[0],B=L[1],F=L[2],P=L[3],M=L[4],N=L[5],D=function(n){x(d,w,{x:n,y:0})||f({x:n,y:0})},G=function(){F>10*(M+1)&&(N((function(n){return n+1})),r(1e3/(M+1)+200)),x(d,w,{x:0,y:1})?(d.pos.y<1&&(a(!0),r(null)),f({x:0,y:0,collided:!0})):f({x:0,y:1,collided:!1})},H=function(n){var t=n.keyCode;i||(37===t?D(-1):39===t?D(1):40===t?(r(null),G()):38===t&&O(w,1))};return function(n,t){var e=Object(l.useRef)();Object(l.useEffect)((function(){e.current=n}),[n]),Object(l.useEffect)((function(){if(null!==t){var n=setInterval((function(){e.current()}),t);return function(){clearInterval(n)}}}),[t])}((function(){G()}),e),Object(v.jsx)(A,{role:"button",tabIndex:"0",onKeyDown:function(n){return H(n)},onKeyUp:function(n){var t=n.keyCode;i||40===t&&r(1e3/(M+1)+200)},children:Object(v.jsxs)(E,{children:[Object(v.jsx)(k,{stage:w}),Object(v.jsxs)("aside",{children:[i?Object(v.jsx)(J,{gameOver:i,text:"Game Over"}):Object(v.jsxs)("div",{children:[Object(v.jsx)(J,{text:"Score: ".concat(T)}),Object(v.jsx)(J,{text:"Rows: ".concat(F)}),Object(v.jsx)(J,{text:"Level: ".concat(M)})]}),Object(v.jsx)(C,{callBack:function(){S(p()),j(),a(!1),r(1e3),B(0),P(0),N(0)}})]})]})})},F=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(B,{})})},P=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,23)).then((function(t){var e=t.getCLS,r=t.getFID,o=t.getFCP,c=t.getLCP,i=t.getTTFB;e(n),r(n),o(n),c(n),i(n)}))};f.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(F,{})}),document.getElementById("root")),P()}},[[22,1,2]]]);
//# sourceMappingURL=main.548f1fde.chunk.js.map