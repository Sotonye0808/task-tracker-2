"use strict";(()=>{var e={};e.id=52,e.ids=[52],e.modules={8013:e=>{e.exports=require("mongodb")},145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},6249:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},3937:(e,t,r)=>{r.r(t),r.d(t,{config:()=>c,default:()=>l,routeModule:()=>p});var n={};r.r(n),r.d(n,{default:()=>u});var o=r(1802),s=r(7153),a=r(6249),i=r(1053),d=r(8013);async function u(e,t){if("DELETE"===e.method)try{let r=(await i.Z).db("test"),n=`::ffff:${e.headers["x-real-ip"]||e.connection.remoteAddress}`,{taskId:o}=e.query,s=new d.ObjectId(o);await r.collection("userdatas").updateOne({userId:n},{$pull:{tasks:{_id:s}},$inc:{"daily.tasksRemoved":1,"weekly.tasksRemoved":1,"monthly.tasksRemoved":1},$set:{lastUpdated:new Date}},{upsert:!0}),t.status(200).json({message:"Task removed successfully"})}catch(e){console.error(e),t.status(500).json({error:"Internal server error"})}else t.status(405).json({error:"Method Not Allowed"})}let l=(0,a.l)(n,"default"),c=(0,a.l)(n,"config"),p=new o.PagesAPIRouteModule({definition:{kind:s.x.PAGES_API,page:"/api/remove-task",pathname:"/api/remove-task",bundlePath:"",filename:""},userland:n})},1053:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(8013);if(!process.env.MONGODB_URI)throw Error('Invalid/Missing environment variable: "MONGODB_URI"');let o=process.env.MONGODB_URI,s={serverApi:{version:n.ServerApiVersion.v1,strict:!0,deprecationErrors:!0}},a=new n.MongoClient(o,s).connect()},7153:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},1802:(e,t,r)=>{e.exports=r(145)}};var t=require("../../webpack-api-runtime.js");t.C(e);var r=t(t.s=3937);module.exports=r})();