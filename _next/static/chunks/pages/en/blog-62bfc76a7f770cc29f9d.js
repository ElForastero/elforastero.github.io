_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{HhwF:function(e){e.exports=JSON.parse('{"bookshelf":"Bookshelf","contact":"Contact","cv":"CV"}')},IrDb:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var r=n("wx14"),a=n("Ff2n"),o=n("q1tI"),c=n.n(o),i=n("QAuT"),s=n.n(i),l=n("ZjKb"),u=n.n(l),b=c.a.createElement,g=e=>{var{children:t,icon:n,external:o=!1}=e,c=Object(a.a)(e,["children","icon","external"]);return o?b("a",Object(r.a)({className:u.a.root,target:"_blank"},c),b("span",{className:u.a.icon},n),t):b(s.a,c,b("a",{className:u.a.root},b("span",{className:u.a.icon},n),t))}},K346:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return m})),n.d(t,"default",(function(){return h}));var r=n("rePB"),a=n("MA9B"),o=n.n(a),c=n("q1tI"),i=n.n(c),s=n("RDGn"),l=n("HhwF"),u=n("OpS/"),b=n("Ow7S"),g=i.a.createElement;function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d={common:l,meta:u,blog:b},m=!0;function h(e){return g(o.a,{lang:"en",namespaces:d,internals:{defaultLangRedirect:"lang-path",defaultLanguage:"en",isStaticMode:!0}},g(s.a,e))}h=Object.assign(h,f({},s.a)),s.a&&s.a.getInitialProps&&(h.getInitialProps=e=>s.a.getInitialProps(f(f({},e),{},{lang:"en"})))},"OpS/":function(e){e.exports=JSON.parse('{"home":{"title":"Blog \ufe63 Eugene Dzhumak","description":"Notes about programming, frontend, interesting projects and IT industry in general.","keywords":"Eugene Dzhumak, personal blog, cv"},"bookshelf":{"title":"Bookshelf \ufe63 Eugene Dzhumak","description":"Programmer\'s library. My personal rating and reviews of the books I read.","keywords":"bookshelf, books, reviews, programmer\'s library, frontend"},"blog":{"title":"Notes \ufe63 Eugene Dzhumak","description":"Notes about programming, frontend, interesting projects and IT industry in general.","keywords":"blog, notes, posts, Eugene Dzhumak"},"post":{"title":"{{title}} \ufe63 Eugene Dzhumak"},"schema":{"author":{"name":"Eugene Dzhumak","alternateName":"ElForastero","knowsAbout":"Computer Science, Frontend, Programming, JavaScript"}}}')},Ow7S:function(e){e.exports=JSON.parse('{"heading":"All notes"}')},RDGn:function(e,t,n){"use strict";n("HaE+");var r=n("h4VS"),a=n("rePB"),o=n("q1tI"),c=n.n(o),i=n("BIX1"),s=n.n(i),l=n("8Kt/"),u=n.n(l),b=(n("4VHh"),n("sZNS")),g=n("ZQUG"),p=n("IrDb"),f=n("egDE"),d=n("SluB"),m=n.n(d),h=c.a.createElement;function O(){var e=Object(r.a)(["blog:heading"]);return O=function(){return e},e}function w(){var e=Object(r.a)(["meta:blog.keywords"]);return w=function(){return e},e}function j(){var e=Object(r.a)(["meta:blog.description"]);return j=function(){return e},e}function y(){var e=Object(r.a)(["meta:blog.title"]);return y=function(){return e},e}function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=({posts:e})=>{var{t:t,lang:n}=s()(),r=e[n].sort(({datePublished:e},{datePublished:t})=>new Date(t).getTime()-new Date(e).getTime()).reduce((e,t)=>{var n,r=new Date(t.datePublished).getFullYear();return N(N({},e),{},{[r]:[...null!==(n=e[r])&&void 0!==n?n:[],t]})},{});return h(b.a,null,h(u.a,null,h("title",null,t(y())),h("meta",{name:"description",content:t(j())}),h("meta",{name:"keywords",content:t(w())})),h(f.a,{url:"/blog"}),h("section",{className:m.a.root},h(g.a,{className:m.a.heading},t(O())," "),Object.keys(r).reverse().map(e=>h("section",{className:m.a.section,key:e},h(g.b,{className:m.a.heading},e),h("table",{className:m.a.table},h("tbody",null,r[e].map(({slug:e,title:t,icon:r,datePublished:a})=>h("tr",{key:e},h("td",{className:m.a.dateCell},h("time",{className:m.a.date},new Date(a).toLocaleDateString(n,{day:"numeric",month:"2-digit"}))),h("td",null,h(p.a,{key:e,icon:r,href:"/blog/[slug]",as:"/blog/".concat(e)},t))))))))))}},SluB:function(e,t,n){e.exports={root:"_4321",heading:"_8278",section:"_6915",table:"_2c9e",dateCell:"ab6e",date:"_1f62"}},ZQUG:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n("q1tI"),a=n.n(r),o=n("zAUr"),c=n("u8NE"),i=n.n(c),s=a.a.createElement,l=({className:e,children:t})=>s("h2",{className:Object(o.a)([i.a.heading2,e])},t),u=a.a.createElement,b=({className:e,children:t})=>u("h3",{className:Object(o.a)([i.a.heading3,e])},t)},ZjKb:function(e,t,n){e.exports={root:"_5761",icon:"_88e0"}},egDE:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("q1tI"),a=n.n(r),o=n("8Kt/"),c=n.n(o),i=n("dUq6"),s=a.a.createElement,l=({url:e})=>s(c.a,null,i.allLanguages.map(t=>s("link",{rel:"alternate",hrefLang:t,href:"".concat("https://elforastero.github.io","/").concat(t).concat(e)})),s("link",{rel:"alternate",hrefLang:"x-default",href:"".concat("https://elforastero.github.io").concat(e)}))},tqhz:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/en/blog",function(){return n("K346")}])},u8NE:function(e,t,n){e.exports={heading2:"_6b2e",heading3:"_2303"}}},[["tqhz",0,2,1,3,4]]]);