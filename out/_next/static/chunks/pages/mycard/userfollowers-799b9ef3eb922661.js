(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[672],{3144:function(e){"use strict";let t=self.fetch.bind(self);e.exports=t,e.exports.default=e.exports},5144:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mycard/userfollowers",function(){return s(6333)}])},6333:function(e,t,s){"use strict";s.r(t);var n=s(5893),i=s(7294),l=s(3144),r=s.n(l);t.default=e=>{let{username:t}=e,[s,l]=(0,i.useState)([]);return(0,i.useEffect)(()=>{let e=async()=>{let e=await r()("https://api.github.com/users/".concat(t,"/followers")),s=await e.json();l(s)};e()},[t]),(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:"Followers:"}),(0,n.jsx)("ul",{children:s.map(e=>(0,n.jsx)("li",{children:e.login},e.id))})]})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5144)}),_N_E=e.O()}]);