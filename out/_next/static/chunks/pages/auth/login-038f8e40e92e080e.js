(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[344],{2505:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/login",function(){return s(4800)}])},91:function(e,t,s){"use strict";s.d(t,{Z:function(){return n}});var r=s(5893);function n(){return(0,r.jsx)("footer",{className:"text-gray-600 body-font",children:(0,r.jsxs)("div",{className:"container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col",children:[(0,r.jsx)("a",{className:"flex title-font font-medium items-center md:justify-start justify-center text-gray-900",children:(0,r.jsx)("span",{className:"ml-3 text-xl",children:"My IT"})}),(0,r.jsxs)("p",{className:"text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4",children:["\xa92023 My IT —",(0,r.jsx)("a",{href:"https://twitter.com/knyttneve",className:"text-gray-600 ml-1",rel:"noopener noreferrer",target:"_blank",children:"@software_project"})]}),(0,r.jsxs)("span",{className:"inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start",children:[(0,r.jsx)("a",{className:"text-gray-500",children:(0,r.jsx)("svg",{fill:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:"w-5 h-5",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{d:"M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"})})}),(0,r.jsx)("a",{className:"ml-3 text-gray-500",children:(0,r.jsx)("svg",{fill:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:"w-5 h-5",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{d:"M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"})})}),(0,r.jsx)("a",{className:"ml-3 text-gray-500",children:(0,r.jsxs)("svg",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:"w-5 h-5",viewBox:"0 0 24 24",children:[(0,r.jsx)("rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5"}),(0,r.jsx)("path",{d:"M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"})]})})]})]})})}},3592:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});var r=s(5893),n=s(1664),l=s.n(n),a=s(3299);function i(){let{data:e,status:t}=(0,a.useSession)();if("authenticated"===t){var s;return(0,r.jsx)("header",{className:"text-gray-600 body-font",children:(0,r.jsxs)("div",{className:"container mx-auto flex flex-wrap p-5 h-20 flex-col md:flex-row items-center",children:[(0,r.jsx)("a",{className:"flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0",children:(0,r.jsx)("span",{className:"ml-3 text-xl",children:"My IT"})}),(0,r.jsxs)("nav",{className:"md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400   flex flex-wrap items-center text-base justify-center",children:[(0,r.jsx)(l(),{href:"/",children:(0,r.jsx)("p",{className:"mr-5 hover:text-gray-900",children:"Home"})}),(0,r.jsx)(l(),{href:"/following_card",children:(0,r.jsx)("p",{className:"mr-5 hover:text-gray-900",children:"Following Card"})}),(0,r.jsx)(l(),{href:"/mycard",children:(0,r.jsx)("p",{className:"mr-5 hover:text-gray-900",children:"My Card"})})]}),(0,r.jsx)("button",{onClick:()=>(0,a.signOut)(),children:(0,r.jsxs)("p",{className:"mr-5 hover:text-gray-900",children:["Hello ",null==e?void 0:null===(s=e.user)||void 0===s?void 0:s.name,"!   Logout"]})}),(0,r.jsx)("button",{children:(0,r.jsx)("img",{src:"/github_logo.png",alt:"github_image",width:30,height:30})})]})})}return(0,r.jsx)("header",{className:"text-gray-600 body-font",children:(0,r.jsxs)("div",{className:"container mx-auto flex flex-wrap p-5 h-20 flex-col md:flex-row items-center",children:[(0,r.jsx)("a",{className:"flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0",children:(0,r.jsx)("span",{className:"ml-3 text-xl",children:"My IT"})}),(0,r.jsx)("nav",{className:"md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400   flex flex-wrap items-center text-base justify-center",children:(0,r.jsx)(l(),{href:"/",children:(0,r.jsx)("p",{className:"mr-5 hover:text-gray-900",children:"Home"})})}),(0,r.jsx)(l(),{href:"/auth/login",children:(0,r.jsx)("p",{className:"mr-5 hover:text-gray-900",children:"Login"})}),(0,r.jsx)("button",{children:(0,r.jsx)("img",{src:"/github_logo.png",alt:"github_image",width:30,height:30})})]})})}},4800:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return c}});var r=s(5893),n=s(3592),l=s(91),a=s(1163),i=s(3299);function c(){let{data:e,status:t}=(0,i.useSession)();if("authenticated"===t){console.log(e.user.name);let t=(0,a.useRouter)();t.push("http://localhost:3000/")}return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.Z,{}),(0,r.jsx)("section",{className:"text-gray-600 body-font",children:(0,r.jsxs)("div",{className:"container px-5 py-24 mx-auto flex flex-wrap items-center",children:[(0,r.jsxs)("div",{className:"lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0",children:[(0,r.jsx)("h1",{className:"title-font font-medium text-3xl text-gray-900",children:"My IT"}),(0,r.jsx)("p",{className:"leading-relaxed mt-4",children:"My IT에서 자신만의 특별한 명함을 만들고 공유해 보세요."})]}),(0,r.jsxs)("div",{className:"lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0",children:[(0,r.jsx)("h2",{className:"text-gray-900 text-lg font-medium title-font mb-5",children:"Github로 연결하기"}),(0,r.jsx)("center",{children:(0,r.jsx)("img",{src:"/github_logo.png",alt:"github_image",width:200,height:200})}),(0,r.jsx)("button",{onClick:()=>(0,i.signIn)("github"),className:"text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-black rounded text-lg",children:"Sign in with Github Login"})]})]})}),(0,r.jsx)(l.Z,{})]})}},1163:function(e,t,s){e.exports=s(6885)}},function(e){e.O(0,[664,774,888,179],function(){return e(e.s=2505)}),_N_E=e.O()}]);