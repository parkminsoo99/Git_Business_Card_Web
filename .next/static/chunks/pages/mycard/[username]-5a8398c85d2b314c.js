(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[837],{2350:function(){},3144:function(e){"use strict";let t=self.fetch.bind(self);e.exports=t,e.exports.default=e.exports},2522:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mycard/[username]",function(){return s(7406)}])},9578:function(e,t,s){var i=s(4155);s(2350);var r=s(7294),o=r&&"object"==typeof r&&"default"in r?r:{default:r};function n(e,t){for(var s=0;s<t.length;s++){var i=t[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var a=void 0!==i&&i.env&&!0,l=function(e){return"[object String]"===Object.prototype.toString.call(e)},f=function(){function e(e){var t=void 0===e?{}:e,s=t.name,i=void 0===s?"stylesheet":s,r=t.optimizeForSpeed,o=void 0===r?a:r;c(l(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",c("boolean"==typeof o,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=o,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var n=document.querySelector('meta[property="csp-nonce"]');this._nonce=n?n.getAttribute("content"):null}var t,s=e.prototype;return s.setOptimizeForSpeed=function(e){c("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),c(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},s.isOptimizeForSpeed=function(){return this._optimizeForSpeed},s.inject=function(){var e=this;if(c(!this._injected,"sheet already injected"),this._injected=!0,this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(a||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,s){return"number"==typeof s?e._serverSheet.cssRules[s]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),s},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},s.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},s.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},s.insertRule=function(e,t){if(c(l(e),"`insertRule` accepts only strings"),this._optimizeForSpeed){var s=this.getSheet();"number"!=typeof t&&(t=s.cssRules.length);try{s.insertRule(e,t)}catch(t){return a||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++},s.replaceRule=function(e,t){if(this._optimizeForSpeed){var s=this.getSheet();if(t.trim()||(t=this._deletedRulePlaceholder),!s.cssRules[e])return e;s.deleteRule(e);try{s.insertRule(t,e)}catch(i){a||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),s.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];c(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e},s.deleteRule=function(e){if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];c(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},s.flush=function(){this._injected=!1,this._rulesCount=0,this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]},s.cssRules=function(){var e=this;return this._tags.reduce(function(t,s){return s?t=t.concat(Array.prototype.map.call(e.getSheetForTag(s).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[])},s.makeStyleTag=function(e,t,s){t&&c(l(t),"makeStyleTag accepts only strings as second parameter");var i=document.createElement("style");this._nonce&&i.setAttribute("nonce",this._nonce),i.type="text/css",i.setAttribute("data-"+e,""),t&&i.appendChild(document.createTextNode(t));var r=document.head||document.getElementsByTagName("head")[0];return s?r.insertBefore(i,s):r.appendChild(i),i},n(e.prototype,[{key:"length",get:function(){return this._rulesCount}}]),t&&n(e,t),e}();function c(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var u=function(e){for(var t=5381,s=e.length;s;)t=33*t^e.charCodeAt(--s);return t>>>0},p={};function d(e,t){if(!t)return"jsx-"+e;var s=String(t),i=e+s;return p[i]||(p[i]="jsx-"+u(e+"-"+s)),p[i]}function h(e,t){var s=e+t;return p[s]||(p[s]=t.replace(/__jsx-style-dynamic-selector/g,e)),p[s]}var m=function(){function e(e){var t=void 0===e?{}:e,s=t.styleSheet,i=void 0===s?null:s,r=t.optimizeForSpeed,o=void 0!==r&&r;this._sheet=i||new f({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),i&&"boolean"==typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer||(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var s=this.getIdAndRules(e),i=s.styleId,r=s.rules;if(i in this._instancesCounts){this._instancesCounts[i]+=1;return}var o=r.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return -1!==e});this._indices[i]=o,this._instancesCounts[i]=1},t.remove=function(e){var t=this,s=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw Error("StyleSheetRegistry: "+t+".")}(s in this._instancesCounts,"styleId: `"+s+"` not found"),this._instancesCounts[s]-=1,this._instancesCounts[s]<1){var i=this._fromServer&&this._fromServer[s];i?(i.parentNode.removeChild(i),delete this._fromServer[s]):(this._indices[s].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[s]),delete this._instancesCounts[s]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],s=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return s[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return!!e[1]}))},t.styles=function(e){var t,s;return t=this.cssRules(),void 0===(s=e)&&(s={}),t.map(function(e){var t=e[0],i=e[1];return o.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:s.nonce?s.nonce:void 0,dangerouslySetInnerHTML:{__html:i}})})},t.getIdAndRules=function(e){var t=e.children,s=e.dynamic,i=e.id;if(s){var r=d(i,s);return{styleId:r,rules:Array.isArray(t)?t.map(function(e){return h(r,e)}):[h(r,t)]}}return{styleId:d(i),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},e}(),x=r.createContext(null);x.displayName="StyleSheetContext";var y=o.default.useInsertionEffect||o.default.useLayoutEffect,v=new m;function g(e){var t=v||r.useContext(x);return t&&y(function(){return t.add(e),function(){t.remove(e)}},[e.id,String(e.dynamic)]),null}g.dynamic=function(e){return e.map(function(e){return d(e[0],e[1])}).join(" ")},t.style=g},6465:function(e,t,s){"use strict";e.exports=s(9578).style},7406:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return a}});var i=s(5893),r=s(6465),o=s.n(r);s(3144);var n=s(1163),a=!0;t.default=e=>{let{user_profile_info:t,repos:s,orgs:r}=e;console.log("function in : ",t);let a=(0,n.useRouter)();return a.isFallback?(0,i.jsx)("div",{children:"Loading..."}):(0,i.jsxs)(i.Fragment,{children:[" "," "," ",(0,i.jsxs)("section",{className:"text-gray-600 body-font mb-24",children:[" ",(0,i.jsxs)("div",{className:"jsx-19794a22f856e14f container mx-auto flex flex-col px-5 py-24 justify-center items-center",children:[(0,i.jsxs)("div",{onClick:function(e){let t=e.currentTarget;"rotateY(180deg)"==t.style.transform?t.style.transform="rotateY(0deg)":t.style.transform="rotateY(180deg)"},className:"jsx-19794a22f856e14f card rounded-md w-96 h-60 bg-black",children:[(0,i.jsxs)("div",{className:"jsx-19794a22f856e14f front",children:[(0,i.jsx)("div",{className:"jsx-19794a22f856e14f profile",children:(0,i.jsx)("img",{src:t.avatar_url,alt:"profileimg",className:"jsx-19794a22f856e14f profileimg"})}),(0,i.jsx)("div",{className:"jsx-19794a22f856e14f introduction",children:t.bio}),(0,i.jsxs)("div",{className:"jsx-19794a22f856e14f followers_num",children:["\uD83D\uDC68‍\uD83D\uDC66‍\uD83D\uDC66",t.followers]}),(0,i.jsx)("div",{className:"jsx-19794a22f856e14f followers",children:"followers"}),(0,i.jsx)("div",{className:"jsx-19794a22f856e14f following_num",children:t.following}),(0,i.jsx)("div",{className:"jsx-19794a22f856e14f following",children:"following"}),(0,i.jsxs)("div",{className:"jsx-19794a22f856e14f organization",children:["\uD83C\uDFD9 ",t.company]}),(0,i.jsxs)("div",{className:"jsx-19794a22f856e14f email",children:["✉ ",t.email]}),(0,i.jsxs)("div",{className:"jsx-19794a22f856e14f location",children:["\uD83C\uDF0D ",t.location]}),(0,i.jsx)("div",{className:"jsx-19794a22f856e14f name",children:t.name}),(0,i.jsxs)("div",{className:"jsx-19794a22f856e14f git-id",children:["@",t.login]}),r[0]&&(0,i.jsx)("div",{src:r[0].avatar_url,alt:"profileimg",className:"jsx-19794a22f856e14f image1"}),r[1]&&(0,i.jsx)("div",{src:r[1].avatar_url,alt:"profileimg",className:"jsx-19794a22f856e14f image2"}),r[2]&&(0,i.jsx)("div",{src:r[1].avatar_url,alt:"profileimg",className:"jsx-19794a22f856e14f image2"}),r[3]&&(0,i.jsx)("div",{src:r[1].avatar_url,alt:"profileimg",className:"jsx-19794a22f856e14f image2"}),r[4]&&(0,i.jsx)("div",{src:r[1].avatar_url,alt:"profileimg",className:"jsx-19794a22f856e14f image2"}),(0,i.jsx)("hr",{className:"jsx-19794a22f856e14f line"}),(0,i.jsxs)("div",{className:"jsx-19794a22f856e14f repos1",children:[(0,i.jsxs)("div",{className:"jsx-19794a22f856e14f typelevel-parser1",children:["\uD83D\uDCCC",s[0].name]}),(0,i.jsxs)("div",{className:"jsx-19794a22f856e14f stars1",children:["⭐",s[0].stargazers_count]}),(0,i.jsxs)("div",{className:"jsx-19794a22f856e14f TypeScript1",children:["\uD83D\uDD35",s[0].language]}),(0,i.jsx)("div",{className:"jsx-19794a22f856e14f text1",children:s[0].descriptions})]}),(0,i.jsxs)("div",{className:"jsx-19794a22f856e14f repos2",children:[(0,i.jsxs)("div",{className:"jsx-19794a22f856e14f typelevel-parser2",children:["\uD83D\uDCCC",s[1].name]}),(0,i.jsxs)("div",{className:"jsx-19794a22f856e14f stars2",children:["⭐",s[1].stargazers_count]}),(0,i.jsxs)("div",{className:"jsx-19794a22f856e14f TypeScript2",children:["\uD83D\uDD35",s[1].language]}),(0,i.jsx)("div",{className:"jsx-19794a22f856e14f text2",children:s[1].descriptions})]})]}),(0,i.jsx)("div",{className:"jsx-19794a22f856e14f back",children:(0,i.jsxs)("div",{className:"jsx-19794a22f856e14f flex flex-row items-center justify-center h-full",children:[(0,i.jsx)("div",{className:"jsx-19794a22f856e14f flex-shrink-0",children:(0,i.jsx)("img",{src:"https://github-readme-stats.vercel.app/api?username=".concat(t.login,"&show_icons=true&theme=tokyonight"),className:"jsx-19794a22f856e14f h-60"})}),(0,i.jsx)("div",{className:"jsx-19794a22f856e14f flex-shrink-0",children:(0,i.jsx)("img",{src:"https://github-readme-stats.vercel.app/api/top-langs/?username=".concat(t.login,"&layout=compact&theme=tokyonight"),className:"jsx-19794a22f856e14f h-60"})})]})})]}),(0,i.jsx)(o(),{id:"19794a22f856e14f",children:".card.jsx-19794a22f856e14f{-webkit-transition:-webkit-transform 1s;-moz-transition:-moz-transform 1s;-o-transition:-o-transform 1s;transition:-webkit-transform 1s;transition:-moz-transform 1s;transition:-o-transform 1s;transition:transform 1s;-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;transform-style:preserve-3d;cursor:pointer;-webkit-transform:rotatey(0);-moz-transform:rotatey(0);transform:rotatey(0);position:relative}.back.jsx-19794a22f856e14f,.front.jsx-19794a22f856e14f{-webkit-border-radius:7px;-moz-border-radius:7px;border-radius:7px;color:white;position:absolute;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;backface-visibility:hidden}.back.jsx-19794a22f856e14f{-webkit-transform:rotatey(180deg);-moz-transform:rotatey(180deg);transform:rotatey(180deg)}.profile.jsx-19794a22f856e14f{left:35px;top:15px;width:90px;height:90px;background:rgba(191,255,255,.800000011920929);opacity:1;position:absolute;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;overflow:hidden;background-position:center center;border:.5px solid rgba(61,25,25,1)}.introduction.jsx-19794a22f856e14f{width:125px;left:20px;top:110px;position:absolute;font-size:5px;text-align:center}.followers_num.jsx-19794a22f856e14f{left:10px;top:155px;position:absolute;font-size:10px;font-family:NanumSquare Neo;font-weight:Regular;display:inline-block;white-space:nowrap}.followers.jsx-19794a22f856e14f{position:absolute;top:155px;left:45px;font-size:10px;opacity:.5;font-family:NanumSquare Neo;font-weight:Regular}.following_num.jsx-19794a22f856e14f{left:90px;top:155px;position:absolute;font-size:10px;font-family:NanumSquare Neo;font-weight:Regular}.following.jsx-19794a22f856e14f{position:absolute;top:155px;left:110px;font-size:10px;opacity:.5;font-family:NanumSquare Neo;font-weight:Regular}.organization.jsx-19794a22f856e14f{left:13px;top:175px;position:absolute;font-size:10px;font-family:NanumSquare Neo;font-weight:Regular;display:inline-block;white-space:nowrap}.email.jsx-19794a22f856e14f{left:13px;top:195px;position:absolute;font-size:10px;font-family:NanumSquare Neo;font-weight:Regular;display:inline-block;white-space:nowrap}.location.jsx-19794a22f856e14f{left:11px;top:215px;position:absolute;font-size:10px;font-family:NanumSquare Neo;font-weight:Regular;display:inline-block;white-space:nowrap}.name.jsx-19794a22f856e14f{left:160px;top:20px;position:absolute;font-size:25px;font-family:NanumSquare Neo;font-weight:Heavy;display:inline-block;white-space:nowrap}.git-id.jsx-19794a22f856e14f{left:160px;top:50px;position:absolute;font-size:17px;opacity:.5;font-family:NanumSquare Neo;display:inline-block;white-space:nowrap}.image1.jsx-19794a22f856e14f{position:absolute;width:25px;height:25px;-webkit-border-radius:7px;-moz-border-radius:7px;border-radius:7px;opacity:.6;top:80px;left:160px}.image2.jsx-19794a22f856e14f{position:absolute;width:25px;height:25px;-webkit-border-radius:7px;-moz-border-radius:7px;border-radius:7px;opacity:.6;top:80px;left:190px}.line.jsx-19794a22f856e14f{position:absolute;width:220px;color:#808080;left:160px;top:110px}.repos1.jsx-19794a22f856e14f{position:absolute;-webkit-border-radius:7px;-moz-border-radius:7px;border-radius:7px;border-color:gray;border-width:1px;width:220px;height:50px;left:160px;top:120px}.typelevel-parser1.jsx-19794a22f856e14f{position:relative;left:10px;font-size:10px;color:rgb(0,153,255);font-family:NanumSquare Neo;font-weight:Heavy}.stars1.jsx-19794a22f856e14f{position:relative;top:-13px;left:120px;font-size:10px;font-family:NanumSquare Neo}.TypeScript1.jsx-19794a22f856e14f{position:relative;top:-28px;left:155px;font-size:10px;font-family:NanumSquare Neo}.text1.jsx-19794a22f856e14f{position:relative;left:5px;top:-30px;font-size:10px;font-family:NanumSquare Neo}.repos2.jsx-19794a22f856e14f{position:absolute;-webkit-border-radius:7px;-moz-border-radius:7px;border-radius:7px;border-color:gray;border-width:1px;width:220px;height:50px;left:160px;top:180px}.typelevel-parser2.jsx-19794a22f856e14f{position:relative;left:10px;font-size:10px;color:rgb(0,153,255);font-family:NanumSquare Neo;font-weight:Heavy}.stars2.jsx-19794a22f856e14f{position:relative;top:-13px;left:120px;font-size:10px;font-family:NanumSquare Neo}.TypeScript2.jsx-19794a22f856e14f{position:relative;top:-28px;left:155px;font-size:10px;font-family:NanumSquare Neo}.text2.jsx-19794a22f856e14f{position:relative;left:5px;top:-30px;font-size:10px;font-family:NanumSquare Neo}"})]})]})]})}},1163:function(e,t,s){e.exports=s(6885)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=2522)}),_N_E=e.O()}]);