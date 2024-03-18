var e,t=globalThis,n={},r={},i=t.parcelRequirea6aa;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequirea6aa=i),i.register;var a=i("fhN3L"),s=i("7xvHX"),o=i("gMVVg"),u=i("eryG9");function l(e,t){let n={};for(let r in e)e.hasOwnProperty(r)&&(n[r]=t(e[r]));return n}function c(e){if(null==e)return e;if(e["@type"])switch(e["@type"]){case"type.googleapis.com/google.protobuf.Int64Value":case"type.googleapis.com/google.protobuf.UInt64Value":{let t=Number(e.value);if(isNaN(t))throw Error("Data cannot be decoded from JSON: "+e);return t}default:throw Error("Data cannot be decoded from JSON: "+e)}return Array.isArray(e)?e.map(e=>c(e)):"function"==typeof e||"object"==typeof e?l(e,e=>c(e)):e}/**
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
 */const d="functions",m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class h extends o.FirebaseError{constructor(e,t,n){super(`${d}/${e}`,t||""),this.details=n}}/**
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
 */class p{constructor(e,t,n){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=t.getImmediate({optional:!0}),this.auth||e.get().then(e=>this.auth=e,()=>{}),this.messaging||t.get().then(e=>this.messaging=e,()=>{}),this.appCheck||n.get().then(e=>this.appCheck=e,()=>{})}async getAuthToken(){if(this.auth)try{let e=await this.auth.getToken();return null==e?void 0:e.accessToken}catch(e){return}}async getMessagingToken(){if(this.messaging&&"Notification"in self&&"granted"===Notification.permission)try{return await this.messaging.getToken()}catch(e){return}}async getAppCheckToken(e){if(this.appCheck){let t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){return{authToken:await this.getAuthToken(),messagingToken:await this.getMessagingToken(),appCheckToken:await this.getAppCheckToken(e)}}}/**
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
 */const g="us-central1";class f{constructor(e,t,n,r,i=g,a){this.app=e,this.fetchImpl=a,this.emulatorOrigin=null,this.contextProvider=new p(t,n,r),this.cancelAllRequests=new Promise(e=>{this.deleteService=()=>Promise.resolve(e())});try{let e=new URL(i);this.customDomain=e.origin,this.region=g}catch(e){this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){let t=this.app.options.projectId;if(null!==this.emulatorOrigin){let n=this.emulatorOrigin;return`${n}/${t}/${this.region}/${e}`}return null!==this.customDomain?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}async function I(e,t,n,r){let i;n["Content-Type"]="application/json";try{i=await r(e,{method:"POST",body:JSON.stringify(t),headers:n})}catch(e){return{status:0,json:null}}let a=null;try{a=await i.json()}catch(e){}return{status:i.status,json:a}}async function E(e,t,n,r){var i;let a;let s={data:n=function e(t){if(null==t)return null;if(t instanceof Number&&(t=t.valueOf()),"number"==typeof t&&isFinite(t)||!0===t||!1===t||"[object String]"===Object.prototype.toString.call(t))return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(t=>e(t));if("function"==typeof t||"object"==typeof t)return l(t,t=>e(t));throw Error("Data cannot be encoded in JSON: "+t)}(n)},o={},u=await e.contextProvider.getContext(r.limitedUseAppCheckTokens);u.authToken&&(o.Authorization="Bearer "+u.authToken),u.messagingToken&&(o["Firebase-Instance-ID-Token"]=u.messagingToken),null!==u.appCheckToken&&(o["X-Firebase-AppCheck"]=u.appCheckToken);let d=(i=r.timeout||7e4,a=null,{promise:new Promise((e,t)=>{a=setTimeout(()=>{t(new h("deadline-exceeded","deadline-exceeded"))},i)}),cancel:()=>{a&&clearTimeout(a)}}),p=await Promise.race([I(t,s,o,e.fetchImpl),d.promise,e.cancelAllRequests]);if(d.cancel(),!p)throw new h("cancelled","Firebase Functions instance was deleted.");let g=function(e,t){let n,r=function(e){if(e>=200&&e<300)return"ok";switch(e){case 0:case 500:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}(e),i=r;try{let e=t&&t.error;if(e){let t=e.status;if("string"==typeof t){if(!m[t])return new h("internal","internal");r=m[t],i=t}let a=e.message;"string"==typeof a&&(i=a),n=e.details,void 0!==n&&(n=c(n))}}catch(e){}return"ok"===r?null:new h(r,i,n)}(p.status,p.json);if(g)throw g;if(!p.json)throw new h("internal","Response is not valid JSON object.");let f=p.json.data;if(void 0===f&&(f=p.json.result),void 0===f)throw new h("internal","Response is missing data field.");return{data:c(f)}}const y="@firebase/functions",w="0.11.2";e=fetch.bind(self),(0,s._registerComponent)(new(0,u.Component)(d,(t,{instanceIdentifier:n})=>{let r=t.getProvider("app").getImmediate();return new f(r,t.getProvider("auth-internal"),t.getProvider("messaging-internal"),t.getProvider("app-check-internal"),n,e)},"PUBLIC").setMultipleInstances(!0)),(0,s.registerVersion)(y,w,void 0),(0,s.registerVersion)(y,w,"esm2017");const k=/**
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
 */function(e=(0,s.getApp)(),t=g){let n=(0,s._getProvider)((0,o.getModularInstance)(e),d).getImmediate({identifier:t}),r=(0,o.getDefaultEmulatorHostnameAndPort)("functions");return r&&function(e,t,n){(0,o.getModularInstance)(e).emulatorOrigin=`http://${t}:${n}`}(n,...r),n}((0,a.initializeApp)({apiKey:"AIzaSyCPv6_IQXEZEyeOGsGIwGjcTbO5_8OYwMw",authDomain:"percussioninstruments-f921d.firebaseapp.com",projectId:"percussioninstruments-f921d",storageBucket:"percussioninstruments-f921d.appspot.com",messagingSenderId:"596737742766",appId:"1:596737742766:web:d874df4e5e4ded66941a3f",measurementId:"G-N1FVQNQ277"}));document.getElementById("add-instrument-form").addEventListener("submit",async e=>{e.preventDefault();let t=document.getElementById("instrument-name").value,n=document.getElementById("description").value,r=document.getElementById("french").value,i=document.getElementById("german").value,a=document.getElementById("italian").value,s=document.getElementById("spanish").value;try{var u,l,c;let e=(u="sendInstrumentSubmission",l=(0,o.getModularInstance)(k),c=void 0,e=>(function(e,t,n,r){let i=e._url(t);return E(e,i,n,r)})(l,u,e,c||{}));await e({instrumentName:t,description:n,french:r,german:i,italian:a,spanish:s}),alert("Instrument submission sent to the developer for review."),document.getElementById("add-instrument-form").reset()}catch(e){console.error("Error sending instrument submission:",e),alert("An error occurred while sending the instrument submission.")}});
//# sourceMappingURL=add-instrument.c9b22cbe.js.map
