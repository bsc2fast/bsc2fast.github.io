(function(e){function t(t){for(var o,a,c=t[0],s=t[1],u=t[2],d=0,f=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={app:0},i=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"034f":function(e,t,n){"use strict";n("85ec")},"76a0":function(e,t,n){},"85ec":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Home")],1)},i=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"home"},[e._v(" Hello Deep Poet "),n("h1",[e._v("Simple AI Bot")]),n("h2",[e._v("with Web Speech API")]),n("button",{on:{click:function(t){return e.startReco()}}},[n("i",{staticClass:"fa fa-microphone"})]),e._m(0)])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("You said: "),n("em",{staticClass:"output-you"},[e._v("...")])]),n("p",[e._v("Bot replied: "),n("em",{staticClass:"output-bot"},[e._v("...")])])])}],s=(n("99af"),document.querySelector(".output-you")),u=document.querySelector(".output-bot"),l=window.SpeechRecognition||window.webkitSpeechRecognition,d=new l;function f(e){var t=window.speechSynthesis,n=new SpeechSynthesisUtterance;n.text=e,t.speak(n)}d.lang="en-US",d.interimResults=!1,d.maxAlternatives=1,d.addEventListener("speechstart",(function(){console.log("Speech has been detected.")})),d.addEventListener("result",(function(e){console.log("Result has been detected.");var t=e.results.length-1,n=e.results[t][0].transcript;console.log(n),f("Your input is, "+n),s&&(s.textContent=n),console.log("Confidence: "+e.results[0][0].confidence)})),d.addEventListener("speechend",(function(){d.stop()})),d.addEventListener("error",(function(e){u&&(u.textContent="Error: "+e.error)})),window.onbeforeunload=function(){return"Data will be lost if you leave the page, are you sure?"};var p=o["a"].extend({name:"Home",components:{},destroyed:function(){},mounted:function(){},created:function(){this._log("created")},data:function(){return{}},methods:{_log:function(){for(var e,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];(e=console).log.apply(e,["|Home|"].concat(n))},_err:function(){for(var e,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];(e=console).error.apply(e,["|Home|"].concat(n))},startReco:function(){d.start()}},watch:{},computed:{}}),v=p,h=(n("d0a2"),n("2877")),g=Object(h["a"])(v,a,c,!1,null,"49c401a7",null),m=g.exports,w={name:"App",metaInfo:{title:"Deep Poet"},components:{Home:m}},b=w,y=(n("034f"),Object(h["a"])(b,r,i,!1,null,null,null)),_=y.exports,S=n("ddb8");o["a"].prototype.$workbox=S,o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(_)}}).$mount("#app")},d0a2:function(e,t,n){"use strict";n("76a0")},ddb8:function(e,t,n){"use strict";n.r(t);var o,r=n("acfa");"serviceWorker"in navigator?(o=new r["a"]("".concat("/","service-worker.js")),o.addEventListener("activated",(function(e){e.isUpdate||console.log("Service worker activated for the first time!")})),o.addEventListener("waiting",(function(e){console.log("waiting"),o.messageSkipWaiting()})),o.addEventListener("controlling",(function(){console.log("controlling"),window.location.reload()})),o.addEventListener("installed",(function(e){console.log("SW installed")})),o.addEventListener("message",(function(e){if("CACHE_UPDATED"===e.data.type){var t=e.data.payload.updatedURL;console.log("A newer version of ".concat(t," is available!"))}})),o.register()):o=null;t["default"]=o}});
//# sourceMappingURL=app.35397368.js.map