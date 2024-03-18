let e;var t,n,i,r,s,a,o,l,h,u,c=globalThis,d={},f={},g=c.parcelRequirea6aa;null==g&&((g=function(e){if(e in d)return d[e].exports;if(e in f){var t=f[e];delete f[e];var n={id:e,exports:{}};return d[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){f[e]=t},c.parcelRequirea6aa=g),g.register;var p,m=g("fhN3L"),y=g("7xvHX"),v=g("eryG9"),w=g("5Z2ef"),E=g("gMVVg"),b={},T=T||{},S=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==c?c:"undefined"!=typeof self?self:{})||self;function _(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function C(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function I(e,t,n){return e.call.apply(e.bind,arguments)}function k(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function A(e,t,n){return(A=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?I:k).apply(null,arguments)}function D(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function N(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return t.prototype[n].apply(e,r)}}function x(){this.s=this.s,this.o=this.o}x.prototype.s=!1,x.prototype.sa=function(){this.s||(this.s=!0,this.N())},x.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const L=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return -1};function R(e){let t=e.length;if(0<t){let n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function O(e,t){for(let t=1;t<arguments.length;t++){let n=arguments[t];if(_(n)){let t=e.length||0,i=n.length||0;e.length=t+i;for(let r=0;r<i;r++)e[t+r]=n[r]}else e.push(n)}}function P(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}P.prototype.h=function(){this.defaultPrevented=!0};var M=function(){if(!S.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{let e=()=>{};S.addEventListener("test",e,t),S.removeEventListener("test",e,t)}catch(e){}return e}();function V(e){return/^[\s\xa0]*$/.test(e)}function F(){var e=S.navigator;return e&&(e=e.userAgent)?e:""}function U(e){return -1!=F().indexOf(e)}function j(e){return j[" "](e),e}j[" "]=function(){};var q=U("Opera"),B=U("Trident")||U("MSIE"),K=U("Edge"),$=K||B,z=U("Gecko")&&!(-1!=F().toLowerCase().indexOf("webkit")&&!U("Edge"))&&!(U("Trident")||U("MSIE"))&&!U("Edge"),G=-1!=F().toLowerCase().indexOf("webkit")&&!U("Edge");function Q(){var e=S.document;return e?e.documentMode:void 0}e:{var H,W="",X=(H=F(),z?/rv:([^\);]+)(\)|;)/.exec(H):K?/Edge\/([\d\.]+)/.exec(H):B?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(H):G?/WebKit\/(\S+)/.exec(H):q?/(?:Version)[ \/]?(\S+)/.exec(H):void 0);if(X&&(W=X?X[1]:""),B){var Y=Q();if(null!=Y&&Y>parseFloat(W)){r=String(Y);break e}}r=W}var J=S.document&&B&&(Q()||parseInt(r,10))||void 0;function Z(e,t){if(P.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(z){e:{try{j(t.nodeName);var r=!0;break e}catch(e){}r=!1}r||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:ee[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Z.$.h.call(this)}}N(Z,P);var ee={2:"touch",3:"pen",4:"mouse"};Z.prototype.h=function(){Z.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var et="closure_listenable_"+(1e6*Math.random()|0),en=0;function ei(e,t,n,i,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.la=r,this.key=++en,this.fa=this.ia=!1}function er(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function es(e,t,n){for(let i in e)t.call(n,e[i],i,e)}function ea(e){let t={};for(let n in e)t[n]=e[n];return t}const eo="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function el(e,t){let n,i;for(let t=1;t<arguments.length;t++){for(n in i=arguments[t])e[n]=i[n];for(let t=0;t<eo.length;t++)n=eo[t],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function eh(e){this.src=e,this.g={},this.h=0}function eu(e,t){var n=t.type;if(n in e.g){var i,r=e.g[n],s=L(r,t);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(er(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function ec(e,t,n,i){for(var r=0;r<e.length;++r){var s=e[r];if(!s.fa&&s.listener==t&&!!n==s.capture&&s.la==i)return r}return -1}eh.prototype.add=function(e,t,n,i,r){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var a=ec(e,t,i,r);return -1<a?(t=e[a],n||(t.ia=!1)):((t=new ei(t,this.src,s,!!i,r)).ia=n,e.push(t)),t};var ed="closure_lm_"+(1e6*Math.random()|0),ef={};function eg(e,t,n,i,r,s){if(!t)throw Error("Invalid event type");var a=C(r)?!!r.capture:!!r,o=ev(e);if(o||(e[ed]=o=new eh(e)),(n=o.add(t,n,i,a,s)).proxy)return n;if(i=function e(t){return ey.call(e.src,e.listener,t)},n.proxy=i,i.src=e,i.listener=n,e.addEventListener)M||(r=a),void 0===r&&(r=!1),e.addEventListener(t.toString(),i,r);else if(e.attachEvent)e.attachEvent(em(t.toString()),i);else if(e.addListener&&e.removeListener)e.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ep(e){if("number"!=typeof e&&e&&!e.fa){var t=e.src;if(t&&t[et])eu(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(em(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=ev(t))?(eu(n,e),0==n.h&&(n.src=null,t[ed]=null)):er(e)}}}function em(e){return e in ef?ef[e]:ef[e]="on"+e}function ey(e,t){if(e.fa)e=!0;else{t=new Z(t,this);var n=e.listener,i=e.la||e.src;e.ia&&ep(e),e=n.call(i,t)}return e}function ev(e){return(e=e[ed])instanceof eh?e:null}var ew="__closure_events_fn_"+(1e9*Math.random()>>>0);function eE(e){return"function"==typeof e?e:(e[ew]||(e[ew]=function(t){return e.handleEvent(t)}),e[ew])}function eb(){x.call(this),this.i=new eh(this),this.S=this,this.J=null}function eT(e,t){var n,i=e.J;if(i)for(n=[];i;i=i.J)n.push(i);if(e=e.S,i=t.type||t,"string"==typeof t)t=new P(t,e);else if(t instanceof P)t.target=t.target||e;else{var r=t;el(t=new P(i,e),r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var a=t.g=n[s];r=eS(a,i,!0,t)&&r}if(r=eS(a=t.g=e,i,!0,t)&&r,r=eS(a,i,!1,t)&&r,n)for(s=0;s<n.length;s++)r=eS(a=t.g=n[s],i,!1,t)&&r}function eS(e,t,n,i){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var r=!0,s=0;s<t.length;++s){var a=t[s];if(a&&!a.fa&&a.capture==n){var o=a.listener,l=a.la||a.src;a.ia&&eu(e.i,a),r=!1!==o.call(l,i)&&r}}return r&&!i.defaultPrevented}N(eb,x),eb.prototype[et]=!0,eb.prototype.removeEventListener=function(e,t,n,i){!function e(t,n,i,r,s){if(Array.isArray(n))for(var a=0;a<n.length;a++)e(t,n[a],i,r,s);else(r=C(r)?!!r.capture:!!r,i=eE(i),t&&t[et])?(t=t.i,(n=String(n).toString())in t.g&&-1<(i=ec(a=t.g[n],i,r,s))&&(er(a[i]),Array.prototype.splice.call(a,i,1),0==a.length&&(delete t.g[n],t.h--))):t&&(t=ev(t))&&(n=t.g[n.toString()],t=-1,n&&(t=ec(n,i,r,s)),(i=-1<t?n[t]:null)&&ep(i))}(this,e,t,n,i)},eb.prototype.N=function(){if(eb.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)er(n[i]);delete t.g[e],t.h--}}this.J=null},eb.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)},eb.prototype.P=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};var e_=S.JSON.stringify,eC=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new eI,e=>e.reset());class eI{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let ek,eA=!1,eD=new class{constructor(){this.h=this.g=null}add(e,t){let n=eC.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},eN=()=>{let e=S.Promise.resolve(void 0);ek=()=>{e.then(ex)}};var ex=()=>{let e;for(var t;e=null,eD.g&&(e=eD.g,eD.g=eD.g.next,eD.g||(eD.h=null),e.next=null),t=e;){try{t.h.call(t.g)}catch(e){!function(e){S.setTimeout(()=>{throw e},0)}(e)}eC.j(t),100>eC.h&&(eC.h++,t.next=eC.g,eC.g=t)}eA=!1};function eL(e,t){eb.call(this),this.h=e||1,this.g=t||S,this.j=A(this.qb,this),this.l=Date.now()}function eR(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function eO(e,t,n){if("function"==typeof e)n&&(e=A(e,n));else if(e&&"function"==typeof e.handleEvent)e=A(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:S.setTimeout(e,t||0)}N(eL,eb),(p=eL.prototype).ga=!1,p.T=null,p.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),eT(this,"tick"),this.ga&&(eR(this),this.start()))}},p.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},p.N=function(){eL.$.N.call(this),eR(this),delete this.g};class eP extends x{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=eO(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.j);let n=t.h;t.h=null,t.m.apply(null,n)}(this)}N(){super.N(),this.g&&(S.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function eM(e){x.call(this),this.h=e,this.g={}}N(eM,x);var eV=[];function eF(e,t,n,i){Array.isArray(n)||(n&&(eV[0]=n.toString()),n=eV);for(var r=0;r<n.length;r++){var s=function e(t,n,i,r,s){if(r&&r.once)return function e(t,n,i,r,s){if(Array.isArray(n)){for(var a=0;a<n.length;a++)e(t,n[a],i,r,s);return null}return i=eE(i),t&&t[et]?t.P(n,i,C(r)?!!r.capture:!!r,s):eg(t,n,i,!0,r,s)}(t,n,i,r,s);if(Array.isArray(n)){for(var a=0;a<n.length;a++)e(t,n[a],i,r,s);return null}return i=eE(i),t&&t[et]?t.O(n,i,C(r)?!!r.capture:!!r,s):eg(t,n,i,!1,r,s)}(t,n[r],i||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function eU(e){es(e.g,function(e,t){this.g.hasOwnProperty(t)&&ep(e)},e),e.g={}}function ej(){this.g=!0}function eq(e,t,n,i){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var a=1;a<r.length;a++)r[a]=""}}}}return e_(n)}catch(e){return t}}(e,n)+(i?" "+i:"")})}eM.prototype.N=function(){eM.$.N.call(this),eU(this)},eM.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},ej.prototype.Ea=function(){this.g=!1},ej.prototype.info=function(){};var eB={},eK=null;function e$(){return eK=eK||new eb}function ez(e){P.call(this,eB.Ta,e)}function eG(e){let t=e$();eT(t,new ez(t))}function eQ(e,t){P.call(this,eB.STAT_EVENT,e),this.stat=t}function eH(e){let t=e$();eT(t,new eQ(t,e))}function eW(e,t){P.call(this,eB.Ua,e),this.size=t}function eX(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return S.setTimeout(function(){e()},t)}eB.Ta="serverreachability",N(ez,P),eB.STAT_EVENT="statevent",N(eQ,P),eB.Ua="timingevent",N(eW,P);var eY={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},eJ={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function eZ(){}function e0(e){return e.h||(e.h=e.i())}function e1(){}eZ.prototype.h=null;var e2={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function e9(){P.call(this,"d")}function e4(){P.call(this,"c")}function e6(){}function e5(e,t,n,i){this.l=e,this.j=t,this.m=n,this.W=i||1,this.U=new eM(this),this.P=e3,e=$?125:void 0,this.V=new eL(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new e7}function e7(){this.i=null,this.g="",this.h=!1}N(e9,P),N(e4,P),N(e6,eZ),e6.prototype.g=function(){return new XMLHttpRequest},e6.prototype.i=function(){return{}},a=new e6;var e3=45e3,e8={},te={};function tt(e,t,n){e.L=1,e.A=tw(tg(t)),e.u=n,e.S=!0,tn(e,null)}function tn(e,t){e.G=Date.now(),ts(e),e.B=tg(e.A);var n=e.B,i=e.W;Array.isArray(i)||(i=[String(i)]),tL(n.i,"t",i),e.o=0,n=e.l.J,e.h=new e7,e.g=nb(e.l,n?t:null,!e.u),0<e.O&&(e.M=new eP(A(e.Pa,e,e.g),e.O)),eF(e.U,e.g,"readystatechange",e.nb),t=e.I?ea(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),eG(),function(e,t,n,i,r,s){e.info(function(){if(e.g){if(s)for(var a="",o=s.split("&"),l=0;l<o.length;l++){var h=o[l].split("=");if(1<h.length){var u=h[0];h=h[1];var c=u.split("_");a=2<=c.length&&"type"==c[1]?a+(u+"=")+h+"&":a+(u+"=redacted&")}}else a=null}else a=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+t+"\n"+n+"\n"+a})}(e.j,e.v,e.B,e.m,e.W,e.u)}function ti(e){return!!e.g&&"GET"==e.v&&2!=e.L&&e.l.Ha}function tr(e,t,n){let i=!0,r;for(;!e.J&&e.o<n.length;)if((r=function(e,t){var n=e.o,i=t.indexOf("\n",n);return -1==i?te:isNaN(n=Number(t.substring(n,i)))?e8:(i+=1)+n>t.length?te:(t=t.slice(i,i+n),e.o=i+n,t)}(e,n))==te){4==t&&(e.s=4,eH(14),i=!1),eq(e.j,e.m,null,"[Incomplete Response]");break}else if(r==e8){e.s=4,eH(15),eq(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}else eq(e.j,e.m,r,null),tu(e,r);ti(e)&&0!=e.o&&(e.h.g=e.h.g.slice(e.o),e.o=0),4!=t||0!=n.length||e.h.h||(e.s=1,eH(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.ba&&(e.ba=!0,(t=e.l).g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),nf(t),t.M=!0,eH(11))):(eq(e.j,e.m,n,"[Invalid Chunked Response]"),th(e),tl(e))}function ts(e){e.Y=Date.now()+e.P,ta(e,e.P)}function ta(e,t){if(null!=e.C)throw Error("WatchDog timer not null");e.C=eX(A(e.lb,e),t)}function to(e){e.C&&(S.clearTimeout(e.C),e.C=null)}function tl(e){0==e.l.H||e.J||nm(e.l,e)}function th(e){to(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,eR(e.V),eU(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function tu(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||tU(n.i,e))){if(!e.K&&tU(n.i,e)&&3==n.H){try{var i=n.Ja.g.parse(t)}catch(e){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){e:if(!n.u){if(n.g){if(n.g.G+3e3<e.G)np(n),ns(n);else break e}nd(n),eH(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&0==n.A&&!n.v&&(n.v=eX(A(n.ib,n),6e3));if(1>=tF(n.i)&&n.oa){try{n.oa()}catch(e){}n.oa=void 0}}else nv(n,11)}else if((e.K||n.g==e)&&np(n),!V(t))for(r=n.Ja.g.parse(t),t=0;t<r.length;t++){let o=r[t];if(n.V=o[0],o=o[1],2==n.H){if("c"==o[0]){n.K=o[1],n.pa=o[2];let t=o[3];null!=t&&(n.ra=t,n.l.info("VER="+n.ra));let r=o[4];null!=r&&(n.Ga=r,n.l.info("SVER="+n.Ga));let l=o[5];null!=l&&"number"==typeof l&&0<l&&(i=1.5*l,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;let h=e.g;if(h){let e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=i.i;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(tj(s,s.h),s.h=null))}if(i.F){let e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(i.Da=e,tv(i.I,i.F,e))}}if(n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),(i=n).wa=nE(i,i.J?i.pa:null,i.Y),e.K){tq(i.i,e);var a=i.L;a&&e.setTimeout(a),e.C&&(to(e),ts(e)),i.g=e}else nc(i);0<n.j.length&&no(n)}else"stop"!=o[0]&&"close"!=o[0]||nv(n,7)}else 3==n.H&&("stop"==o[0]||"close"==o[0]?"stop"==o[0]?nv(n,7):nr(n):"noop"!=o[0]&&n.h&&n.h.Aa(o),n.A=0)}}eG(4)}catch(e){}}function tc(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(_(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(_(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}for(let i in t=[],n=0,e)t[n++]=i;return t}}}(e),i=function(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(_(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}for(i in t=[],n=0,e)t[n++]=e[i];return t}(e),r=i.length,s=0;s<r;s++)t.call(void 0,i[s],n&&n[s],e)}(p=e5.prototype).setTimeout=function(e){this.P=e},p.nb=function(e){e=e.target;let t=this.M;t&&3==t3(e)?t.l():this.Pa(e)},p.Pa=function(e){try{if(e==this.g)e:{let u=t3(this.g);var t=this.g.Ia();let c=this.g.da();if(!(3>u)&&(3!=u||$||this.g&&(this.h.h||this.g.ja()||t8(this.g)))){this.J||4!=u||7==t||(8==t||0>=c?eG(3):eG(2)),to(this);var n=this.g.da();this.ca=n;t:if(ti(this)){var i=t8(this.g);e="";var r=i.length,s=4==t3(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){th(this),tl(this);var a="";break t}this.h.i=new S.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:s&&t==r-1});i.length=0,this.h.g+=e,this.o=0,a=this.h.g}else a=this.g.ja();if(this.i=200==n,function(e,t,n,i,r,s,a){e.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+t+"\n"+n+"\n"+s+" "+a})}(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var o,l=this.g;if((o=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!V(o)){var h=o;break t}}h=null}if(n=h)eq(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,tu(this,n);else{this.i=!1,this.s=3,eH(12),th(this),tl(this);break e}}this.S?(tr(this,u,a),$&&this.i&&3==u&&(eF(this.U,this.V,"tick",this.mb),this.V.start())):(eq(this.j,this.m,a,null),tu(this,a)),4==u&&th(this),this.i&&!this.J&&(4==u?nm(this.l,this):(this.i=!1,ts(this)))}else(function(e){let t={};e=(e.g&&2<=t3(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let i=0;i<e.length;i++){if(V(e[i]))continue;var n=function(e){var t=1;e=e.split(":");let n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}(e[i]);let r=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();let s=t[r]||[];t[r]=s,s.push(n)}!function(e,t){for(let n in e)t.call(void 0,e[n],n,e)}(t,function(e){return e.join(", ")})})(this.g),400==n&&0<a.indexOf("Unknown SID")?(this.s=3,eH(12)):(this.s=0,eH(13)),th(this),tl(this)}}}catch(e){}finally{}},p.mb=function(){if(this.g){var e=t3(this.g),t=this.g.ja();this.o<t.length&&(to(this),tr(this,e,t),this.i&&4!=e&&ts(this))}},p.cancel=function(){this.J=!0,th(this)},p.lb=function(){this.C=null;let e=Date.now();0<=e-this.Y?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.j,this.B),2!=this.L&&(eG(),eH(17)),th(this),this.s=2,tl(this)):ta(this,this.Y-e)};var td=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tf(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof tf){this.h=e.h,tp(this,e.j),this.s=e.s,this.g=e.g,tm(this,e.m),this.l=e.l;var t=e.i,n=new tA;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),ty(this,n),this.o=e.o}else e&&(t=String(e).match(td))?(this.h=!1,tp(this,t[1]||"",!0),this.s=tE(t[2]||""),this.g=tE(t[3]||"",!0),tm(this,t[4]),this.l=tE(t[5]||"",!0),ty(this,t[6]||"",!0),this.o=tE(t[7]||"")):(this.h=!1,this.i=new tA(null,this.h))}function tg(e){return new tf(e)}function tp(e,t,n){e.j=n?tE(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function tm(e,t){if(t){if(isNaN(t=Number(t))||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function ty(e,t,n){var i,r;t instanceof tA?(e.i=t,i=e.i,(r=e.h)&&!i.j&&(tD(i),i.i=null,i.g.forEach(function(e,t){var n=t.toLowerCase();t!=n&&(tN(this,t),tL(this,n,e))},i)),i.j=r):(n||(t=tb(t,tI)),e.i=new tA(t,e.h))}function tv(e,t,n){e.i.set(t,n)}function tw(e){return tv(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function tE(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function tb(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,tT),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function tT(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}tf.prototype.toString=function(){var e=[],t=this.j;t&&e.push(tb(t,tS,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(tb(t,tS,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(tb(n,"/"==n.charAt(0)?tC:t_,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",tb(n,tk)),e.join("")};var tS=/[#\/\?@]/g,t_=/[#\?:]/g,tC=/[#\?]/g,tI=/[#\?@]/g,tk=/#/g;function tA(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function tD(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),r=null;if(0<=i){var s=e[n].substring(0,i);r=e[n].substring(i+1)}else s=e[n];t(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}function tN(e,t){tD(e),t=tR(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function tx(e,t){return tD(e),t=tR(e,t),e.g.has(t)}function tL(e,t,n){tN(e,t),0<n.length&&(e.i=null,e.g.set(tR(e,t),R(n)),e.h+=n.length)}function tR(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(p=tA.prototype).add=function(e,t){tD(this),this.i=null,e=tR(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},p.forEach=function(e,t){tD(this),this.g.forEach(function(n,i){n.forEach(function(n){e.call(t,n,i,this)},this)},this)},p.ta=function(){tD(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let i=0;i<t.length;i++){let r=e[i];for(let e=0;e<r.length;e++)n.push(t[i])}return n},p.Z=function(e){tD(this);let t=[];if("string"==typeof e)tx(this,e)&&(t=t.concat(this.g.get(tR(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},p.set=function(e,t){return tD(this),this.i=null,tx(this,e=tR(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},p.get=function(e,t){return e&&0<(e=this.Z(e)).length?String(e[0]):t},p.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var i=t[n];let s=encodeURIComponent(String(i)),a=this.Z(i);for(i=0;i<a.length;i++){var r=s;""!==a[i]&&(r+="="+encodeURIComponent(String(a[i]))),e.push(r)}}return this.i=e.join("&")};var tO=class{constructor(e,t){this.g=e,this.map=t}};function tP(e){this.l=e||tM,e=S.PerformanceNavigationTiming?0<(e=S.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(S.g&&S.g.Ka&&S.g.Ka()&&S.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var tM=10;function tV(e){return!!e.h||!!e.g&&e.g.size>=e.j}function tF(e){return e.h?1:e.g?e.g.size:0}function tU(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function tj(e,t){e.g?e.g.add(t):e.h=t}function tq(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function tB(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let n of e.g.values())t=t.concat(n.F);return t}return R(e.i)}tP.prototype.cancel=function(){if(this.i=tB(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}};var tK=class{stringify(e){return S.JSON.stringify(e,void 0)}parse(e){return S.JSON.parse(e,void 0)}};function t$(){this.g=new tK}function tz(e,t,n,i,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(i)}catch(e){}}function tG(e){this.l=e.ec||null,this.j=e.ob||!1}function tQ(e,t){eb.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=tH,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}N(tG,eZ),tG.prototype.g=function(){return new tQ(this.l,this.j)},tG.prototype.i=(t={},function(){return t}),N(tQ,eb);var tH=0;function tW(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function tX(e){e.readyState=4,e.l=null,e.j=null,e.A=null,tY(e)}function tY(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(p=tQ.prototype).open=function(e,t){if(this.readyState!=tH)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,tY(this)},p.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||S).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},p.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,tX(this)),this.readyState=tH},p.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,tY(this)),this.g&&(this.readyState=3,tY(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==S.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;tW(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))}},p.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?tX(this):tY(this),3==this.readyState&&tW(this)}},p.Za=function(e){this.g&&(this.response=this.responseText=e,tX(this))},p.Ya=function(e){this.g&&(this.response=e,tX(this))},p.ka=function(){this.g&&tX(this)},p.setRequestHeader=function(e,t){this.v.append(e,t)},p.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},p.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var n=t.next();!n.done;)e.push((n=n.value)[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(tQ.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var tJ=S.JSON.parse;function tZ(e){eb.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=t0,this.L=this.M=!1}N(tZ,eb);var t0="",t1=/^https?$/i,t2=["POST","PUT"];function t9(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,t4(e),t5(e)}function t4(e){e.F||(e.F=!0,eT(e,"complete"),eT(e,"error"))}function t6(e){if(e.h&&void 0!==T&&(!e.C[1]||4!=t3(e)||2!=e.da())){if(e.v&&4==t3(e))eO(e.La,0,e);else if(eT(e,"readystatechange"),4==t3(e)){e.h=!1;try{let a=e.da();switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t,n,i=!0;break;default:i=!1}if(!(t=i)){if(n=0===a){var r=String(e.I).match(td)[1]||null;!r&&S.self&&S.self.location&&(r=S.self.location.protocol.slice(0,-1)),n=!t1.test(r?r.toLowerCase():"")}t=n}if(t)eT(e,"complete"),eT(e,"success");else{e.m=6;try{var s=2<t3(e)?e.g.statusText:""}catch(e){s=""}e.j=s+" ["+e.da()+"]",t4(e)}}finally{t5(e)}}}}function t5(e,t){if(e.g){t7(e);let n=e.g,i=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||eT(e,"ready");try{n.onreadystatechange=i}catch(e){}}}function t7(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(S.clearTimeout(e.A),e.A=null)}function t3(e){return e.g?e.g.readyState:0}function t8(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case t0:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function ne(e){let t="";return es(e,function(e,n){t+=n+":"+e+"\r\n"}),t}function nt(e,t,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=ne(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):tv(e,t,n))}function nn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function ni(e){this.Ga=0,this.j=[],this.l=new ej,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=nn("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=nn("baseRetryDelayMs",5e3,e),this.hb=nn("retryDelaySeedMs",1e4,e),this.eb=nn("forwardChannelMaxRetries",2,e),this.xa=nn("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new tP(e&&e.concurrentRequestLimit),this.Ja=new t$,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function nr(e){if(na(e),3==e.H){var t=e.W++,n=tg(e.I);if(tv(n,"SID",e.K),tv(n,"RID",t),tv(n,"TYPE","terminate"),nh(e,n),(t=new e5(e,e.l,t)).L=2,t.A=tw(tg(n)),n=!1,S.navigator&&S.navigator.sendBeacon)try{n=S.navigator.sendBeacon(t.A.toString(),"")}catch(e){}!n&&S.Image&&((new Image).src=t.A,n=!0),n||(t.g=nb(t.l,null),t.g.ha(t.A)),t.G=Date.now(),ts(t)}nw(e)}function ns(e){e.g&&(nf(e),e.g.cancel(),e.g=null)}function na(e){ns(e),e.u&&(S.clearTimeout(e.u),e.u=null),np(e),e.i.cancel(),e.m&&("number"==typeof e.m&&S.clearTimeout(e.m),e.m=null)}function no(e){if(!tV(e.i)&&!e.m){e.m=!0;var t=e.Na;ek||eN(),eA||(ek(),eA=!0),eD.add(t,e),e.C=0}}function nl(e,t){var n;n=t?t.m:e.W++;let i=tg(e.I);tv(i,"SID",e.K),tv(i,"RID",n),tv(i,"AID",e.V),nh(e,i),e.o&&e.s&&nt(i,e.o,e.s),n=new e5(e,e.l,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=nu(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),tj(e.i,n),tt(n,i,t)}function nh(e,t){e.na&&es(e.na,function(e,n){tv(t,n,e)}),e.h&&tc({},function(e,n){tv(t,n,e)})}function nu(e,t,n){n=Math.min(e.j.length,n);var i=e.h?A(e.h.Va,e.h,e):null;e:{var r=e.j;let t=-1;for(;;){let e=["count="+n];-1==t?0<n?(t=r[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let a=0;a<n;a++){let n=r[a].g,o=r[a].map;if(0>(n-=t))t=Math.max(0,r[a].g-100),s=!1;else try{!function(e,t,n){let i=n||"";try{tc(e,function(e,n){let r=e;C(e)&&(r=e_(e)),t.push(i+n+"="+encodeURIComponent(r))})}catch(e){throw t.push(i+"type="+encodeURIComponent("_badmap")),e}}(o,e,"req"+n+"_")}catch(e){i&&i(o)}}if(s){i=e.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,i}function nc(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;ek||eN(),eA||(ek(),eA=!0),eD.add(t,e),e.A=0}}function nd(e){return!e.g&&!e.u&&!(3<=e.A)&&(e.ba++,e.u=eX(A(e.Ma,e),ny(e,e.A)),e.A++,!0)}function nf(e){null!=e.B&&(S.clearTimeout(e.B),e.B=null)}function ng(e){e.g=new e5(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=tg(e.wa);tv(t,"RID","rpc"),tv(t,"SID",e.K),tv(t,"AID",e.V),tv(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&tv(t,"TO",e.qa),tv(t,"TYPE","xmlhttp"),nh(e,t),e.o&&e.s&&nt(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=tw(tg(t)),n.u=null,n.S=!0,tn(n,e)}function np(e){null!=e.v&&(S.clearTimeout(e.v),e.v=null)}function nm(e,t){var n=null;if(e.g==t){np(e),nf(e),e.g=null;var i=2}else{if(!tU(e.i,t))return;n=t.F,tq(e.i,t),i=1}if(0!=e.H){if(t.i){if(1==i){n=t.u?t.u.length:0,t=Date.now()-t.G;var r,s=e.C;eT(i=e$(),new eW(i,n)),no(e)}else nc(e)}else if(3==(s=t.s)||0==s&&0<t.ca||!(1==i&&(r=t,!(tF(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.j=r.F.concat(e.j),!0):1!=e.H&&2!=e.H&&!(e.C>=(e.cb?0:e.eb))&&(e.m=eX(A(e.Na,e,r),ny(e,e.C)),e.C++,!0)))||2==i&&nd(e)))switch(n&&0<n.length&&((t=e.i).i=t.i.concat(n)),s){case 1:nv(e,5);break;case 4:nv(e,10);break;case 3:nv(e,6);break;default:nv(e,2)}}}function ny(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function nv(e,t){if(e.l.info("Error code "+t),2==t){var n=null;e.h&&(n=null);var i=A(e.pb,e);n||(n=new tf("//www.google.com/images/cleardot.gif"),S.location&&"http"==S.location.protocol||tp(n,"https"),tw(n)),function(e,t){let n=new ej;if(S.Image){let i=new Image;i.onload=D(tz,n,i,"TestLoadImage: loaded",!0,t),i.onerror=D(tz,n,i,"TestLoadImage: error",!1,t),i.onabort=D(tz,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=D(tz,n,i,"TestLoadImage: timeout",!1,t),S.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=e}else t(!1)}(n.toString(),i)}else eH(2);e.H=0,e.h&&e.h.za(t),nw(e),na(e)}function nw(e){if(e.H=0,e.ma=[],e.h){let t=tB(e.i);(0!=t.length||0!=e.j.length)&&(O(e.ma,t),O(e.ma,e.j),e.i.i.length=0,R(e.j),e.j.length=0),e.h.ya()}}function nE(e,t,n){var i=n instanceof tf?tg(n):new tf(n);if(""!=i.g)t&&(i.g=t+"."+i.g),tm(i,i.m);else{var r=S.location;i=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var s=new tf(null);i&&tp(s,i),t&&(s.g=t),r&&tm(s,r),n&&(s.l=n),i=s}return n=e.F,t=e.Da,n&&t&&tv(i,n,t),tv(i,"VER",e.ra),nh(e,i),i}function nb(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new tZ(e.Ha&&!e.va?new tG({ob:n}):e.va)).Oa(e.J),t}function nT(){}function nS(){if(B&&!(10<=Number(J)))throw Error("Environmental error: no available transport.")}function n_(e,t){eb.call(this),this.g=new ni(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!V(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!V(t)&&(this.g.F=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new nk(this)}function nC(e){e9.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(let n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function nI(){e4.call(this),this.status=1}function nk(e){this.g=e}function nA(){this.blockSize=-1,this.blockSize=64,this.g=[,,,,],this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function nD(e,t,n){n||(n=0);var i=Array(16);if("string"==typeof t)for(var r=0;16>r;++r)i[r]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(r=0;16>r;++r)i[r]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],r=e.g[2];var s=e.g[3],a=t+(s^n&(r^s))+i[0]+3614090360&4294967295;a=s+(r^(t=n+(a<<7&4294967295|a>>>25))&(n^r))+i[1]+3905402710&4294967295,a=r+(n^(s=t+(a<<12&4294967295|a>>>20))&(t^n))+i[2]+606105819&4294967295,a=n+(t^(r=s+(a<<17&4294967295|a>>>15))&(s^t))+i[3]+3250441966&4294967295,a=t+(s^(n=r+(a<<22&4294967295|a>>>10))&(r^s))+i[4]+4118548399&4294967295,a=s+(r^(t=n+(a<<7&4294967295|a>>>25))&(n^r))+i[5]+1200080426&4294967295,a=r+(n^(s=t+(a<<12&4294967295|a>>>20))&(t^n))+i[6]+2821735955&4294967295,a=n+(t^(r=s+(a<<17&4294967295|a>>>15))&(s^t))+i[7]+4249261313&4294967295,a=t+(s^(n=r+(a<<22&4294967295|a>>>10))&(r^s))+i[8]+1770035416&4294967295,a=s+(r^(t=n+(a<<7&4294967295|a>>>25))&(n^r))+i[9]+2336552879&4294967295,a=r+(n^(s=t+(a<<12&4294967295|a>>>20))&(t^n))+i[10]+4294925233&4294967295,a=n+(t^(r=s+(a<<17&4294967295|a>>>15))&(s^t))+i[11]+2304563134&4294967295,a=t+(s^(n=r+(a<<22&4294967295|a>>>10))&(r^s))+i[12]+1804603682&4294967295,a=s+(r^(t=n+(a<<7&4294967295|a>>>25))&(n^r))+i[13]+4254626195&4294967295,a=r+(n^(s=t+(a<<12&4294967295|a>>>20))&(t^n))+i[14]+2792965006&4294967295,a=n+(t^(r=s+(a<<17&4294967295|a>>>15))&(s^t))+i[15]+1236535329&4294967295,n=r+(a<<22&4294967295|a>>>10),a=t+(r^s&(n^r))+i[1]+4129170786&4294967295,t=n+(a<<5&4294967295|a>>>27),a=s+(n^r&(t^n))+i[6]+3225465664&4294967295,s=t+(a<<9&4294967295|a>>>23),a=r+(t^n&(s^t))+i[11]+643717713&4294967295,r=s+(a<<14&4294967295|a>>>18),a=n+(s^t&(r^s))+i[0]+3921069994&4294967295,n=r+(a<<20&4294967295|a>>>12),a=t+(r^s&(n^r))+i[5]+3593408605&4294967295,t=n+(a<<5&4294967295|a>>>27),a=s+(n^r&(t^n))+i[10]+38016083&4294967295,s=t+(a<<9&4294967295|a>>>23),a=r+(t^n&(s^t))+i[15]+3634488961&4294967295,r=s+(a<<14&4294967295|a>>>18),a=n+(s^t&(r^s))+i[4]+3889429448&4294967295,n=r+(a<<20&4294967295|a>>>12),a=t+(r^s&(n^r))+i[9]+568446438&4294967295,t=n+(a<<5&4294967295|a>>>27),a=s+(n^r&(t^n))+i[14]+3275163606&4294967295,s=t+(a<<9&4294967295|a>>>23),a=r+(t^n&(s^t))+i[3]+4107603335&4294967295,r=s+(a<<14&4294967295|a>>>18),a=n+(s^t&(r^s))+i[8]+1163531501&4294967295,n=r+(a<<20&4294967295|a>>>12),a=t+(r^s&(n^r))+i[13]+2850285829&4294967295,t=n+(a<<5&4294967295|a>>>27),a=s+(n^r&(t^n))+i[2]+4243563512&4294967295,s=t+(a<<9&4294967295|a>>>23),a=r+(t^n&(s^t))+i[7]+1735328473&4294967295,r=s+(a<<14&4294967295|a>>>18),a=n+(s^t&(r^s))+i[12]+2368359562&4294967295,a=t+((n=r+(a<<20&4294967295|a>>>12))^r^s)+i[5]+4294588738&4294967295,a=s+((t=n+(a<<4&4294967295|a>>>28))^n^r)+i[8]+2272392833&4294967295,a=r+((s=t+(a<<11&4294967295|a>>>21))^t^n)+i[11]+1839030562&4294967295,a=n+((r=s+(a<<16&4294967295|a>>>16))^s^t)+i[14]+4259657740&4294967295,a=t+((n=r+(a<<23&4294967295|a>>>9))^r^s)+i[1]+2763975236&4294967295,a=s+((t=n+(a<<4&4294967295|a>>>28))^n^r)+i[4]+1272893353&4294967295,a=r+((s=t+(a<<11&4294967295|a>>>21))^t^n)+i[7]+4139469664&4294967295,a=n+((r=s+(a<<16&4294967295|a>>>16))^s^t)+i[10]+3200236656&4294967295,a=t+((n=r+(a<<23&4294967295|a>>>9))^r^s)+i[13]+681279174&4294967295,a=s+((t=n+(a<<4&4294967295|a>>>28))^n^r)+i[0]+3936430074&4294967295,a=r+((s=t+(a<<11&4294967295|a>>>21))^t^n)+i[3]+3572445317&4294967295,a=n+((r=s+(a<<16&4294967295|a>>>16))^s^t)+i[6]+76029189&4294967295,a=t+((n=r+(a<<23&4294967295|a>>>9))^r^s)+i[9]+3654602809&4294967295,a=s+((t=n+(a<<4&4294967295|a>>>28))^n^r)+i[12]+3873151461&4294967295,a=r+((s=t+(a<<11&4294967295|a>>>21))^t^n)+i[15]+530742520&4294967295,a=n+((r=s+(a<<16&4294967295|a>>>16))^s^t)+i[2]+3299628645&4294967295,n=r+(a<<23&4294967295|a>>>9),a=t+(r^(n|~s))+i[0]+4096336452&4294967295,t=n+(a<<6&4294967295|a>>>26),a=s+(n^(t|~r))+i[7]+1126891415&4294967295,s=t+(a<<10&4294967295|a>>>22),a=r+(t^(s|~n))+i[14]+2878612391&4294967295,r=s+(a<<15&4294967295|a>>>17),a=n+(s^(r|~t))+i[5]+4237533241&4294967295,n=r+(a<<21&4294967295|a>>>11),a=t+(r^(n|~s))+i[12]+1700485571&4294967295,t=n+(a<<6&4294967295|a>>>26),a=s+(n^(t|~r))+i[3]+2399980690&4294967295,s=t+(a<<10&4294967295|a>>>22),a=r+(t^(s|~n))+i[10]+4293915773&4294967295,r=s+(a<<15&4294967295|a>>>17),a=n+(s^(r|~t))+i[1]+2240044497&4294967295,n=r+(a<<21&4294967295|a>>>11),a=t+(r^(n|~s))+i[8]+1873313359&4294967295,t=n+(a<<6&4294967295|a>>>26),a=s+(n^(t|~r))+i[15]+4264355552&4294967295,s=t+(a<<10&4294967295|a>>>22),a=r+(t^(s|~n))+i[6]+2734768916&4294967295,r=s+(a<<15&4294967295|a>>>17),a=n+(s^(r|~t))+i[13]+1309151649&4294967295,n=r+(a<<21&4294967295|a>>>11),a=t+(r^(n|~s))+i[4]+4149444226&4294967295,t=n+(a<<6&4294967295|a>>>26),a=s+(n^(t|~r))+i[11]+3174756917&4294967295,s=t+(a<<10&4294967295|a>>>22),a=r+(t^(s|~n))+i[2]+718787259&4294967295,r=s+(a<<15&4294967295|a>>>17),a=n+(s^(r|~t))+i[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(r+(a<<21&4294967295|a>>>11))&4294967295,e.g[2]=e.g[2]+r&4294967295,e.g[3]=e.g[3]+s&4294967295}function nN(e,t){this.h=t;for(var n=[],i=!0,r=e.length-1;0<=r;r--){var s=0|e[r];i&&s==t||(n[r]=s,i=!1)}this.g=n}(p=tZ.prototype).Oa=function(e){this.M=e},p.ha=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():a.g(),this.C=this.u?e0(this.u):e0(a),this.g.onreadystatechange=A(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(e){t9(this,e);return}if(e=n||"",n=new Map(this.headers),i){if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else if("function"==typeof i.keys&&"function"==typeof i.get)for(let e of i.keys())n.set(e,i.get(e));else throw Error("Unknown input type for opt_headers: "+String(i))}for(let[s,a]of(i=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),r=S.FormData&&e instanceof S.FormData,!(0<=L(t2,t))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),n))this.g.setRequestHeader(s,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{var s;t7(this),0<this.B&&((this.L=(s=this.g,B&&"number"==typeof s.timeout&&void 0!==s.ontimeout))?(this.g.timeout=this.B,this.g.ontimeout=A(this.ua,this)):this.A=eO(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){t9(this,e)}},p.ua=function(){void 0!==T&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,eT(this,"timeout"),this.abort(8))},p.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,eT(this,"complete"),eT(this,"abort"),t5(this))},p.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),t5(this,!0)),tZ.$.N.call(this)},p.La=function(){this.s||(this.G||this.v||this.l?t6(this):this.kb())},p.kb=function(){t6(this)},p.isActive=function(){return!!this.g},p.da=function(){try{return 2<t3(this)?this.g.status:-1}catch(e){return -1}},p.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},p.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),tJ(t)}},p.Ia=function(){return this.m},p.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(p=ni.prototype).ra=8,p.H=1,p.Na=function(e){if(this.m){if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;let r=new e5(this,this.l,e),s=this.s;if(this.U&&(s?el(s=ea(s),this.U):s=this.U),null!==this.o||this.O||(r.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){t:{var i=this.j[n];if("__data__"in i.map&&"string"==typeof(i=i.map.__data__)){i=i.length;break t}i=void 0}if(void 0===i)break;if(4096<(t+=i)){t=n;break e}if(4096===t||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=nu(this,r,t),tv(n=tg(this.I),"RID",e),tv(n,"CVER",22),this.F&&tv(n,"X-HTTP-Session-Id",this.F),nh(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(ne(s)))+"&"+t:this.o&&nt(n,this.o,s)),tj(this.i,r),this.bb&&tv(n,"TYPE","init"),this.P?(tv(n,"$req",t),tv(n,"SID","null"),r.aa=!0,tt(r,n,null)):tt(r,n,t),this.H=2}}else 3==this.H&&(e?nl(this,e):0==this.j.length||tV(this.i)||nl(this))}},p.Ma=function(){if(this.u=null,ng(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=eX(A(this.jb,this),e)}},p.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,eH(10),ns(this),ng(this))},p.ib=function(){null!=this.v&&(this.v=null,ns(this),nd(this),eH(19))},p.pb=function(e){e?(this.l.info("Successfully pinged google.com"),eH(2)):(this.l.info("Failed to ping google.com"),eH(1))},p.isActive=function(){return!!this.h&&this.h.isActive(this)},(p=nT.prototype).Ba=function(){},p.Aa=function(){},p.za=function(){},p.ya=function(){},p.isActive=function(){return!0},p.Va=function(){},nS.prototype.g=function(e,t){return new n_(e,t)},N(n_,eb),n_.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;eH(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=nE(e,null,e.Y),no(e)},n_.prototype.close=function(){nr(this.g)},n_.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=e_(e),e=n);t.j.push(new tO(t.fb++,e)),3==t.H&&no(t)},n_.prototype.N=function(){this.g.h=null,delete this.j,nr(this.g),delete this.g,n_.$.N.call(this)},N(nC,e9),N(nI,e4),N(nk,nT),nk.prototype.Ba=function(){eT(this.g,"a")},nk.prototype.Aa=function(e){eT(this.g,new nC(e))},nk.prototype.za=function(e){eT(this.g,new nI)},nk.prototype.ya=function(){eT(this.g,"b")},N(nA,function(){this.blockSize=-1}),nA.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},nA.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,i=this.m,r=this.h,s=0;s<t;){if(0==r)for(;s<=n;)nD(this,e,s),s+=this.blockSize;if("string"==typeof e){for(;s<t;)if(i[r++]=e.charCodeAt(s++),r==this.blockSize){nD(this,i),r=0;break}}else for(;s<t;)if(i[r++]=e[s++],r==this.blockSize){nD(this,i),r=0;break}}this.h=r,this.i+=t},nA.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var i=0;32>i;i+=8)e[n++]=this.g[t]>>>i&255;return e};var nx={};function nL(e){var t;return -128<=e&&128>e?(t=function(e){return new nN([0|e],0>e?-1:0)},Object.prototype.hasOwnProperty.call(nx,e)?nx[e]:nx[e]=t(e)):new nN([0|e],0>e?-1:0)}function nR(e){if(isNaN(e)||!isFinite(e))return nP;if(0>e)return nj(nR(-e));for(var t=[],n=1,i=0;e>=n;i++)t[i]=e/n|0,n*=nO;return new nN(t,0)}var nO=4294967296,nP=nL(0),nM=nL(1),nV=nL(16777216);function nF(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function nU(e){return -1==e.h}function nj(e){for(var t=e.g.length,n=[],i=0;i<t;i++)n[i]=~e.g[i];return new nN(n,~e.h).add(nM)}function nq(e,t){return e.add(nj(t))}function nB(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function nK(e,t){this.g=e,this.h=t}function n$(e,t){if(nF(t))throw Error("division by zero");if(nF(e))return new nK(nP,nP);if(nU(e))return t=n$(nj(e),t),new nK(nj(t.g),nj(t.h));if(nU(t))return t=n$(e,nj(t)),new nK(nj(t.g),t.h);if(30<e.g.length){if(nU(e)||nU(t))throw Error("slowDivide_ only works with positive integers.");for(var n=nM,i=t;0>=i.X(e);)n=nz(n),i=nz(i);var r=nG(n,1),s=nG(i,1);for(i=nG(i,2),n=nG(n,2);!nF(i);){var a=s.add(i);0>=a.X(e)&&(r=r.add(n),s=a),i=nG(i,1),n=nG(n,1)}return t=nq(e,r.R(t)),new nK(r,t)}for(r=nP;0<=e.X(t);){for(i=48>=(i=Math.ceil(Math.log(n=Math.max(1,Math.floor(e.ea()/t.ea())))/Math.LN2))?1:Math.pow(2,i-48),a=(s=nR(n)).R(t);nU(a)||0<a.X(e);)n-=i,a=(s=nR(n)).R(t);nF(s)&&(s=nM),r=r.add(s),e=nq(e,a)}return new nK(r,e)}function nz(e){for(var t=e.g.length+1,n=[],i=0;i<t;i++)n[i]=e.D(i)<<1|e.D(i-1)>>>31;return new nN(n,e.h)}function nG(e,t){var n=t>>5;t%=32;for(var i=e.g.length-n,r=[],s=0;s<i;s++)r[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new nN(r,e.h)}(p=nN.prototype).ea=function(){if(nU(this))return-nj(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var i=this.D(n);e+=(0<=i?i:nO+i)*t,t*=nO}return e},p.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(nF(this))return"0";if(nU(this))return"-"+nj(this).toString(e);for(var t=nR(Math.pow(e,6)),n=this,i="";;){var r=n$(n,t).g,s=((0<(n=nq(n,r.R(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(nF(n=r))return s+i;for(;6>s.length;)s="0"+s;i=s+i}},p.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},p.X=function(e){return nU(e=nq(this,e))?-1:nF(e)?0:1},p.abs=function(){return nU(this)?nj(this):this},p.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0,r=0;r<=t;r++){var s=i+(65535&this.D(r))+(65535&e.D(r)),a=(s>>>16)+(this.D(r)>>>16)+(e.D(r)>>>16);i=a>>>16,s&=65535,a&=65535,n[r]=a<<16|s}return new nN(n,-2147483648&n[n.length-1]?-1:0)},p.R=function(e){if(nF(this)||nF(e))return nP;if(nU(this))return nU(e)?nj(this).R(nj(e)):nj(nj(this).R(e));if(nU(e))return nj(this.R(nj(e)));if(0>this.X(nV)&&0>e.X(nV))return nR(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var r=0;r<e.g.length;r++){var s=this.D(i)>>>16,a=65535&this.D(i),o=e.D(r)>>>16,l=65535&e.D(r);n[2*i+2*r]+=a*l,nB(n,2*i+2*r),n[2*i+2*r+1]+=s*l,nB(n,2*i+2*r+1),n[2*i+2*r+1]+=a*o,nB(n,2*i+2*r+1),n[2*i+2*r+2]+=s*o,nB(n,2*i+2*r+2)}for(i=0;i<t;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=t;i<2*t;i++)n[i]=0;return new nN(n,0)},p.gb=function(e){return n$(this,e).h},p.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)&e.D(i);return new nN(n,this.h&e.h)},p.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)|e.D(i);return new nN(n,this.h|e.h)},p.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)^e.D(i);return new nN(n,this.h^e.h)},nS.prototype.createWebChannel=nS.prototype.g,n_.prototype.send=n_.prototype.u,n_.prototype.open=n_.prototype.m,n_.prototype.close=n_.prototype.close,eY.NO_ERROR=0,eY.TIMEOUT=8,eY.HTTP_ERROR=6,eJ.COMPLETE="complete",e1.EventType=e2,e2.OPEN="a",e2.CLOSE="b",e2.ERROR="c",e2.MESSAGE="d",eb.prototype.listen=eb.prototype.O,tZ.prototype.listenOnce=tZ.prototype.P,tZ.prototype.getLastError=tZ.prototype.Sa,tZ.prototype.getLastErrorCode=tZ.prototype.Ia,tZ.prototype.getStatus=tZ.prototype.da,tZ.prototype.getResponseJson=tZ.prototype.Wa,tZ.prototype.getResponseText=tZ.prototype.ja,tZ.prototype.send=tZ.prototype.ha,tZ.prototype.setWithCredentials=tZ.prototype.Oa,nA.prototype.digest=nA.prototype.l,nA.prototype.reset=nA.prototype.reset,nA.prototype.update=nA.prototype.j,nN.prototype.add=nN.prototype.add,nN.prototype.multiply=nN.prototype.R,nN.prototype.modulo=nN.prototype.gb,nN.prototype.compare=nN.prototype.X,nN.prototype.toNumber=nN.prototype.ea,nN.prototype.toString=nN.prototype.toString,nN.prototype.getBits=nN.prototype.D,nN.fromNumber=nR,nN.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return nj(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var i=nR(Math.pow(n,8)),r=nP,s=0;s<t.length;s+=8){var a=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+a),n);8>a?(a=nR(Math.pow(n,a)),r=r.R(a).add(nR(o))):r=(r=r.R(i)).add(nR(o))}return r};var nQ=b.createWebChannelTransport=function(){return new nS},nH=b.getStatEventTarget=function(){return e$()},nW=b.ErrorCode=eY,nX=b.EventType=eJ,nY=b.Event=eB,nJ=b.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20};b.FetchXmlHttpFactory=tG;var nZ=b.WebChannel=e1,n0=b.XhrIo=tZ,n1=b.Md5=nA,n2=b.Integer=nN,n9=g("hPtJY");const n4="@firebase/firestore";/**
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
 */class n6{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}n6.UNAUTHENTICATED=new n6(null),n6.GOOGLE_CREDENTIALS=new n6("google-credentials-uid"),n6.FIRST_PARTY=new n6("first-party-uid"),n6.MOCK_USER=new n6("mock-user");/**
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
 */let n5="10.8.1";/**
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
 */const n7=new w.Logger("@firebase/firestore");function n3(){return n7.logLevel}function n8(e,...t){if(n7.logLevel<=w.LogLevel.DEBUG){let n=t.map(ii);n7.debug(`Firestore (${n5}): ${e}`,...n)}}function ie(e,...t){if(n7.logLevel<=w.LogLevel.ERROR){let n=t.map(ii);n7.error(`Firestore (${n5}): ${e}`,...n)}}function it(e,...t){if(n7.logLevel<=w.LogLevel.WARN){let n=t.map(ii);n7.warn(`Firestore (${n5}): ${e}`,...n)}}function ii(e){if("string"==typeof e)return e;try{/**
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
 */function ir(e="Unexpected state"){let t=`FIRESTORE (${n5}) INTERNAL ASSERTION FAILED: `+e;throw ie(t),Error(t)}/**
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
 */const is={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ia extends E.FirebaseError{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class io{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class il{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ih{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(n6.UNAUTHENTICATED))}shutdown(){}}class iu{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class ic{constructor(e){this.t=e,this.currentUser=n6.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i,i=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),r=new io;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new io,e.enqueueRetryable(()=>i(this.currentUser))};let s=()=>{let t=r;e.enqueueRetryable(async()=>{await t.promise,await i(this.currentUser)})},a=e=>{n8("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(n8("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new io)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(n8("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||ir(),new il(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||ir(),new n6(e)}}class id{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=n6.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);let e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ig{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new id(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(n6.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ip{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class im{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){let n=e=>{null!=e.error&&n8("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.R;return this.R=e.token,n8("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let i=e=>{n8("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>i(e)),setTimeout(()=>{if(!this.appCheck){let e=this.A.getImmediate({optional:!0});e?i(e):n8("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||ir(),this.R=e.token,new ip(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class iy{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";for(;n.length<20;){let i=/**
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
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(40);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let e=0;e<40;e++)n[e]=Math.floor(256*Math.random());return n}(0);for(let r=0;r<i.length;++r)n.length<20&&i[r]<t&&(n+=e.charAt(i[r]%e.length))}return n}}function iv(e,t){return e<t?-1:e>t?1:0}function iw(e,t,n){return e.length===t.length&&e.every((e,i)=>n(e,t[i]))}/**
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
 */class iE{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new ia(is.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new ia(is.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return iE.fromMillis(Date.now())}static fromDate(e){return iE.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new iE(t,Math.floor(1e6*(e-1e3*t)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?iv(this.nanoseconds,e.nanoseconds):iv(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){return String(this.seconds- -62135596800).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ib{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ib(e)}static min(){return new ib(new iE(0,0))}static max(){return new ib(new iE(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class iT{constructor(e,t,n){void 0===t?t=0:t>e.length&&ir(),void 0===n?n=e.length-t:n>e.length-t&&ir(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===iT.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof iT?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let i=0;i<n;i++){let n=e.get(i),r=t.get(i);if(n<r)return -1;if(n>r)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class iS extends iT{construct(e,t,n){return new iS(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new ia(is.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new iS(t)}static emptyPath(){return new iS([])}}const i_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class iC extends iT{construct(e,t,n){return new iC(e,t,n)}static isValidIdentifier(e){return i_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),iC.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new iC(["__name__"])}static fromServerFormat(e){let t=[],n="",i=0,r=()=>{if(0===n.length)throw new ia(is.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},s=!1;for(;i<e.length;){let t=e[i];if("\\"===t){if(i+1===e.length)throw new ia(is.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[i+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new ia(is.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,i+=2}else"`"===t?s=!s:"."!==t||s?n+=t:r(),i++}if(r(),s)throw new ia(is.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new iC(t)}static emptyPath(){return new iC([])}}/**
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
 */class iI{constructor(e){this.path=e}static fromPath(e){return new iI(iS.fromString(e))}static fromName(e){return new iI(iS.fromString(e).popFirst(5))}static empty(){return new iI(iS.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===iS.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return iS.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new iI(new iS(e.slice()))}}class ik{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new ik(ib.min(),iI.empty(),-1)}static max(){return new ik(ib.max(),iI.empty(),-1)}}class iA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function iD(e){if(e.code!==is.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;n8("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class iN{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ir(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new iN((n,i)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,i)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof iN?t:iN.resolve(t)}catch(e){return iN.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):iN.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):iN.reject(t)}static resolve(e){return new iN((t,n)=>{t(e)})}static reject(e){return new iN((t,n)=>{n(e)})}static waitFor(e){return new iN((t,n)=>{let i=0,r=0,s=!1;e.forEach(e=>{++i,e.next(()=>{++r,s&&r===i&&t()},e=>n(e))}),s=!0,r===i&&t()})}static or(e){let t=iN.resolve(!1);for(let n of e)t=t.next(e=>e?iN.resolve(e):n());return t}static forEach(e,t){let n=[];return e.forEach((e,i)=>{n.push(t.call(this,e,i))}),this.waitFor(n)}static mapArray(e,t){return new iN((n,i)=>{let r=e.length,s=Array(r),a=0;for(let o=0;o<r;o++){let l=o;t(e[l]).next(e=>{s[l]=e,++a===r&&n(s)},e=>i(e))}})}static doWhile(e,t){return new iN((n,i)=>{let r=()=>{!0===e()?t().next(()=>{r()},i):n()};r()})}}/**
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
 */class ix{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new io,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new iO(e,t.error)):this.V.resolve()},this.transaction.onerror=t=>{let n=iU(t.target.error);this.V.reject(new iO(e,n))}}static open(e,t,n,i){try{return new ix(t,e.transaction(i,n))}catch(e){throw new iO(t,e)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(n8("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){let e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){return new iM(this.transaction.objectStore(e))}}class iL{constructor(e,t,n){this.name=e,this.version=t,this.p=n,12.2===iL.S((0,E.getUA)())&&ie("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return n8("SimpleDb","Removing database:",e),iV(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!(0,E.isIndexedDBAvailable)())return!1;if(iL.C())return!0;let e=(0,E.getUA)(),t=iL.S(e),n=iL.v(e);return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||0<t&&t<10||0<n&&n<4.5)}static C(){var e;return void 0!==n9&&"YES"===(null===(e=n9.__PRIVATE_env)||void 0===e?void 0:e.F)}static M(e,t){return e.store(t)}static S(e){let t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i);return Number(t?t[1].split("_").slice(0,2).join("."):"-1")}static v(e){let t=e.match(/Android ([\d.]+)/i);return Number(t?t[1].split(".").slice(0,2).join("."):"-1")}async O(e){return this.db||(n8("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{let i=indexedDB.open(this.name,this.version);i.onsuccess=e=>{t(e.target.result)},i.onblocked=()=>{n(new iO(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=t=>{let i=t.target.error;"VersionError"===i.name?n(new ia(is.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===i.name?n(new ia(is.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+i)):n(new iO(e,i))},i.onupgradeneeded=e=>{n8("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);let t=e.target.result;this.p.N(t,i.transaction,e.oldVersion,this.version).next(()=>{n8("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=e=>this.B(e)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,i){let r="readonly"===t,s=0;for(;;){++s;try{this.db=await this.O(e);let t=ix.open(this.db,e,r?"readonly":"readwrite",n),s=i(t).next(e=>(t.g(),e)).catch(e=>(t.abort(e),iN.reject(e))).toPromise();return s.catch(()=>{}),await t.m,s}catch(t){let e="FirebaseError"!==t.name&&s<3;if(n8("SimpleDb","Transaction failed with error:",t.message,"Retrying:",e),this.close(),!e)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class iR{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return iV(this.k.delete())}}class iO extends ia{constructor(e,t){super(is.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function iP(e){return"IndexedDbTransactionError"===e.name}class iM{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(n8("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(n8("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),iV(n)}add(e){return n8("SimpleDb","ADD",this.store.name,e,e),iV(this.store.add(e))}get(e){return iV(this.store.get(e)).next(t=>(void 0===t&&(t=null),n8("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return n8("SimpleDb","DELETE",this.store.name,e),iV(this.store.delete(e))}count(){return n8("SimpleDb","COUNT",this.store.name),iV(this.store.count())}W(e,t){let n=this.options(e,t),i=n.index?this.store.index(n.index):this.store;if("function"==typeof i.getAll){let e=i.getAll(n.range);return new iN((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}})}{let e=this.cursor(n),t=[];return this.G(e,(e,n)=>{t.push(n)}).next(()=>t)}}j(e,t){let n=this.store.getAll(e,null===t?void 0:t);return new iN((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}})}H(e,t){n8("SimpleDb","DELETE ALL",this.store.name);let n=this.options(e,t);n.J=!1;let i=this.cursor(n);return this.G(i,(e,t,n)=>n.delete())}Y(e,t){let n;t?n=e:(n={},t=e);let i=this.cursor(n);return this.G(i,t)}Z(e){let t=this.cursor({});return new iN((n,i)=>{t.onerror=e=>{i(iU(e.target.error))},t.onsuccess=t=>{let i=t.target.result;i?e(i.primaryKey,i.value).next(e=>{e?i.continue():n()}):n()}})}G(e,t){let n=[];return new iN((i,r)=>{e.onerror=e=>{r(e.target.error)},e.onsuccess=e=>{let r=e.target.result;if(!r)return void i();let s=new iR(r),a=t(r.primaryKey,r.value,s);if(a instanceof iN){let e=a.catch(e=>(s.done(),iN.reject(e)));n.push(e)}s.isDone?i():null===s.$?r.continue():r.continue(s.$)}}).next(()=>iN.waitFor(n))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){let n=this.store.index(e.index);return e.J?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function iV(e){return new iN((t,n)=>{e.onsuccess=e=>{t(e.target.result)},e.onerror=e=>{n(iU(e.target.error))}})}let iF=!1;function iU(e){let t=iL.S((0,E.getUA)());if(t>=12.2&&t<13){let t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){let e=new ia("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return iF||(iF=!0,setTimeout(()=>{throw e},0)),e}}return e}/**
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
 */class ij{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.se(e),this.oe=e=>t.writeSequenceNumber(e))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.oe&&this.oe(e),e}}function iq(e){return 0===e&&1/e==-1/0}/**
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
 */function iB(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function iK(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}ij._e=-1;/**
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
 */class i${constructor(e,t){this.comparator=e,this.root=t||iG.EMPTY}insert(e,t){return new i$(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,iG.BLACK,null,null))}remove(e){return new i$(this.comparator,this.root.remove(e,this.comparator).copy(null,null,iG.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let i=this.comparator(e,n.key);if(0===i)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new iz(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new iz(this.root,e,this.comparator,!1)}getReverseIterator(){return new iz(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new iz(this.root,e,this.comparator,!0)}}class iz{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(0===r){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class iG{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:iG.RED,this.left=null!=i?i:iG.EMPTY,this.right=null!=r?r:iG.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,r){return new iG(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this,r=n(e,i.key);return(i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return iG.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,i=this;if(0>t(e,i.key))i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===t(e,i.key)){if(i.right.isEmpty())return iG.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,iG.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,iG.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){return Math.pow(2,this.check())<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ir();let e=this.left.check();if(e!==this.right.check())throw ir();return e+(this.isRed()?0:1)}}iG.EMPTY=null,iG.RED=!0,iG.BLACK=!1,iG.EMPTY=new class{constructor(){this.size=0}get key(){throw ir()}get value(){throw ir()}get color(){throw ir()}get left(){throw ir()}get right(){throw ir()}copy(e,t,n,i,r){return this}insert(e,t,n){return new iG(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class iQ{constructor(e){this.comparator=e,this.data=new i$(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new iH(this.data.getIterator())}getIteratorFrom(e){return new iH(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof iQ)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,i=n.getNext().key;if(0!==this.comparator(e,i))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new iQ(this.comparator);return t.data=e,t}}class iH{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class iW{constructor(e){this.fields=e,e.sort(iC.comparator)}static empty(){return new iW([])}unionWith(e){let t=new iQ(iC.comparator);for(let e of this.fields)t=t.add(e);for(let n of e)t=t.add(n);return new iW(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return iw(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
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
 */class iX extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class iY{constructor(e){this.binaryString=e}static fromBase64String(e){return new iY(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new iX("Invalid base64 string: "+e):e}}(e))}static fromUint8Array(e){return new iY(function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e))}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return iv(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}iY.EMPTY_BYTE_STRING=new iY("");const iJ=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function iZ(e){if(e||ir(),"string"==typeof e){let t=0,n=iJ.exec(e);if(n||ir(),n[1]){let e=n[1];t=Number(e=(e+"000000000").substr(0,9))}return{seconds:Math.floor(new Date(e).getTime()/1e3),nanos:t}}return{seconds:i0(e.seconds),nanos:i0(e.nanos)}}function i0(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function i1(e){return"string"==typeof e?iY.fromBase64String(e):iY.fromUint8Array(e)}/**
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
 */function i2(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function i9(e){let t=e.mapValue.fields.__previous_value__;return i2(t)?i9(t):t}function i4(e){let t=iZ(e.mapValue.fields.__local_write_time__.timestampValue);return new iE(t.seconds,t.nanos)}/**
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
 */class i6{constructor(e,t,n,i,r,s,a,o,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l}}class i5{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new i5("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof i5&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const i7={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function i3(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?i2(e)?4:ru(e)?9007199254740991:10:ir()}function i8(e,t){if(e===t)return!0;let n=i3(e);if(n!==i3(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return i4(e).isEqual(i4(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=iZ(e.timestampValue),i=iZ(t.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return i1(e.bytesValue).isEqual(i1(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return i0(e.geoPointValue.latitude)===i0(t.geoPointValue.latitude)&&i0(e.geoPointValue.longitude)===i0(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return i0(e.integerValue)===i0(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=i0(e.doubleValue),i=i0(t.doubleValue);return n===i?iq(n)===iq(i):isNaN(n)&&isNaN(i)}return!1}(e,t);case 9:return iw(e.arrayValue.values||[],t.arrayValue.values||[],i8);case 10:return function(e,t){let n=e.mapValue.fields||{},i=t.mapValue.fields||{};if(iB(n)!==iB(i))return!1;for(let e in n)if(n.hasOwnProperty(e)&&(void 0===i[e]||!i8(n[e],i[e])))return!1;return!0}(e,t);default:return ir()}}function re(e,t){return void 0!==(e.values||[]).find(e=>i8(e,t))}function rt(e,t){if(e===t)return 0;let n=i3(e),i=i3(t);if(n!==i)return iv(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return iv(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=i0(e.integerValue||e.doubleValue),i=i0(t.integerValue||t.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(e,t);case 3:return rn(e.timestampValue,t.timestampValue);case 4:return rn(i4(e),i4(t));case 5:return iv(e.stringValue,t.stringValue);case 6:return function(e,t){let n=i1(e),i=i1(t);return n.compareTo(i)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),i=t.split("/");for(let e=0;e<n.length&&e<i.length;e++){let t=iv(n[e],i[e]);if(0!==t)return t}return iv(n.length,i.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=iv(i0(e.latitude),i0(t.latitude));return 0!==n?n:iv(i0(e.longitude),i0(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let n=e.values||[],i=t.values||[];for(let e=0;e<n.length&&e<i.length;++e){let t=rt(n[e],i[e]);if(t)return t}return iv(n.length,i.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===i7.mapValue&&t===i7.mapValue)return 0;if(e===i7.mapValue)return 1;if(t===i7.mapValue)return -1;let n=e.fields||{},i=Object.keys(n),r=t.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let e=0;e<i.length&&e<s.length;++e){let t=iv(i[e],s[e]);if(0!==t)return t;let a=rt(n[i[e]],r[s[e]]);if(0!==a)return a}return iv(i.length,s.length)}(e.mapValue,t.mapValue);default:throw ir()}}function rn(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return iv(e,t);let n=iZ(e),i=iZ(t),r=iv(n.seconds,i.seconds);return 0!==r?r:iv(n.nanos,i.nanos)}function ri(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=iZ(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?i1(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,iI.fromName(t).toString()):"geoPointValue"in e?(n=e.geoPointValue,`geo(${n.latitude},${n.longitude})`):"arrayValue"in e?function(e){let t="[",n=!0;for(let i of e.values||[])n?n=!1:t+=",",t+=ri(i);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),n="{",i=!0;for(let r of t)i?i=!1:n+=",",n+=`${r}:${ri(e.fields[r])}`;return n+"}"}(e.mapValue):ir()}function rr(e){return!!e&&"integerValue"in e}function rs(e){return!!e&&"arrayValue"in e}function ra(e){return!!e&&"nullValue"in e}function ro(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function rl(e){return!!e&&"mapValue"in e}function rh(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return iK(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=rh(n)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=rh(e.arrayValue.values[n]);return t}return Object.assign({},e)}function ru(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
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
 */class rc{constructor(e){this.value=e}static empty(){return new rc({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!rl(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=rh(t)}setAll(e){let t=iC.emptyPath(),n={},i=[];e.forEach((e,r)=>{if(!t.isImmediateParentOf(r)){let e=this.getFieldsMap(t);this.applyChanges(e,n,i),n={},i=[],t=r.popLast()}e?n[r.lastSegment()]=rh(e):i.push(r.lastSegment())});let r=this.getFieldsMap(t);this.applyChanges(r,n,i)}delete(e){let t=this.field(e.popLast());rl(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return i8(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];rl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){for(let i of(iK(t,(t,n)=>e[t]=n),n))delete e[i]}clone(){return new rc(rh(this.value))}}/**
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
 */class rd{constructor(e,t,n,i,r,s,a){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=r,this.data=s,this.documentState=a}static newInvalidDocument(e){return new rd(e,0,ib.min(),ib.min(),ib.min(),rc.empty(),0)}static newFoundDocument(e,t,n,i){return new rd(e,1,t,ib.min(),n,i,0)}static newNoDocument(e,t){return new rd(e,2,t,ib.min(),ib.min(),rc.empty(),0)}static newUnknownDocument(e,t){return new rd(e,3,t,ib.min(),ib.min(),rc.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(ib.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rc.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rc.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ib.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof rd&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new rd(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class rf{constructor(e,t){this.position=e,this.inclusive=t}}function rg(e,t,n){let i=0;for(let r=0;r<e.position.length;r++){let s=t[r],a=e.position[r];if(i=s.field.isKeyField()?iI.comparator(iI.fromName(a.referenceValue),n.key):rt(a,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return i}function rp(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!i8(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class rm{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
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
 */class ry{}class rv extends ry{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new rT(e,t,n):"array-contains"===t?new rI(e,n):"in"===t?new rk(e,n):"not-in"===t?new rA(e,n):"array-contains-any"===t?new rD(e,n):new rv(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new rS(e,n):new r_(e,n)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(rt(t,this.value)):null!==t&&i3(this.value)===i3(t)&&this.matchesComparison(rt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return ir()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class rw extends ry{constructor(e,t){super(),this.filters=e,this.op=t,this.ue=null}static create(e,t){return new rw(e,t)}matches(e){return rE(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ue||(this.ue=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function rE(e){return"and"===e.op}function rb(e){for(let t of e.filters)if(t instanceof rw)return!1;return!0}class rT extends rv{constructor(e,t,n){super(e,t,n),this.key=iI.fromName(n.referenceValue)}matches(e){let t=iI.comparator(e.key,this.key);return this.matchesComparison(t)}}class rS extends rv{constructor(e,t){super(e,"in",t),this.keys=rC("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class r_ extends rv{constructor(e,t){super(e,"not-in",t),this.keys=rC("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function rC(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>iI.fromName(e.referenceValue))}class rI extends rv{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return rs(t)&&re(t.arrayValue,this.value)}}class rk extends rv{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&re(this.value.arrayValue,t)}}class rA extends rv{constructor(e,t){super(e,"not-in",t)}matches(e){if(re(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!re(this.value.arrayValue,t)}}class rD extends rv{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!rs(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>re(this.value.arrayValue,e))}}/**
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
 */class rN{constructor(e,t=null,n=[],i=[],r=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=a,this.ce=null}}function rx(e,t=null,n=[],i=[],r=null,s=null,a=null){return new rN(e,t,n,i,r,s,a)}function rL(e){if(null===e.ce){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:"+e.filters.map(e=>(function e(t){if(t instanceof rv)return t.field.canonicalString()+t.op.toString()+ri(t.value);if(rb(t)&&rE(t))return t.filters.map(t=>e(t)).join(",");{let n=t.filters.map(t=>e(t)).join(",");return`${t.op}(${n})`}})(e)).join(",")+"|ob:"+e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==e.limit||(t+="|l:"+e.limit),e.startAt&&(t+="|lb:"+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(e=>ri(e)).join(",")),e.endAt&&(t+="|ub:"+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(e=>ri(e)).join(",")),e.ce=t}return e.ce}function rR(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let r=0;r<e.orderBy.length;r++){var n,i;if(n=e.orderBy[r],i=t.orderBy[r],!(n.dir===i.dir&&n.field.isEqual(i.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!function e(t,n){return t instanceof rv?n instanceof rv&&t.op===n.op&&t.field.isEqual(n.field)&&i8(t.value,n.value):t instanceof rw?n instanceof rw&&t.op===n.op&&t.filters.length===n.filters.length&&t.filters.reduce((t,i,r)=>t&&e(i,n.filters[r]),!0):void ir()}(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!rp(e.startAt,t.startAt)&&rp(e.endAt,t.endAt)}function rO(e){return iI.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/**
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
 */class rP{constructor(e,t=null,n=[],i=[],r=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=a,this.endAt=o,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function rM(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function rV(e){if(null===e.le){let t;e.le=[];let n=new Set;for(let t of e.explicitOrderBy)e.le.push(t),n.add(t.field.canonicalString());let i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(t=new iQ(iC.comparator),e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t).forEach(t=>{n.has(t.canonicalString())||t.isKeyField()||e.le.push(new rm(t,i))}),n.has(iC.keyField().canonicalString())||e.le.push(new rm(iC.keyField(),i))}return e.le}function rF(e){return e.he||(e.he=function(e,t){if("F"===e.limitType)return rx(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{let t="desc"===e.dir?"asc":"desc";return new rm(e.field,t)});let n=e.endAt?new rf(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new rf(e.startAt.position,e.startAt.inclusive):null;return rx(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}}(e,rV(e))),e.he}function rU(e,t,n){return new rP(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function rj(e,t){return rR(rF(e),rF(t))&&e.limitType===t.limitType}function rq(e){return`${rL(rF(e))}|lt:${e.limitType}`}function rB(e){var t;let n;return`Query(target=${n=(t=rF(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof rv?`${t.field.canonicalString()} ${t.op} ${ri(t.value)}`:t instanceof rw?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(n+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>ri(e)).join(",")),t.endAt&&(n+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>ri(e)).join(",")),`Target(${n})`}; limitType=${e.limitType})`}function rK(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):iI.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(let n of rV(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,n){let i=rg(e,t,n);return e.inclusive?i<=0:i<0}(e.startAt,rV(e),t))&&(!e.endAt||!!function(e,t,n){let i=rg(e,t,n);return e.inclusive?i>=0:i>0}(e.endAt,rV(e),t))}function r$(e){return(t,n)=>{let i=!1;for(let r of rV(e)){let e=function(e,t,n){let i=e.field.isKeyField()?iI.comparator(t.key,n.key):function(e,t,n){let i=t.data.field(e),r=n.data.field(e);return null!==i&&null!==r?rt(i,r):ir()}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return -1*i;default:return ir()}}(r,t,n);if(0!==e)return e;i=i||r.field.isKeyField()}return 0}}/**
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
 */class rz{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[t,i]of n)if(this.equalsFn(t,e))return i}}has(e){return void 0!==this.get(e)}set(e,t){let n=this.mapKeyFn(e),i=this.inner[n];if(void 0===i)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],e))return void(i[n]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return 1===n.length?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){iK(this.inner,(t,n)=>{for(let[t,i]of n)e(t,i)})}isEmpty(){return function(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(this.inner)}size(){return this.innerSize}}/**
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
 */const rG=new i$(iI.comparator),rQ=new i$(iI.comparator);function rH(...e){let t=rQ;for(let n of e)t=t.insert(n.key,n);return t}function rW(){return new rz(e=>e.toString(),(e,t)=>e.isEqual(t))}new i$(iI.comparator);const rX=new iQ(iI.comparator);function rY(...e){let t=rX;for(let n of e)t=t.add(n);return t}const rJ=new iQ(iv);/**
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
 */class rZ{constructor(){this._=void 0}}class r0 extends rZ{}class r1 extends rZ{constructor(e){super(),this.elements=e}}function r2(e,t){let n=r7(t);for(let t of e.elements)n.some(e=>i8(e,t))||n.push(t);return{arrayValue:{values:n}}}class r9 extends rZ{constructor(e){super(),this.elements=e}}function r4(e,t){let n=r7(t);for(let t of e.elements)n=n.filter(e=>!i8(e,t));return{arrayValue:{values:n}}}class r6 extends rZ{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function r5(e){return i0(e.integerValue||e.doubleValue)}function r7(e){return rs(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class r3{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new r3}static exists(e){return new r3(void 0,e)}static updateTime(e){return new r3(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function r8(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class se{}function st(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new sh(e.key,r3.none()):new sr(e.key,e.data,r3.none());{let n=e.data,i=rc.empty(),r=new iQ(iC.comparator);for(let e of t.fields)if(!r.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?i.delete(e):i.set(e,t),r=r.add(e)}return new ss(e.key,i,new iW(r.toArray()),r3.none())}}function sn(e,t,n,i){return e instanceof sr?function(e,t,n,i){if(!r8(e.precondition,t))return n;let r=e.value.clone(),s=sl(e.fieldTransforms,i,t);return r.setAll(s),t.convertToFoundDocument(t.version,r).setHasLocalMutations(),null}(e,t,n,i):e instanceof ss?function(e,t,n,i){if(!r8(e.precondition,t))return n;let r=sl(e.fieldTransforms,i,t),s=t.data;return(s.setAll(sa(e)),s.setAll(r),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,i):r8(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}function si(e,t){var n,i;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,i=t.fieldTransforms,!!(void 0===n&&void 0===i||!(!n||!i)&&iw(n,i,(e,t)=>{var n,i;return e.field.isEqual(t.field)&&(n=e.transform,i=t.transform,n instanceof r1&&i instanceof r1||n instanceof r9&&i instanceof r9?iw(n.elements,i.elements,i8):n instanceof r6&&i instanceof r6?i8(n.Ie,i.Ie):n instanceof r0&&i instanceof r0)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class sr extends se{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ss extends se{constructor(e,t,n,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function sa(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let i=e.data.field(n);t.set(n,i)}}),t}function so(e,t,n){var i;let r=new Map;e.length===n.length||ir();for(let s=0;s<n.length;s++){let a=e[s],o=a.transform,l=t.data.field(a.field);r.set(a.field,(i=n[s],o instanceof r1?r2(o,l):o instanceof r9?r4(o,l):i))}return r}function sl(e,t,n){let i=new Map;for(let r of e){let e=r.transform,s=n.data.field(r.field);i.set(r.field,e instanceof r0?function(e,t){let n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&i2(t)&&(t=i9(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(t,s):e instanceof r1?r2(e,s):e instanceof r9?r4(e,s):function(e,t){var n,i;let r=(n=e,i=t,n instanceof r6?rr(i)||i&&"doubleValue"in i?i:{integerValue:0}:null),s=r5(r)+r5(e.Ie);return rr(r)&&rr(e.Ie)?{integerValue:""+s}:/**
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
 */function(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:iq(t)?"-0":t}}(e.serializer,s)}(e,s))}return i}class sh extends se{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class su{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let r=this.mutations[t];if(r.key.isEqual(e.key)){var i;i=n[t],r instanceof sr?function(e,t,n){let i=e.value.clone(),r=so(e.fieldTransforms,t,n.transformResults);i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(r,e,i):r instanceof ss?function(e,t,n){if(!r8(e.precondition,t))return void t.convertToUnknownDocument(n.version);let i=so(e.fieldTransforms,t,n.transformResults),r=t.data;r.setAll(sa(e)),r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(r,e,i):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,i)}}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=sn(n,e,t,this.localWriteTime));for(let n of this.mutations)n.key.isEqual(e.key)&&(t=sn(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=rW();return this.mutations.forEach(i=>{let r=e.get(i.key),s=r.overlayedDocument,a=this.applyToLocalView(s,r.mutatedFields),o=st(s,a=t.has(i.key)?null:a);null!==o&&n.set(i.key,o),s.isValidDocument()||s.convertToNoDocument(ib.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),rY())}isEqual(e){return this.batchId===e.batchId&&iw(this.mutations,e.mutations,(e,t)=>si(e,t))&&iw(this.baseMutations,e.baseMutations,(e,t)=>si(e,t))}}/**
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
 */class sc{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class sd{constructor(e,t){this.count=e,this.unchangedNames=t}}function sf(e){if(void 0===e)return ie("GRPC error has no .code"),is.UNKNOWN;switch(e){case o.OK:return is.OK;case o.CANCELLED:return is.CANCELLED;case o.UNKNOWN:return is.UNKNOWN;case o.DEADLINE_EXCEEDED:return is.DEADLINE_EXCEEDED;case o.RESOURCE_EXHAUSTED:return is.RESOURCE_EXHAUSTED;case o.INTERNAL:return is.INTERNAL;case o.UNAVAILABLE:return is.UNAVAILABLE;case o.UNAUTHENTICATED:return is.UNAUTHENTICATED;case o.INVALID_ARGUMENT:return is.INVALID_ARGUMENT;case o.NOT_FOUND:return is.NOT_FOUND;case o.ALREADY_EXISTS:return is.ALREADY_EXISTS;case o.PERMISSION_DENIED:return is.PERMISSION_DENIED;case o.FAILED_PRECONDITION:return is.FAILED_PRECONDITION;case o.ABORTED:return is.ABORTED;case o.OUT_OF_RANGE:return is.OUT_OF_RANGE;case o.UNIMPLEMENTED:return is.UNIMPLEMENTED;case o.DATA_LOSS:return is.DATA_LOSS;default:return ir()}}(l=o||(o={}))[l.OK=0]="OK",l[l.CANCELLED=1]="CANCELLED",l[l.UNKNOWN=2]="UNKNOWN",l[l.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",l[l.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",l[l.NOT_FOUND=5]="NOT_FOUND",l[l.ALREADY_EXISTS=6]="ALREADY_EXISTS",l[l.PERMISSION_DENIED=7]="PERMISSION_DENIED",l[l.UNAUTHENTICATED=16]="UNAUTHENTICATED",l[l.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",l[l.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",l[l.ABORTED=10]="ABORTED",l[l.OUT_OF_RANGE=11]="OUT_OF_RANGE",l[l.UNIMPLEMENTED=12]="UNIMPLEMENTED",l[l.INTERNAL=13]="INTERNAL",l[l.UNAVAILABLE=14]="UNAVAILABLE",l[l.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const sg=new n2([4294967295,4294967295],0);function sp(e){let t=(new TextEncoder).encode(e),n=new n1;return n.update(t),new Uint8Array(n.digest())}function sm(e){let t=new DataView(e.buffer),n=t.getUint32(0,!0),i=t.getUint32(4,!0),r=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new n2([n,i],0),new n2([r,s],0)]}class sy{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new sv(`Invalid padding: ${t}`);if(n<0||e.length>0&&0===this.hashCount)throw new sv(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new sv(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ee=n2.fromNumber(this.Te)}de(e,t,n){let i=e.add(t.multiply(n2.fromNumber(n)));return 1===i.compare(sg)&&(i=new n2([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Te)return!1;let[t,n]=sm(sp(e));for(let e=0;e<this.hashCount;e++){let i=this.de(t,n,e);if(!this.Ae(i))return!1}return!0}static create(e,t,n){let i=new sy(new Uint8Array(Math.ceil(e/8)),e%8==0?0:8-e%8,t);return n.forEach(e=>i.insert(e)),i}insert(e){if(0===this.Te)return;let[t,n]=sm(sp(e));for(let e=0;e<this.hashCount;e++){let i=this.de(t,n,e);this.Re(i)}}Re(e){this.bitmap[Math.floor(e/8)]|=1<<e%8}}class sv extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class sw{constructor(e,t,n,i,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,n){let i=new Map;return i.set(e,sE.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new sw(ib.min(),i,new i$(iv),rG,rY())}}class sE{constructor(e,t,n,i,r){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new sE(n,t,rY(),rY(),rY())}}/**
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
 */class sb{constructor(e,t,n,i){this.Ve=e,this.removedTargetIds=t,this.key=n,this.me=i}}class sT{constructor(e,t){this.targetId=e,this.fe=t}}class sS{constructor(e,t,n=iY.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class s_{constructor(){this.ge=0,this.pe=sk(),this.ye=iY.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return 0!==this.ge}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=rY(),t=rY(),n=rY();return this.pe.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:ir()}}),new sE(this.ye,this.we,e,t,n)}Fe(){this.Se=!1,this.pe=sk()}Me(e,t){this.Se=!0,this.pe=this.pe.insert(e,t)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,this.ge>=0||ir()}Be(){this.Se=!0,this.we=!0}}class sC{constructor(e){this.Le=e,this.ke=new Map,this.qe=rG,this.Qe=sI(),this.Ke=new i$(iv)}$e(e){for(let t of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(t,e.me):this.We(t,e.key,e.me);for(let t of e.removedTargetIds)this.We(t,e.key,e.me)}Ge(e){this.forEachTarget(e,t=>{let n=this.ze(t);switch(e.state){case 0:this.je(t)&&n.Ce(e.resumeToken);break;case 1:n.Ne(),n.be||n.Fe(),n.Ce(e.resumeToken);break;case 2:n.Ne(),n.be||this.removeTarget(t);break;case 3:this.je(t)&&(n.Be(),n.Ce(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),n.Ce(e.resumeToken));break;default:ir()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ke.forEach((e,n)=>{this.je(n)&&t(n)})}Je(e){let t=e.targetId,n=e.fe.count,i=this.Ye(t);if(i){let r=i.target;if(rO(r)){if(0===n){let e=new iI(r.path);this.We(t,e,rd.newNoDocument(e,ib.min()))}else 1===n||ir()}else{let i=this.Ze(t);if(i!==n){let n=this.Xe(e),r=n?this.et(n,e,i):1;0!==r&&(this.He(t),this.Ke=this.Ke.insert(t,2===r?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch"))}}}}Xe(e){let t,n;let i=e.fe.unchangedNames;if(!i||!i.bits)return null;let{bits:{bitmap:r="",padding:s=0},hashCount:a=0}=i;try{t=i1(r).toUint8Array()}catch(e){if(e instanceof iX)return it("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{n=new sy(t,s,a)}catch(e){return it(e instanceof sv?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===n.Te?null:n}et(e,t,n){return t.fe.count===n-this.rt(e,t.targetId)?0:2}rt(e,t){let n=this.Le.getRemoteKeysForTarget(t),i=0;return n.forEach(n=>{let r=this.Le.nt(),s=`projects/${r.projectId}/databases/${r.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.We(t,n,null),i++)}),i}it(e){let t=new Map;this.ke.forEach((n,i)=>{let r=this.Ye(i);if(r){if(n.current&&rO(r.target)){let t=new iI(r.target.path);null!==this.qe.get(t)||this.st(i,t)||this.We(i,t,rd.newNoDocument(t,e))}n.De&&(t.set(i,n.ve()),n.Fe())}});let n=rY();this.Qe.forEach((e,t)=>{let i=!0;t.forEachWhile(e=>{let t=this.Ye(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(i=!1,!1)}),i&&(n=n.add(e))}),this.qe.forEach((t,n)=>n.setReadTime(e));let i=new sw(e,t,this.Ke,this.qe,n);return this.qe=rG,this.Qe=sI(),this.Ke=new i$(iv),i}Ue(e,t){if(!this.je(e))return;let n=this.st(e,t.key)?2:0;this.ze(e).Me(t.key,n),this.qe=this.qe.insert(t.key,t),this.Qe=this.Qe.insert(t.key,this.ot(t.key).add(e))}We(e,t,n){if(!this.je(e))return;let i=this.ze(e);this.st(e,t)?i.Me(t,1):i.xe(t),this.Qe=this.Qe.insert(t,this.ot(t).delete(e)),n&&(this.qe=this.qe.insert(t,n))}removeTarget(e){this.ke.delete(e)}Ze(e){let t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let t=this.ke.get(e);return t||(t=new s_,this.ke.set(e,t)),t}ot(e){let t=this.Qe.get(e);return t||(t=new iQ(iv),this.Qe=this.Qe.insert(e,t)),t}je(e){let t=null!==this.Ye(e);return t||n8("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){let t=this.ke.get(e);return t&&t.be?null:this.Le._t(e)}He(e){this.ke.set(e,new s_),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}st(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function sI(){return new i$(iI.comparator)}function sk(){return new i$(iI.comparator)}const sA={asc:"ASCENDING",desc:"DESCENDING"},sD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},sN={and:"AND",or:"OR"};class sx{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function sL(e,t){return e.useProto3Json||null==t?t:{value:t}}function sR(e){return e||ir(),ib.fromTimestamp(function(e){let t=iZ(e);return new iE(t.seconds,t.nanos)}(e))}function sO(e,t){let n=new iS(["projects",e.projectId,"databases",e.database]).child("documents");return void 0===t?n:n.child(t)}function sP(e){let t=iS.fromString(e);return sB(t)||ir(),t}function sM(e,t){let n=sP(t);if(n.get(1)!==e.databaseId.projectId)throw new ia(is.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new ia(is.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new iI(sU(n))}function sV(e,t){return sO(e.databaseId,t).canonicalString()}function sF(e){return new iS(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function sU(e){return e.length>4&&"documents"===e.get(4)||ir(),e.popFirst(5)}function sj(e){return{fieldPath:e.canonicalString()}}function sq(e){return iC.fromServerFormat(e.fieldPath)}function sB(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
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
 */class sK{constructor(e,t,n,i,r=ib.min(),s=ib.min(),a=iY.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=o}withSequenceNumber(e){return new sK(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new sK(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new sK(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new sK(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class s${constructor(e){this.ct=e}}/**
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
 */class sz{constructor(){}Pt(e,t){this.It(e,t),t.Tt()}It(e,t){if("nullValue"in e)this.Et(t,5);else if("booleanValue"in e)this.Et(t,10),t.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(t,15),t.dt(i0(e.integerValue));else if("doubleValue"in e){let n=i0(e.doubleValue);isNaN(n)?this.Et(t,13):(this.Et(t,15),iq(n)?t.dt(0):t.dt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Et(t,20),"string"==typeof n?t.At(n):(t.At(`${n.seconds||""}`),t.dt(n.nanos||0))}else if("stringValue"in e)this.Rt(e.stringValue,t),this.Vt(t);else if("bytesValue"in e)this.Et(t,30),t.ft(i1(e.bytesValue)),this.Vt(t);else if("referenceValue"in e)this.gt(e.referenceValue,t);else if("geoPointValue"in e){let n=e.geoPointValue;this.Et(t,45),t.dt(n.latitude||0),t.dt(n.longitude||0)}else"mapValue"in e?ru(e)?this.Et(t,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,t),this.Vt(t)):"arrayValue"in e?(this.wt(e.arrayValue,t),this.Vt(t)):ir()}Rt(e,t){this.Et(t,25),this.St(e,t)}St(e,t){t.At(e)}yt(e,t){let n=e.fields||{};for(let e of(this.Et(t,55),Object.keys(n)))this.Rt(e,t),this.It(n[e],t)}wt(e,t){let n=e.values||[];for(let e of(this.Et(t,50),n))this.It(e,t)}gt(e,t){this.Et(t,37),iI.fromName(e).path.forEach(e=>{this.Et(t,60),this.St(e,t)})}Et(e,t){e.dt(t)}Vt(e){e.dt(2)}}sz.bt=new sz;/**
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
 */class sG{constructor(){this._n=new sQ}addToCollectionParentIndex(e,t){return this._n.add(t),iN.resolve()}getCollectionParents(e,t){return iN.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return iN.resolve()}deleteFieldIndex(e,t){return iN.resolve()}deleteAllFieldIndexes(e){return iN.resolve()}createTargetIndexes(e,t){return iN.resolve()}getDocumentsMatchingTarget(e,t){return iN.resolve(null)}getIndexType(e,t){return iN.resolve(0)}getFieldIndexes(e,t){return iN.resolve([])}getNextCollectionGroupToUpdate(e){return iN.resolve(null)}getMinOffset(e,t){return iN.resolve(ik.min())}getMinOffsetFromCollectionGroup(e,t){return iN.resolve(ik.min())}updateCollectionGroup(e,t,n){return iN.resolve()}updateIndexEntries(e,t){return iN.resolve()}}class sQ{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new iQ(iS.comparator),r=!i.has(n);return this.index[t]=i.add(n),r}has(e){let t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new iQ(iS.comparator)).toArray()}}new Uint8Array(0);class sH{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new sH(e,sH.DEFAULT_COLLECTION_PERCENTILE,sH.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */sH.DEFAULT_COLLECTION_PERCENTILE=10,sH.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,sH.DEFAULT=new sH(41943040,sH.DEFAULT_COLLECTION_PERCENTILE,sH.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),sH.DISABLED=new sH(-1,0,0);/**
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
 */class sW{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new sW(0)}static Bn(){return new sW(-1)}}/**
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
 */class sX{constructor(){this.changes=new rz(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,rd.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?iN.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class sY{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class sJ{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(n=i,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&sn(n.mutation,e,iW.empty(),iE.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,rY()).next(()=>t))}getLocalViewOfDocuments(e,t,n=rY()){let i=rW();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,n).next(e=>{let t=rH();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let n=rW();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,rY()))}populateOverlays(e,t,n){let i=[];return n.forEach(e=>{t.has(e)||i.push(e)}),this.documentOverlayCache.getOverlays(e,i).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,i){let r=rG,s=rW(),a=rW();return t.forEach((e,t)=>{let a=n.get(t.key);i.has(t.key)&&(void 0===a||a.mutation instanceof ss)?r=r.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),sn(a.mutation,t,a.mutation.getFieldMask(),iE.now())):s.set(t.key,iW.empty())}),this.recalculateAndSaveOverlays(e,r).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return a.set(e,new sY(t,null!==(n=s.get(e))&&void 0!==n?n:null))}),a))}recalculateAndSaveOverlays(e,t){let n=rW(),i=new i$((e,t)=>e-t),r=rY();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let r of e)r.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let a=n.get(e)||iW.empty();a=r.applyToLocalView(s,a),n.set(e,a);let o=(i.get(r.batchId)||rY()).add(e);i=i.insert(r.batchId,o)})}).next(()=>{let s=[],a=i.getReverseIterator();for(;a.hasNext();){let i=a.getNext(),o=i.key,l=i.value,h=rW();l.forEach(e=>{if(!r.has(e)){let i=st(t.get(e),n.get(e));null!==i&&h.set(e,i),r=r.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,o,h))}return iN.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,i){return iI.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):null!==t.collectionGroup?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,i):this.getDocumentsMatchingCollectionQuery(e,t,n,i)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next(r=>{let s=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-r.size):iN.resolve(rW()),a=-1,o=r;return s.next(t=>iN.forEach(t,(t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),r.get(t)?iN.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,r)).next(()=>this.computeViews(e,o,t,rY())).next(e=>{let t;return{batchId:a,changes:(t=rQ,e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t)}}))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new iI(t)).next(e=>{let t=rH();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,i){let r=t.collectionGroup,s=rH();return this.indexManager.getCollectionParents(e,r).next(a=>iN.forEach(a,a=>{let o=new rP(a.child(r),null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt);return this.getDocumentsMatchingCollectionQuery(e,o,n,i).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,n,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(s=>(r=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r,i))).next(e=>{r.forEach((t,n)=>{let i=n.getKey();null===e.get(i)&&(e=e.insert(i,rd.newInvalidDocument(i)))});let n=rH();return e.forEach((e,i)=>{let s=r.get(e);void 0!==s&&sn(s.mutation,i,iW.empty(),iE.now()),rK(t,i)&&(n=n.insert(e,i))}),n})}}/**
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
 */class sZ{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,t){return iN.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,{id:t.id,version:t.version,createTime:sR(t.createTime)}),iN.resolve()}getNamedQuery(e,t){return iN.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,{name:t.name,query:function(e){let t=function(e){var t;let n,i=function(e){let t=sP(e);return 4===t.length?iS.emptyPath():sU(t)}(e.parent),r=e.structuredQuery,s=r.from?r.from.length:0,a=null;if(s>0){1===s||ir();let e=r.from[0];e.allDescendants?a=e.collectionId:i=i.child(e.collectionId)}let o=[];r.where&&(o=function(e){var t;let n=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=sq(e.unaryFilter.field);return rv.create(t,"==",{doubleValue:NaN});case"IS_NULL":let n=sq(e.unaryFilter.field);return rv.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let i=sq(e.unaryFilter.field);return rv.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let r=sq(e.unaryFilter.field);return rv.create(r,"!=",{nullValue:"NULL_VALUE"});default:return ir()}}(t):void 0!==t.fieldFilter?rv.create(sq(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ir()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?rw.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return ir()}}(t.compositeFilter.op)):ir()}(e);return n instanceof rw&&rb(t=n)&&rE(t)?n.getFilters():[n]}(r.where));let l=[];r.orderBy&&(l=r.orderBy.map(e=>new rm(sq(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let h=null;r.limit&&(h=null==(n="object"==typeof(t=r.limit)?t.value:t)?null:n);let u=null;r.startAt&&(u=function(e){let t=!!e.before;return new rf(e.values||[],t)}(r.startAt));let c=null;return r.endAt&&(c=function(e){let t=!e.before;return new rf(e.values||[],t)}(r.endAt)),new rP(i,a,l,o,h,"F",u,c)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?rU(t,t.limit,"L"):t}(t.bundledQuery),readTime:sR(t.readTime)}),iN.resolve()}}/**
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
 */class s0{constructor(){this.overlays=new i$(iI.comparator),this.hr=new Map}getOverlay(e,t){return iN.resolve(this.overlays.get(t))}getOverlays(e,t){let n=rW();return iN.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,i)=>{this.ht(e,t,i)}),iN.resolve()}removeOverlaysForBatchId(e,t,n){let i=this.hr.get(n);return void 0!==i&&(i.forEach(e=>this.overlays=this.overlays.remove(e)),this.hr.delete(n)),iN.resolve()}getOverlaysForCollection(e,t,n){let i=rW(),r=t.length+1,s=new iI(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===r&&e.largestBatchId>n&&i.set(e.getKey(),e)}return iN.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let r=new i$((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=r.get(e.largestBatchId);null===t&&(t=rW(),r=r.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=rW(),o=r.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=i)););return iN.resolve(a)}ht(e,t,n){let i=this.overlays.get(n.key);if(null!==i){let e=this.hr.get(i.largestBatchId).delete(n.key);this.hr.set(i.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new sc(t,n));let r=this.hr.get(t);void 0===r&&(r=rY(),this.hr.set(t,r)),this.hr.set(t,r.add(n.key))}}/**
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
 */class s1{constructor(){this.Pr=new iQ(s2.Ir),this.Tr=new iQ(s2.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,t){let n=new s2(e,t);this.Pr=this.Pr.add(n),this.Tr=this.Tr.add(n)}dr(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Ar(new s2(e,t))}Rr(e,t){e.forEach(e=>this.removeReference(e,t))}Vr(e){let t=new iI(new iS([])),n=new s2(t,e),i=new s2(t,e+1),r=[];return this.Tr.forEachInRange([n,i],e=>{this.Ar(e),r.push(e.key)}),r}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){let t=new iI(new iS([])),n=new s2(t,e),i=new s2(t,e+1),r=rY();return this.Tr.forEachInRange([n,i],e=>{r=r.add(e.key)}),r}containsKey(e){let t=new s2(e,0),n=this.Pr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class s2{constructor(e,t){this.key=e,this.pr=t}static Ir(e,t){return iI.comparator(e.key,t.key)||iv(e.pr,t.pr)}static Er(e,t){return iv(e.pr,t.pr)||iI.comparator(e.key,t.key)}}/**
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
 */class s9{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new iQ(s2.Ir)}checkEmpty(e){return iN.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,i){let r=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new su(r,t,n,i);for(let t of(this.mutationQueue.push(s),i))this.wr=this.wr.add(new s2(t.key,r)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return iN.resolve(s)}lookupMutationBatch(e,t){return iN.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.br(t+1),i=n<0?0:n;return iN.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return iN.resolve(0===this.mutationQueue.length?-1:this.yr-1)}getAllMutationBatches(e){return iN.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new s2(t,0),i=new s2(t,Number.POSITIVE_INFINITY),r=[];return this.wr.forEachInRange([n,i],e=>{let t=this.Sr(e.pr);r.push(t)}),iN.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new iQ(iv);return t.forEach(e=>{let t=new s2(e,0),i=new s2(e,Number.POSITIVE_INFINITY);this.wr.forEachInRange([t,i],e=>{n=n.add(e.pr)})}),iN.resolve(this.Dr(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,i=n.length+1,r=n;iI.isDocumentKey(r)||(r=r.child(""));let s=new s2(new iI(r),0),a=new iQ(iv);return this.wr.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===i&&(a=a.add(e.pr)),!0)},s),iN.resolve(this.Dr(a))}Dr(e){let t=[];return e.forEach(e=>{let n=this.Sr(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){0===this.Cr(t.batchId,"removed")||ir(),this.mutationQueue.shift();let n=this.wr;return iN.forEach(t.mutations,i=>{let r=new s2(i.key,t.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=n})}Mn(e){}containsKey(e,t){let n=new s2(t,0),i=this.wr.firstAfterOrEqual(n);return iN.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,iN.resolve()}Cr(e,t){return this.br(e)}br(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Sr(e){let t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class s4{constructor(e){this.vr=e,this.docs=new i$(iI.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,i=this.docs.get(n),r=i?i.size:0,s=this.vr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-r,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return iN.resolve(n?n.document.mutableCopy():rd.newInvalidDocument(t))}getEntries(e,t){let n=rG;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():rd.newInvalidDocument(e))}),iN.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let r=rG,s=t.path,a=new iI(s.child("")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=function(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=iI.comparator(e.documentKey,t.documentKey))?n:iv(e.largestBatchId,t.largestBatchId)}(new ik(a.readTime,a.key,-1),n)||(i.has(a.key)||rK(t,a))&&(r=r.insert(a.key,a.mutableCopy()))}return iN.resolve(r)}getAllFromCollectionGroup(e,t,n,i){ir()}Fr(e,t){return iN.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new s6(this)}getSize(e){return iN.resolve(this.size)}}class s6 extends sX{constructor(e){super(),this.ar=e}applyChanges(e){let t=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?t.push(this.ar.addEntry(e,i)):this.ar.removeEntry(n)}),iN.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}}/**
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
 */class s5{constructor(e){this.persistence=e,this.Mr=new rz(e=>rL(e),rR),this.lastRemoteSnapshotVersion=ib.min(),this.highestTargetId=0,this.Or=0,this.Nr=new s1,this.targetCount=0,this.Br=sW.Nn()}forEachTarget(e,t){return this.Mr.forEach((e,n)=>t(n)),iN.resolve()}getLastRemoteSnapshotVersion(e){return iN.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return iN.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),iN.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Or&&(this.Or=t),iN.resolve()}qn(e){this.Mr.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Br=new sW(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,iN.resolve()}updateTargetData(e,t){return this.qn(t),iN.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,iN.resolve()}removeTargets(e,t,n){let i=0,r=[];return this.Mr.forEach((s,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.Mr.delete(s),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),iN.waitFor(r).next(()=>i)}getTargetCount(e){return iN.resolve(this.targetCount)}getTargetData(e,t){let n=this.Mr.get(t)||null;return iN.resolve(n)}addMatchingKeys(e,t,n){return this.Nr.dr(t,n),iN.resolve()}removeMatchingKeys(e,t,n){this.Nr.Rr(t,n);let i=this.persistence.referenceDelegate,r=[];return i&&t.forEach(t=>{r.push(i.markPotentiallyOrphaned(e,t))}),iN.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),iN.resolve()}getMatchingKeysForTargetId(e,t){let n=this.Nr.gr(t);return iN.resolve(n)}containsKey(e,t){return iN.resolve(this.Nr.containsKey(t))}}/**
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
 */class s7{constructor(e,t){this.Lr={},this.overlays={},this.kr=new ij(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new s5(this),this.indexManager=new sG,this.remoteDocumentCache=new s4(e=>this.referenceDelegate.Kr(e)),this.serializer=new s$(t),this.$r=new sZ(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new s0,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Lr[e.toKey()];return n||(n=new s9(t,this.referenceDelegate),this.Lr[e.toKey()]=n),n}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,n){n8("MemoryPersistence","Starting transaction:",e);let i=new s3(this.kr.next());return this.referenceDelegate.Ur(),n(i).next(e=>this.referenceDelegate.Wr(i).next(()=>e)).toPromise().then(e=>(i.raiseOnCommittedEvent(),e))}Gr(e,t){return iN.or(Object.values(this.Lr).map(n=>()=>n.containsKey(e,t)))}}class s3 extends iA{constructor(e){super(),this.currentSequenceNumber=e}}class s8{constructor(e){this.persistence=e,this.zr=new s1,this.jr=null}static Hr(e){return new s8(e)}get Jr(){if(this.jr)return this.jr;throw ir()}addReference(e,t,n){return this.zr.addReference(n,t),this.Jr.delete(n.toString()),iN.resolve()}removeReference(e,t,n){return this.zr.removeReference(n,t),this.Jr.add(n.toString()),iN.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),iN.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach(e=>this.Jr.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Jr.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Ur(){this.jr=new Set}Wr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return iN.forEach(this.Jr,n=>{let i=iI.fromPath(n);return this.Yr(e,i).next(e=>{e||t.removeEntry(i,ib.min())})}).next(()=>(this.jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Yr(e,t).next(e=>{e?this.Jr.delete(t.toString()):this.Jr.add(t.toString())})}Kr(e){return 0}Yr(e,t){return iN.or([()=>iN.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}}/**
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
 */class ae{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.qi=n,this.Qi=i}static Ki(e,t){let n=rY(),i=rY();for(let e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:i=i.add(e.doc.key)}return new ae(e,t.fromCache,n,i)}}/**
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
 */class at{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class an{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=(0,E.isSafari)()?8:iL.v((0,E.getUA)())>0?6:4}initialize(e,t){this.zi=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,n,i){let r={result:null};return this.ji(e,t).next(e=>{r.result=e}).next(()=>{if(!r.result)return this.Hi(e,t,i,n).next(e=>{r.result=e})}).next(()=>{if(r.result)return;let n=new at;return this.Ji(e,t,n).next(i=>{if(r.result=i,this.Ui)return this.Yi(e,t,n,i.size)})}).next(()=>r.result)}Yi(e,t,n,i){return n.documentReadCount<this.Wi?(n3()<=w.LogLevel.DEBUG&&n8("QueryEngine","SDK will not create cache indexes for query:",rB(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),iN.resolve()):(n3()<=w.LogLevel.DEBUG&&n8("QueryEngine","Query:",rB(t),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Gi*i?(n3()<=w.LogLevel.DEBUG&&n8("QueryEngine","The SDK decides to create cache indexes for query:",rB(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,rF(t))):iN.resolve())}ji(e,t){if(rM(t))return iN.resolve(null);let n=rF(t);return this.indexManager.getIndexType(e,n).next(i=>0===i?null:(null!==t.limit&&1===i&&(n=rF(t=rU(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,n).next(i=>{let r=rY(...i);return this.zi.getDocuments(e,r).next(i=>this.indexManager.getMinOffset(e,n).next(n=>{let s=this.Zi(t,i);return this.Xi(t,s,r,n.readTime)?this.ji(e,rU(t,null,"F")):this.es(e,s,t,n)}))})))}Hi(e,t,n,i){return rM(t)||i.isEqual(ib.min())?iN.resolve(null):this.zi.getDocuments(e,n).next(r=>{let s=this.Zi(t,r);return this.Xi(t,s,n,i)?iN.resolve(null):(n3()<=w.LogLevel.DEBUG&&n8("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),rB(t)),this.es(e,s,t,function(e,t){let n=e.toTimestamp().seconds,i=e.toTimestamp().nanoseconds+1;return new ik(ib.fromTimestamp(1e9===i?new iE(n+1,0):new iE(n,i)),iI.empty(),-1)}(i,0)).next(e=>e))})}Zi(e,t){let n=new iQ(r$(e));return t.forEach((t,i)=>{rK(e,i)&&(n=n.add(i))}),n}Xi(e,t,n,i){if(null===e.limit)return!1;if(n.size!==t.size)return!0;let r="F"===e.limitType?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Ji(e,t,n){return n3()<=w.LogLevel.DEBUG&&n8("QueryEngine","Using full collection scan to execute query:",rB(t)),this.zi.getDocumentsMatchingQuery(e,t,ik.min(),n)}es(e,t,n,i){return this.zi.getDocumentsMatchingQuery(e,n,i).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
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
 */class ai{constructor(e,t,n,i){this.persistence=e,this.ts=t,this.serializer=i,this.ns=new i$(iv),this.rs=new rz(e=>rL(e),rR),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(n)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sJ(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ns))}}async function ar(e,t){return await e.persistence.runTransaction("Handle user change","readonly",n=>{let i;return e.mutationQueue.getAllMutationBatches(n).next(r=>(i=r,e._s(t),e.mutationQueue.getAllMutationBatches(n))).next(t=>{let r=[],s=[],a=rY();for(let e of i)for(let t of(r.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);return e.localDocuments.getDocuments(n,a).next(e=>({us:e,removedBatchIds:r,addedBatchIds:s}))})})}function as(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Qr.getLastRemoteSnapshotVersion(t))}async function aa(e,t,n){let i=e.ns.get(t);try{n||await e.persistence.runTransaction("Release target",n?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,i))}catch(e){if(!iP(e))throw e;n8("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}e.ns=e.ns.remove(t),e.rs.delete(i.target)}function ao(e,t,n){let i=ib.min(),r=rY();return e.persistence.runTransaction("Execute query","readwrite",s=>(function(e,t,n){let i=e.rs.get(n);return void 0!==i?iN.resolve(e.ns.get(i)):e.Qr.getTargetData(t,n)})(e,s,rF(t)).next(t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,e.Qr.getMatchingKeysForTargetId(s,t.targetId).next(e=>{r=e})}).next(()=>e.ts.getDocumentsMatchingQuery(s,t,n?i:ib.min(),n?r:rY())).next(n=>{var i;let s;return i=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),s=e.ss.get(i)||ib.min(),n.forEach((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)}),e.ss.set(i,s),{documents:n,hs:r}}))}class al{constructor(){this.activeTargetIds=rJ}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){return JSON.stringify({activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()})}}class ah{constructor(){this.no=new al,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,t,n){this.ro[e]=t}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new al,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class au{io(e){}shutdown(){}}/**
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
 */class ac{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){for(let e of(n8("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.uo))e(0)}ao(){for(let e of(n8("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.uo))e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
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
 */let ad=null;function af(){return null===ad?ad=268435456+Math.round(2147483648*Math.random()):ad++,"0x"+ad.toString(16)}/**
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
 */const ag={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class ap{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
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
 */const am="WebChannelConnection";class ay extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=t+"://"+e.host,this.po=`projects/${n}/databases/${i}`,this.yo="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${i}`}get wo(){return!1}So(e,t,n,i,r){let s=af(),a=this.bo(e,t.toUriEncodedString());n8("RestConnection",`Sending RPC '${e}' ${s}:`,a,n);let o={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(o,i,r),this.Co(e,a,o,n).then(t=>(n8("RestConnection",`Received RPC '${e}' ${s}: `,t),t),t=>{throw it("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",n),t})}vo(e,t,n,i,r,s){return this.So(e,t,n,i,r)}Do(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+n5}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}bo(e,t){let n=ag[e];return`${this.fo}/v1/${t}:${n}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,t,n,i){let r=af();return new Promise((s,a)=>{let o=new n0;o.setWithCredentials(!0),o.listenOnce(nX.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case nW.NO_ERROR:let t=o.getResponseJson();n8(am,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(t)),s(t);break;case nW.TIMEOUT:n8(am,`RPC '${e}' ${r} timed out`),a(new ia(is.DEADLINE_EXCEEDED,"Request time out"));break;case nW.HTTP_ERROR:let n=o.getStatus();if(n8(am,`RPC '${e}' ${r} failed with status:`,n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(is).indexOf(t)>=0?t:is.UNKNOWN}(t.status);a(new ia(e,t.message))}else a(new ia(is.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new ia(is.UNAVAILABLE,"Connection failed."));break;default:ir()}}finally{n8(am,`RPC '${e}' ${r} completed.`)}});let l=JSON.stringify(i);n8(am,`RPC '${e}' ${r} sending request:`,i),o.send(t,"POST",l,n,15)})}Fo(e,t,n){let i=af(),r=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=nQ(),a=nH(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;void 0!==h&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;let u=r.join("");n8(am,`Creating RPC '${e}' stream ${i}: ${u}`,l);let c=s.createWebChannel(u,l),d=!1,f=!1,g=new ap({lo:t=>{f?n8(am,`Not sending because RPC '${e}' stream ${i} is closed:`,t):(d||(n8(am,`Opening RPC '${e}' stream ${i} transport.`),c.open(),d=!0),n8(am,`RPC '${e}' stream ${i} sending:`,t),c.send(t))},ho:()=>c.close()}),p=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return p(c,nZ.EventType.OPEN,()=>{f||n8(am,`RPC '${e}' stream ${i} transport opened.`)}),p(c,nZ.EventType.CLOSE,()=>{f||(f=!0,n8(am,`RPC '${e}' stream ${i} transport closed`),g.Vo())}),p(c,nZ.EventType.ERROR,t=>{f||(f=!0,it(am,`RPC '${e}' stream ${i} transport errored:`,t),g.Vo(new ia(is.UNAVAILABLE,"The operation could not be completed")))}),p(c,nZ.EventType.MESSAGE,t=>{var n;if(!f){let r=t.data[0];r||ir();let s=r.error||(null===(n=r[0])||void 0===n?void 0:n.error);if(s){n8(am,`RPC '${e}' stream ${i} received error:`,s);let t=s.status,n=function(e){let t=o[e];if(void 0!==t)return sf(t)}(t),r=s.message;void 0===n&&(n=is.INTERNAL,r="Unknown error status: "+t+" with message "+s.message),f=!0,g.Vo(new ia(n,r)),c.close()}else n8(am,`RPC '${e}' stream ${i} received:`,r),g.mo(r)}}),p(a,nY.STAT_EVENT,t=>{t.stat===nJ.PROXY?n8(am,`RPC '${e}' stream ${i} detected buffering proxy`):t.stat===nJ.NOPROXY&&n8(am,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.Ro()},0),g}}function av(){return"undefined"!=typeof document?document:null}/**
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
 */class aw{constructor(e,t,n=1e3,i=1.5,r=6e4){this.oi=e,this.timerId=t,this.Mo=n,this.xo=i,this.Oo=r,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();let t=Math.floor(this.No+this.Qo()),n=Math.max(0,Date.now()-this.Lo),i=Math.max(0,t-n);i>0&&n8("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Lo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){null!==this.Bo&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){null!==this.Bo&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class aE{constructor(e,t,n,i,r,s,a,o){this.oi=e,this.$o=n,this.Uo=i,this.connection=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new aw(e,t)}Ho(){return 1===this.state||5===this.state||this.Jo()}Jo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&null===this.Go&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,t){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,4!==e?this.jo.reset():t&&t.code===is.RESOURCE_EXHAUSTED?(ie(t.toString()),ie("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):t&&t.code===is.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(t)}i_(){}auth(){this.state=1;let e=this.s_(this.Wo),t=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.Wo===t&&this.o_(e,n)},t=>{e(()=>{let e=new ia(is.UNKNOWN,"Fetching auth token failed: "+t.message);return this.__(e)})})}o_(e,t){let n=this.s_(this.Wo);this.stream=this.a_(e,t),this.stream.Po(()=>{n(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(e=>{n(()=>this.__(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return n8("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return t=>{this.oi.enqueueAndForget(()=>this.Wo===e?t():(n8("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ab extends aE{constructor(e,t,n,i,r,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,s),this.serializer=r}a_(e,t){return this.connection.Fo("Listen",e,t)}onMessage(e){this.jo.reset();let t=function(e,t){let n;if("targetChange"in t){var i,r;t.targetChange;let s="NO_CHANGE"===(i=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===i?1:"REMOVE"===i?2:"CURRENT"===i?3:"RESET"===i?4:ir(),a=t.targetChange.targetIds||[],o=(r=t.targetChange.resumeToken,e.useProto3Json?(void 0===r||"string"==typeof r||ir(),iY.fromBase64String(r||"")):(void 0===r||r instanceof Uint8Array||ir(),iY.fromUint8Array(r||new Uint8Array))),l=t.targetChange.cause;n=new sS(s,a,o,l&&new ia(void 0===l.code?is.UNKNOWN:sf(l.code),l.message||"")||null)}else if("documentChange"in t){t.documentChange;let i=t.documentChange;i.document,i.document.name,i.document.updateTime;let r=sM(e,i.document.name),s=sR(i.document.updateTime),a=i.document.createTime?sR(i.document.createTime):ib.min(),o=new rc({mapValue:{fields:i.document.fields}}),l=rd.newFoundDocument(r,s,a,o);n=new sb(i.targetIds||[],i.removedTargetIds||[],l.key,l)}else if("documentDelete"in t){t.documentDelete;let i=t.documentDelete;i.document;let r=sM(e,i.document),s=i.readTime?sR(i.readTime):ib.min(),a=rd.newNoDocument(r,s);n=new sb([],i.removedTargetIds||[],a.key,a)}else if("documentRemove"in t){t.documentRemove;let i=t.documentRemove;i.document;let r=sM(e,i.document);n=new sb([],i.removedTargetIds||[],r,null)}else{if(!("filter"in t))return ir();{t.filter;let e=t.filter;e.targetId;let{count:i=0,unchangedNames:r}=e,s=new sd(i,r);n=new sT(e.targetId,s)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return ib.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?ib.min():t.readTime?sR(t.readTime):ib.min()}(e);return this.listener.u_(t,n)}c_(e){let t={};t.database=sF(this.serializer),t.addTarget=function(e,t){var n,i;let r;let s=t.target;if((r=rO(s)?{documents:{documents:[sV(e,s.path)]}}:{query:function(e,t){var n,i;let r;let s={structuredQuery:{}},a=t.path;null!==t.collectionGroup?(r=a,s.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(r=a.popLast(),s.structuredQuery.from=[{collectionId:a.lastSegment()}]),s.parent=sV(e,r);let o=function(e){if(0!==e.length)return function e(t){return t instanceof rv?function(e){if("=="===e.op){if(ro(e.value))return{unaryFilter:{field:sj(e.field),op:"IS_NAN"}};if(ra(e.value))return{unaryFilter:{field:sj(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(ro(e.value))return{unaryFilter:{field:sj(e.field),op:"IS_NOT_NAN"}};if(ra(e.value))return{unaryFilter:{field:sj(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:sj(e.field),op:sD[e.op],value:e.value}}}(t):t instanceof rw?function(t){let n=t.getFilters().map(t=>e(t));return 1===n.length?n[0]:{compositeFilter:{op:sN[t.op],filters:n}}}(t):ir()}(rw.create(e,"and"))}(t.filters);o&&(s.structuredQuery.where=o);let l=function(e){if(0!==e.length)return e.map(e=>({field:sj(e.field),direction:sA[e.dir]}))}(t.orderBy);l&&(s.structuredQuery.orderBy=l);let h=sL(e,t.limit);return null!==h&&(s.structuredQuery.limit=h),t.startAt&&(s.structuredQuery.startAt={before:(n=t.startAt).inclusive,values:n.position}),t.endAt&&(s.structuredQuery.endAt={before:!(i=t.endAt).inclusive,values:i.position}),{ut:s,parent:r}}(e,s).ut}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){r.resumeToken=(n=t.resumeToken,e.useProto3Json?n.toBase64():n.toUint8Array());let i=sL(e,t.expectedCount);null!==i&&(r.expectedCount=i)}else if(t.snapshotVersion.compareTo(ib.min())>0){r.readTime=(i=t.snapshotVersion.toTimestamp(),e.useProto3Json?`${new Date(1e3*i.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+i.nanoseconds).slice(-9)}Z`:{seconds:""+i.seconds,nanos:i.nanoseconds});let n=sL(e,t.expectedCount);null!==n&&(r.expectedCount=n)}return r}(this.serializer,e);let n=function(e,t){let n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ir()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.t_(t)}l_(e){let t={};t.database=sF(this.serializer),t.removeTarget=e,this.t_(t)}}/**
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
 */class aT extends class{}{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new ia(is.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,n,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,s])=>this.connection.So(e,sO(t,n),i,r,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===is.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ia(is.UNKNOWN,e.toString())})}vo(e,t,n,i,r){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.vo(e,sO(t,n),i,s,a,r)).catch(e=>{throw"FirebaseError"===e.name?(e.code===is.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ia(is.UNKNOWN,e.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class aS{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){0===this.m_&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){"Online"===this.state?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,"Online"===e&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(ie(t),this.g_=!1):n8("OnlineStateTracker",t)}b_(){null!==this.f_&&(this.f_.cancel(),this.f_=null)}}/**
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
 */class a_{constructor(e,t,n,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=r,this.M_.io(e=>{n.enqueueAndForget(async()=>{aR(this)&&(n8("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.v_.add(4),await aI(e),e.x_.set("Unknown"),e.v_.delete(4),await aC(e)}(this))})}),this.x_=new aS(n,i)}}async function aC(e){if(aR(e))for(let t of e.F_)await t(!0)}async function aI(e){for(let t of e.F_)await t(!1)}function ak(e,t){e.C_.has(t.targetId)||(e.C_.set(t.targetId,t),aL(e)?ax(e):aj(e).Jo()&&aD(e,t))}function aA(e,t){let n=aj(e);e.C_.delete(t),n.Jo()&&aN(e,t),0===e.C_.size&&(n.Jo()?n.Xo():aR(e)&&e.x_.set("Unknown"))}function aD(e,t){if(e.O_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(ib.min())>0){let n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}aj(e).c_(t)}function aN(e,t){e.O_.Oe(t),aj(e).l_(t)}function ax(e){e.O_=new sC({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.C_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),aj(e).start(),e.x_.p_()}function aL(e){return aR(e)&&!aj(e).Ho()&&e.C_.size>0}function aR(e){return 0===e.v_.size}async function aO(e){e.C_.forEach((t,n)=>{aD(e,t)})}async function aP(e,t){e.O_=void 0,aL(e)?(e.x_.S_(t),ax(e)):e.x_.set("Unknown")}async function aM(e,t,n){if(e.x_.set("Online"),t instanceof sS&&2===t.state&&t.cause)try{await async function(e,t){let n=t.cause;for(let i of t.targetIds)e.C_.has(i)&&(await e.remoteSyncer.rejectListen(i,n),e.C_.delete(i),e.O_.removeTarget(i))}(e,t)}catch(n){n8("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await aV(e,n)}else if(t instanceof sb?e.O_.$e(t):t instanceof sT?e.O_.Je(t):e.O_.Ge(t),!n.isEqual(ib.min()))try{let t=await as(e.localStore);n.compareTo(t)>=0&&await function(e,t){let n=e.O_.it(t);return n.targetChanges.forEach((n,i)=>{if(n.resumeToken.approximateByteSize()>0){let r=e.C_.get(i);r&&e.C_.set(i,r.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{let i=e.C_.get(t);if(!i)return;e.C_.set(t,i.withResumeToken(iY.EMPTY_BYTE_STRING,i.snapshotVersion)),aN(e,t);let r=new sK(i.target,t,n,i.sequenceNumber);aD(e,r)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){n8("RemoteStore","Failed to raise snapshot:",t),await aV(e,t)}}async function aV(e,t,n){if(!iP(t))throw t;e.v_.add(1),await aI(e),e.x_.set("Offline"),n||(n=()=>as(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{n8("RemoteStore","Retrying IndexedDB access"),await n(),e.v_.delete(1),await aC(e)})}async function aF(e,t){e.asyncQueue.verifyOperationInProgress(),n8("RemoteStore","RemoteStore received new credentials");let n=aR(e);e.v_.add(3),await aI(e),n&&e.x_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.v_.delete(3),await aC(e)}async function aU(e,t){t?(e.v_.delete(2),await aC(e)):t||(e.v_.add(2),await aI(e),e.x_.set("Unknown"))}function aj(e){var t,n,i;return e.N_||(e.N_=(t=e.datastore,n=e.asyncQueue,i={Po:aO.bind(null,e),To:aP.bind(null,e),u_:aM.bind(null,e)},t.R_(),new ab(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,i)),e.F_.push(async t=>{t?(e.N_.Zo(),aL(e)?ax(e):e.x_.set("Unknown")):(await e.N_.stop(),e.O_=void 0)})),e.N_}/**
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
 */class aq{constructor(e,t,n,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new io,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,i,r){let s=new aq(e,t,Date.now()+n,i,r);return s.start(n),s}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ia(is.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function aB(e,t){if(ie("AsyncQueue",`${t}: ${e}`),iP(e))return new ia(is.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class aK{constructor(e){this.comparator=e?(t,n)=>e(t,n)||iI.comparator(t.key,n.key):(e,t)=>iI.comparator(e.key,t.key),this.keyedMap=rH(),this.sortedSet=new i$(this.comparator)}static emptySet(e){return new aK(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof aK)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,i=n.getNext().key;if(!e.isEqual(i))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let n=new aK;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
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
 */class a${constructor(){this.L_=new i$(iI.comparator)}track(e){let t=e.doc.key,n=this.L_.get(t);n?0!==e.type&&3===n.type?this.L_=this.L_.insert(t,e):3===e.type&&1!==n.type?this.L_=this.L_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.L_=this.L_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.L_=this.L_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.L_=this.L_.remove(t):1===e.type&&2===n.type?this.L_=this.L_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.L_=this.L_.insert(t,{type:2,doc:e.doc}):ir():this.L_=this.L_.insert(t,e)}k_(){let e=[];return this.L_.inorderTraversal((t,n)=>{e.push(n)}),e}}class az{constructor(e,t,n,i,r,s,a,o,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=r,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,i,r){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new az(e,t,aK.emptySet(t),s,n,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&rj(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}/**
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
 */class aG{constructor(){this.q_=void 0,this.Q_=[]}}class aQ{constructor(){this.queries=new rz(e=>rq(e),rj),this.onlineState="Unknown",this.K_=new Set}}async function aH(e,t){let n=t.query,i=!1,r=e.queries.get(n);if(r||(i=!0,r=new aG),i)try{r.q_=await e.onListen(n)}catch(n){let e=aB(n,`Initialization of query '${rB(t.query)}' failed`);return void t.onError(e)}e.queries.set(n,r),r.Q_.push(t),t.U_(e.onlineState),r.q_&&t.W_(r.q_)&&aJ(e)}async function aW(e,t){let n=t.query,i=!1,r=e.queries.get(n);if(r){let e=r.Q_.indexOf(t);e>=0&&(r.Q_.splice(e,1),i=0===r.Q_.length)}if(i)return e.queries.delete(n),e.onUnlisten(n)}function aX(e,t){let n=!1;for(let i of t){let t=i.query,r=e.queries.get(t);if(r){for(let e of r.Q_)e.W_(i)&&(n=!0);r.q_=i}}n&&aJ(e)}function aY(e,t,n){let i=e.queries.get(t);if(i)for(let e of i.Q_)e.onError(n);e.queries.delete(t)}function aJ(e){e.K_.forEach(e=>{e.next()})}class aZ{constructor(e,t,n){this.query=e,this.G_=t,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=n||{}}W_(e){if(!this.options.includeMetadataChanges){let t=[];for(let n of e.docChanges)3!==n.type&&t.push(n);e=new az(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.z_?this.H_(e)&&(this.G_.next(e),t=!0):this.J_(e,this.onlineState)&&(this.Y_(e),t=!0),this.j_=e,t}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let t=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),t=!0),t}J_(e,t){return!e.fromCache||(!this.options.Z_||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}H_(e){if(e.docChanges.length>0)return!0;let t=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Y_(e){e=az.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
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
 */class a0{constructor(e){this.key=e}}class a1{constructor(e){this.key=e}}class a2{constructor(e,t){this.query=e,this.oa=t,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=rY(),this.mutatedKeys=rY(),this.ua=r$(e),this.ca=new aK(this.ua)}get la(){return this.oa}ha(e,t){let n=t?t.Pa:new a$,i=t?t.ca:this.ca,r=t?t.mutatedKeys:this.mutatedKeys,s=i,a=!1,o="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,l="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((e,t)=>{let h=i.get(e),u=rK(this.query,t)?t:null,c=!!h&&this.mutatedKeys.has(h.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations),f=!1;h&&u?h.data.isEqual(u.data)?c!==d&&(n.track({type:3,doc:u}),f=!0):this.Ia(h,u)||(n.track({type:2,doc:u}),f=!0,(o&&this.ua(u,o)>0||l&&0>this.ua(u,l))&&(a=!0)):!h&&u?(n.track({type:0,doc:u}),f=!0):h&&!u&&(n.track({type:1,doc:h}),f=!0,(o||l)&&(a=!0)),f&&(u?(s=s.add(u),r=d?r.add(e):r.delete(e)):(s=s.delete(e),r=r.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),r=r.delete(e.key),n.track({type:1,doc:e})}return{ca:s,Pa:n,Xi:a,mutatedKeys:r}}Ia(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,i){let r=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;let s=e.Pa.k_();s.sort((e,t)=>(function(e,t){let n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ir()}};return n(e)-n(t)})(e.type,t.type)||this.ua(e.doc,t.doc)),this.Ta(n),i=null!=i&&i;let a=t&&!i?this.Ea():[],o=0===this.aa.size&&this.current&&!i?1:0,l=o!==this._a;return(this._a=o,0!==s.length||l)?{snapshot:new az(this.query,e.ca,r,s,e.mutatedKeys,0===o,l,!1,!!n&&n.resumeToken.approximateByteSize()>0),da:a}:{da:a}}U_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new a$,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}Ta(e){e&&(e.addedDocuments.forEach(e=>this.oa=this.oa.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.oa=this.oa.delete(e)),this.current=e.current)}Ea(){if(!this.current)return[];let e=this.aa;this.aa=rY(),this.ca.forEach(e=>{this.Aa(e.key)&&(this.aa=this.aa.add(e.key))});let t=[];return e.forEach(e=>{this.aa.has(e)||t.push(new a1(e))}),this.aa.forEach(n=>{e.has(n)||t.push(new a0(n))}),t}Ra(e){this.oa=e.hs,this.aa=rY();let t=this.ha(e.documents);return this.applyChanges(t,!0)}Va(){return az.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,0===this._a,this.hasCachedResults)}}class a9{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class a4{constructor(e){this.key=e,this.ma=!1}}class a6{constructor(e,t,n,i,r,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.fa={},this.ga=new rz(e=>rq(e),rj),this.pa=new Map,this.ya=new Set,this.wa=new i$(iI.comparator),this.Sa=new Map,this.ba=new s1,this.Da={},this.Ca=new Map,this.va=sW.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return!0===this.Fa}}async function a5(e,t){var n,i;let r,s;let a=(e.remoteStore.remoteSyncer.applyRemoteEvent=a8.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ol.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ot.bind(null,e),e.fa.u_=aX.bind(null,e.eventManager),e.fa.xa=aY.bind(null,e.eventManager),e),o=a.ga.get(t);if(o)r=o.targetId,a.sharedClientState.addLocalQueryTarget(r),s=o.view.Va();else{let e=await (n=a.localStore,i=rF(t),n.persistence.runTransaction("Allocate target","readwrite",e=>{let t;return n.Qr.getTargetData(e,i).next(r=>r?(t=r,iN.resolve(t)):n.Qr.allocateTargetId(e).next(r=>(t=new sK(i,r,"TargetPurposeListen",e.currentSequenceNumber),n.Qr.addTargetData(e,t).next(()=>t))))}).then(e=>{let t=n.ns.get(e.targetId);return(null===t||e.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(n.ns=n.ns.insert(e.targetId,e),n.rs.set(i,e.targetId)),e})),o=a.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,s=await a7(a,t,r,"current"===o,e.resumeToken),a.isPrimaryClient&&ak(a.remoteStore,e)}return s}async function a7(e,t,n,i,r){e.Ma=(t,n,i)=>(async function(e,t,n,i){let r=t.view.ha(n);r.Xi&&(r=await ao(e.localStore,t.query,!1).then(({documents:e})=>t.view.ha(e,r)));let s=i&&i.targetChanges.get(t.targetId),a=i&&null!=i.targetMismatches.get(t.targetId),o=t.view.applyChanges(r,e.isPrimaryClient,s,a);return or(e,t.targetId,o.da),o.snapshot})(e,t,n,i);let s=await ao(e.localStore,t,!0),a=new a2(t,s.hs),o=a.ha(s.documents),l=sE.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==e.onlineState,r),h=a.applyChanges(o,e.isPrimaryClient,l);or(e,n,h.da);let u=new a9(t,n,a);return e.ga.set(t,u),e.pa.has(n)?e.pa.get(n).push(t):e.pa.set(n,[t]),h.snapshot}async function a3(e,t){let n=e.ga.get(t),i=e.pa.get(n.targetId);if(i.length>1)return e.pa.set(n.targetId,i.filter(e=>!rj(e,t))),void e.ga.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(n.targetId),e.sharedClientState.isActiveQueryTarget(n.targetId)||await aa(e.localStore,n.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(n.targetId),aA(e.remoteStore,n.targetId),on(e,n.targetId)}).catch(iD)):(on(e,n.targetId),await aa(e.localStore,n.targetId,!0))}async function a8(e,t){try{let n=await function(e,t){let n=t.snapshotVersion,i=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{var s;let a,o;let l=e.os.newChangeBuffer({trackRemovals:!0});i=e.ns;let h=[];t.targetChanges.forEach((s,a)=>{var o;let l=i.get(a);if(!l)return;h.push(e.Qr.removeMatchingKeys(r,s.removedDocuments,a).next(()=>e.Qr.addMatchingKeys(r,s.addedDocuments,a)));let u=l.withSequenceNumber(r.currentSequenceNumber);null!==t.targetMismatches.get(a)?u=u.withResumeToken(iY.EMPTY_BYTE_STRING,ib.min()).withLastLimboFreeSnapshotVersion(ib.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,n)),i=i.insert(a,u),o=u,(0===l.resumeToken.approximateByteSize()||o.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&h.push(e.Qr.updateTargetData(r,u))});let u=rG,c=rY();if(t.documentUpdates.forEach(n=>{t.resolvedLimboDocuments.has(n)&&h.push(e.persistence.referenceDelegate.updateLimboDocument(r,n))}),h.push((s=t.documentUpdates,a=rY(),o=rY(),s.forEach(e=>a=a.add(e)),l.getEntries(r,a).next(e=>{let t=rG;return s.forEach((n,i)=>{let r=e.get(n);i.isFoundDocument()!==r.isFoundDocument()&&(o=o.add(n)),i.isNoDocument()&&i.version.isEqual(ib.min())?(l.removeEntry(n,i.readTime),t=t.insert(n,i)):!r.isValidDocument()||i.version.compareTo(r.version)>0||0===i.version.compareTo(r.version)&&r.hasPendingWrites?(l.addEntry(i),t=t.insert(n,i)):n8("LocalStore","Ignoring outdated watch update for ",n,". Current version:",r.version," Watch version:",i.version)}),{cs:t,ls:o}})).next(e=>{u=e.cs,c=e.ls})),!n.isEqual(ib.min())){let t=e.Qr.getLastRemoteSnapshotVersion(r).next(t=>e.Qr.setTargetsMetadata(r,r.currentSequenceNumber,n));h.push(t)}return iN.waitFor(h).next(()=>l.apply(r)).next(()=>e.localDocuments.getLocalViewOfDocuments(r,u,c)).next(()=>u)}).then(t=>(e.ns=i,t))}(e.localStore,t);t.targetChanges.forEach((t,n)=>{let i=e.Sa.get(n);i&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||ir(),t.addedDocuments.size>0?i.ma=!0:t.modifiedDocuments.size>0?i.ma||ir():t.removedDocuments.size>0&&(i.ma||ir(),i.ma=!1))}),await oa(e,n,t)}catch(e){await iD(e)}}function oe(e,t,n){var i;if(e.isPrimaryClient&&0===n||!e.isPrimaryClient&&1===n){let n;let r=[];e.ga.forEach((e,n)=>{let i=n.view.U_(t);i.snapshot&&r.push(i.snapshot)}),(i=e.eventManager).onlineState=t,n=!1,i.queries.forEach((e,i)=>{for(let e of i.Q_)e.U_(t)&&(n=!0)}),n&&aJ(i),r.length&&e.fa.u_(r),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function ot(e,t,n){e.sharedClientState.updateQueryState(t,"rejected",n);let i=e.Sa.get(t),r=i&&i.key;if(r){let n=new i$(iI.comparator);n=n.insert(r,rd.newNoDocument(r,ib.min()));let i=rY().add(r),s=new sw(ib.min(),new Map,new i$(iv),n,i);await a8(e,s),e.wa=e.wa.remove(r),e.Sa.delete(t),os(e)}else await aa(e.localStore,t,!1).then(()=>on(e,t,n)).catch(iD)}function on(e,t,n=null){for(let i of(e.sharedClientState.removeLocalQueryTarget(t),e.pa.get(t)))e.ga.delete(i),n&&e.fa.xa(i,n);e.pa.delete(t),e.isPrimaryClient&&e.ba.Vr(t).forEach(t=>{e.ba.containsKey(t)||oi(e,t)})}function oi(e,t){e.ya.delete(t.path.canonicalString());let n=e.wa.get(t);null!==n&&(aA(e.remoteStore,n),e.wa=e.wa.remove(t),e.Sa.delete(n),os(e))}function or(e,t,n){for(let i of n)i instanceof a0?(e.ba.addReference(i.key,t),function(e,t){let n=t.key,i=n.path.canonicalString();e.wa.get(n)||e.ya.has(i)||(n8("SyncEngine","New document in limbo: "+n),e.ya.add(i),os(e))}(e,i)):i instanceof a1?(n8("SyncEngine","Document no longer in limbo: "+i.key),e.ba.removeReference(i.key,t),e.ba.containsKey(i.key)||oi(e,i.key)):ir()}function os(e){for(;e.ya.size>0&&e.wa.size<e.maxConcurrentLimboResolutions;){let t=e.ya.values().next().value;e.ya.delete(t);let n=new iI(iS.fromString(t)),i=e.va.next();e.Sa.set(i,new a4(n)),e.wa=e.wa.insert(n,i),ak(e.remoteStore,new sK(rF(new rP(n.path)),i,"TargetPurposeLimboResolution",ij._e))}}async function oa(e,t,n){let i=[],r=[],s=[];e.ga.isEmpty()||(e.ga.forEach((a,o)=>{s.push(e.Ma(o,t,n).then(t=>{if((t||n)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(o.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);let e=ae.Ki(o.targetId,t);r.push(e)}}))}),await Promise.all(s),e.fa.u_(i),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",n=>iN.forEach(t,t=>iN.forEach(t.qi,i=>e.persistence.referenceDelegate.addReference(n,t.targetId,i)).next(()=>iN.forEach(t.Qi,i=>e.persistence.referenceDelegate.removeReference(n,t.targetId,i)))))}catch(e){if(!iP(e))throw e;n8("LocalStore","Failed to update sequence numbers: "+e)}for(let n of t){let t=n.targetId;if(!n.fromCache){let n=e.ns.get(t),i=n.snapshotVersion,r=n.withLastLimboFreeSnapshotVersion(i);e.ns=e.ns.insert(t,r)}}}(e.localStore,r))}async function oo(e,t){var n;if(!e.currentUser.isEqual(t)){n8("SyncEngine","User change. New user:",t.toKey());let i=await ar(e.localStore,t);e.currentUser=t,n="'waitForPendingWrites' promise is rejected due to a user change.",e.Ca.forEach(e=>{e.forEach(e=>{e.reject(new ia(is.CANCELLED,n))})}),e.Ca.clear(),e.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await oa(e,i.us)}}function ol(e,t){let n=e.Sa.get(t);if(n&&n.ma)return rY().add(n.key);{let n=rY(),i=e.pa.get(t);if(!i)return n;for(let t of i){let i=e.ga.get(t);n=n.unionWith(i.view.la)}return n}}class oh{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=new sx(e.databaseInfo.databaseId,!0),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){var t;return t=this.persistence,new ai(t,new an,e.initialUser,this.serializer)}createPersistence(e){return new s7(s8.Hr,this.serializer)}createSharedClientState(e){return new ah}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ou{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>oe(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=oo.bind(null,this.syncEngine),await aU(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new aQ}createDatastore(e){let t=new sx(e.databaseInfo.databaseId,!0),n=new ay(e.databaseInfo);return new aT(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){var t;return t=this.localStore,new a_(t,this.datastore,e.asyncQueue,e=>oe(this.syncEngine,e,0),ac.D()?new ac:new au)}createSyncEngine(e,t){return function(e,t,n,i,r,s,a){let o=new a6(e,t,n,i,r,s);return a&&(o.Fa=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(e){n8("RemoteStore","RemoteStore shutting down."),e.v_.add(5),await aI(e),e.M_.shutdown(),e.x_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate()}}/**
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
 */class oc{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):ie("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class od{constructor(e,t,n,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=n6.UNAUTHENTICATED,this.clientId=iy.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{n8("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(n8("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ia(is.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new io;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let t=aB(n,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function of(e,t){e.asyncQueue.verifyOperationInProgress(),n8("FirestoreClient","Initializing OfflineComponentProvider");let n=e.configuration;await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener(async e=>{i.isEqual(e)||(await ar(t.localStore,e),i=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function og(e,t){e.asyncQueue.verifyOperationInProgress();let n=await op(e);n8("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(e=>aF(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>aF(t.remoteStore,n)),e._onlineComponents=t}async function op(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){n8("FirestoreClient","Using user provided OfflineComponentProvider");try{await of(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===is.FAILED_PRECONDITION||t.code===is.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;it("Error using user provided cache. Falling back to memory cache: "+t),await of(e,new oh)}}else n8("FirestoreClient","Using default OfflineComponentProvider"),await of(e,new oh)}return e._offlineComponents}async function om(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(n8("FirestoreClient","Using user provided OnlineComponentProvider"),await og(e,e._uninitializedComponentsProvider._online)):(n8("FirestoreClient","Using default OnlineComponentProvider"),await og(e,new ou))),e._onlineComponents}async function oy(e){let t=await om(e),n=t.eventManager;return n.onListen=a5.bind(null,t.syncEngine),n.onUnlisten=a3.bind(null,t.syncEngine),n}/**
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
 */function ov(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const ow=new Map;function oE(e){if(iI.isDocumentKey(e))throw new ia(is.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function ob(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new ia(is.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=function(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof e?"a function":ir()}(e);throw new ia(is.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class oT{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new ia(is.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new ia(is.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,i){if(!0===t&&!0===i)throw new ia(is.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ov(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new ia(is.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new ia(is.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new ia(is.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,n;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class oS{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new oT({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ia(is.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new ia(is.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new oT(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new ih;switch(e.type){case"firstParty":return new ig(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new ia(is.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=ow.get(e);t&&(n8("ComponentProvider","Removing Datastore"),ow.delete(e),t.terminate())}(this),Promise.resolve()}}/**
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
 */class o_{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new o_(this.firestore,e,this._query)}}class oC{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new oI(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new oC(this.firestore,e,this._key)}}class oI extends o_{constructor(e,t,n){super(e,t,new rP(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new oC(this.firestore,null,new iI(e))}withConverter(e){return new oI(this.firestore,e,this._path)}}/**
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
 */class ok{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new aw(this,"async_queue_retry"),this._u=()=>{let e=av();e&&n8("AsyncQueue","Visibility state changed to "+e.visibilityState),this.jo.Ko()};let e=av();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.au(),this.uu(e)}enterRestrictedMode(e){if(!this.tu){this.tu=!0,this.su=e||!1;let t=av();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this._u)}}enqueue(e){if(this.au(),this.tu)return new Promise(()=>{});let t=new io;return this.uu(()=>this.tu&&this.su?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.eu.push(e),this.cu()))}async cu(){if(0!==this.eu.length){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(e){if(!iP(e))throw e;n8("AsyncQueue","Operation failed with retryable error: "+e)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(e){let t=this.Xa.then(()=>(this.iu=!0,e().catch(e=>{let t;throw this.ru=e,this.iu=!1,ie("INTERNAL UNHANDLED ERROR: ",(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t)),e}).then(e=>(this.iu=!1,e))));return this.Xa=t,t}enqueueAfterDelay(e,t,n){this.au(),this.ou.indexOf(e)>-1&&(t=0);let i=aq.createAndSchedule(this,e,t,n,e=>this.lu(e));return this.nu.push(i),i}au(){this.ru&&ir()}verifyOperationInProgress(){}async hu(){let e;do e=this.Xa,await e;while(e!==this.Xa)}Pu(e){for(let t of this.nu)if(t.timerId===e)return!0;return!1}Iu(e){return this.hu().then(()=>{for(let t of(this.nu.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.nu))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.hu()})}Tu(e){this.ou.push(e)}lu(e){let t=this.nu.indexOf(e);this.nu.splice(t,1)}}class oA extends oS{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new ok,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||oD(this),this._firestoreClient.terminate()}}function oD(e){var t,n,i,r;let s=e._freezeSettings(),a=(r=e._databaseId,new i6(r,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,ov(s.experimentalLongPollingOptions),s.useFetchStreams));e._firestoreClient=new od(e._authCredentials,e._appCheckCredentials,e._queue,a),(null===(n=s.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(i=s.localCache)||void 0===i?void 0:i._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class oN{constructor(e){this._byteString=e}static fromBase64String(e){try{return new oN(iY.fromBase64String(e))}catch(e){throw new ia(is.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new oN(iY.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ox{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new ia(is.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new iC(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class oL{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ia(is.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ia(is.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return iv(this._lat,e._lat)||iv(this._long,e._long)}}const oR=RegExp("[~\\*/\\[\\]]");function oO(e,t,n,i,r){let s=i&&!i.isEmpty(),a=void 0!==r,o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${i}`),a&&(l+=` in document ${r}`),l+=")"),new ia(is.INVALID_ARGUMENT,o+e+l)}/**
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
 */class oP{constructor(e,t,n,i,r){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new oC(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new oM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(oV("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class oM extends oP{data(){return super.data()}}function oV(e,t){return"string"==typeof t?function(e,t,n){if(t.search(oR)>=0)throw oO(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,void 0);try{return new ox(...t.split("."))._internalPath}catch(n){throw oO(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,void 0)}}(e,t):t instanceof ox?t._internalPath:t._delegate._internalPath}class oF{convertValue(e,t="none"){switch(i3(e)){case 0:return null;case 1:return e.booleanValue;case 2:return i0(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(i1(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw ir()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let n={};return iK(e,(e,i)=>{n[e]=this.convertValue(i,t)}),n}convertGeoPoint(e){return new oL(i0(e.latitude),i0(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=i9(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(i4(e));default:return null}}convertTimestamp(e){let t=iZ(e);return new iE(t.seconds,t.nanos)}convertDocumentKey(e,t){let n=iS.fromString(e);sB(n)||ir();let i=new i5(n.get(1),n.get(3)),r=new iI(n.popFirst(5));return i.isEqual(t)||ie(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
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
 */class oU{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class oj extends oP{constructor(e,t,n,i,r,s){super(e,t,n,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new oq(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let n=this._document.data.field(oV("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class oq extends oj{data(e={}){return super.data(e)}}class oB{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new oU(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new oq(this._firestore,this._userDataWriter,n.key,n,new oU(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ia(is.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{let i=new oq(e._firestore,e._userDataWriter,n.doc.key,n.doc,new oU(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:i,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let i=new oq(e._firestore,e._userDataWriter,t.doc.key,t.doc,new oU(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),r=-1,s=-1;return 0!==t.type&&(r=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(s=(n=n.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ir()}}(t.type),doc:i,oldIndex:r,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}class oK extends oF{constructor(e){super(),this.firestore=e}convertBytes(e){return new oN(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new oC(this.firestore,null,t)}}new WeakMap,function(e=!0){n5=y.SDK_VERSION,(0,y._registerComponent)(new(0,v.Component)("firestore",(t,{instanceIdentifier:n,options:i})=>{let r=t.getProvider("app").getImmediate(),s=new oA(new ic(t.getProvider("auth-internal")),new im(t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new ia(is.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new i5(e.options.projectId,t)}(r,n),r);return i=Object.assign({useFetchStreams:e},i),s._setSettings(i),s},"PUBLIC").setMultipleInstances(!0)),(0,y.registerVersion)(n4,"4.4.3",void 0),(0,y.registerVersion)(n4,"4.4.3","esm2017")}();var y=g("7xvHX"),v=g("eryG9"),E=g("gMVVg"),o$=g("iItpQ");const oz="@firebase/installations",oG="0.6.5",oQ=`w:${oG}`,oH="FIS_v2",oW=new E.ErrorFactory("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function oX(e){return e instanceof E.FirebaseError&&e.code.includes("request-failed")}/**
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
 */function oY({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function oJ(e){return{token:e.token,requestStatus:2,expiresIn:Number(e.expiresIn.replace("s","000")),creationTime:Date.now()}}async function oZ(e,t){let n=(await t.json()).error;return oW.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function o0({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}async function o1(e){let t=await e();return t.status>=500&&t.status<600?e():t}/**
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
 */async function o2({appConfig:e,heartbeatServiceProvider:t},{fid:n}){let i=oY(e),r=o0(e),s=t.getImmediate({optional:!0});if(s){let e=await s.getHeartbeatsHeader();e&&r.append("x-firebase-client",e)}let a={method:"POST",headers:r,body:JSON.stringify({fid:n,authVersion:oH,appId:e.appId,sdkVersion:oQ})},o=await o1(()=>fetch(i,a));if(o.ok){let e=await o.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:oJ(e.authToken)}}throw await oZ("Create Installation",o)}/**
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
 */function o9(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */const o4=/^[cdef][\w-]{21}$/;/**
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
 */function o6(e){return`${e.appName}!${e.appId}`}/**
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
 */const o5=new Map;function o7(e,t){let n=o6(e);o3(n,t),function(e,t){let n=(!o8&&"BroadcastChannel"in self&&((o8=new BroadcastChannel("[Firebase] FID Change")).onmessage=e=>{o3(e.data.key,e.data.fid)}),o8);n&&n.postMessage({key:e,fid:t}),0===o5.size&&o8&&(o8.close(),o8=null)}(n,t)}function o3(e,t){let n=o5.get(e);if(n)for(let e of n)e(t)}let o8=null;const le="firebase-installations-store";let lt=null;function ln(){return lt||(lt=(0,o$.openDB)("firebase-installations-database",1,{upgrade:(e,t)=>{0===t&&e.createObjectStore(le)}})),lt}async function li(e,t){let n=o6(e),i=(await ln()).transaction(le,"readwrite"),r=i.objectStore(le),s=await r.get(n);return await r.put(t,n),await i.done,s&&s.fid===t.fid||o7(e,t.fid),t}async function lr(e){let t=o6(e),n=(await ln()).transaction(le,"readwrite");await n.objectStore(le).delete(t),await n.done}async function ls(e,t){let n=o6(e),i=(await ln()).transaction(le,"readwrite"),r=i.objectStore(le),s=await r.get(n),a=t(s);return void 0===a?await r.delete(n):await r.put(a,n),await i.done,a&&(!s||s.fid!==a.fid)&&o7(e,a.fid),a}/**
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
 */async function la(e){let t;let n=await ls(e.appConfig,n=>{let i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject(oW.create("app-offline"))};let n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=lo(e,n);return{installationEntry:n,registrationPromise:i}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:ll(e)}:{installationEntry:t}}(e,lu(n||{fid:function(){try{let e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;let t=btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_").substr(0,22);return o4.test(t)?t:""}catch(e){return""}}(),registrationStatus:0}));return t=i.registrationPromise,i.installationEntry});return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function lo(e,t){try{let n=await o2(e,t);return li(e.appConfig,n)}catch(n){throw oX(n)&&409===n.customData.serverCode?await lr(e.appConfig):await li(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function ll(e){let t=await lh(e.appConfig);for(;1===t.registrationStatus;)await o9(100),t=await lh(e.appConfig);if(0===t.registrationStatus){let{installationEntry:t,registrationPromise:n}=await la(e);return n||t}return t}function lh(e){return ls(e,e=>{if(!e)throw oW.create("installation-not-found");return lu(e)})}function lu(e){return 1===e.registrationStatus&&e.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e}/**
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
 */async function lc({appConfig:e,heartbeatServiceProvider:t},n){let i=function(e,{fid:t}){return`${oY(e)}/${t}/authTokens:generate`}(e,n),r=function(e,{refreshToken:t}){let n=o0(e);return n.append("Authorization",`${oH} ${t}`),n}(e,n),s=t.getImmediate({optional:!0});if(s){let e=await s.getHeartbeatsHeader();e&&r.append("x-firebase-client",e)}let a={method:"POST",headers:r,body:JSON.stringify({installation:{sdkVersion:oQ,appId:e.appId}})},o=await o1(()=>fetch(i,a));if(o.ok)return oJ(await o.json());throw await oZ("Generate Auth Token",o)}/**
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
 */async function ld(e,t=!1){let n;let i=await ls(e.appConfig,i=>{var r;if(!lm(i))throw oW.create("not-registered");let s=i.authToken;if(!t&&2===(r=s).requestStatus&&!function(e){let t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(r))return i;if(1===s.requestStatus)return n=lf(e,t),i;{if(!navigator.onLine)throw oW.create("app-offline");let t=function(e){let t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(i);return n=lp(e,t),t}});return n?await n:i.authToken}async function lf(e,t){let n=await lg(e.appConfig);for(;1===n.authToken.requestStatus;)await o9(100),n=await lg(e.appConfig);let i=n.authToken;return 0===i.requestStatus?ld(e,t):i}function lg(e){return ls(e,e=>{var t;if(!lm(e))throw oW.create("not-registered");return 1===(t=e.authToken).requestStatus&&t.requestTime+1e4<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function lp(e,t){try{let n=await lc(e,t),i=Object.assign(Object.assign({},t),{authToken:n});return await li(e.appConfig,i),n}catch(n){if(oX(n)&&(401===n.customData.serverCode||404===n.customData.serverCode))await lr(e.appConfig);else{let n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await li(e.appConfig,n)}throw n}}function lm(e){return void 0!==e&&2===e.registrationStatus}/**
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
 */async function ly(e){let{installationEntry:t,registrationPromise:n}=await la(e);return n?n.catch(console.error):ld(e).catch(console.error),t.fid}/**
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
 */async function lv(e,t=!1){return await lw(e),(await ld(e,t)).token}async function lw(e){let{registrationPromise:t}=await la(e);t&&await t}function lE(e){return oW.create("missing-app-config-values",{valueName:e})}/**
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
 */const lb="installations";(0,y._registerComponent)(new v.Component(lb,e=>{let t=e.getProvider("app").getImmediate(),n=/**
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
 */function(e){if(!e||!e.options)throw lE("App Configuration");if(!e.name)throw lE("App Name");for(let t of["projectId","apiKey","appId"])if(!e.options[t])throw lE(t);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),i=(0,y._getProvider)(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},"PUBLIC")),(0,y._registerComponent)(new v.Component("installations-internal",e=>{let t=e.getProvider("app").getImmediate(),n=(0,y._getProvider)(t,lb).getImmediate();return{getId:()=>ly(n),getToken:e=>lv(n,e)}},"PRIVATE")),(0,y.registerVersion)(oz,oG),(0,y.registerVersion)(oz,oG,"esm2017");var v=g("eryG9"),o$=g("iItpQ"),E=g("gMVVg"),y=g("7xvHX");const lT="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",lS="google.c.a.c_id";/**
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
 */function l_(e){return btoa(String.fromCharCode(...new Uint8Array(e))).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}(n=h||(h={}))[n.DATA_MESSAGE=1]="DATA_MESSAGE",n[n.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION",(i=u||(u={})).PUSH_RECEIVED="push-received",i.NOTIFICATION_CLICKED="notification-clicked";/**
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
 */const lC="fcm_token_details_db",lI="fcm_token_object_Store";async function lk(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(e=>e.name).includes(lC))return null;let t=null;return(await (0,o$.openDB)(lC,5,{upgrade:async(n,i,r,s)=>{var a;if(i<2||!n.objectStoreNames.contains(lI))return;let o=s.objectStore(lI),l=await o.index("fcmSenderId").get(e);if(await o.clear(),l){if(2===i){if(!l.auth||!l.p256dh||!l.endpoint)return;t={token:l.fcmToken,createTime:null!==(a=l.createTime)&&void 0!==a?a:Date.now(),subscriptionOptions:{auth:l.auth,p256dh:l.p256dh,endpoint:l.endpoint,swScope:l.swScope,vapidKey:"string"==typeof l.vapidKey?l.vapidKey:l_(l.vapidKey)}}}else 3===i?t={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:l_(l.auth),p256dh:l_(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:l_(l.vapidKey)}}:4===i&&(t={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:l_(l.auth),p256dh:l_(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:l_(l.vapidKey)}})}}})).close(),await (0,o$.deleteDB)(lC),await (0,o$.deleteDB)("fcm_vapid_details_db"),await (0,o$.deleteDB)("undefined"),!function(e){if(!e||!e.subscriptionOptions)return!1;let{subscriptionOptions:t}=e;return"number"==typeof e.createTime&&e.createTime>0&&"string"==typeof e.token&&e.token.length>0&&"string"==typeof t.auth&&t.auth.length>0&&"string"==typeof t.p256dh&&t.p256dh.length>0&&"string"==typeof t.endpoint&&t.endpoint.length>0&&"string"==typeof t.swScope&&t.swScope.length>0&&"string"==typeof t.vapidKey&&t.vapidKey.length>0}(t)?null:t}const lA="firebase-messaging-store";let lD=null;function lN(){return lD||(lD=(0,o$.openDB)("firebase-messaging-database",1,{upgrade:(e,t)=>{0===t&&e.createObjectStore(lA)}})),lD}async function lx(e){let t=function({appConfig:e}){return e.appId}(e),n=await lN(),i=await n.transaction(lA).objectStore(lA).get(t);if(i)return i;{let t=await lk(e.appConfig.senderId);if(t)return await lL(e,t),t}}async function lL(e,t){let n=function({appConfig:e}){return e.appId}(e),i=(await lN()).transaction(lA,"readwrite");return await i.objectStore(lA).put(t,n),await i.done,t}async function lR(e){let t=function({appConfig:e}){return e.appId}(e),n=(await lN()).transaction(lA,"readwrite");await n.objectStore(lA).delete(t),await n.done}const lO=new E.ErrorFactory("messaging","Messaging",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."});/**
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
 */async function lP(e,t){let n;let i={method:"POST",headers:await lU(e),body:JSON.stringify(lj(t))};try{let t=await fetch(lF(e.appConfig),i);n=await t.json()}catch(e){throw lO.create("token-subscribe-failed",{errorInfo:null==e?void 0:e.toString()})}if(n.error){let e=n.error.message;throw lO.create("token-subscribe-failed",{errorInfo:e})}if(!n.token)throw lO.create("token-subscribe-no-token");return n.token}async function lM(e,t){let n;let i={method:"PATCH",headers:await lU(e),body:JSON.stringify(lj(t.subscriptionOptions))};try{let r=await fetch(`${lF(e.appConfig)}/${t.token}`,i);n=await r.json()}catch(e){throw lO.create("token-update-failed",{errorInfo:null==e?void 0:e.toString()})}if(n.error){let e=n.error.message;throw lO.create("token-update-failed",{errorInfo:e})}if(!n.token)throw lO.create("token-update-no-token");return n.token}async function lV(e,t){let n=await lU(e);try{let i=await fetch(`${lF(e.appConfig)}/${t}`,{method:"DELETE",headers:n}),r=await i.json();if(r.error){let e=r.error.message;throw lO.create("token-unsubscribe-failed",{errorInfo:e})}}catch(e){throw lO.create("token-unsubscribe-failed",{errorInfo:null==e?void 0:e.toString()})}}function lF({projectId:e}){return`https://fcmregistrations.googleapis.com/v1/projects/${e}/registrations`}async function lU({appConfig:e,installations:t}){let n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function lj({p256dh:e,auth:t,endpoint:n,vapidKey:i}){let r={web:{endpoint:n,auth:t,p256dh:e}};return i!==lT&&(r.web.applicationPubKey=i),r}async function lq(e){let t=await lz(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:l_(t.getKey("auth")),p256dh:l_(t.getKey("p256dh"))},i=await lx(e.firebaseDependencies);if(!i)return l$(e.firebaseDependencies,n);if(function(e,t){let n=t.vapidKey===e.vapidKey,i=t.endpoint===e.endpoint,r=t.auth===e.auth,s=t.p256dh===e.p256dh;return n&&i&&r&&s}(i.subscriptionOptions,n))return Date.now()>=i.createTime+6048e5?lK(e,{token:i.token,createTime:Date.now(),subscriptionOptions:n}):i.token;try{await lV(e.firebaseDependencies,i.token)}catch(e){console.warn(e)}return l$(e.firebaseDependencies,n)}async function lB(e){let t=await lx(e.firebaseDependencies);t&&(await lV(e.firebaseDependencies,t.token),await lR(e.firebaseDependencies));let n=await e.swRegistration.pushManager.getSubscription();return!n||n.unsubscribe()}async function lK(e,t){try{let n=await lM(e.firebaseDependencies,t),i=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await lL(e.firebaseDependencies,i),n}catch(t){throw await lB(e),t}}async function l$(e,t){let n={token:await lP(e,t),createTime:Date.now(),subscriptionOptions:t};return await lL(e,n),n.token}async function lz(e,t){return await e.pushManager.getSubscription()||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:function(e){let t="=".repeat((4-e.length%4)%4),n=atob((e+t).replace(/\-/g,"+").replace(/_/g,"/")),i=new Uint8Array(n.length);for(let e=0;e<n.length;++e)i[e]=n.charCodeAt(e);return i}(t)})}/**
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
 */function lG(e){let t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return function(e,t){if(!t.notification)return;e.notification={};let n=t.notification.title;n&&(e.notification.title=n);let i=t.notification.body;i&&(e.notification.body=i);let r=t.notification.image;r&&(e.notification.image=r);let s=t.notification.icon;s&&(e.notification.icon=s)}(t,e),e.data&&(t.data=e.data),function(e,t){var n,i,r,s,a;if(!t.fcmOptions&&!(null===(n=t.notification)||void 0===n?void 0:n.click_action))return;e.fcmOptions={};let o=null!==(r=null===(i=t.fcmOptions)||void 0===i?void 0:i.link)&&void 0!==r?r:null===(s=t.notification)||void 0===s?void 0:s.click_action;o&&(e.fcmOptions.link=o);let l=null===(a=t.fcmOptions)||void 0===a?void 0:a.analytics_label;l&&(e.fcmOptions.analyticsLabel=l)}(t,e),t}function lQ(e,t){let n=[];for(let i=0;i<e.length;i++)n.push(e.charAt(i)),i<t.length&&n.push(t.charAt(i));return n.join("")}function lH(e){return lO.create("missing-app-config-values",{valueName:e})}/**
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
 */lQ("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),lQ("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");/**
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
 */class lW{constructor(e,t,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;let i=/**
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
 */function(e){if(!e||!e.options)throw lH("App Configuration Object");if(!e.name)throw lH("App Name");let{options:t}=e;for(let e of["projectId","apiKey","appId","messagingSenderId"])if(!t[e])throw lH(e);return{appName:e.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}(e);this.firebaseDependencies={app:e,appConfig:i,installations:t,analyticsProvider:n}}_delete(){return Promise.resolve()}}/**
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
 */async function lX(e){try{e.swRegistration=await navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope"}),e.swRegistration.update().catch(()=>{})}catch(e){throw lO.create("failed-service-worker-registration",{browserErrorMessage:null==e?void 0:e.message})}}/**
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
 */async function lY(e,t){if(t||e.swRegistration||await lX(e),t||!e.swRegistration){if(!(t instanceof ServiceWorkerRegistration))throw lO.create("invalid-sw-registration");e.swRegistration=t}}/**
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
 */async function lJ(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=lT)}/**
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
 */async function lZ(e,t){if(!navigator)throw lO.create("only-available-in-window");if("default"===Notification.permission&&await Notification.requestPermission(),"granted"!==Notification.permission)throw lO.create("permission-blocked");return await lJ(e,null==t?void 0:t.vapidKey),await lY(e,null==t?void 0:t.serviceWorkerRegistration),lq(e)}/**
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
 */async function l0(e,t,n){let i=function(e){switch(e){case u.NOTIFICATION_CLICKED:return"notification_open";case u.PUSH_RECEIVED:return"notification_foreground";default:throw Error()}}(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(i,{message_id:n[lS],message_name:n["google.c.a.c_l"],message_time:n["google.c.a.ts"],message_device_time:Math.floor(Date.now()/1e3)})}/**
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
 */async function l1(e,t){let n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===u.PUSH_RECEIVED&&("function"==typeof e.onMessageHandler?e.onMessageHandler(lG(n)):e.onMessageHandler.next(lG(n)));let i=n.data;"object"==typeof i&&i&&lS in i&&"1"===i["google.c.a.e"]&&await l0(e,n.messageType,i)}const l2="@firebase/messaging",l9="0.12.6";/**
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
 */async function l4(){try{await (0,E.validateIndexedDBOpenable)()}catch(e){return!1}return"undefined"!=typeof window&&(0,E.isIndexedDBAvailable)()&&(0,E.areCookiesEnabled)()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}async function l6(e,t){return lZ(e=(0,E.getModularInstance)(e),t)}(0,y._registerComponent)(new v.Component("messaging",e=>{let t=new lW(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",e=>l1(t,e)),t},"PUBLIC")),(0,y._registerComponent)(new v.Component("messaging-internal",e=>{let t=e.getProvider("messaging").getImmediate();return{getToken:e=>lZ(t,e)}},"PRIVATE")),(0,y.registerVersion)(l2,l9),(0,y.registerVersion)(l2,l9,"esm2017");const l5=(0,m.initializeApp)({apiKey:"AIzaSyCPv6_IQXEZEyeOGsGIwGjcTbO5_8OYwMw",authDomain:"percussioninstruments-f921d.firebaseapp.com",projectId:"percussioninstruments-f921d",storageBucket:"percussioninstruments-f921d.appspot.com",messagingSenderId:"596737742766",appId:"1:596737742766:web:d874df4e5e4ded66941a3f",measurementId:"G-N1FVQNQ277"}),l7=function(e,t){let n="object"==typeof e?e:(0,y.getApp)(),i=(0,y._getProvider)(n,"firestore").getImmediate({identifier:"string"==typeof e?e:"(default)"});if(!i._initialized){let e=(0,E.getDefaultEmulatorHostnameAndPort)("firestore");e&&function(e,t,n,i={}){var r;let s=(e=ob(e,oS))._getSettings(),a=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==a&&it("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),i.mockUserToken){let t,n;if("string"==typeof i.mockUserToken)t=i.mockUserToken,n=n6.MOCK_USER;else{t=(0,E.createMockUserToken)(i.mockUserToken,null===(r=e._app)||void 0===r?void 0:r.options.projectId);let s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new ia(is.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new n6(s)}e._authCredentials=new iu(new il(t,n))}}(i,...e)}return i}(l5),l3=/**
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
 */function(e=(0,y.getApp)()){return l4().then(e=>{if(!e)throw lO.create("unsupported-browser")},e=>{throw lO.create("indexed-db-unsupported")}),(0,y._getProvider)((0,E.getModularInstance)(e),"messaging").getImmediate()}(l5);let l8=[];function he(){console.log("Requesting permission..."),Notification.requestPermission().then(e=>{"granted"===e?(console.log("Notification permission granted."),l6(l3,{vapidKey:"BIGjMPck3RTuB5p-1nOFueqoEzwYxxsdqvQg32-Qv2VHDjUNrsoGeUiiw55oEbAfxc7PyPNqie7LcBVn2xIEf00"}).then(e=>{e?console.log("Registration token:",e):console.log("No registration token available. Request permission to generate one.")}).catch(e=>{console.log("An error occurred while retrieving token. ",e)})):console.log("Unable to get permission to notify.")})}var ht={};ht=new URL("service-worker.js",import.meta.url).toString();var hn={};hn=new URL("firebase-messaging-sw.js",import.meta.url).toString(),"serviceWorker"in navigator&&(navigator.serviceWorker.register(ht).then(function(e){console.log("Service Worker service-worker.js Registered",e)}).catch(function(e){console.log("Service Worker service-worker.js registration failed: ",e)}),navigator.serviceWorker.register(hn).then(function(e){console.log("Service Worker firebase-messaging-sw.js Registered",e)}).catch(function(e){console.log("Service Worker firebase-messaging-sw.js registration failed: ",e)})),window.addEventListener("beforeinstallprompt",t=>{t.preventDefault(),e=t,function(){let t=document.getElementById("install-button");t.style.display="block",t.addEventListener("click",async()=>{t.style.display="none",e.prompt();let{outcome:n}=await e.userChoice;console.log(`User response to the install prompt: ${n}`),e=null})}()}),window.addEventListener("appinstalled",e=>{console.log("App was installed.")}),document.addEventListener("DOMContentLoaded",async()=>{let e=document.getElementById("search-input"),t=document.getElementById("search-results"),n=document.getElementById("instrument-details"),i=document.getElementById("enable-notifications");async function r(){let e=localStorage.getItem("instrumentsList");if(e)l8=JSON.parse(e),console.log("Instruments list retrieved from Local Storage");else{let e=function(e,t,...n){if(e=(0,E.getModularInstance)(e),/**
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
 */function(e,t,n){if(!n)throw new ia(is.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}("collection","path",t),e instanceof oS){let i=iS.fromString(t,...n);return oE(i),new oI(e,null,i)}{if(!(e instanceof oC||e instanceof oI))throw new ia(is.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let i=e._path.child(iS.fromString(t,...n));return oE(i),new oI(e.firestore,null,i)}}(l7,"Instruments");l8=(await function(e){e=ob(e,o_);let t=ob(e.firestore,oA),n=(t._firestoreClient||oD(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient),i=new oK(t);return(/**
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
 */function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new ia(is.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),(function(e,t,n={}){let i=new io;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,i,r){let s=new aZ(n,new oc({next:n=>{t.enqueueAndForget(()=>aW(e,s)),n.fromCache&&"server"===i.source?r.reject(new ia(is.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):r.resolve(n)},error:e=>r.reject(e)}),{includeMetadataChanges:!0,Z_:!0});return aH(e,s)})(await oy(e),e.asyncQueue,t,n,i)),i.promise})(n,e._query).then(n=>new oB(t,i,e,n)))}(e)).docs.map(e=>e.data()),localStorage.setItem("instrumentsList",JSON.stringify(l8)),console.log("Instruments list fetched from Firestore and stored in Local Storage")}}t.classList.add("hidden"),n.classList.add("hidden"),he(),"Notification"in window?"default"===Notification.permission?(i.style.display="block",i.addEventListener("click",he)):i.style.display="none":(i.style.display="none",console.log("This browser does not support notifications.")),await r(),e.addEventListener("input",e=>{let i=e.target.value.trim();console.log("Search input value:",i),i?function(e){try{let i=e.toLowerCase();console.log("Search text:",i);let r=l8.filter(e=>!!(e.InstrumentName&&e.InstrumentName.toLowerCase().includes(i))&&(console.log("Matching instrument:",e.InstrumentName),!0));console.log("Search results:",r),0===r.length?(t.innerHTML="<div>No results found.</div>",t.classList.remove("hidden"),n.classList.add("hidden")):(console.log("Displaying search results"),t.innerHTML="",r.forEach(e=>{let i=document.createElement("div");i.textContent=e.InstrumentName,i.addEventListener("click",()=>{n.innerHTML=`
            <h2>${e.InstrumentName}</h2>
            <p>${e.Description}</p>
            <p>French: ${e.French}</p>
            <p>German: ${e.German}</p>
            <p>Italian: ${e.Italian}</p>
            <p>Spanish: ${e.Spanish}</p>
        `,n.classList.remove("hidden"),t.classList.add("hidden")}),t.appendChild(i)}),t.classList.remove("hidden"))}catch(e){console.error("Error searching instruments:",e),t.innerHTML='<div class="error">An error occurred while searching instruments.</div>',t.classList.remove("hidden"),n.classList.add("hidden")}}(i):(t.classList.add("hidden"),n.classList.add("hidden"))})});
//# sourceMappingURL=index.92855a38.js.map
