(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/0+H":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI")),o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery;return n||a&&(void 0!==o&&o)}t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))}},"/a9y":function(e,t,n){"use strict";var r=n("/GRZ"),a=n("i2R6"),o=n("tCBg"),i=n("T0f4"),u=n("48fX");function l(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var c=n("AroE");t.__esModule=!0,t.default=void 0;var f=c(n("q1tI")),s=c(n("8Kt/")),d={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function p(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}var h=function(e){u(c,e);var t,n=(t=c,function(){var e,n=i(t);if(l()){var r=i(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return o(this,e)});function c(){return r(this,c),n.apply(this,arguments)}return a(c,[{key:"render",value:function(){var e=this.props.statusCode,t=this.props.title||d[e]||"An unexpected error has occurred";return f.default.createElement("div",{style:v.error},f.default.createElement(s.default,null,f.default.createElement("title",null,e,": ",t)),f.default.createElement("div",null,f.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?f.default.createElement("h1",{style:v.h1},e):null,f.default.createElement("div",{style:v.desc},f.default.createElement("h2",{style:v.h2},t,"."))))}}]),c}(f.default.Component);t.default=h,h.displayName="ErrorPage",h.getInitialProps=p,h.origGetInitialProps=p;var v={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},"04ac":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){return n("/a9y")}])},"5fIB":function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},"8Kt/":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI")),o=r(n("Xuae")),i=n("lwAK"),u=n("FYa8"),l=n("/0+H");function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=c;var s=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(c(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var u=0,l=s.length;u<l;u++){var c=s[u];if(a.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?o=!1:n.add(c);else{var f=a.props[c],d=r[c]||new Set;d.has(f)?o=!1:(d.add(f),r[c]=d)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}var p=o.default();function h(e){var t=e.children;return a.default.createElement(i.AmpStateContext.Consumer,null,(function(e){return a.default.createElement(u.HeadManagerContext.Consumer,null,(function(n){return a.default.createElement(p,{reduceComponentsToState:d,handleStateChange:n,inAmpMode:l.isInAmpMode(e)},t)}))}))}h.rewind=p.rewind,t.default=h},Xuae:function(e,t,n){"use strict";var r=n("/GRZ"),a=n("qXWd"),o=n("i2R6"),i=n("tCBg"),u=n("T0f4"),l=n("48fX"),c=n("mPvQ");function f(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}Object.defineProperty(t,"__esModule",{value:!0});var s=n("q1tI"),d=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(c(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(c){l(h,c);var s,p=(s=h,function(){var e,t=u(s);if(f()){var n=u(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return i(this,e)});function h(e){var o;return r(this,h),o=p.call(this,e),d&&(t.add(a(o)),n(a(o))),o}return o(h,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),o(h,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),h}(s.Component)}},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},lwAK:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI"));t.AmpStateContext=a.createContext({})},mPvQ:function(e,t,n){var r=n("5fIB"),a=n("rlHP"),o=n("kG2m");e.exports=function(e){return r(e)||a(e)||o()}},rlHP:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}}},[["04ac",0,2,1]]]);