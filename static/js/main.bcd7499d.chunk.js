(this["webpackJsonpreact-blog"]=this["webpackJsonpreact-blog"]||[]).push([[0],{47:function(e,t,c){},49:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(15),i=c.n(s),l=c(4),r=c(5),j=(c(47),c(25),c(19)),d=c.n(j),b=c(21),o=c(14),h=c(83),O=c(84),x=c(85),u=c(86),m=(c(49),c(22)),g=c.n(m),p=c(1),A=function(){var e=Object(a.useState)("Dayton"),t=Object(o.a)(e,2),c=t[0],n=(t[1],Object(a.useState)("?")),s=Object(o.a)(n,2),i=s[0],r=s[1],j=Object(a.useState)("?"),m=Object(o.a)(j,2),A=m[0],v=m[1],f="https://api.openweathermap.org/data/2.5/weather?q="+c+"&appid=782a3ff54a8d337614b461d3cb2c5333&units=imperial",N="https://openweathermap.org/img/wn/"+A+"@2x.png";return Object(a.useEffect)((function(){(function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get(f);case 2:t=e.sent,r(t.data.weather[0].main),v(t.data.weather[0].icon),console.log(t.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(p.jsx)(h.a,{id:"navbar",fluid:!0,className:"transparent fixed-top",children:Object(p.jsx)(O.a,{children:Object(p.jsxs)("div",{variant:"light",bg:"transparent",className:" navbar navbar-expand navbar-lightnavbar-inner",children:[Object(p.jsx)(x.a,{lg:4,md:4,sm:4,className:"left-links",children:Object(p.jsxs)("div",{className:" nav me-auto",children:[Object(p.jsx)("img",{className:"weatherImg ",src:N,alt:"weather icon"}),Object(p.jsx)("p",{className:"nav-link",children:i}),Object(p.jsx)("p",{className:"nav-link",children:"in"}),Object(p.jsx)("p",{className:"nav-link",children:c})]})}),Object(p.jsx)(x.a,{lg:4,md:4,sm:4,className:"text-center nav-logo",children:Object(p.jsxs)(u.a.Brand,{id:"nav-name",href:"#home",children:[Object(p.jsx)("img",{alt:"logo",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABKCAYAAAAc0MJxAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAASqADAAQAAAABAAAASgAAAAAdBadyAAAExElEQVR4Ae1cQW7jNhQVFSuRhQLxMru4QBezi2+Q9ASTOcHkCL3BzBGmJ6jnBtMTTHKCyQEK1LPL0gEKR4kTse9LlqIxLPlRkh2n/QQCSeT7j5+Pn4RI0fE8TbulwEMUjR/6/a/zMDxr45nYCw/4/mjDs5O2aeOiyKJx8vetjZMQ6XLBYx+j6LwNl4ut7wLuCDvqiMd78rzOuNb59BJCrfNpJ8tVKLJbVCgVilSAhGlEqVCkAiSsR+JSmPW8wbzff2+MGTjZJcmwjJ9H0Yfys8u9tfY4xxtrT125bJJM9uP4c87BXg0LFJHwsvcNIg1ZmwJnYW3oqgqzlTcdcEHsLwd3d+9W8ldk0nMUIuljI5GWK5aGdpUacqEd5w9heOHihsvQK96C0SPfER8Tl4oQ8keIqhB2N561sYvtEjZE/UfCgQYL11Jx9SOQQ9gcC8JCLFzGcs8kF6Ge+YwZ789mH58zXsfdfRSJzx/EW3SY0zxLDz0h/z8nFYrsfRVKhSIVIGEaUSoUqQAJ04hSoUgFSJhGlApFKkDCiiXMQxCMzN7eYZUd1kmH6bqqxS7A4pseqNqnII6vGrNk68ND+HNaxWGfnm735/PrvDwV6r7f/4IF61uqBajEdZ0E3gH2jf6Wa15x2yu+7U2D2exn+DJlubB/ldWfdfYIC+PLSlvf9+57vT+xHXMumHSOwor6baXBcgEqQYOHy9l1z49hOEJ55mQd0K1sgIhIG8GapX47jIiyLtlkbu3vbGUy/NCLExq/QaD1/aELfep3Nuw4s5Iu6dDbv7v7DZbyV5nkUzaG5yn+JKKmlUCiAFs08LlZKvxoYI6hNi0qtvYK7T5jafT1gFRKhVKhSAVImEaUCkUqQMI0olQoUgESphGlQpEKkDCNKBWKVICEpWu99MCCMe/X2JwU3/mtDddgd7M4SUJZqy7SCdaNX/OHlVdrP+OI0FjKso073/+E+8pNOwEupTdLz6/j0Zg3JaEGcPqs1nFjRigfCyafoybywCacJrlhsbuEa+D399z/NKKCJDmf4xgMtiFE5dXJ2ov0yIzsR/l+K6HWhvxqD7JcY07qiuvKUr9lP0q2inB0CddxFR67odMAB87y8lQoE8cTZHzKM1dd0bgz5B+XQncVjMszRrheJi3mKMxUE5ejS/nQ26jT2KifbqICM58XPb4J/jJnNpmXczZwL18zHoPgXZe/XdnzvOte6SvJBtz+gXIrQkmNvdlMen9rEfBDKzt42MrQ68DPF6dQocguUKFUKFIBEqYRpUKRCpAwjSgVilSAhGlEqVCkAiSs0RIGK+/jutNqq+rGAvanxPePcKrvr1XlLnlYZP/iJ8mNDYJ/nOxk96Nh4oUyZoI6Thf1XOBs0sXifv0Fe0D24CDFYR+o3Y8cxT4IvETY2nBl7Vnv+wJBz1EmScY06ysAuraHFgqHSy9B/it68Qo63DbW4nlzvzFFYejOdSv+SzukPQXPrtzIaeD8H8/ItY1fcuIu51r8ULENHW1LRxTN+B8FqlBkx6pQKhSpAAnTiFKhSAVI2NYjKv1CSzq3Dob3ock6TFflWxGqF8fXcDh7Sa35jM00qvRDn1u8NL7az1+1bbVhOKwFkIVd8ZDVKcxFgX8BOyhR+8dqrGwAAAAASUVORK5CYII=",width:"30",height:"30",className:"d-inline-block align-top"})," ","React, Redux News Agregator"]})}),Object(p.jsx)(x.a,{lg:4,md:4,sm:4,className:"right-links",children:Object(p.jsx)(h.a,{fluid:!0,children:Object(p.jsxs)("div",{className:" nav me-auto justify-content-end",children:[Object(p.jsx)(l.b,{to:"/",className:"nav-link",children:"Home"}),Object(p.jsx)(l.b,{to:"/login",className:"nav-link",children:"Login"}),Object(p.jsx)(l.b,{to:"/signup",className:"nav-link",children:"Sign Up"})]})})})]})})})},v=(c(77),c(78),c.p+"static/media/people.4d4b5d74.jpg");var f=function(e){var t=e.header,c=e.date,a=e.author,n=e.link,s=e.onClick;return Object(p.jsxs)("div",{children:[Object(p.jsx)(l.b,{to:"/"+n,onClick:s,children:Object(p.jsx)("h6",{children:t})}),Object(p.jsxs)("div",{className:"date-author",children:[Object(p.jsx)("p",{children:c}),Object(p.jsx)("p",{children:a})]})]})},N=c(16),C=function(e){return{type:"UPDATE_ARTICLE",article:e}},k=function(){var e=Object(N.c)((function(e){return e.url})),t=(Object(N.c)((function(e){return e.article})),Object(N.b)()),c=Object(a.useState)(null),n=Object(o.a)(c,2),s=n[0],i=n[1],r=Object(a.useState)(null),j=Object(o.a)(r,2),u=j[0],m=j[1],A=Object(a.useState)({people:v}),k=Object(o.a)(A,2),E=k[0],w=k[1],S=Object(a.useState)("ai"),I=Object(o.a)(S,2),T=(I[0],I[1]),K=function(e){var c="http://newsapi.org/v2/everything?q=".concat(e.target.innerHTML,"&apiKey=").concat("41d85d23b2f640b0892f12ae01b9a373");T(e.target.innerHTML),t({type:"UPDATE_URL",url:c})},L=function(e){t(C(s))};return Object(a.useEffect)((function(){(function(){var c=Object(b.a)(d.a.mark((function c(){var a;return d.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,g.a.get(e);case 2:a=c.sent,t(C(a.data.articles)),i(a.data.articles),m(a.data.articles[0].urlToImage),w(a.data.articles[14].urlToImage);case 7:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}})()(),console.log("tried")}),[e]),Object(p.jsxs)("div",{children:[Object(p.jsx)(h.a,{id:"header",style:{backgroundImage:"url("+u+")"},className:"header",fluid:!0,children:Object(p.jsxs)("div",{className:"overlay",children:[Object(p.jsx)(O.a,{children:Object(p.jsx)(h.a,{id:"category-nav",className:"line transparent",fluid:!0,children:Object(p.jsx)("div",{className:"navbar navbar-expand navbar-light",children:Object(p.jsxs)("div",{className:"nav",children:[Object(p.jsx)(l.b,{onClick:K,className:"nav-2-item text-white",to:"#",children:"World"}),Object(p.jsx)(l.b,{onClick:K,className:"nav-2-item text-white",to:"#",children:"Politics"}),Object(p.jsx)(l.b,{onClick:K,className:"nav-2-item text-white",to:"#",children:"Health"}),Object(p.jsx)(l.b,{onClick:K,className:"nav-2-item text-white",to:"#",children:"Business"}),Object(p.jsx)(l.b,{onClick:K,className:"nav-2-item text-white",to:"#",children:"Tech"}),Object(p.jsx)(l.b,{onClick:K,className:"nav-2-item text-white",to:"#",children:"Environment"}),Object(p.jsx)(l.b,{onClick:K,className:"nav-2-item text-white",to:"#",children:"Sports"}),Object(p.jsx)("h1",{})]})})})}),Object(p.jsxs)(O.a,{id:"headline",children:[Object(p.jsxs)(x.a,{lg:7,md:12,sm:12,id:"headlineH1",className:"col-center text-left",children:[Object(p.jsx)("h1",{children:s?Object(p.jsx)(l.b,{to:"/"+s[0].title,onClick:L,children:s[0].title}):"Loading"}),Object(p.jsx)("p",{sm:6,className:"date",children:s?s[0].publishedAt:"loading"}),Object(p.jsx)("p",{sm:6,className:"author lead",children:s?s[0].author:"loading"})]}),Object(p.jsx)(x.a,{lg:4,md:12,sm:12,id:"header-scroll",className:"col-center scrollbar-red",children:Object(p.jsx)("div",{className:"scroll-div",children:s?s.slice(3,7).map((function(e,t){return Object(p.jsxs)("div",{children:[Object(p.jsxs)(l.b,{to:"/"+e.title,onClick:L,children:[Object(p.jsx)("h1",{children:e.title}),Object(p.jsx)("p",{sm:6,className:"date",children:e.publishedAt}),Object(p.jsx)("p",{sm:6,className:"author lead",children:e.author})]}),Object(p.jsx)("hr",{})]},t)})):"loading"})})]}),Object(p.jsxs)("div",{id:"breakingCon",children:[Object(p.jsx)(O.a,{className:"breakingHead",children:Object(p.jsx)("h5",{className:"h5 text-center",children:"Breaking News"})}),Object(p.jsxs)(O.a,{id:"breakingSec",children:[Object(p.jsx)(x.a,{md:12,children:s?Object(p.jsxs)(O.a,{className:"breakingNewsItem",children:[Object(p.jsx)(x.a,{children:Object(p.jsx)("img",{src:s[1].urlToImage,alt:"people"})}),Object(p.jsxs)(x.a,{className:"breakCopy",children:[Object(p.jsx)(l.b,{to:"/"+s[1].title,onClick:L,children:Object(p.jsx)("h6",{children:s[1].title})}),Object(p.jsx)("p",{children:s[1].author})]}),Object(p.jsx)(x.a,{children:Object(p.jsx)("img",{src:s[0].urlToImage,alt:"people"})}),Object(p.jsxs)(x.a,{className:"breakCopy",children:[Object(p.jsx)(l.b,{to:"/"+s[2].title,onClick:L,children:Object(p.jsx)("h6",{children:s[2].title})}),Object(p.jsx)("p",{children:s[2].author})]})]}):"Loading..."}),Object(p.jsx)(x.a,{md:4})]})]})]})}),Object(p.jsx)(h.a,{id:"features",fluid:!0,children:Object(p.jsxs)(O.a,{children:[Object(p.jsx)(x.a,{className:" text-start feature-left",lg:3,md:0,sm:0,children:s?s.slice(7,10).map((function(e){return Object(p.jsx)(O.a,{children:Object(p.jsx)(f,{link:e.title,header:e.title,date:e.publishedAt,author:e.author,onClick:L})})})):"Loading"}),Object(p.jsx)(x.a,{className:"imgCon",md:6,sm:12,style:{backgroundImage:"url("+E+")"},children:Object(p.jsx)("div",{className:"featureImgOverlay",children:Object(p.jsxs)(O.a,{className:"featCopy",children:[s?Object(p.jsx)(l.b,{to:"/"+s[14].title,onClick:L,children:Object(p.jsx)("h1",{children:s[14].title})}):"Loading",Object(p.jsx)(x.a,{children:Object(p.jsx)("p",{className:"date",children:s?s[14].publishedAt:"Loading"})}),Object(p.jsx)(x.a,{children:Object(p.jsx)("p",{className:"author lead",children:s?s[14].author:"Loading"})})]})})}),Object(p.jsx)(x.a,{className:"feature-right",md:3,sm:12,children:Object(p.jsx)(O.a,{className:"featRRow",children:s?s.slice(10,14).map((function(e){return Object(p.jsxs)("div",{className:"featRRow",children:[Object(p.jsx)(x.a,{children:Object(p.jsx)("img",{className:"rColImg",src:e.urlToImage,alt:"people"})}),Object(p.jsxs)(x.a,{children:[Object(p.jsx)(l.b,{to:"/"+e.title,children:Object(p.jsx)("h6",{children:e.title})}),Object(p.jsx)("p",{className:" imgAuthor lead",children:e.author})]})]})})):"Loading"})})]})})]})},E=(c(80),function(e){var t=e.match.params.title,c=Object(a.useState)(null),n=Object(o.a)(c,2),s=n[0],i=n[1],l=Object(N.c)((function(e){return e.article})).find((function(e){return t===e.title}));return Object(a.useEffect)((function(){i(l)}),[]),Object(p.jsx)("div",{id:"postDiv",children:s?Object(p.jsxs)("div",{className:"postDiv",children:[Object(p.jsx)("img",{src:s.urlToImage,alt:"urlToimage"}),Object(p.jsxs)("div",{className:"content",children:[Object(p.jsx)("h1",{children:s.title}),Object(p.jsxs)("p",{children:["By: ",s.author]}),Object(p.jsx)("p",{children:s.content})]})]}):"loading"})}),w=function(){return Object(p.jsx)("div",{children:Object(p.jsx)("h1",{style:{color:"red"},children:"About Component"})})},S=function(){return Object(p.jsx)("div",{children:Object(p.jsx)("h1",{children:"login page"})})},I=function(){return Object(p.jsx)("div",{children:Object(p.jsx)("h1",{children:"sign up"})})};var T=function(){return Object(p.jsx)(l.a,{children:Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(A,{sticky:"top"}),Object(p.jsxs)(r.c,{children:[Object(p.jsx)(r.a,{exact:!0,path:"/#/",component:k}),Object(p.jsx)(r.a,{path:"/about",component:w}),Object(p.jsx)(r.a,{path:"/:title",component:E}),Object(p.jsx)(r.a,{path:"/signup",component:I}),Object(p.jsx)(r.a,{path:"/login",component:S})]})]})})},K=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,87)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))},L=c(40),y=c(17),D={url:"http://newsapi.org/v2/everything?q=ai&apiKey=".concat("41d85d23b2f640b0892f12ae01b9a373"),article:""};var q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_URL":return Object(y.a)(Object(y.a)({},e),{},{url:t.url});case"UPDATE_ARTICLE":return Object(y.a)(Object(y.a)({},e),{},{article:t.article});default:return e}},B=Object(L.a)(q,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(N.a,{store:B,children:Object(p.jsx)(T,{})})}),document.getElementById("root")),K()}},[[81,1,2]]]);
//# sourceMappingURL=main.bcd7499d.chunk.js.map