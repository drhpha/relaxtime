import{u as b,k as j,r as a,j as t}from"./main-642.js";import{e as T,_ as S,I as _,F as v}from"./bi.77.82.js";import{B as I}from"./bi.801.726.js";import{S as k}from"./bi.164.918.js";import y from"./bi.165.244.js";import{T as C}from"./bi.730.728.js";import"./bi.970.727.js";import"./bi.986.742.js";import"./bi.846.701.js";import"./bi.728.729.js";/* empty css          */function R({formFields:m,setFlow:l,flow:d,allIntegURL:f}){const x=b(),{formID:c}=j(),[o,n]=a.useState(!1),[s,p]=a.useState(1),[u,i]=a.useState({show:!1}),[e,r]=a.useState({name:"Telegram",type:"Telegram",parse_mode:"HTML",bot_api_key:"",chat_id:"",body:"",actions:{}}),h=g=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),g===3&&e.name!==""&&e.chat_id&&p(g)};return t.jsxs("div",{children:[t.jsx(T,{snack:u,setSnackbar:i}),t.jsx("div",{className:"txt-center mt-2",children:t.jsx(k,{step:3,active:s})}),t.jsx(y,{formID:c,telegramConf:e,setTelegramConf:r,step:s,setstep:p,isLoading:o,setIsLoading:n,setSnackbar:i}),t.jsxs("div",{className:"btcd-stp-page",style:{width:s===2&&900,height:s===2&&"auto",minHeight:s===2&&"200px"},children:[t.jsx(C,{formID:c,formFields:m,telegramConf:e,setTelegramConf:r,isLoading:o,setIsLoading:n,setSnackbar:i}),t.jsx("br",{}),t.jsx("br",{}),t.jsxs("button",{onClick:()=>h(3),disabled:e.chat_id==="",className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[S("Next","bit-integrations"),t.jsx(I,{className:"ml-1 rev-icn"})]})]}),t.jsx(_,{step:s,saveConfig:()=>v(d,l,f,e,x,0,!1,n),isLoading:o,dataConf:e,setDataConf:r,formFields:m})]})}export{R as default};
