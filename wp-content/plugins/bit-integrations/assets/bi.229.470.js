var _=Object.defineProperty;var h=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var N=(l,a,s)=>a in l?_(l,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):l[a]=s,L=(l,a)=>{for(var s in a||(a={}))A.call(a,s)&&N(l,s,a[s]);if(h)for(var s of h(a))w.call(a,s)&&N(l,s,a[s]);return l};import{u as I,r as t,j as r}from"./main-642.js";import{e as P,_ as R,I as E,F as T,d as c}from"./bi.77.82.js";import{S as B}from"./bi.164.918.js";import D from"./bi.655.329.js";import{h as W,c as g}from"./bi.491.905.js";import{M as z}from"./bi.477.906.js";import"./bi.986.742.js";function X({formFields:l,setFlow:a,flow:s,allIntegURL:y}){const f=I(),[x,b]=t.useState(!1),[m,k]=t.useState({}),[i,p]=t.useState(1),[C,u]=t.useState({show:!1}),S=[{key:"name",label:"Name",required:!0},{key:"address1",label:"Address1",required:!1},{key:"address2",label:"Address2",required:!1},{key:"city",label:"City",required:!1},{key:"locality",label:"Locality",required:!1},{key:"postal",label:"Postal",required:!1},{key:"country",label:"Country",required:!1},{key:"website",label:"Website",required:!1},{key:"phone",label:"Phone",required:!1},{key:"leadSource",label:"Lead Source",required:!1},{key:"hourlyAmount",label:"Hourly Amount",required:!1},{key:"currency",label:"Currency",required:!1},{key:"notes",label:"Notes",required:!1},{key:"firstName",label:"Contact First Name",required:!1},{key:"lastName",label:"Contact Last Name",required:!1},{key:"email",label:"Contact Email",required:!1}],M=[{key:"email",label:"Email Address",required:!0},{key:"first",label:"First Name",required:!1},{key:"last",label:"Last Name",required:!1},{key:"phone",label:"Phone",required:!1},{key:"notes",label:"Notes",required:!1}],v=[{key:"name",label:"Opportunity Name",required:!0},{key:"description",label:"Description",required:!1},{key:"value",label:"Value",required:!1},{key:"firstName",label:"Lead First Name",required:!1},{key:"lastName",label:"Lead Last Name",required:!1},{key:"email",label:"Lead Email",required:!1},{key:"phone",label:"Lead Phone",required:!1},{key:"role",label:"Lead Role",required:!1},{key:"businessName",label:"Lead Business Name",required:!1},{key:"website",label:"Lead Website",required:!1},{key:"address1",label:"Lead Address 1",required:!1},{key:"address2",label:"Lead Address 2",required:!1},{key:"city",label:"Lead City",required:!1},{key:"locality",label:"Lead Locality",required:!1},{key:"postal",label:"Lead Postal",required:!1},{key:"country",label:"Lead Country",required:!1},{key:"sourceUrl",label:"Lead Source Url",required:!1},{key:"leadSource",label:"Lead Source",required:!1}],[e,d]=t.useState({name:"MoxieCRM",type:"MoxieCRM",api_key:"",api_url:"",field_map:[{formField:"",moxiecrmFormField:""}],actionName:"",clientFields:S,contactFields:M,opportunityFields:v,actions:{}}),j=()=>{b(!0),T(s,a,y,e,f,"","",b).then(n=>{var q;n.success?(c.success((q=n.data)==null?void 0:q.msg),f(y)):c.error(n.data||n)})},F=o=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!g(e)){c.error("Please map mandatory fields");return}e.field_map.length>0&&p(o)};return r.jsxs("div",{children:[r.jsx(P,{snack:C,setSnackbar:u}),r.jsx("div",{className:"txt-center mt-2",children:r.jsx(B,{step:3,active:i})}),r.jsx(D,{moxiecrmConf:e,setMoxieCRMConf:d,step:i,setStep:p,loading:m,setLoading:k,setSnackbar:u}),r.jsxs("div",{className:"btcd-stp-page",style:L({},i===2&&{width:900,height:"auto",overflow:"visible"}),children:[r.jsx(z,{formFields:l,handleInput:o=>W(o,e,d),moxiecrmConf:e,setMoxieCRMConf:d,loading:m,setLoading:k,setSnackbar:u}),(e==null?void 0:e.actionName)&&r.jsxs("button",{onClick:()=>F(3),disabled:!g(e),className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[R("Next","bit-integrations")," "," ",r.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(e==null?void 0:e.actionName)&&r.jsx(E,{step:i,saveConfig:()=>j(),isLoading:x,dataConf:e,setDataConf:d,formFields:l})]})}export{X as default};
