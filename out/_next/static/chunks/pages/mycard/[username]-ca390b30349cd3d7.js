(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[837],{2350:function(){},3144:function(e){"use strict";let t=self.fetch.bind(self);e.exports=t,e.exports.default=e.exports},2522:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mycard/[username]",function(){return i(7406)}])},9578:function(e,t,i){var s=i(4155);i(2350);var r=i(7294),o=r&&"object"==typeof r&&"default"in r?r:{default:r};function n(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var a=void 0!==s&&s.env&&!0,l=function(e){return"[object String]"===Object.prototype.toString.call(e)},c=function(){function e(e){var t=void 0===e?{}:e,i=t.name,s=void 0===i?"stylesheet":i,r=t.optimizeForSpeed,o=void 0===r?a:r;f(l(s),"`name` must be a string"),this._name=s,this._deletedRulePlaceholder="#"+s+"-deleted-rule____{}",f("boolean"==typeof o,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=o,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var n=document.querySelector('meta[property="csp-nonce"]');this._nonce=n?n.getAttribute("content"):null}var t,i=e.prototype;return i.setOptimizeForSpeed=function(e){f("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),f(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},i.isOptimizeForSpeed=function(){return this._optimizeForSpeed},i.inject=function(){var e=this;if(f(!this._injected,"sheet already injected"),this._injected=!0,this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(a||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,i){return"number"==typeof i?e._serverSheet.cssRules[i]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),i},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},i.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},i.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},i.insertRule=function(e,t){if(f(l(e),"`insertRule` accepts only strings"),this._optimizeForSpeed){var i=this.getSheet();"number"!=typeof t&&(t=i.cssRules.length);try{i.insertRule(e,t)}catch(t){return a||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var s=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,s))}return this._rulesCount++},i.replaceRule=function(e,t){if(this._optimizeForSpeed){var i=this.getSheet();if(t.trim()||(t=this._deletedRulePlaceholder),!i.cssRules[e])return e;i.deleteRule(e);try{i.insertRule(t,e)}catch(s){a||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),i.insertRule(this._deletedRulePlaceholder,e)}}else{var s=this._tags[e];f(s,"old rule at index `"+e+"` not found"),s.textContent=t}return e},i.deleteRule=function(e){if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];f(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},i.flush=function(){this._injected=!1,this._rulesCount=0,this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]},i.cssRules=function(){var e=this;return this._tags.reduce(function(t,i){return i?t=t.concat(Array.prototype.map.call(e.getSheetForTag(i).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[])},i.makeStyleTag=function(e,t,i){t&&f(l(t),"makeStyleTag accepts only strings as second parameter");var s=document.createElement("style");this._nonce&&s.setAttribute("nonce",this._nonce),s.type="text/css",s.setAttribute("data-"+e,""),t&&s.appendChild(document.createTextNode(t));var r=document.head||document.getElementsByTagName("head")[0];return i?r.insertBefore(s,i):r.appendChild(s),s},n(e.prototype,[{key:"length",get:function(){return this._rulesCount}}]),t&&n(e,t),e}();function f(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var d=function(e){for(var t=5381,i=e.length;i;)t=33*t^e.charCodeAt(--i);return t>>>0},u={};function p(e,t){if(!t)return"jsx-"+e;var i=String(t),s=e+i;return u[s]||(u[s]="jsx-"+d(e+"-"+i)),u[s]}function h(e,t){var i=e+t;return u[i]||(u[i]=t.replace(/__jsx-style-dynamic-selector/g,e)),u[i]}var m=function(){function e(e){var t=void 0===e?{}:e,i=t.styleSheet,s=void 0===i?null:i,r=t.optimizeForSpeed,o=void 0!==r&&r;this._sheet=s||new c({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),s&&"boolean"==typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer||(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var i=this.getIdAndRules(e),s=i.styleId,r=i.rules;if(s in this._instancesCounts){this._instancesCounts[s]+=1;return}var o=r.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return -1!==e});this._indices[s]=o,this._instancesCounts[s]=1},t.remove=function(e){var t=this,i=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw Error("StyleSheetRegistry: "+t+".")}(i in this._instancesCounts,"styleId: `"+i+"` not found"),this._instancesCounts[i]-=1,this._instancesCounts[i]<1){var s=this._fromServer&&this._fromServer[i];s?(s.parentNode.removeChild(s),delete this._fromServer[i]):(this._indices[i].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[i]),delete this._instancesCounts[i]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],i=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return i[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return!!e[1]}))},t.styles=function(e){var t,i;return t=this.cssRules(),void 0===(i=e)&&(i={}),t.map(function(e){var t=e[0],s=e[1];return o.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:i.nonce?i.nonce:void 0,dangerouslySetInnerHTML:{__html:s}})})},t.getIdAndRules=function(e){var t=e.children,i=e.dynamic,s=e.id;if(i){var r=p(s,i);return{styleId:r,rules:Array.isArray(t)?t.map(function(e){return h(r,e)}):[h(r,t)]}}return{styleId:p(s),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},e}(),x=r.createContext(null);x.displayName="StyleSheetContext";var b=o.default.useInsertionEffect||o.default.useLayoutEffect,y=new m;function v(e){var t=y||r.useContext(x);return t&&b(function(){return t.add(e),function(){t.remove(e)}},[e.id,String(e.dynamic)]),null}v.dynamic=function(e){return e.map(function(e){return p(e[0],e[1])}).join(" ")},t.style=v},6465:function(e,t,i){"use strict";e.exports=i(9578).style},7406:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSG:function(){return l}});var s=i(5893),r=i(6465),o=i.n(r),n=i(1163);i(3299),i(6333);let a=e=>{let{user:t}=e,i=(0,n.useRouter)();return i.isFallback?(0,s.jsx)("div",{children:"Loading..."}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{onClick:function(e){let t=e.currentTarget;"rotateY(180deg)"==t.style.transform?t.style.transform="rotateY(0deg)":t.style.transform="rotateY(180deg)"},className:"jsx-66fd48b2fa8210ac card rounded-md w-96 h-60 bg-black",children:[(0,s.jsxs)("div",{className:"jsx-66fd48b2fa8210ac front",children:[(0,s.jsx)("div",{className:"jsx-66fd48b2fa8210ac profile",children:(0,s.jsx)("img",{class:"profileimg",src:t.avatar_url,alt:"profileimg",className:"jsx-66fd48b2fa8210ac"})}),(0,s.jsx)("div",{className:"jsx-66fd48b2fa8210ac introduction",children:t.bio}),(0,s.jsxs)("div",{className:"jsx-66fd48b2fa8210ac followers_num",children:["\uD83D\uDC68‍\uD83D\uDC66‍\uD83D\uDC66",t.followers]}),(0,s.jsx)("div",{className:"jsx-66fd48b2fa8210ac followers",children:"followers"}),(0,s.jsx)("div",{className:"jsx-66fd48b2fa8210ac following_num",children:t.following}),(0,s.jsx)("div",{className:"jsx-66fd48b2fa8210ac following",children:"following"}),(0,s.jsxs)("div",{className:"jsx-66fd48b2fa8210ac organization",children:["\uD83C\uDFD9 ",t.company]}),(0,s.jsxs)("div",{className:"jsx-66fd48b2fa8210ac email",children:["✉ ",t.email]}),(0,s.jsxs)("div",{className:"jsx-66fd48b2fa8210ac location",children:["\uD83C\uDF0D ",t.location]}),(0,s.jsx)("div",{className:"jsx-66fd48b2fa8210ac name",children:t.name}),(0,s.jsxs)("div",{className:"jsx-66fd48b2fa8210ac git-id",children:["@",t.login]}),(0,s.jsx)("div",{className:"jsx-66fd48b2fa8210ac image1"}),(0,s.jsx)("div",{className:"jsx-66fd48b2fa8210ac image2"}),(0,s.jsx)("hr",{className:"jsx-66fd48b2fa8210ac line"}),(0,s.jsxs)("div",{className:"jsx-66fd48b2fa8210ac repos1",children:[(0,s.jsx)("div",{className:"jsx-66fd48b2fa8210ac typelevel-parser1",children:"\uD83D\uDCCCtypelevel-parser"}),(0,s.jsx)("div",{className:"jsx-66fd48b2fa8210ac stars1",children:"⭐131"}),(0,s.jsx)("div",{className:"jsx-66fd48b2fa8210ac TypeScript1",children:"\uD83D\uDD35TypeScript"}),(0,s.jsx)("div",{className:"jsx-66fd48b2fa8210ac text1",children:"Experiment to push the limits"})]}),(0,s.jsxs)("div",{className:"jsx-66fd48b2fa8210ac repos2",children:[(0,s.jsx)("div",{className:"jsx-66fd48b2fa8210ac typelevel-parser2",children:"\uD83D\uDCCCtypelevel-parser"}),(0,s.jsx)("div",{className:"jsx-66fd48b2fa8210ac stars2",children:"⭐131"}),(0,s.jsx)("div",{className:"jsx-66fd48b2fa8210ac TypeScript2",children:"\uD83D\uDD35TypeScript"}),(0,s.jsx)("div",{className:"jsx-66fd48b2fa8210ac text2",children:"Experiment to push the limits of TypeScript's type system"})]})]}),(0,s.jsx)("div",{className:"jsx-66fd48b2fa8210ac back",children:(0,s.jsxs)("div",{className:"jsx-66fd48b2fa8210ac flex flex-col items-center justify-center h-full",children:[(0,s.jsx)("img",{src:"https://github-readme-stats.vercel.app/api?username=".concat(t.login,"&show_icons=true&theme=monokai"),className:"jsx-66fd48b2fa8210ac w-96 h-40"}),(0,s.jsx)("img",{src:"https://github-readme-stats.vercel.app/api/top-langs/?username=".concat(t.login,"&layout=compact"),className:"jsx-66fd48b2fa8210ac w-96 h-20"})]})})]}),(0,s.jsx)(o(),{id:"66fd48b2fa8210ac",children:".card.jsx-66fd48b2fa8210ac{-webkit-transition:-webkit-transform 1s;-moz-transition:-moz-transform 1s;-o-transition:-o-transform 1s;transition:-webkit-transform 1s;transition:-moz-transform 1s;transition:-o-transform 1s;transition:transform 1s;-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;transform-style:preserve-3d;cursor:pointer;-webkit-transform:rotatey(0);-moz-transform:rotatey(0);transform:rotatey(0);position:relative}.front.jsx-66fd48b2fa8210ac,.back.jsx-66fd48b2fa8210ac{-webkit-border-radius:7px;-moz-border-radius:7px;border-radius:7px;color:white;position:absolute;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;backface-visibility:hidden}.back.jsx-66fd48b2fa8210ac{-webkit-transform:rotatey(180deg);-moz-transform:rotatey(180deg);transform:rotatey(180deg)}.profile.jsx-66fd48b2fa8210ac{left:35px;top:15px;width:90px;height:90px;background:rgba(191,255,255,.800000011920929);opacity:1;position:absolute;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;overflow:hidden;background-position:center center;border:.5px solid rgba(61,25,25,1)}.introduction.jsx-66fd48b2fa8210ac{width:125px;left:20px;top:110px;position:absolute;font-size:5px;text-align:center}.followers_num.jsx-66fd48b2fa8210ac{left:10px;top:155px;position:absolute;font-size:10px;font-family:NanumSquare Neo;font-weight:Regular;display:inline-block;white-space:nowrap}.followers.jsx-66fd48b2fa8210ac{position:absolute;top:155px;left:45px;font-size:10px;opacity:.5;font-family:NanumSquare Neo;font-weight:Regular}.following_num.jsx-66fd48b2fa8210ac{left:90px;top:155px;position:absolute;font-size:10px;font-family:NanumSquare Neo;font-weight:Regular}.following.jsx-66fd48b2fa8210ac{position:absolute;top:155px;left:110px;font-size:10px;opacity:.5;font-family:NanumSquare Neo;font-weight:Regular}.organization.jsx-66fd48b2fa8210ac{left:13px;top:175px;position:absolute;font-size:10px;font-family:NanumSquare Neo;font-weight:Regular;display:inline-block;white-space:nowrap}.email.jsx-66fd48b2fa8210ac{left:13px;top:195px;position:absolute;font-size:10px;font-family:NanumSquare Neo;font-weight:Regular;display:inline-block;white-space:nowrap}.location.jsx-66fd48b2fa8210ac{left:11px;top:215px;position:absolute;font-size:10px;font-family:NanumSquare Neo;font-weight:Regular;display:inline-block;white-space:nowrap}.name.jsx-66fd48b2fa8210ac{left:160px;top:20px;position:absolute;font-size:25px;font-family:NanumSquare Neo;font-weight:Heavy;display:inline-block;white-space:nowrap}.git-id.jsx-66fd48b2fa8210ac{left:160px;top:50px;position:absolute;font-size:17px;opacity:.5;font-family:NanumSquare Neo;display:inline-block;white-space:nowrap}.image1.jsx-66fd48b2fa8210ac{background-color:blue;position:absolute;width:25px;height:25px;-webkit-border-radius:7px;-moz-border-radius:7px;border-radius:7px;opacity:.6;top:80px;left:160px}.image2.jsx-66fd48b2fa8210ac{background-color:purple;position:absolute;width:25px;height:25px;-webkit-border-radius:7px;-moz-border-radius:7px;border-radius:7px;opacity:.6;top:80px;left:190px}.line.jsx-66fd48b2fa8210ac{position:absolute;width:220px;color:#808080;left:160px;top:110px}.repos1.jsx-66fd48b2fa8210ac{position:absolute;-webkit-border-radius:7px;-moz-border-radius:7px;border-radius:7px;border-color:gray;border-width:1px;width:220px;height:50px;left:160px;top:120px}.typelevel-parser1.jsx-66fd48b2fa8210ac{position:relative;left:10px;font-size:10px;color:rgb(0,153,255);font-family:NanumSquare Neo;font-weight:Heavy}.stars1.jsx-66fd48b2fa8210ac{position:relative;top:-13px;left:120px;font-size:10px;font-family:NanumSquare Neo}.TypeScript1.jsx-66fd48b2fa8210ac{position:relative;top:-28px;left:155px;font-size:10px;font-family:NanumSquare Neo}.text1.jsx-66fd48b2fa8210ac{position:relative;left:5px;top:-30px;font-size:10px;font-family:NanumSquare Neo}.repos2.jsx-66fd48b2fa8210ac{position:absolute;-webkit-border-radius:7px;-moz-border-radius:7px;border-radius:7px;border-color:gray;border-width:1px;width:220px;height:50px;left:160px;top:180px}.typelevel-parser2.jsx-66fd48b2fa8210ac{position:relative;left:10px;font-size:10px;color:rgb(0,153,255);font-family:NanumSquare Neo;font-weight:Heavy}.stars2.jsx-66fd48b2fa8210ac{position:relative;top:-13px;left:120px;font-size:10px;font-family:NanumSquare Neo}.TypeScript2.jsx-66fd48b2fa8210ac{position:relative;top:-28px;left:155px;font-size:10px;font-family:NanumSquare Neo}.text2.jsx-66fd48b2fa8210ac{position:relative;left:5px;top:-30px;font-size:10px;font-family:NanumSquare Neo}"})]})};var l=!0;t.default=a},6333:function(e,t,i){"use strict";i.r(t);var s=i(5893),r=i(7294),o=i(3144),n=i.n(o);let a=e=>{let{username:t}=e,[i,o]=(0,r.useState)([]);return(0,r.useEffect)(()=>{let e=async()=>{let e=await n()("https://api.github.com/users/".concat(t,"/followers")),i=await e.json();o(i)};e()},[t]),(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{children:"Followers:"}),(0,s.jsx)("ul",{children:i.map(e=>(0,s.jsx)("li",{children:e.login},e.id))})]})};t.default=a},1163:function(e,t,i){e.exports=i(6885)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=2522)}),_N_E=e.O()}]);