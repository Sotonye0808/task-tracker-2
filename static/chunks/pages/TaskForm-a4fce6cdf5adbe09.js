(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[933],{8293:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/TaskForm",function(){return t(1761)}])},1761:function(e,a,t){"use strict";t.r(a);var s=t(5893),r=t(7294),o=t(1163);t(4005);var i=t(6947),d=t(720);a.default=()=>{let[e,a]=(0,r.useState)(""),[t,n]=(0,r.useState)(""),[l,c]=(0,r.useState)(""),[f,m]=(0,r.useState)(!1),[x,u]=(0,r.useState)(!1),b=(0,o.useRouter)(),h=async a=>{if(a.preventDefault(),e&&!x){u(!0);try{if(!(await fetch("/api/add-task",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:e,description:t,date:l,reminder:f})})).ok)throw Error("Failed to add task");b.push("/")}catch(e){console.error("Error adding task:",e),u(!1)}}};return(0,s.jsx)(d.default,{children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col-1"}),(0,s.jsx)("div",{className:"col-10",children:(0,s.jsx)("form",{onSubmit:h,className:"mt-3 row",children:(0,s.jsxs)("div",{className:"col",children:[(0,s.jsx)("div",{className:"col-12 text-center",children:(0,s.jsx)("h2",{className:"col",children:"ADD SOME TASKS!"})}),(0,s.jsxs)("div",{className:"container",children:[(0,s.jsxs)("div",{className:"row",id:"formTaskTitle",children:[(0,s.jsx)("label",{className:"col-1 mt-4",children:"Title:"}),(0,s.jsx)("input",{type:"text",placeholder:"Enter task title",value:e,onChange:e=>a(e.target.value),style:{borderRadius:"0.3rem",border:"0.01px solid #efefff",padding:"5px"}})]}),(0,s.jsxs)("div",{className:"row",id:"formTaskDescription",children:[(0,s.jsx)("label",{className:"col-1 mt-4",children:"Description:"}),(0,s.jsx)("textarea",{rows:3,placeholder:"Enter task description",value:t,onChange:e=>n(e.target.value),style:{borderRadius:"0.3rem",border:"0.01px solid #efefff",padding:"5px"}})]}),(0,s.jsxs)("div",{className:"row",id:"formTaskDate",children:[(0,s.jsx)("label",{className:"col-1  mt-4",children:"Date:"}),(0,s.jsx)("br",{}),(0,s.jsx)("input",{type:"datetime-local",value:l,onChange:e=>c(e.target.value),style:{borderRadius:"0.3rem",border:"0.01px solid #efefff",padding:"5px"}})]}),(0,s.jsxs)("div",{className:"row mt-4",id:"formTaskReminder",children:[(0,s.jsx)("label",{className:"col-11",children:"Set Reminder:"}),(0,s.jsx)("input",{type:"checkbox",className:"col-1",checked:f,onChange:e=>m(e.target.checked),style:{cursor:"pointer"}})]}),(0,s.jsx)("button",{className:"btn btn-primary col-12 mt-4",type:"submit",disabled:x,children:x?"Adding Task...":"Add Task"}),(0,s.jsx)("div",{className:"col mt-2",children:(0,s.jsx)("button",{className:"btn fixed btn-info",onClick:()=>{window.history.back()},children:"Go Back"})})]})]})})}),(0,s.jsx)("div",{className:"col-2"}),(0,s.jsx)("div",{className:"mt-4",children:(0,s.jsx)(i.default,{})})]})})}},6947:function(e,a,t){"use strict";t.r(a);var s=t(5893),r=t(1822),o=t.n(r);t(7294),a.default=()=>(0,s.jsxs)("div",{className:"jsx-8e220493c9bb913b footer",children:[(0,s.jsxs)("p",{className:"jsx-8e220493c9bb913b",children:["Task Tracker \xa9 ",new Date().getFullYear(),(0,s.jsx)("br",{className:"jsx-8e220493c9bb913b"}),"Version ",(0,s.jsx)("strong",{className:"jsx-8e220493c9bb913b",children:"2.1.1"})]}),(0,s.jsx)(o(),{id:"8e220493c9bb913b",children:".footer.jsx-8e220493c9bb913b{left:0;bottom:0;width:100%;text-align:center}.footer.jsx-8e220493c9bb913b p.jsx-8e220493c9bb913b{cursor:pointer;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin:0 auto}"})]})},720:function(e,a,t){"use strict";t.r(a);var s=t(5893),r=t(1822),o=t.n(r),i=t(7294);t(4005);var d=t(9008),n=t.n(d);a.default=e=>{let{children:a}=e,[t,r]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{let e=localStorage.getItem("darkMode");e&&r("true"===e)},[]),(0,i.useEffect)(()=>{let e=document.body;t?e.classList.add("dark-mode"):e.classList.remove("dark-mode"),localStorage.setItem("darkMode",t.toString())},[t]),(0,s.jsxs)("div",{className:"jsx-64af4956f13d6278",children:[(0,s.jsx)(n(),{children:(0,s.jsx)("title",{className:"jsx-64af4956f13d6278",children:"Task Tracker"})}),(0,s.jsx)("div",{className:"jsx-64af4956f13d6278 "+((t?"dark-mode":"light-mode")||""),children:(0,s.jsxs)("div",{className:"jsx-64af4956f13d6278 container",children:[(0,s.jsx)("h1",{className:"jsx-64af4956f13d6278 mt-2 mb-3",children:"TASK TRACKER"}),a]})}),(0,s.jsx)(o(),{id:"64af4956f13d6278",children:'*{-webkit-transition:all.2s ease-in-out;-moz-transition:all.2s ease-in-out;-o-transition:all.2s ease-in-out;transition:all.2s ease-in-out}input[type="text"],input[type="datetime-local"]{borderradius:0.3rem, \r\n            border: 0.01px solid #efefff, \r\n            padding: 5px}input[type="checkbox"]{cursor:pointer}textarea{borderradius:0.3rem, \r\n            border: 0.01px solid #efefff, \r\n            padding: 5px}.dark-mode{height:100vh;background-color:#121212;color:#ffd700}.dark-mode input[type="text"],.dark-mode input[type="datetime-local"],.dark-mode textarea,.dark-mode checkbox{background-color:#121212;color:#ffd700}.dark-mode .card{color:#ffd700}.fixed{position:relative;padding:10px;margin:10px auto;bottom:0}.navbar{position:fixed;top:0;right:0;margin:0;padding:0;overflow:hidden;background-color:#333;width:30%}.navbar ul{list-style-type:none;margin:0 auto;padding:0;overflow:hidden;background-color:#333;width:100%}.navbar ul li{text-align:center}.navbar a,.navbar li label{float:left;display:block;width:100%;color:#f2f2f2;text-align:center;padding:14px 16px;text-decoration:none;margin-bottom:0}.navbar a:hover{background-color:#ddd;color:black}.navbar li label:hover{cursor:pointer}'})]})}},4005:function(){},9008:function(e,a,t){e.exports=t(7828)},1163:function(e,a,t){e.exports=t(9090)}},function(e){e.O(0,[822,866,888,774,179],function(){return e(e.s=8293)}),_N_E=e.O()}]);