import{u as b,k as S,r as o,j as e}from"./main-642.js";import{e as k,F as v}from"./bi.77.82.js";import{S as g}from"./bi.164.918.js";import w from"./bi.395.243.js";import{W as I}from"./bi.839.725.js";import{T as c,t as T}from"./bi.986.742.js";import"./bi.801.726.js";function P({formFields:i,setFlow:u,flow:p,allIntegURL:n}){const l=b(),{formID:d}=S(),[s,m]=o.useState(1),[x,a]=o.useState({show:!1}),[h,f]=o.useState(!1),{integromatLinks:t}=T,[r,j]=o.useState({name:"Make(Integromat) Web Hooks",type:"Make(Integromat)",method:"POST",url:"",apiConsole:"https://www.integromat.com/hooks/"});return e.jsxs("div",{children:[e.jsx(k,{snack:x,setSnackbar:a}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(g,{step:2,active:s})}),e.jsxs("div",{className:"btcd-stp-page",style:{width:s===1&&1100,height:s===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&e.jsx(c,{title:t==null?void 0:t.title,youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&e.jsx(c,{title:t==null?void 0:t.title,docLink:t==null?void 0:t.docLink}),e.jsx(w,{formID:d,formFields:i,webHooks:r,setWebHooks:j,step:s,setStep:m,setSnackbar:a,create:!0})]}),e.jsx("div",{className:"btcd-stp-page",style:{width:s===2&&"100%",height:s===2&&"auto"},children:e.jsx(I,{step:s,saveConfig:()=>v(p,u,n,r,l,"","",f),isLoading:h})})]})}export{P as default};
