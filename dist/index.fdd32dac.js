var e,t,n,i,r,s,a,o,l,h,u=globalThis,c={},d={},f=u.parcelRequirea6aa;null==f&&((f=function(e){if(e in c)return c[e].exports;if(e in d){var t=d[e];delete d[e];var n={id:e,exports:{}};return c[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){d[e]=t},u.parcelRequirea6aa=f),f.register;var g,p=f("fhN3L"),m=f("7xvHX"),y=f("eryG9"),v=f("5Z2ef"),w=f("gMVVg"),E={},T=T||{},b=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==u?u:"undefined"!=typeof self?self:{})||self;function S(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function _(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function C(e,t,n){return e.call.apply(e.bind,arguments)}function I(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function A(e,t,n){return(A=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?C:I).apply(null,arguments)}function k(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function D(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return t.prototype[n].apply(e,r)}}function N(){this.s=this.s,this.o=this.o}N.prototype.s=!1,N.prototype.sa=function(){this.s||(this.s=!0,this.N())},N.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const x=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return -1};function L(e){let t=e.length;if(0<t){let n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function R(e,t){for(let t=1;t<arguments.length;t++){let n=arguments[t];if(S(n)){let t=e.length||0,i=n.length||0;e.length=t+i;for(let r=0;r<i;r++)e[t+r]=n[r]}else e.push(n)}}function O(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}O.prototype.h=function(){this.defaultPrevented=!0};var P=function(){if(!b.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{let e=()=>{};b.addEventListener("test",e,t),b.removeEventListener("test",e,t)}catch(e){}return e}();function M(e){return/^[\s\xa0]*$/.test(e)}function V(){var e=b.navigator;return e&&(e=e.userAgent)?e:""}function F(e){return -1!=V().indexOf(e)}function U(e){return U[" "](e),e}U[" "]=function(){};var j=F("Opera"),q=F("Trident")||F("MSIE"),B=F("Edge"),K=B||q,$=F("Gecko")&&!(-1!=V().toLowerCase().indexOf("webkit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),z=-1!=V().toLowerCase().indexOf("webkit")&&!F("Edge");function G(){var e=b.document;return e?e.documentMode:void 0}e:{var Q,H="",W=(Q=V(),$?/rv:([^\);]+)(\)|;)/.exec(Q):B?/Edge\/([\d\.]+)/.exec(Q):q?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Q):z?/WebKit\/(\S+)/.exec(Q):j?/(?:Version)[ \/]?(\S+)/.exec(Q):void 0);if(W&&(H=W?W[1]:""),q){var X=G();if(null!=X&&X>parseFloat(H)){i=String(X);break e}}i=H}var Y=b.document&&q&&(G()||parseInt(i,10))||void 0;function J(e,t){if(O.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if($){e:{try{U(t.nodeName);var r=!0;break e}catch(e){}r=!1}r||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:Z[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&J.$.h.call(this)}}D(J,O);var Z={2:"touch",3:"pen",4:"mouse"};J.prototype.h=function(){J.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ee="closure_listenable_"+(1e6*Math.random()|0),et=0;function en(e,t,n,i,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.la=r,this.key=++et,this.fa=this.ia=!1}function ei(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function er(e,t,n){for(let i in e)t.call(n,e[i],i,e)}function es(e){let t={};for(let n in e)t[n]=e[n];return t}const ea="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function eo(e,t){let n,i;for(let t=1;t<arguments.length;t++){for(n in i=arguments[t])e[n]=i[n];for(let t=0;t<ea.length;t++)n=ea[t],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function el(e){this.src=e,this.g={},this.h=0}function eh(e,t){var n=t.type;if(n in e.g){var i,r=e.g[n],s=x(r,t);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(ei(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function eu(e,t,n,i){for(var r=0;r<e.length;++r){var s=e[r];if(!s.fa&&s.listener==t&&!!n==s.capture&&s.la==i)return r}return -1}el.prototype.add=function(e,t,n,i,r){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var a=eu(e,t,i,r);return -1<a?(t=e[a],n||(t.ia=!1)):((t=new en(t,this.src,s,!!i,r)).ia=n,e.push(t)),t};var ec="closure_lm_"+(1e6*Math.random()|0),ed={};function ef(e,t,n,i,r,s){if(!t)throw Error("Invalid event type");var a=_(r)?!!r.capture:!!r,o=ey(e);if(o||(e[ec]=o=new el(e)),(n=o.add(t,n,i,a,s)).proxy)return n;if(i=function e(t){return em.call(e.src,e.listener,t)},n.proxy=i,i.src=e,i.listener=n,e.addEventListener)P||(r=a),void 0===r&&(r=!1),e.addEventListener(t.toString(),i,r);else if(e.attachEvent)e.attachEvent(ep(t.toString()),i);else if(e.addListener&&e.removeListener)e.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function eg(e){if("number"!=typeof e&&e&&!e.fa){var t=e.src;if(t&&t[ee])eh(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(ep(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=ey(t))?(eh(n,e),0==n.h&&(n.src=null,t[ec]=null)):ei(e)}}}function ep(e){return e in ed?ed[e]:ed[e]="on"+e}function em(e,t){if(e.fa)e=!0;else{t=new J(t,this);var n=e.listener,i=e.la||e.src;e.ia&&eg(e),e=n.call(i,t)}return e}function ey(e){return(e=e[ec])instanceof el?e:null}var ev="__closure_events_fn_"+(1e9*Math.random()>>>0);function ew(e){return"function"==typeof e?e:(e[ev]||(e[ev]=function(t){return e.handleEvent(t)}),e[ev])}function eE(){N.call(this),this.i=new el(this),this.S=this,this.J=null}function eT(e,t){var n,i=e.J;if(i)for(n=[];i;i=i.J)n.push(i);if(e=e.S,i=t.type||t,"string"==typeof t)t=new O(t,e);else if(t instanceof O)t.target=t.target||e;else{var r=t;eo(t=new O(i,e),r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var a=t.g=n[s];r=eb(a,i,!0,t)&&r}if(r=eb(a=t.g=e,i,!0,t)&&r,r=eb(a,i,!1,t)&&r,n)for(s=0;s<n.length;s++)r=eb(a=t.g=n[s],i,!1,t)&&r}function eb(e,t,n,i){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var r=!0,s=0;s<t.length;++s){var a=t[s];if(a&&!a.fa&&a.capture==n){var o=a.listener,l=a.la||a.src;a.ia&&eh(e.i,a),r=!1!==o.call(l,i)&&r}}return r&&!i.defaultPrevented}D(eE,N),eE.prototype[ee]=!0,eE.prototype.removeEventListener=function(e,t,n,i){!function e(t,n,i,r,s){if(Array.isArray(n))for(var a=0;a<n.length;a++)e(t,n[a],i,r,s);else(r=_(r)?!!r.capture:!!r,i=ew(i),t&&t[ee])?(t=t.i,(n=String(n).toString())in t.g&&-1<(i=eu(a=t.g[n],i,r,s))&&(ei(a[i]),Array.prototype.splice.call(a,i,1),0==a.length&&(delete t.g[n],t.h--))):t&&(t=ey(t))&&(n=t.g[n.toString()],t=-1,n&&(t=eu(n,i,r,s)),(i=-1<t?n[t]:null)&&eg(i))}(this,e,t,n,i)},eE.prototype.N=function(){if(eE.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)ei(n[i]);delete t.g[e],t.h--}}this.J=null},eE.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)},eE.prototype.P=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};var eS=b.JSON.stringify,e_=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new eC,e=>e.reset());class eC{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let eI,eA=!1,ek=new class{constructor(){this.h=this.g=null}add(e,t){let n=e_.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},eD=()=>{let e=b.Promise.resolve(void 0);eI=()=>{e.then(eN)}};var eN=()=>{let e;for(var t;e=null,ek.g&&(e=ek.g,ek.g=ek.g.next,ek.g||(ek.h=null),e.next=null),t=e;){try{t.h.call(t.g)}catch(e){!function(e){b.setTimeout(()=>{throw e},0)}(e)}e_.j(t),100>e_.h&&(e_.h++,t.next=e_.g,e_.g=t)}eA=!1};function ex(e,t){eE.call(this),this.h=e||1,this.g=t||b,this.j=A(this.qb,this),this.l=Date.now()}function eL(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function eR(e,t,n){if("function"==typeof e)n&&(e=A(e,n));else if(e&&"function"==typeof e.handleEvent)e=A(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:b.setTimeout(e,t||0)}D(ex,eE),(g=ex.prototype).ga=!1,g.T=null,g.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),eT(this,"tick"),this.ga&&(eL(this),this.start()))}},g.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},g.N=function(){ex.$.N.call(this),eL(this),delete this.g};class eO extends N{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=eR(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.j);let n=t.h;t.h=null,t.m.apply(null,n)}(this)}N(){super.N(),this.g&&(b.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function eP(e){N.call(this),this.h=e,this.g={}}D(eP,N);var eM=[];function eV(e,t,n,i){Array.isArray(n)||(n&&(eM[0]=n.toString()),n=eM);for(var r=0;r<n.length;r++){var s=function e(t,n,i,r,s){if(r&&r.once)return function e(t,n,i,r,s){if(Array.isArray(n)){for(var a=0;a<n.length;a++)e(t,n[a],i,r,s);return null}return i=ew(i),t&&t[ee]?t.P(n,i,_(r)?!!r.capture:!!r,s):ef(t,n,i,!0,r,s)}(t,n,i,r,s);if(Array.isArray(n)){for(var a=0;a<n.length;a++)e(t,n[a],i,r,s);return null}return i=ew(i),t&&t[ee]?t.O(n,i,_(r)?!!r.capture:!!r,s):ef(t,n,i,!1,r,s)}(t,n[r],i||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function eF(e){er(e.g,function(e,t){this.g.hasOwnProperty(t)&&eg(e)},e),e.g={}}function eU(){this.g=!0}function ej(e,t,n,i){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var a=1;a<r.length;a++)r[a]=""}}}}return eS(n)}catch(e){return t}}(e,n)+(i?" "+i:"")})}eP.prototype.N=function(){eP.$.N.call(this),eF(this)},eP.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},eU.prototype.Ea=function(){this.g=!1},eU.prototype.info=function(){};var eq={},eB=null;function eK(){return eB=eB||new eE}function e$(e){O.call(this,eq.Ta,e)}function ez(e){let t=eK();eT(t,new e$(t))}function eG(e,t){O.call(this,eq.STAT_EVENT,e),this.stat=t}function eQ(e){let t=eK();eT(t,new eG(t,e))}function eH(e,t){O.call(this,eq.Ua,e),this.size=t}function eW(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return b.setTimeout(function(){e()},t)}eq.Ta="serverreachability",D(e$,O),eq.STAT_EVENT="statevent",D(eG,O),eq.Ua="timingevent",D(eH,O);var eX={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},eY={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function eJ(){}function eZ(e){return e.h||(e.h=e.i())}function e0(){}eJ.prototype.h=null;var e1={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function e2(){O.call(this,"d")}function e9(){O.call(this,"c")}function e4(){}function e6(e,t,n,i){this.l=e,this.j=t,this.m=n,this.W=i||1,this.U=new eP(this),this.P=e7,e=K?125:void 0,this.V=new ex(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new e5}function e5(){this.i=null,this.g="",this.h=!1}D(e2,O),D(e9,O),D(e4,eJ),e4.prototype.g=function(){return new XMLHttpRequest},e4.prototype.i=function(){return{}},s=new e4;var e7=45e3,e3={},e8={};function te(e,t,n){e.L=1,e.A=tv(tf(t)),e.u=n,e.S=!0,tt(e,null)}function tt(e,t){e.G=Date.now(),tr(e),e.B=tf(e.A);var n=e.B,i=e.W;Array.isArray(i)||(i=[String(i)]),tx(n.i,"t",i),e.o=0,n=e.l.J,e.h=new e5,e.g=nE(e.l,n?t:null,!e.u),0<e.O&&(e.M=new eO(A(e.Pa,e,e.g),e.O)),eV(e.U,e.g,"readystatechange",e.nb),t=e.I?es(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),ez(),function(e,t,n,i,r,s){e.info(function(){if(e.g){if(s)for(var a="",o=s.split("&"),l=0;l<o.length;l++){var h=o[l].split("=");if(1<h.length){var u=h[0];h=h[1];var c=u.split("_");a=2<=c.length&&"type"==c[1]?a+(u+"=")+h+"&":a+(u+"=redacted&")}}else a=null}else a=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+t+"\n"+n+"\n"+a})}(e.j,e.v,e.B,e.m,e.W,e.u)}function tn(e){return!!e.g&&"GET"==e.v&&2!=e.L&&e.l.Ha}function ti(e,t,n){let i=!0,r;for(;!e.J&&e.o<n.length;)if((r=function(e,t){var n=e.o,i=t.indexOf("\n",n);return -1==i?e8:isNaN(n=Number(t.substring(n,i)))?e3:(i+=1)+n>t.length?e8:(t=t.slice(i,i+n),e.o=i+n,t)}(e,n))==e8){4==t&&(e.s=4,eQ(14),i=!1),ej(e.j,e.m,null,"[Incomplete Response]");break}else if(r==e3){e.s=4,eQ(15),ej(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}else ej(e.j,e.m,r,null),th(e,r);tn(e)&&0!=e.o&&(e.h.g=e.h.g.slice(e.o),e.o=0),4!=t||0!=n.length||e.h.h||(e.s=1,eQ(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.ba&&(e.ba=!0,(t=e.l).g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),nd(t),t.M=!0,eQ(11))):(ej(e.j,e.m,n,"[Invalid Chunked Response]"),tl(e),to(e))}function tr(e){e.Y=Date.now()+e.P,ts(e,e.P)}function ts(e,t){if(null!=e.C)throw Error("WatchDog timer not null");e.C=eW(A(e.lb,e),t)}function ta(e){e.C&&(b.clearTimeout(e.C),e.C=null)}function to(e){0==e.l.H||e.J||np(e.l,e)}function tl(e){ta(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,eL(e.V),eF(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function th(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||tF(n.i,e))){if(!e.K&&tF(n.i,e)&&3==n.H){try{var i=n.Ja.g.parse(t)}catch(e){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){e:if(!n.u){if(n.g){if(n.g.G+3e3<e.G)ng(n),nr(n);else break e}nc(n),eQ(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&0==n.A&&!n.v&&(n.v=eW(A(n.ib,n),6e3));if(1>=tV(n.i)&&n.oa){try{n.oa()}catch(e){}n.oa=void 0}}else ny(n,11)}else if((e.K||n.g==e)&&ng(n),!M(t))for(r=n.Ja.g.parse(t),t=0;t<r.length;t++){let o=r[t];if(n.V=o[0],o=o[1],2==n.H){if("c"==o[0]){n.K=o[1],n.pa=o[2];let t=o[3];null!=t&&(n.ra=t,n.l.info("VER="+n.ra));let r=o[4];null!=r&&(n.Ga=r,n.l.info("SVER="+n.Ga));let l=o[5];null!=l&&"number"==typeof l&&0<l&&(i=1.5*l,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;let h=e.g;if(h){let e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=i.i;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(tU(s,s.h),s.h=null))}if(i.F){let e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(i.Da=e,ty(i.I,i.F,e))}}if(n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),(i=n).wa=nw(i,i.J?i.pa:null,i.Y),e.K){tj(i.i,e);var a=i.L;a&&e.setTimeout(a),e.C&&(ta(e),tr(e)),i.g=e}else nu(i);0<n.j.length&&na(n)}else"stop"!=o[0]&&"close"!=o[0]||ny(n,7)}else 3==n.H&&("stop"==o[0]||"close"==o[0]?"stop"==o[0]?ny(n,7):ni(n):"noop"!=o[0]&&n.h&&n.h.Aa(o),n.A=0)}}ez(4)}catch(e){}}function tu(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(S(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(S(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}for(let i in t=[],n=0,e)t[n++]=i;return t}}}(e),i=function(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(S(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}for(i in t=[],n=0,e)t[n++]=e[i];return t}(e),r=i.length,s=0;s<r;s++)t.call(void 0,i[s],n&&n[s],e)}(g=e6.prototype).setTimeout=function(e){this.P=e},g.nb=function(e){e=e.target;let t=this.M;t&&3==t7(e)?t.l():this.Pa(e)},g.Pa=function(e){try{if(e==this.g)e:{let u=t7(this.g);var t=this.g.Ia();let c=this.g.da();if(!(3>u)&&(3!=u||K||this.g&&(this.h.h||this.g.ja()||t3(this.g)))){this.J||4!=u||7==t||(8==t||0>=c?ez(3):ez(2)),ta(this);var n=this.g.da();this.ca=n;t:if(tn(this)){var i=t3(this.g);e="";var r=i.length,s=4==t7(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){tl(this),to(this);var a="";break t}this.h.i=new b.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:s&&t==r-1});i.length=0,this.h.g+=e,this.o=0,a=this.h.g}else a=this.g.ja();if(this.i=200==n,function(e,t,n,i,r,s,a){e.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+t+"\n"+n+"\n"+s+" "+a})}(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var o,l=this.g;if((o=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(o)){var h=o;break t}}h=null}if(n=h)ej(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,th(this,n);else{this.i=!1,this.s=3,eQ(12),tl(this),to(this);break e}}this.S?(ti(this,u,a),K&&this.i&&3==u&&(eV(this.U,this.V,"tick",this.mb),this.V.start())):(ej(this.j,this.m,a,null),th(this,a)),4==u&&tl(this),this.i&&!this.J&&(4==u?np(this.l,this):(this.i=!1,tr(this)))}else(function(e){let t={};e=(e.g&&2<=t7(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let i=0;i<e.length;i++){if(M(e[i]))continue;var n=function(e){var t=1;e=e.split(":");let n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}(e[i]);let r=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();let s=t[r]||[];t[r]=s,s.push(n)}!function(e,t){for(let n in e)t.call(void 0,e[n],n,e)}(t,function(e){return e.join(", ")})})(this.g),400==n&&0<a.indexOf("Unknown SID")?(this.s=3,eQ(12)):(this.s=0,eQ(13)),tl(this),to(this)}}}catch(e){}finally{}},g.mb=function(){if(this.g){var e=t7(this.g),t=this.g.ja();this.o<t.length&&(ta(this),ti(this,e,t),this.i&&4!=e&&tr(this))}},g.cancel=function(){this.J=!0,tl(this)},g.lb=function(){this.C=null;let e=Date.now();0<=e-this.Y?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.j,this.B),2!=this.L&&(ez(),eQ(17)),tl(this),this.s=2,to(this)):ts(this,this.Y-e)};var tc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function td(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof td){this.h=e.h,tg(this,e.j),this.s=e.s,this.g=e.g,tp(this,e.m),this.l=e.l;var t=e.i,n=new tA;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),tm(this,n),this.o=e.o}else e&&(t=String(e).match(tc))?(this.h=!1,tg(this,t[1]||"",!0),this.s=tw(t[2]||""),this.g=tw(t[3]||"",!0),tp(this,t[4]),this.l=tw(t[5]||"",!0),tm(this,t[6]||"",!0),this.o=tw(t[7]||"")):(this.h=!1,this.i=new tA(null,this.h))}function tf(e){return new td(e)}function tg(e,t,n){e.j=n?tw(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function tp(e,t){if(t){if(isNaN(t=Number(t))||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function tm(e,t,n){var i,r;t instanceof tA?(e.i=t,i=e.i,(r=e.h)&&!i.j&&(tk(i),i.i=null,i.g.forEach(function(e,t){var n=t.toLowerCase();t!=n&&(tD(this,t),tx(this,n,e))},i)),i.j=r):(n||(t=tE(t,tC)),e.i=new tA(t,e.h))}function ty(e,t,n){e.i.set(t,n)}function tv(e){return ty(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function tw(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function tE(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,tT),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function tT(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}td.prototype.toString=function(){var e=[],t=this.j;t&&e.push(tE(t,tb,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(tE(t,tb,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(tE(n,"/"==n.charAt(0)?t_:tS,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",tE(n,tI)),e.join("")};var tb=/[#\/\?@]/g,tS=/[#\?:]/g,t_=/[#\?]/g,tC=/[#\?@]/g,tI=/#/g;function tA(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function tk(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),r=null;if(0<=i){var s=e[n].substring(0,i);r=e[n].substring(i+1)}else s=e[n];t(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}function tD(e,t){tk(e),t=tL(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function tN(e,t){return tk(e),t=tL(e,t),e.g.has(t)}function tx(e,t,n){tD(e,t),0<n.length&&(e.i=null,e.g.set(tL(e,t),L(n)),e.h+=n.length)}function tL(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(g=tA.prototype).add=function(e,t){tk(this),this.i=null,e=tL(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},g.forEach=function(e,t){tk(this),this.g.forEach(function(n,i){n.forEach(function(n){e.call(t,n,i,this)},this)},this)},g.ta=function(){tk(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let i=0;i<t.length;i++){let r=e[i];for(let e=0;e<r.length;e++)n.push(t[i])}return n},g.Z=function(e){tk(this);let t=[];if("string"==typeof e)tN(this,e)&&(t=t.concat(this.g.get(tL(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},g.set=function(e,t){return tk(this),this.i=null,tN(this,e=tL(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},g.get=function(e,t){return e&&0<(e=this.Z(e)).length?String(e[0]):t},g.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var i=t[n];let s=encodeURIComponent(String(i)),a=this.Z(i);for(i=0;i<a.length;i++){var r=s;""!==a[i]&&(r+="="+encodeURIComponent(String(a[i]))),e.push(r)}}return this.i=e.join("&")};var tR=class{constructor(e,t){this.g=e,this.map=t}};function tO(e){this.l=e||tP,e=b.PerformanceNavigationTiming?0<(e=b.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(b.g&&b.g.Ka&&b.g.Ka()&&b.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var tP=10;function tM(e){return!!e.h||!!e.g&&e.g.size>=e.j}function tV(e){return e.h?1:e.g?e.g.size:0}function tF(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function tU(e,t){e.g?e.g.add(t):e.h=t}function tj(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function tq(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let n of e.g.values())t=t.concat(n.F);return t}return L(e.i)}tO.prototype.cancel=function(){if(this.i=tq(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}};var tB=class{stringify(e){return b.JSON.stringify(e,void 0)}parse(e){return b.JSON.parse(e,void 0)}};function tK(){this.g=new tB}function t$(e,t,n,i,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(i)}catch(e){}}function tz(e){this.l=e.ec||null,this.j=e.ob||!1}function tG(e,t){eE.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=tQ,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}D(tz,eJ),tz.prototype.g=function(){return new tG(this.l,this.j)},tz.prototype.i=(e={},function(){return e}),D(tG,eE);var tQ=0;function tH(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function tW(e){e.readyState=4,e.l=null,e.j=null,e.A=null,tX(e)}function tX(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(g=tG.prototype).open=function(e,t){if(this.readyState!=tQ)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,tX(this)},g.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||b).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},g.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,tW(this)),this.readyState=tQ},g.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,tX(this)),this.g&&(this.readyState=3,tX(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==b.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;tH(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))}},g.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?tW(this):tX(this),3==this.readyState&&tH(this)}},g.Za=function(e){this.g&&(this.response=this.responseText=e,tW(this))},g.Ya=function(e){this.g&&(this.response=e,tW(this))},g.ka=function(){this.g&&tW(this)},g.setRequestHeader=function(e,t){this.v.append(e,t)},g.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},g.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var n=t.next();!n.done;)e.push((n=n.value)[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(tG.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var tY=b.JSON.parse;function tJ(e){eE.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=tZ,this.L=this.M=!1}D(tJ,eE);var tZ="",t0=/^https?$/i,t1=["POST","PUT"];function t2(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,t9(e),t6(e)}function t9(e){e.F||(e.F=!0,eT(e,"complete"),eT(e,"error"))}function t4(e){if(e.h&&void 0!==T&&(!e.C[1]||4!=t7(e)||2!=e.da())){if(e.v&&4==t7(e))eR(e.La,0,e);else if(eT(e,"readystatechange"),4==t7(e)){e.h=!1;try{let a=e.da();switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t,n,i=!0;break;default:i=!1}if(!(t=i)){if(n=0===a){var r=String(e.I).match(tc)[1]||null;!r&&b.self&&b.self.location&&(r=b.self.location.protocol.slice(0,-1)),n=!t0.test(r?r.toLowerCase():"")}t=n}if(t)eT(e,"complete"),eT(e,"success");else{e.m=6;try{var s=2<t7(e)?e.g.statusText:""}catch(e){s=""}e.j=s+" ["+e.da()+"]",t9(e)}}finally{t6(e)}}}}function t6(e,t){if(e.g){t5(e);let n=e.g,i=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||eT(e,"ready");try{n.onreadystatechange=i}catch(e){}}}function t5(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(b.clearTimeout(e.A),e.A=null)}function t7(e){return e.g?e.g.readyState:0}function t3(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case tZ:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function t8(e){let t="";return er(e,function(e,n){t+=n+":"+e+"\r\n"}),t}function ne(e,t,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=t8(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):ty(e,t,n))}function nt(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function nn(e){this.Ga=0,this.j=[],this.l=new eU,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=nt("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=nt("baseRetryDelayMs",5e3,e),this.hb=nt("retryDelaySeedMs",1e4,e),this.eb=nt("forwardChannelMaxRetries",2,e),this.xa=nt("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new tO(e&&e.concurrentRequestLimit),this.Ja=new tK,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function ni(e){if(ns(e),3==e.H){var t=e.W++,n=tf(e.I);if(ty(n,"SID",e.K),ty(n,"RID",t),ty(n,"TYPE","terminate"),nl(e,n),(t=new e6(e,e.l,t)).L=2,t.A=tv(tf(n)),n=!1,b.navigator&&b.navigator.sendBeacon)try{n=b.navigator.sendBeacon(t.A.toString(),"")}catch(e){}!n&&b.Image&&((new Image).src=t.A,n=!0),n||(t.g=nE(t.l,null),t.g.ha(t.A)),t.G=Date.now(),tr(t)}nv(e)}function nr(e){e.g&&(nd(e),e.g.cancel(),e.g=null)}function ns(e){nr(e),e.u&&(b.clearTimeout(e.u),e.u=null),ng(e),e.i.cancel(),e.m&&("number"==typeof e.m&&b.clearTimeout(e.m),e.m=null)}function na(e){if(!tM(e.i)&&!e.m){e.m=!0;var t=e.Na;eI||eD(),eA||(eI(),eA=!0),ek.add(t,e),e.C=0}}function no(e,t){var n;n=t?t.m:e.W++;let i=tf(e.I);ty(i,"SID",e.K),ty(i,"RID",n),ty(i,"AID",e.V),nl(e,i),e.o&&e.s&&ne(i,e.o,e.s),n=new e6(e,e.l,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=nh(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),tU(e.i,n),te(n,i,t)}function nl(e,t){e.na&&er(e.na,function(e,n){ty(t,n,e)}),e.h&&tu({},function(e,n){ty(t,n,e)})}function nh(e,t,n){n=Math.min(e.j.length,n);var i=e.h?A(e.h.Va,e.h,e):null;e:{var r=e.j;let t=-1;for(;;){let e=["count="+n];-1==t?0<n?(t=r[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let a=0;a<n;a++){let n=r[a].g,o=r[a].map;if(0>(n-=t))t=Math.max(0,r[a].g-100),s=!1;else try{!function(e,t,n){let i=n||"";try{tu(e,function(e,n){let r=e;_(e)&&(r=eS(e)),t.push(i+n+"="+encodeURIComponent(r))})}catch(e){throw t.push(i+"type="+encodeURIComponent("_badmap")),e}}(o,e,"req"+n+"_")}catch(e){i&&i(o)}}if(s){i=e.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,i}function nu(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;eI||eD(),eA||(eI(),eA=!0),ek.add(t,e),e.A=0}}function nc(e){return!e.g&&!e.u&&!(3<=e.A)&&(e.ba++,e.u=eW(A(e.Ma,e),nm(e,e.A)),e.A++,!0)}function nd(e){null!=e.B&&(b.clearTimeout(e.B),e.B=null)}function nf(e){e.g=new e6(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=tf(e.wa);ty(t,"RID","rpc"),ty(t,"SID",e.K),ty(t,"AID",e.V),ty(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&ty(t,"TO",e.qa),ty(t,"TYPE","xmlhttp"),nl(e,t),e.o&&e.s&&ne(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=tv(tf(t)),n.u=null,n.S=!0,tt(n,e)}function ng(e){null!=e.v&&(b.clearTimeout(e.v),e.v=null)}function np(e,t){var n=null;if(e.g==t){ng(e),nd(e),e.g=null;var i=2}else{if(!tF(e.i,t))return;n=t.F,tj(e.i,t),i=1}if(0!=e.H){if(t.i){if(1==i){n=t.u?t.u.length:0,t=Date.now()-t.G;var r,s=e.C;eT(i=eK(),new eH(i,n)),na(e)}else nu(e)}else if(3==(s=t.s)||0==s&&0<t.ca||!(1==i&&(r=t,!(tV(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.j=r.F.concat(e.j),!0):1!=e.H&&2!=e.H&&!(e.C>=(e.cb?0:e.eb))&&(e.m=eW(A(e.Na,e,r),nm(e,e.C)),e.C++,!0)))||2==i&&nc(e)))switch(n&&0<n.length&&((t=e.i).i=t.i.concat(n)),s){case 1:ny(e,5);break;case 4:ny(e,10);break;case 3:ny(e,6);break;default:ny(e,2)}}}function nm(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function ny(e,t){if(e.l.info("Error code "+t),2==t){var n=null;e.h&&(n=null);var i=A(e.pb,e);n||(n=new td("//www.google.com/images/cleardot.gif"),b.location&&"http"==b.location.protocol||tg(n,"https"),tv(n)),function(e,t){let n=new eU;if(b.Image){let i=new Image;i.onload=k(t$,n,i,"TestLoadImage: loaded",!0,t),i.onerror=k(t$,n,i,"TestLoadImage: error",!1,t),i.onabort=k(t$,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=k(t$,n,i,"TestLoadImage: timeout",!1,t),b.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=e}else t(!1)}(n.toString(),i)}else eQ(2);e.H=0,e.h&&e.h.za(t),nv(e),ns(e)}function nv(e){if(e.H=0,e.ma=[],e.h){let t=tq(e.i);(0!=t.length||0!=e.j.length)&&(R(e.ma,t),R(e.ma,e.j),e.i.i.length=0,L(e.j),e.j.length=0),e.h.ya()}}function nw(e,t,n){var i=n instanceof td?tf(n):new td(n);if(""!=i.g)t&&(i.g=t+"."+i.g),tp(i,i.m);else{var r=b.location;i=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var s=new td(null);i&&tg(s,i),t&&(s.g=t),r&&tp(s,r),n&&(s.l=n),i=s}return n=e.F,t=e.Da,n&&t&&ty(i,n,t),ty(i,"VER",e.ra),nl(e,i),i}function nE(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new tJ(e.Ha&&!e.va?new tz({ob:n}):e.va)).Oa(e.J),t}function nT(){}function nb(){if(q&&!(10<=Number(Y)))throw Error("Environmental error: no available transport.")}function nS(e,t){eE.call(this),this.g=new nn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!M(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!M(t)&&(this.g.F=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new nI(this)}function n_(e){e2.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(let n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function nC(){e9.call(this),this.status=1}function nI(e){this.g=e}function nA(){this.blockSize=-1,this.blockSize=64,this.g=[,,,,],this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function nk(e,t,n){n||(n=0);var i=Array(16);if("string"==typeof t)for(var r=0;16>r;++r)i[r]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(r=0;16>r;++r)i[r]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],r=e.g[2];var s=e.g[3],a=t+(s^n&(r^s))+i[0]+3614090360&4294967295;a=s+(r^(t=n+(a<<7&4294967295|a>>>25))&(n^r))+i[1]+3905402710&4294967295,a=r+(n^(s=t+(a<<12&4294967295|a>>>20))&(t^n))+i[2]+606105819&4294967295,a=n+(t^(r=s+(a<<17&4294967295|a>>>15))&(s^t))+i[3]+3250441966&4294967295,a=t+(s^(n=r+(a<<22&4294967295|a>>>10))&(r^s))+i[4]+4118548399&4294967295,a=s+(r^(t=n+(a<<7&4294967295|a>>>25))&(n^r))+i[5]+1200080426&4294967295,a=r+(n^(s=t+(a<<12&4294967295|a>>>20))&(t^n))+i[6]+2821735955&4294967295,a=n+(t^(r=s+(a<<17&4294967295|a>>>15))&(s^t))+i[7]+4249261313&4294967295,a=t+(s^(n=r+(a<<22&4294967295|a>>>10))&(r^s))+i[8]+1770035416&4294967295,a=s+(r^(t=n+(a<<7&4294967295|a>>>25))&(n^r))+i[9]+2336552879&4294967295,a=r+(n^(s=t+(a<<12&4294967295|a>>>20))&(t^n))+i[10]+4294925233&4294967295,a=n+(t^(r=s+(a<<17&4294967295|a>>>15))&(s^t))+i[11]+2304563134&4294967295,a=t+(s^(n=r+(a<<22&4294967295|a>>>10))&(r^s))+i[12]+1804603682&4294967295,a=s+(r^(t=n+(a<<7&4294967295|a>>>25))&(n^r))+i[13]+4254626195&4294967295,a=r+(n^(s=t+(a<<12&4294967295|a>>>20))&(t^n))+i[14]+2792965006&4294967295,a=n+(t^(r=s+(a<<17&4294967295|a>>>15))&(s^t))+i[15]+1236535329&4294967295,n=r+(a<<22&4294967295|a>>>10),a=t+(r^s&(n^r))+i[1]+4129170786&4294967295,t=n+(a<<5&4294967295|a>>>27),a=s+(n^r&(t^n))+i[6]+3225465664&4294967295,s=t+(a<<9&4294967295|a>>>23),a=r+(t^n&(s^t))+i[11]+643717713&4294967295,r=s+(a<<14&4294967295|a>>>18),a=n+(s^t&(r^s))+i[0]+3921069994&4294967295,n=r+(a<<20&4294967295|a>>>12),a=t+(r^s&(n^r))+i[5]+3593408605&4294967295,t=n+(a<<5&4294967295|a>>>27),a=s+(n^r&(t^n))+i[10]+38016083&4294967295,s=t+(a<<9&4294967295|a>>>23),a=r+(t^n&(s^t))+i[15]+3634488961&4294967295,r=s+(a<<14&4294967295|a>>>18),a=n+(s^t&(r^s))+i[4]+3889429448&4294967295,n=r+(a<<20&4294967295|a>>>12),a=t+(r^s&(n^r))+i[9]+568446438&4294967295,t=n+(a<<5&4294967295|a>>>27),a=s+(n^r&(t^n))+i[14]+3275163606&4294967295,s=t+(a<<9&4294967295|a>>>23),a=r+(t^n&(s^t))+i[3]+4107603335&4294967295,r=s+(a<<14&4294967295|a>>>18),a=n+(s^t&(r^s))+i[8]+1163531501&4294967295,n=r+(a<<20&4294967295|a>>>12),a=t+(r^s&(n^r))+i[13]+2850285829&4294967295,t=n+(a<<5&4294967295|a>>>27),a=s+(n^r&(t^n))+i[2]+4243563512&4294967295,s=t+(a<<9&4294967295|a>>>23),a=r+(t^n&(s^t))+i[7]+1735328473&4294967295,r=s+(a<<14&4294967295|a>>>18),a=n+(s^t&(r^s))+i[12]+2368359562&4294967295,a=t+((n=r+(a<<20&4294967295|a>>>12))^r^s)+i[5]+4294588738&4294967295,a=s+((t=n+(a<<4&4294967295|a>>>28))^n^r)+i[8]+2272392833&4294967295,a=r+((s=t+(a<<11&4294967295|a>>>21))^t^n)+i[11]+1839030562&4294967295,a=n+((r=s+(a<<16&4294967295|a>>>16))^s^t)+i[14]+4259657740&4294967295,a=t+((n=r+(a<<23&4294967295|a>>>9))^r^s)+i[1]+2763975236&4294967295,a=s+((t=n+(a<<4&4294967295|a>>>28))^n^r)+i[4]+1272893353&4294967295,a=r+((s=t+(a<<11&4294967295|a>>>21))^t^n)+i[7]+4139469664&4294967295,a=n+((r=s+(a<<16&4294967295|a>>>16))^s^t)+i[10]+3200236656&4294967295,a=t+((n=r+(a<<23&4294967295|a>>>9))^r^s)+i[13]+681279174&4294967295,a=s+((t=n+(a<<4&4294967295|a>>>28))^n^r)+i[0]+3936430074&4294967295,a=r+((s=t+(a<<11&4294967295|a>>>21))^t^n)+i[3]+3572445317&4294967295,a=n+((r=s+(a<<16&4294967295|a>>>16))^s^t)+i[6]+76029189&4294967295,a=t+((n=r+(a<<23&4294967295|a>>>9))^r^s)+i[9]+3654602809&4294967295,a=s+((t=n+(a<<4&4294967295|a>>>28))^n^r)+i[12]+3873151461&4294967295,a=r+((s=t+(a<<11&4294967295|a>>>21))^t^n)+i[15]+530742520&4294967295,a=n+((r=s+(a<<16&4294967295|a>>>16))^s^t)+i[2]+3299628645&4294967295,n=r+(a<<23&4294967295|a>>>9),a=t+(r^(n|~s))+i[0]+4096336452&4294967295,t=n+(a<<6&4294967295|a>>>26),a=s+(n^(t|~r))+i[7]+1126891415&4294967295,s=t+(a<<10&4294967295|a>>>22),a=r+(t^(s|~n))+i[14]+2878612391&4294967295,r=s+(a<<15&4294967295|a>>>17),a=n+(s^(r|~t))+i[5]+4237533241&4294967295,n=r+(a<<21&4294967295|a>>>11),a=t+(r^(n|~s))+i[12]+1700485571&4294967295,t=n+(a<<6&4294967295|a>>>26),a=s+(n^(t|~r))+i[3]+2399980690&4294967295,s=t+(a<<10&4294967295|a>>>22),a=r+(t^(s|~n))+i[10]+4293915773&4294967295,r=s+(a<<15&4294967295|a>>>17),a=n+(s^(r|~t))+i[1]+2240044497&4294967295,n=r+(a<<21&4294967295|a>>>11),a=t+(r^(n|~s))+i[8]+1873313359&4294967295,t=n+(a<<6&4294967295|a>>>26),a=s+(n^(t|~r))+i[15]+4264355552&4294967295,s=t+(a<<10&4294967295|a>>>22),a=r+(t^(s|~n))+i[6]+2734768916&4294967295,r=s+(a<<15&4294967295|a>>>17),a=n+(s^(r|~t))+i[13]+1309151649&4294967295,n=r+(a<<21&4294967295|a>>>11),a=t+(r^(n|~s))+i[4]+4149444226&4294967295,t=n+(a<<6&4294967295|a>>>26),a=s+(n^(t|~r))+i[11]+3174756917&4294967295,s=t+(a<<10&4294967295|a>>>22),a=r+(t^(s|~n))+i[2]+718787259&4294967295,r=s+(a<<15&4294967295|a>>>17),a=n+(s^(r|~t))+i[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(r+(a<<21&4294967295|a>>>11))&4294967295,e.g[2]=e.g[2]+r&4294967295,e.g[3]=e.g[3]+s&4294967295}function nD(e,t){this.h=t;for(var n=[],i=!0,r=e.length-1;0<=r;r--){var s=0|e[r];i&&s==t||(n[r]=s,i=!1)}this.g=n}(g=tJ.prototype).Oa=function(e){this.M=e},g.ha=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():s.g(),this.C=this.u?eZ(this.u):eZ(s),this.g.onreadystatechange=A(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(e){t2(this,e);return}if(e=n||"",n=new Map(this.headers),i){if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else if("function"==typeof i.keys&&"function"==typeof i.get)for(let e of i.keys())n.set(e,i.get(e));else throw Error("Unknown input type for opt_headers: "+String(i))}for(let[s,a]of(i=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),r=b.FormData&&e instanceof b.FormData,!(0<=x(t1,t))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),n))this.g.setRequestHeader(s,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{var a;t5(this),0<this.B&&((this.L=(a=this.g,q&&"number"==typeof a.timeout&&void 0!==a.ontimeout))?(this.g.timeout=this.B,this.g.ontimeout=A(this.ua,this)):this.A=eR(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){t2(this,e)}},g.ua=function(){void 0!==T&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,eT(this,"timeout"),this.abort(8))},g.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,eT(this,"complete"),eT(this,"abort"),t6(this))},g.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),t6(this,!0)),tJ.$.N.call(this)},g.La=function(){this.s||(this.G||this.v||this.l?t4(this):this.kb())},g.kb=function(){t4(this)},g.isActive=function(){return!!this.g},g.da=function(){try{return 2<t7(this)?this.g.status:-1}catch(e){return -1}},g.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},g.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),tY(t)}},g.Ia=function(){return this.m},g.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(g=nn.prototype).ra=8,g.H=1,g.Na=function(e){if(this.m){if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;let r=new e6(this,this.l,e),s=this.s;if(this.U&&(s?eo(s=es(s),this.U):s=this.U),null!==this.o||this.O||(r.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){t:{var i=this.j[n];if("__data__"in i.map&&"string"==typeof(i=i.map.__data__)){i=i.length;break t}i=void 0}if(void 0===i)break;if(4096<(t+=i)){t=n;break e}if(4096===t||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=nh(this,r,t),ty(n=tf(this.I),"RID",e),ty(n,"CVER",22),this.F&&ty(n,"X-HTTP-Session-Id",this.F),nl(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(t8(s)))+"&"+t:this.o&&ne(n,this.o,s)),tU(this.i,r),this.bb&&ty(n,"TYPE","init"),this.P?(ty(n,"$req",t),ty(n,"SID","null"),r.aa=!0,te(r,n,null)):te(r,n,t),this.H=2}}else 3==this.H&&(e?no(this,e):0==this.j.length||tM(this.i)||no(this))}},g.Ma=function(){if(this.u=null,nf(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=eW(A(this.jb,this),e)}},g.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,eQ(10),nr(this),nf(this))},g.ib=function(){null!=this.v&&(this.v=null,nr(this),nc(this),eQ(19))},g.pb=function(e){e?(this.l.info("Successfully pinged google.com"),eQ(2)):(this.l.info("Failed to ping google.com"),eQ(1))},g.isActive=function(){return!!this.h&&this.h.isActive(this)},(g=nT.prototype).Ba=function(){},g.Aa=function(){},g.za=function(){},g.ya=function(){},g.isActive=function(){return!0},g.Va=function(){},nb.prototype.g=function(e,t){return new nS(e,t)},D(nS,eE),nS.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;eQ(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=nw(e,null,e.Y),na(e)},nS.prototype.close=function(){ni(this.g)},nS.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=eS(e),e=n);t.j.push(new tR(t.fb++,e)),3==t.H&&na(t)},nS.prototype.N=function(){this.g.h=null,delete this.j,ni(this.g),delete this.g,nS.$.N.call(this)},D(n_,e2),D(nC,e9),D(nI,nT),nI.prototype.Ba=function(){eT(this.g,"a")},nI.prototype.Aa=function(e){eT(this.g,new n_(e))},nI.prototype.za=function(e){eT(this.g,new nC)},nI.prototype.ya=function(){eT(this.g,"b")},D(nA,function(){this.blockSize=-1}),nA.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},nA.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,i=this.m,r=this.h,s=0;s<t;){if(0==r)for(;s<=n;)nk(this,e,s),s+=this.blockSize;if("string"==typeof e){for(;s<t;)if(i[r++]=e.charCodeAt(s++),r==this.blockSize){nk(this,i),r=0;break}}else for(;s<t;)if(i[r++]=e[s++],r==this.blockSize){nk(this,i),r=0;break}}this.h=r,this.i+=t},nA.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var i=0;32>i;i+=8)e[n++]=this.g[t]>>>i&255;return e};var nN={};function nx(e){var t;return -128<=e&&128>e?(t=function(e){return new nD([0|e],0>e?-1:0)},Object.prototype.hasOwnProperty.call(nN,e)?nN[e]:nN[e]=t(e)):new nD([0|e],0>e?-1:0)}function nL(e){if(isNaN(e)||!isFinite(e))return nO;if(0>e)return nU(nL(-e));for(var t=[],n=1,i=0;e>=n;i++)t[i]=e/n|0,n*=nR;return new nD(t,0)}var nR=4294967296,nO=nx(0),nP=nx(1),nM=nx(16777216);function nV(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function nF(e){return -1==e.h}function nU(e){for(var t=e.g.length,n=[],i=0;i<t;i++)n[i]=~e.g[i];return new nD(n,~e.h).add(nP)}function nj(e,t){return e.add(nU(t))}function nq(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function nB(e,t){this.g=e,this.h=t}function nK(e,t){if(nV(t))throw Error("division by zero");if(nV(e))return new nB(nO,nO);if(nF(e))return t=nK(nU(e),t),new nB(nU(t.g),nU(t.h));if(nF(t))return t=nK(e,nU(t)),new nB(nU(t.g),t.h);if(30<e.g.length){if(nF(e)||nF(t))throw Error("slowDivide_ only works with positive integers.");for(var n=nP,i=t;0>=i.X(e);)n=n$(n),i=n$(i);var r=nz(n,1),s=nz(i,1);for(i=nz(i,2),n=nz(n,2);!nV(i);){var a=s.add(i);0>=a.X(e)&&(r=r.add(n),s=a),i=nz(i,1),n=nz(n,1)}return t=nj(e,r.R(t)),new nB(r,t)}for(r=nO;0<=e.X(t);){for(i=48>=(i=Math.ceil(Math.log(n=Math.max(1,Math.floor(e.ea()/t.ea())))/Math.LN2))?1:Math.pow(2,i-48),a=(s=nL(n)).R(t);nF(a)||0<a.X(e);)n-=i,a=(s=nL(n)).R(t);nV(s)&&(s=nP),r=r.add(s),e=nj(e,a)}return new nB(r,e)}function n$(e){for(var t=e.g.length+1,n=[],i=0;i<t;i++)n[i]=e.D(i)<<1|e.D(i-1)>>>31;return new nD(n,e.h)}function nz(e,t){var n=t>>5;t%=32;for(var i=e.g.length-n,r=[],s=0;s<i;s++)r[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new nD(r,e.h)}(g=nD.prototype).ea=function(){if(nF(this))return-nU(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var i=this.D(n);e+=(0<=i?i:nR+i)*t,t*=nR}return e},g.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(nV(this))return"0";if(nF(this))return"-"+nU(this).toString(e);for(var t=nL(Math.pow(e,6)),n=this,i="";;){var r=nK(n,t).g,s=((0<(n=nj(n,r.R(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(nV(n=r))return s+i;for(;6>s.length;)s="0"+s;i=s+i}},g.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},g.X=function(e){return nF(e=nj(this,e))?-1:nV(e)?0:1},g.abs=function(){return nF(this)?nU(this):this},g.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0,r=0;r<=t;r++){var s=i+(65535&this.D(r))+(65535&e.D(r)),a=(s>>>16)+(this.D(r)>>>16)+(e.D(r)>>>16);i=a>>>16,s&=65535,a&=65535,n[r]=a<<16|s}return new nD(n,-2147483648&n[n.length-1]?-1:0)},g.R=function(e){if(nV(this)||nV(e))return nO;if(nF(this))return nF(e)?nU(this).R(nU(e)):nU(nU(this).R(e));if(nF(e))return nU(this.R(nU(e)));if(0>this.X(nM)&&0>e.X(nM))return nL(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var r=0;r<e.g.length;r++){var s=this.D(i)>>>16,a=65535&this.D(i),o=e.D(r)>>>16,l=65535&e.D(r);n[2*i+2*r]+=a*l,nq(n,2*i+2*r),n[2*i+2*r+1]+=s*l,nq(n,2*i+2*r+1),n[2*i+2*r+1]+=a*o,nq(n,2*i+2*r+1),n[2*i+2*r+2]+=s*o,nq(n,2*i+2*r+2)}for(i=0;i<t;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=t;i<2*t;i++)n[i]=0;return new nD(n,0)},g.gb=function(e){return nK(this,e).h},g.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)&e.D(i);return new nD(n,this.h&e.h)},g.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)|e.D(i);return new nD(n,this.h|e.h)},g.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)^e.D(i);return new nD(n,this.h^e.h)},nb.prototype.createWebChannel=nb.prototype.g,nS.prototype.send=nS.prototype.u,nS.prototype.open=nS.prototype.m,nS.prototype.close=nS.prototype.close,eX.NO_ERROR=0,eX.TIMEOUT=8,eX.HTTP_ERROR=6,eY.COMPLETE="complete",e0.EventType=e1,e1.OPEN="a",e1.CLOSE="b",e1.ERROR="c",e1.MESSAGE="d",eE.prototype.listen=eE.prototype.O,tJ.prototype.listenOnce=tJ.prototype.P,tJ.prototype.getLastError=tJ.prototype.Sa,tJ.prototype.getLastErrorCode=tJ.prototype.Ia,tJ.prototype.getStatus=tJ.prototype.da,tJ.prototype.getResponseJson=tJ.prototype.Wa,tJ.prototype.getResponseText=tJ.prototype.ja,tJ.prototype.send=tJ.prototype.ha,tJ.prototype.setWithCredentials=tJ.prototype.Oa,nA.prototype.digest=nA.prototype.l,nA.prototype.reset=nA.prototype.reset,nA.prototype.update=nA.prototype.j,nD.prototype.add=nD.prototype.add,nD.prototype.multiply=nD.prototype.R,nD.prototype.modulo=nD.prototype.gb,nD.prototype.compare=nD.prototype.X,nD.prototype.toNumber=nD.prototype.ea,nD.prototype.toString=nD.prototype.toString,nD.prototype.getBits=nD.prototype.D,nD.fromNumber=nL,nD.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return nU(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var i=nL(Math.pow(n,8)),r=nO,s=0;s<t.length;s+=8){var a=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+a),n);8>a?(a=nL(Math.pow(n,a)),r=r.R(a).add(nL(o))):r=(r=r.R(i)).add(nL(o))}return r};var nG=E.createWebChannelTransport=function(){return new nb},nQ=E.getStatEventTarget=function(){return eK()},nH=E.ErrorCode=eX,nW=E.EventType=eY,nX=E.Event=eq,nY=E.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20};E.FetchXmlHttpFactory=tz;var nJ=E.WebChannel=e0,nZ=E.XhrIo=tJ,n0=E.Md5=nA,n1=E.Integer=nD,n2=f("hPtJY");const n9="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n4{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}n4.UNAUTHENTICATED=new n4(null),n4.GOOGLE_CREDENTIALS=new n4("google-credentials-uid"),n4.FIRST_PARTY=new n4("first-party-uid"),n4.MOCK_USER=new n4("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let n6="10.8.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n5=new v.Logger("@firebase/firestore");function n7(){return n5.logLevel}function n3(e,...t){if(n5.logLevel<=v.LogLevel.DEBUG){let n=t.map(it);n5.debug(`Firestore (${n6}): ${e}`,...n)}}function n8(e,...t){if(n5.logLevel<=v.LogLevel.ERROR){let n=t.map(it);n5.error(`Firestore (${n6}): ${e}`,...n)}}function ie(e,...t){if(n5.logLevel<=v.LogLevel.WARN){let n=t.map(it);n5.warn(`Firestore (${n6}): ${e}`,...n)}}function it(e){if("string"==typeof e)return e;try{/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(e="Unexpected state"){let t=`FIRESTORE (${n6}) INTERNAL ASSERTION FAILED: `+e;throw n8(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class is extends w.FirebaseError{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class il{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(n4.UNAUTHENTICATED))}shutdown(){}}class ih{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class iu{constructor(e){this.t=e,this.currentUser=n4.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i,i=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),r=new ia;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new ia,e.enqueueRetryable(()=>i(this.currentUser))};let s=()=>{let t=r;e.enqueueRetryable(async()=>{await t.promise,await i(this.currentUser)})},a=e=>{n3("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(n3("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new ia)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(n3("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||ii(),new io(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||ii(),new n4(e)}}class ic{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=n4.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);let e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class id{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new ic(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(n4.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ig{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ip{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){let n=e=>{null!=e.error&&n3("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.R;return this.R=e.token,n3("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let i=e=>{n3("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>i(e)),setTimeout(()=>{if(!this.appCheck){let e=this.A.getImmediate({optional:!0});e?i(e):n3("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||ii(),this.R=e.token,new ig(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";for(;n.length<20;){let i=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(40);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let e=0;e<40;e++)n[e]=Math.floor(256*Math.random());return n}(0);for(let r=0;r<i.length;++r)n.length<20&&i[r]<t&&(n+=e.charAt(i[r]%e.length))}return n}}function iy(e,t){return e<t?-1:e>t?1:0}function iv(e,t,n){return e.length===t.length&&e.every((e,i)=>n(e,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new is(ir.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new is(ir.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return iw.fromMillis(Date.now())}static fromDate(e){return iw.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new iw(t,Math.floor(1e6*(e-1e3*t)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?iy(this.nanoseconds,e.nanoseconds):iy(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){return String(this.seconds- -62135596800).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e){this.timestamp=e}static fromTimestamp(e){return new iE(e)}static min(){return new iE(new iw(0,0))}static max(){return new iE(new iw(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e,t,n){void 0===t?t=0:t>e.length&&ii(),void 0===n?n=e.length-t:n>e.length-t&&ii(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===iT.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof iT?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let i=0;i<n;i++){let n=e.get(i),r=t.get(i);if(n<r)return -1;if(n>r)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ib extends iT{construct(e,t,n){return new ib(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new is(ir.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new ib(t)}static emptyPath(){return new ib([])}}const iS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class i_ extends iT{construct(e,t,n){return new i_(e,t,n)}static isValidIdentifier(e){return iS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),i_.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new i_(["__name__"])}static fromServerFormat(e){let t=[],n="",i=0,r=()=>{if(0===n.length)throw new is(ir.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},s=!1;for(;i<e.length;){let t=e[i];if("\\"===t){if(i+1===e.length)throw new is(ir.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[i+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new is(ir.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,i+=2}else"`"===t?s=!s:"."!==t||s?n+=t:r(),i++}if(r(),s)throw new is(ir.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new i_(t)}static emptyPath(){return new i_([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e){this.path=e}static fromPath(e){return new iC(ib.fromString(e))}static fromName(e){return new iC(ib.fromString(e).popFirst(5))}static empty(){return new iC(ib.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===ib.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return ib.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new iC(new ib(e.slice()))}}class iI{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new iI(iE.min(),iC.empty(),-1)}static max(){return new iI(iE.max(),iC.empty(),-1)}}class iA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ik(e){if(e.code!==ir.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;n3("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iD{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ii(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new iD((n,i)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,i)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof iD?t:iD.resolve(t)}catch(e){return iD.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):iD.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):iD.reject(t)}static resolve(e){return new iD((t,n)=>{t(e)})}static reject(e){return new iD((t,n)=>{n(e)})}static waitFor(e){return new iD((t,n)=>{let i=0,r=0,s=!1;e.forEach(e=>{++i,e.next(()=>{++r,s&&r===i&&t()},e=>n(e))}),s=!0,r===i&&t()})}static or(e){let t=iD.resolve(!1);for(let n of e)t=t.next(e=>e?iD.resolve(e):n());return t}static forEach(e,t){let n=[];return e.forEach((e,i)=>{n.push(t.call(this,e,i))}),this.waitFor(n)}static mapArray(e,t){return new iD((n,i)=>{let r=e.length,s=Array(r),a=0;for(let o=0;o<r;o++){let l=o;t(e[l]).next(e=>{s[l]=e,++a===r&&n(s)},e=>i(e))}})}static doWhile(e,t){return new iD((n,i)=>{let r=()=>{!0===e()?t().next(()=>{r()},i):n()};r()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iN{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new ia,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new iR(e,t.error)):this.V.resolve()},this.transaction.onerror=t=>{let n=iF(t.target.error);this.V.reject(new iR(e,n))}}static open(e,t,n,i){try{return new iN(t,e.transaction(i,n))}catch(e){throw new iR(t,e)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(n3("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){let e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){return new iP(this.transaction.objectStore(e))}}class ix{constructor(e,t,n){this.name=e,this.version=t,this.p=n,12.2===ix.S((0,w.getUA)())&&n8("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return n3("SimpleDb","Removing database:",e),iM(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!(0,w.isIndexedDBAvailable)())return!1;if(ix.C())return!0;let e=(0,w.getUA)(),t=ix.S(e),n=ix.v(e);return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||0<t&&t<10||0<n&&n<4.5)}static C(){var e;return void 0!==n2&&"YES"===(null===(e=n2.__PRIVATE_env)||void 0===e?void 0:e.F)}static M(e,t){return e.store(t)}static S(e){let t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i);return Number(t?t[1].split("_").slice(0,2).join("."):"-1")}static v(e){let t=e.match(/Android ([\d.]+)/i);return Number(t?t[1].split(".").slice(0,2).join("."):"-1")}async O(e){return this.db||(n3("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{let i=indexedDB.open(this.name,this.version);i.onsuccess=e=>{t(e.target.result)},i.onblocked=()=>{n(new iR(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=t=>{let i=t.target.error;"VersionError"===i.name?n(new is(ir.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===i.name?n(new is(ir.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+i)):n(new iR(e,i))},i.onupgradeneeded=e=>{n3("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);let t=e.target.result;this.p.N(t,i.transaction,e.oldVersion,this.version).next(()=>{n3("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=e=>this.B(e)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,i){let r="readonly"===t,s=0;for(;;){++s;try{this.db=await this.O(e);let t=iN.open(this.db,e,r?"readonly":"readwrite",n),s=i(t).next(e=>(t.g(),e)).catch(e=>(t.abort(e),iD.reject(e))).toPromise();return s.catch(()=>{}),await t.m,s}catch(t){let e="FirebaseError"!==t.name&&s<3;if(n3("SimpleDb","Transaction failed with error:",t.message,"Retrying:",e),this.close(),!e)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class iL{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return iM(this.k.delete())}}class iR extends is{constructor(e,t){super(ir.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function iO(e){return"IndexedDbTransactionError"===e.name}class iP{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(n3("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(n3("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),iM(n)}add(e){return n3("SimpleDb","ADD",this.store.name,e,e),iM(this.store.add(e))}get(e){return iM(this.store.get(e)).next(t=>(void 0===t&&(t=null),n3("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return n3("SimpleDb","DELETE",this.store.name,e),iM(this.store.delete(e))}count(){return n3("SimpleDb","COUNT",this.store.name),iM(this.store.count())}W(e,t){let n=this.options(e,t),i=n.index?this.store.index(n.index):this.store;if("function"==typeof i.getAll){let e=i.getAll(n.range);return new iD((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}})}{let e=this.cursor(n),t=[];return this.G(e,(e,n)=>{t.push(n)}).next(()=>t)}}j(e,t){let n=this.store.getAll(e,null===t?void 0:t);return new iD((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}})}H(e,t){n3("SimpleDb","DELETE ALL",this.store.name);let n=this.options(e,t);n.J=!1;let i=this.cursor(n);return this.G(i,(e,t,n)=>n.delete())}Y(e,t){let n;t?n=e:(n={},t=e);let i=this.cursor(n);return this.G(i,t)}Z(e){let t=this.cursor({});return new iD((n,i)=>{t.onerror=e=>{i(iF(e.target.error))},t.onsuccess=t=>{let i=t.target.result;i?e(i.primaryKey,i.value).next(e=>{e?i.continue():n()}):n()}})}G(e,t){let n=[];return new iD((i,r)=>{e.onerror=e=>{r(e.target.error)},e.onsuccess=e=>{let r=e.target.result;if(!r)return void i();let s=new iL(r),a=t(r.primaryKey,r.value,s);if(a instanceof iD){let e=a.catch(e=>(s.done(),iD.reject(e)));n.push(e)}s.isDone?i():null===s.$?r.continue():r.continue(s.$)}}).next(()=>iD.waitFor(n))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){let n=this.store.index(e.index);return e.J?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function iM(e){return new iD((t,n)=>{e.onsuccess=e=>{t(e.target.result)},e.onerror=e=>{n(iF(e.target.error))}})}let iV=!1;function iF(e){let t=ix.S((0,w.getUA)());if(t>=12.2&&t<13){let t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){let e=new is("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return iV||(iV=!0,setTimeout(()=>{throw e},0)),e}}return e}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iU{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.se(e),this.oe=e=>t.writeSequenceNumber(e))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.oe&&this.oe(e),e}}function ij(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iq(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function iB(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}iU._e=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iK{constructor(e,t){this.comparator=e,this.root=t||iz.EMPTY}insert(e,t){return new iK(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,iz.BLACK,null,null))}remove(e){return new iK(this.comparator,this.root.remove(e,this.comparator).copy(null,null,iz.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let i=this.comparator(e,n.key);if(0===i)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new i$(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new i$(this.root,e,this.comparator,!1)}getReverseIterator(){return new i$(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new i$(this.root,e,this.comparator,!0)}}class i${constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(0===r){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class iz{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:iz.RED,this.left=null!=i?i:iz.EMPTY,this.right=null!=r?r:iz.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,r){return new iz(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this,r=n(e,i.key);return(i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return iz.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,i=this;if(0>t(e,i.key))i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===t(e,i.key)){if(i.right.isEmpty())return iz.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,iz.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,iz.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){return Math.pow(2,this.check())<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ii();let e=this.left.check();if(e!==this.right.check())throw ii();return e+(this.isRed()?0:1)}}iz.EMPTY=null,iz.RED=!0,iz.BLACK=!1,iz.EMPTY=new class{constructor(){this.size=0}get key(){throw ii()}get value(){throw ii()}get color(){throw ii()}get left(){throw ii()}get right(){throw ii()}copy(e,t,n,i,r){return this}insert(e,t,n){return new iz(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iG{constructor(e){this.comparator=e,this.data=new iK(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new iQ(this.data.getIterator())}getIteratorFrom(e){return new iQ(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof iG)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,i=n.getNext().key;if(0!==this.comparator(e,i))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new iG(this.comparator);return t.data=e,t}}class iQ{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iH{constructor(e){this.fields=e,e.sort(i_.comparator)}static empty(){return new iH([])}unionWith(e){let t=new iG(i_.comparator);for(let e of this.fields)t=t.add(e);for(let n of e)t=t.add(n);return new iH(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return iv(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iW extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iX{constructor(e){this.binaryString=e}static fromBase64String(e){return new iX(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new iW("Invalid base64 string: "+e):e}}(e))}static fromUint8Array(e){return new iX(function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e))}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return iy(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}iX.EMPTY_BYTE_STRING=new iX("");const iY=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function iJ(e){if(e||ii(),"string"==typeof e){let t=0,n=iY.exec(e);if(n||ii(),n[1]){let e=n[1];t=Number(e=(e+"000000000").substr(0,9))}return{seconds:Math.floor(new Date(e).getTime()/1e3),nanos:t}}return{seconds:iZ(e.seconds),nanos:iZ(e.nanos)}}function iZ(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function i0(e){return"string"==typeof e?iX.fromBase64String(e):iX.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i1(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function i2(e){let t=e.mapValue.fields.__previous_value__;return i1(t)?i2(t):t}function i9(e){let t=iJ(e.mapValue.fields.__local_write_time__.timestampValue);return new iw(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i4{constructor(e,t,n,i,r,s,a,o,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l}}class i6{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new i6("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof i6&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i5={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function i7(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?i1(e)?4:rh(e)?9007199254740991:10:ii()}function i3(e,t){if(e===t)return!0;let n=i7(e);if(n!==i7(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return i9(e).isEqual(i9(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=iJ(e.timestampValue),i=iJ(t.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return i0(e.bytesValue).isEqual(i0(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return iZ(e.geoPointValue.latitude)===iZ(t.geoPointValue.latitude)&&iZ(e.geoPointValue.longitude)===iZ(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return iZ(e.integerValue)===iZ(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=iZ(e.doubleValue),i=iZ(t.doubleValue);return n===i?ij(n)===ij(i):isNaN(n)&&isNaN(i)}return!1}(e,t);case 9:return iv(e.arrayValue.values||[],t.arrayValue.values||[],i3);case 10:return function(e,t){let n=e.mapValue.fields||{},i=t.mapValue.fields||{};if(iq(n)!==iq(i))return!1;for(let e in n)if(n.hasOwnProperty(e)&&(void 0===i[e]||!i3(n[e],i[e])))return!1;return!0}(e,t);default:return ii()}}function i8(e,t){return void 0!==(e.values||[]).find(e=>i3(e,t))}function re(e,t){if(e===t)return 0;let n=i7(e),i=i7(t);if(n!==i)return iy(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return iy(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=iZ(e.integerValue||e.doubleValue),i=iZ(t.integerValue||t.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(e,t);case 3:return rt(e.timestampValue,t.timestampValue);case 4:return rt(i9(e),i9(t));case 5:return iy(e.stringValue,t.stringValue);case 6:return function(e,t){let n=i0(e),i=i0(t);return n.compareTo(i)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),i=t.split("/");for(let e=0;e<n.length&&e<i.length;e++){let t=iy(n[e],i[e]);if(0!==t)return t}return iy(n.length,i.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=iy(iZ(e.latitude),iZ(t.latitude));return 0!==n?n:iy(iZ(e.longitude),iZ(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let n=e.values||[],i=t.values||[];for(let e=0;e<n.length&&e<i.length;++e){let t=re(n[e],i[e]);if(t)return t}return iy(n.length,i.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===i5.mapValue&&t===i5.mapValue)return 0;if(e===i5.mapValue)return 1;if(t===i5.mapValue)return -1;let n=e.fields||{},i=Object.keys(n),r=t.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let e=0;e<i.length&&e<s.length;++e){let t=iy(i[e],s[e]);if(0!==t)return t;let a=re(n[i[e]],r[s[e]]);if(0!==a)return a}return iy(i.length,s.length)}(e.mapValue,t.mapValue);default:throw ii()}}function rt(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return iy(e,t);let n=iJ(e),i=iJ(t),r=iy(n.seconds,i.seconds);return 0!==r?r:iy(n.nanos,i.nanos)}function rn(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=iJ(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?i0(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,iC.fromName(t).toString()):"geoPointValue"in e?(n=e.geoPointValue,`geo(${n.latitude},${n.longitude})`):"arrayValue"in e?function(e){let t="[",n=!0;for(let i of e.values||[])n?n=!1:t+=",",t+=rn(i);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),n="{",i=!0;for(let r of t)i?i=!1:n+=",",n+=`${r}:${rn(e.fields[r])}`;return n+"}"}(e.mapValue):ii()}function ri(e){return!!e&&"integerValue"in e}function rr(e){return!!e&&"arrayValue"in e}function rs(e){return!!e&&"nullValue"in e}function ra(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ro(e){return!!e&&"mapValue"in e}function rl(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return iB(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=rl(n)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=rl(e.arrayValue.values[n]);return t}return Object.assign({},e)}function rh(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e){this.value=e}static empty(){return new ru({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!ro(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=rl(t)}setAll(e){let t=i_.emptyPath(),n={},i=[];e.forEach((e,r)=>{if(!t.isImmediateParentOf(r)){let e=this.getFieldsMap(t);this.applyChanges(e,n,i),n={},i=[],t=r.popLast()}e?n[r.lastSegment()]=rl(e):i.push(r.lastSegment())});let r=this.getFieldsMap(t);this.applyChanges(r,n,i)}delete(e){let t=this.field(e.popLast());ro(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return i3(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];ro(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){for(let i of(iB(t,(t,n)=>e[t]=n),n))delete e[i]}clone(){return new ru(rl(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,t,n,i,r,s,a){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=r,this.data=s,this.documentState=a}static newInvalidDocument(e){return new rc(e,0,iE.min(),iE.min(),iE.min(),ru.empty(),0)}static newFoundDocument(e,t,n,i){return new rc(e,1,t,iE.min(),n,i,0)}static newNoDocument(e,t){return new rc(e,2,t,iE.min(),iE.min(),ru.empty(),0)}static newUnknownDocument(e,t){return new rc(e,3,t,iE.min(),iE.min(),ru.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(iE.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ru.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ru.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=iE.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof rc&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new rc(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e,t){this.position=e,this.inclusive=t}}function rf(e,t,n){let i=0;for(let r=0;r<e.position.length;r++){let s=t[r],a=e.position[r];if(i=s.field.isKeyField()?iC.comparator(iC.fromName(a.referenceValue),n.key):re(a,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return i}function rg(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!i3(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{}class ry extends rm{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new rT(e,t,n):"array-contains"===t?new rC(e,n):"in"===t?new rI(e,n):"not-in"===t?new rA(e,n):"array-contains-any"===t?new rk(e,n):new ry(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new rb(e,n):new rS(e,n)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(re(t,this.value)):null!==t&&i7(this.value)===i7(t)&&this.matchesComparison(re(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return ii()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class rv extends rm{constructor(e,t){super(),this.filters=e,this.op=t,this.ue=null}static create(e,t){return new rv(e,t)}matches(e){return rw(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ue||(this.ue=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function rw(e){return"and"===e.op}function rE(e){for(let t of e.filters)if(t instanceof rv)return!1;return!0}class rT extends ry{constructor(e,t,n){super(e,t,n),this.key=iC.fromName(n.referenceValue)}matches(e){let t=iC.comparator(e.key,this.key);return this.matchesComparison(t)}}class rb extends ry{constructor(e,t){super(e,"in",t),this.keys=r_("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class rS extends ry{constructor(e,t){super(e,"not-in",t),this.keys=r_("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function r_(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>iC.fromName(e.referenceValue))}class rC extends ry{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return rr(t)&&i8(t.arrayValue,this.value)}}class rI extends ry{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&i8(this.value.arrayValue,t)}}class rA extends ry{constructor(e,t){super(e,"not-in",t)}matches(e){if(i8(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!i8(this.value.arrayValue,t)}}class rk extends ry{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!rr(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>i8(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(e,t=null,n=[],i=[],r=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=a,this.ce=null}}function rN(e,t=null,n=[],i=[],r=null,s=null,a=null){return new rD(e,t,n,i,r,s,a)}function rx(e){if(null===e.ce){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:"+e.filters.map(e=>(function e(t){if(t instanceof ry)return t.field.canonicalString()+t.op.toString()+rn(t.value);if(rE(t)&&rw(t))return t.filters.map(t=>e(t)).join(",");{let n=t.filters.map(t=>e(t)).join(",");return`${t.op}(${n})`}})(e)).join(",")+"|ob:"+e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==e.limit||(t+="|l:"+e.limit),e.startAt&&(t+="|lb:"+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(e=>rn(e)).join(",")),e.endAt&&(t+="|ub:"+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(e=>rn(e)).join(",")),e.ce=t}return e.ce}function rL(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let r=0;r<e.orderBy.length;r++){var n,i;if(n=e.orderBy[r],i=t.orderBy[r],!(n.dir===i.dir&&n.field.isEqual(i.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!function e(t,n){return t instanceof ry?n instanceof ry&&t.op===n.op&&t.field.isEqual(n.field)&&i3(t.value,n.value):t instanceof rv?n instanceof rv&&t.op===n.op&&t.filters.length===n.filters.length&&t.filters.reduce((t,i,r)=>t&&e(i,n.filters[r]),!0):void ii()}(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!rg(e.startAt,t.startAt)&&rg(e.endAt,t.endAt)}function rR(e){return iC.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rO{constructor(e,t=null,n=[],i=[],r=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=a,this.endAt=o,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function rP(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function rM(e){if(null===e.le){let t;e.le=[];let n=new Set;for(let t of e.explicitOrderBy)e.le.push(t),n.add(t.field.canonicalString());let i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(t=new iG(i_.comparator),e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t).forEach(t=>{n.has(t.canonicalString())||t.isKeyField()||e.le.push(new rp(t,i))}),n.has(i_.keyField().canonicalString())||e.le.push(new rp(i_.keyField(),i))}return e.le}function rV(e){return e.he||(e.he=function(e,t){if("F"===e.limitType)return rN(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{let t="desc"===e.dir?"asc":"desc";return new rp(e.field,t)});let n=e.endAt?new rd(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new rd(e.startAt.position,e.startAt.inclusive):null;return rN(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}}(e,rM(e))),e.he}function rF(e,t,n){return new rO(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function rU(e,t){return rL(rV(e),rV(t))&&e.limitType===t.limitType}function rj(e){return`${rx(rV(e))}|lt:${e.limitType}`}function rq(e){var t;let n;return`Query(target=${n=(t=rV(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof ry?`${t.field.canonicalString()} ${t.op} ${rn(t.value)}`:t instanceof rv?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(n+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>rn(e)).join(",")),t.endAt&&(n+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>rn(e)).join(",")),`Target(${n})`}; limitType=${e.limitType})`}function rB(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):iC.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(let n of rM(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,n){let i=rf(e,t,n);return e.inclusive?i<=0:i<0}(e.startAt,rM(e),t))&&(!e.endAt||!!function(e,t,n){let i=rf(e,t,n);return e.inclusive?i>=0:i>0}(e.endAt,rM(e),t))}function rK(e){return(t,n)=>{let i=!1;for(let r of rM(e)){let e=function(e,t,n){let i=e.field.isKeyField()?iC.comparator(t.key,n.key):function(e,t,n){let i=t.data.field(e),r=n.data.field(e);return null!==i&&null!==r?re(i,r):ii()}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return -1*i;default:return ii()}}(r,t,n);if(0!==e)return e;i=i||r.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r${constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[t,i]of n)if(this.equalsFn(t,e))return i}}has(e){return void 0!==this.get(e)}set(e,t){let n=this.mapKeyFn(e),i=this.inner[n];if(void 0===i)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],e))return void(i[n]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return 1===n.length?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){iB(this.inner,(t,n)=>{for(let[t,i]of n)e(t,i)})}isEmpty(){return function(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rz=new iK(iC.comparator),rG=new iK(iC.comparator);function rQ(...e){let t=rG;for(let n of e)t=t.insert(n.key,n);return t}function rH(){return new r$(e=>e.toString(),(e,t)=>e.isEqual(t))}new iK(iC.comparator);const rW=new iG(iC.comparator);function rX(...e){let t=rW;for(let n of e)t=t.add(n);return t}const rY=new iG(iy);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rJ{constructor(){this._=void 0}}class rZ extends rJ{}class r0 extends rJ{constructor(e){super(),this.elements=e}}function r1(e,t){let n=r5(t);for(let t of e.elements)n.some(e=>i3(e,t))||n.push(t);return{arrayValue:{values:n}}}class r2 extends rJ{constructor(e){super(),this.elements=e}}function r9(e,t){let n=r5(t);for(let t of e.elements)n=n.filter(e=>!i3(e,t));return{arrayValue:{values:n}}}class r4 extends rJ{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function r6(e){return iZ(e.integerValue||e.doubleValue)}function r5(e){return rr(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class r7{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new r7}static exists(e){return new r7(void 0,e)}static updateTime(e){return new r7(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function r3(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class r8{}function se(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new sl(e.key,r7.none()):new si(e.key,e.data,r7.none());{let n=e.data,i=ru.empty(),r=new iG(i_.comparator);for(let e of t.fields)if(!r.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?i.delete(e):i.set(e,t),r=r.add(e)}return new sr(e.key,i,new iH(r.toArray()),r7.none())}}function st(e,t,n,i){return e instanceof si?function(e,t,n,i){if(!r3(e.precondition,t))return n;let r=e.value.clone(),s=so(e.fieldTransforms,i,t);return r.setAll(s),t.convertToFoundDocument(t.version,r).setHasLocalMutations(),null}(e,t,n,i):e instanceof sr?function(e,t,n,i){if(!r3(e.precondition,t))return n;let r=so(e.fieldTransforms,i,t),s=t.data;return(s.setAll(ss(e)),s.setAll(r),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,i):r3(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}function sn(e,t){var n,i;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,i=t.fieldTransforms,!!(void 0===n&&void 0===i||!(!n||!i)&&iv(n,i,(e,t)=>{var n,i;return e.field.isEqual(t.field)&&(n=e.transform,i=t.transform,n instanceof r0&&i instanceof r0||n instanceof r2&&i instanceof r2?iv(n.elements,i.elements,i3):n instanceof r4&&i instanceof r4?i3(n.Ie,i.Ie):n instanceof rZ&&i instanceof rZ)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class si extends r8{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class sr extends r8{constructor(e,t,n,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function ss(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let i=e.data.field(n);t.set(n,i)}}),t}function sa(e,t,n){var i;let r=new Map;e.length===n.length||ii();for(let s=0;s<n.length;s++){let a=e[s],o=a.transform,l=t.data.field(a.field);r.set(a.field,(i=n[s],o instanceof r0?r1(o,l):o instanceof r2?r9(o,l):i))}return r}function so(e,t,n){let i=new Map;for(let r of e){let e=r.transform,s=n.data.field(r.field);i.set(r.field,e instanceof rZ?function(e,t){let n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&i1(t)&&(t=i2(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(t,s):e instanceof r0?r1(e,s):e instanceof r2?r9(e,s):function(e,t){var n,i;let r=(n=e,i=t,n instanceof r4?ri(i)||i&&"doubleValue"in i?i:{integerValue:0}:null),s=r6(r)+r6(e.Ie);return ri(r)&&ri(e.Ie)?{integerValue:""+s}:/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ij(t)?"-0":t}}(e.serializer,s)}(e,s))}return i}class sl extends r8{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let r=this.mutations[t];if(r.key.isEqual(e.key)){var i;i=n[t],r instanceof si?function(e,t,n){let i=e.value.clone(),r=sa(e.fieldTransforms,t,n.transformResults);i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(r,e,i):r instanceof sr?function(e,t,n){if(!r3(e.precondition,t))return void t.convertToUnknownDocument(n.version);let i=sa(e.fieldTransforms,t,n.transformResults),r=t.data;r.setAll(ss(e)),r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(r,e,i):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,i)}}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=st(n,e,t,this.localWriteTime));for(let n of this.mutations)n.key.isEqual(e.key)&&(t=st(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=rH();return this.mutations.forEach(i=>{let r=e.get(i.key),s=r.overlayedDocument,a=this.applyToLocalView(s,r.mutatedFields),o=se(s,a=t.has(i.key)?null:a);null!==o&&n.set(i.key,o),s.isValidDocument()||s.convertToNoDocument(iE.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),rX())}isEqual(e){return this.batchId===e.batchId&&iv(this.mutations,e.mutations,(e,t)=>sn(e,t))&&iv(this.baseMutations,e.baseMutations,(e,t)=>sn(e,t))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,t){this.count=e,this.unchangedNames=t}}function sd(e){if(void 0===e)return n8("GRPC error has no .code"),ir.UNKNOWN;switch(e){case a.OK:return ir.OK;case a.CANCELLED:return ir.CANCELLED;case a.UNKNOWN:return ir.UNKNOWN;case a.DEADLINE_EXCEEDED:return ir.DEADLINE_EXCEEDED;case a.RESOURCE_EXHAUSTED:return ir.RESOURCE_EXHAUSTED;case a.INTERNAL:return ir.INTERNAL;case a.UNAVAILABLE:return ir.UNAVAILABLE;case a.UNAUTHENTICATED:return ir.UNAUTHENTICATED;case a.INVALID_ARGUMENT:return ir.INVALID_ARGUMENT;case a.NOT_FOUND:return ir.NOT_FOUND;case a.ALREADY_EXISTS:return ir.ALREADY_EXISTS;case a.PERMISSION_DENIED:return ir.PERMISSION_DENIED;case a.FAILED_PRECONDITION:return ir.FAILED_PRECONDITION;case a.ABORTED:return ir.ABORTED;case a.OUT_OF_RANGE:return ir.OUT_OF_RANGE;case a.UNIMPLEMENTED:return ir.UNIMPLEMENTED;case a.DATA_LOSS:return ir.DATA_LOSS;default:return ii()}}(o=a||(a={}))[o.OK=0]="OK",o[o.CANCELLED=1]="CANCELLED",o[o.UNKNOWN=2]="UNKNOWN",o[o.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",o[o.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",o[o.NOT_FOUND=5]="NOT_FOUND",o[o.ALREADY_EXISTS=6]="ALREADY_EXISTS",o[o.PERMISSION_DENIED=7]="PERMISSION_DENIED",o[o.UNAUTHENTICATED=16]="UNAUTHENTICATED",o[o.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",o[o.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",o[o.ABORTED=10]="ABORTED",o[o.OUT_OF_RANGE=11]="OUT_OF_RANGE",o[o.UNIMPLEMENTED=12]="UNIMPLEMENTED",o[o.INTERNAL=13]="INTERNAL",o[o.UNAVAILABLE=14]="UNAVAILABLE",o[o.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sf=new n1([4294967295,4294967295],0);function sg(e){let t=(new TextEncoder).encode(e),n=new n0;return n.update(t),new Uint8Array(n.digest())}function sp(e){let t=new DataView(e.buffer),n=t.getUint32(0,!0),i=t.getUint32(4,!0),r=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new n1([n,i],0),new n1([r,s],0)]}class sm{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new sy(`Invalid padding: ${t}`);if(n<0||e.length>0&&0===this.hashCount)throw new sy(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new sy(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ee=n1.fromNumber(this.Te)}de(e,t,n){let i=e.add(t.multiply(n1.fromNumber(n)));return 1===i.compare(sf)&&(i=new n1([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Te)return!1;let[t,n]=sp(sg(e));for(let e=0;e<this.hashCount;e++){let i=this.de(t,n,e);if(!this.Ae(i))return!1}return!0}static create(e,t,n){let i=new sm(new Uint8Array(Math.ceil(e/8)),e%8==0?0:8-e%8,t);return n.forEach(e=>i.insert(e)),i}insert(e){if(0===this.Te)return;let[t,n]=sp(sg(e));for(let e=0;e<this.hashCount;e++){let i=this.de(t,n,e);this.Re(i)}}Re(e){this.bitmap[Math.floor(e/8)]|=1<<e%8}}class sy extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(e,t,n,i,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,n){let i=new Map;return i.set(e,sw.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new sv(iE.min(),i,new iK(iy),rz,rX())}}class sw{constructor(e,t,n,i,r){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new sw(n,t,rX(),rX(),rX())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e,t,n,i){this.Ve=e,this.removedTargetIds=t,this.key=n,this.me=i}}class sT{constructor(e,t){this.targetId=e,this.fe=t}}class sb{constructor(e,t,n=iX.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class sS{constructor(){this.ge=0,this.pe=sI(),this.ye=iX.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return 0!==this.ge}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=rX(),t=rX(),n=rX();return this.pe.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:ii()}}),new sw(this.ye,this.we,e,t,n)}Fe(){this.Se=!1,this.pe=sI()}Me(e,t){this.Se=!0,this.pe=this.pe.insert(e,t)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,this.ge>=0||ii()}Be(){this.Se=!0,this.we=!0}}class s_{constructor(e){this.Le=e,this.ke=new Map,this.qe=rz,this.Qe=sC(),this.Ke=new iK(iy)}$e(e){for(let t of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(t,e.me):this.We(t,e.key,e.me);for(let t of e.removedTargetIds)this.We(t,e.key,e.me)}Ge(e){this.forEachTarget(e,t=>{let n=this.ze(t);switch(e.state){case 0:this.je(t)&&n.Ce(e.resumeToken);break;case 1:n.Ne(),n.be||n.Fe(),n.Ce(e.resumeToken);break;case 2:n.Ne(),n.be||this.removeTarget(t);break;case 3:this.je(t)&&(n.Be(),n.Ce(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),n.Ce(e.resumeToken));break;default:ii()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ke.forEach((e,n)=>{this.je(n)&&t(n)})}Je(e){let t=e.targetId,n=e.fe.count,i=this.Ye(t);if(i){let r=i.target;if(rR(r)){if(0===n){let e=new iC(r.path);this.We(t,e,rc.newNoDocument(e,iE.min()))}else 1===n||ii()}else{let i=this.Ze(t);if(i!==n){let n=this.Xe(e),r=n?this.et(n,e,i):1;0!==r&&(this.He(t),this.Ke=this.Ke.insert(t,2===r?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch"))}}}}Xe(e){let t,n;let i=e.fe.unchangedNames;if(!i||!i.bits)return null;let{bits:{bitmap:r="",padding:s=0},hashCount:a=0}=i;try{t=i0(r).toUint8Array()}catch(e){if(e instanceof iW)return ie("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{n=new sm(t,s,a)}catch(e){return ie(e instanceof sy?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===n.Te?null:n}et(e,t,n){return t.fe.count===n-this.rt(e,t.targetId)?0:2}rt(e,t){let n=this.Le.getRemoteKeysForTarget(t),i=0;return n.forEach(n=>{let r=this.Le.nt(),s=`projects/${r.projectId}/databases/${r.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.We(t,n,null),i++)}),i}it(e){let t=new Map;this.ke.forEach((n,i)=>{let r=this.Ye(i);if(r){if(n.current&&rR(r.target)){let t=new iC(r.target.path);null!==this.qe.get(t)||this.st(i,t)||this.We(i,t,rc.newNoDocument(t,e))}n.De&&(t.set(i,n.ve()),n.Fe())}});let n=rX();this.Qe.forEach((e,t)=>{let i=!0;t.forEachWhile(e=>{let t=this.Ye(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(i=!1,!1)}),i&&(n=n.add(e))}),this.qe.forEach((t,n)=>n.setReadTime(e));let i=new sv(e,t,this.Ke,this.qe,n);return this.qe=rz,this.Qe=sC(),this.Ke=new iK(iy),i}Ue(e,t){if(!this.je(e))return;let n=this.st(e,t.key)?2:0;this.ze(e).Me(t.key,n),this.qe=this.qe.insert(t.key,t),this.Qe=this.Qe.insert(t.key,this.ot(t.key).add(e))}We(e,t,n){if(!this.je(e))return;let i=this.ze(e);this.st(e,t)?i.Me(t,1):i.xe(t),this.Qe=this.Qe.insert(t,this.ot(t).delete(e)),n&&(this.qe=this.qe.insert(t,n))}removeTarget(e){this.ke.delete(e)}Ze(e){let t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let t=this.ke.get(e);return t||(t=new sS,this.ke.set(e,t)),t}ot(e){let t=this.Qe.get(e);return t||(t=new iG(iy),this.Qe=this.Qe.insert(e,t)),t}je(e){let t=null!==this.Ye(e);return t||n3("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){let t=this.ke.get(e);return t&&t.be?null:this.Le._t(e)}He(e){this.ke.set(e,new sS),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}st(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function sC(){return new iK(iC.comparator)}function sI(){return new iK(iC.comparator)}const sA={asc:"ASCENDING",desc:"DESCENDING"},sk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},sD={and:"AND",or:"OR"};class sN{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function sx(e,t){return e.useProto3Json||null==t?t:{value:t}}function sL(e){return e||ii(),iE.fromTimestamp(function(e){let t=iJ(e);return new iw(t.seconds,t.nanos)}(e))}function sR(e,t){let n=new ib(["projects",e.projectId,"databases",e.database]).child("documents");return void 0===t?n:n.child(t)}function sO(e){let t=ib.fromString(e);return sq(t)||ii(),t}function sP(e,t){let n=sO(t);if(n.get(1)!==e.databaseId.projectId)throw new is(ir.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new is(ir.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new iC(sF(n))}function sM(e,t){return sR(e.databaseId,t).canonicalString()}function sV(e){return new ib(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function sF(e){return e.length>4&&"documents"===e.get(4)||ii(),e.popFirst(5)}function sU(e){return{fieldPath:e.canonicalString()}}function sj(e){return i_.fromServerFormat(e.fieldPath)}function sq(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sB{constructor(e,t,n,i,r=iE.min(),s=iE.min(),a=iX.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=o}withSequenceNumber(e){return new sB(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new sB(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new sB(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new sB(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sK{constructor(e){this.ct=e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s${constructor(){}Pt(e,t){this.It(e,t),t.Tt()}It(e,t){if("nullValue"in e)this.Et(t,5);else if("booleanValue"in e)this.Et(t,10),t.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(t,15),t.dt(iZ(e.integerValue));else if("doubleValue"in e){let n=iZ(e.doubleValue);isNaN(n)?this.Et(t,13):(this.Et(t,15),ij(n)?t.dt(0):t.dt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Et(t,20),"string"==typeof n?t.At(n):(t.At(`${n.seconds||""}`),t.dt(n.nanos||0))}else if("stringValue"in e)this.Rt(e.stringValue,t),this.Vt(t);else if("bytesValue"in e)this.Et(t,30),t.ft(i0(e.bytesValue)),this.Vt(t);else if("referenceValue"in e)this.gt(e.referenceValue,t);else if("geoPointValue"in e){let n=e.geoPointValue;this.Et(t,45),t.dt(n.latitude||0),t.dt(n.longitude||0)}else"mapValue"in e?rh(e)?this.Et(t,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,t),this.Vt(t)):"arrayValue"in e?(this.wt(e.arrayValue,t),this.Vt(t)):ii()}Rt(e,t){this.Et(t,25),this.St(e,t)}St(e,t){t.At(e)}yt(e,t){let n=e.fields||{};for(let e of(this.Et(t,55),Object.keys(n)))this.Rt(e,t),this.It(n[e],t)}wt(e,t){let n=e.values||[];for(let e of(this.Et(t,50),n))this.It(e,t)}gt(e,t){this.Et(t,37),iC.fromName(e).path.forEach(e=>{this.Et(t,60),this.St(e,t)})}Et(e,t){e.dt(t)}Vt(e){e.dt(2)}}s$.bt=new s$;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sz{constructor(){this._n=new sG}addToCollectionParentIndex(e,t){return this._n.add(t),iD.resolve()}getCollectionParents(e,t){return iD.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return iD.resolve()}deleteFieldIndex(e,t){return iD.resolve()}deleteAllFieldIndexes(e){return iD.resolve()}createTargetIndexes(e,t){return iD.resolve()}getDocumentsMatchingTarget(e,t){return iD.resolve(null)}getIndexType(e,t){return iD.resolve(0)}getFieldIndexes(e,t){return iD.resolve([])}getNextCollectionGroupToUpdate(e){return iD.resolve(null)}getMinOffset(e,t){return iD.resolve(iI.min())}getMinOffsetFromCollectionGroup(e,t){return iD.resolve(iI.min())}updateCollectionGroup(e,t,n){return iD.resolve()}updateIndexEntries(e,t){return iD.resolve()}}class sG{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new iG(ib.comparator),r=!i.has(n);return this.index[t]=i.add(n),r}has(e){let t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new iG(ib.comparator)).toArray()}}new Uint8Array(0);class sQ{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new sQ(e,sQ.DEFAULT_COLLECTION_PERCENTILE,sQ.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sQ.DEFAULT_COLLECTION_PERCENTILE=10,sQ.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,sQ.DEFAULT=new sQ(41943040,sQ.DEFAULT_COLLECTION_PERCENTILE,sQ.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),sQ.DISABLED=new sQ(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sH{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new sH(0)}static Bn(){return new sH(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sW{constructor(){this.changes=new r$(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,rc.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?iD.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sX{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sY{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(n=i,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&st(n.mutation,e,iH.empty(),iw.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,rX()).next(()=>t))}getLocalViewOfDocuments(e,t,n=rX()){let i=rH();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,n).next(e=>{let t=rQ();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let n=rH();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,rX()))}populateOverlays(e,t,n){let i=[];return n.forEach(e=>{t.has(e)||i.push(e)}),this.documentOverlayCache.getOverlays(e,i).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,i){let r=rz,s=rH(),a=rH();return t.forEach((e,t)=>{let a=n.get(t.key);i.has(t.key)&&(void 0===a||a.mutation instanceof sr)?r=r.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),st(a.mutation,t,a.mutation.getFieldMask(),iw.now())):s.set(t.key,iH.empty())}),this.recalculateAndSaveOverlays(e,r).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return a.set(e,new sX(t,null!==(n=s.get(e))&&void 0!==n?n:null))}),a))}recalculateAndSaveOverlays(e,t){let n=rH(),i=new iK((e,t)=>e-t),r=rX();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let r of e)r.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let a=n.get(e)||iH.empty();a=r.applyToLocalView(s,a),n.set(e,a);let o=(i.get(r.batchId)||rX()).add(e);i=i.insert(r.batchId,o)})}).next(()=>{let s=[],a=i.getReverseIterator();for(;a.hasNext();){let i=a.getNext(),o=i.key,l=i.value,h=rH();l.forEach(e=>{if(!r.has(e)){let i=se(t.get(e),n.get(e));null!==i&&h.set(e,i),r=r.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,o,h))}return iD.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,i){return iC.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):null!==t.collectionGroup?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,i):this.getDocumentsMatchingCollectionQuery(e,t,n,i)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next(r=>{let s=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-r.size):iD.resolve(rH()),a=-1,o=r;return s.next(t=>iD.forEach(t,(t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),r.get(t)?iD.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,r)).next(()=>this.computeViews(e,o,t,rX())).next(e=>{let t;return{batchId:a,changes:(t=rG,e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t)}}))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new iC(t)).next(e=>{let t=rQ();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,i){let r=t.collectionGroup,s=rQ();return this.indexManager.getCollectionParents(e,r).next(a=>iD.forEach(a,a=>{let o=new rO(a.child(r),null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt);return this.getDocumentsMatchingCollectionQuery(e,o,n,i).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,n,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(s=>(r=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r,i))).next(e=>{r.forEach((t,n)=>{let i=n.getKey();null===e.get(i)&&(e=e.insert(i,rc.newInvalidDocument(i)))});let n=rQ();return e.forEach((e,i)=>{let s=r.get(e);void 0!==s&&st(s.mutation,i,iH.empty(),iw.now()),rB(t,i)&&(n=n.insert(e,i))}),n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sJ{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,t){return iD.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,{id:t.id,version:t.version,createTime:sL(t.createTime)}),iD.resolve()}getNamedQuery(e,t){return iD.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,{name:t.name,query:function(e){let t=function(e){var t;let n,i=function(e){let t=sO(e);return 4===t.length?ib.emptyPath():sF(t)}(e.parent),r=e.structuredQuery,s=r.from?r.from.length:0,a=null;if(s>0){1===s||ii();let e=r.from[0];e.allDescendants?a=e.collectionId:i=i.child(e.collectionId)}let o=[];r.where&&(o=function(e){var t;let n=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=sj(e.unaryFilter.field);return ry.create(t,"==",{doubleValue:NaN});case"IS_NULL":let n=sj(e.unaryFilter.field);return ry.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let i=sj(e.unaryFilter.field);return ry.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let r=sj(e.unaryFilter.field);return ry.create(r,"!=",{nullValue:"NULL_VALUE"});default:return ii()}}(t):void 0!==t.fieldFilter?ry.create(sj(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ii()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?rv.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return ii()}}(t.compositeFilter.op)):ii()}(e);return n instanceof rv&&rE(t=n)&&rw(t)?n.getFilters():[n]}(r.where));let l=[];r.orderBy&&(l=r.orderBy.map(e=>new rp(sj(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let h=null;r.limit&&(h=null==(n="object"==typeof(t=r.limit)?t.value:t)?null:n);let u=null;r.startAt&&(u=function(e){let t=!!e.before;return new rd(e.values||[],t)}(r.startAt));let c=null;return r.endAt&&(c=function(e){let t=!e.before;return new rd(e.values||[],t)}(r.endAt)),new rO(i,a,l,o,h,"F",u,c)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?rF(t,t.limit,"L"):t}(t.bundledQuery),readTime:sL(t.readTime)}),iD.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sZ{constructor(){this.overlays=new iK(iC.comparator),this.hr=new Map}getOverlay(e,t){return iD.resolve(this.overlays.get(t))}getOverlays(e,t){let n=rH();return iD.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,i)=>{this.ht(e,t,i)}),iD.resolve()}removeOverlaysForBatchId(e,t,n){let i=this.hr.get(n);return void 0!==i&&(i.forEach(e=>this.overlays=this.overlays.remove(e)),this.hr.delete(n)),iD.resolve()}getOverlaysForCollection(e,t,n){let i=rH(),r=t.length+1,s=new iC(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===r&&e.largestBatchId>n&&i.set(e.getKey(),e)}return iD.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let r=new iK((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=r.get(e.largestBatchId);null===t&&(t=rH(),r=r.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=rH(),o=r.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=i)););return iD.resolve(a)}ht(e,t,n){let i=this.overlays.get(n.key);if(null!==i){let e=this.hr.get(i.largestBatchId).delete(n.key);this.hr.set(i.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new su(t,n));let r=this.hr.get(t);void 0===r&&(r=rX(),this.hr.set(t,r)),this.hr.set(t,r.add(n.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(){this.Pr=new iG(s1.Ir),this.Tr=new iG(s1.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,t){let n=new s1(e,t);this.Pr=this.Pr.add(n),this.Tr=this.Tr.add(n)}dr(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Ar(new s1(e,t))}Rr(e,t){e.forEach(e=>this.removeReference(e,t))}Vr(e){let t=new iC(new ib([])),n=new s1(t,e),i=new s1(t,e+1),r=[];return this.Tr.forEachInRange([n,i],e=>{this.Ar(e),r.push(e.key)}),r}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){let t=new iC(new ib([])),n=new s1(t,e),i=new s1(t,e+1),r=rX();return this.Tr.forEachInRange([n,i],e=>{r=r.add(e.key)}),r}containsKey(e){let t=new s1(e,0),n=this.Pr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class s1{constructor(e,t){this.key=e,this.pr=t}static Ir(e,t){return iC.comparator(e.key,t.key)||iy(e.pr,t.pr)}static Er(e,t){return iy(e.pr,t.pr)||iC.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new iG(s1.Ir)}checkEmpty(e){return iD.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,i){let r=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new sh(r,t,n,i);for(let t of(this.mutationQueue.push(s),i))this.wr=this.wr.add(new s1(t.key,r)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return iD.resolve(s)}lookupMutationBatch(e,t){return iD.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.br(t+1),i=n<0?0:n;return iD.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return iD.resolve(0===this.mutationQueue.length?-1:this.yr-1)}getAllMutationBatches(e){return iD.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new s1(t,0),i=new s1(t,Number.POSITIVE_INFINITY),r=[];return this.wr.forEachInRange([n,i],e=>{let t=this.Sr(e.pr);r.push(t)}),iD.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new iG(iy);return t.forEach(e=>{let t=new s1(e,0),i=new s1(e,Number.POSITIVE_INFINITY);this.wr.forEachInRange([t,i],e=>{n=n.add(e.pr)})}),iD.resolve(this.Dr(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,i=n.length+1,r=n;iC.isDocumentKey(r)||(r=r.child(""));let s=new s1(new iC(r),0),a=new iG(iy);return this.wr.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===i&&(a=a.add(e.pr)),!0)},s),iD.resolve(this.Dr(a))}Dr(e){let t=[];return e.forEach(e=>{let n=this.Sr(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){0===this.Cr(t.batchId,"removed")||ii(),this.mutationQueue.shift();let n=this.wr;return iD.forEach(t.mutations,i=>{let r=new s1(i.key,t.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=n})}Mn(e){}containsKey(e,t){let n=new s1(t,0),i=this.wr.firstAfterOrEqual(n);return iD.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,iD.resolve()}Cr(e,t){return this.br(e)}br(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Sr(e){let t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s9{constructor(e){this.vr=e,this.docs=new iK(iC.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,i=this.docs.get(n),r=i?i.size:0,s=this.vr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-r,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return iD.resolve(n?n.document.mutableCopy():rc.newInvalidDocument(t))}getEntries(e,t){let n=rz;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():rc.newInvalidDocument(e))}),iD.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let r=rz,s=t.path,a=new iC(s.child("")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=function(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=iC.comparator(e.documentKey,t.documentKey))?n:iy(e.largestBatchId,t.largestBatchId)}(new iI(a.readTime,a.key,-1),n)||(i.has(a.key)||rB(t,a))&&(r=r.insert(a.key,a.mutableCopy()))}return iD.resolve(r)}getAllFromCollectionGroup(e,t,n,i){ii()}Fr(e,t){return iD.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new s4(this)}getSize(e){return iD.resolve(this.size)}}class s4 extends sW{constructor(e){super(),this.ar=e}applyChanges(e){let t=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?t.push(this.ar.addEntry(e,i)):this.ar.removeEntry(n)}),iD.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s6{constructor(e){this.persistence=e,this.Mr=new r$(e=>rx(e),rL),this.lastRemoteSnapshotVersion=iE.min(),this.highestTargetId=0,this.Or=0,this.Nr=new s0,this.targetCount=0,this.Br=sH.Nn()}forEachTarget(e,t){return this.Mr.forEach((e,n)=>t(n)),iD.resolve()}getLastRemoteSnapshotVersion(e){return iD.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return iD.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),iD.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Or&&(this.Or=t),iD.resolve()}qn(e){this.Mr.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Br=new sH(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,iD.resolve()}updateTargetData(e,t){return this.qn(t),iD.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,iD.resolve()}removeTargets(e,t,n){let i=0,r=[];return this.Mr.forEach((s,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.Mr.delete(s),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),iD.waitFor(r).next(()=>i)}getTargetCount(e){return iD.resolve(this.targetCount)}getTargetData(e,t){let n=this.Mr.get(t)||null;return iD.resolve(n)}addMatchingKeys(e,t,n){return this.Nr.dr(t,n),iD.resolve()}removeMatchingKeys(e,t,n){this.Nr.Rr(t,n);let i=this.persistence.referenceDelegate,r=[];return i&&t.forEach(t=>{r.push(i.markPotentiallyOrphaned(e,t))}),iD.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),iD.resolve()}getMatchingKeysForTargetId(e,t){let n=this.Nr.gr(t);return iD.resolve(n)}containsKey(e,t){return iD.resolve(this.Nr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s5{constructor(e,t){this.Lr={},this.overlays={},this.kr=new iU(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new s6(this),this.indexManager=new sz,this.remoteDocumentCache=new s9(e=>this.referenceDelegate.Kr(e)),this.serializer=new sK(t),this.$r=new sJ(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new sZ,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Lr[e.toKey()];return n||(n=new s2(t,this.referenceDelegate),this.Lr[e.toKey()]=n),n}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,n){n3("MemoryPersistence","Starting transaction:",e);let i=new s7(this.kr.next());return this.referenceDelegate.Ur(),n(i).next(e=>this.referenceDelegate.Wr(i).next(()=>e)).toPromise().then(e=>(i.raiseOnCommittedEvent(),e))}Gr(e,t){return iD.or(Object.values(this.Lr).map(n=>()=>n.containsKey(e,t)))}}class s7 extends iA{constructor(e){super(),this.currentSequenceNumber=e}}class s3{constructor(e){this.persistence=e,this.zr=new s0,this.jr=null}static Hr(e){return new s3(e)}get Jr(){if(this.jr)return this.jr;throw ii()}addReference(e,t,n){return this.zr.addReference(n,t),this.Jr.delete(n.toString()),iD.resolve()}removeReference(e,t,n){return this.zr.removeReference(n,t),this.Jr.add(n.toString()),iD.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),iD.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach(e=>this.Jr.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Jr.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Ur(){this.jr=new Set}Wr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return iD.forEach(this.Jr,n=>{let i=iC.fromPath(n);return this.Yr(e,i).next(e=>{e||t.removeEntry(i,iE.min())})}).next(()=>(this.jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Yr(e,t).next(e=>{e?this.Jr.delete(t.toString()):this.Jr.add(t.toString())})}Kr(e){return 0}Yr(e,t){return iD.or([()=>iD.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s8{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.qi=n,this.Qi=i}static Ki(e,t){let n=rX(),i=rX();for(let e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:i=i.add(e.doc.key)}return new s8(e,t.fromCache,n,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=(0,w.isSafari)()?8:ix.v((0,w.getUA)())>0?6:4}initialize(e,t){this.zi=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,n,i){let r={result:null};return this.ji(e,t).next(e=>{r.result=e}).next(()=>{if(!r.result)return this.Hi(e,t,i,n).next(e=>{r.result=e})}).next(()=>{if(r.result)return;let n=new ae;return this.Ji(e,t,n).next(i=>{if(r.result=i,this.Ui)return this.Yi(e,t,n,i.size)})}).next(()=>r.result)}Yi(e,t,n,i){return n.documentReadCount<this.Wi?(n7()<=v.LogLevel.DEBUG&&n3("QueryEngine","SDK will not create cache indexes for query:",rq(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),iD.resolve()):(n7()<=v.LogLevel.DEBUG&&n3("QueryEngine","Query:",rq(t),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Gi*i?(n7()<=v.LogLevel.DEBUG&&n3("QueryEngine","The SDK decides to create cache indexes for query:",rq(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,rV(t))):iD.resolve())}ji(e,t){if(rP(t))return iD.resolve(null);let n=rV(t);return this.indexManager.getIndexType(e,n).next(i=>0===i?null:(null!==t.limit&&1===i&&(n=rV(t=rF(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,n).next(i=>{let r=rX(...i);return this.zi.getDocuments(e,r).next(i=>this.indexManager.getMinOffset(e,n).next(n=>{let s=this.Zi(t,i);return this.Xi(t,s,r,n.readTime)?this.ji(e,rF(t,null,"F")):this.es(e,s,t,n)}))})))}Hi(e,t,n,i){return rP(t)||i.isEqual(iE.min())?iD.resolve(null):this.zi.getDocuments(e,n).next(r=>{let s=this.Zi(t,r);return this.Xi(t,s,n,i)?iD.resolve(null):(n7()<=v.LogLevel.DEBUG&&n3("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),rq(t)),this.es(e,s,t,function(e,t){let n=e.toTimestamp().seconds,i=e.toTimestamp().nanoseconds+1;return new iI(iE.fromTimestamp(1e9===i?new iw(n+1,0):new iw(n,i)),iC.empty(),-1)}(i,0)).next(e=>e))})}Zi(e,t){let n=new iG(rK(e));return t.forEach((t,i)=>{rB(e,i)&&(n=n.add(i))}),n}Xi(e,t,n,i){if(null===e.limit)return!1;if(n.size!==t.size)return!0;let r="F"===e.limitType?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Ji(e,t,n){return n7()<=v.LogLevel.DEBUG&&n3("QueryEngine","Using full collection scan to execute query:",rq(t)),this.zi.getDocumentsMatchingQuery(e,t,iI.min(),n)}es(e,t,n,i){return this.zi.getDocumentsMatchingQuery(e,n,i).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,t,n,i){this.persistence=e,this.ts=t,this.serializer=i,this.ns=new iK(iy),this.rs=new r$(e=>rx(e),rL),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(n)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sY(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ns))}}async function ai(e,t){return await e.persistence.runTransaction("Handle user change","readonly",n=>{let i;return e.mutationQueue.getAllMutationBatches(n).next(r=>(i=r,e._s(t),e.mutationQueue.getAllMutationBatches(n))).next(t=>{let r=[],s=[],a=rX();for(let e of i)for(let t of(r.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);return e.localDocuments.getDocuments(n,a).next(e=>({us:e,removedBatchIds:r,addedBatchIds:s}))})})}function ar(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Qr.getLastRemoteSnapshotVersion(t))}async function as(e,t,n){let i=e.ns.get(t);try{n||await e.persistence.runTransaction("Release target",n?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,i))}catch(e){if(!iO(e))throw e;n3("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}e.ns=e.ns.remove(t),e.rs.delete(i.target)}function aa(e,t,n){let i=iE.min(),r=rX();return e.persistence.runTransaction("Execute query","readwrite",s=>(function(e,t,n){let i=e.rs.get(n);return void 0!==i?iD.resolve(e.ns.get(i)):e.Qr.getTargetData(t,n)})(e,s,rV(t)).next(t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,e.Qr.getMatchingKeysForTargetId(s,t.targetId).next(e=>{r=e})}).next(()=>e.ts.getDocumentsMatchingQuery(s,t,n?i:iE.min(),n?r:rX())).next(n=>{var i;let s;return i=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),s=e.ss.get(i)||iE.min(),n.forEach((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)}),e.ss.set(i,s),{documents:n,hs:r}}))}class ao{constructor(){this.activeTargetIds=rY}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){return JSON.stringify({activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()})}}class al{constructor(){this.no=new ao,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,t,n){this.ro[e]=t}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new ao,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){for(let e of(n3("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.uo))e(0)}ao(){for(let e of(n3("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.uo))e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ac=null;function ad(){return null===ac?ac=268435456+Math.round(2147483648*Math.random()):ac++,"0x"+ac.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap="WebChannelConnection";class am extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=t+"://"+e.host,this.po=`projects/${n}/databases/${i}`,this.yo="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${i}`}get wo(){return!1}So(e,t,n,i,r){let s=ad(),a=this.bo(e,t.toUriEncodedString());n3("RestConnection",`Sending RPC '${e}' ${s}:`,a,n);let o={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(o,i,r),this.Co(e,a,o,n).then(t=>(n3("RestConnection",`Received RPC '${e}' ${s}: `,t),t),t=>{throw ie("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",n),t})}vo(e,t,n,i,r,s){return this.So(e,t,n,i,r)}Do(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+n6}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}bo(e,t){let n=af[e];return`${this.fo}/v1/${t}:${n}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,t,n,i){let r=ad();return new Promise((s,a)=>{let o=new nZ;o.setWithCredentials(!0),o.listenOnce(nW.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case nH.NO_ERROR:let t=o.getResponseJson();n3(ap,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(t)),s(t);break;case nH.TIMEOUT:n3(ap,`RPC '${e}' ${r} timed out`),a(new is(ir.DEADLINE_EXCEEDED,"Request time out"));break;case nH.HTTP_ERROR:let n=o.getStatus();if(n3(ap,`RPC '${e}' ${r} failed with status:`,n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(ir).indexOf(t)>=0?t:ir.UNKNOWN}(t.status);a(new is(e,t.message))}else a(new is(ir.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new is(ir.UNAVAILABLE,"Connection failed."));break;default:ii()}}finally{n3(ap,`RPC '${e}' ${r} completed.`)}});let l=JSON.stringify(i);n3(ap,`RPC '${e}' ${r} sending request:`,i),o.send(t,"POST",l,n,15)})}Fo(e,t,n){let i=ad(),r=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=nG(),o=nQ(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;void 0!==h&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;let u=r.join("");n3(ap,`Creating RPC '${e}' stream ${i}: ${u}`,l);let c=s.createWebChannel(u,l),d=!1,f=!1,g=new ag({lo:t=>{f?n3(ap,`Not sending because RPC '${e}' stream ${i} is closed:`,t):(d||(n3(ap,`Opening RPC '${e}' stream ${i} transport.`),c.open(),d=!0),n3(ap,`RPC '${e}' stream ${i} sending:`,t),c.send(t))},ho:()=>c.close()}),p=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return p(c,nJ.EventType.OPEN,()=>{f||n3(ap,`RPC '${e}' stream ${i} transport opened.`)}),p(c,nJ.EventType.CLOSE,()=>{f||(f=!0,n3(ap,`RPC '${e}' stream ${i} transport closed`),g.Vo())}),p(c,nJ.EventType.ERROR,t=>{f||(f=!0,ie(ap,`RPC '${e}' stream ${i} transport errored:`,t),g.Vo(new is(ir.UNAVAILABLE,"The operation could not be completed")))}),p(c,nJ.EventType.MESSAGE,t=>{var n;if(!f){let r=t.data[0];r||ii();let s=r.error||(null===(n=r[0])||void 0===n?void 0:n.error);if(s){n3(ap,`RPC '${e}' stream ${i} received error:`,s);let t=s.status,n=function(e){let t=a[e];if(void 0!==t)return sd(t)}(t),r=s.message;void 0===n&&(n=ir.INTERNAL,r="Unknown error status: "+t+" with message "+s.message),f=!0,g.Vo(new is(n,r)),c.close()}else n3(ap,`RPC '${e}' stream ${i} received:`,r),g.mo(r)}}),p(o,nX.STAT_EVENT,t=>{t.stat===nY.PROXY?n3(ap,`RPC '${e}' stream ${i} detected buffering proxy`):t.stat===nY.NOPROXY&&n3(ap,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.Ro()},0),g}}function ay(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(e,t,n=1e3,i=1.5,r=6e4){this.oi=e,this.timerId=t,this.Mo=n,this.xo=i,this.Oo=r,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();let t=Math.floor(this.No+this.Qo()),n=Math.max(0,Date.now()-this.Lo),i=Math.max(0,t-n);i>0&&n3("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Lo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){null!==this.Bo&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){null!==this.Bo&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(e,t,n,i,r,s,a,o){this.oi=e,this.$o=n,this.Uo=i,this.connection=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new av(e,t)}Ho(){return 1===this.state||5===this.state||this.Jo()}Jo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&null===this.Go&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,t){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,4!==e?this.jo.reset():t&&t.code===ir.RESOURCE_EXHAUSTED?(n8(t.toString()),n8("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):t&&t.code===ir.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(t)}i_(){}auth(){this.state=1;let e=this.s_(this.Wo),t=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.Wo===t&&this.o_(e,n)},t=>{e(()=>{let e=new is(ir.UNKNOWN,"Fetching auth token failed: "+t.message);return this.__(e)})})}o_(e,t){let n=this.s_(this.Wo);this.stream=this.a_(e,t),this.stream.Po(()=>{n(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(e=>{n(()=>this.__(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return n3("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return t=>{this.oi.enqueueAndForget(()=>this.Wo===e?t():(n3("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class aE extends aw{constructor(e,t,n,i,r,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,s),this.serializer=r}a_(e,t){return this.connection.Fo("Listen",e,t)}onMessage(e){this.jo.reset();let t=function(e,t){let n;if("targetChange"in t){var i,r;t.targetChange;let s="NO_CHANGE"===(i=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===i?1:"REMOVE"===i?2:"CURRENT"===i?3:"RESET"===i?4:ii(),a=t.targetChange.targetIds||[],o=(r=t.targetChange.resumeToken,e.useProto3Json?(void 0===r||"string"==typeof r||ii(),iX.fromBase64String(r||"")):(void 0===r||r instanceof Uint8Array||ii(),iX.fromUint8Array(r||new Uint8Array))),l=t.targetChange.cause;n=new sb(s,a,o,l&&new is(void 0===l.code?ir.UNKNOWN:sd(l.code),l.message||"")||null)}else if("documentChange"in t){t.documentChange;let i=t.documentChange;i.document,i.document.name,i.document.updateTime;let r=sP(e,i.document.name),s=sL(i.document.updateTime),a=i.document.createTime?sL(i.document.createTime):iE.min(),o=new ru({mapValue:{fields:i.document.fields}}),l=rc.newFoundDocument(r,s,a,o);n=new sE(i.targetIds||[],i.removedTargetIds||[],l.key,l)}else if("documentDelete"in t){t.documentDelete;let i=t.documentDelete;i.document;let r=sP(e,i.document),s=i.readTime?sL(i.readTime):iE.min(),a=rc.newNoDocument(r,s);n=new sE([],i.removedTargetIds||[],a.key,a)}else if("documentRemove"in t){t.documentRemove;let i=t.documentRemove;i.document;let r=sP(e,i.document);n=new sE([],i.removedTargetIds||[],r,null)}else{if(!("filter"in t))return ii();{t.filter;let e=t.filter;e.targetId;let{count:i=0,unchangedNames:r}=e,s=new sc(i,r);n=new sT(e.targetId,s)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return iE.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?iE.min():t.readTime?sL(t.readTime):iE.min()}(e);return this.listener.u_(t,n)}c_(e){let t={};t.database=sV(this.serializer),t.addTarget=function(e,t){var n,i;let r;let s=t.target;if((r=rR(s)?{documents:{documents:[sM(e,s.path)]}}:{query:function(e,t){var n,i;let r;let s={structuredQuery:{}},a=t.path;null!==t.collectionGroup?(r=a,s.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(r=a.popLast(),s.structuredQuery.from=[{collectionId:a.lastSegment()}]),s.parent=sM(e,r);let o=function(e){if(0!==e.length)return function e(t){return t instanceof ry?function(e){if("=="===e.op){if(ra(e.value))return{unaryFilter:{field:sU(e.field),op:"IS_NAN"}};if(rs(e.value))return{unaryFilter:{field:sU(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(ra(e.value))return{unaryFilter:{field:sU(e.field),op:"IS_NOT_NAN"}};if(rs(e.value))return{unaryFilter:{field:sU(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:sU(e.field),op:sk[e.op],value:e.value}}}(t):t instanceof rv?function(t){let n=t.getFilters().map(t=>e(t));return 1===n.length?n[0]:{compositeFilter:{op:sD[t.op],filters:n}}}(t):ii()}(rv.create(e,"and"))}(t.filters);o&&(s.structuredQuery.where=o);let l=function(e){if(0!==e.length)return e.map(e=>({field:sU(e.field),direction:sA[e.dir]}))}(t.orderBy);l&&(s.structuredQuery.orderBy=l);let h=sx(e,t.limit);return null!==h&&(s.structuredQuery.limit=h),t.startAt&&(s.structuredQuery.startAt={before:(n=t.startAt).inclusive,values:n.position}),t.endAt&&(s.structuredQuery.endAt={before:!(i=t.endAt).inclusive,values:i.position}),{ut:s,parent:r}}(e,s).ut}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){r.resumeToken=(n=t.resumeToken,e.useProto3Json?n.toBase64():n.toUint8Array());let i=sx(e,t.expectedCount);null!==i&&(r.expectedCount=i)}else if(t.snapshotVersion.compareTo(iE.min())>0){r.readTime=(i=t.snapshotVersion.toTimestamp(),e.useProto3Json?`${new Date(1e3*i.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+i.nanoseconds).slice(-9)}Z`:{seconds:""+i.seconds,nanos:i.nanoseconds});let n=sx(e,t.expectedCount);null!==n&&(r.expectedCount=n)}return r}(this.serializer,e);let n=function(e,t){let n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ii()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.t_(t)}l_(e){let t={};t.database=sV(this.serializer),t.removeTarget=e,this.t_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT extends class{}{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new is(ir.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,n,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,s])=>this.connection.So(e,sR(t,n),i,r,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===ir.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new is(ir.UNKNOWN,e.toString())})}vo(e,t,n,i,r){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.vo(e,sR(t,n),i,s,a,r)).catch(e=>{throw"FirebaseError"===e.name?(e.code===ir.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new is(ir.UNKNOWN,e.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class ab{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){0===this.m_&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){"Online"===this.state?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,"Online"===e&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(n8(t),this.g_=!1):n3("OnlineStateTracker",t)}b_(){null!==this.f_&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e,t,n,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=r,this.M_.io(e=>{n.enqueueAndForget(async()=>{aL(this)&&(n3("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.v_.add(4),await aC(e),e.x_.set("Unknown"),e.v_.delete(4),await a_(e)}(this))})}),this.x_=new ab(n,i)}}async function a_(e){if(aL(e))for(let t of e.F_)await t(!0)}async function aC(e){for(let t of e.F_)await t(!1)}function aI(e,t){e.C_.has(t.targetId)||(e.C_.set(t.targetId,t),ax(e)?aN(e):aU(e).Jo()&&ak(e,t))}function aA(e,t){let n=aU(e);e.C_.delete(t),n.Jo()&&aD(e,t),0===e.C_.size&&(n.Jo()?n.Xo():aL(e)&&e.x_.set("Unknown"))}function ak(e,t){if(e.O_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(iE.min())>0){let n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}aU(e).c_(t)}function aD(e,t){e.O_.Oe(t),aU(e).l_(t)}function aN(e){e.O_=new s_({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.C_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),aU(e).start(),e.x_.p_()}function ax(e){return aL(e)&&!aU(e).Ho()&&e.C_.size>0}function aL(e){return 0===e.v_.size}async function aR(e){e.C_.forEach((t,n)=>{ak(e,t)})}async function aO(e,t){e.O_=void 0,ax(e)?(e.x_.S_(t),aN(e)):e.x_.set("Unknown")}async function aP(e,t,n){if(e.x_.set("Online"),t instanceof sb&&2===t.state&&t.cause)try{await async function(e,t){let n=t.cause;for(let i of t.targetIds)e.C_.has(i)&&(await e.remoteSyncer.rejectListen(i,n),e.C_.delete(i),e.O_.removeTarget(i))}(e,t)}catch(n){n3("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await aM(e,n)}else if(t instanceof sE?e.O_.$e(t):t instanceof sT?e.O_.Je(t):e.O_.Ge(t),!n.isEqual(iE.min()))try{let t=await ar(e.localStore);n.compareTo(t)>=0&&await function(e,t){let n=e.O_.it(t);return n.targetChanges.forEach((n,i)=>{if(n.resumeToken.approximateByteSize()>0){let r=e.C_.get(i);r&&e.C_.set(i,r.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{let i=e.C_.get(t);if(!i)return;e.C_.set(t,i.withResumeToken(iX.EMPTY_BYTE_STRING,i.snapshotVersion)),aD(e,t);let r=new sB(i.target,t,n,i.sequenceNumber);ak(e,r)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){n3("RemoteStore","Failed to raise snapshot:",t),await aM(e,t)}}async function aM(e,t,n){if(!iO(t))throw t;e.v_.add(1),await aC(e),e.x_.set("Offline"),n||(n=()=>ar(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{n3("RemoteStore","Retrying IndexedDB access"),await n(),e.v_.delete(1),await a_(e)})}async function aV(e,t){e.asyncQueue.verifyOperationInProgress(),n3("RemoteStore","RemoteStore received new credentials");let n=aL(e);e.v_.add(3),await aC(e),n&&e.x_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.v_.delete(3),await a_(e)}async function aF(e,t){t?(e.v_.delete(2),await a_(e)):t||(e.v_.add(2),await aC(e),e.x_.set("Unknown"))}function aU(e){var t,n,i;return e.N_||(e.N_=(t=e.datastore,n=e.asyncQueue,i={Po:aR.bind(null,e),To:aO.bind(null,e),u_:aP.bind(null,e)},t.R_(),new aE(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,i)),e.F_.push(async t=>{t?(e.N_.Zo(),ax(e)?aN(e):e.x_.set("Unknown")):(await e.N_.stop(),e.O_=void 0)})),e.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aj{constructor(e,t,n,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new ia,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,i,r){let s=new aj(e,t,Date.now()+n,i,r);return s.start(n),s}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new is(ir.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function aq(e,t){if(n8("AsyncQueue",`${t}: ${e}`),iO(e))return new is(ir.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aB{constructor(e){this.comparator=e?(t,n)=>e(t,n)||iC.comparator(t.key,n.key):(e,t)=>iC.comparator(e.key,t.key),this.keyedMap=rQ(),this.sortedSet=new iK(this.comparator)}static emptySet(e){return new aB(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof aB)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,i=n.getNext().key;if(!e.isEqual(i))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let n=new aB;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aK{constructor(){this.L_=new iK(iC.comparator)}track(e){let t=e.doc.key,n=this.L_.get(t);n?0!==e.type&&3===n.type?this.L_=this.L_.insert(t,e):3===e.type&&1!==n.type?this.L_=this.L_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.L_=this.L_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.L_=this.L_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.L_=this.L_.remove(t):1===e.type&&2===n.type?this.L_=this.L_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.L_=this.L_.insert(t,{type:2,doc:e.doc}):ii():this.L_=this.L_.insert(t,e)}k_(){let e=[];return this.L_.inorderTraversal((t,n)=>{e.push(n)}),e}}class a${constructor(e,t,n,i,r,s,a,o,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=r,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,i,r){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new a$(e,t,aB.emptySet(t),s,n,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&rU(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class az{constructor(){this.q_=void 0,this.Q_=[]}}class aG{constructor(){this.queries=new r$(e=>rj(e),rU),this.onlineState="Unknown",this.K_=new Set}}async function aQ(e,t){let n=t.query,i=!1,r=e.queries.get(n);if(r||(i=!0,r=new az),i)try{r.q_=await e.onListen(n)}catch(n){let e=aq(n,`Initialization of query '${rq(t.query)}' failed`);return void t.onError(e)}e.queries.set(n,r),r.Q_.push(t),t.U_(e.onlineState),r.q_&&t.W_(r.q_)&&aY(e)}async function aH(e,t){let n=t.query,i=!1,r=e.queries.get(n);if(r){let e=r.Q_.indexOf(t);e>=0&&(r.Q_.splice(e,1),i=0===r.Q_.length)}if(i)return e.queries.delete(n),e.onUnlisten(n)}function aW(e,t){let n=!1;for(let i of t){let t=i.query,r=e.queries.get(t);if(r){for(let e of r.Q_)e.W_(i)&&(n=!0);r.q_=i}}n&&aY(e)}function aX(e,t,n){let i=e.queries.get(t);if(i)for(let e of i.Q_)e.onError(n);e.queries.delete(t)}function aY(e){e.K_.forEach(e=>{e.next()})}class aJ{constructor(e,t,n){this.query=e,this.G_=t,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=n||{}}W_(e){if(!this.options.includeMetadataChanges){let t=[];for(let n of e.docChanges)3!==n.type&&t.push(n);e=new a$(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.z_?this.H_(e)&&(this.G_.next(e),t=!0):this.J_(e,this.onlineState)&&(this.Y_(e),t=!0),this.j_=e,t}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let t=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),t=!0),t}J_(e,t){return!e.fromCache||(!this.options.Z_||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}H_(e){if(e.docChanges.length>0)return!0;let t=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Y_(e){e=a$.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aZ{constructor(e){this.key=e}}class a0{constructor(e){this.key=e}}class a1{constructor(e,t){this.query=e,this.oa=t,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=rX(),this.mutatedKeys=rX(),this.ua=rK(e),this.ca=new aB(this.ua)}get la(){return this.oa}ha(e,t){let n=t?t.Pa:new aK,i=t?t.ca:this.ca,r=t?t.mutatedKeys:this.mutatedKeys,s=i,a=!1,o="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,l="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((e,t)=>{let h=i.get(e),u=rB(this.query,t)?t:null,c=!!h&&this.mutatedKeys.has(h.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations),f=!1;h&&u?h.data.isEqual(u.data)?c!==d&&(n.track({type:3,doc:u}),f=!0):this.Ia(h,u)||(n.track({type:2,doc:u}),f=!0,(o&&this.ua(u,o)>0||l&&0>this.ua(u,l))&&(a=!0)):!h&&u?(n.track({type:0,doc:u}),f=!0):h&&!u&&(n.track({type:1,doc:h}),f=!0,(o||l)&&(a=!0)),f&&(u?(s=s.add(u),r=d?r.add(e):r.delete(e)):(s=s.delete(e),r=r.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),r=r.delete(e.key),n.track({type:1,doc:e})}return{ca:s,Pa:n,Xi:a,mutatedKeys:r}}Ia(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,i){let r=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;let s=e.Pa.k_();s.sort((e,t)=>(function(e,t){let n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ii()}};return n(e)-n(t)})(e.type,t.type)||this.ua(e.doc,t.doc)),this.Ta(n),i=null!=i&&i;let a=t&&!i?this.Ea():[],o=0===this.aa.size&&this.current&&!i?1:0,l=o!==this._a;return(this._a=o,0!==s.length||l)?{snapshot:new a$(this.query,e.ca,r,s,e.mutatedKeys,0===o,l,!1,!!n&&n.resumeToken.approximateByteSize()>0),da:a}:{da:a}}U_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new aK,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}Ta(e){e&&(e.addedDocuments.forEach(e=>this.oa=this.oa.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.oa=this.oa.delete(e)),this.current=e.current)}Ea(){if(!this.current)return[];let e=this.aa;this.aa=rX(),this.ca.forEach(e=>{this.Aa(e.key)&&(this.aa=this.aa.add(e.key))});let t=[];return e.forEach(e=>{this.aa.has(e)||t.push(new a0(e))}),this.aa.forEach(n=>{e.has(n)||t.push(new aZ(n))}),t}Ra(e){this.oa=e.hs,this.aa=rX();let t=this.ha(e.documents);return this.applyChanges(t,!0)}Va(){return a$.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,0===this._a,this.hasCachedResults)}}class a2{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class a9{constructor(e){this.key=e,this.ma=!1}}class a4{constructor(e,t,n,i,r,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.fa={},this.ga=new r$(e=>rj(e),rU),this.pa=new Map,this.ya=new Set,this.wa=new iK(iC.comparator),this.Sa=new Map,this.ba=new s0,this.Da={},this.Ca=new Map,this.va=sH.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return!0===this.Fa}}async function a6(e,t){var n,i;let r,s;let a=(e.remoteStore.remoteSyncer.applyRemoteEvent=a3.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=oo.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=oe.bind(null,e),e.fa.u_=aW.bind(null,e.eventManager),e.fa.xa=aX.bind(null,e.eventManager),e),o=a.ga.get(t);if(o)r=o.targetId,a.sharedClientState.addLocalQueryTarget(r),s=o.view.Va();else{let e=await (n=a.localStore,i=rV(t),n.persistence.runTransaction("Allocate target","readwrite",e=>{let t;return n.Qr.getTargetData(e,i).next(r=>r?(t=r,iD.resolve(t)):n.Qr.allocateTargetId(e).next(r=>(t=new sB(i,r,"TargetPurposeListen",e.currentSequenceNumber),n.Qr.addTargetData(e,t).next(()=>t))))}).then(e=>{let t=n.ns.get(e.targetId);return(null===t||e.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(n.ns=n.ns.insert(e.targetId,e),n.rs.set(i,e.targetId)),e})),o=a.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,s=await a5(a,t,r,"current"===o,e.resumeToken),a.isPrimaryClient&&aI(a.remoteStore,e)}return s}async function a5(e,t,n,i,r){e.Ma=(t,n,i)=>(async function(e,t,n,i){let r=t.view.ha(n);r.Xi&&(r=await aa(e.localStore,t.query,!1).then(({documents:e})=>t.view.ha(e,r)));let s=i&&i.targetChanges.get(t.targetId),a=i&&null!=i.targetMismatches.get(t.targetId),o=t.view.applyChanges(r,e.isPrimaryClient,s,a);return oi(e,t.targetId,o.da),o.snapshot})(e,t,n,i);let s=await aa(e.localStore,t,!0),a=new a1(t,s.hs),o=a.ha(s.documents),l=sw.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==e.onlineState,r),h=a.applyChanges(o,e.isPrimaryClient,l);oi(e,n,h.da);let u=new a2(t,n,a);return e.ga.set(t,u),e.pa.has(n)?e.pa.get(n).push(t):e.pa.set(n,[t]),h.snapshot}async function a7(e,t){let n=e.ga.get(t),i=e.pa.get(n.targetId);if(i.length>1)return e.pa.set(n.targetId,i.filter(e=>!rU(e,t))),void e.ga.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(n.targetId),e.sharedClientState.isActiveQueryTarget(n.targetId)||await as(e.localStore,n.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(n.targetId),aA(e.remoteStore,n.targetId),ot(e,n.targetId)}).catch(ik)):(ot(e,n.targetId),await as(e.localStore,n.targetId,!0))}async function a3(e,t){try{let n=await function(e,t){let n=t.snapshotVersion,i=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{var s;let a,o;let l=e.os.newChangeBuffer({trackRemovals:!0});i=e.ns;let h=[];t.targetChanges.forEach((s,a)=>{var o;let l=i.get(a);if(!l)return;h.push(e.Qr.removeMatchingKeys(r,s.removedDocuments,a).next(()=>e.Qr.addMatchingKeys(r,s.addedDocuments,a)));let u=l.withSequenceNumber(r.currentSequenceNumber);null!==t.targetMismatches.get(a)?u=u.withResumeToken(iX.EMPTY_BYTE_STRING,iE.min()).withLastLimboFreeSnapshotVersion(iE.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,n)),i=i.insert(a,u),o=u,(0===l.resumeToken.approximateByteSize()||o.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&h.push(e.Qr.updateTargetData(r,u))});let u=rz,c=rX();if(t.documentUpdates.forEach(n=>{t.resolvedLimboDocuments.has(n)&&h.push(e.persistence.referenceDelegate.updateLimboDocument(r,n))}),h.push((s=t.documentUpdates,a=rX(),o=rX(),s.forEach(e=>a=a.add(e)),l.getEntries(r,a).next(e=>{let t=rz;return s.forEach((n,i)=>{let r=e.get(n);i.isFoundDocument()!==r.isFoundDocument()&&(o=o.add(n)),i.isNoDocument()&&i.version.isEqual(iE.min())?(l.removeEntry(n,i.readTime),t=t.insert(n,i)):!r.isValidDocument()||i.version.compareTo(r.version)>0||0===i.version.compareTo(r.version)&&r.hasPendingWrites?(l.addEntry(i),t=t.insert(n,i)):n3("LocalStore","Ignoring outdated watch update for ",n,". Current version:",r.version," Watch version:",i.version)}),{cs:t,ls:o}})).next(e=>{u=e.cs,c=e.ls})),!n.isEqual(iE.min())){let t=e.Qr.getLastRemoteSnapshotVersion(r).next(t=>e.Qr.setTargetsMetadata(r,r.currentSequenceNumber,n));h.push(t)}return iD.waitFor(h).next(()=>l.apply(r)).next(()=>e.localDocuments.getLocalViewOfDocuments(r,u,c)).next(()=>u)}).then(t=>(e.ns=i,t))}(e.localStore,t);t.targetChanges.forEach((t,n)=>{let i=e.Sa.get(n);i&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||ii(),t.addedDocuments.size>0?i.ma=!0:t.modifiedDocuments.size>0?i.ma||ii():t.removedDocuments.size>0&&(i.ma||ii(),i.ma=!1))}),await os(e,n,t)}catch(e){await ik(e)}}function a8(e,t,n){var i;if(e.isPrimaryClient&&0===n||!e.isPrimaryClient&&1===n){let n;let r=[];e.ga.forEach((e,n)=>{let i=n.view.U_(t);i.snapshot&&r.push(i.snapshot)}),(i=e.eventManager).onlineState=t,n=!1,i.queries.forEach((e,i)=>{for(let e of i.Q_)e.U_(t)&&(n=!0)}),n&&aY(i),r.length&&e.fa.u_(r),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function oe(e,t,n){e.sharedClientState.updateQueryState(t,"rejected",n);let i=e.Sa.get(t),r=i&&i.key;if(r){let n=new iK(iC.comparator);n=n.insert(r,rc.newNoDocument(r,iE.min()));let i=rX().add(r),s=new sv(iE.min(),new Map,new iK(iy),n,i);await a3(e,s),e.wa=e.wa.remove(r),e.Sa.delete(t),or(e)}else await as(e.localStore,t,!1).then(()=>ot(e,t,n)).catch(ik)}function ot(e,t,n=null){for(let i of(e.sharedClientState.removeLocalQueryTarget(t),e.pa.get(t)))e.ga.delete(i),n&&e.fa.xa(i,n);e.pa.delete(t),e.isPrimaryClient&&e.ba.Vr(t).forEach(t=>{e.ba.containsKey(t)||on(e,t)})}function on(e,t){e.ya.delete(t.path.canonicalString());let n=e.wa.get(t);null!==n&&(aA(e.remoteStore,n),e.wa=e.wa.remove(t),e.Sa.delete(n),or(e))}function oi(e,t,n){for(let i of n)i instanceof aZ?(e.ba.addReference(i.key,t),function(e,t){let n=t.key,i=n.path.canonicalString();e.wa.get(n)||e.ya.has(i)||(n3("SyncEngine","New document in limbo: "+n),e.ya.add(i),or(e))}(e,i)):i instanceof a0?(n3("SyncEngine","Document no longer in limbo: "+i.key),e.ba.removeReference(i.key,t),e.ba.containsKey(i.key)||on(e,i.key)):ii()}function or(e){for(;e.ya.size>0&&e.wa.size<e.maxConcurrentLimboResolutions;){let t=e.ya.values().next().value;e.ya.delete(t);let n=new iC(ib.fromString(t)),i=e.va.next();e.Sa.set(i,new a9(n)),e.wa=e.wa.insert(n,i),aI(e.remoteStore,new sB(rV(new rO(n.path)),i,"TargetPurposeLimboResolution",iU._e))}}async function os(e,t,n){let i=[],r=[],s=[];e.ga.isEmpty()||(e.ga.forEach((a,o)=>{s.push(e.Ma(o,t,n).then(t=>{if((t||n)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(o.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);let e=s8.Ki(o.targetId,t);r.push(e)}}))}),await Promise.all(s),e.fa.u_(i),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",n=>iD.forEach(t,t=>iD.forEach(t.qi,i=>e.persistence.referenceDelegate.addReference(n,t.targetId,i)).next(()=>iD.forEach(t.Qi,i=>e.persistence.referenceDelegate.removeReference(n,t.targetId,i)))))}catch(e){if(!iO(e))throw e;n3("LocalStore","Failed to update sequence numbers: "+e)}for(let n of t){let t=n.targetId;if(!n.fromCache){let n=e.ns.get(t),i=n.snapshotVersion,r=n.withLastLimboFreeSnapshotVersion(i);e.ns=e.ns.insert(t,r)}}}(e.localStore,r))}async function oa(e,t){var n;if(!e.currentUser.isEqual(t)){n3("SyncEngine","User change. New user:",t.toKey());let i=await ai(e.localStore,t);e.currentUser=t,n="'waitForPendingWrites' promise is rejected due to a user change.",e.Ca.forEach(e=>{e.forEach(e=>{e.reject(new is(ir.CANCELLED,n))})}),e.Ca.clear(),e.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await os(e,i.us)}}function oo(e,t){let n=e.Sa.get(t);if(n&&n.ma)return rX().add(n.key);{let n=rX(),i=e.pa.get(t);if(!i)return n;for(let t of i){let i=e.ga.get(t);n=n.unionWith(i.view.la)}return n}}class ol{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=new sN(e.databaseInfo.databaseId,!0),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){var t;return t=this.persistence,new an(t,new at,e.initialUser,this.serializer)}createPersistence(e){return new s5(s3.Hr,this.serializer)}createSharedClientState(e){return new al}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class oh{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>a8(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=oa.bind(null,this.syncEngine),await aF(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new aG}createDatastore(e){let t=new sN(e.databaseInfo.databaseId,!0),n=new am(e.databaseInfo);return new aT(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){var t;return t=this.localStore,new aS(t,this.datastore,e.asyncQueue,e=>a8(this.syncEngine,e,0),au.D()?new au:new ah)}createSyncEngine(e,t){return function(e,t,n,i,r,s,a){let o=new a4(e,t,n,i,r,s);return a&&(o.Fa=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(e){n3("RemoteStore","RemoteStore shutting down."),e.v_.add(5),await aC(e),e.M_.shutdown(),e.x_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):n8("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,t,n,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=n4.UNAUTHENTICATED,this.clientId=im.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{n3("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(n3("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new is(ir.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new ia;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let t=aq(n,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function od(e,t){e.asyncQueue.verifyOperationInProgress(),n3("FirestoreClient","Initializing OfflineComponentProvider");let n=e.configuration;await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener(async e=>{i.isEqual(e)||(await ai(t.localStore,e),i=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function of(e,t){e.asyncQueue.verifyOperationInProgress();let n=await og(e);n3("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(e=>aV(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>aV(t.remoteStore,n)),e._onlineComponents=t}async function og(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){n3("FirestoreClient","Using user provided OfflineComponentProvider");try{await od(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===ir.FAILED_PRECONDITION||t.code===ir.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;ie("Error using user provided cache. Falling back to memory cache: "+t),await od(e,new ol)}}else n3("FirestoreClient","Using default OfflineComponentProvider"),await od(e,new ol)}return e._offlineComponents}async function op(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(n3("FirestoreClient","Using user provided OnlineComponentProvider"),await of(e,e._uninitializedComponentsProvider._online)):(n3("FirestoreClient","Using default OnlineComponentProvider"),await of(e,new oh))),e._onlineComponents}async function om(e){let t=await op(e),n=t.eventManager;return n.onListen=a6.bind(null,t.syncEngine),n.onUnlisten=a7.bind(null,t.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oy(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov=new Map;function ow(e){if(iC.isDocumentKey(e))throw new is(ir.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function oE(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new is(ir.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=function(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof e?"a function":ii()}(e);throw new is(ir.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new is(ir.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new is(ir.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,i){if(!0===t&&!0===i)throw new is(ir.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=oy(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new is(ir.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new is(ir.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new is(ir.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,n;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ob{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new oT({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new is(ir.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new is(ir.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new oT(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new il;switch(e.type){case"firstParty":return new id(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new is(ir.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=ov.get(e);t&&(n3("ComponentProvider","Removing Datastore"),ov.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new oS(this.firestore,e,this._query)}}class o_{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new oC(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new o_(this.firestore,e,this._key)}}class oC extends oS{constructor(e,t,n){super(e,t,new rO(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new o_(this.firestore,null,new iC(e))}withConverter(e){return new oC(this.firestore,e,this._path)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new av(this,"async_queue_retry"),this._u=()=>{let e=ay();e&&n3("AsyncQueue","Visibility state changed to "+e.visibilityState),this.jo.Ko()};let e=ay();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.au(),this.uu(e)}enterRestrictedMode(e){if(!this.tu){this.tu=!0,this.su=e||!1;let t=ay();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this._u)}}enqueue(e){if(this.au(),this.tu)return new Promise(()=>{});let t=new ia;return this.uu(()=>this.tu&&this.su?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.eu.push(e),this.cu()))}async cu(){if(0!==this.eu.length){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(e){if(!iO(e))throw e;n3("AsyncQueue","Operation failed with retryable error: "+e)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(e){let t=this.Xa.then(()=>(this.iu=!0,e().catch(e=>{let t;throw this.ru=e,this.iu=!1,n8("INTERNAL UNHANDLED ERROR: ",(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t)),e}).then(e=>(this.iu=!1,e))));return this.Xa=t,t}enqueueAfterDelay(e,t,n){this.au(),this.ou.indexOf(e)>-1&&(t=0);let i=aj.createAndSchedule(this,e,t,n,e=>this.lu(e));return this.nu.push(i),i}au(){this.ru&&ii()}verifyOperationInProgress(){}async hu(){let e;do e=this.Xa,await e;while(e!==this.Xa)}Pu(e){for(let t of this.nu)if(t.timerId===e)return!0;return!1}Iu(e){return this.hu().then(()=>{for(let t of(this.nu.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.nu))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.hu()})}Tu(e){this.ou.push(e)}lu(e){let t=this.nu.indexOf(e);this.nu.splice(t,1)}}class oA extends ob{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new oI,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ok(this),this._firestoreClient.terminate()}}function ok(e){var t,n,i,r;let s=e._freezeSettings(),a=(r=e._databaseId,new i4(r,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,oy(s.experimentalLongPollingOptions),s.useFetchStreams));e._firestoreClient=new oc(e._authCredentials,e._appCheckCredentials,e._queue,a),(null===(n=s.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(i=s.localCache)||void 0===i?void 0:i._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oD{constructor(e){this._byteString=e}static fromBase64String(e){try{return new oD(iX.fromBase64String(e))}catch(e){throw new is(ir.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new oD(iX.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new is(ir.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new i_(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new is(ir.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new is(ir.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return iy(this._lat,e._lat)||iy(this._long,e._long)}}const oL=RegExp("[~\\*/\\[\\]]");function oR(e,t,n,i,r){let s=i&&!i.isEmpty(),a=void 0!==r,o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${i}`),a&&(l+=` in document ${r}`),l+=")"),new is(ir.INVALID_ARGUMENT,o+e+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO{constructor(e,t,n,i,r){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new o_(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new oP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(oM("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class oP extends oO{data(){return super.data()}}function oM(e,t){return"string"==typeof t?function(e,t,n){if(t.search(oL)>=0)throw oR(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,void 0);try{return new oN(...t.split("."))._internalPath}catch(n){throw oR(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,void 0)}}(e,t):t instanceof oN?t._internalPath:t._delegate._internalPath}class oV{convertValue(e,t="none"){switch(i7(e)){case 0:return null;case 1:return e.booleanValue;case 2:return iZ(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(i0(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw ii()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let n={};return iB(e,(e,i)=>{n[e]=this.convertValue(i,t)}),n}convertGeoPoint(e){return new ox(iZ(e.latitude),iZ(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=i2(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(i9(e));default:return null}}convertTimestamp(e){let t=iJ(e);return new iw(t.seconds,t.nanos)}convertDocumentKey(e,t){let n=ib.fromString(e);sq(n)||ii();let i=new i6(n.get(1),n.get(3)),r=new iC(n.popFirst(5));return i.isEqual(t)||n8(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oF{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class oU extends oO{constructor(e,t,n,i,r,s){super(e,t,n,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new oj(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let n=this._document.data.field(oM("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class oj extends oU{data(e={}){return super.data(e)}}class oq{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new oF(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new oj(this._firestore,this._userDataWriter,n.key,n,new oF(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new is(ir.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{let i=new oj(e._firestore,e._userDataWriter,n.doc.key,n.doc,new oF(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:i,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let i=new oj(e._firestore,e._userDataWriter,t.doc.key,t.doc,new oF(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),r=-1,s=-1;return 0!==t.type&&(r=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(s=(n=n.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ii()}}(t.type),doc:i,oldIndex:r,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}class oB extends oV{constructor(e){super(),this.firestore=e}convertBytes(e){return new oD(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new o_(this.firestore,null,t)}}new WeakMap,function(e=!0){n6=m.SDK_VERSION,(0,m._registerComponent)(new(0,y.Component)("firestore",(t,{instanceIdentifier:n,options:i})=>{let r=t.getProvider("app").getImmediate(),s=new oA(new iu(t.getProvider("auth-internal")),new ip(t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new is(ir.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new i6(e.options.projectId,t)}(r,n),r);return i=Object.assign({useFetchStreams:e},i),s._setSettings(i),s},"PUBLIC").setMultipleInstances(!0)),(0,m.registerVersion)(n9,"4.4.3",void 0),(0,m.registerVersion)(n9,"4.4.3","esm2017")}();var m=f("7xvHX"),y=f("eryG9"),w=f("gMVVg"),oK=f("iItpQ");const o$="@firebase/installations",oz="0.6.5",oG=`w:${oz}`,oQ="FIS_v2",oH=new w.ErrorFactory("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function oW(e){return e instanceof w.FirebaseError&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oX({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function oY(e){return{token:e.token,requestStatus:2,expiresIn:Number(e.expiresIn.replace("s","000")),creationTime:Date.now()}}async function oJ(e,t){let n=(await t.json()).error;return oH.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function oZ({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}async function o0(e){let t=await e();return t.status>=500&&t.status<600?e():t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o1({appConfig:e,heartbeatServiceProvider:t},{fid:n}){let i=oX(e),r=oZ(e),s=t.getImmediate({optional:!0});if(s){let e=await s.getHeartbeatsHeader();e&&r.append("x-firebase-client",e)}let a={method:"POST",headers:r,body:JSON.stringify({fid:n,authVersion:oQ,appId:e.appId,sdkVersion:oG})},o=await o0(()=>fetch(i,a));if(o.ok){let e=await o.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:oY(e.authToken)}}throw await oJ("Create Installation",o)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o2(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o9=/^[cdef][\w-]{21}$/;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o4(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o6=new Map;function o5(e,t){let n=o4(e);o7(n,t),function(e,t){let n=(!o3&&"BroadcastChannel"in self&&((o3=new BroadcastChannel("[Firebase] FID Change")).onmessage=e=>{o7(e.data.key,e.data.fid)}),o3);n&&n.postMessage({key:e,fid:t}),0===o6.size&&o3&&(o3.close(),o3=null)}(n,t)}function o7(e,t){let n=o6.get(e);if(n)for(let e of n)e(t)}let o3=null;const o8="firebase-installations-store";let le=null;function lt(){return le||(le=(0,oK.openDB)("firebase-installations-database",1,{upgrade:(e,t)=>{0===t&&e.createObjectStore(o8)}})),le}async function ln(e,t){let n=o4(e),i=(await lt()).transaction(o8,"readwrite"),r=i.objectStore(o8),s=await r.get(n);return await r.put(t,n),await i.done,s&&s.fid===t.fid||o5(e,t.fid),t}async function li(e){let t=o4(e),n=(await lt()).transaction(o8,"readwrite");await n.objectStore(o8).delete(t),await n.done}async function lr(e,t){let n=o4(e),i=(await lt()).transaction(o8,"readwrite"),r=i.objectStore(o8),s=await r.get(n),a=t(s);return void 0===a?await r.delete(n):await r.put(a,n),await i.done,a&&(!s||s.fid!==a.fid)&&o5(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ls(e){let t;let n=await lr(e.appConfig,n=>{let i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject(oH.create("app-offline"))};let n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=la(e,n);return{installationEntry:n,registrationPromise:i}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:lo(e)}:{installationEntry:t}}(e,lh(n||{fid:function(){try{let e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;let t=btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_").substr(0,22);return o9.test(t)?t:""}catch(e){return""}}(),registrationStatus:0}));return t=i.registrationPromise,i.installationEntry});return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function la(e,t){try{let n=await o1(e,t);return ln(e.appConfig,n)}catch(n){throw oW(n)&&409===n.customData.serverCode?await li(e.appConfig):await ln(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function lo(e){let t=await ll(e.appConfig);for(;1===t.registrationStatus;)await o2(100),t=await ll(e.appConfig);if(0===t.registrationStatus){let{installationEntry:t,registrationPromise:n}=await ls(e);return n||t}return t}function ll(e){return lr(e,e=>{if(!e)throw oH.create("installation-not-found");return lh(e)})}function lh(e){return 1===e.registrationStatus&&e.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lu({appConfig:e,heartbeatServiceProvider:t},n){let i=function(e,{fid:t}){return`${oX(e)}/${t}/authTokens:generate`}(e,n),r=function(e,{refreshToken:t}){let n=oZ(e);return n.append("Authorization",`${oQ} ${t}`),n}(e,n),s=t.getImmediate({optional:!0});if(s){let e=await s.getHeartbeatsHeader();e&&r.append("x-firebase-client",e)}let a={method:"POST",headers:r,body:JSON.stringify({installation:{sdkVersion:oG,appId:e.appId}})},o=await o0(()=>fetch(i,a));if(o.ok)return oY(await o.json());throw await oJ("Generate Auth Token",o)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lc(e,t=!1){let n;let i=await lr(e.appConfig,i=>{var r;if(!lp(i))throw oH.create("not-registered");let s=i.authToken;if(!t&&2===(r=s).requestStatus&&!function(e){let t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(r))return i;if(1===s.requestStatus)return n=ld(e,t),i;{if(!navigator.onLine)throw oH.create("app-offline");let t=function(e){let t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(i);return n=lg(e,t),t}});return n?await n:i.authToken}async function ld(e,t){let n=await lf(e.appConfig);for(;1===n.authToken.requestStatus;)await o2(100),n=await lf(e.appConfig);let i=n.authToken;return 0===i.requestStatus?lc(e,t):i}function lf(e){return lr(e,e=>{var t;if(!lp(e))throw oH.create("not-registered");return 1===(t=e.authToken).requestStatus&&t.requestTime+1e4<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function lg(e,t){try{let n=await lu(e,t),i=Object.assign(Object.assign({},t),{authToken:n});return await ln(e.appConfig,i),n}catch(n){if(oW(n)&&(401===n.customData.serverCode||404===n.customData.serverCode))await li(e.appConfig);else{let n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await ln(e.appConfig,n)}throw n}}function lp(e){return void 0!==e&&2===e.registrationStatus}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lm(e){let{installationEntry:t,registrationPromise:n}=await ls(e);return n?n.catch(console.error):lc(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ly(e,t=!1){return await lv(e),(await lc(e,t)).token}async function lv(e){let{registrationPromise:t}=await ls(e);t&&await t}function lw(e){return oH.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE="installations";(0,m._registerComponent)(new y.Component(lE,e=>{let t=e.getProvider("app").getImmediate(),n=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if(!e||!e.options)throw lw("App Configuration");if(!e.name)throw lw("App Name");for(let t of["projectId","apiKey","appId"])if(!e.options[t])throw lw(t);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),i=(0,m._getProvider)(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},"PUBLIC")),(0,m._registerComponent)(new y.Component("installations-internal",e=>{let t=e.getProvider("app").getImmediate(),n=(0,m._getProvider)(t,lE).getImmediate();return{getId:()=>lm(n),getToken:e=>ly(n,e)}},"PRIVATE")),(0,m.registerVersion)(o$,oz),(0,m.registerVersion)(o$,oz,"esm2017");var y=f("eryG9"),oK=f("iItpQ"),w=f("gMVVg"),m=f("7xvHX");const lT="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",lb="google.c.a.c_id";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lS(e){return btoa(String.fromCharCode(...new Uint8Array(e))).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}(t=l||(l={}))[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION",(n=h||(h={})).PUSH_RECEIVED="push-received",n.NOTIFICATION_CLICKED="notification-clicked";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_="fcm_token_details_db",lC="fcm_token_object_Store";async function lI(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(e=>e.name).includes(l_))return null;let t=null;return(await (0,oK.openDB)(l_,5,{upgrade:async(n,i,r,s)=>{var a;if(i<2||!n.objectStoreNames.contains(lC))return;let o=s.objectStore(lC),l=await o.index("fcmSenderId").get(e);if(await o.clear(),l){if(2===i){if(!l.auth||!l.p256dh||!l.endpoint)return;t={token:l.fcmToken,createTime:null!==(a=l.createTime)&&void 0!==a?a:Date.now(),subscriptionOptions:{auth:l.auth,p256dh:l.p256dh,endpoint:l.endpoint,swScope:l.swScope,vapidKey:"string"==typeof l.vapidKey?l.vapidKey:lS(l.vapidKey)}}}else 3===i?t={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:lS(l.auth),p256dh:lS(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:lS(l.vapidKey)}}:4===i&&(t={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:lS(l.auth),p256dh:lS(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:lS(l.vapidKey)}})}}})).close(),await (0,oK.deleteDB)(l_),await (0,oK.deleteDB)("fcm_vapid_details_db"),await (0,oK.deleteDB)("undefined"),!function(e){if(!e||!e.subscriptionOptions)return!1;let{subscriptionOptions:t}=e;return"number"==typeof e.createTime&&e.createTime>0&&"string"==typeof e.token&&e.token.length>0&&"string"==typeof t.auth&&t.auth.length>0&&"string"==typeof t.p256dh&&t.p256dh.length>0&&"string"==typeof t.endpoint&&t.endpoint.length>0&&"string"==typeof t.swScope&&t.swScope.length>0&&"string"==typeof t.vapidKey&&t.vapidKey.length>0}(t)?null:t}const lA="firebase-messaging-store";let lk=null;function lD(){return lk||(lk=(0,oK.openDB)("firebase-messaging-database",1,{upgrade:(e,t)=>{0===t&&e.createObjectStore(lA)}})),lk}async function lN(e){let t=function({appConfig:e}){return e.appId}(e),n=await lD(),i=await n.transaction(lA).objectStore(lA).get(t);if(i)return i;{let t=await lI(e.appConfig.senderId);if(t)return await lx(e,t),t}}async function lx(e,t){let n=function({appConfig:e}){return e.appId}(e),i=(await lD()).transaction(lA,"readwrite");return await i.objectStore(lA).put(t,n),await i.done,t}async function lL(e){let t=function({appConfig:e}){return e.appId}(e),n=(await lD()).transaction(lA,"readwrite");await n.objectStore(lA).delete(t),await n.done}const lR=new w.ErrorFactory("messaging","Messaging",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lO(e,t){let n;let i={method:"POST",headers:await lF(e),body:JSON.stringify(lU(t))};try{let t=await fetch(lV(e.appConfig),i);n=await t.json()}catch(e){throw lR.create("token-subscribe-failed",{errorInfo:null==e?void 0:e.toString()})}if(n.error){let e=n.error.message;throw lR.create("token-subscribe-failed",{errorInfo:e})}if(!n.token)throw lR.create("token-subscribe-no-token");return n.token}async function lP(e,t){let n;let i={method:"PATCH",headers:await lF(e),body:JSON.stringify(lU(t.subscriptionOptions))};try{let r=await fetch(`${lV(e.appConfig)}/${t.token}`,i);n=await r.json()}catch(e){throw lR.create("token-update-failed",{errorInfo:null==e?void 0:e.toString()})}if(n.error){let e=n.error.message;throw lR.create("token-update-failed",{errorInfo:e})}if(!n.token)throw lR.create("token-update-no-token");return n.token}async function lM(e,t){let n=await lF(e);try{let i=await fetch(`${lV(e.appConfig)}/${t}`,{method:"DELETE",headers:n}),r=await i.json();if(r.error){let e=r.error.message;throw lR.create("token-unsubscribe-failed",{errorInfo:e})}}catch(e){throw lR.create("token-unsubscribe-failed",{errorInfo:null==e?void 0:e.toString()})}}function lV({projectId:e}){return`https://fcmregistrations.googleapis.com/v1/projects/${e}/registrations`}async function lF({appConfig:e,installations:t}){let n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function lU({p256dh:e,auth:t,endpoint:n,vapidKey:i}){let r={web:{endpoint:n,auth:t,p256dh:e}};return i!==lT&&(r.web.applicationPubKey=i),r}async function lj(e){let t=await l$(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:lS(t.getKey("auth")),p256dh:lS(t.getKey("p256dh"))},i=await lN(e.firebaseDependencies);if(!i)return lK(e.firebaseDependencies,n);if(function(e,t){let n=t.vapidKey===e.vapidKey,i=t.endpoint===e.endpoint,r=t.auth===e.auth,s=t.p256dh===e.p256dh;return n&&i&&r&&s}(i.subscriptionOptions,n))return Date.now()>=i.createTime+6048e5?lB(e,{token:i.token,createTime:Date.now(),subscriptionOptions:n}):i.token;try{await lM(e.firebaseDependencies,i.token)}catch(e){console.warn(e)}return lK(e.firebaseDependencies,n)}async function lq(e){let t=await lN(e.firebaseDependencies);t&&(await lM(e.firebaseDependencies,t.token),await lL(e.firebaseDependencies));let n=await e.swRegistration.pushManager.getSubscription();return!n||n.unsubscribe()}async function lB(e,t){try{let n=await lP(e.firebaseDependencies,t),i=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await lx(e.firebaseDependencies,i),n}catch(t){throw await lq(e),t}}async function lK(e,t){let n={token:await lO(e,t),createTime:Date.now(),subscriptionOptions:t};return await lx(e,n),n.token}async function l$(e,t){return await e.pushManager.getSubscription()||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:function(e){let t="=".repeat((4-e.length%4)%4),n=atob((e+t).replace(/\-/g,"+").replace(/_/g,"/")),i=new Uint8Array(n.length);for(let e=0;e<n.length;++e)i[e]=n.charCodeAt(e);return i}(t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lz(e){let t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return function(e,t){if(!t.notification)return;e.notification={};let n=t.notification.title;n&&(e.notification.title=n);let i=t.notification.body;i&&(e.notification.body=i);let r=t.notification.image;r&&(e.notification.image=r);let s=t.notification.icon;s&&(e.notification.icon=s)}(t,e),e.data&&(t.data=e.data),function(e,t){var n,i,r,s,a;if(!t.fcmOptions&&!(null===(n=t.notification)||void 0===n?void 0:n.click_action))return;e.fcmOptions={};let o=null!==(r=null===(i=t.fcmOptions)||void 0===i?void 0:i.link)&&void 0!==r?r:null===(s=t.notification)||void 0===s?void 0:s.click_action;o&&(e.fcmOptions.link=o);let l=null===(a=t.fcmOptions)||void 0===a?void 0:a.analytics_label;l&&(e.fcmOptions.analyticsLabel=l)}(t,e),t}function lG(e,t){let n=[];for(let i=0;i<e.length;i++)n.push(e.charAt(i)),i<t.length&&n.push(t.charAt(i));return n.join("")}function lQ(e){return lR.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */lG("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),lG("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lH{constructor(e,t,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;let i=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if(!e||!e.options)throw lQ("App Configuration Object");if(!e.name)throw lQ("App Name");let{options:t}=e;for(let e of["projectId","apiKey","appId","messagingSenderId"])if(!t[e])throw lQ(e);return{appName:e.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}(e);this.firebaseDependencies={app:e,appConfig:i,installations:t,analyticsProvider:n}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lW(e){try{e.swRegistration=await navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope"}),e.swRegistration.update().catch(()=>{})}catch(e){throw lR.create("failed-service-worker-registration",{browserErrorMessage:null==e?void 0:e.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lX(e,t){if(t||e.swRegistration||await lW(e),t||!e.swRegistration){if(!(t instanceof ServiceWorkerRegistration))throw lR.create("invalid-sw-registration");e.swRegistration=t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lY(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=lT)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lJ(e,t){if(!navigator)throw lR.create("only-available-in-window");if("default"===Notification.permission&&await Notification.requestPermission(),"granted"!==Notification.permission)throw lR.create("permission-blocked");return await lY(e,null==t?void 0:t.vapidKey),await lX(e,null==t?void 0:t.serviceWorkerRegistration),lj(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lZ(e,t,n){let i=function(e){switch(e){case h.NOTIFICATION_CLICKED:return"notification_open";case h.PUSH_RECEIVED:return"notification_foreground";default:throw Error()}}(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(i,{message_id:n[lb],message_name:n["google.c.a.c_l"],message_time:n["google.c.a.ts"],message_device_time:Math.floor(Date.now()/1e3)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l0(e,t){let n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===h.PUSH_RECEIVED&&("function"==typeof e.onMessageHandler?e.onMessageHandler(lz(n)):e.onMessageHandler.next(lz(n)));let i=n.data;"object"==typeof i&&i&&lb in i&&"1"===i["google.c.a.e"]&&await lZ(e,n.messageType,i)}const l1="@firebase/messaging",l2="0.12.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l9(){try{await (0,w.validateIndexedDBOpenable)()}catch(e){return!1}return"undefined"!=typeof window&&(0,w.isIndexedDBAvailable)()&&(0,w.areCookiesEnabled)()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}async function l4(e,t){return lJ(e=(0,w.getModularInstance)(e),t)}(0,m._registerComponent)(new y.Component("messaging",e=>{let t=new lH(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",e=>l0(t,e)),t},"PUBLIC")),(0,m._registerComponent)(new y.Component("messaging-internal",e=>{let t=e.getProvider("messaging").getImmediate();return{getToken:e=>lJ(t,e)}},"PRIVATE")),(0,m.registerVersion)(l1,l2),(0,m.registerVersion)(l1,l2,"esm2017");const l6=(0,p.initializeApp)({apiKey:"AIzaSyCPv6_IQXEZEyeOGsGIwGjcTbO5_8OYwMw",authDomain:"percussioninstruments-f921d.firebaseapp.com",projectId:"percussioninstruments-f921d",storageBucket:"percussioninstruments-f921d.appspot.com",messagingSenderId:"596737742766",appId:"1:596737742766:web:d874df4e5e4ded66941a3f",measurementId:"G-N1FVQNQ277"}),l5=function(e,t){let n="object"==typeof e?e:(0,m.getApp)(),i=(0,m._getProvider)(n,"firestore").getImmediate({identifier:"string"==typeof e?e:"(default)"});if(!i._initialized){let e=(0,w.getDefaultEmulatorHostnameAndPort)("firestore");e&&function(e,t,n,i={}){var r;let s=(e=oE(e,ob))._getSettings(),a=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==a&&ie("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),i.mockUserToken){let t,n;if("string"==typeof i.mockUserToken)t=i.mockUserToken,n=n4.MOCK_USER;else{t=(0,w.createMockUserToken)(i.mockUserToken,null===(r=e._app)||void 0===r?void 0:r.options.projectId);let s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new is(ir.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new n4(s)}e._authCredentials=new ih(new io(t,n))}}(i,...e)}return i}(l6),l7=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e=(0,m.getApp)()){return l9().then(e=>{if(!e)throw lR.create("unsupported-browser")},e=>{throw lR.create("indexed-db-unsupported")}),(0,m._getProvider)((0,w.getModularInstance)(e),"messaging").getImmediate()}(l6);let l3=[];function l8(){console.log("Requesting permission..."),Notification.requestPermission().then(e=>{"granted"===e?(console.log("Notification permission granted."),l4(l7,{vapidKey:"BIGjMPck3RTuB5p-1nOFueqoEzwYxxsdqvQg32-Qv2VHDjUNrsoGeUiiw55oEbAfxc7PyPNqie7LcBVn2xIEf00"}).then(e=>{e?console.log("Registration token:",e):console.log("No registration token available. Request permission to generate one.")}).catch(e=>{console.log("An error occurred while retrieving token. ",e)})):console.log("Unable to get permission to notify.")})}var he={};he=new URL("firebase-messaging-sw.js",import.meta.url).toString(),"serviceWorker"in navigator&&navigator.serviceWorker.register(he).then(function(e){console.log("Service Worker Registered",e)}).catch(function(e){console.log("Service Worker registration failed: ",e)}),document.addEventListener("DOMContentLoaded",async()=>{let e=document.getElementById("search-input"),t=document.getElementById("search-results"),n=document.getElementById("instrument-details"),i=document.getElementById("enable-notifications");async function r(){let e=localStorage.getItem("instrumentsList");if(e)l3=JSON.parse(e),console.log("Instruments list retrieved from Local Storage");else{let e=function(e,t,...n){if(e=(0,w.getModularInstance)(e),/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t,n){if(!n)throw new is(ir.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}("collection","path",t),e instanceof ob){let i=ib.fromString(t,...n);return ow(i),new oC(e,null,i)}{if(!(e instanceof o_||e instanceof oC))throw new is(ir.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let i=e._path.child(ib.fromString(t,...n));return ow(i),new oC(e.firestore,null,i)}}(l5,"Instruments");l3=(await function(e){e=oE(e,oS);let t=oE(e.firestore,oA),n=(t._firestoreClient||ok(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient),i=new oB(t);return(/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new is(ir.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),(function(e,t,n={}){let i=new ia;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,i,r){let s=new aJ(n,new ou({next:n=>{t.enqueueAndForget(()=>aH(e,s)),n.fromCache&&"server"===i.source?r.reject(new is(ir.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):r.resolve(n)},error:e=>r.reject(e)}),{includeMetadataChanges:!0,Z_:!0});return aQ(e,s)})(await om(e),e.asyncQueue,t,n,i)),i.promise})(n,e._query).then(n=>new oq(t,i,e,n)))}(e)).docs.map(e=>e.data()),localStorage.setItem("instrumentsList",JSON.stringify(l3)),console.log("Instruments list fetched from Firestore and stored in Local Storage")}}t.classList.add("hidden"),n.classList.add("hidden"),l8(),"Notification"in window?"default"===Notification.permission?(i.style.display="block",i.addEventListener("click",l8)):i.style.display="none":(i.style.display="none",console.log("This browser does not support notifications.")),await r(),e.addEventListener("input",e=>{let i=e.target.value.trim();console.log("Search input value:",i),i?function(e){try{let i=e.toLowerCase();console.log("Search text:",i);let r=l3.filter(e=>!!(e.InstrumentName&&e.InstrumentName.toLowerCase().includes(i))&&(console.log("Matching instrument:",e.InstrumentName),!0));console.log("Search results:",r),0===r.length?(t.innerHTML="<div>No results found.</div>",t.classList.remove("hidden"),n.classList.add("hidden")):(console.log("Displaying search results"),t.innerHTML="",r.forEach(e=>{let i=document.createElement("div");i.textContent=e.InstrumentName,i.addEventListener("click",()=>{n.innerHTML=`
            <h2>${e.InstrumentName}</h2>
            <p>${e.Description}</p>
            <p>French: ${e.French}</p>
            <p>German: ${e.German}</p>
            <p>Italian: ${e.Italian}</p>
            <p>Spanish: ${e.Spanish}</p>
        `,n.classList.remove("hidden"),t.classList.add("hidden")}),t.appendChild(i)}),t.classList.remove("hidden"))}catch(e){console.error("Error searching instruments:",e),t.innerHTML='<div class="error">An error occurred while searching instruments.</div>',t.classList.remove("hidden"),n.classList.add("hidden")}}(i):(t.classList.add("hidden"),n.classList.add("hidden"))})});
//# sourceMappingURL=index.fdd32dac.js.map
