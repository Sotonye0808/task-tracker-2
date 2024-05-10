(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(6209)}])},6947:function(e,a,s){"use strict";s.r(a);var t=s(5893),r=s(1822),n=s.n(r);s(7294),a.default=()=>(0,t.jsxs)("div",{className:"jsx-8e220493c9bb913b footer",children:[(0,t.jsxs)("p",{className:"jsx-8e220493c9bb913b",children:["Task Tracker \xa9 ",new Date().getFullYear(),(0,t.jsx)("br",{className:"jsx-8e220493c9bb913b"}),"Version ",(0,t.jsx)("strong",{className:"jsx-8e220493c9bb913b",children:"2.1.1"})]}),(0,t.jsx)(n(),{id:"8e220493c9bb913b",children:".footer.jsx-8e220493c9bb913b{left:0;bottom:0;width:100%;text-align:center}.footer.jsx-8e220493c9bb913b p.jsx-8e220493c9bb913b{cursor:pointer;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin:0 auto}"})]})},720:function(e,a,s){"use strict";s.r(a);var t=s(5893),r=s(1822),n=s.n(r),l=s(7294);s(4005);var o=s(9008),i=s.n(o);a.default=e=>{let{children:a}=e,[s,r]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{let e=localStorage.getItem("darkMode");e&&r("true"===e)},[]),(0,l.useEffect)(()=>{let e=document.body;s?e.classList.add("dark-mode"):e.classList.remove("dark-mode"),localStorage.setItem("darkMode",s.toString())},[s]),(0,t.jsxs)("div",{className:"jsx-64af4956f13d6278",children:[(0,t.jsxs)(i(),{children:[(0,t.jsx)("title",{className:"jsx-64af4956f13d6278",children:"Task Tracker"}),(0,t.jsx)("meta",{name:"description",content:"Task tracker app built with Next.js",className:"jsx-64af4956f13d6278"}),(0,t.jsx)("link",{rel:"icon",href:"/task.ico",className:"jsx-64af4956f13d6278"}),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1",className:"jsx-64af4956f13d6278"}),(0,t.jsx)("meta",{name:"theme-color",content:"#000000",className:"jsx-64af4956f13d6278"}),(0,t.jsx)("link",{rel:"apple-touch-icon",href:"/task.ico",className:"jsx-64af4956f13d6278"})]}),(0,t.jsx)("div",{className:"jsx-64af4956f13d6278 "+((s?"dark-mode":"light-mode")||""),children:(0,t.jsxs)("div",{className:"jsx-64af4956f13d6278 container",children:[(0,t.jsx)("h1",{className:"jsx-64af4956f13d6278 mt-2 mb-3",children:"TASK TRACKER"}),a]})}),(0,t.jsx)(n(),{id:"64af4956f13d6278",children:'*{-webkit-transition:all.2s ease-in-out;-moz-transition:all.2s ease-in-out;-o-transition:all.2s ease-in-out;transition:all.2s ease-in-out}input[type="text"],input[type="datetime-local"]{borderradius:0.3rem, \r\n            border: 0.01px solid #efefff, \r\n            padding: 5px}input[type="checkbox"]{cursor:pointer}textarea{borderradius:0.3rem, \r\n            border: 0.01px solid #efefff, \r\n            padding: 5px}.dark-mode{height:100vh;background-color:#121212;color:#ffd700}.dark-mode input[type="text"],.dark-mode input[type="datetime-local"],.dark-mode textarea,.dark-mode checkbox{background-color:#121212;color:#ffd700}.dark-mode .card{color:#ffd700}.fixed{position:relative;padding:10px;margin:10px auto;bottom:0}.navbar{position:fixed;top:0;right:0;margin:0;padding:0;overflow:hidden;background-color:#333;width:30%}.navbar ul{list-style-type:none;margin:0 auto;padding:0;overflow:hidden;background-color:#333;width:100%}.navbar ul li{text-align:center}.navbar a,.navbar li label{float:left;display:block;width:100%;color:#f2f2f2;text-align:center;padding:14px 16px;text-decoration:none;margin-bottom:0}.navbar a:hover{background-color:#ddd;color:black}.navbar li label:hover{cursor:pointer}'})]})}},6209:function(e,a,s){"use strict";s.r(a),s.d(a,{__N_SSP:function(){return m}});var t=s(5893),r=s(1822),n=s.n(r),l=s(7294),o=s(1664),i=s.n(o);s(4005);var c=s(6947),d=s(720),m=!0;a.default=e=>{let{users:a,error:s}=e,[r,o]=(0,l.useState)(!1),[m,h]=(0,l.useState)([]),[x,f]=(0,l.useState)(!1),[u,b]=(0,l.useState)(null),[k,j]=(0,l.useState)(""),[p,g]=(0,l.useState)(a),[v,N]=(0,l.useState)(!1);(0,l.useEffect)(()=>{let e=localStorage.getItem("darkMode");e&&o("true"===e)},[]),(0,l.useEffect)(()=>{let e=document.body;r?e.classList.add("dark-mode"):e.classList.remove("dark-mode"),localStorage.setItem("darkMode",r.toString())},[r]),(0,l.useEffect)(()=>{var e;let s=localStorage.getItem("lastResetStatsDate"),t=new Date().toDateString(),r=new Date(null===(e=a[0])||void 0===e?void 0:e.lastUpdated).toDateString();if(!s||s!==t&&s!==r){let e=s?new Date(s).getDay():null,a=new Date().getDay(),t=s?S(new Date(s)):null,n=S(new Date),l=s?new Date(s).getMonth():null,o=new Date().getMonth();e!==a&&y(),t!==n&&w(),l!==o&&T(),localStorage.setItem("lastResetStatsDate",r)}},[a]);let y=async()=>{try{if(!(await fetch("/api/reset-daily-stats",{method:"POST"})).ok)throw Error("Failed to reset daily statistics")}catch(e){console.error("Error resetting daily statistics:",e)}},w=async()=>{try{if(!(await fetch("/api/reset-weekly-stats",{method:"POST"})).ok)throw Error("Failed to reset weekly statistics")}catch(e){console.error("Error resetting weekly statistics:",e)}},T=async()=>{try{if(!(await fetch("/api/reset-monthly-stats",{method:"POST"})).ok)throw Error("Failed to reset monthly statistics")}catch(e){console.error("Error resetting monthly statistics:",e)}},S=e=>{let a=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()));a.setUTCDate(a.getUTCDate()+4-(a.getUTCDay()||7));let s=new Date(Date.UTC(a.getUTCFullYear(),0,1));return Math.ceil(((a.getTime()-s.getTime())/864e5+1)/7)},D=()=>{o(!r)};if(!a||0===a.length)return console.log("No users found"),(0,t.jsxs)(d.default,{children:[(0,t.jsxs)("div",{className:"row",children:[(0,t.jsxs)("main",{role:"main",className:"col-8",children:[(0,t.jsx)("h2",{className:"mt-2",children:"Task List"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:"No users found"}),(0,t.jsx)("p",{children:"Why don't you try adding some tasks?"})]})]}),(0,t.jsxs)("nav",{className:"col navbar mt-2",children:[(0,t.jsxs)("ul",{className:"nav flex-column",children:[(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(i(),{href:"/",legacyBehavior:!0,passHref:!0,children:(0,t.jsx)("a",{className:"nav-link",children:"Tasks"})})}),(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(i(),{href:"./TaskForm",legacyBehavior:!0,passHref:!0,children:(0,t.jsx)("a",{className:"nav-link",children:"Add Tasks"})})}),(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(i(),{href:"./Stats",legacyBehavior:!0,passHref:!0,children:(0,t.jsx)("a",{className:"nav-link",children:"Stats"})})}),(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(i(),{href:"./About",legacyBehavior:!0,passHref:!0,children:(0,t.jsx)("a",{className:"nav-link",children:"About"})})})]}),(0,t.jsx)("button",{className:"btn fixed btn-dark mt-3",onClick:D,children:r?"Light Mode":"Dark Mode"})]})]}),(0,t.jsx)("div",{className:"mt-5",children:(0,t.jsx)(c.default,{})})]});if(s)return(0,t.jsxs)(d.default,{children:[(0,t.jsxs)("div",{className:"row",children:[(0,t.jsxs)("main",{role:"main",className:"col-8",children:[(0,t.jsx)("h2",{className:"mt-2",children:"Task List"}),(0,t.jsx)("div",{children:(0,t.jsx)("p",{children:s})})]}),(0,t.jsxs)("nav",{className:"col navbar mt-2",children:[(0,t.jsxs)("ul",{className:"nav flex-column",children:[(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(i(),{href:"/",legacyBehavior:!0,passHref:!0,children:(0,t.jsx)("a",{className:"nav-link",children:"Tasks"})})}),(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(i(),{href:"./TaskForm",legacyBehavior:!0,passHref:!0,children:(0,t.jsx)("a",{className:"nav-link",children:"Add Tasks"})})}),(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(i(),{href:"./Stats",legacyBehavior:!0,passHref:!0,children:(0,t.jsx)("a",{className:"nav-link",children:"Stats"})})}),(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(i(),{href:"./About",legacyBehavior:!0,passHref:!0,children:(0,t.jsx)("a",{className:"nav-link",children:"About"})})})]}),(0,t.jsx)("button",{className:"btn fixed btn-dark mt-3",onClick:D,children:r?"Light Mode":"Dark Mode"})]})]}),(0,t.jsx)("div",{className:"mt-5",children:(0,t.jsx)(c.default,{})})]});let E=e=>{h(a=>a.includes(e)?a.filter(a=>a!==e):[...a,e])},C=async()=>{if(u&&!x){f(!0);try{if(!(await fetch("/api/remove-task?taskId=".concat(u),{method:"DELETE",headers:{"Content-Type":"application/json"}})).ok)throw Error("Failed to remove task");let e=[...p],a=e[0].tasks.filter(e=>e._id!==u);e[0].tasks=a,g(e)}catch(e){console.error("Error removing task:",e)}finally{f(!1),b(null),N(!1)}}},_=e=>{b(e._id),j(e.title),N(!0)};return(0,t.jsxs)(d.default,{children:[(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"row",children:[(0,t.jsxs)("main",{role:"main",className:"col-8",children:[(0,t.jsx)("h2",{className:"mt-2",children:"Task List"}),a.map(e=>(0,t.jsx)("div",{className:"mb-4",children:(0,t.jsx)("ul",{className:"list-group",children:e.tasks?e.tasks.map((e,a)=>(0,t.jsxs)("li",{className:e.reminder?"list-group-item task-item fw-bold text-uppercase":"list-group-item task-item",onClick:()=>E(e._id),children:[(0,t.jsx)("h4",{className:e.reminder?"fw-bold":"",children:e.title}),m.includes(e._id)&&(0,t.jsxs)("div",{children:[(0,t.jsxs)("p",{children:[(0,t.jsx)("u",{children:"Description"}),": ",e.description]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("u",{children:"Date & Time"}),": ",new Date(e.date).toLocaleString("en-GB",{dateStyle:"short",timeStyle:"short"})]}),(0,t.jsx)("button",{onClick:()=>_(e),disabled:x,className:"btn btn-danger",children:x?"Removing Task...":"Remove"})]})]},a)):(0,t.jsx)("div",{children:(0,t.jsx)("p",{children:"No tasks found"})})})},e._id))]}),(0,t.jsxs)("nav",{className:"col navbar mt-2",children:[(0,t.jsxs)("ul",{className:"nav flex-column",children:[(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(i(),{href:"/",legacyBehavior:!0,passHref:!0,children:(0,t.jsx)("a",{className:"nav-link",children:"Tasks"})})}),(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(i(),{href:"./TaskForm",legacyBehavior:!0,passHref:!0,children:(0,t.jsx)("a",{className:"nav-link",children:"Add Tasks"})})}),(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(i(),{href:"./Stats",legacyBehavior:!0,passHref:!0,children:(0,t.jsx)("a",{className:"nav-link",children:"Stats"})})}),(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(i(),{href:"./About",legacyBehavior:!0,passHref:!0,children:(0,t.jsx)("a",{className:"nav-link",children:"About"})})})]}),(0,t.jsx)("button",{className:"btn fixed btn-dark mt-3",onClick:D,children:r?"Light Mode":"Dark Mode"})]})]}),(0,t.jsx)("div",{className:"mt-5",children:(0,t.jsx)(c.default,{})})]}),(0,t.jsxs)("div",{className:n().dynamic([["1407a19386d133c0",[v?"block":"none"]]])+" modal text-center",children:[(0,t.jsx)("header",{className:n().dynamic([["1407a19386d133c0",[v?"block":"none"]]]),children:(0,t.jsxs)("div",{className:n().dynamic([["1407a19386d133c0",[v?"block":"none"]]])+" row",children:[(0,t.jsx)("div",{className:n().dynamic([["1407a19386d133c0",[v?"block":"none"]]])+" col-2"}),(0,t.jsx)("div",{className:n().dynamic([["1407a19386d133c0",[v?"block":"none"]]])+" col-8 text-center",children:(0,t.jsx)("h2",{className:n().dynamic([["1407a19386d133c0",[v?"block":"none"]]]),children:"Confirmation"})}),(0,t.jsx)("div",{className:n().dynamic([["1407a19386d133c0",[v?"block":"none"]]])+" col-2",children:(0,t.jsx)("button",{className:n().dynamic([["1407a19386d133c0",[v?"block":"none"]]]),children:(0,t.jsx)("span",{"aria-hidden":"true",onClick:()=>N(!1),className:n().dynamic([["1407a19386d133c0",[v?"block":"none"]]]),children:"\xd7"})})})]})}),(0,t.jsxs)("div",{className:n().dynamic([["1407a19386d133c0",[v?"block":"none"]]])+" modal-message",children:[(0,t.jsxs)("p",{className:n().dynamic([["1407a19386d133c0",[v?"block":"none"]]]),children:['Are you sure you want to remove the task "',k,'"?']})," ",(0,t.jsx)("p",{className:n().dynamic([["1407a19386d133c0",[v?"block":"none"]]]),children:"This action cannot be undone!"})]}),(0,t.jsxs)("div",{className:n().dynamic([["1407a19386d133c0",[v?"block":"none"]]])+" modal-footer row",children:[(0,t.jsx)("button",{onClick:()=>N(!1),className:n().dynamic([["1407a19386d133c0",[v?"block":"none"]]])+" btn btn-secondary col-4",children:"Cancel"}),(0,t.jsx)("button",{onClick:C,className:n().dynamic([["1407a19386d133c0",[v?"block":"none"]]])+" btn btn-danger col-4",children:"Remove"})]}),(0,t.jsx)(n(),{id:"1407a19386d133c0",dynamic:[v?"block":"none"],children:'*{-webkit-transition:all.2s ease-in-out;-moz-transition:all.2s ease-in-out;-o-transition:all.2s ease-in-out;transition:all.2s ease-in-out}body{background-color:#fff;color:#000}.dark-mode{background-color:#121212;color:#ffd700}.dark-mode input[type="text"],.dark-mode input[type="datetime-local"],.dark-mode textarea,.dark-mode .task-item,.dark-mode ul{background-color:#121212;color:#ffd700}.dark-mode .task-item:hover{background-color:#333}.dark-mode .card{color:#ffd700}.fixed{position:relative;padding:10px;margin:10px auto;bottom:0}.navbar{position:fixed;top:0;right:0;margin:0;padding:0;overflow:hidden;background-color:#333;width:30%}.navbar ul{list-style-type:none;margin:0 auto;padding:0;overflow:hidden;background-color:#333;width:100%}.navbar ul li{text-align:center}.navbar a,.navbar li label{float:left;display:block;width:100%;color:#f2f2f2;text-align:center;padding:14px 16px;text-decoration:none;margin-bottom:0}.navbar a:hover{background-color:#ddd;color:black}.navbar li label:hover{cursor:pointer}.task-item{cursor:pointer}.task-item:hover{background-color:#f9f9f9}input[type="text"],form input[type="datetime-local"],form textarea{-webkit-border-radius:30px;-moz-border-radius:30px;border-radius:30px}.modal{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);display:'.concat(v?"block":"none","}.modal header{background-color:#333;color:#fff;padding:1rem}.modal-message{background-color:#fff;padding:1rem}.modal-footer{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;margin:0 auto;left:0;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:1rem}.modal header button{margin-left:1rem;-webkit-border-radius:25%;-moz-border-radius:25%;border-radius:25%;background-color:transparent}.modal header button:hover{background-color:#f00}.modal header button span{font-weight:bold;font-size:1rem;color:#fff}.dark-mode .modal{background-color:rgba(0,0,0,.5)}.dark-mode .modal header{background-color:##333;color:#ffd700}.dark-mode .modal-message{background-color:#121212;color:#ffd700}.dark-mode .modal-footer{background-color:#121212}")})]})]})}}},function(e){e.O(0,[822,866,443,888,774,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);