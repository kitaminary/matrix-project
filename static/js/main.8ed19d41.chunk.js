(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{30:function(t,e,n){},31:function(t,e,n){},34:function(t,e,n){"use strict";n.r(e);var a,r=n(0),c=n(10),i=n(4),u=n(35),o=(n(30),n(9)),l=n(8),s=n(12),b=(n(31),n(19)),d=n.n(b),f=n(5);!function(t){t.SET_M="SET_M",t.SET_N="SET_N",t.SET_TABLE="SET_TABLE",t.SET_AVERAGE="SET_AVERAGE",t.SET_X="SET_X"}(a||(a={}));var j=Object(f.b)(a.SET_M),h=Object(f.b)(a.SET_N),O=Object(f.b)(a.SET_TABLE),_=Object(f.b)(a.SET_AVERAGE),v=Object(f.b)(a.SET_X),m=function(t){return t.M},p=function(t){return t.N},x=function(t){return t.table},E=function(t){return t.x},y=n(1);function g(t,e){var n=[];if(e.length>0)for(var a=0;a<=t;a++)n.push({id:Object(u.a)(),value:(Math.floor(100*Math.random())+1)*e[a].value});return n}var T=function(t){for(var e=0,n=0;n<t.length;n++)e+=t[n].value;return e},N=function(t,e,n){for(var a=[],r=0;a.length<=t;)e.forEach((function(t){t.find((function(t){return t.value===n+r&&a.push(t.id),t.value===n-r&&a.push(t.id),0}))})),r-=1;return a},S=function(t){var e=[];t.length>0&&(e=new Array(t[0].length)),e.fill(0),console.log(t);var n,a=Object(s.a)(t);try{for(a.s();!(n=a.n()).done;){var r,c=n.value,i=Object(s.a)(c);try{for(i.s();!(r=i.n()).done;){var u=r.value;e[c.indexOf(u)]+=u.value}}catch(o){i.e(o)}finally{i.f()}}}catch(o){a.e(o)}finally{a.f()}return e.map((function(e){return Math.round(e/t.length)}))},M=function(){var t=Object(i.b)(),e=Object(i.c)(m),n=Object(i.c)(p),a=Object(i.c)(E),c=Object(i.c)(x),b=Object(r.useState)([]),f=Object(l.a)(b,2),j=f[0],h=f[1],_=function(){for(var a=[],r=function(t){a.push(e.map((function(e){return{id:Object(u.a)(),value:e.value*n[t].value}})))},c=0;c<n.length;c++)r(c);return t(O(a)),a};return Object(r.useEffect)((function(){S(c),t(O(c)),_(),t(O(_()))}),[]),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("table",{className:" matrix__table table is-bordered is-striped is-narrow is-hoverable content is-small",children:Object(y.jsxs)("tbody",{className:"matrix__table__body",children:[c.map((function(e){return Object(y.jsxs)("tr",{className:"matrix__table__row",children:[e.map((function(e){return Object(y.jsx)("td",{className:"matrix__table__col p-0",children:Object(y.jsx)("button",{type:"button",className:d()("button is-white matrix__table__col-buttom is-small has-text-grey-dark",{"has-background-grey-light":j.includes(e.id)}),onFocus:function(){return h(N(a,c,e.value))},onMouseOver:function(){return h(N(a,c,e.value))},onMouseDown:function(){return function(e){var n,a=Object(o.a)(c),r=Object(s.a)(a);try{for(r.s();!(n=r.n()).done;){var i=n.value;a[c.indexOf(i)]=i.map((function(t){return t.id===e?{value:t.value+1,id:t.id}:{value:t.value,id:t.id}}))}}catch(u){r.e(u)}finally{r.f()}t(O(a))}(e.id)},children:Object(y.jsx)("b",{children:e.value})})},Object(u.a)())})),Object(y.jsx)("td",{className:" has-background-primary-light matrix__table__sum-buttom p-0",children:Object(y.jsx)("button",{type:"button",className:"button is-primary is-light is-small matrix__table__col-buttom",onMouseDown:function(){t(O(c.filter((function(t){return c.indexOf(t)!==c.indexOf(e)}))))},children:Object(y.jsx)("b",{children:T(e)})})})]},c.indexOf(e))})),Object(y.jsx)("tr",{className:"matrix__table__row p-0",children:S(c).map((function(t){return Object(y.jsx)("td",{className:" matrix__table__row-average p-0 has-background-primary-light py-1 ",children:Object(y.jsx)("b",{children:t})},Object(u.a)())}))})]})}),Object(y.jsx)("button",{type:"button",onClick:function(){return t(O([].concat(Object(o.a)(c),[g(c[0].length-1,n)])))},children:"Add row"})]})},w=function(t){return Math.floor(Math.random()*t)+1},A=function(){var t=[],e=[],n=Object(i.b)();return Object(r.useEffect)((function(){}),[]),function(){for(var a,r=w(20),c=w(20),i=0;i<=r;i++)e.push({id:Object(u.a)(),value:w(100)});for(var o=0;o<=c;o++)t.push({id:Object(u.a)(),value:w(100)});n(j(t)),n(h(e)),a=w(r+c-1),n(v(a))}(),Object(y.jsx)("div",{className:"matrix",children:Object(y.jsx)("div",{className:"table-container",children:Object(y.jsx)(M,{})})})},k=Object(f.c)({M:[],N:[],table:[],average:[],delete:[],x:0},(function(t){t.addCase(j,(function(t,e){t.M=e.payload})).addCase(h,(function(t,e){t.N=e.payload})).addCase(O,(function(t,e){t.table=e.payload})).addCase(_,(function(t,e){t.average=e.payload})).addCase(v,(function(t,e){t.x=e.payload}))})),C=Object(f.a)({reducer:k});c.render(Object(y.jsx)(r.StrictMode,{children:Object(y.jsx)(i.a,{store:C,children:Object(y.jsx)(A,{})})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.8ed19d41.chunk.js.map