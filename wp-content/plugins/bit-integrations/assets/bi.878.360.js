import{u as j,k as b,r as s,j as e}from"./main-642.js";import{e as v,F as S}from"./bi.77.82.js";import{S as T}from"./bi.164.918.js";import k from"./bi.395.243.js";import{W as w}from"./bi.839.725.js";import{T as r,t as H}from"./bi.986.742.js";import"./bi.801.726.js";function D({formFields:c,setFlow:m,flow:u,allIntegURL:n}){const p=j(),{formID:l}=b(),[o,x]=s.useState(1),[d,a]=s.useState({show:!1}),[f,g]=s.useState(!1),{syncSpiderLinks:t}=H,[i,h]=s.useState({name:"SyncSpider Web Hooks",type:"SyncSpider",method:"POST",url:"",apiConsole:"https://app.syncspider.com/app/"});return e.jsxs("div",{children:[e.jsx(v,{snack:d,setSnackbar:a}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(T,{step:2,active:o})}),e.jsxs("div",{className:"btcd-stp-page",style:{width:o===1&&1100,height:o===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&e.jsx(r,{title:t==null?void 0:t.title,youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&e.jsx(r,{title:t==null?void 0:t.title,docLink:t==null?void 0:t.docLink}),e.jsx(k,{formID:l,formFields:c,webHooks:i,setWebHooks:h,step:o,setStep:x,setSnackbar:a,create:!0})]}),e.jsx("div",{className:"btcd-stp-page",style:{width:o===2&&"100%",height:o===2&&"auto"},children:e.jsx(w,{step:o,saveConfig:()=>S(u,m,n,i,p,"","",g),isLoading:f})})]})}export{D as default};